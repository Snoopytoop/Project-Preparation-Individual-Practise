const userID = localStorage.getItem("user-Id");

const post = document.querySelector(".post-list");

async function usersPosts(value) {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${value}`
  );
  const posts = await data.json();

  post.innerHTML = posts.map((elem) => postHTML(elem)).join("");
}

function postHTML(elem) {
  return `<div class="post">
    <div class="post__title">
      ${elem.title}
    </div>
    <p class="post__body">
      ${elem.body}
    </p>
  </div>`;
}

usersPosts(userID);

async function change(event) {
  const id = event.target.value;
  usersPosts(id);
}
