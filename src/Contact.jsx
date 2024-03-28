import React from 'react';
import '../src/Style/contact.css';
import Navbar from './Navbar';
import Google from '../src/assets/google-play-head.png';
import { GrMail } from 'react-icons/gr';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { IoLogoWhatsapp } from 'react-icons/io';

const Contact = () => {
  return (
    <>
      <div className="contactbg">
        <Navbar />
        <div className="container ">
          <div className="row main py-5 ">
            <div className="col-lg-6 col-12 pt-lg-5 mt-lg-5 mainheading">
              <h1 className="mt-5 heading fw-bold">Got Queries? Reach Out To Us!</h1>
              <p className="headingdes">
                Our customer support services team will promptly answer your questions 24/7. We put our customers first
                place and strive our best to make them feel convenient. DigiKhata aims to convert your highly complex
                business functions into the simplest tasks.
              </p>
              <div className='pb-5 mb-5' style={{ display: 'flex', flexDirection: 'row' }}>
                <div>
                  <img src={Google} className="img-fluid" alt="" />
                </div>
                <div>
                  <img src={Google} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row Contactmethods pb-5 justify-content-center">
          <div className="headingg">
            <h1 className="text-center pt-5 pb-2 fw-bold text-white">Contact Us!</h1>
            <p className="text-center text-white pb-2" style={{ fontSize: '.9rem', maxWidth: '80%', margin: '0 auto' }}>
              If you’re new to our app or an existing user who is unable to understand any <br /> functionality of DigiKhata
              or wants to suggest more improvements then reach <br /> out to us without any hassle.
            </p>
          </div>

          <div className="col-md-3 col-12 text-center box mb-3 px-0 mx-3"> {/* Added mx-2 for horizontal margin */}
            <div className="py-5">
              <GrMail className="contactIcon mb-3 mt-3" />
              <h4 className="my-3">Send Us Email</h4>
              <a href="mailto:contact@digikhata.pk" className="text-orange">
                contact@digikhata.pk
              </a>
            </div>
          </div>
          <div className="col-md-3 col-12 text-center box mb-3 mx-2"> {/* Added mx-2 for horizontal margin */}
            <div className="py-5">
              <BiSolidPhoneCall className="contactIcon mb-3 mt-3" />
              <h4 className="my-3">Give Us A Call</h4>
              <a href="tel:+923438788453" className="text-orange">
                +92 313 7979 999
              </a>
            </div>
          </div>

          <div className="col-md-3 col-12 text-center box mb-3 mx-3"> 
            <div className="py-5">
              <IoLogoWhatsapp className="contactIcon mb-3 mt-3" />
              <h4 className="my-3">WhatsApp</h4>
              <a href="https://wa.me/923438788453" className="text-orange">
                +92 313 7979 999
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
