export default function Popup() {
  return (
    <div className="popup">
      <p className="popup__title">Результаты поиска</p>
      <div className="popup__enter">
        <input className="popup__input" type="text"></input>
        <button className="popup__button-filter"></button>
      </div>
      <div className="poems-container">
        <template id="template-poem">
          <div className="poem">
            <p className="poem__text"></p>
          </div>
        </template>
      </div>
    </div>

  )
}