const config = {
    apiKey: "AIzaSyBQsTRcOY4wzOdxfuyzx36EvmAY1ZsiWzc",
    authDomain: "mokkupp.firebaseapp.com",
    databaseURL: "https://mokkupp.firebaseio.com",
    projectId: "mokkupp",
    storageBucket: "",
    messagingSenderId: "696888503804"
  };

firebase.initializeApp(config);

const db = firebase.database();
const root = firebase.database();

export { db, root}
