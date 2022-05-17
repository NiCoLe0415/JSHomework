const container = document.getElementById("container");
const saveButton = document.getElementById("saveButton");
const newPostTitle = document.getElementById("new_title");
const newComment = document.getElementById("new_comment");
const newImage = document.getElementById("new_image_url");

const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    const limitedPosts = json.slice(0, 10);
    console.log(limitedPosts);
    showPosts(limitedPosts);
};

// const getUsers = ...

const showPosts = (posts) => {
    const postsTitles = posts.map((post) => post.title);
    const postBody = posts.map((post) => post.body);
    postsTitles.forEach((postTitle, postBody) => {
        const post = document.createElement("div");
        post.classList.add("post-card");

        const title = document.createElement("h2");
        title.classList.add("post-card-title");
        title.innerText = postTitle;

        const body = document.createElement("h3");
        body.classList.add("post-card-author");
        body.innerText = postBody;

        const postImage = document.createElement("img");
        postImage.setAttribute(
            "src",
            `https://picsum.photos/400/${Math.floor(390 + Math.random() * 10)}`
        );

        post.appendChild(title);
        post.appendChild(body);
        post.appendChild(postImage);
        container.appendChild(post);
    });
};

const addArticle = (title, body, img) => {
    const post = document.createElement("div");
    post.classList.add("post-card");

    const postTitle = document.createElement("h2");
    postTitle.classList.add("post-card-title");
    const postBody = document.createElement("h3");
    postBody.classList.add("post-card-body");
    const postImage = document.createElement("img");
    postImage.setAttribute("src", img);

    postTitle.innerText = title;
    postBody.innerText = body;
    postImage.innerHTML = img;

    post.appendChild(postBody);
    post.appendChild(postTitle);
    post.appendChild(postImage);
    container.appendChild(post);
};

saveButton.addEventListener("click", () => {
    addArticle(newPostTitle.value, newComment.value, newImage.value);

    // window.location.href = `post.html?1`;
});

getPosts();
