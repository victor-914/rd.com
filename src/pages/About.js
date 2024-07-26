import React from "react";
import styled from "styled-components";
import { primaryColor, secondaryColor, tertiaryColor } from "../utils/Colors";

export const width = "100%";
export const height = "100%";

function AboutPage() {
  return (
    <StyledAbout>
      <div className="decorator_container">
        <div className="decorator_one"></div>
        <div className="decorator_two"></div>
        <div className="decorator_three"></div>
      </div>

      <div className="header">
        Restoring Digital
        <div className="liner"></div>
      </div>
      <div className="our_vision padding">
        <div className="decorator_container">
          <div className="decorator_one"></div>
          <div className="decorator_two"></div>
          <div className="decorator_three"></div>
        </div>

        <header>About Us</header>
        <div className="our_vision_text text ">
          Restoring Digital Inc is the safe, secure and easy way to pay and get
          paid online. The services provided by Restoring Digital allows
          payments to be made through internet, without sharing their financial
          information. A Restoring Digital account can be funded with Debit
          card, Credit card and an electronic debit from a bank account. The
          recipient of a Restoring Digital transfer can establish their own
          Restoring Digital deposit account or request a transfer to their bank
          account linked with Restoring Digital account
          <hr></hr>
          Restoring Digital performs payment processing for online vendors,
          auction sites, and other commercial users, for which it does not
          charges any fee. Fees only apply to withdrawing money and foreign
          exchange. Everything else is FREE! Restoring Digital's services are
          particularly useful for businesses that operate internationally, as it
          allows them to accept payments in different currencies and from
          customers located in various countries. The platform also provides
          access to real-time transaction data and reporting, making it easier
          for businesses to manage their finances and track their payment
          activity. Overall, Restoring Digital is a payment solution that offers
          flexibility, security, and convenience to both businesses and
          individuals looking to make or receive payments online.
        </div>
      </div>

      <div className="about_us padding">
        <div className="text about_text">
          Restoring Digital staff members are energetic technocrats with extensive
          experience in Software, Internet & Web based Technologies. Each
          personnel undergoes thorough training on customer service,
          communication, management to produce effective results along with the
          latest technical training, prevalent in the market. Restoring Digital is
          committed to create a new level of success. Our vast assortment of
          services is designed to facilitate clients to reduce cost, increase
          profits, protect their business and build the goodwill for their
          brands. Our Team consists of highly experienced IT engineers, Software
          analysts, Administrative and consultants for varied IT related
          queries, who keep themselves updated with technology. The team is
          encouraged to apply their knowledge using their intellect qualities in
          R & D to produce better results for the business. Our team constantly
          works on different aspects that are essential to reduce the frauds in
          online business, like Risk Management Software and fraud detection
          tools that work on number of parameters. We always believed that it is
          the passion that creates value. And it is the sets of value system
          that creates a stronger company. We are a team of very passionate and
          committed individuals. Passionate about our beliefs and committed to
          make this happen. We shall be promoting leaders internally. We are a
          young company and have a very characteristic of a dynamic and growing
          company with the excitement, the ambition, the aspiration & the will
          to make it happen. 
        </div>
      </div>
      {/* <Teammates /> */}

      {/* <Talktous /> */}
    </StyledAbout>
  );
}

export default AboutPage;

