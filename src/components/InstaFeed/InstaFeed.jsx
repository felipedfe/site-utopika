import React, { useEffect, useState, useContext } from 'react';
import myContext from '../../context/myContext';
import { textLanguages as textOptions } from '../../data/languages';
import { AiOutlineInstagram as InstagramIcon } from 'react-icons/ai';
import './insta-feed.css';

function InstaFeed() {
  const [feed, setFeed] = useState([]);
  const [testToken, setTestToken] = useState();

  const { textLanguage } = useContext(myContext);

  const text = textOptions[textLanguage];

  // const getInstaFeed = async () => {
  //   const token = process.env.REACT_APP_INSTA_TOKEN;
  //   // console.log('Data ->', process.env.REACT_APP_INSTA_TOKEN);
  //   const fields = "media_url,media_type,permalink,thumbnail_url";
  //   const limit = 6;

  //   const url = `https://graph.instagram.com/me/media?access_token=${token}&&fields=${fields}&&limit=${limit}`;
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     if (data.error) throw new Error(data.error.message)

  //     setFeed(data.data);
  //     console.log('Data ->', data);
  //   } catch (error) {
  //     console.log('Erro ->', error);
  //   }
  // };

  const getInstaFeed = async () => {
    try {
      const tokenResponse = await fetch('https://www.utopika.com.br/get-token.php');
      const tokenData = await tokenResponse.json();
      const token = tokenData.token;

      // setTestToken(token)

      if (!token) throw new Error("Token não encontrado.");

      const fields = "media_url,media_type,permalink,thumbnail_url";
      const limit = 6;
      const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}&limit=${limit}`;

      // em seguida, buscar o feed do instagram usando o token
      const response = await fetch(url);
      const data = await response.json();
      if (data.error) throw new Error(data.error.message);

      setFeed(data.data);
      // console.log('Data ->', data);
    } catch (error) {
      console.log('Erro ->', error);
    }
  };

  useEffect(() => {
    getInstaFeed();
  }, []);

  // useEffect(() => {
  //   console.log('TESTE TOKEN: ', testToken)
  // }, [testToken]);

  // useEffect(() => {
  //   console.log(feed)
  // }, [feed])

  return (
    <>
      {feed.length > 0 ?

        <section className="instafeed--container">
          <div className="instafeed--grid">
            <div className="instafeed--grid-title">
              <i className="instafeed--icon"><InstagramIcon /></i>
              <h3>{text.instaFeed.title}</h3>
            </div>
            <div className="instafeed--grid-media">
              {feed?.map((item) => {
                return (
                  <div key={item.id} className="instafeed--media-wrapper">
                    <a href={item.permalink} target="_blank" rel="noreferrer">
                      {item.media_type === "IMAGE" ?
                        <img className="instafeed--media" alt="" src={item.media_url} /> :
                        <video className="instafeed--media" muted autoPlay>
                          <source src={item.media_url} />
                        </video>
                      }
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        :
        <div style={{ marginBottom: '2rem' }} />
      }
    </>
  )
};

export default InstaFeed;
