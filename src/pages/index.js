import axios from "axios";
import { Button } from "react-bootstrap";
import Base from "../components/base";
import { toast } from "react-toastify";
function Index(){
    function showSucessToast(){
        toast.success("This is Sucess Message");
    }
const getDataFromServer=()=>{
        toast.info("Getting data from server");
        axios
        .get("http://localhost:9090/users")
        //if success
        .then((response)=>{
        console.log(response.data)
        toast.success("Request done!!")
        })
        .catch((data)=>{
        console.log(data)
        toast.error("Request Failed!!")
        })
}
    return(
        <Base title={"Shop What You need"} 
        description={"Welcome to Trending Store, We provide best item as you need"}
        buttonEnabled={true}
        buttonText="Start Shopping"
        buttonType="success"
        
        >
            <h1>Welcome on Home Page</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora beatae id repellendus, nam inventore accusamus in amet exercitationem temporibus excepturi sit, qui totam commodi explicabo ex voluptate facilis dolorum a, et alias officia! Cumque qui ab praesentium nihil corrupti obcaecati maiores earum voluptatibus inventore perferendis molestias, labore ex! Esse, magni?</p>
           <Button onClick={showSucessToast}>Toastify Success</Button>
           <Button variant="warning" onClick={getDataFromServer}>Get Data from fake API</Button>
        </Base>
       
        
        
    )
}
// const getDataFromServer = () => {
//     toast.info("Getting data from server");
//     axios
//     .get("https://jsonplaceholder.typicode.com/posts")
//     //if sucess
//     .then((data)=>{
//         console.log(data)
//         toast.success("request done")
//     })
//     //if error
//     .catch((error)=>{
//         console.log(error)
//         toast.error("Something Went Wrong")
//     });
// };

export default Index;