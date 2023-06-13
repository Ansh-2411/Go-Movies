// console.log("Jai Shree Ram")
var username = document.getElementsByTagName("input")[0]

var email = document.getElementsByTagName("input")[1]
var password = document.getElementsByTagName("input")[2]
var confirmpassword = document.getElementsByTagName("input")[3]
var submit = document.getElementById("signup")
var error = document.getElementsByClassName("error")
const auth = firebase.auth();
const db = firebase.firestore();


submit.addEventListener('click', () => {
    email = email;
    password = password;
    console.log(email)
    console.log(password)
    auth.createUserWithEmailAndPassword(email, password)
        .then(async (user) => {
            // Signed in 
            var uid = user.user.uid;
            // add user detail in database
            await db.collection("users").doc(uid).set({
                username: username,
                email: email,
            })
            console.log("OK registered")
            alert("registered....click OK")
            await user.user.sendEmailVerification()
            console.log("sent")

            window.location.replace("verification.html");
            console.log(uid)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        });

})



const ispass = {
    isusername: false,
    isemail: false,
    ispassword: false
}

// // show error 
function showError(tag, i, state, controller) {
    tag.style.borderBottomColor = "red";
    error[i].innerText = state
    error[i].style.display = "block"
    ispass[controller] = false;
}
// // show done
function showDone(tag, i, controllerd) {
    tag.style.borderBottomColor = "green";
    error[i].innerText = ""
    error[i].style.display = "none"
    ispass[controllerd] = true;
}
// // Validate username input
function validateUsername(tag) {
    tag.addEventListener("input", function () {
        username = this.value;
        if (username.length <= 3) {
            showError(tag, 0, "Username must be at least 4 characters long.", 'isusername')

        } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
            showError(tag, 0, "Username can only contain letters and numbers.", 'isusername')
        } else {
            showDone(tag, 0, 'isusername')
            const db = firebase.firestore();
            db.collection("users").where("username", "==", username).get()
                .then(querySnapshot => {

                    if (!querySnapshot.empty) {
                        // if the username already exists, throw an error
                        showError(tag, 0, "Username Already taken", 'isusername')

                    }
                    // if the username is available
                    else {
                        showDone(tag, 0, 'isusername')

                    }
                })
        }
    })
}
// // Validate Email and phone input

function validateMobile(mobile) {
    var mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobile);
}
function validateEmail(email) {
    var emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
}
function validateInputEmailMobile(tag) {
    tag.addEventListener("input", function () {
        email = this.value;
        if (email != null) {
            if (validateMobile(email) || validateEmail(email)) {

                if (email.includes(".com")) {

                    const db = firebase.firestore();
                    email = this.value;
                    db.collection("users").where("email", "==", email).get()
                        .then(querySnapshot => {
                            if (!querySnapshot.empty) {
                                // if the email already exists, throw an error
                                showError(tag, 1, "Email Already in use", 'isemail')

                            }
                            else {
                                // if the email is available
                                showDone(tag, 1, 'isemail')

                            }

                        })
                }
                else {
                    const db = firebase.firestore();
                    number = this.value;
                    db.collection("users").where("number", "==", number).get()
                        .then(querySnapshot => {
                            if (!querySnapshot.empty) {
                                // if the number already exists, throw an error
                                showError(tag, 1, "Number Already in use", 'isnumber')

                            }
                            // if the number is available
                            else {
                                showDone(tag, 1, 'isnumber')

                            }

                        })
                }
            }
            else {
                showError(tag, 1, "Enter your Email", 'isnumber')
            }
        }
        else {

        }


    })

}

// // Validate password
function validatePassword(tag, cp) {
    tag.addEventListener("input", function () {
        password = this.value;
        if (password.length < 8) {
            showError(tag, 2, "Password must be at least 8 characters long.", 'ispassword')
        } else if (!/\d/.test(password)) {
            showError(tag, 2, "Password must contain at least one number.", 'ispassword')
        } else if (!/[a-zA-Z]/.test(password)) {
            showError(tag, 2, "Password must contain at least one letter.", 'ispassword')
        }
        else {
            showDone(tag, 2, 'ispassword')
            cp.addEventListener("input", function () {
                confirmpassword = this.value;
                if (password != confirmpassword) {

                    showError(cp, 3, "Confirm Password Did'nt Match", 'ispassword')
                    showDone(tag, 2, 'ispassword')
                }
                else {
                    showDone(tag, 2, 'ispassword')
                    showDone(cp, 3, 'ispassword')

                }
            })

        }
    })

}
validateUsername(username)
validateInputEmailMobile(email)

validatePassword(password, cpassword)
function send(username, email, pname, syllabus, branch, semester, password, confirmpassword) {
    if (username.value == "") { showError(username, 0, "Username Can't be Empty", 'isusername') } else (showDone(username, 0, 'isusername'));
    if (email.value == "") { showError(email, 1, "Email or Number Can't be Empty", 'isemail') } else (showDone(email, 1, 'isemail'));

    if (confirmpassword.value == "") { showError(confirmpassword, 3, "Enter confirmPassword", 'ispassword') }
}

