// import { useEffect, useState } from "react"

// export default function Test() {

    // const [postId, setPostId] = useState(1)
    // const [post, setPost] = useState(false)

    // useEffect(()=> {
    //     console.log('component ilk yüklendiğinde çalışır');
    //     return ()=> {
    //         console.log('component destroyed');
    //     }
    // }, [])

    // useEffect(()=> {
    //     fetch('https://jsonplaceholder.typicode.com/posts/${postId}')
    //     .then(data => setPost(data))
    // }, [postId])

    // useEffect(()=> {
    //     console.log('component render oldu!');
    // })

    // return (
    //     <div>
    //         <h3>{postId}</h3>
            // {/* {post && JSON.stringify(post)} */}

    //         <button onClick={()=> setPostId(postId => postId + 1)}>Sonraki Konu</button>
    //         <hr />
    //         test component
    //     </div>
    // )
// }