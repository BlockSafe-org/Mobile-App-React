import auth from '@react-native-firebase/auth';

class FirebaseAuth {
    static async register(email, password) {
    await auth()
    .createUserWithEmailAndPassword(email, password)
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
    await auth()
    .signOut()
    .then(() => console.log('User signed out!'));
    }

    static async verifyPhoneNumber(phoneNumber) {
        await auth().verifyPhoneNumber(phoneNumber);
    }

    static async signIn(email, password) {
        await auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
        console.log('User account signed in!');
    })
    .catch(error => {
    if (error.code === 'auth/user-not-found' || "auth/wrong-password") {
      console.log('Wrong email or password!');
    }
    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }
    console.error(error);
    });
    }

    static async confirmCode(verificationId, code) {
        try {
          const credential = auth.PhoneAuthProvider.credential(verificationId, code);
          await auth().currentUser.linkWithCredential(credential);
        } catch (error) {
          if (error.code == 'auth/invalid-verification-code') {
            console.log('Invalid code.');
          } else {
            console.log('Account linking error');
          }
        }
      }
}

export default FirebaseAuth