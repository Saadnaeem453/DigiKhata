import React from 'react'
import '../src/Style/career.css';
import Navbar from './Navbar';
import Google from '../src/assets/google-play-head.png';
import apple from '../src/assets/app-store-head.png';
import applyimg from "../src/assets/career/how-to-apply.png"
import popularimg from "../src/assets/career/career-popular.png"
import comaup from "../src/assets/career/career-comma-up.png"
import comadown from "../src/assets/career/career-comma-down.png"
import anas from "../src/assets/career/m-anas.png"
import hanan from "../src/assets/career/m-hanan.png"
import sidra from "../src/assets/career/sidra.png"
import { Carousel } from 'react-responsive-carousel';


const Career = () => {
  return (
    <>
    <div className="careerbg">
    <Navbar />
    <div className="container ">
          <div className="row main py-5 ">
            <div className="col-lg-6 col-12 pt-lg-5 mt-lg-5 mainheading">
              <h1 className="mt-5 heading fw-bold">Find Your Dream Job In A Well-Reputed IT Company!</h1>
              <p className="headingdes">
              Kick start your professional journey with DigiKhata Pvt Ltd. You’ll get vast exposure in the industry-leading fintech company of Pakistan. We have great growth opportunities for fresh graduates, industry experts and leading management.
              </p>
              <div className='pb-5 mb-5' style={{ display: 'flex', flexDirection: 'row' }}>
                <div>
                  <img src={Google} className="img-fluid" alt="" />
                </div>
                <div>
                  <img src={apple} className="ms-4 img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

        <div className="container">
          <div className="row py-5">
            <div className="col-12 py-5 col-md-6">

            <img src={applyimg} className='img-fluid' alt="" />
            </div>
            <div className="col-12  pb-5 pt-5 col-md-6">
<h2  style={{fontWeight:"900"}}>How to <span className='text-orange'>Apply?</span> </h2>
              <p className='pt-3' style={{fontSize:"0.9rem"}}>If you’re looking for a great career opportunity to excel in your professional journey then DigiKhata could help you meet your goals. Browse this page, our Linked In Page or Facebook page to find a job opportunity. Apply for the job position, read the job requirements carefully and then provide your details as per the requirements.</p>
<p className='pt-3' style={{fontSize:"0.9rem"}}>
Kindly, it is requested you stay honest while applying for the job. Once, you’ll apply for the job then HR will receive your job application digitally. If we’ll find your portfolio suitable for our requirements then we’ll shortlist you & call you for an interview after a few business days.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row py-5">
            
            <div className="col-12  py-5 col-md-6">
<h2 style={{fontWeight:"900"}}>Why are We  <span className='text-orange'>Popular?</span> </h2>
              <p className='pt-3' style={{fontSize:"0.9rem"}}>If you’re looking for a great career opportunity to excel in your professional journey then DigiKhata could help you meet your goals. Browse this page, our Linked In Page or Facebook page to find a job opportunity. Apply for the job position, read the job requirements carefully and then provide your details as per the requirements.</p>
<p className='pt-3' style={{fontSize:"0.9rem"}}>
Kindly, it is requested you stay honest while applying for the job. Once, you’ll apply for the job then HR will receive your job application digitally. If we’ll find your portfolio suitable for our requirements then we’ll shortlist you & call you for an interview after a few business days.</p>
            </div>
            <div className="col-12 py-5 col-md-6">

            <img src={popularimg} className='img-fluid' alt="" />
            </div>
          </div>
        </div>
        <div className="conatiner text-center">
          <h2 style={{fontWeight:"900"}} className='pb-5'>Explore Our <span className='text-orange'>Career</span>  Areas</h2>

          <h2 style={{fontWeight:"900"}} className='pb-5 pt-3'>Valuable Feedback From <br />
            <span className='text-orange'>Our Workforce</span>
</h2>
        </div>

        {/* ----------Carousel------- */}
        <div className="container-fluid text-white">
      <Carousel >
        <div className="carousel-slide">
          <div className="row text-dark ">
            <div className="col-md-4  col-12 mt-5 pt-5 pb-5  ">
              <img src={anas} style={{width:"80%"}} className='img-fluid ' alt="Image 1" />
            </div>
            <div className="col-md-8 col-12 my-auto">
              <div className="row ">
                <div className="col-2">
                  <img src={comaup} style={{width:"80px"}} className='img-fluid' alt="Image 2" />
                </div>
                <div className="col-8 text-dark" style={{marginTop:"70px"}}>
                  <p>Digi Khata is equally useful for every work and business. It is easily flexible to handle your ledger accounts.</p>
                </div>
                <div className="col-2" style={{marginTop:"140px"}}>
                  <img src={comadown} style={{width:"80px"}} className='img-fluid' alt="Image 3" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row  ">
            <div className="col-md-4 col-12 mt-5 pt-5 pb-5  ">
              <img src={sidra} style={{width:"80%"}} className='img-fluid ' alt="Image 1" />
            </div>
            <div className="col-md-8 col-12 my-auto">
              <div className="row ">
                <div className="col-2">
                  <img src={comaup} style={{width:"80px"}} className='img-fluid' alt="Image 2" />
                </div>
                <div className="col-8  text-dark" style={{marginTop:"70px"}}>
                  <p>Whenever I add transactions to Digi Khata, then it sends free Automatic SMS reminders to the customer along with the customer ledger. Maintain the accounts and leave no room for mistakes.</p>
                </div>
                <div className="col-2" style={{marginTop:"140px"}}>
                  <img src={comadown} style={{width:"80px"}} className='img-fluid' alt="Image 3" />
                </div>
              </div>
            </div>
          </div>
        
          <div className="row  ">
            <div className="col-md-4 col-12 mt-5 pt-5 pb-5  ">
              <img src={hanan} style={{width:"80%"}} className='img-fluid ' alt="Image 1" />
            </div>
            <div className="col-md-8 col-12 my-auto">
              <div className="row ">
                <div className="col-2">
                  <img src={comaup} style={{width:"80px"}} className='img-fluid' alt="Image 2" />
                </div>
                <div className="col-8  text-dark" style={{marginTop:"70px"}}>
                  <p>Digi Khata has shrunk our hours-long work shift into minutes. It is very easy-to-use, record transactions in real-time and keep our record safe with data backup</p>
                </div>
                <div className="col-2" style={{marginTop:"140px"}}>
                  <img src={comadown} style={{width:"80px"}} className='img-fluid' alt="Image 3" />
                </div>
              </div>
            </div>
          </div>
        

        
      
      </Carousel>
      </div>
        </>
  )
}

export default Career
