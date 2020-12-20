export default function Header() {
  return(
    <div className="header">
      <img className="header__logo logo"/>
      <nav className="header__nav nav">
        <a className="nav__item">Создать обращение</a>
        <a className="nav__item">Карта</a>
        <a className="nav__item">Статистика</a>
      </nav>
      <a className="header__item header__faq">FAQ</a>
    </div>
  )
}