import { Container, Col, Row, Card, Form, Button, Spinner } from "react-bootstrap";
import Base from "../components/base";
import logo from "../assets/logo.png";
import { useState } from "react";
import { toast } from "react-toastify";
import { registerUser } from "../services/user.service";

const Register = () => {
  let [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    about: "",
    gender: "",
  });

  const [errorData, setErrorData] = useState({
    isError: false,
    errorData: null
  });

  // for loading spinner, dy default false gareko
  const [loading, setLoading]=useState(false);

  //handle change method
  const handleChange = (event, property) => {
    // console.log(event);
    // console.log(property);
    setData({
      ...data,
      [property]: event.target.value,
    });
  };
  const submitForm=(event)=>{
    event.preventDefault(); 
      console.log(data);
      //validate client side
      if(data.name === undefined || data.name.trim() =='') {
        toast.error("Please enter the name");
        return;
      }
      if(data.email === undefined || data.email.trim() == ''){
        toast.error("Email is required !!");
        return;
      }
      if(data.password === undefined || data.password.trim() == ''){
        toast.error("Password is required!!");
      return;
      }
      if(data.confirmPassword === undefined || data.confirmPassword.trim() == ''){
        toast.error("Confirm Password is required");
        return;
      }
      if(data.password !== data.confirmPassword){
        toast.error("Password doesn't matched to confirm password")
        return
      };
      if(data.gender.trim() =='' || data.gender == undefined ){
        toast.error("Selecting Gender is required");
        return;
      }
      if(data.about.trim() == '' || data.about == undefined){
        toast.error("About is required")
        return
      }
      // all right then call api
      //register user ma data pass hunxa which promise then userdata pauxa and pass the message created successdully
      
      setLoading(true)
      registerUser(data)
      .then(userData =>   {
        console.log(userData)
        toast.success("User Created Successfully!!");
        clearData();
      })
      //if to throw the error
      .catch(error=>{
        console.log(error); 
        setErrorData({
          isError:true,
          errorData:error
        })
        toast.error("Error in creating user !! Try Again")
      })
      .finally(()=>{
        setLoading(false)
      })
  }
  //for reset data button
  const clearData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      about: "",
      gender: "",
    });
    setErrorData({
      errorData:null,
      isError:false
    })
  };

  const registerForm = () => {
    return (
      <Container className="">
        {/* <Row>
                <Col className="bg-primary">
                    <h1>is it using 6 grids</h1>
                </Col>
                <Col className="bg-warning">f
                    <h1>another column so 6</h1>
                </Col>
            </Row> */}
        <Row>
          {/* {JSON.stringify(data)}; */}
          <Col sm={{ span: 6, offset: 3 }}>
            <Card
              className="my-3 border-0 shadow p-4"
              style={{
                position:'relative',
                top: -60,
              }}
            >
              <Card.Body>
                <Container className="text-center mb-3">
                  <img src={logo} alt="store logo" height={80} width={80} />
                </Container>
                <h3 className="mb-4 text-center text-uppercase">
                   Signup Here
                </h3>
                <Form noValidate onSubmit={submitForm}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Enter your name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      value={data.name}
                      onChange={(event) => handleChange(event, "name")}
                      isInvalid={errorData.errorData?.response?.data?.name}
                    />
                    <Form.Control.Feedback type="invalid">{errorData.errorData?.response?.data?.name}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Enter your email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={data.email}
                      onChange={(event) => handleChange(event, "email")}
                      isInvalid={errorData.errorData?.response?.data?.email}
                    />
                     <Form.Control.Feedback type="invalid">{errorData.errorData?.response?.data?.email}</Form.Control.Feedback>

                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Enter new password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      value={data.password}
                      onChange={(event) => handleChange(event, "password")}
                      isInvalid={errorData.errorData?.response?.data?.password}
                    />
                     <Form.Control.Feedback type="invalid">{errorData.errorData?.response?.data?.password}</Form.Control.Feedback>

                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formConfigPassword">
                    <Form.Label>Re enter password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Re enter password"
                      value={data.conformPassword}
                      onChange={(event) =>handleChange(event, "confirmPassword")}
                      isInvalid={errorData.errorData?.response?.data?.confirmPassword}
                    />
                     <Form.Control.Feedback type="invalid">{errorData.errorData?.response?.data?.confirmPassword}</Form.Control.Feedback>

                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label>Gender</Form.Label>
                    <div>
                      <Form.Check
                        inline
                        name="gender"
                        label="Male"
                        type={"radio"}
                        id={`gender`}
                        value={"male"}
                        checked={data.gender == "male"}
                        onChange={(event) => handleChange(event, "gender")}
                      />
                      <Form.Check
                        inline
                        name="gender"
                        label="Female"
                        type={"radio"}
                        id={`gender`}
                        value={"female"}
                        checked={data.gender == "female"}
                        onChange={(event) => handleChange(event, "gender")}
                      />
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label>Write Something about yourself</Form.Label>
                    <Form.Control
                      as={"textarea"}
                      rows="6"
                      placeholder="Write here"
                      value={data.about}
                      onChange={(event) => handleChange(event, "about")}
                      isInvalid={errorData.errorData?.response?.data?.about}
                    />
                     <Form.Control.Feedback type="invalid">{errorData.errorData?.response?.data?.about}</Form.Control.Feedback>

                  </Form.Group>
                  <Container className="text-center">
                    <p>
                      Already Register ! <a href="/login">Login</a>
                    </p>
                  </Container>
                  <Container className="text-center">
                    <Button type="submit" className="text-uppercase" variant="dark" disabled={loading}>
                    <Spinner 
                      animation="border" 
                      size="sm"
                      className="me-2"
                      //loading ko value false vayepaxi yo hdekhinxa
                      hidden={!loading}
                       />
                      {/* yo jaba dekhaune taba loading value false hunxa, jati bela ne nadekhos */}
                      <span hidden={!loading}>Wait..</span>
                      {/* yo jaba dekhaune taba loading value true hunxa.kei load huda, jati bela ne nadekhos */}
                      <span hidden={loading}>Register</span>
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
    );
  };
  return (
    <Base
      title="Electro Repair / SignUp"
      description="Fill the form correctly to register with us. By regsiter with you can use services that we provide"
    >
      {registerForm()}
    </Base>
  );
};
export default Register;
