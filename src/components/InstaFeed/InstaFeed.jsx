// import React, { useEffect, useState, useContext } from 'react';
// import myContext from '../../context/myContext';
// import { textLanguages as textOptions } from '../../data/languages';
// import { AiOutlineInstagram as InstagramIcon } from 'react-icons/ai';
// import './insta-feed.css';

// function InstaFeed() {
//   const [feed, setFeed] = useState([]);
//   const [testToken, setTestToken] = useState();

//   const { textLanguage } = useContext(myContext);

//   const text = textOptions[textLanguage];

//   // const getInstaFeed = async () => {
//   //   const token = process.env.REACT_APP_INSTA_TOKEN;
//   //   // console.log('Data ->', process.env.REACT_APP_INSTA_TOKEN);
//   //   const fields = "media_url,media_type,permalink,thumbnail_url";
//   //   const limit = 6;

//   //   const url = `https://graph.instagram.com/me/media?access_token=${token}&&fields=${fields}&&limit=${limit}`;
//   //   try {
//   //     const response = await fetch(url);
//   //     const data = await response.json();
//   //     if (data.error) throw new Error(data.error.message)

//   //     setFeed(data.data);
//   //     console.log('Data ->', data);
//   //   } catch (error) {
//   //     console.log('Erro ->', error);
//   //   }
//   // };

//   const getInstaFeed = async () => {
//     try {
//       const tokenResponse = await fetch('https://www.utopika.com.br/get-token.php');
//       const tokenData = await tokenResponse.json();
//       const token = tokenData.token;

//       // setTestToken(token)

//       if (!token) throw new Error("Token não encontrado.");

//       const fields = "media_url,media_type,permalink,thumbnail_url";
//       const limit = 6;
//       const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}&limit=${limit}`;

//       // em seguida, buscar o feed do instagram usando o token
//       const response = await fetch(url);
//       const data = await response.json();
//       if (data.error) throw new Error(data.error.message);

//       setFeed(data.data);
//       // console.log('Data ->', data);
//     } catch (error) {
//       console.log('Erro ->', error);
//     }
//   };

//   useEffect(() => {
//     getInstaFeed();
//   }, []);

//   // useEffect(() => {
//   //   console.log('TESTE TOKEN: ', testToken)
//   // }, [testToken]);

//   // useEffect(() => {
//   //   console.log(feed)
//   // }, [feed])

//   return (
//     <>
//       {feed.length > 0 ?

//         <section className="instafeed--container">
//           <div className="instafeed--grid">
//             <div className="instafeed--grid-title">
//               <i className="instafeed--icon"><InstagramIcon /></i>
//               <h3>{text.instaFeed.title}</h3>
//             </div>
//             <div className="instafeed--grid-media">
//               {feed?.map((item) => {
//                 return (
//                   <div key={item.id} className="instafeed--media-wrapper">
//                     <a href={item.permalink} target="_blank" rel="noreferrer">
//                       {item.media_type === "IMAGE" ?
//                         <img className="instafeed--media" alt="" src={item.media_url} /> :
//                         <video className="instafeed--media" muted autoPlay>
//                           <source src={item.media_url} />
//                         </video>
//                       }
//                     </a>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//         </section>
//         :
//         <div style={{ marginBottom: '2rem' }} />
//       }
//     </>
//   )
// };

// export default InstaFeed;


import React, { useEffect, useState, useContext } from 'react';
import myContext from '../../context/myContext';
import { textLanguages as textOptions } from '../../data/languages';
import { AiOutlineInstagram as InstagramIcon } from 'react-icons/ai';
import './insta-feed.css';

function InstaFeed() {
  const [feed, setFeed] = useState([]);
  const { textLanguage } = useContext(myContext);
  const text = textOptions[textLanguage];

  const getInstaFeed = async () => {
    try {
      // Busca o token do Instagram a partir do servidor
      const tokenResponse = await fetch('https://www.utopika.com.br/get-token.php');
      const tokenData = await tokenResponse.json();
      const token = tokenData.token;

      if (!token) throw new Error("Token não encontrado.");

      const fields = "media_url,media_type,permalink,thumbnail_url,children";
      const limit = 6;
      const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}&limit=${limit}`;

      // Busca os posts do feed
      const response = await fetch(url);
      const data = await response.json();
      if (data.error) throw new Error(data.error.message);

      // Processa os posts, verificando se há carrosséis e pegando a primeira imagem
      const processedFeed = await Promise.all(
        data.data.map(async (item) => {
          if (item.media_type === "CAROUSEL_ALBUM") {
            // Se for carrossel, busca as imagens dentro dele
            const carouselUrl = `https://graph.instagram.com/${item.id}?fields=children{media_url,media_type}&access_token=${token}`;
            const carouselResponse = await fetch(carouselUrl);
            const carouselData = await carouselResponse.json();

            if (carouselData.children && carouselData.children.data.length > 0) {
              return {
                ...item,
                media_url: carouselData.children.data[0].media_url, // Pega a primeira imagem do carrossel
                media_type: carouselData.children.data[0].media_type, // Atualiza o tipo da mídia
              };
            }
          }
          return item;
        })
      );

      setFeed(processedFeed);
    } catch (error) {
      console.log('Erro ->', error);
    }
  };

  useEffect(() => {
    getInstaFeed();
  }, []);

  return (
    <>
      {feed.length > 0 ? (
        <section className="instafeed--container">
          <div className="instafeed--grid">
            <div className="instafeed--grid-title">
              <i className="instafeed--icon"><InstagramIcon /></i>
              <h3>{text.instaFeed.title}</h3>
            </div>
            <div className="instafeed--grid-media">
              {feed.map((item) => (
                <div key={item.id} className="instafeed--media-wrapper">
                  <a href={item.permalink} target="_blank" rel="noreferrer">
                    {item.media_type === "IMAGE" ? (
                      <img className="instafeed--media" alt="" src={item.media_url} />
                    ) : (
                      <video className="instafeed--media" muted autoPlay>
                        <source src={item.media_url} />
                      </video>
                    )}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <div style={{ marginBottom: '2rem' }} />
      )}
    </>
  );
}

export default InstaFeed;
