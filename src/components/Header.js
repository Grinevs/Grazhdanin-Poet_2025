export default function Header() {
  return (
    <div className="header">
      <div className="header__logo logo" />
      <nav className="header__nav nav">
        <a className="nav__item">Создать обращение</a>
        <a className="nav__item">Карта</a>
        <a className="nav__item">Статистика</a>
        <a className="nav__item header__faq" href="#faq">FAQ</a>
      </nav>
    </div>
  )
}