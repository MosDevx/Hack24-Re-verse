// import firebaseConfig from "@/app/firebaseConfig"
// import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
// import { initializeApp } from "firebase/app"
// // import Home from "@/app/Profile/page"
// import { createUser } from "@/lib/reverse"



// export default async function googleAuth(){
//     initializeApp(firebaseConfig)
//     const auth= getAuth()
//     const provider =new GoogleAuthProvider()
//     signInWithPopup(auth, provider)
//     .then ((result) =>{
//         const user =result.user
        
//         const name= user.displayName
//         const email = user.email
//         const profile_pik= user.photoURL
//         console.log("Details", name, email, profile_pik)
//         try {
//             async () =>{await createUser(name, name, email)};
//         } catch (error) {
//             console.log("Error:", error)
//         }

//         window.location.href="/Profile"
//         return auth;
//     }) 
//     .catch((error) =>{
//         console.log("Error", error)
//     })

// }


import firebaseConfig from "@/app/firebaseConfig";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
// import { createUser } from "@/lib/reverse"; // Assuming createUser is in a file named "reverse.js"
import {createUser} from "@/lib/reverse";

export default async function googleAuth() {
  try {
    initializeApp(firebaseConfig);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const name = user.displayName || user.email.split("@")[0]; // Use displayName if available, fallback to email split
    const email = user.email;
    const profilePic = user.photoURL;

    console.log("Details:", name, email, profilePic);

    // Create user in Prisma database
    const createdUser = await createUser(email, name, name); // Use name for both first and last name initially

    console.log("User created successfully:", createdUser);

    // Redirect to profile page (optional)
    window.location.href = "/Profile";

    return user; // Return the user object for further actions (optional)
  } catch (error) {
    console.error("Error:", error);
    // Handle errors appropriately (e.g., display an error message to the user)
  }
}

// export async function createUser(email, firstName, lastName) {
//   try {
//     const user = await prisma.user.create({
//       data: {
//         email,
//         firstName,
//         lastName,
//       },
//     });

//     console.log("User created successfully:", user);
//     return user; // You can return the user object for further actions
//   } catch (error) {
//     console.error("Error creating user:", error);
//     throw error; // Re-throw the error for handling in your React component
//   }
// }