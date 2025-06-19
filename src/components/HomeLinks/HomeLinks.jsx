import { useContext } from "react";
import { HomeLink, Wrapper } from "./HomeLinks.styled";
import { textLanguages as textOptions } from '../../data/languages';
import myContext from "../../context/myContext";

const HomeLinks = () => {
  const { textLanguage } = useContext(myContext);

  const text = textOptions[textLanguage];
  const { menu } = text;

  return (
    <Wrapper>
      <HomeLink to="/projetos"><p>{menu.projects}</p></HomeLink>
      <HomeLink to="/sobre"><p>{menu.about}</p></HomeLink>
    </Wrapper>
  )
};

export default HomeLinks;