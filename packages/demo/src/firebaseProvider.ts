import { initializeApp } from "firebase/app";
import { FirebaseAuthProvider, FirebaseDataProvider } from "@cnedsson/react-admin-firebase";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectStorageEmulator, getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "demo-api-key",
    projectId: "react-admin-firebase",
    appId: "demo",
};

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

const isDevelopment = process.env.NODE_ENV === "development";

if (isDevelopment) {
    connectAuthEmulator(auth, "http://127.0.0.1:9099");
    connectFirestoreEmulator(db, "localhost", 8080);
    connectStorageEmulator(storage, "localhost", 9199);
}

const dataProvider = FirebaseDataProvider(firebaseConfig);

const authProvider = FirebaseAuthProvider(firebaseConfig);

export { authProvider, dataProvider };