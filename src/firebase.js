import { initializeApp} from 'firebase/app'
require('dotenv').config();

const firebaseConfig = {
  apiKey:  process.env.API_KEY,
  authDomain: "loan-3ecd8.firebaseapp.com",
  projectId: "loan-3ecd8",
  storageBucket: "loan-3ecd8.appspot.com",
  messagingSenderId: "701088999696",
  appId: "1:701088999696:web:44f9962bac655bc6841d95",
  measurementId: "G-X7SVP5JEY1"
};

export const app = initializeApp(firebaseConfig);
