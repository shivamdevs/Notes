import { initializeApp } from "firebase/app";
import {
    getAuth,
} from "firebase/auth";
import { collection, doc, getDoc, getDocs, getFirestore, query, setDoc } from 'firebase/firestore/lite';
import hashids from "hashids";
import CryptoJS from "crypto-js";

const firebaseConfig = {
    apiKey: "AIzaSyAuT7owM2lF6JqmWUionKIM1vQ2pOHgzRM",
    authDomain: "my-oasis-tech.firebaseapp.com",
    projectId: "my-oasis-tech",
    storageBucket: "my-oasis-tech.appspot.com",
    messagingSenderId: "180046491267",
    appId: "1:180046491267:web:f184a60c760b8c0eb375b6",
    measurementId: "G-WJZGXF8F3L"
};

const table = "notes-share";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

async function getRequestKey(length) {
    const salt = (() => {
        const date = new Date();
        return String(date.setTime(date.getTime()));
    })();
    return await new Promise(async (resolve, reject) => {
        const hash = new hashids(salt, length);
        try {
            const q = query(collection(db, table));
            const docs = await getDocs(q);
            const key = hash.encode(docs.docs.length);
            resolve(key);
        } catch (err) {
            console.error(err);
            reject(err);
        }
    });
}

export async function addNote(note) {
    const created = (() => {
        const date = new Date();
        return date.setTime(date.getTime());
    })();
    return await new Promise(async (resolve, reject) => {
        try {
            const req = await getRequestKey(4);
            const encrypt = CryptoJS.AES.encrypt(note, req).toString();
            await setDoc(doc(db, table, req), {
                deleted: false,
                created,
                note: encrypt,
            });
            resolve(req);
        } catch (err) {
            console.error(err);
            reject(err);
        }
    });
}

export async function getNote(note) {
    return await new Promise(async (resolve, reject) => {
        try {
            const snap = await getDoc(doc(db, table, note));
            if (snap.exists()) {
                const decrypt = CryptoJS.AES.decrypt(snap.data().note, snap.id).toString(CryptoJS.enc.Utf8);
                resolve(decrypt);
            } else {
                reject("This note doesn't exist in the server.");
            }
        } catch (err) {
            console.error(err);
            reject(err);
        }
    });
}

export {
    db,
    auth,
};