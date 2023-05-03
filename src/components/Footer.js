import Link from "next/link"
import Image from "next/image"

function Footer() {
  return (
    <footer>
      <div className="footer-navigation-section">
        <h4 className="footer-navigation-section-title">Useful links</h4>
        <Link className="footer-navigation-link" href="/pricelist">Price list</Link>
        <Link className="footer-navigation-link" href="/pricelist">Terms & Conditions</Link>
        <Link className="footer-navigation-link" href="/pricelist">Privacy policy & Cookies</Link>
        <Link className="footer-navigation-link" href="/pricelist">Security</Link>
        <Link className="footer-navigation-link" href="/pricelist">Support & Complaints</Link>
      </div>

      <div className="footer-navigation-section">
        <h4 className="footer-navigation-section-title">Apie mus</h4>
        <Link className="footer-navigation-link" href="/pricelist">Valdymas</Link>
        <Link className="footer-navigation-link" href="/pricelist">Akcininkams</Link>
        <Link className="footer-navigation-link" href="/pricelist">Naujienos</Link>
      </div>

      <div className="footer-navigation-section">
        <h4 className="footer-navigation-section-title">Atskaitomybė</h4>
        <Link className="footer-navigation-link" href="/pricelist">Finansinė atskaitomybė</Link>
        <Link className="footer-navigation-link" href="/pricelist">ESG</Link>
        <Link className="footer-navigation-link" href="/pricelist">Licencija</Link>
        <Link className="footer-navigation-link" href="/pricelist">Pinigų plovimo prevencija</Link>
      </div>     

      <div className="footer-navigation-section">
        <h4 className="footer-navigation-section-title">Galimybės</h4>
        <Link className="footer-navigation-link" href="/pricelist">Tapk partneriu</Link>
        <Link className="footer-navigation-link" href="/pricelist">API</Link>
        <Link className="footer-navigation-link" href="/pricelist">Karjera</Link>
      </div>       

      <div className="footer-navigation-section">
        <h4 className="footer-navigation-section-title">Kontaktai</h4>
        <Link className="footer-navigation-link" href="/pricelist">Kontaktai</Link>
        <Link className="footer-navigation-link" href="/pricelist"> Sporto g. 18, LT- 09238 Vilnius  </Link>
        <div className="social-links-block">
          <Link className="social-link" href="/pricelist">
            <Image width={8}  height={18} alt="fb-icon" src="/assets/images/fb-icon.svg"/>
          </Link>
          <Link className="social-link" href="/pricelist">
            <Image width={20}  height={18} alt="fb-icon" src="/assets/images/LN-icon.svg"/>
          </Link>        
        </div>
      </div>  

      <div className="footer-navigation-section">
        <Image
          src="/assets/images/ltl-logo-white.svg"
          alt="Picture of the author"
          width={90}
          height={46}
        />
      </div>               
    </footer>
  )
}


export default Footer