import CustomHead from '@/basic/CustomHead';
import { data } from '@/base/data-test';

import dynamic from 'next/dynamic';
import TitleWithDescription from '@/blocks/TitleWithDescription';
const ProductModalDinamic = dynamic(() => import('@/modals/ProductAddedModal/ProductModal'), { ssr: false });

export default function ShippingAndPaymentPage({ allData }) {
  return (
    <>
      <div className="shipping-and-payment">
        <div className="container shipping-and-payment__container">
          <CustomHead title="Shipping and payment" />
          <TitleWithDescription
            customClass="text-left shipping-and-payment__title-with-description"
            titleDesktop={<>Terms and Conditions</>}
            titleMobile={<>Terms and Conditions</>}
            textDesktop={
              <>
                Welcome to Segway Ninebot!
                <br />
                <br />
                These terms and conditions outline the rules and regulations for the use of Cherry Wheel LLC&apos;s Website, located at https://segway-ninebot.us.
                <br />
                <br />
                By accessing this website we assume you accept these terms and conditions. Do not continue to use Segway Ninebot
                if you do not agree to take all of the terms and conditions stated on this page.
                <br />
                <br />
                The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: &apos;Client&apos;, &apos;You&apos; and &apos;Your&apos; refers to you, the person log on this website and compliant to the Company’s terms and conditions. &apos;The Company&apos;, &apos;Ourselves&apos;, &apos;We&apos;, &apos;Our&apos; and &apos;Us&apos;, refers to our Company. &apos;Party&apos;, &apos;Parties&apos;, or &apos;Us&apos;, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
              </>
            }
            textMobile={
              <>
                Welcome to Segway Ninebot!
                <br />
                <br />
                These terms and conditions outline the rules and regulations for the use of Cherry Wheel LLC&apos;s Website, located at https://segway-ninebot.us.
                <br />
                <br />
                By accessing this website we assume you accept these terms and conditions. Do not continue to use Segway Ninebot
                if you do not agree to take all of the terms and conditions stated on this page.
                <br />
                <br />
                The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: &apos;Client&apos;, &apos;You&apos; and &apos;Your&apos; refers to you, the person log on this website and compliant to the Company’s terms and conditions. &apos;The Company&apos;, &apos;Ourselves&apos;, &apos;We&apos;, &apos;Our&apos; and &apos;Us&apos;, refers to our Company. &apos;Party&apos;, &apos;Parties&apos;, or &apos;Us&apos;, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
              </>
            }
          />
          <ProductModalDinamic accessoeries={allData.accessoeries} />

          <div className="site-content">
            <div className="site-content__items">

              <div className="site-content__item">
                <p className="text text_25 text_bold site-content__item-title"><b>Cookies</b></p>
                <p className="text">We employ the use of cookies. By accessing Segway Ninebot, you agreed to use cookies in agreement with the Cherry Wheel LLC&lsquo;s Privacy Policy.
                </p>
                <p className="text">Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                </p>
              </div>

              <div className="site-content__item">
                <p className="text text_25 text_bold site-content__item-title"><b>License</b></p>
                <p className="text">Unless otherwise stated, Cherry Wheel LLC and/or its licensors own the intellectual property rights for all material on Segway Ninebot. All intellectual property rights are reserved. You may access this from Segway Ninebot for your own personal use subjected to restrictions set in these terms and conditions.</p>
                <p className="text">You must not:</p>
                <ul>
                  <li className='text'>Republish material from Segway Ninebot</li>
                  <li className='text'>	Sell, rent or sub-license material from Segway Ninebot</li>
                  <li className='text'>	Reproduce, duplicate or copy material from Segway Ninebot</li>
                  <li className='text'>	Redistribute content from Segway Ninebot</li>
                </ul>
                <p className="text">
                  Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Cherry Wheel LLC does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Cherry Wheel LLC,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Cherry Wheel LLC shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
                </p>
                <p className="text">
                  Cherry Wheel LLC reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
                </p>
                <p className="text">You warrant and represent that:</p>
                <ul>
                  <li className='text'>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
                  <li className='text'>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;
                  </li>
                  <li className='text'>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
                  <li className='text'>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity. </li>
                </ul>
                <p className="text">You hereby grant Cherry Wheel LLC a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</p>
              </div>

              <div className="site-content__item">
                <p className="text text_25 text_bold site-content__item-title"><b>Hyperlinking to our Content
                </b></p>
                <p className="text">The following organizations may link to our Website without prior written approval:
                </p>
                <p className="text"></p>
                <ul>
                  <li className='text'>Government agencies;
                  </li>
                  <li className='text'>Search engines;
                  </li>
                  <li className='text'>News organizations;
                  </li>
                  <li className='text'>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and
                  </li>
                  <li className='text'>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.
                  </li>
                </ul>
                <p className="text">These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.
                </p>
                <p className="text">We may consider and approve other link requests from the following types of organizations:
                </p>
                <ul>
                  <li className='text'>commonly-known consumer and/or business information sources;
                  </li>
                  <li className='text'>dot.com community sites;</li>
                  <li className='text'>associations or other groups representing charities;
                  </li>
                  <li className='text'>online directory distributors;
                  </li>
                  <li className='text'>internet portals;
                  </li>
                  <li className='text'>accounting, law and consulting firms; and
                  </li>
                  <li className='text'>educational institutions and trade associations.</li>
                </ul>
                <p className="text">We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Cherry Wheel LLC; and (d) the link is in the context of general resource information.</p>
                <p className="text">These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.
                </p>
                <p className="text">If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Cherry Wheel LLC. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
                </p>
                <p className="text">Approved organizations may hyperlink to our Website as follows:
                </p>
                <ul>
                  <li className='text'>By use of our corporate name; or
                  </li>
                  <li className='text'>By use of the uniform resource locator being linked to; or
                  </li>
                  <li className='text'>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.
                  </li>
                </ul>
                <p className="text">No use of Cherry Wheel LLC&apos;s logo or other artwork will be allowed for linking absent a trademark license agreement.</p>
              </div>

              <div className="site-content__item">
                <p className="text text_25 text_bold site-content__item-title"><b>iFrames

                </b></p>
                <p className="text">Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
                </p>
              </div>

              <div className="site-content__item">
                <p className="text text_25 text_bold site-content__item-title"><b>Content Liability
                </b></p>
                <p className="text">We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
                </p>
              </div>

              <div className="site-content__item">
                <p className="text text_25 text_bold site-content__item-title"><b>Your Privacy
                </b></p>
                <p className="text">Please read Privacy Policy</p>
              </div>

              <div className="site-content__item">
                <p className="text text_25 text_bold site-content__item-title"><b>Reservation of Rights
                </b></p>
                <p className="text">We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
                </p>
              </div>



              <div className="site-content__item">
                <p className="text text_25 text_bold site-content__item-title"><b>Removal of links from our website
                </b></p>
                <p className="text">If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
                </p>
                <p className="text">We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
                </p>
              </div>

              <div className="site-content__item">
                <p className="text text_25 text_bold site-content__item-title"><b>Disclaimer
                </b></p>
                <p className="text">To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
                </p>
                <ul>
                  <li className='text'>limit or exclude our or your liability for death or personal injury;
                  </li>
                  <li className='text'>limit or exclude our or your liability for fraud or fraudulent misrepresentation;
                  </li>
                  <li className='text'>limit any of our or your liabilities in any way that is not permitted under applicable law; or
                  </li>
                  <li className='text'>exclude any of our or your liabilities that may not be excluded under applicable law.
                  </li>
                </ul>
                <p className="text">The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
                </p>
                <p className="text">As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      allData: data
    }
  };
}
