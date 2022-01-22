import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// const config = {
//   apiKey: '',
//   authDomain: '',
//   projectId: '',
//   storageBucket: '',
//   messagingSenderId: '',
//   appId: ''
// };
const config = {
    apiKey: 'AIzaSyAnufMV343usCTB5YgLG1Jn7eAfytbdhTg',
    authDomain: 'smithagram-2dd4a.firebaseapp.com',
    projectId: 'smithagram-2dd4a',
    storageBucket: 'smithagram-2dd4a.appspot.com',
    messagingSenderId: '743737279584',
    appId: '1:743737279584:web:36a553b981ebc9eb0b2f05',
    measurementId: 'G-24BP35WHM0'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
