// import logo from './logo.svg';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./pages/Index";
import ProductCategories from "./pages/ProductCategories";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Dashboard from "./pages/users/Dashboard";
import Profile from "./pages/users/Profile";
// import Home from "./pages/users/Home";
import Home from "./pages/users/Home";
import AboutUser from "./pages/users/AboutUser";
import About from "./pages/About";
import Login from "./pages/login";
import Register from "./pages/Register";
// import  Navbar  from './components/navbar';
import CustomNavbar from "./components/customnavbar";
import { ToastContainer } from "react-toastify";
import UserProvider from "./context/UserProvider";
import Order from "./pages/users/Order";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminHome from "./pages/admin/AdminHome";
import AddTechnicans from "./pages/admin/AddTechnician";
// import { Button,Modal } from 'react-bootstrap';
// import { useState } from 'react';
// import About from './components/About';
// import Services from './components/Services';

function App() {
  //   let Styled={
  //     backgroundColor:"red",
  //     borderRadius:"10px",
  //     color:"white",
  //     padding:"20px"
  //   };
  //  let tempFun=()=>{
  //   console.log("Checking of using props by arrow function");
  //  }
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    //aba sabai childern vayo with the help of userprovider;aba userdata,islogin access garna sakxa
    <UserProvider>
      {/* Setting up routes */}
      <BrowserRouter>
        <CustomNavbar />
        <ToastContainer position="bottom-right" draggable theme="dark" />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/productCategories" element={<ProductCategories />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="aboutuser" element={<AboutUser />} />
            <Route path="home" element={<Home/>} />
            <Route path="orders" element= {<Order/>}/>
          </Route>
          <Route path="/admin" element={<AdminDashboard/>} >
            <Route path="home" element={<AdminHome/>}/>
            <Route path="add-technician" element={<AddTechnicans/>}/>
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
  //using function, arrow function, passsing the props, passing the data from once component to other
  // <div className="container" style={Styled}>
  // <h1>This is App</h1>
  //       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, quo at, labore sapiente in iure amet
  //       nostrum ad ea a minus explicabo molestias earum ipsa vero expedita quae eaque reiciendis.
  //       {2+8}
  //       <br/>
  //       {new Date().toDateString() }
  //       </p>
  //       <About title="using Props" phone="9818144952" myFun={tempFun}  />
  //       <Services/>
  //       </div>

  /* <Button variant="success" onClick={handleShow}>Hello daju</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */
}

export default App;
