function ShowUsers() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/users");//server
  xhr.send();
  xhr.onload = function () {
    if (xhr.status != 200) {
      alert(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
      const users = JSON.parse(xhr.responseText);
      let table = "";
      users.forEach((user) => {
        if (user.firstName != "Manager") {
          table += `
                <tr>
                    <th>${user.firstName + " " + user.lastName}</th>
                    <th>${user.id}</th>
                    <th>${user.email}</th>
                </tr>`;
        }
      });
      const container = document.getElementById("text");
      container.innerHTML += table;
    }
  };
}

function Filter() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/users"); //server
  xhr.send();
  xhr.onload = function () {
    if (xhr.status != 200) {
      alert(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
      const users = JSON.parse(xhr.responseText);
      let filt = document.getElementById("filt").value;
      let table = "";
      users.forEach((user) => {
        user.firstName === filt
          ? Find(user.id)
          : user.lastName === filt
          ? Find(user.id)
          : user.phone === filt
          ? Find(user.id)
          : user.hight === filt
          ? Find(user.id)
          : user.lastName === filt
          ? Find(user.id)
          : user.id === filt
          ? Find(user.id)
          : "not found";
      });
    }
  };
}

function Find(id) {
  window.location.href = `User.html?userId=${id}`;
}
