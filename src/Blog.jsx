import React from 'react'
import "../src/Style/blog.css"
import Navbar from './Navbar';
import Google from '../src/assets/google-play-head.png';
import apple from '../src/assets/app-store-head.png';
import bloghead from '../src/assets/blogs/blog-head-img.png';

const Blog = () => {
  return (
    <div className='blogbg '>
      <Navbar />
      <div className="container">
          <div className="row main py-5">
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
            <div className="col-12 col-md-6 pt-5">
                <img src={bloghead} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Blog
