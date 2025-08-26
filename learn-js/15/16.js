{
    // 1
    async function getRandomPostTitle() {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (!res.ok) throw new Error("에러 발생함");
            const posts = await res.json();
            const randomIdx = Math.floor(Math.random() * posts.length);
            console.log(`Q1: Random Post Title: ${posts[randomIdx], title}`)
        } catch (e) {
            console.error(e);
        }
    }
    getRandomPostTitle();
}

{
    // 2
    async function getUserInfo(userId) {
        try {
        const a = await "https://jsonplaceholder.typicode.com/users" + userId;
        if (!res.ok) throw new Error("에러 발생함");
        return res.json();
        console.log(`Q2: Name: ${name}, Email: ${email}`);
        } catch (e) {
            (console.error)
        };
    }
    getUserInfo(1);
}

{
    // 5
    async function getPostcommentss(postId) {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
            const comments = await res.json();
            for (const comment of comments) {
                console.log(`Comment: ${comment.body}`)
            }
        }  catch (e) {
            console.error(e);
        }
    }
}

