// json 문제

{
    // 1
    function getRandomPostTitle() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            if (!res.ok) throw new Error("에러 발생함");
            return res.json();
        })
        .then((posts) => {
            const randomIdx = Math.floor(Math.random() * posts.length);
            console.log(`Q1: Random Post Title: ${posts[randomIdx], title}`)
        })
        .catch(console.error);
    }
    getRandomPostTitle(); // Random Post Title: nostrum quis quasi placeat
}

{
    // 1
    function getUserInfo(userId) {
        fetch("https://jsonplaceholder.typicode.com/users" + userId)
        .then((res) => {
            if (!res.ok) throw new Error("에러 발생함");
            return res.json();
        })
        .then(({name, email}) => {
            console.log(`Q2: Name: ${name}, Email: ${email}`);
        })
        .catch(console.error);
    }
    getUserInfo(1);
}

{
    // 3
    function getPostDetails(userId) {
        fetch("https://jsonplaceholder.typicode.com/posts" + userId)
        .then((res) => {
            if (!res.ok) throw new Error("에러 발생함");
            return res.json();
        })
        .then(({title, body}) => {
            console.log(`Post Title: ${title}, Body: ${body}`);
        })
        .catch(console.error);
    }
    getUserInfo(1);
}

{
    // 4
    function getAllUsers(userId) {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        if (!res.ok) throw new Error("에러 발생함");
        return res.json();
    })
    .then((users) => {
        console.log(users);
        for (const {name, email} of users) {
            console.log(`Name: ${name}, Email: ${email}`);
        }
        })
        .catch(console.error);
    }
    getUserInfo(1);
}

{
    // 5
    function getPostcommentss(postId) {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then((res) => {
        if (!res.ok) throw new Error("에러 발생함");
        return res.json();
    })
    .then((posts) => {
        for (const {body} of posts) {
            console.log(body);
        }
        })
        .catch(console.error);
    }
    getUserInfo(1);
}

{
    // 6
    function getAllCommentBodies() {
        fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then((res) => {
            if (!res.ok) throw new Error("에러 발생함");
            return res.json();
        })
        .then((comments) => {
            for (const comment of comments) {
                console.log(`Comment: ${comment.body}`);
            }
            })
            .catch(console.error);
        }
    
    getAllCommentBodies();

}

{
    // 7
    function getSortedPostTitles() {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((res) => {
            if (!res.ok) throw new Error("에러 발생함");
            return res.json();
        })
        .then((posts) => {
            const sortTitles = posts.map((post) => post.title).sort();
            for (const title of sortTitles) {
                console.log(`${title}`);
            }
            })
            .catch(console.error);
        }
    
        getSortedPostTitles();

}

{
    // 8
    function getAllUserAddresses() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => {
        if (!res.ok) throw new Error("에러 발생함");
        return res.json();
    })
    .then((users) => {
        for (const user of users) {
            console.log(`${title}`);
        }
        })
        .catch(console.error);
    }

    getAllUserAddresses();
}

{
    // 9
    function getUserPostTitles(userId) {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((res) => {
            if (!res.ok) throw new Error("에러 발생함");
            return res.json();
        })
        .then((posts) => {
            console.log(posts);
            for (const { title } of posts) {
                console.log(title);
            }
            })
            .catch(console.error);
        }
    
        getAllUserAddresses(1);
}