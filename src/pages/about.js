import Base from "../components/base"
import aboutimg from "../assets/about-img.svg";
import { Button } from "react-bootstrap";

function About(){
    return (
        <Base
        title="Electro Repair / About Us"
        description={null}
        >
        <main>
            <section class="about" id="about">
            <div class="content">
                <h3>best quality Repair services</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga totam dolores sint doloremque amet ducimus odit tenetur. Exercitationem distinctio sint fuga ab provident eaque necessitatibus blanditiis delectus dolor! Deleniti, sint.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, culpa deleniti. Non hic quisquam impedit enim. Velit ducimus rem sit!</p>
                {/* <a href="#services" class="btn">read more</a> */}
                <Button>Read More</Button>
            </div>
            <div className="image">
                <img src={aboutimg} alt="aboutimsge"/>
            </div>
        </section>
        </main>
        </Base>
    )
    }
    export default About