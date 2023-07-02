import Base from "../components/base";
import computerRepair from "../assets/service-1.svg";
import laptopRepair from "../assets/service-2.svg";
import smartphoneRepair from "../assets/service-3.svg";
import gameconsoleRepair from "../assets/service-4.svg";
import multimediaRepair from "../assets/service-5.svg";
import smartwatchRepair from "../assets/service-6.svg";
import { Button } from "react-bootstrap";

function  ProductCategories(){
return (
    <Base title="Electro Repair / Product Categories"
    description={null}>
     <main>
        <section class="services" id="services" style={{ position: "relative", bottom: 3}} >
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
        </main>
    </Base>
)
}
export default ProductCategories;