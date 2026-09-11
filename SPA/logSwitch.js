window.addEventListener('load', () => {
    const logInLink = document.getElementById("logInLink");
    const logOutLink = document.getElementById("logOutLink");

    if(localStorage.getItem("token") !== null){
        logInLink.style.display = "none";
        logOutLink.style.display = "";
    }else{
        logInLink.style.display = "";
        logOutLink.style.display = "none";
    }
    // console.log(logInLink, "\n", logOutLink);
})