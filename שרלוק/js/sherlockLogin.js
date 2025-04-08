let count_player=Number(sessionStorage.getItem('count_player'));
count_player++;

// כשהמשתמש לוחץ על המסך מחוץ למודל הוא נסגר
function closeForms()
{
  var modal1 = document.getElementById('id01');
  window.onclick = function(event) {
      if (event.target == modal1) {
          modal1.style.display = "none";
      }
  }

  var modal2 = document.getElementById('id02');
  window.onclick = function(event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  }
}


function login() {
  
  sessionStorage.setItem('count_player',JSON.stringify(count_player));
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  let user = {
    name: name,
    password: password,
    victories:0
  }

  if (localStorage.getItem(name)!= undefined) //בודק האם השם קיים בזיכרון הכללי
  {
    user = JSON.parse( localStorage.getItem(name));
    if(user.password == password)
    {
      if(Number(sessionStorage.getItem('count_player'))==1)
      {
        sessionStorage.setItem('currntUser1',JSON.stringify(user));
        document.getElementById('id01').style.display='none'
      }
      else
      {
        sessionStorage.setItem('currntUser2',JSON.stringify(user));
        
        window.open("./sherlockGame.html");
      }
    }
    else
    {
      alert("incorrect password!");
      count_player--;
      sessionStorage.setItem('count_player',JSON.stringify(count_player));
    }
  }  
  else
  {
    alert("please sign up");
    count_player--;
    sessionStorage.setItem('count_player',JSON.stringify(count_player));
  }  
}

function sign_up()
{
  sessionStorage.setItem('count_player',JSON.stringify(count_player));
  let name = document.getElementById("name2").value;
  let password = document.getElementById("password2").value;
  let user = {
    name: name,
    password: password,
    victories:0
    }
    if(localStorage.getItem(name)!= undefined)
    {
      alert("the user is already exists!");
      count_player--;
      sessionStorage.setItem('count_player',JSON.stringify(count_player));
    }
    else
    {
      localStorage.setItem(name, JSON.stringify(user));
      if(Number(sessionStorage.getItem('count_player'))==1)
      {
        sessionStorage.setItem('currntUser1',JSON.stringify(user));
        document.getElementById('id02').style.display='none';
        sessionStorage.setItem('count_player',JSON.stringify(count_player));
      }
      else
      {
        sessionStorage.setItem('currntUser2',JSON.stringify(user));
        window.open("./sherlockGame.html");
      }
    }
}


// button_send();
closeForms();