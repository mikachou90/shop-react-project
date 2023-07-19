import "./Header.css";

function Header() {
  return (
    <div className="header">
      <nav>
        <div className="links">
          <a className="link" href="/">
            男款
          </a>
          <a className="link" href="/">
            女款
          </a>
          <a className="link" href="/">
            最新消息
          </a>
          <a className="link" href="/">
            客製商品
          </a>
          <a className="link" href="/">
            聯絡我們
          </a>
        </div>

        <div className="logo">
          <img className="logoImage" src="/icons/logo.svg" alt="logo" />
        </div>

        <div className="navIcons">
          <img
            className="searchIcon"
            src="/icons/search.svg"
            alt="searchIcon"
          />
          <img className="cartIcon" src="/icons/cart.svg" alt="cartIcon" />
          <img
            className="modeChangeIcon"
            src="/icons/moon.svg"
            alt="modeIcon"
          />
        </div>
      </nav>
    </div>
  );
}

export default Header;
