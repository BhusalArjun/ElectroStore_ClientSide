import {
  Container,
  Col,
  Row,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import Base from "../components/base";
import logo from "../assets/logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../services/user.service";
const Login = () => {
  // for two way data bindling
  let [data, setData] = useState({
    email: "",
    password: "",
  });
  //handle change method
  const handleChange = (event, property) => {
    // console.log(event);
    // console.log(property);
    setData({
      ...data,
      [property]: event.target.value,
    });
  };
  let [error, setError] = useState({
    errorData: null,
    isError: false,
  });
  // for loading spinner, dy default false gareko
  const [loading, setLoading] = useState(false);
  const clearData = () => {
    setData({
      email: "",
      password: "",
    });
    // setErrorData({
    //   errorData:null,
    //   isError:false
    // })
  };
  const submitForm = (event) => {
    event.preventDefault();
    console.log(data);
    //validate client side
    if (data.email == undefined || data.email.trim() == "") {
      toast.error("Email is required !!");
      return;
    }
    if (data.password == undefined || data.password.trim() == "") {
      toast.error("Password is required !!");
      return;
    }
    // all right then calling API
    loginUser(data)
      .then((loginData) => {
        console.log(loginData);
        toast.success("Logged In");
        clearData();
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
        setError({
          isError: true,
          errorData: error,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const loginForm = () => {
    return (
      <Container>
        <Row>
          <Col sm={{ span: 8, offset: 2 }}>
            <Card
              className="my-3 border-0 shadow"
              style={{ position: "relative", top: -60 }}
            >
              <Card.Body>
                <Container className="text-center mb-3">
                  <img src={logo} alt="logo" height={80} width={80} />
                </Container>
                <h3 className="text-uppercase text-center mb-4">Store Login</h3>
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
                  <Form.Group controlId="formEmail">
                    <Form.Label>Enter your email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      onChange={(event) => handleChange(event, "email")}
                      value={data.email}
                    />
                  </Form.Group>
                  <Form.Group controlId="formPassword">
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
                  <Container className="text-center">
                    <Button
                      className="text-uppercase"
                      variant="success"
                      type="submit"
                    >
                      Login
                    </Button>
                    <Button
                      className="ms-2 text-uppercase"
                      variant="danger"
                      onClick={clearData}
                    >
                      Reset
                    </Button>
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
      title="Electro Store / LogIn"
      description="You can login here. If you have already register the account "
    >
      {/* <h1>This is Login Page</h1> */}
      {loginForm()}
    </Base>
  );
};
export default Login;
