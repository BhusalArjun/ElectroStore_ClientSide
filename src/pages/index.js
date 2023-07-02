import axios from "axios";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Base from "../components/base";
import { toast } from "react-toastify";
import image1 from "../assets/home-img.svg";
import repairsdone from "../assets/fun-fact-icon-1.svg";
import awardswon from "../assets/fun-fact-icon-2.svg";
import happyclient from "../assets/fun-fact-icon-3.svg";
import activeworkers from "../assets/fun-fact-icon-4.svg";
import aboutimg from "../assets/about-img.svg";
import computerRepair from "../assets/service-1.svg";
import laptopRepair from "../assets/service-2.svg";
import smartphoneRepair from "../assets/service-3.svg";
import gameconsoleRepair from "../assets/service-4.svg";
import multimediaRepair from "../assets/service-5.svg";
import smartwatchRepair from "../assets/service-6.svg";
import { Link, NavLink } from "react-router-dom";


function Index() {
  function showSucessToast() {
    toast.success("This is Sucess Message");
  }
  const getDataFromServer = () => {
    toast.info("Getting data from server");
    axios
      .get("http://localhost:9090/users")
      //if success
      .then((response) => {
        console.log(response.data);
        toast.success("Request done!!");
      })
      .catch((data) => {
        console.log(data);
        toast.error("Request Failed!!");
      });
  };
  //not logged in view
   const notLoggedInView=()=>{
      return(
         <Container>
            <Row>
               <Col md={{span:8, offset:2}}> 
                  <Card  className="border-0 shadow mt-5">
                     <Card.Body className="text-center">
                           <h3>
                              You are not logged in !!
                           </h3>
                           <p>Please do login to view the page</p>
                           <Button as={NavLink} variant="dark">Login Now</Button>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      )
   }
  return (
    <Base
      title={"Take the service what you need"}
      description={
        "Welcome to Reparing Store, We provide best item as you need"
      }
      // buttonEnabled={true}
      // buttonText="Start Shopping"
      // buttonType="success"
    >
      {/* <h1>Welcome on Home Page</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora beatae id repellendus, nam inventore accusamus in amet exercitationem temporibus excepturi sit, qui totam commodi explicabo ex voluptate facilis dolorum a, et alias officia! Cumque qui ab praesentium nihil corrupti obcaecati maiores earum voluptatibus inventore perferendis molestias, labore ex! Esse, magni?</p>
           <Button onClick={showSucessToast}>Toastify Success</Button>
           <Button variant="warning" onClick={getDataFromServer}>Get Data from fake API</Button> */}
      {/* home section   */}
      {/* main part   */}
    <main>
      <section class="home" id="home" style={{ position: "relative", top: -60 }}>
        <div className="image">
          <img src={image1} alt="homeimg" />
        </div>
        <div class="content">
          <h3>Why fix it by yourself? Leave it to the pros.</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            nulla enim amet repellat nihil quia.
          </p>
          {/* <a href="#about" class="btn">
            get started
          </a> */}
          <Button ><h4 as={Link} to="/login">Get Started</h4></Button>
          {/* (userContext.isLogin) ? dashboardView () : notLoggedInView() */}
        </div>
      </section>

      {/* fun fact section   */}
      <section class="fun-fact" style={{ position: "relative", top: -60 }}>
        <div className="box">
          <img src={repairsdone} alt="cardOne" />
          <div className="info">
            <h3>2890</h3>
            <p>repairs done</p>
          </div>
        </div>
        <div className="box">
          <img src={awardswon} alt="cardTwo" />
          <div className="info">
            <h3>25</h3>
            <p>awards won</p>
          </div>
        </div>
        <div className="box">
          <img src={happyclient} alt="cardThree" />
          <div className="info">
            <h3>1000</h3>
            <p>happy clients</p>
          </div>
        </div>
        <div className="box">
          <img src={activeworkers} alt="cardFour" />
          <div className="info">
            <h3>45</h3>
            <p>active workers</p>
          </div>
        </div>
      </section>
       {/* about section  */}
        <section class="about" id="about" style={{ position: "relative", top: -70 }}>
            <div class="content">
                <h3>best quality Repair services</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga totam dolores sint doloremque amet ducimus odit tenetur. Exercitationem distinctio sint fuga ab provident eaque necessitatibus blanditiis delectus dolor! Deleniti, sint.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, culpa deleniti. Non hic quisquam impedit enim. Velit ducimus rem sit!</p>
                <a href="#services" class="btn">read more</a>
            </div>
            <div className="image">
                <img src={aboutimg} alt="aboutimsge"/>
            </div>
        </section>
         {/* services section  */}
        <section class="services" id="services" style={{ position: "relative", top: -60 }}>
            <h1 class="heading">our <span>services</span></h1>

            <div class="box-container">
                <div className="box">
                    <img src={computerRepair} alt=""/>
                    <h3>computer repair</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, velit!</p>
                    <Button>Click Here</Button>
                </div>
                <div className="box">
                    <img src={laptopRepair} alt=""/>
                    <h3>laptop repair</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, velit!</p>
                    <Button>Click Here</Button>
                </div>
                <div className="box">
                    <img src={smartphoneRepair} alt=""/>
                    <h3>smartphone repair</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, velit!</p>
                    <Button>Click Here</Button>
                </div>
                <div className="box">
                    <img src={gameconsoleRepair} alt=""/>
                    <h3>game console repair</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, velit!</p>
                    <Button>Click Here</Button>
                </div>
                <div className="box">
                    <img src={multimediaRepair} alt=""/>
                    <h3>multi media repair</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, velit!</p>
                    <Button>Click Here</Button>
                </div>
                <div className="box">
                    <img src={smartwatchRepair} alt=""/>
                    <h3>smartwatch repair</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, velit!</p>
                    <Button>Click Here</Button>
                </div>
            </div>
        </section>
        <section class="contact" id="contact" style={{ position: "relative", bottom: 20 }}>
             <h1 class="heading">contact <span>us</span></h1>

             <div class="row">
                <iframe class="map" src="https://www.google.com/maps/embed/v1/place?q=chunikhel+G&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" allowfullscreen="" loading="lazy"></iframe>

                <form action="">
                    <h3>get in touch</h3>
                    <div class="input-box">
                        <input type="text" placeholder="name"/>
                        <input type="email" placeholder="email"/>
                    </div>
                    <div class="input-box">
                        <input type="number" placeholder="phone"/>
                        <input type="text" placeholder="subject"/>
                    </div>
                    <textarea name="" placeholder="message" id="" cols="30" rows="10"></textarea>
                    <input type="submit" value="send message" class="btn"/>
                </form>
             </div>
         </section>
        </main>
    </Base>
  );
}
// const getDataFromServer = () => {
//     toast.info("Getting data from server");
//     axios
//     .get("https://jsonplaceholder.typicode.com/posts")
//     //if sucess
//     .then((data)=>{
//         console.log(data)
//         toast.success("request done")
//     })
//     //if error
//     .catch((error)=>{
//         console.log(error)
//         toast.error("Something Went Wrong")
//     });
// };

export default Index;
