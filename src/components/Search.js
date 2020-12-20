

import React from 'react';

export default function Search() {
  const [word, setWord] = React.useState('');
  

  function handleClickSearch(e) {
    e.preventDefault();
    console.log(word)
  }

  function handleChangeInput(e) {
    setWord(e.target.value)
  }

  return(
    <div className="search">
      <h1 className="search__title">
      Надежный способ 
сообщить о проблеме в городе 
и быть услышанным
      </h1>
      <form className="search__form form">
        <input 
        className="form__edit"
        type="text"
        placeholder="Введите ключевые слова"
        onChange={handleChangeInput}>
        </input>
        <button
          onClick = {handleClickSearch}
          className="form__button"
          type="submit">
           Поиск
         </button>
         <p className="search__tip">
      Например, “мороз” 
      </p>
      </form>
    
    </div>

  )
}