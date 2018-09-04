import firebase from "../firebase/firebase.js";

let db = firebase.firestore();
const settings = {timestampsInSnapshots: true};
db.settings(settings);

export function getPosts(order, dir) {
    return db.collection("posts").orderBy(order, dir).get()
}

export function incrementRating(doc, newRating) {
    return doc.ref.update({
        rating: newRating
    })
    .then(function() {
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}