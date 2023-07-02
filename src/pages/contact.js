import { Button } from "react-bootstrap"
import Base from "../components/base"
function Contact(){
    return (
        <Base 
        title="Electro Repair / Contact Us"
        description={null}
        >
            <main>
            <section class="contact" id="contact" style={{ position: "relative", bottom: 5}}>
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
                    <Button type="submit"  value="send message" >Send Message</Button>
                </form>
             </div>
         </section>
            </main>
        </Base>
    )
    }
    export default Contact