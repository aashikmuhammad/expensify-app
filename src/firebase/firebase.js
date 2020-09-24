import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDBEb5GnlXL2sNNpgXd5Qwkk60lhgtEGJ4",
    authDomain: "expensify-3a9ba.firebaseapp.com",
    databaseURL: "https://expensify-3a9ba.firebaseio.com",
    projectId: "expensify-3a9ba",
    storageBucket: "expensify-3a9ba.appspot.com",
    messagingSenderId: "292330340783",
    appId: "1:292330340783:web:48ac49ca1a9839bf45af5a",
    measurementId: "G-38FH49QTSB"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {firebase, googleAuthProvider, database as default};
  
// database.ref('expenses').push({
//     descriptoin: 'dress',
//     amount: 100,
//     note: '',
//     createdAt: 1000
// })
// database.ref('expenses').push({
//     descriptoin: 'ball',
//     amount: 500,
//     note: '',
//     createdAt: 1000
// })
// database.ref('expenses').push({
//     descriptoin: 'pant',
//     amount: 600,
//     note: '',
//     createdAt: 1000
// })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// }, (e) => {
//     console.log(e)
// })

//child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log('removed', snapshot.key, snapshot.val())
// })
// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log('changed', snapshot.key, snapshot.val())
// })
// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log('added', snapshot.key, snapshot.val())
// })

  // database.ref().on('value', (snapshot) => {
  //     console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}`)
  // })
//   database.ref().set({
//       name: 'Aashiq',
//       age: 21,
//       stresslevel: 6,
//       isSingle: true,
//       job: {
//           title: 'Web develeper',
//           company: 'freelancer'
//       },
//       location: {
//           city: 'thiruvarur',
//           state: 'tamilnadu'
//       },
//       attribute: {
//           height: '5.7feet',
//           weight: '60kg'
//       }
//   }).then(()=>{
//       console.log('Successfully saved')
//   }).catch((e) => {
//       console.log({ error: e})
//   })

// database.ref('attribute/height').set('6feet')
// .then(()=>{
//     console.log('Successfully saved')
// }).catch((e) => {
//     console.log({ error: e})
// })

// database.ref('isSingle').remove()
// .then(()=>{
//     console.log('Successfully removed')
// }).catch((e) => {
//     console.log({ error: e})
// })

// database.ref().update({
//     stresslevel: 9,
//     'job/company': 'ryzenphoenix',
//     isSingle: null
// }).then(() => console.log('updated successfully'))
// .catch((e) => console.log('error:', e) )