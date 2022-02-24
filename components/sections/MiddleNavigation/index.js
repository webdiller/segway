import dynamic from 'next/dynamic';
const Link = dynamic(() => import('next/link'));
import Image from 'next/image';

import logo from '@/base/logo-black-large.svg';
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
              <Image className="middle-navigation__director-img" src={profileImg} alt="JOHN SMITH" layout="responsive" />
            </div>

            <div className="middle-navigation__director-items">
              <span className="middle-navigation__director-name">JOHN SMITH</span>
              <p className="middle-navigation__director-description">«Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod facilisi pharetra sed nulla massa. </p>
              <Link href="#">
                <a className="middle-navigation__director-link">Ask a question to the director</a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
