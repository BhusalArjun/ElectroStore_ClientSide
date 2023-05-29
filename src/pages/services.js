import Base from "../components/base";
function Services(){
    return (
        <Base 
        title="Services we provide"
        description="In this page we aill discuss about the feature that we provide"
        buttonEnabled={true}
        buttonText="Shop Features"
        buttonType="danger"
        buttonLink="/"
        >
            <div> This is Service page</div>
        </Base>
    ) 
}
export default Services;