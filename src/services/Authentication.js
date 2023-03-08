import app from "./FirebaseConfig"
import { getAuth, sendEmailVerification, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";

const _auth = getAuth(app)

class FirebaseAuth {
  static async sendVerificationEmail() {
    await sendEmailVerification(this.getUser())
  }

  static getUser() {
    return _auth.currentUser;
  }


  static async isVerified() {
  await _auth.currentUser.reload();
  return _auth.currentUser.emailVerified
  }

  static async register(email, password) {
  let message = {code: null, message:null}
  await createUserWithEmailAndPassword(_auth, email, password)
  .then(() => {
      console.log('User account created & signed in!');
      message = {code:0, message:"success"};
  })
  .catch(error => {
    message = {code:1, message: error.code}
  })
  return message;
  }

  static async signOut () {
  await signOut(_auth)
  .then(() => console.log('User signed out!'));
  }

  static async signIn(email, password) {
    let message = {code: null, message:null}
      signInWithEmailAndPassword(_auth, email, password)
      .then(() => {
        console.log('User account signed in!');
        message = {code:0, message:"success"};
    })
    .catch(error => {
      message = {code:1, message: error.code}
    })
    return message;
  }
}


export default FirebaseAuth