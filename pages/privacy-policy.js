import CustomHead from '@/basic/CustomHead';
const { data } = process.env.NODE_ENV === 'development' ? require('@/base/data-test') : require('@/base/data-prod');

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
            titleDesktop={<>Privacy Policy for Cherry Wheel LLC</>}
            titleMobile={<>Privacy Policy for Cherry Wheel LLC</>}
          />
          <ProductModalDinamic accessoeries={allData.accessoeries} />

          <div className="site-content">
            <div className="site-content__items">

              <div className="site-content__item">
                <p className="text">At Segway Ninebot, accessible from https://segway-ninebot.us, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Segway Ninebot and how we use it.
                </p>
                <p className="text">If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.

                </p>

                <p className="text">This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Segway Ninebot. This policy is not applicable to any information collected offline or via channels other than this website.

                </p>

                <p className="text">Consent
                </p>

                <p className="text">By using our website, you hereby consent to our Privacy Policy and agree to its terms.

                </p>

                <p className="text">Information we collect

                </p>

                <p className="text">The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.

                </p>

                <p className="text">If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.

                </p>

                <p className="text">When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.

                </p>

                <p className="text">How we use your information

                </p>


                <p className="text">We use the information we collect in various ways, including to:

                </p>


                <ul>
                  <li className='text'>Provide, operate, and maintain our website
                  </li>
                  <li className='text'>Improve, personalize, and expand our website
                  </li>
                  <li className='text'>Understand and analyze how you use our website
                  </li>
                  <li className='text'>Develop new products, services, features, and functionality
                  </li>
                  <li className='text'>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes
                  </li>
                  <li className='text'>Send you emails
                  </li>
                  <li>Find and prevent fraud
                  </li>
                </ul>
                <p className="text">Log Files

                </p>


                <p className="text">Segway Ninebot follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.

                </p>

                <p className="text">Cookies and Web Beacons
                </p>

                <p className="text">Like any other website, Segway Ninebot uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
                </p>

                <p className="text">Advertising Partners Privacy Policies
                </p>

                <p className="text">You may consult this list to find the Privacy Policy for each of the advertising partners of Segway Ninebot.
                </p>


                <p className="text">Note that Segway Ninebot has no access to or control over these cookies that are used by third-party advertisers.

                </p>

                <p className="text">Third Party Privacy Policies

                </p>

                <p className="text">Segway Ninebot&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.

                </p>

                <p className="text">You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&apos; respective websites.

                </p>

                <p className="text">CCPA Privacy Rights (Do Not Sell My Personal Information)

                </p>

                <p className="text">Under the CCPA, among other rights, California consumers have the right to:

                </p>

                <p className="text">Request that a business that collects a consumer&apos;s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.
                </p>

                <p className="text">Request that a business delete any personal data about the consumer that a business has collected.

                </p>

                <p className="text">Request that a business that sells a consumer&apos;s personal data, not sell the consumer&apos;s personal data.
                </p>

                <p className="text">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.

                </p>

                <p className="text">GDPR Data Protection Rights
                </p>

                <p className="text">We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:

                </p>

                <p className="text">The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.

                </p>

                <p className="text">The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.

                </p>

                <p className="text">The right to erasure – You have the right to request that we erase your personal data, under certain conditions.
                </p>

                <p className="text">The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.

                </p>

                <p className="text">The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.

                </p>

                <p className="text">The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.

                </p>

                <p className="text">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.

                </p>

                <p className="text">Children&apos;s Information

                </p>

                <p className="text">Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.

                </p>

                <p className="text">Segway Ninebot does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
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
