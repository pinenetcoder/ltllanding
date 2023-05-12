import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import lt from '@/locales/lt';
import en from '@/locales/en';

function Header() {
  const [langBtnState, setLangBtnState] = useState('ENG');

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'lt' ? lt : en;

  useEffect(()=> {
    if (locale === 'lt') {
      setLangBtnState('ENG')
    } else {
      setLangBtnState('LT')
    }
  }, [locale])


  function setLanguage() {
    if (langBtnState === 'ENG') router.push('/', '/', {locale: 'en'})
    else router.push('/', '/', {locale: 'lt'})
  }

  return (
    <>
      <header>
        <div className="logo-block">
          <Link href="/">
            <Image
              src="/assets/images/ltl-logo.svg"
              alt="Picture of the author"
              width={90}
              height={46}
            />
          </Link>
        </div>
        <div className="bussiness-type-block">
          <Link className="header-bussinness-type-nav-link" href="/About">{t.headerNavLinks.private}</Link>
          <Link className="header-bussinness-type-nav-link" href="/About">{t.headerNavLinks.business}</Link>
        </div>

        <nav className="header-navigation">
          <Link className="header-nav-link" href="/payments">{ t.headerNavLinks.payments }</Link>
          <Link className="header-nav-link" href="/credits">{ t.headerNavLinks.credit }</Link>
          <Link className="header-nav-link" href="/deposits">{ t.headerNavLinks.deposit }</Link>
          <Link className="header-nav-link" href="/contacts">{ t.headerNavLinks.contacts }</Link>
          <span className="header-nav-link change-language-link" onClick={setLanguage} href="/eng">{langBtnState}</span>
        </nav>

        <div className="header-action-buttons-block">
          <Link className="header-action-button" href="/login">{ t.headerNavLinks.login }</Link>
          <Link className="header-action-button" href="/open-account">{ t.headerNavLinks.openAccount }</Link>          
        </div>
      </header>
    </>
  )
}

export default Header