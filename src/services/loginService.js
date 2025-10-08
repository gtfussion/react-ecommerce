import { users } from "../api/constants";

export const loginLocally=({email,password})=>{
    const USERS=[...users];

    const loginUser = USERS.find(user=>user.email===email && user.password ===password)
    if(loginUser){
        localStorage.setItem("sessionId",loginUser.token)
        return loginUser;
    }else{
        alert('User not found')
    }

}