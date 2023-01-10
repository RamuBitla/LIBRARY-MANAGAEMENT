import { useAuthContext } from "../UseAuthContext/useAuthContext";

export const useLogout = ()=>{
    const {dispatch} = useAuthContext();
const logout = ()=>{
    
    //remove data from local storage
    localStorage.removeItem("student");

    //update context
    dispatch({type: "LOGOUT"});
};
return {logout}
};