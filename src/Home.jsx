import { React, useState } from 'react'
import "../src/Style/home.css"
import img1 from "../src/assets/billbook.png"
import img2 from "../src/assets/cashbook.png"
import img3 from "../src/assets/billbook.png"
import img4 from "../src/assets/stockbook.png"
import img5 from "../src/assets/staffbook.png"
import img6 from "../src/assets/dokaan.png"
import img7 from "../src/assets/unlimited-customer.png"
import img8 from "../src/assets/cash-in.png"
import img9 from "../src/assets/free-business.png"
import img10 from "../src/assets/multiple-language.png"
import img11 from "../src/assets/earn-money.png"
import img12 from "../src/assets/multi-devices.png"
import { FaYoutube } from "react-icons/fa"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img13 from "../src/assets/Dr-Kinza.png"
import img14 from "../src/assets/Sheik-Nouman.png"
import img15 from "../src/assets/Shoaib-Jameel.png"
import videoThum from "../src/assets/video-thum.png"
import comaup from "../src/assets/inverted-comma-up.png"
import comadown from "../src/assets/inverted-comma-down.png"
import Accordion from 'react-bootstrap/Accordion';
import { PiWhatsappLogo } from "react-icons/pi"
import { FiPhone } from "react-icons/fi"
import Navbar from "../src/Navbar.jsx"
import Manimg from "../src/assets/Homeman.png"
import Google from "../src/assets/google-play-head.png"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='backgroundimg'>
        <Navbar />
        <div className="container pt-5">

          <div className="row main pt-5">
            <div className=" col-12 col-md-6 pt-lg-5 mt-lg-5 mainheading ">
              <h1 className='mt-5 pt-5 heading fw-bold'>Barhao Karobar Say Nata!  Download Digi Khata</h1>
              <p className='headingdes'>DigiKhata is a 100% secure and simple bookkeeping app. Record and manage your business transactions easily with DigiKhata app & recover your payments 3X faster.</p>
              <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                <div><img src={Google} className="img-fluid" alt="" /></div>
                <div><img src={Google} className="img-fluid" alt="" /></div>
                <div><img src={Google} className="img-fluid" alt="" /></div>
              </div>

            </div>
            <div className="col-md-6 pt-5 col-12 mt-lg-3">
              <img src={Manimg} className='img-fluid' alt="" />
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container ">
          <div className="homeHeading text-center pt-5 ">
            <h1 style={{ fontSize: "2.2rem ", fontWeight: "400" }} className='pb-2'>Grow Your Business With Digi Khata App</h1>
            <p style={{ fontSize: "0.89rem", lineHeight: "1.6", fontWeight: "400" }} >DigiKhata aims to empower small businesses in Pakistan with reliable & simple business solutions. It helps businesses to record <br />
              their credits easily on their mobile phone only with a few clicks. Get rid of outdated bookkeeping methods and shift to a more <br /> efficient solution.</p>
          </div>
        </div>
        {/* Home.2 Grow your business */}
        <div className="container">
          <div className="row pb-5">

            <div style={{ textAlign: "justify", wordWrap: "break-word" }} className="col-12 col-md-6 mt-5 pt-5 homeHeading2 ">
              <h3 style={{ fontWeight: "400" }}>One-Stop Solution For Small <br />
                Businesses</h3>
              <p style={{ fontSize: "0.92rem", fontWeight: "400", lineHeight: "1.6" }} className='w-75'>
                Manage your business on the go with the DigiKhata app. It is an all-inclusive bookkeeping solution that also helps you collect your payments 3X faster. With free cloud backup, it keeps your business record 100% safe and secure.
              </p>

            </div>
            <div className="col-12 col-md-6 mt-5 homeImages d-flex">
              <div className="row px-0">
                <div className="col-12 mb-3">
                  <div className="d-flex">
                    <div className="col-2 d-flex justify-content-center">
                      <img src={img1} style={{ height: "30px" }} className="me-5 img-fluid" alt="" />
                    </div>
                    <div className="col-10" style={{ fontSize: "1.1rem" }}>
                      Account Leader
                    </div>
                  </div>
                </div>


                <div className="col-12 mb-3">
                  <div className="d-flex">
                    <div className="col-2 d-flex justify-content-center">
                      <img src={img2} style={{ height: "30px" }} className="me-5 img-fluid" alt="" />
                    </div>
                    <div className="col-10" style={{ fontSize: "1.1rem" }}>
                      Cash Book
                    </div>
                  </div>
                </div>

                <div className="col-12 mb-3">
                  <div className="d-flex">
                    <div className="col-2 d-flex justify-content-center">
                      <img src={img3} style={{ height: "30px" }} className="me-5 img-fluid" alt="" />
                    </div>
                    <div className="col-10" style={{ fontSize: "1.1rem" }}>

                      Bill Book
                    </div>
                  </div>
                </div>

                <div className="col-12 mb-3">
                  <div className="d-flex">
                    <div className="col-2 d-flex justify-content-center">
                      <img src={img4} style={{ height: "30px" }} className="me-5 img-fluid" alt="" />
                    </div>
                    <div className="col-10" style={{ fontSize: "1.1rem" }}>
                      Stock Book
                    </div>
                  </div>
                </div>

                <div className="col-12 mb-3">
                  <div className="d-flex">
                    <div className="col-2  d-flex justify-content-center">
                      <img src={img5} style={{ height: "30px" }} className="me-5 img-fluid" alt="" />
                    </div>
                    <div className="col-10" style={{ fontSize: "1.1rem" }}>
                      Staff Book
                    </div>
                  </div>
                </div>

                <div className="col-12 mb-3">
                  <div className="d-flex">
                    <div className="col-2 d-flex justify-content-center">
                      <img src={img6} style={{ height: "30px" }} className="me-5 img-fluid" alt="" />
                    </div>
                    <div className="col-10" style={{ fontSize: "1.1rem" }}>
                      Digi Dokaan
                    </div>
                  </div>
                </div>




              </div>
            </div>

          </div>
        </div>

        {/* Cards */}
        <div className="container">
          <div style={{ justifyContent: "space-around", textAlign: "justify", wordWrap: "break-word" }} className="cardss  pb-4">

            <div className="d-card px-3 " >
              <img src={img7} className='img-fluid pb-3 pt-3' alt="" />
              <h5 className='pb-4 ' style={{ fontSize: "1.1rem", fontWeight: "400" }}> Unlimited Customers</h5>
              <p className='d-card-detail pt-1 pb-4'>Once you log in to the DigiKhata app. Then tap on the “ADD CUSTOMER” button. Type your customer name and add their details from your contact. Or Click “Add New Customer” Type the name Add contact details.</p>
            </div>

            <div className=" d-card px-3  " >
              <img src={img8} className='img-fluid pb-3 pt-3' alt="" />
              <h5 className='pb-4 ' style={{ fontSize: "1.1rem", fontWeight: "400" }}> Cash In / Cash Out</h5>
              <p className='d-card-detail pt-1 pb-4'>Tap on “Cash Book” on the Home Screen. Add your Cash In & Cash Out quickly. With the built-in calculator, you can easily evaluate your expenses & income. Add details, attach bills and download free pdf report.</p>
            </div>

            <div className=" d-card px-3 " >
              <img src={img9} className='img-fluid pb-3 pt-3' alt="" />
              <h5 className='pb-4 ' style={{ fontSize: "1.1rem", fontWeight: "400" }}> Free Business Cards</h5>
              <p className='d-card-detail pt-1 pb-4'>Represent your business the right way. Are you finding it expensive to have a creative business card? With DigiKhata you can create 100% free custom business cards & share them on Whatsapp.</p>
            </div>

            <div className=" d-card px-3 " >
              <img src={img10} className='img-fluid pb-3 pt-3' alt="" />
              <h5 className='pb-4 ' style={{ fontSize: "1.1rem", fontWeight: "400" }}> Available In Multiple Languages</h5>
              <p className='d-card-detail pt-1 pb-4'>DigiKhata is designed over the idea of introducing “simple yet innovative” solutions to local businesses in Pakistan. Therefore, it is available in multiple easy-to-understand languages for everyone i.e. Urdu, اردو، English, پبنتو، سندھی, فارسی اور پنجابی۔</p>
            </div>

            <div className="  d-card px-3 " >
              <img src={img11} className='img-fluid pb-3 pt-3' alt="" />
              <h5 className='pb-4 ' style={{ fontSize: "1.1rem", fontWeight: "400" }}>Earn Money</h5>
              <p className='d-card-detail pt-1 pb-4'>Now you can earn money by reselling airtime with the Digi Cash feature. Get up to 2.5% comission on every recharge and increase your income anytime, anywhere You can also invite your friends to DigiKhata app & earn cash up to 50,000/- Rs.</p>
            </div>

            <div className=" d-card px-3 " >
              <img src={img12} className='img-fluid pb-3 pt-3' alt="" />
              <h5 className='pb-4 ' style={{ fontSize: "1.1rem", fontWeight: "400" }}>Multi Devices</h5>
              <p className='d-card-detail pt-1 pb-4'>If you are multiple partners running a single business then you can use DigiKhata to update, remove and add your bookkeeping records all at once. Making it easier for business owners to stay informed of their dealings in real-time.
              </p>
            </div>
          </div>
        </div>
        {/* ----------------------Home.3 video users --------------------*/}
        <div className="container mt-5 mb-4 ">
          <div className="row">
            <div className=" users col-xl-6 col-12">
              <h2 style={{ fontSize: "1.8rem", fontWeight: "400" }}>50 Lakh+ Users Trust Digi Khata</h2>
              <p style={{ fontSize: ".89rem", fontWeight: "400" }}>DigiKhata caters to the digital needs of every business <br /> including;</p>
              <ul style={{ fontSize: "0.89rem" }}>
                <li>Kiryana (utility store)</li>
                <li>Mobile Shop</li>
                <li>Supermart</li>
                <li>Restaurant</li>
                <li>Bakery</li>
                <li>Pharmacy</li>
                <li>Boutique
                </li>
                <li>Departmental Store</li>
                <li>Garments Shop</li>
                <li>Milk Shop</li>
                <li>Jewelry Shop</li>
                <li>Real Estate Office</li>
              </ul>
            </div>
            <div className="col-12 col-md-6 my-auto">
              <div
                className="d-flex  my-auto position-relative"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%", // Ensure the container takes full height
                }}
              >
                {/* Image */}
                <img
                  src={videoThum}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />

                {/* Play button icon */}
                <Button
                  variant="transparent"
                  style={{
                    position: 'absolute',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    width: '100%',
                    background: 'none',
                    border: 'none',
                  }}

                >
                  <FaYoutube size={50} color="#fff" onClick={handleShow} />
                </Button>
              </div>

              {/* Modal */}
              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Body style={{ display: "flex", flexDirection: "row" }}>
                  <iframe
                    width="500"
                    height="500"
                    src="https://www.youtube.com/embed/Y-0I4PKNH9E"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </Modal.Body>
              </Modal>
            </div>

          </div>
        </div>

        {/*----------------------------- Feedbacks --------------------------------- */}
        <div className="container-fluid feedback text-white">
          <Carousel autoPlay infinite interval={100} >
            <div className="carousel-slide">
              <div className="row  ">
                <div className="col-md-4 col-12 mt-5 pt-5 pb-5  ">
                  <img src={img13} style={{ width: "80%" }} className='img-fluid ' alt="Image 1" />
                </div>
                <div className="col-md-8 col-12 my-auto">
                  <div className="row ">
                    <div className="col-2">
                      <img src={comaup} style={{ width: "80px" }} className='img-fluid' alt="Image 2" />
                    </div>
                    <div className="col-8" style={{ marginTop: "70px" }}>
                      <p>Digi Khata is equally useful for every work and business. It is easily flexible to handle your ledger accounts.</p>
                    </div>
                    <div className="col-2" style={{ marginTop: "140px" }}>
                      <img src={comadown} style={{ width: "80px" }} className='img-fluid' alt="Image 3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row  ">
              <div className="col-md-4 col-12 mt-5 pt-5 pb-5  ">
                <img src={img15} style={{ width: "80%" }} className='img-fluid ' alt="Image 1" />
              </div>
              <div className="col-md-8 col-12 my-auto">
                <div className="row ">
                  <div className="col-2">
                    <img src={comaup} style={{ width: "80px" }} className='img-fluid' alt="Image 2" />
                  </div>
                  <div className="col-8" style={{ marginTop: "70px" }}>
                    <p>Whenever I add transactions to Digi Khata, then it sends free Automatic SMS reminders to the customer along with the customer ledger. Maintain the accounts and leave no room for mistakes.</p>
                  </div>
                  <div className="col-2" style={{ marginTop: "140px" }}>
                    <img src={comadown} style={{ width: "80px" }} className='img-fluid' alt="Image 3" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row  ">
              <div className="col-md-4 col-12 mt-5 pt-5 pb-5  ">
                <img src={img14} style={{ width: "80%" }} className='img-fluid ' alt="Image 1" />
              </div>
              <div className="col-md-8 col-12 my-auto">
                <div className="row ">
                  <div className="col-2">
                    <img src={comaup} style={{ width: "80px" }} className='img-fluid' alt="Image 2" />
                  </div>
                  <div className="col-8" style={{ marginTop: "70px" }}>
                    <p>Digi Khata has shrunk our hours-long work shift into minutes. It is very easy-to-use, record transactions in real-time and keep our record safe with data backup</p>
                  </div>
                  <div className="col-2" style={{ marginTop: "140px" }}>
                    <img src={comadown} style={{ width: "80px" }} className='img-fluid' alt="Image 3" />
                  </div>
                </div>
              </div>
            </div>




          </Carousel>
        </div>

        {/* ---------------------FAQS--------------- */}
        <section className="py-5" style={{ backgroundColor: "#f8f8f8" }}>
          <div className="pt-5">
            <div className="container">
              <div className="row accordianHeading">
                <div className="col-md-4 col-12">
                  <h3 style={{ fontWeight: "400" }} className="accordianHeading">Frequently Asked Question</h3>
                  <p style={{ fontSize: "0.89rem" }}>
                    Is this guide help for you? If you still have any queries
                    about the DigiKhata app then contact us now!
                  </p>
                  <div className="d-flex text-white">
                    <div
                      className="bg-orange me-2 px-2 py-2 pointer"
                      style={{ borderRadius: "5px", fontSize: "0.89rem" }}
                    >
                      <PiWhatsappLogo style={{ fontSize: "25px" }} /> WhatsApp
                    </div>
                    <div
                      className="bg-orange px-4 py-2 pointer"
                      style={{ borderRadius: "5px", fontSize: "0.89rem" }}
                    >
                      <FiPhone style={{ fontSize: "22px" }} />
                      {" "}  Call Us
                    </div>
                  </div>
                </div>
                <div className="col-md-8 col-12">
                  <div className="">
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          How To Add Your Business In DigiKhata?
                        </Accordion.Header>
                        <Accordion.Body>
                          Install the DigiKhata app on your phone or open the
                          online app on your browser. Log in to the DigiKhata
                          app and add your number. When you’ll receive the OTP
                          number then enter it into the app. Then add your
                          business name and you’re ready to go.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          How to add Customers/ Suppliers In DigiKhata?
                        </Accordion.Header>
                        <Accordion.Body>
                          Click on Customers/ Suppliers on top of the Home
                          Screen. Tap on Add CUSTOMER/SUPPLIER button. If the
                          customer/supplier is already in your contacts then add
                          from there. If it’s not in your contacts then add the
                          customer/supplier name & their number and a new ledger
                          account is created.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          Is DigiKhata Safe To Keep My Business Record?
                        </Accordion.Header>
                        <Accordion.Body>
                          DigiKhata is a 100% secure cloud-based bookkeeping and
                          accounting app. It also keeps your data safe for
                          lifetime with free cloud backup.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Home
