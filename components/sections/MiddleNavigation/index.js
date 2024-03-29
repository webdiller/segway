import dynamic from 'next/dynamic';
const Link = dynamic(() => import('next/link'));
import Image from 'next/image';

import logo from '@/base/logo-black.svg';
import profileImg from '@/base/profile-img.jpg';

import PropTypes from 'prop-types';

MiddleNavigation.propTypes = {
  showDirector: PropTypes.bool
};

MiddleNavigation.defaultProps = {
  showDirector: true
};

/** Навигация с логотипом и профилем */
export default function MiddleNavigation({showDirector}) {
  return (
    <div className="middle-navigation">
      <div className="container middle-navigation__container">
        <Link href="/">
          <a className="middle-navigation__logo-link">
            <Image className="middle-navigation__logo-img" src={logo} alt="segway" width={216} height={63} />
          </a>
        </Link>

        {showDirector && (
          <div className="middle-navigation__director">
            <div className="middle-navigation__director-img-wrapper">
              <Image className="middle-navigation__director-img" src={profileImg} alt="Fedor Savchuk" layout="responsive" />
            </div>

            <div className="middle-navigation__director-items">
              <span className="middle-navigation__director-name">Fedor Savchuk</span>
              <p className="middle-navigation__director-description">If you have any questions or suggestions for the work of our company, please contact me personally.</p>
              <Link href="https://api.whatsapp.com/send?phone=15852135977"><a className="middle-navigation__director-link">Get in touch with the director</a></Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
