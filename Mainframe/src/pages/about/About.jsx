import Topbar from "../../components/topbar/Topbar";

import Footer from "../../components/footer/Footer"

import "./about.css"

export default function Home() {
  return (
    <>
      <div className="AboutContainer">
        <div className="container-fluid about">
          ABOUT &nbsp; <span style={{ color: "#000080" }}>US</span>
        </div>
        <div className="desc">
          <p>Enlighten Foundation is a Not for
            Profit organization aimed at automation
            of Eye Donation Campaigning Process resulting
            in building a Eye Donor Registry and funding
            of Eye Transplant Surgeries.</p><br />
          <p>We are adopting a technology based approach to reach out to the people by automating the campaign and donor registration processes. The current methods at large have the donor’s online registration processes but have not used any software
            platform to automate the campaigning processes.</p>

        </div>





        <div className="block1 parallax-sec blackish">
          <div className="parallax scrolly-invisible" style={{ background: "url(&quot;&quot;) 50% -30.3262px repeat scroll rgba(0, 0, 0, 0)" }} data-velocity="-.1">
          </div>
          <div className="container">
            <div className="row">
              <div className="title">
                <h2>OUR <span>MISSION</span></h2>
                <span style={{ color: "white" }}>Committed To The Cause of Eradicating Blindness in India</span>
              </div>
              <div className="col-md-3 column">
                <div className="service-box">
                  <h3>TECHNOLOGY DRIVEN Ai SYSTEM</h3>
                  <p>We have developed a unique and first of its kind system which integrates Eye Doners and Eye Banks through a seamless process.</p>
                </div>
              </div>
              <div className="col-md-4 column">
                <div className="service-box">
                  <h3>BRING A SOCIAL CHANGE</h3>
                  <p>Our unique Eye Pledge model is built on people like you. Our Eye Doner referral system helps us become a part of your network
                    We are building a Eye Doner Registry in Tamilnadu.
                  </p>
                </div>
              </div>

              <div className="col-md-3 column">
                <div className="service-box">
                  <h3>EASY TO ACCESS INFORMATION</h3>
                  <p>We have details about all the Eye Banks in Tamilnadu.
                    Our Eye Doner referral system helps us become a part of your network
                  </p>
                </div></div>

            </div>
          </div>
        </div>

        <div className="container-fluid information">
          <div className="">
            <div className="pic">
              <img src="https://images.pexels.com/photos/783200/pexels-photo-783200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>

            </div>
            <div className="abt">
            <div className="title1">
              <h1>PLEDGE YOUR EYES</h1>
            </div><br/>
            <div className="content1">
              <p>It is estimated that currently there are 45
                million individuals worldwide who are bilaterally
                blind. In addition, another 135 million that have
                severely impaired vision in both eyes (Source: WHO). The fact that there are 180 million people in
                the world today who are in some way severely
                visually disabled is an unacceptable problem.
                VisionMate Foundation is a Not for Profit organization aimed at
                automation of Eye Donation Campaigning Process resulting
                in building a Eye Donor Registry and funding of Eye Transplant
                Surgeries. We are adopting a technology based approach to reach
                out to the people by automating the campaign and donor
                registration processes. The current methods at large have
                the donor’s online registration processes but have not used
                any software platform to automate the campaigning processes.
                We bridge the gap between the Donor, the Eye Bank and the
                Cornea Recipient using a web application platform where in
                the donor registration is automated by various online
                campaigning techniques and online and offline networking
                (both social and professional networking) concepts</p>
            </div>
            </div>

          </div>

        </div>


      </div>
      
      <Footer/>
    </>
  );
}
