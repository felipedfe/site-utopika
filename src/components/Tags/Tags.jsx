import React, { useEffect, useContext } from 'react';
import myContext from '../../context/myContext';
import { allTags } from '../../data/projects';
import TagButton from '../../components/TagButton/TagButton';
import './tags.css';

function Tags() {
  const { textLanguage, tagsList, setTagsList } = useContext(myContext);

  // Aqui é indicada a quantidade de main tags
  const mainTagsLimit = 5;

  const handleClick = ({ target }, buttonOn) => {
    // O botão está off nessa condição pq o setState demora para ser atualizado
    if (!buttonOn) {
      setTagsList([...tagsList, target.value]);
    }
    else {
      const updatedTagsList = tagsList.filter((tag) => tag !== target.value)
      setTagsList(updatedTagsList);
    }
  };

  const mainTags = (allTags) => {
    const mainTags = allTags[textLanguage].filter((_item, index) => index < mainTagsLimit);

    return mainTags.map((tag, index) =>
      <TagButton
        key={index}
        handleClick={handleClick}
        innerTextTag={tag}
        valueTag={allTags['en'][index]}
      />)
  };

  const secondaryTags = (allTags) => {
    const mainTags = allTags[textLanguage].filter((_item, index) => index >= mainTagsLimit);

    return mainTags.map((tag, index) =>
      <TagButton
        key={index}
        handleClick={handleClick}
        innerTextTag={tag}
        valueTag={allTags['en'][index + mainTagsLimit]}
      />)
  };

  // Retirar depois
  useEffect(() => {
    console.log(tagsList)
  }, [tagsList]);


  // limpa a lista de tags quando o componente desmonta
  useEffect(() => {
    return () => {
      setTagsList([])
    }
  }, [])

  return (
    <section className="tags--tags-container">
      <div className="tags--all-tags-wrapper">
        <section className="tags--main-tags-btns">
          {mainTags(allTags)}
        </section>
        <section className="tags--secondary-tags-btns">
          {secondaryTags(allTags)}
        </section>
      </div>
    </section>
  )
};

export default Tags;
