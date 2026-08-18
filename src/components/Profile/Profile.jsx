import React, { useContext } from 'react';
import myContext from '../../context/myContext';
import { textLanguages as textOptions } from '../../data/languages';
import {
  AiFillLinkedin as LinkedInIcon,
  AiOutlineInstagram as InstagramIcon
} from 'react-icons/ai';
import {
  ProfileWrapper,
  Image,
  SocialMediaIcons,
  IconLink,
  TextWrapper,
} from './Profile.styled';

function Profile({ id }) {
  const { textLanguage } = useContext(myContext);
  const text = textOptions[textLanguage];

  const { aboutPage: { profile, socialMedia } } = text;
  // console.log(socialMedia[id])
  return (
    <ProfileWrapper>
      {profile[id]?.hasImage && (
        <Image src={`images/profile/${id}/image.png`} />
      )}
      <TextWrapper>
        {/* <p dangerouslySetInnerHTML={{ __html: `${profile[id]?.text}` }}></p> */}
        <h3>{profile[id]?.name}</h3>
        <span><i>{profile[id]?.role}</i></span>
        <p style={{ paddingTop: '1rem' }}>{profile[id]?.text}</p>
        <SocialMediaIcons>
          {socialMedia[id]?.instagram && (
            <IconLink
              href={socialMedia[id].instagram}
              rel="noreferrer"
              target="_blank"
            >
              <InstagramIcon />
            </IconLink>
          )}

          {socialMedia[id]?.linkedin && (
            <IconLink
              href={socialMedia[id].linkedin}
              rel="noreferrer"
              target="_blank"
            >
              <LinkedInIcon />
            </IconLink>
          )}

        </SocialMediaIcons>
      </TextWrapper>
    </ProfileWrapper>
  )
}

export default Profile;
