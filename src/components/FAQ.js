export default function FAQ() {
  return (
    <div className="faq" id="faq">
      <h2 className="faq__title">faq</h2>

      <div className="faq__item">
        <label className="faq__question" for="faq_1">Как наш сервис помогает в решении проблемы?</label>
        <input className="faq__input" type="checkbox" id="faq_1"></input>
        <div className="faq__answer">
          <p>Позволяет безопасно общаться и не нарушать статьи уголовного кодекса 27.23 и 54.11</p>
        </div>
      </div>

      <div className="faq__item">
        <label className="faq__question" for="faq_2">Какие органы власти можно упомянуть в обращении?</label>
        <input className="faq__input" type="checkbox" id="faq_2"></input>
        <div className="faq__answer">
          <p>Министерство бордюров, Просчетная палата, Заместитель заместителя</p>
        </div>
      </div>

      <div className="faq__item">
        <label className="faq__question" for="faq_3">К кому с какой проблемой обращаться?</label>
        <input className="faq__input" type="checkbox" id="faq_3"></input>
        <div className="faq__answer">
          <p>Спросите в регистратуре</p>
        </div>
      </div>

      <div className="faq__item">
        <label className="faq__question" for="faq_4">Как я узнаю о решении по моей проблеме?</label>
        <input className="faq__input" type="checkbox" id="faq_4"></input>
        <div className="faq__answer">
          <p>Смотреть выше</p>
        </div>
      </div>

      <div className="faq__item">
        <label className="faq__question" for="faq_5">Могу ли я поделиться своим обращением на сторонних площадках?</label>
        <input className="faq__input" type="checkbox" id="faq_5"></input>
        <div className="faq__answer">
          <p>Попробуйте</p>
        </div>
      </div>

    </div>
  )
}