import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <>
      <Image
        src="/Layer_1.png"
        alt="Picture of the author"
        width={100}
        height={50}
      />
      <span className="header-bussinness-type-nav-link"> HEADER</span>
      <Link className="header-nav-link" href="/About">ABOUT</Link>
    </>
  )
}

export default Header