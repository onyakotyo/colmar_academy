var objPeople = [
{
  username: "onesmus",
  password: "123"
},
{
  username: "muchayeuka",
  password: "wife"
},
{
  username: "tinotenda",
  password: "daughter"
}
];

function getInfo() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  for(i = 0; i<objPeople.length; i++) {
    if(username === objPeople[i].username && password === objPeople[i].password){


    window.location.href = './main_page.html'
    return;
  }

  }
    alert("incorrect username or password");
}
