import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';
import items from '@/common/program.json';

let api
let program= [];
export function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export function initFirebase(){

  // Initialize firebase
  let projectId = 'e28-talent-show';
  if (!firebase.apps.length){
    firebase.initializeApp({
      apiKey: 'AIzaSyCkaZeNdz_IUsGUUwR_y6U-Vywo7Bg0tW4',
      authDomain: projectId + '.firebaseapp.com',
      databaseURL: 'https://' + projectId + '.firebaseio.com',
      projectId: projectId,
    });
  }
  // Initialize firestore
  api = firebase.firestore();
  console.log(api);
}
export function seedProgram(){
  for(let i=0; i < items.length; i++){
    api.collection("items").add(items[i])
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    });

  }
}


export function refreshProgram(){
  program = [];
  api.collection("items").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().title}`);
      let item = {title: doc.data().title, performers: doc.data().performers, description: doc.data().description,
      duration:  doc.data().duration }
      console.log(item);
      //program.push(item);
    })

    program = querySnapshot.docs.map(function (documentSnapshot) {
      return documentSnapshot.data();
    })
    console.log("Items Data is ",program);

  });
}
export function getProgram(){
  return program;
}
/**
 * Add a document to a collection
 */
export function add(collection, document) {
    try {
        const docRef = api.collection(collection)
            .add(document);
        return docRef.id;
    }
    catch (error) {
        return 'Error adding document: ' + error;
    }
}
