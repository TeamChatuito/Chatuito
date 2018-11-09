
import firebase from 'react-native-firebase';
export default function() {
   
      const user = firebase.auth().currentUser;
      if (user != null) {

          firebase.database().ref('/people').on('value', (snap) => {
              snap.forEach(child => {
                  if (child.val().uid === user.uid) {
                      firebase.database().ref('/people/' + child.key + '/online').set(1)
                  }
              })
          })
      }
      firebase.database().ref('/people').on('value', (snap) => {
          snap.forEach(child => {
              if (child.val().uid === user.uid) {
                  firebase.database().ref('/people/' + child.key + '/online').onDisconnect().set(0)
              }
          })
      })
  
}