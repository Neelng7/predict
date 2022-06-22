var firebaseConfig = {
    apiKey: "AIzaSyDeiWBansSR9ub3DkfxWnBnhP2flYCAaX8",
    authDomain: "predictions-00.firebaseapp.com",
    databaseURL: "https://predictions-00-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "predictions-00",
    storageBucket: "predictions-00.appspot.com",
    messagingSenderId: "714279605260",
    appId: "1:714279605260:web:ba468f952b79244b988a29",
    measurementId: "G-WK035SH0H0"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var auth = firebase.auth();

//Dropdown menu toggle
const dropdown = document.getElementById("dropdown");
const dropdown_menu = document.getElementById("dropdown-menu");
const main = document.querySelector("main");

dropdown.addEventListener('click', () => {
    dropdown_menu.classList.toggle("menu-open");
    main.classList.toggle("menu-open");
});
main.addEventListener('click', () => {
    dropdown_menu.classList.toggle("menu-open", false);
    main.classList.toggle("menu-open", false);
}); 

