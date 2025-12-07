import logoInstagram from "../assets/instagram.png";
import logoSocial from "../assets/social.png";
import "../styles/Footer.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Footer() {
  const { currentUser } = useContext(AuthContext);
  return (
    <footer className="footer_container">
      <div className="instagram_container">
        <img
          src={logoInstagram}
          alt="Logo de instagram"
          className="logo_instagram"
        />
        <p className="instagram">
          <a
            href="https://alt-5a31a0302d72d.blackboard.com/bbcswebdav/pid-982156-dt-content-rid-14612411_1/courses/FSD.00-43441/Instagram%20copy/index.html?one_hash=0B16917B0E1F538A38F6A96E8C3791F5&f_hash=5E7EFC7CF71B681E021F4D6E4DADA90E"
            target="_blank"
          >
            hermanosjota_ba
          </a>
        </p>
      </div>

      {currentUser ? (
        <div className="numero_container">
          <p>Usuario: {currentUser.username}</p>
        </div>
      ) : null}

      <div className="numero_container">
        <img src={logoSocial} alt="Logo de telefono" className="logo_numero" />
        <p className="numero">
          <a href="+54 11 4567-8900">+54 11 4567-8900</a>
        </p>
      </div>

      <strong className="copy_text">© 2025 Hermanos Jota.</strong>
    </footer>
  );
}

export default Footer;
