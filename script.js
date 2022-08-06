localStorage.setItem("name", "Bob");
console.log(localStorage.getItem("name"));

sessionStorage.setItem("name", "John");
console.log(sessionStorage.getItem("name"));

document.cookie =
  "name=Dilrozbek; expires=" + new Date(9999, 8, 8).toUTCString();

document.cookie =
  "lastName=Raximov; expires=" + new Date(9999, 8, 8).toUTCString();

console.log(document.cookie);
