import React from 'react'
import axios from 'axios'
import './Styles.css'
import { NavLink } from 'react-router-dom'

const Posts = () => {

  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
    if(posts.length === 0) {
      axios.get("http://localhost:3002/blog/all")
      .then(res => {
        setPosts(res.data)
      })
    }
  })

  return (
    <div className='posts'>
      {posts.map(post => {
        return(
          <div className='post'>
              <h2><NavLink to={post.slug}>{post.title}</NavLink></h2>
              <h4>Author: {post.author}</h4>
              <img src={post.thumbnailurl} alt="img"/>
              <p>{post.bodyhtml}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Posts