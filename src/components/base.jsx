import { Children } from "react"
import { Button, Container } from "react-bootstrap"
import Footer from "./footer"
import { NavLink } from "react-router-dom"

const Base=({title="Page Title", description="Welcome to Dynamic Store",buttonEnabled=false ,
buttonText="Shop Now",
buttonType='primary',
children,
buttonLink="/"
})=>{
    let styleName={
        height:"200px"
    }
    return(
        <div>
            <Container fluid style={styleName} className="bg-dark p-5 text-white text-center d-flex align-items-center justify-content-center">
                <div>
                <h1 className="text-center">{title}</h1>
            <p className="text-center">{description}</p>
            {buttonEnabled && <Button as={NavLink} to="/" variant={buttonType}>{buttonText}</Button>}
                </div>
            </Container>

            {children}
            <Footer/>
        </div>
    )
}
export default Base