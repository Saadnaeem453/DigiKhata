import React from "react";
import Navbar from './Navbar';
import Google from '../src/assets/google-play-head.png';
import appStore from "../src/assets/app-store-head.png";
import BusinessImg1 from "../src/assets/about/business-img1.png";
import Pakistan from "../src/assets/about/pakistan-digi.png";
import Story from '../src/assets/about/our-story.png'
import MSA from '../src/assets/about/MSA.png'
import SOSV from '../src/assets/about/SOSV.png'
import Shorooq from '../src/assets/about/Shorooq.png'
import Venture from '../src/assets/about/Venture.png'

import AdnanNusrat from '../src/assets/about/Adnan-Nusrat.png'
import AdnanAslam from '../src/assets/about/adnan-aslam.png'
import amnaZeeshan from '../src/assets/about/amna-zeeshan.png'
import bilalAnjum from '../src/assets/about/bilal-anjum.png'
import bilalHaasan from '../src/assets/about/bilal-haasan.png'


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import '../src/Style/About.css'
const About = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
        <div className="aboutbg">
          <Navbar />
          <section>
            <div className="container">
              <div className="row ">
                <div className=" col-md-6 col-12 pt-md-5 mt-md-5 mb-md-3 pb-md-5">
                  <h1
                    style={{ fontWeight: "700", fontSize: "2.25rem" }}
                    className="text-white pt-md-5 mt-md-5 "
                  >
                    Transform Your <br />
                     Business Digitally With DigiKhata
                  </h1>

                  <p
                    style={{ textAlign: "justify" }}
                    className="text-white pt-3  me-md-4"
                  >
                    DigiKhata aims to introduce operating infrastructure for
                    Pakistan’s 2.5 million strong MSME sector. It is a simple,
                    secure & innovative 100% free bookkeeping & accounting
                    application helping businesses record daily transactions on
                    the go.
                  </p>

                  <div
                    className="pb-5 mb-5 flex-wrap flex-md-nowrap"
                    style={{
                      display: "flex",
                    }}
                  >
                    <div>
                      <img
                        src={Google}
                        className="img-fluid me-3 google"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src={appStore}
                        className="img-fluid me-3 appstore"
                        alt=""
                      />
                    </div>
                    <div></div>
                  </div>
                </div>
                <div className="col-md-6 col-12 "></div>
              </div>
            </div>
          </section>
        </div>

        <section>
          <div className="mt-5">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 col-md-8 col-12  text-center max-width ">
                  <h2 style={{ fontWeight: "700" }}>
                    Serving The Digital Needs Of{" "}
                    <span className="orange">Your Business</span>{" "}
                  </h2>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8 col-md-10 col-12 text-center  ">
                  <p>
                    Local merchants strive hard to ensure that their customers
                    get the best possible product or service. However, when they
                    don’t get paid right for their hard-earned efforts, it
                    becomes extremely difficult for them to excel in their
                    business growth. DigiKhata brings simple, secure & reliable
                    bookkeeping & accounting solution. It enables businesses to
                    digitally record credits, manage daily budgets & collect
                    their payments 3x faster all in one app.
                  </p>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                <div className="col-lg-5 col-12 text-center text-md-left mt-5 px-md-5 px-0 mb-5 px-lg-0">
                  <img src={BusinessImg1} alt="" className="img-fluid" />
                </div>
                <div className="col-lg-6 col-12 px-md-5 px-0 my-auto">
                  <h2>
                    Why Do Businesses Need{" "}
                    <span className="orange">DigiKhata?</span>{" "}
                  </h2>
                  <p className="justify">
                    According to the Ministry of Planning Development and
                    Special Incentives, around 99% of MSMEs contribute to 40% of
                    the GDP around the globe. However, millions of MSMEs in
                    Pakistan are unable to keep up with innovative solutions due
                    to outdated business procedures like maintaining business
                    records with pen and paper.
                  </p>
                  <p className="justify">
                    DigiKhata is designed to empower the MSMEs in Pakistan with
                    innovative yet simple solutions. It helps users to maintain
                    their bookkeeping records on their mobile phones only with a
                    few clicks. It has a simple interface & offers cloud-like
                    agility that ensures faster & better performance of your
                    business operations ultimately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      
 
 {/* =========================== Local Merchents ============================ */}
      <section>
        <div>
          <div className="container pt-md-5 pt-3  px-3 px">
            <div className="row   justify-content-center text-center ">
              <div className="col-12 col-md-8 col-lg-7  text-center">
            <h2 className="">Join Us In Our Mission To Empower <span className="orange"> Local Merchants </span> In Pakistan</h2>
            </div>
            </div>
            <div className="row justify-content-center text-center mb-lg-5 mb-3">
              <div className="col-12 col-md-9 text-center">
                <p className="text-center font">
                At DigiKhata, we are driven by the purpose of simplifying the lives and business infrastructure of local merchants in Pakistan and all across the globe. We are a team of passionate young technologists looking forward to the ever-new digital Pakistan. We are backed by powerful investors & supported by highly qualified fintech specialists. Become part of the DigiKhata family and boost our venture with your valuable insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* =============================== who we are ========================= */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 px-md-5 px-4 my-auto">
