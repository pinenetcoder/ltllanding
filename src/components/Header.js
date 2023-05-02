import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <>
      <header>
        <div className="logo-block">
          <Image
            src="/assets/images/Layer_1.svg"
            alt="Picture of the author"
            width={90}
            height={46}
          />
        </div>
        <div className="bussiness-type-block">
          <Link className="header-bussinness-type-nav-link" href="/About">Privatiems</Link>
          <Link className="header-bussinness-type-nav-link" href="/About">Verslui</Link>
        </div>

        <nav className="header-navigation">
          <Link className="header-nav-link" href="/payments">Mokėjimas</Link>
          <Link className="header-nav-link" href="/loans">Kreditas</Link>
          <Link className="header-nav-link" href="/deposits">Indėliai</Link>
          <Link className="header-nav-link" href="/contacts">Kontaktai</Link>
          <Link className="header-nav-link change-language-link" href="/eng">eng</Link>
        </nav>

        <div className="header-action-buttons-block">
          <Link className="header-action-button" href="/login">Prisijungti</Link>
          <Link className="header-action-button" href="/open-account">Atidaryti sąskaitą</Link>          
        </div>
      </header>
    </>
  )
}

export default Header