const StyledAbout = styled.section`
  width: 95%;
  margin: auto;
  line-height: 1.5;
  padding-top: 70px;

  .decorator_container {
    display: none;
  }

  .decorator_one {
    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;
    border-radius: 50%;
    transform: translate(60px, -150px);
    /* border: 2px dashed ${tertiaryColor}; */
    z-index: 1;
  }

  .decorator_two {
    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;
    border-radius: 50%;
    transform: translate(80px, -200px);
    z-index: 1;
  }

  .decorator_three {
    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;
    border-radius: 50%;
    transform: translate(100px, -200px);
    z-index: 1;
    border: 2px dashed #747474;
  }

  .header {
    width: 95%;
    margin: auto;
    height: 50%;
    font-size: calc(40px + 30 * ((100vw - 960px) / 540));
    line-height: calc(80px + 35 * ((100vw - 960px) / 540));
    padding-top: 30px;
    padding-left: 30px;
    letter-spacing: -2px;
    font-weight: 800;
  }

  .liner {
    width: 100px;
    height: 3px;
    background-color: #1E40AF;
    transform: translateX(-50px);
  }

  .our_vision_text {
    width: 60%;
    margin: auto;
  }

  .text {
    width: 60%;
    margin: auto;
    padding-left: 10px;
    border-left: 1px solid #fff;
    font-weight: 300;
    text-align: justify;
    font-size: 18px;
  }

  span {
    font-weight: 800;
    color: ${tertiaryColor};
  }

  .padding {
    margin-bottom: 80px;
  }

  #hero_img {
    width: 500px;
    height: 400px;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  .image_holder {
    width: 50%;
    overflow-x: hidden;
  }

  .about_us {
    background-color:#1E40AF;
    color: #fff;
    padding: 20px;
    padding-bottom: 20px;
  }

  .core {
    transform: translate(20%, 30px);
  }

  .our_coreValue {
    width: 93%;
    margin: auto;
    padding-bottom: 20px;
  }

  #our_coreValue_text {
    margin-left: 50px;
    padding-left: 10px;
    width: 47%;
  }

  .our_missionStatement {
    background-color: #ededed;
    margin-top: 80px;
  }

  #our_missionStatement_text {
    /* margin-left: 10%; */
    line-height: 1.4;
  }

  #mission_header {
    text-align: start;
    padding-left: 20%;
    font-size: 20px;
    background-color: red;
    transform: translateY(50px);
  }

  #image_holder {
    position: relative;
    /* transform: translateX(100px); */
  }

  header {
    font-size: calc(30px + 30 * ((100vw - 960px) / 540));
    line-height: calc(70px + 35 * ((100vw - 960px) / 540));
    text-align: center;
    font-weight: 700;
    letter-spacing: -2px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .decorator_container {
      display: none;
    }

    .header {
      font-size: calc(70px + 30 * ((100vw - 960px) / 540));
      padding-top: 30px;
    }

    .our_vision {
      margin-top: 40px;
    }

    .our_vision header {
      font-size: 30px;
      line-height: 2;
      color: #000;
    }

    .our_vision_text {
      width: 90%;
    }

    #about_us_header {
      font-size: 30px;
      line-height: 2;
    }

    .about_text {
      width: 90%;
      line-height: 1.4;
    }

    .text {
      font-size: 15px;
    }

    .core {
      font-size: 30px;
      line-height: 2;
      transform: translate(0%, 0px);
    }

    .flex {
      flex-direction: column;
    }

    .our_coreValue {
    }

    .shake_img {
    }

    .image_holder {
      height: 100%;
      width: 100%;
      position: relative;
    }

    #our_coreValue_text {
      width: 90%;
      margin: auto;
      margin-top: 30px;
      font-size: 14px;
      line-height: 1.4;
    }

    header {
      font-size: 30px;
      line-height: 2;
    }

    .our_missionStatement {
      margin-top: 40px;
      /* display: none; */
    }

    #mission_header {
      padding-left: 0px;
      margin: auto;
      text-align: center;
      transform: translateY(0px);
    }

    #our_missionStatement_text {
      width: 83%;
    }

    #hero_img {
      bottom: 0px;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    .decorator_container {
      display: none;
    }

    .header {
      font-size: calc(70px + 30 * ((100vw - 960px) / 540));
      padding-top: 100px;
    }

    .our_vision {
      margin-top: 40px;
    }

    .our_vision header {
      font-size: 30px;
      line-height: 2;
      color: #000;
    }

    .our_vision_text {
      width: 90%;
    }

    #about_us_header {
      font-size: 30px;
      line-height: 2;
    }

    .about_text {
      width: 90%;
      line-height: 1.4;
    }

    .text {
      font-size: 15px;
    }

    .core {
      font-size: 30px;
      line-height: 2;
      transform: translate(0%, 0px);
    }

    .flex {
      flex-direction: column;
    }

    .our_coreValue {
    }

    .shake_img {
    }

    .image_holder {
      height: 100%;
      width: 100%;
      position: relative;
    }

    #our_coreValue_text {
      width: 90%;
      margin: auto;
      margin-top: 30px;
      font-size: 14px;
      line-height: 1.4;
    }

    header {
      font-size: 30px;
      line-height: 2;
    }

    .our_missionStatement {
      margin-top: 40px;
    }

    #mission_header {
      padding-left: 0px;

      margin: auto;
      text-align: center;
      transform: translateY(0px);
    }

    #our_missionStatement_text {
      width: 83%;
    }

    #hero_img {
      bottom: 0px;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .decorator_container {
      display: none;
    }

    .header {
      font-size: calc(70px + 30 * ((100vw - 960px) / 540));
      padding-top: 100px;
    }

    .our_vision {
      margin-top: 40px;
    }

    .our_vision header {
      font-size: 30px;
      line-height: 2;
      color: #000;
    }

    .our_vision_text {
      width: 90%;
    }

    #about_us_header {
      font-size: 30px;
      line-height: 2;
    }

    .about_text {
      width: 90%;
      line-height: 1.4;
    }

    .text {
      font-size: 15px;
    }

    .core {
      font-size: 30px;
      line-height: 2;
      transform: translate(0%, 0px);
    }

    .flex {
      flex-direction: column;
    }

    .our_coreValue {
    }

    .shake_img {
    }

    .image_holder {
      height: 100%;
      width: 100%;
      position: relative;
    }

    #our_coreValue_text {
      width: 90%;
      margin: auto;
      margin-top: 30px;
      font-size: 14px;
      line-height: 1.4;
    }

    header {
      font-size: 30px;
      line-height: 2;
    }

    .our_missionStatement {
      margin-top: 40px;
    }

    #mission_header {
      padding-left: 0px;

      margin: auto;
      text-align: center;
      transform: translateY(0px);
    }

    #our_missionStatement_text {
      width: 83%;
    }

    #hero_img {
      bottom: 0px;
    }
  }
`;
