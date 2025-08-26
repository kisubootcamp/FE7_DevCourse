{

    async function getRandomPostTitle() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!res) return new Error('response Error')
        const posts  = await res.json()
        const titles = posts.map(post => post.title);
        console.log(titles);
    }

    getRandomPostTitle(); 
}

{
    async function getUserInfo(userId) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if(!res) return new Error('response Error')
        const data  = await res.json()
        console.log(data);
    }

    getUserInfo(1);
}

{

    async function getPostDetails(postId) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if(!res) return new Error('response Error')
        const data  = await res.json()
        console.log(data);
    }
    
    getPostDetails(1); // 출력 예상 결과는 아래에
}

{
    async function getAllUsers() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
        if(!res) return new Error('response Error')
        const data  = await res.json()
        data.forEach(({ username, email }) => {
            console.log(`Name: ${username} Email: ${email}`);
        });
    }

    getAllUsers();
}

{
    async function getPostComments(postId) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        if(!res) return new Error('response Error')
        const data  = await res.json()
        data.forEach(({ name, body }) => {
            console.log(`Comment by ${name} : ${body}`);
        });
    }

    getPostComments(1);
}

{
    async function getAllCommentBodies() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
        if(!res) return new Error('response Error')
        const data  = await res.json()
        data.forEach(({ body }) => {
            console.log(`Comment:  ${body}`);
        });
    }
    getAllCommentBodies();
}

{
    // function getSortedPostTitles() {
    //     fetch(`https://jsonplaceholder.typicode.com/posts`)
    //         .then((res) => {
    //             if (!res.ok) return new Error('response Error')
    //             return res.json()
    //         })
    //         .then((data) => {
    //             // console.log(data)
    //             const title = data.map((v) => v.title);
    //             const sortTitle = title.sort((a,b) => a.localeCompare(b));
    //             return console.log(sortTitle)
    //         })
    // }
    async function getSortedPostTitles() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
        if(!res) return new Error('response Error')
        const data  = await res.json()
        // data.forEach(({ body }) => {
        //     console.log(`Comment:  ${body}`);
        // });
    }
    getSortedPostTitles();
}

{
    function getAllUserAddresses() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((res) => {
                if (!res.ok) return new Error('response Error')
                return res.json()
            })
            .then((data) => {
                // console.log(data)

                // data.forEach((user) => {
                //     const { name, address } = user;
                //     const { suite, street, city, zipcode } = address;
                //     console.log(`Address of ${name}: ${suite} ${street}, ${city} ${zipcode}`);
                // });

                return data.map((v) => console.log(`Address of ${v.name}: ${v.address.suite} ${v.address.street} ${v.address.city} ${v.address.zipcode}`))
            })
    }
    
    getAllUserAddresses();
}

{
    function getUserPostTitles(userId) {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then((res) => {
                if (!res.ok) return new Error('response Error')
                return res.json()
            })
            .then((data) => {
                // console.log(data)
                data.filter(v => {
                    if(v.userId === userId)
                        return console.log(`Post title : ${v.title}`)
                })
            })
    }
    
    getUserPostTitles(1);
}