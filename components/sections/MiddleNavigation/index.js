import Link from "next/link";
import Image from "next/image";

import logo from "@/base/logo-black-large.svg";
import profileImg from "@/base/profile-img.png";

/** Навигация с логотипом и профилем */
export default function MiddleNavigation() {
  return (
    <div className="middle-navigation">
      <div className="container middle-navigation__container">
        <Link href="/">
          <a className="middle-navigation__logo-link">
            <Image
              className="middle-navigation__logo-img"
              src={logo}
              alt="segway"
              width={216}
              height={63}
            />
          </a>
        </Link>

        <div className="middle-navigation__director">
          <div className="middle-navigation__director-img-wrapper">
            <Image
              className="middle-navigation__director-img"
              src={profileImg}
              alt="JOHN SMITH"
              width={67}
              height={67}
            />
          </div>

          <div className="middle-navigation__director-items">
            <span className="middle-navigation__director-name">JOHN SMITH</span>
            <Link href="#">
              <a className="middle-navigation__director-link">
                Ask a question <br /> to the director
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
