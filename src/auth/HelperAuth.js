//data :save ;local storage -login
export const doLoginLocalStorage=(data)=>{
 localStorage.setItem("userData",JSON.stringify(data));
 //next(); //if want to do nexr any feature
}
//userdata:fetch
export const getUserFromLocalStorage= () =>{
    const data= getDataFromLocalStorage();
    if(data !=null){
       return data.user;
    }
    return null;
}
//for token
export const getTokenFromLocalStorage =() =>{
 const data= getDataFromLocalStorage();
 if(data !=null) {
    return data.jwtToken;
 }
 return null;
}
//all data-fetch
export const getDataFromLocalStorage = () => {
    const data = localStorage.getItem("userData");
    if(data != null){
        //here is userdata and jwt token both
        return JSON.parse(data);
    }
    return null;
};

export const isLoggedIn = () =>{
    if (getTokenFromLocalStorage()) {
        return true;
    } else {
        return false;
    }

    };
    export const isAdminUser = () =>{
        if(isLoggedIn()){
            const user=getUserFromLocalStorage()
            const roles=user.roles
            if(roles.find((role)=>role.roleId=='wetrsdfwetwfasfwdf')){
                return true
            } else {
                return false;
            }
        }
        else{
            return false;
        }

    }
//data; remove; logout
export const doLogoutFromLocalStorage = () =>{
 localStorage.removeItem("userData");
};