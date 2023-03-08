import FirebaseAuth from "./Authentication";
import app from "./FirebaseConfig"
import {getFirestore, collection, addDoc, getDocs, where, updateDoc, doc} from "firebase/firestore"

const db = getFirestore(app)


export async function addDeposit(amount, method, txn) {
    try {
        const user = await FirebaseAuth.getUser();
        const docRef = await addDoc(collection(db, "deposit"), {
          amount: amount,
          method: method,
          transactionHash: txn,
          email: user.email,
          timestamp: new Date().getTime()
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export async function getDeposits(){
    const user = await FirebaseAuth.getUser();
    const querySnapshot = await getDocs(collection(db, "deposit", where("email", "==",user.email)));
    querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
});
}

export async function addWithdraw(amount, method, txn) {
    try {
        const user = await FirebaseAuth.getUser();
        const docRef = await addDoc(collection(db, "withdraw"), {
          amount: amount,
          method: method,
          transactionHash: txn,
          email: user.email,
          timestamp: new Date().getTime()
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export async function getWithdraws() {
    const user = await FirebaseAuth.getUser();
    const querySnapshot = await getDocs(collection(db, "withdraw", where("email", "==",user.email)));
    querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
});
}

export async function addTransfer(amount, recepient, toToken, txn) {
    try {
        const user = await FirebaseAuth.getUser();
        const docRef = await addDoc(collection(db, "transfer"), {
          amount: amount,
          to: recepient,
          toToken: toToken,
          transactionHash: txn,
          email: user.email,
          timestamp: new Date().getTime()
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export async function getTransfers() {
    const user = await FirebaseAuth.getUser();
    const querySnapshot = await getDocs(collection(db, "transfer", where("email", "==",user.email)));
    querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
});
}

export async function makePurchase(name, merchantId, price, txn) {
    try {
        const docRef = await addDoc(collection(db, "purchase"), {
          name: name,
          merchantId: merchantId,
          price: price,
          transactionHash: txn,
          timestamp: new Date().getTime()
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

}

export async function addItem(name, price, quantity, desc, merchantId, txn) {
    try {
        const docRef = await addDoc(collection(db, "purchase"), {
        name: name,
        price: price,
        quantity: quantity,
        desc: desc,
        merchantId: merchantId,
        transactionHash: txn,
        timestamp: new Date().getTime()
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export async function listUserPurchases() {
    const user = await FirebaseAuth.getUser();
    const querySnapshot = await getDocs(collection(db, "purchase", where("email", "==",user.email)));
    querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
});
}

export async function listMerchantBuys(merchantId) {
    const querySnapshot = await getDocs(collection(db, "purchase", where("merchantId", "==", merchantId)));
    querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
});   
}

export async function initUser(name, photoURL) {
    try {
        const user = await FirebaseAuth.getUser();
        const docRef = await addDoc(collection(db, "users"), {
          verified: false,
          email: user.email,
          timestamp: new Date().getTime()
        });
        console.log("Document written with ID: ", docRef.id);
        const update = {
            displayName: name,
            photoURL: photoURL,
          };
        await user.updateProfile(update);
        console.log("User successfully updated!");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export async function setUserVerified() {
    try {
        const user = await FirebaseAuth.getUser();
        const query = await getDocs(collection(db, "users", where("email", "==",user.email)));
        query.forEach(async docs => {
          userRef = doc(db, "users", docs.id)
          await updateDoc(userRef, {
            verified:true
          })
        })
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export async function checkUserVerified() {

}

export async function initMerchant() {
    try {
        const user = await FirebaseAuth.getUser();
        const docRef = await addDoc(collection(db, "merchants"), {
          verified: false,
          merchantId: user.displayName,
          timestamp: new Date().getTime(),
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export async function setMerchantVerified() {

}

export async function checkMerchantVerified() {
  try {
    const user = await FirebaseAuth.getUser();
    const query = await getDocs(collection(db, "merchants", where("merchantId", "==",user.displayName)));
    query.forEach(async docs => {
      userRef = doc(db, "merchants", docs.id)
      await updateDoc(userRef, {
        verified:true
      })
    })
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

