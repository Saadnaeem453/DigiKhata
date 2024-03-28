import React from 'react'
import gPlay from "../src/assets/google-play-head.png";
import appStore from "../src/assets/app-store-head.png";
import featureHead from "../src/assets/features/features-head-boy.png";
import LedgerAccount from "../src/assets/features/Ledger-Account.png";
import cashRegister from "../src/assets/features/Cash-Register.png";
import businessCard from "../src/assets/features/Business-Card.png";
import earnCash from "../src/assets/features/Earn-Cash.png";
import smsReminder from "../src/assets/features/sms-reminder.png";
import requestPayment from "../src/assets/features/request-payment.png";
import manageStock from "../src/assets/features/manage-stock.png";
import dataBundle from "../src/assets/features/data-bundle.png";
import generateBill from "../src/assets/features/generate-bill.png";
import collectPayment from "../src/assets/features/collect-payment.png";
import manageIncome from "../src/assets/features/manage-income.png";
import businessIdentity from "../src/assets/features/business-identity.png";
import language from "../src/assets/features/languages.png";
import earnCashIcon from "../src/assets/features/earn-cash-icon.png";
import secure from "../src/assets/features/secure (3).png";
import securee from "../src/assets/features/secure.png";
import fingerprint from "../src/assets/features/finger-print.png";
import backup from "../src/assets/features/backup.png";
import featureDownload from "../src/assets/features/feature-download.png";
import Accordion from 'react-bootstrap/Accordion';

import { PiWhatsappLogo } from "react-icons/pi"
import {FiPhone} from "react-icons/fi"



// import cashRegister from "../../assets/features/Cash-Register.png";








