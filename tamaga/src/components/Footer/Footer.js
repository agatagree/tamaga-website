import { FacebookIcon } from "../../utils/Icons/Facebook";
import { InstagramIcon } from "../../utils/Icons/Instagram";

export const Footer = () => {
  return (
    <div className="footer-layout">
      <p className="body-text-sm">
        Copyright &copy; {new Date().getFullYear()} tamaga studio
      </p>
      <div className="footer-info">
        <p className="body-text-sm">
          <span className="body-text-sm--bold">tamaga</span> studio
        </p>
        <p className="body-text-sm">Gdańsk - Warszawa - Suwałki / Poland</p>
        <p className="body-text-sm">info@tamagastudio.pl</p>
        <div className="footer-media">
          <FacebookIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
};
