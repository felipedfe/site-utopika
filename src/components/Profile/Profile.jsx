import React, { useContext } from 'react';
import styled from 'styled-components';
import myContext from '../../context/myContext';
import { textLanguages as textOptions } from '../../data/languages';

function Profile({ id }) {
  const { textLanguage } = useContext(myContext);
  const text = textOptions[textLanguage];

  const { profile } = text;

  const ProfileWrapper = styled.div`
    /* text-align: justify; */
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const Image = styled.img`
    /* border: solid pink 2px; */
    /* margin-left: 50%; */
    /* transform: translateX(-50%); */
    padding-bottom: 2rem;
    width: 60%;
  `

  const ImageWrapper = styled.div`
    
  `

  return (
    <ProfileWrapper>
      {/* <ImageWrapper> */}
        <Image src={`images/profile/${id}/image.png`} />
      {/* </ImageWrapper> */}
      <p dangerouslySetInnerHTML={{ __html: `${profile[id]}` }}></p>
    </ProfileWrapper>
  )
}

export default Profile;
