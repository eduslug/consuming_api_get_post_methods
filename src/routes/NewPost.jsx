import React, { useState } from 'react'
import './NewPost.css'
import api from '../axios/consfig'
import { Navigate, useNavigate } from 'react-router-dom'

const NewPost = () => {

  const [title, setTitle] = useState()
  const [body, setBody] = useState()



  const creatPost = async (e) => {
    e.preventDefault();
    const post = { title, body, userId: 1 }

    await api.post('/posts', {
      body:post,
    })
    Navigate('/')
  };

  const Navigate = useNavigate()
  return (
    <div className='new-post'>
      <h1>INSIRA UM NOVO POST:</h1>
      <form onSubmit={(e) => creatPost(e)}>
        <div className='form-control'>
          <label htmlFor='title'>Título:</label>
          <input type='text'
            name='title'
            id='title'
            placeholder='Digite o titulo'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='body'>Conteúdo:</label>
          <textarea type='text'
            name='body'
            id='body'
            placeholder='Digite o conteúdo'
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <input
          type='submit'
          value='Criar Post'
          className='btn'
        />
      </form>
    </div>
  )
}
export default NewPost;
