import { Outlet, Navigate  } from "react-router-dom"
import { isAdminUser } from "../../auth/HelperAuth"
import UserContext from "../../context/UserContext"
import { useContext } from "react"

const AdminDashboard = () =>{

    const userContext= useContext(UserContext)
    const dashboardView = () => {
        return (<div>
            <h1>This  is admin dashboard page</h1>
         
            <Outlet/>
         </div>)
    }
    return (
        (isAdminUser()) ? dashboardView() : <Navigate to = "/users/home" />
    )
 }
 export default AdminDashboard