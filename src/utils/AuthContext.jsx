import { useState,useEffect,useContext, createContext } from "react";
import { account } from "../appwriteConfig";
import { ID} from 'appwrite';
const AuthContext = createContext()


export const AuthProvider = ({children}) =>{

    const [loading,setLoading] = useState(true)
    const [user,setUser]  = useState(false)

    useEffect(() =>{
        checkUserStatus()
    },[])
    const loginUser = async (userinfo) => {
        setLoading(true)
        try {
            let res = await account.createEmailPasswordSession(
                userinfo.email,
                userinfo.password
            )
            let acc = await account.get()
            console.log("acc : ", acc)
            setUser(acc)
           
        } catch (error) {
            console.log(error)
        }

        setLoading(false)
    }
    const logoutUser = () => {
        account.deleteSession('current');
        setUser(null)
    }
    const registerUser = async (userInfo) => {
        setLoading(true)

        try{
            
            let response = await account.create(ID.unique(), userInfo.email, userInfo.password1, userInfo.name);
    
            await account.createEmailPasswordSession(userInfo.email, userInfo.password1)
            let accountDetails = await account.get();
            setUser(accountDetails)
        }catch(error){
            console.error(error)
        }
    
        setLoading(false)
     }


    const checkUserStatus = async () => {
        try{
            let accountDetails = await account.get();
            setUser(accountDetails)
        }catch(error){
            
        }
        setLoading(false)
     }

    const contextData = {
        user,
        loginUser,
        registerUser,
        logoutUser

    }
    return(
    <AuthContext.Provider value = {contextData}>
        {loading ? <p>Loading:</p> : children}
    </AuthContext.Provider>
    )
} 

export const useAuth = () =>{
    return useContext(AuthContext)
}
export default AuthContext
