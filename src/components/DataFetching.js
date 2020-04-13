import React, {useState, useEffect} from 'react';
import axios from 'axios'
function DataFetching() {

    const [posts, getPosts] = useState([])

    const [post, getPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res => {
            console.log('data fetch')

            getPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })

        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then(res => {
        // console.log('data fetch')

        //     getPost(res.data)
        // })
        // .catch(err => {
        //     console.log(err)
        // })
    }, [idFromButtonClick])

    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)} />
            <button onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
        </div>
    )
}

export default DataFetching;
