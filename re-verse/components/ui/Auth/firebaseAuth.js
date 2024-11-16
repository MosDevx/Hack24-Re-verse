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
    // provider.addScope("https://www.googleapis.com/auth/user.gender.read");

    //sign in with google
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    //Extract user details
    const fname = user.displayName ? user.displayName.split(" ")[0] : "N/A";
    const lname =user.displayName ?   user.displayName.split(" ")[1] : user.displayName.split(" ")[0] ;
    const email = user.email;
    const profilePicUrl = user.photoURL;

    const username = fname.toLowerCase()+getRandomCharacters(3) ;
+
    console.log("Details:", fname,lname, email);

    //Get the OAuth access token
    const credential  =GoogleAuthProvider.credentialFromResult(result);
    const accessToken = credential?.accessToken

    if (!accessToken) {
      throw new Error("Failed to retrieve access token");
    }

    //Fetch additional  user info using  Google People API
    // const token = await user.getIdToken();
    const response = await fetch("https://people.googleapis.com/v1/people/me?personFields=birthdays", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    });

    const data = await response.json();
    let gender ="M / F";
    let dob ;
    console.log("Data", data)

    if (data.birthdays && data.birthdays.length > 0 ){
      const birthday = data.birthdays[0].date;
      dob = `${birthday.year}-${birthday.month}-${birthday.day}`
    }else{
      dob ="0000-00-00";
    }

    // Create user in Prisma database
    const createdUser = await createUser(email, fname, lname, profilePicUrl, gender, dob, username);

    console.log("User created successfully:", createdUser);

    // Redirect to profile page (optional)
    window.location.href = "/Profile";

    return user; // Return the user object for further actions (optional)
  } catch (error) {
    console.error("Error:", error);
    // Handle errors appropriately (e.g., display an error message to the user)
  }
}

function getRandomCharacters(count) {
  const characters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0','!', '@', '#','$','%', '&','_'];
  const shuffled = characters.sort(() => 0.5 - Math.random());
  const randomChars = shuffled.slice(0, count);
  return randomChars.join('');
}
