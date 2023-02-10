import React, { useEffect, useState, useContext } from 'react';
import myContext from '../../context/myContext';
import { textLanguages as textOptions } from '../../data';
import './insta-feed.css';

function InstaFeed() {
  const [feed, setFeed] = useState([]);

  const { textLanguage } = useContext(myContext);

  const text = textOptions[textLanguage];

  const getInstaFeed = async () => {
    const token = process.env.REACT_APP_INSTA_TOKEN;
    const fields = "media_url,media_type,permalink,thumbnail_url";
    const limit = 6;

    const url = `https://graph.instagram.com/me/media?access_token=${token}&&fields=${fields}&&limit=${limit}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setFeed(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getInstaFeed();
  }, []);

  return (
    <section className="instafeed--container">
      <div className="instafeed--grid">
        <div className="instafeed--grid-title">
          <h3>{text.instaFeed.title}</h3>
        </div>
        <div className="instafeed--grid-media">
          {feed.map((item) => {
            return (
              <div className="instafeed--media-wrapper">
                <a key={item.id} href={item.permalink} target="_blank" rel="noreferrer">
                  {item.media_type === "IMAGE" ?
                    <img className="instafeed--media" alt="" src={item.media_url} /> :
                    <video className="instafeed--media" muted>
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
  )
};

export default InstaFeed;
