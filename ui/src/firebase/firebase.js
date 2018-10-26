import firebase from 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyB17i2KwPonHtKi-YzcNpGUYmNpW-54T3Q",
    authDomain: "continuous-learning-2b2e8.firebaseapp.com",
    databaseURL: "https://continuous-learning-2b2e8.firebaseio.com",
    projectId: "continuous-learning-2b2e8",
    storageBucket: "continuous-learning-2b2e8.appspot.com",
    messagingSenderId: "498523571513"
}

firebase.initializeApp(config)

export default firebase