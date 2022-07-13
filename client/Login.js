function Enter() {
  var id = document.getElementById("id").value;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `http://localhost:3000/users/${id}`); //get from server
  xhr.send();
  xhr.onload = function () {
    if (xhr.status != 200) {
      alert(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
      let user = JSON.parse(xhr.responseText);
      if (user.id === "123456789") {
        // localStorage.setItem("U", JSON.stringify(users));
        window.location.href = "Manager.html";
      } else {
        window.location.href = `User.html?userId=${user.id}`;
      }
    }
  };
}
