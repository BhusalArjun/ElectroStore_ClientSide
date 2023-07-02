import Base from "../components/base";
import galleryone from "../assets/g-img-1.jpg";
import gallerytwo from "../assets/g-img-2.jpg";
import gallerythree from "../assets/g-img-3.jpg";
import galleryfour from "../assets/g-img-4.jpg";
import galleryfive from "../assets/g-img-5.jpg";
import gallerysix from "../assets/g-img-6.jpg";
function Services(){
    return (
        <Base 
        title="Services we provide"
        description="In this page we aill discuss about the feature that we provide"
        // buttonEnabled={true}
        // buttonText="Shop Features"
        // buttonType="danger"
        // buttonLink="/"
        >
            <main>
             {/* Gallery section  */}
        <section class="gallery" id="gallery" style={{ position: "relative", bottom: 2}}>

            <h1 class="heading"> our <span>gallery</span> </h1>
         
            <div class="gallery-container">
               <a class="box" href="images/g-img-1.jpg"><img src={galleryone} alt=""/></a>
               <a class="box" href="images/g-img-2.jpg"><img src={gallerytwo} alt=""/></a>
               <a class="box" href="images/g-img-3.jpg"><img src={gallerythree} alt=""/></a>
               <a class="box" href="images/g-img-4.jpg"><img src={galleryfour} alt=""/></a>
               <a class="box" href="images/g-img-5.jpg"><img src={galleryfive} alt=""/></a>
               <a class="box" href="images/g-img-6.jpg"><img src={gallerysix} alt=""/></a>
            </div>
         </section>
            </main>
        </Base>
    ) 
}
export default Services;