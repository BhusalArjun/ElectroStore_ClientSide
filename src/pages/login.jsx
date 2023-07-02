import {Container,Col,Row,Card,Form,Button,Alert,Spinner} from "react-bootstrap";
import Base from "../components/base";
import logo from "../assets/logo.png";
import React , { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../services/user.service";
import UserContext from "../context/UserContext";


const Login = () => {
  const redirect = useNavigate();
  const userContext = useContext(UserContext);
  // for two way data bindling
  let [data, setData] = useState({
    email: '',
    password: '',
  });
  //handle change method
  const handleChange = (event, property) => {
    // console.log(event);
    // console.log(property);
    setData({
      ...data,
      [property]: event.target.value
    })
  }
  //default mai chai error false hunxa error aayo vane true show garxa
  let [error, setError] = useState({
    errorData: null,
    isError: false
  });
  // for loading spinner, dy default false gareko
 let [loading, setLoading] = useState(false);
  // const clearData = () => {
  //   setData({
  //     email: '',
  //     password: '',
  //   });
  //   setError({
  //     errorData:null,
  //     isError:false
  //   })
  //   setLoading(false)
  // };
  const submitForm = (event) => {
    event.preventDefault();
    console.log(data);
    //validate client side
    if (data.email === undefined || data.email.trim() === "") {
      toast.error("Email is required !!");
      return;
    }
    if (data.password === undefined || data.password.trim() === "") {
      toast.error("Password is required !!");
      return;
    }
    // all right then calling API
    setLoading(true)
    loginUser(data)
      .then((data) => {
        console.log(data)
        toast.success("Logged In")
        setError({
          errorData:null,
          isError:false
        })


        //redirecting to dashboard page


        //login true vayepaxi setuser data chalne vayo
          // userContext.setIsLogin(true)
          //data which is coming from backend
          // userContext.setUserData(data)

          userContext.login(data)
          redirect("/users/home")
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.response?.data?.message);
        setError({
          errorData: error,
          isError: true
        });
        
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const loginForm = () => {
    return (
      <Container>
      
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Card
              className="my-3 border-0 shadow mb-5" id="makedown"
              style={{ position: "relative", top: -60   }}
            >
              <Card.Body >
              {/* {JSON.stringify(userContext)} */}
                <Container className="text-center mb-3">
                  <img src={logo} alt="logo" height={80} width={80} />
                </Container>
                <h3 className="text-uppercase text-center mb-4"> Login</h3>
                {/* default false banayeko,by show */}
                {/* error bhitra ko is error true xa vane dekhauxa natra no */}
                <Alert className="mt-3"
                  onClose={() =>
                    setError({
                      isError: false,
                      errorData: null,
                    })
                  }
                  dismissible
                  variant="danger"
                  show={error.isError}
                >
                <Alert.Heading>Hey ! there</Alert.Heading>
                  <p>{error.errorData?.response?.data?.message}</p>
                </Alert>
                <Form noValidate onSubmit={submitForm}>
                {/* email login field */}
                  <Form.Group className="mb-3">
                    <Form.Label>Enter your email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      onChange={(event) => handleChange(event, "email")}
                      value={data.email}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Enter your password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      onChange={(event) => handleChange(event, "password")}
                      value={data.password}
                    />
                  </Form.Group>
                  <Container className="text-center">
                    {/* <p>Forget password ? <a href="">click here</a></p> */}
                    <p>
                      If not registered !!{" "}
                      <NavLink to="/register">Click here</NavLink>
                    </p>
                  </Container>
                  <Container className="text-center"  >
                    <Button
                      className="text-uppercase"
                      variant="dark"
                      type="submit"
                      disabled={loading}
                    >
                    <Spinner
                        animation="grow"
                        size="sm"
                        hidden={!loading}
                        className={'me-2'}
                      />
                     <span hidden={!loading}>Please wait...</span>
                    <span hidden={loading}>Login</span>
                    </Button>
                    {/* <Button
                      className="ms-2 text-uppercase"
                      variant="danger" 
                      onClick={clearData}
                    >
                      Reset
                    </Button> */}
                  </Container>
                  
                </Form>
                
              </Card.Body>
            
            </Card>
           
          </Col>
        </Row>
      
      </Container>
     
    )
    
  }

  return (
    <Base
      title="Electro Repair / LogIn"
      description="You can login here. If you have already register the account "
    >
      {/* <h1>This is Login Page</h1> */}
      {loginForm()}
      <br />
      <br />
      <br /><br />
    </Base>
  );
};
export default Login;
