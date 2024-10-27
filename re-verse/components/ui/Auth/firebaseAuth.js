import firebaseConfig from "@/app/firebaseConfig"
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { initializeApp } from "firebase/app"
// import Home from "@/app/Profile/page"


export default function googleAuth(){
    initializeApp(firebaseConfig)
    const auth= getAuth()
    const provider =new GoogleAuthProvider()
    signInWithPopup(auth, provider)
    .then ((result) =>{
        const user =result.user
        
        const name= user.displayName
        const email = user.email
        const profile_pik= user.photoURL
        // const createdAt =user.metadata.creationTime;
        // const phoneNumber =user.phoneNumber
        console.log("Details", name, email, profile_pik)

        window.location.href="/Profile"
        return auth;
    }) 
    .catch((error) =>{
        console.log("Error", error)
    })

}
