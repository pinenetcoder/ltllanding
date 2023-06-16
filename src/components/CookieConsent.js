import styles from '@/styles/cookie.module.scss';
import Cookies from 'js-cookie';

const CookieConsent = ({setShowPopup}) => {

  const SetCookies = (cookiename, usrin) => {
    Cookies.set(cookiename, usrin, {
      expires: 360,
      secure: true,
      sameSite: 'strict',
      path: '/',
    });
  };
  
  const handleAcceptCookies = () => {
    SetCookies('LLP-Cookie', true);
    setShowPopup(false);
  };

  return (
    <div className={styles.cookieConsentWindow}>
      <div className={styles.cookieWrapper}>
        <p>
          We use cookies on this site to enhance your user experience. For a complete overview of all cookies used, please see your personal settings.
        </p>
        <div className={styles.acceptBtn} onClick={handleAcceptCookies}>
          Accept
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
