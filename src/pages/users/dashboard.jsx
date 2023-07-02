import { Outlet,  NavLink, Navigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
// import {  Container, Row, Col, Card, Button} from "react-bootstrap";
import { isLoggedIn } from "../../auth/HelperAuth";

const Dashboard=()=>{
    const userContext=useContext(UserContext);
   //  const redirect =useNavigate
//making private  dashbord view for routing-path
   const dashboardView = () => {
      return (<div className="text-center">
         <h1>This  is dashboard page</h1>
         {/*nested*/}
         <Outlet/>
      </div>)
   }
   //not logged in view
   // const notLoggedInView=()=>{
   //    return(
   //       <Container>
   //          <Row>
   //             <Col md={{span:8, offset:2}}> 
   //                <Card  className="border-0 shadow mt-5">
   //                   <Card.Body className="text-center">
   //                         <h3>
   //                            You are not logged in !!
   //                         </h3>
   //                         <p>Please do login to view the page</p>
   //                         <Button as={NavLink} variant="dark">Login Now</Button>
   //                   </Card.Body>
   //                </Card>
   //             </Col>
   //          </Row>
   //       </Container>
   //    )
   // }
 return (
   //navigating through condition
   //   (userContext.isLogin) ? dashboardView () : notLoggedInView()
   // (isLoggedIn()) ? dashboardView () : <Navigate to ="/users/home"/>
   (isLoggedIn()) ? dashboardView () : <Navigate to ="/login"/>
 )
 
}
export default Dashboard;  