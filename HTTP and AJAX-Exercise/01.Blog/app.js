function attachEvents() {
    let allPost = {};

    const postsUrl = "http://localhost:3030/jsonstore/blog/posts";
    const commentsUrl = "http://localhost:3030/jsonstore/blog/comments";

    const loadPostsBtn = document.getElementById("btnLoadPosts");
    const viewBtn = document.getElementById("btnViewPost");

    const postList = document.getElementById("posts");
    const postTitle = document.getElementById("post-title");
    const postContent = document.getElementById("post-body");
    const listComments = document.getElementById("post-comments");

    loadPostsBtn.addEventListener("click", () => {
        fetch(postsUrl)
            .then(res => res.json())
            .then(data => {
                allPost = data;

                for (const key in data) {
                    const postObj = data[key];

                    const option = document.createElement("option");
                    option.setAttribute("value", postObj.id);
                    option.textContent = postObj.title;
                    postList.appendChild(option);
                }
            });
    });

    viewBtn.addEventListener("click", () => {
        const postId = postList.value;

        fetch(commentsUrl)
            .then(res => res.json())
            .then(data => {
                listComments.textContent = "";
                postTitle.textContent = allPost[postId].title;
                postContent.textContent = allPost[postId].body;
                const comments = Object.values(data).filter(d => d.postId === postId);

                for (const comment of comments) {
                    const li = document.createElement("li");
                    li.setAttribute("id", comment.id);
                    li.textContent = comment.text;

                    listComments.appendChild(li);
                }
            });
    });
}

attachEvents();