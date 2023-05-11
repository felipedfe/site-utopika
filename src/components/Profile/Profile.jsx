import React, { useContext } from 'react';
import styled from 'styled-components';
import myContext from '../../context/myContext';
import { textLanguages as textOptions } from '../../data/languages';
import {
  AiFillLinkedin as LinkedInIcon,
  AiOutlineInstagram as InstagramIcon
} from 'react-icons/ai';

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

const SocialMediaIcons = styled.div`
    display: inline;
  `

const IconLink = styled.a`
    font-size: 1.7rem;
    & > * {
      margin-right: 0.5rem;
    }
  `

const TextWrapper = styled.div``


function Profile({ id }) {
  const { textLanguage } = useContext(myContext);
  const text = textOptions[textLanguage];

  const { aboutPage: { profile } } = text;



  return (
    <ProfileWrapper>
      {/* <ImageWrapper> */}
      <Image src={`images/profile/${id}/image.png`} />
      {/* </ImageWrapper> */}
      <TextWrapper>
        <p dangerouslySetInnerHTML={{ __html: `${profile[id]}` }}></p>
        <SocialMediaIcons>
          <IconLink href='https://vimeo.com/utopika' rel="noreferrer" target='_blank'>
            <InstagramIcon />
          </IconLink>
          <IconLink href='https://vimeo.com/utopika' rel="noreferrer" target='_blank'>
            <LinkedInIcon />
          </IconLink>
        </SocialMediaIcons>
      </TextWrapper>
    </ProfileWrapper>
  )
}

export default Profile;
