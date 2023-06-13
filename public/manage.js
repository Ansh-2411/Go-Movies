var footer = document.getElementsByTagName("footer")[0]



const auth = firebase.auth();
const user = auth.currentUser;
const db = firebase.firestore();

auth.onAuthStateChanged((user) => {
    var menu = document.getElementsByClassName("auth")[0];

    if (user) {
        // Get information from database
        db.collection("users").doc(user.uid).get()
            .then(doc => {
                if (doc.exists) {
                    const user = doc.data();
                    var name = user.username;
                    var email = user.email;

                    // var name = document.getElementById("name");
                    footer.innerHTML = `
                                
                    <h1>Welcome ${name} to Go Movies</h1>
                    <h1>${email}</h1>
                    <h6>@ All rights Reserved</h6>

                    `


                } else {
                    console.log("No such document!");
                }
            })
            .catch(error => {
                console.log("Error getting document:", error);
            });

    } else {
        // User is signed out



        // window.location.replace("/signup.html");



    }
})
