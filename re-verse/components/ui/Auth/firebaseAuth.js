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
    
    //request for additional  scopes for gender and dob
    provider.addScope("profile")
    provider.addScope("email")
    provider.addScope("https://www.googleapis.com/auth/user.birthday.read");
    provider.addScope("https://www.googleapis.com/auth/user.gender.read");

    //sign in with google
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    //Extract user details
    const fname = user.displayName ? user.displayName.split(" ")[0] : "";
    const lname =user.displayName ?   user.displayName.split(" ")[1] : "";
    const email = user.email;
    const profilePicUrl = user.photoURL;

    console.log("Details:", fname,lname, email, profilePicUrl);

    //Fetch additional  user info using  Google People API
    const token = await user.getIdToken();
    const response = await fetch("https://people.googleapis.com/v1/people/me?personFields=gender,birthdays", {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });

    const data = await response.json();
    let gender;
    let dob ;

    if (data.genders && data.genders.length > 0 ){
      gender = data.genders[0].value
    }else{
      gender = "N/A"
    }

    if (data.birthdays && data.birthdays.length > 0 ){
      const birthday = data.birthdays[0].date;
      dob = `${birthday.year}-${birthday.month}-${birthday.day}`
    }else{
      dob ="N/A";
    }

    // Create user in Prisma database
    const createdUser = await createUser(email, fname, lname, profilePicUrl, gender, dob);

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