import Navbar from './Navbar';
import "../src/Style/Feature.css"
const Feature = () => {
  return (
    <>

    <div
    className={`background-blog img-fluid`}
  >
    <Navbar />

    <section className="font">
      <div className="container ">
        <div className="row">
          <div className=" col-md-6 col-12 mt-5 pt-5 explore">
          <h1 style={{fontSize:"2.2rem"}} className="text-white  fw-bold">
                    Let’s Explore The DigiKhata App
                  </h1>

                  <p style={{lineHeight:'1.6', textAlign:"justify" , wordBreak:"break-word" , fontSize:"0.9rem"}} className="text-white pt-3 justify pe-md-4">
                    DigiKhata offers awesome features that streamline your
                    business procedures & cash flow. You can manage your daily
                    credit transactions, budget & collect your payments faster.
                    Here are the amazing features of DigiKhata and its use
                    cases.
                  </p>

            <div
              className="pb-5 mb-5 flex-wrap flex-md-nowrap"
              style={{
                display: "flex",
              }}
            >
              <div >
                <img src={gPlay} className="img-fluid me-3  google" alt="" />
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
          <div className="col-md-6 col-12   pt-md-5 pt-3">
          <img className="img-fluid mt-md-3 pt-md-5" src={featureHead} alt=""  />
          </div>
        </div>
      </div>
    </section>
  </div>
{/* ==================== create unlimited ledger ================================== */}
<section className='bg-grey font py-5'>
  <div className="container ">
    <div className="row">
    <h2 style={{ fontSize:"1.8rem"}} className='fw-bold orange text-center'>Create Unlimited Ledger</h2>
<h2 style={{ fontSize:"1.8rem"}} className='fw-bold orange text-center mb-5'>Accounts (Khata)</h2>
<div className="col-12 col-lg-6">
  <img src={LedgerAccount} className='img-fluid' alt="" />
</div>
<div className="col-12 col-md-6 px-md-5 px-4 m-auto">
<h3 style={{fontSize:'17px'}} className='fw-bold mt-4 mt-lg-0'>How to use?</h3>
<ul style={{fontSize:"0.9rem"}} className='font'>
  <li>Open Your DigiKhata account and tap on Customers/ Suppliers.</li>
  <li>Press the “ADD CUSTOMER/ SUPPLIER” button.</li>
  <li>Select your customer/ supplier or press “Add New Customer/ Supplier”.</li>
  <li>Type Customer/ Supplier Name & Add mobile number.</li>
  <li>Add entries & send free SMS collection reminders.</li>
  <li>Download & share free pdf reports on Whatsapp with your customers/ suppliers.</li>

</ul>

</div>
  </div>
  </div>
</section>

<section className='dual-color py-5'>
<div className="container text-white">
  <div className="row">
    <h2  style={{fontSize:"1.8rem"}} className='fw-bold text-center'>Manage CashFlow With</h2>
<h2 style={{fontSize:"1.8rem"}} className='fw-bold text-center mb-5'>Cash Book</h2>

<div className="col-12 col-md-6 px-md-5 px-4 m-auto">
<h3 style={{fontSize:'17px'}} className='fw-bold mt-4 mt-lg-0'>How to use?</h3>
<ul style={{fontSize:".92rem"}} className='font'>
  <li>Open your DigiKhata account and click on Cash Book on top of the HOME screen.</li>
  <li>Press on the “IN” button to add your income.</li>
  <li>If you want to add information about relative prospects then Tap on “Select Party” & update information.</li>
  <li>Press “Attach Bills” to attach the screenshots of the invoice.</li>
  <li>After adding an entry you can press “SAVE” to update your cash book.</li>
  <li>Tap on "Out" to add your expenses & follow the same procedure to update information about the entry.</li>
</ul>
</div>
<div className="col-12 col-lg-6">
  <img src={cashRegister} className='img-fluid' alt="" />
</div>
  </div>
</div>
</section>
{/* ======================= Design 100% Free ===================================  */}
<section className='bg-grey font py-5'>
<div className="container">
  <div className="row">
    <h2  style={{fontSize:"1.8rem"}} className="fw-bold text-center orange">Design 100% Free</h2>
    <h2  style={{fontSize:"1.8rem"}} className="fw-bold text-center mb-5 orange">Business Cards</h2>
    <div className="col-12 col-lg-6">
  <img src={businessCard} className='img-fluid' alt="" />
</div>
<div className="col-12 col-md-6 px-md-5 px-4 m-auto">
<h3 style={{fontSize:'17px'}} className='fw-bold mt-4 mt-lg-0'>How to Use?</h3>
<ul  style={{fontSize:".92rem"}} className='font'>
  <li>Click “More” in the bottom right corner of the Home Screen.</li>
  <li>Press “Business Card”.</li>
  <li>Select your favorite design.</li>
  <li>Press “Edit” to add details to your business card.</li>
  <li>Press “SAVE” to update the details.</li>
  <li>Share your business cards on Whatsapp for free.</li>

</ul>

</div>
  </div>
</div>
</section>
{/* ================ Select your language ================================ */}
<section className='dual-color font py-5'>
<div className="container text-white">
  <div className="row">
    <h2 style={{fontSize:"1.8rem"}} className='fw-bold text-center mb-5'>Select Your Language</h2>
<div className="col-12 col-md-6 px-md-5 px-4 m-auto">
<h3  style={{fontSize:'17px'}} className='fw-bold mt-4 mt-lg-0'>How to use?</h3>
<ul  style={{fontSize:".9rem"}} className='font'>
  <li>Open your DigiKhata account.</li>
  <li>Tap on More in the bottom right corner of the Home Screen.</li>
  <li>Click on Settings.</li>
  <li>Tap on “Language”.</li>
  <li>Select your language.</li>
</ul>
</div>
<div className="col-12 col-lg-6">
  <img src={cashRegister} className='img-fluid' alt="" />
</div>
  </div>
</div>
</section>
{/* ====================== Earn Money ========================== */}
<section className='bg-grey font py-5'>
<div className="container">
  <div className="row">
    <h2  style={{fontSize:"1.8rem"}} className="fw-bold text-center orange font">Earn Money with</h2>
    <h2  style={{fontSize:"1.8rem"}} className="fw-bold text-center mb-5 orange font">DigiKhata</h2>
    <div className="col-12 col-lg-6">
  <img src={earnCash} className='img-fluid' alt="" />
</div>
<div className="col-12 col-md-6 px-md-5 px-4 m-auto">
<h3 style={{fontSize:'17px'}} className='fw-bold mt-4 mt-lg-0'>How to use?</h3>
<ul  style={{fontSize:".9rem"}} className='font'>
  <li>Select “Digi Cash” on top of your home screen.</li>
  <li>Add money from Jazz Cash / Easypaisa or any bank account to your DigiCash account.</li>
  <li>Resell airtime & earn up to 2.5% commission on every recharge.</li>
  <li>You can also select “More” in the bottom right corner of the Home Screen.</li>
  <li>Tap on “Earn Money” & press “INVITE FRIENDS”.</li>
  <li>Invite your friends to DigiKhata & you can earn cash up to 50,000 PKR.</li>

</ul>

</div>
  </div>
</div>
</section>
{/*  ==================== unlimited free sms ============================== */}
<section className='dual-color font py-5'>
<div className="container text-white">
  <div className="row">
    <h2   style={{fontSize:"1.8rem"}} className='fw-bold text-center '>Send Unlimited Free SMS</h2>
    <h2  style={{fontSize:"1.8rem"}} className='fw-bold text-center mb-5'>Collection Reminders</h2>

<div className="col-12 col-md-6 px-md-5 px-4 px-md-0  m-auto"> 
<h3 style={{fontSize:'18px'}} className='fw-bold mt-4 mt-lg-0'>How to use?</h3>
<ul  style={{fontSize:".9rem"}} className='font'>
  <li>Add an entry to your customer/supplier’s account to send a free SMS reminder.</li>
  <li>You can click on the “Collection” icon on the top right corner of the Home Screen.</li>
  <li>ap on “SELECT ALL” and select the parties.</li>
  <li>Press “SET DATE” and a pop-up will appear.</li>
  <li>Select the due date and Digi Khata will send Free SMS collection reminder to the prospect.</li>
</ul>
</div>
<div className="col-12 col-lg-6">
  <img src={smsReminder} className='img-fluid' alt="" />
</div>
  </div>
</div>
</section>
{/* ================== send request payment ================== */}
<section className='bg-grey font py-5'>
<div className="container">
  <div className="row">
    <h2  style={{fontSize:"1.8rem"}} className="fw-bold text-center orange">Send & Request</h2>
    <h2  style={{fontSize:"1.8rem"}} className="fw-bold text-center mb-5 orange">Payment</h2>
    <div className="col-12 col-lg-6">
  <img src={requestPayment} className='img-fluid' alt="" />
</div>
<div className="col-12 col-md-6 px-md-5 px-4 m-auto">
<h3 style={{fontSize:'18px'}} className='fw-bold mt-4 mt-lg-0'>How to use?</h3>
<ul  style={{fontSize:".9rem"}} className='font me-4'>
  <li>Now make your payment recovery faster & easier with DigiKhata.</li>
  <li>Tap on “Money” at the bottom or “DigiCash” at the top of the Home screen.</li>
  <li>Press the “Request Money” button.</li>
  <li>Send payment requests to the people via SMS or Whatsapp.</li>
  <li>Press the “Send Money” button on the DigiCash screen.</li>
  <li>Select your payment gateway from JazzCash, Easypaisa or any bank account to send Payments on time.</li>

</ul>

</div>
  </div>
</div>
</section>
{/* ========================= manage stocks ============================ */}
<section className='dual-color font py-5'>
<div className="container text-white">
  <div className="row">
    <h2  style={{fontSize:"1.8rem"}} className='fw-bold text-center '>Manage Stocks With</h2>
    <h2  style={{fontSize:"1.8rem"}} className='fw-bold text-center mb-5'>Stock Book</h2>

<div className="col-12 col-md-6  px-md-0  my-auto"> 
<h3 style={{fontSize:'18px'}} className='fw-bold mt-4 mt-lg-0'>How to Use?</h3>
<ul  style={{fontSize:".9rem"}} className='font'>
  <li>Stay updated with your stock status with Stock Book. Press Stock Book at the top of the Home screen.</li>
  <li>Press the “Add New Item” button, type the item name and select the unit.</li>
  <li>Press the “Stock In” button to add an entry about the stock you’ve purchased or borrowed.</li>
  <li>Type the quantity & rate of the stock.</li>
  <li>Add more details about the stock you’ve collected.</li>
  <li>Select party, Add Bill No, Select date & time.</li>
  <li>You can also attach screenshots from your phone Gallery or Camera of your phone .</li>
  <li>Click the “Save” button to add an entry.</li>
  <li>Press the “Stock Out” button and follow the same procedure.</li>
  <li>You can also select a “Stock Out” entry, tap “Create Bills” to generate & share bills.</li>


</ul>
</div>
<div className="col-12 col-lg-6 text-center">
  <img src={manageStock} className='img-fluid' alt="" />
</div>
  </div>
</div>
</section>
{/* ========================= Buy and resell data ============================ */}
<section className='bg-grey font py-5'>
<div className="container">
  <div className="row">
    <h2 className="fw-bold text-center orange">Buy & Resell Mobile, Internet</h2>
    <h2 className="fw-bold text-center mb-5 orange">and Data Bundles</h2>
    <div className="col-12 col-lg-6">
  <img src={dataBundle} className='img-fluid' alt="" />
</div>
<div className="col-12 col-md-6 px-md-5 px-4 m-auto">
<h3 style={{fontSize:'17px'}} className='fw-bold mt-4 mt-lg-0'>How to use?</h3>
<ul className='font'>
  <li>Press “DigiCash” on top or “Money” at the bottom of the Home screen.</li>
  <li>Tap on the available option from “Telenor, Zong, Jazz or Ufone.”</li>
  <li>Press the “Packages” option on the top right corner.</li>
  <li>Choose a package and press the “Buy Now” button.</li>
  <li>Enter the mobile number where you want to send the bundle.</li>
  <li>Press the “Pay Now” button.</li>

</ul>

</div>
  </div>
</div>
</section>
{/* ========================= Generate and share bill ============================ */}
<section className='dual-color font py-5'>
<div className="container text-white">
  <div className="row">
    <h2  className=' fw-bold text-center font '>Generate & Share Bills</h2>
    <h2 className='fw-bold text-center mb-5 font'>With Bill Book</h2>

<div className="col-12 col-md-6  px-md-0  my-auto"> 
<h3 style={{fontSize:'17px'}} className='fw-bold mt-4 mt-lg-0'>How to use?</h3>
<ul className='font'>
  <li>Tap on the “Bill Book” on top of the Home Screen.</li>
  <li>Press on the “CREATE NEW BILL” button.</li>
  <li>Enter Amount, Add Items, select Party & Add Details.</li>
  <li>Select Date & Time.</li>
  <li>Click the “Save” button to generate your bill.</li>
  <li>You can “Download” and “Share” bills with your contacts..</li>
  <li>You can also download the Pdf report of your bills.</li>
  {/* <li>Click the “Save” button to add an entry.</li>
  <li>Press the “Stock Out” button and follow the same procedure.</li>
  <li>You can also select a “Stock Out” entry, tap “Create Bills” to generate & share bills.</li> */}


</ul>
</div>
<div className="col-12 col-lg-6 text-center">
  <img src={generateBill} className='img-fluid' alt="" />
</div>
  </div>
</div>
</section>
{/* ========================= Benifits of Digikhata App ============================ */}
<section className='bg-grey font py-5 '>
<div className="container px-md-3 px-lg-5 px-4">
  <h2 className="fw-bold text-center mb-md-5 mb-3">Benefits Of DigiKhata App</h2>
  <div className="row">
    <div className="col-12 col-md-6 px-lg-5 px-3 mt-4">
      <div className="row">
        <div className="col-2 px-md-4">
        <img src={collectPayment} className='img-fluid' alt="" />
        </div>
        <div className="col-10 mb-3">
          <h3 style={{fontSize:" 1.1rem" , fontWeight:"bolder"
}} className="pe-lg-2 ">Manage & Collect Your Payments Quickly</h3>
          <p style={{fontSize:"0.9rem",textAlign: "justify", wordWrap: "break-word"}} className="justify">You can add unlimited ledger accounts of your customer/ suppliers. It keeps all the prospects updated about their accounts in real-time. You can send unlimited Free SMS collection reminders to your customers and collect your payments 3x faster.</p>
        </div>
        <div className="col-2 px-md-4">
          <img src={manageIncome} className='img-fluid' alt="" />
        </div>
        <div className="col-10 mb-3">
        <h3 style={{fontSize:" 1.1rem" , fontWeight:"bolder"
}} className="h3 fw-bold  pe-lg-2 ">Manage Your Income & Expenses Smartly</h3>
          <p style={{fontSize:"0.9rem",textAlign: "justify", wordWrap: "break-word"}} className="justify">You can update, review and manage your income & expenses with Cash Book. It helps you manage your cash flow with useful insights. Click on "History" on the top right corner to view report. You can download a pdf report & share with your contacts on Whatsapp.</p>
        </div>
        <div className="col-2 px-md-4">
        <img src={businessIdentity} className='img-fluid' alt="" />

        </div>
        <div className="col-10 mb-3">
        <h3 style={{fontSize:" 1.1rem" , fontWeight:"bolder"
}} className="h3 fw-bold  ">Create Your Business Identity & Share With Everyone</h3>
          <p style={{fontSize:"0.9rem",textAlign: "justify", wordWrap: "break-word"}} className="justify">If you find it difficult or expensive to create your business’ identity then create your business card with DigiKhata. You can select from multiple designs and create your business identity. Share your business card with your contacts on Whatsapp easily.</p>
        </div>

      </div>
    </div>
    <div className="col-12 col-md-6 px-lg-5 px-3 mt-4">
    <div className="row">
        <div className="col-2 px-md-4">
        <img src={language} className='img-fluid' alt="" />

        </div>
        <div className="col-10 mb-3">
        <h3 style={{fontSize:" 1.1rem" , fontWeight:"bolder"
}} className="h3 fw-bold  ">Easily Comprehensible App In Multiple Languages</h3>
          <p style={{fontSize:"0.9rem",textAlign: "justify", wordWrap: "break-word"}} className="justify">DigiKhata app is available in multiple languages so you can create your ledger accounts in an easily comprehensible way. It is available in your native language so you can easily record, review and update your bookkeeping record without any hassle.</p>
        </div>
        <div className="col-2 px-md-4">
        <img src={earnCashIcon} className='img-fluid' alt="" />

        </div>
        <div className="col-10 mb-3">
        <h3 style={{fontSize:" 1.1rem" , fontWeight:"bolder"
}} className="h3 fw-bold  ">Earn Cash Anywhere & Anytime With DigiKhata</h3>
          <p style={{fontSize:"0.9rem",textAlign: "justify", wordWrap: "break-word"}} className="justify">You can earn money with DigiKhata at your convenience. You can invite your friends to DigiKhata and get a chance to win cash up to 50,000\- Rs. Also, tap on "Digi Cash" on top of the Home screen. Login to Digi Cash and earn up to 2.5% commission by reselling airtime.</p>
        </div>
        <div className="col-2 px-md-4">
        <img src={secure} className='img-fluid' alt="" />

        </div>
        <div className="col-10 mb-3">
        <h3 style={{fontSize:" 1.1rem" , fontWeight:"bolder"
}} className="h3 fw-bold  ">Secure Your Record With A Well-Encrypted Solution</h3>
          <p style={{fontSize:"0.9rem",textAlign: "justify", wordWrap: "break-word"}} className="justify">DigiKhata offers 100% free automatic cloud backup that helps keep your record safe for a lifetime. You don’t have to buy additional storage your upgrade your mobile phone because Digi Khata has got you covered with a guaranteed data backup solution.</p>
        </div>

      </div>
    </div>
  </div>

</div>
</section>
{/* ========================Encrypted Digi Khata================== */}
<section className='dual-color'>
<div className="container">
  <div  className="row text-center text-white py-5 ">
    <h3 className='fw-bold' >Use The Well-Encrypted Digital <br />
Khata App For Your Business</h3>
  </div>

  <div className="row  ga-3 ">
    <div className="col-md-6 col-lg-4 col-12 mb-4 enc-cards ">
      <div className="bg-grey rounded-3 px-3 py-3 ">
<img src={securee} alt="" />
        <h3 style={{fontSize:" 1.1rem" , fontWeight:"bolder"
}} className='mt-3 mb-1 fw-bold'>Pin Code</h3>
        <p  style={{fontSize:"0.9rem",textAlign: "justify", wordWrap: "break-word"}} className='inline-text'>You can secure your essential business information with DigiKhata. Open settings and click on “App Lock”. Tap “PIN CODE” and enter your code to secure your app. In this way, you can prevent your data from unauthorized access.</p>
      </div>
    </div>
    <div className="col-md-6 col-lg-4 col-12 mb-4 enc-cards">
      <div className="bg-grey rounded-3  px-3 py-3">
<img src={fingerprint} alt="" />
        <h3 style={{fontSize:" 1.1rem" , fontWeight:"bolder"
}} className='mt-3 mb-1 fw-bold'>Fingerprint Lock</h3>
        <p style={{fontSize:"0.9rem",textAlign: "justify", wordWrap: "break-word"}} className='inline-text'>DigiKhata offers multiple ways to secure your app. Open settings and tap on “App Lock”. Enable the toggle against FINGERPRINT. Touch the fingerprint sensor of your device to apply a fingerprint lock for the Digi Khata app to secure data.</p>
      </div>
    </div>
    <div className="col-md-6 col-lg-4 col-12 mb-4 enc-cards">
      <div className="bg-grey rounded-3  px-3 py-3">
<img src={backup} alt="" />
        <h3 style={{fontSize:" 1.1rem" , fontWeight:"bolder"
}} className='mt-3 mb-1 fw-bold'>100% Free Backup</h3>
        <p style={{fontSize:"0.9rem",textAlign: "justify", wordWrap: "break-word"}} className='inline-text'>
DigiKhata is the most reliable bookkeeping and accounting application. It offers 100% free cloud-based data backup automatically. It guaranteed the security of your data for a lifetime and prevent your data from unauthorized access</p>
      </div>
    </div>
  </div>

  <div className="row px-md-3 px-lg-5 px-3 ">
    <div className="col-md-6 col-12 mt-5 my-auto text-white pb-5">
      <h2 className='fw-bold  pt-5'>Download Offline</h2>
      <h2 className='fw-bold '>PDF Reports</h2>
<p style={{fontSize:"0.9rem"}} className='col-md-9 col-12 px-0 text-white inline-text my-auto'>
DigiKhata offers the most unique feature to its users. You can download free PDF reports about the ledger accounts of your customers and suppliers online and offline. Share PDF reports with relative prospects on Whatsapp and keep them updated about their ledger accounts.
</p>
    </div>

 
  <div className="col-md-6 col-12 my-auto color-white">
    <div className="col-md-6 col-12 text-sm-center ms-lg-auto text-md-right my-4 mt-md-0">
      <img src={manageStock} style={{width:"272px", height:"497px"}} alt="" />
    </div>
  </div>
  </div>

  
</div>

</section>
{/* Downlaod DigiKhata */}

<div className="row pt-5 pb-5 px-lg-5 px-0 mx-0">
    <div className="col-md-6 col-12 order-12">
<img src={featureDownload } style={{width:"75%", height:"100%", marginLeft:"150px"}} className='img-fluid' alt="" />
    </div>
    <div className="col-md-6 col-12 my-auto ps-md-5 ps-3 pb-0 pb-md-0">
      <h2   style={{fontSize:"1.8rem"}} className='fw-bold pb-3'>Download DigiKhata App & <br /> Take Control Of Your <br />
       Finances</h2>
       <img src={gPlay} alt="" />
       <img src={appStore} alt="" />

    </div>
  </div>
{/* Feature Faq */}
<section className="py-5" style={{ backgroundColor: "#f8f8f8" }}>
          <div className="pt-5">
            <div className="container">
              <div className="row accordianHeading">
                <div className="col-md-4 col-12">
                  <h3 style={{fontWeight:"400"}} className="accordianHeading">Frequently Asked Question</h3>
                  <p style={{fontSize:"0.89rem"}}>
                    Is this guide help for you? If you still have any queries
                    about the DigiKhata app then contact us now!
                  </p>
                  <div className="d-flex text-white">
                    <div
                      className="bg-orange me-2 px-2 py-2 pointer"
                      style={{ borderRadius: "5px", fontSize:"0.89rem" }}
                    >
                      <PiWhatsappLogo style={{ fontSize: "25px" }} /> WhatsApp
                    </div>
                    <div
                      className="bg-orange px-4 py-2 pointer"
                      style={{ borderRadius: "5px",fontSize:"0.89rem" }}
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
  </>
  )
}

export default Feature