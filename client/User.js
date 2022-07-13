let params = new URLSearchParams(window.location.search);
let id = params.get("userId");

function Data() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `http://localhost:3000/users/${id}`);
  xhr.send();
  xhr.onload = function () {
    if (xhr.status != 200) {
      alert(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
      var mtDate = JSON.parse(xhr.responseText);
      var v1 = mtDate.firstName;
      var v2 = mtDate.lastName;
      var v3 = mtDate.email;
      var v4 = mtDate.address;
      var v5 = mtDate.phone;
      var v6 = mtDate.hight;
      var v7 = mtDate.weight;
      document.getElementById("name").value = v1;
      document.getElementById("lastname").value = v2;
      document.getElementById("Adress").value =
        v4.city + " " + v4.street + " " + v4.number;
      document.getElementById("phone").value = v5;
      document.getElementById("email1").value = v3;
      document.getElementById("height").value = v6;
      document.getElementById("weight").value = v7.startWeight;
      //  document.getElementById("met1").value = "התאריך"+" "+
      //     v7.meeting[0].date + " " +"המשקל"+ v7.meeting[0].weight;
      //    document.getElementById("met1").value =
      //      "התאריך" + " " + v7.meeting[1].date + " " + "המשקל" + v7.meeting[1].weight;;
      //       document.getElementById("met1").value = v7.meeting[2];
    }
  };
}

function Bmi() {
  let h = document.getElementById("height").value;
  let w = document.getElementById("weight").value;
  document.getElementById("cal").value = w / h ** 2;
}

function openUrl() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("userId");
  window.location.href = `MyDairy.html?userId=${id}`;
}



function Delete() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("userId");
  const xhr = new XMLHttpRequest();
  xhr.open("Delete", `http://localhost:3000/users/${id}`);
  xhr.send();
  xhr.onload = function () {
    if (xhr.status != 200) {
      alert(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
      
        console.log('sucsess')
      }
    }
  };
