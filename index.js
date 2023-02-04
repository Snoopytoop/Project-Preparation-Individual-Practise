// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

const userCards = document.querySelector(".user-list");

async function usersData() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  console.log(users);

  userCards.innerHTML = users.map((user) => userHTML(user)).join("");
}

function postsPage(id) {
    localStorage.setItem("user-Id", id)
    window.location.href = `${window.origin}/user.html`
}

function userHTML(user) {
  return `<div class="user" onclick="postsPage(${user.id})">
  <div class="user-card">
    <div class="user-card__container">
      <h3>${user.name}</h4>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Phone:</b> ${user.phone}</p>
        <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
    </div>
  </div>
  </div>`;
}

usersData();
