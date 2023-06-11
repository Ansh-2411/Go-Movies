console.log("jai Shree Ram")
var btn = document.getElementsByTagName("button")[0]
var msg = document.getElementsByTagName("p")[0]
const auth = firebase.auth();


setInterval(() => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            if (user.emailVerified) {
                alert("your email is verified....click OK");
                window.location.replace("index.html");
                console.log("hi")
            } else {
                alert("your email is not verified....click OK");
                window.location.replace("index.html");
                console.log("hii")
            }
        } else {
            alert("User is not signed in....click OK");
            console.log("hiii")
        }

    });
}, 5000)
clearInterval(check)