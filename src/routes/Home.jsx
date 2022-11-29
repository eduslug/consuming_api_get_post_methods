// import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import api from '../axios/consfig';

const Home = () => {
    const [post, sePost] = useState([]);


    const getPost = async () => {

        try {
            const response = api.get('/posts');
            const data = (await response).data;
            console.log(data)
            sePost(data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        getPost()
    }, [])

    return (

        <div>
            <h1 className='home'>Último post</h1>
            {post.length === 0 ? (<p>Carregando...</p>) :(
                post.map((posts)=>(
                    <div className='posts' key={posts.id}>
                        <h2>{posts.title}</h2>
                        <p>{posts.body}</p>
                        <Link className='btn' to={`/posts/${posts.id}` }>Ler mais</Link>
                    </div>
                ))
            )}
           
        </div>
    )
}

export default Home


