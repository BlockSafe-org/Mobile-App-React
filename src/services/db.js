import app from "./FirebaseConfig"
import {getStorage, ref, uploadBytes} from "firebase/storage"

const profile = getStorage(app, "profilePics")
const license = getStorage(app, "licences")


export async function submitProfile(data) {
    let storageRef = ref(profile, "profileImage");
    uploadBytes(storageRef, data).then((snapshot) => {
        console.log("Photo uploaded!")
    }).catch((error) => {
        console.log(error.message)
    })
}


export async function submitLicense(data) {
    let storageRef = ref(profile, "license");
    uploadBytes(storageRef, data).then((snapshot) => {
        console.log("File uploaded!")
    }).catch((error) => {
        console.log(error.message)
    })
}