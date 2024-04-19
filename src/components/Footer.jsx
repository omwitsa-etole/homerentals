import "../styles/Footer.scss"
import { LocationOn, LocalPhone, Email } from "@mui/icons-material"
import properties from "../properties.json"

const Url = properties.url
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <a href="/"><img src={`${Url}/assets/logo.png`} alt="logo" /></a>
      </div>

      <div className="footer_center">
        <h3>Useful Links</h3>
        <ul>
          <li>About Us</li>
          <li>Terms and Conditions</li>
          <li>Return and Refund Policy</li>
        </ul>
      </div>

      <div className="footer_right">
        <h3>Contact</h3>
        <div className="footer_right_info">
          <LocalPhone />
          <p>+1 254 567 890</p>
        </div>
        <div className="footer_right_info">
          <Email />
          <p>contact@support.com</p>
        </div>
        <img src={`${Url}/assets/payment.png`} alt="payment" />
      </div>
    </div>
  )
}

export default Footer