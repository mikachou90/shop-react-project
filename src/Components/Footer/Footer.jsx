import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerLogo">
        <img className="footerLogo" src="/icons/logo.svg" alt="Logo" />
      </div>

      <div className="footerLinks">
        <div className="serves">
          <h3>客戶服務</h3>
          <div className="servesLinks">
            <a className="servesLink" href="/">
              <p>運送說明</p>
            </a>
            <a className="servesLink" href="/">
              <p>退換貨相關</p>
            </a>
            <a className="servesLink" href="/">
              <p>付款資訊</p>
            </a>
            <a className="servesLink" href="/">
              <p>FAQ</p>
            </a>
          </div>
        </div>

        <div className="aboutUs">
          <h3>關於我們</h3>
          <div className="aboutLinks">
            <a className="aboutLink" href="/">
              <p>品牌故事</p>
            </a>
            <a className="aboutLink" href="/">
              <p>媒體聯繫</p>
            </a>
            <a className="aboutLink" href="/">
              <p>Press Kit</p>
            </a>
          </div>
        </div>

        <div className="info">
          <h3>資訊</h3>
          <div className="infoLinks">
            <a className="infoLink" href="/">
              <p>隱私權政策</p>
            </a>
            <a className="infoLink" href="/">
              <p>Cookie</p>
            </a>
            <a className="infoLink" href="/">
              <p>GDPR</p>
            </a>
          </div>
        </div>

        <div className="followUs">
          <h3>追蹤ALPHA Shop</h3>
          <div className="followInfo">
            <p>+886 02123-45678</p>
            <div className="socialMedia">
              <a href="/">
                <img src="/icons/facebook.svg" alt="" />
              </a>

              <a href="/">
                <img src="/icons/instagram.svg" alt="" />
              </a>

              <a href="/">
                <img src="/icons/whatsapp.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
