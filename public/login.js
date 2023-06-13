var email = document.getElementById("loginemail")
var password = document.getElementById("loginpassword")
var submit = document.getElementById("login")
var error = document.getElementsByClassName("error")
const ispass = {
    isemail: false,
    ispassword: false
}



// show error 
function showError(tag, i, state, controller) {
    tag.style.borderBottomColor = "red";
    error[i].innerText = state
    error[i].style.display = "block"
    ispass[controller] = false;
}
// show done
function showDone(tag, i, controllerd) {
    tag.style.borderBottomColor = "green";
    error[i].innerText = ""
    error[i].style.display = "none"
    ispass[controllerd] = true;
}

// Validate email
function validateEmail(email) {
    var emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
}
const auth = firebase.auth()

function logIn(email) {
    submit.addEventListener("click", () => {
        auth.signInWithEmailAndPassword(email, password.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const db = firebase.firestore();

                if (user) {
                    // Get information from database
                    db.collection("users").doc(user.uid).get()
                        .then(doc => {
                            if (doc.exists) {
                                const user = doc.data();
                                var name = user.name;
                                alert("You have been loged In ")
                                window.location.replace("index.html")


                            } else {
                                console.log("No such document!");
                            }
                        })
                        .catch(error => {
                            console.log("Error getting document:", error);
                        });

                } else {
                    // User is signed out
                    // console.log("You are not looged in");
                    // menu.innerHTML += '<a  href="/login.html">LogIn</a> <a href="/signup.html"> SignUp </a>'
                    // window.location.replace("/signup.html");
                }
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });

    })
}
function validateInputEmailUsername(tag) {
    tag.addEventListener("blur", function () {
        email = this.value;
        if (email != null) {

            if (email.includes(".com")) {

                const db = firebase.firestore();
                email = this.value;
                db.collection("users").where("email", "==", email).get()
                    .then(querySnapshot => {
                        if (!querySnapshot.empty) {
                            // if the email already exists
                            showDone(tag, 4, 'isemail')
                            // Log in
                            logIn(email)


                        }
                        else {
                            // if the email is available
                            showError(tag, 0, "User not found", 'isemail')

                        }

                    })
            }
            else {
                const db = firebase.firestore();
                email = this.value;
                db.collection("users").where("email", "==", email).get()
                    .then(querySnapshot => {

                        if (!querySnapshot.empty) {
                            // if the email already exists
                            showDone(tag, 0, 'isemail')

                            // Search for documents where the "email" field matches the given value
                            db.collection("users").where("email", "==", email)
                                .get()
                                .then(function (querySnapshot) {
                                    querySnapshot.forEach(function (doc) {
                                        doc = doc.id;
                                        db.collection("users").doc(doc)
                                            .get()
                                            .then(function (doc) {
                                                if (doc.exists) {
                                                    var data = doc.data();
                                                    var utemail = data.email;
                                                    // Log in
                                                    logIn(utemail)

                                                } else {
                                                    console.error("No such document!");
                                                }
                                            })
                                            .catch(function (error) {
                                                console.error("Error retrieving document: ", error);
                                            });
                                    })
                                })
                                .catch(function (error) {
                                    console.error("Error searching for document: ", error);
                                });

                        }
                        // if the email is available
                        else {
                            showError(tag, 0, "No User Found", 'isemail')

                        }
                    })
            }
        }
        else {

        }


    })
}
// Validate all select option
validateInputEmailUsername(email)
