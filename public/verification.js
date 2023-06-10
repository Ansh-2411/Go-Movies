console.log("jai Shree Ram")
var btn = document.getElementsByTagName("button")[0]
var msg = document.getElementsByTagName("p")[0]
const auth = firebase.auth();


setInterval(() => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            if (user.emailVerified) {
                // console.log("User's email is verified");
                window.location.replace("index.html");
                console.log("hi")
            } else {
                console.log("User's email is not verified");
                window.location.replace("index.html");
                console.log("hii")
            }
        } else {
            // console.log("User is not signed in");
            console.log("hiii")
        }
    
    });
}, 5000)
clearInterval(check)