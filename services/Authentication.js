import app from "./FirebaseConfig"
import { getAuth, sendEmailVerification, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";

const _auth = getAuth(app)

class FirebaseAuth {
    static async sendVerificationEmail() {
      await sendEmailVerification(_auth.currentUser)
    }

    static setUser() {
      let user = null
      _auth.onAuthStateChanged((e) => {
        user = e;
      })
      return user;
    }


    static isVerified() {
    _auth.onAuthStateChanged((e) => {
      return e.emailVerified;
    })
    }

    static async register(email, password) {
    await createUserWithEmailAndPassword(_auth, email, password)
    .then(() => {
        console.log('User account created & signed in!');
    })
    .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }
    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }
    console.error(error);
    });
    }

    static async signOut () {
    await signOut(_auth)
    .then(() => console.log('User signed out!'));
    }

    static async signIn(email, password) {
        signInWithEmailAndPassword(_auth, email, password)
    .then(() => {
        console.log('User account signed in!');
    })
    .catch(error => {
    if (error.code === 'auth/user-not-found' ||error.code === "auth/wrong-password") {
      console.log('Wrong email or password!');
    }
    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }
    console.error(error);
    });
    }
}

export default FirebaseAuth