<h2>Who <span className="orange">We Are?</span> </h2>
<p className="justify font">DigiKhata is an industry-leading fintech company introducing innovative solutions to help local businesses change the horizon of their business from less efficient to more propelling. DigiKhata is used and trusted by millions of people and businesses all across the nation.</p>
<p className="justify font ">Also, we have introduced an online business platform i.e. “Digi Dokaan” that helps its users to create their online store in just 30 seconds. We are also intended to bring more innovative and contemporary solutions to help MSMEs keep pace with the modern trends in the marketplace.</p>
            </div>
            <div className="col-lg-6 col-12">
<img src={Pakistan} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

{/* ================= our vlaues ================================== */}
      <section>
        <div className="container py-md-5 py-1">
          <h2 className="text-center">Our <span className="orange">Values</span> </h2>
       
        <div className="row justify-content-center">
          <div className="col-11 col-md-9 text-center">
            <p className="text-center">
            Our organization is structured with 4 robust values i.e. Curiosity, empathy, innovation-oriented and biased for actions. Our dedicated R&D specialists perform in-depth market analysis and continuously research for innovative solutions. DigiKhata team holds its significance due to the respect it offers to all stakeholders without any discrimination. Our solutions are future-oriented helping merchants and businesses to stay at the competitive edge. We always strive to extend our limits and contribute to the ever-growing ecosystem of finance and technology with useful solutions.
            </p>
          </div>
          </div>
        </div>
      </section>
 {/*  ================ our story sectionn ================================= */}
      <section>
        <div className="container">
          <div className="row pb-5">
            <div className="col-lg-6 text-center pb-4 pb-md-0 px-md-5 px-lg-0">
              <img src={Story} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6  pb-4 pb-md-0 px-md-5 m-auto">
              <h2>Our <span className="orange">Story</span> </h2>
              <p className="justify">
              Founded in 2020 by Adnan Aslam and Bilal Anjum, DigiKhata is introduced to digitize significant bookkeeping and accounting procedures for local businesses in Pakistan. DigiKhata was started as a solopreneurship and then multiple fundraisers contributed to the development of this all-rounder joint venture.
              </p>
              <p className="justify">
              Now DigiKhata has a competitive edge in the marketplace due to its future-ready solutions. Local businesses are finding more opportunities to increase their revenue stream and improve their data security with DigiKhata.
              </p>

</div>
          </div>
        </div>
      </section>
  {/*          ============== our Investor section ======================= */}

      <section>
        <div className="bg-orange our-invester">
          <div className="py-5 text-white container">
          <h2 className="text-center pb-5">Our Investors</h2>
          <div className="d-grid">
            <div className="">
              <img src={SOSV} className="img-fluid" alt="" />
            </div>
            <div className="">
            <img src={Venture} className="img-fluid" alt="" />

            </div>
            <div className="">
            <img src={Shorooq} className="img-fluid" alt="" />

            </div>
            <div className="">
            <img src={MSA} className="img-fluid" alt="" />

            </div>
          </div>
        </div>
        </div>
      </section>

{        /* ====== slick-carousel section =========== */             }

      <section className="bg-grey">
        <div className="container py-5  ">
          <div className="mb-md-5 mb-3">
<h2  className="text-center ">Meet Our <span className="orange">Incredible Team</span></h2>
          </div>
          <div className="slick-carousel container" >
          <div className="" >
    <Slider {...settings} >
      <div>
        
        <img src={AdnanAslam} className="img-fluid" alt="Slide 1" />
        <p className="text-center pt-3">Adnan Aslam <br /> Founder & CEO</p>
        

      </div>
      <div>
        <img src={AdnanNusrat} className="img-fluid" alt="Slide 2" />
        <p className="text-center pt-3">Adnan Nusrat <br /> CDPO</p>
      </div>
      <div>
        <img src={amnaZeeshan} className="img-fluid" alt="Slide 3" />
        <p className="text-center pt-3">Amna Zeshan <br /> Product Manager</p>
      </div>
      <div>
        <img src={bilalAnjum} className="img-fluid" alt="Slide 3" />
        <p className="text-center pt-3">Bilal Anjum <br /> Co-Founder</p>
      </div>
      <div>
        <img src={bilalHaasan} className="img-fluid text-center" alt="Slide 3" />
        <p className="text-center pt-3">Bilal Hassan Malik <br /> CTO</p>
      </div>
     
    </Slider>
    </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
