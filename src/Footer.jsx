import React from 'react';
import "../src/Style/footer.css";
import twitter from "../src/assets/twitter.png";
import facebook from "../src/assets/facebook.png";
import linkdin from "../src/assets/linkdin.png";
import youtube from "../src/assets/youtube.png";
import gPlay from "../src/assets/google-play-head.png";
import appStore from "../src/assets/app-store-head.png";
import MSoft from "../src/assets/microsoft.png";
import insta from "../src/assets/insta.png";
import flogo from "../src/assets/flogo.png";
import { Link } from "react-router-dom";

// import {
//   Link
// } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='footer'>
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-md-2 pb-md-0 pb-4">
          <Link to="/"><img src={flogo} alt="" /></Link>  
          </div>
          <div className="col-12  col-md-10">
            <p>DigiKhata is Pakistan’s # 1 Digital Khata. This all in one bookkeeping and accounting App helps small businesses manage their ledgers on the go. It is available on Android, iOS and online.</p>
          </div>
        </div>

        <div className="row pb-5">
        <div className="col-12 col-md-6 pt-3 other">
  <p className='email'>contact@digikhata.pk</p>
  <p className='no'>+923438788453</p>
  <p>Digi Technologies PTE LTD. <br />
160 Robinson Road #14-04, Singapore</p>
<p>Digi Khata SMC PVT LTD. <br />
10th Floor, State Life building, Blue Area, Islamabad, Pakistan</p>
<p>Digi Khata SMC PVT LTD <br />
535 B Peoples Colony Faisalabad, Pakistan</p>
</div>

          <div className="col-6 me-sm-0 me-auto pt-3 col-md-2 links">
        <a href="" className='mb-4'>Privacy Policy</a>
        <a href="" className='mb-4' >Terms of Use</a>
        <a href="" className='mb-4'>Contact Us</a>
        <a href="" className='mb-4'>Careers</a>

          </div>
          <div className="col-md-4 col-12">
                  <div className="d-flex gap-2">
                    <div>
                      <img src={twitter} className="img-fluid me-3" alt="" />
                    </div>

                    <div>
                      <img src={youtube} className="img-fluid me-3" alt="" />
                    </div>

                    <div>
                      <img src={insta} className="img-fluid me-3" alt="" />
                    </div>

                    <div>
                      <img src={linkdin} className="img-fluid me-3" alt="" />
                    </div>
                    <div>
                      <img src={facebook} className="img-fluid me-3" alt="" />
                    </div>
                  </div>
                  <div className="mt-3">
                    <img src={gPlay} alt="" />
                  </div>
                  <div className="mt-3">
                    <img src={appStore} alt="" />
                  </div>
                  <div className="mt-3">
                    {" "}
                    <img src={MSoft} alt="" />
                  </div>
                </div>
        </div>
        <div className=" text-white text-center p-3 copyright text-success">
        © Copyright Reserved 2023 Digikhata.pk
        </div>
      </div>
    
    </section>
  );
}

export default Footer;
