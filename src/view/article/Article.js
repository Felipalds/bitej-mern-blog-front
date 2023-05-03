import React from 'react'
import axios from 'axios'
import './Styles.css'

const Article = () => {

    const [ article, setArticle ] = React.useState({})
    const [ hasArticle, setHasArticle ] = React.useState(false)

    React.useEffect(() => {
        const pathname =window.location.pathname.replace("/", "")
        if(!hasArticle){
            axios.get(`http://localhost:3002/blog/slug/${pathname}`).then(res =>{
                setArticle(res.data)
                setHasArticle(true)
            })
        }
    })

  return (
    <div className="article">
        <div className="articleHeader">
            <h2>{article.title}</h2>
            <h4>Author: {article.author}</h4>
            <img src={article.thumbnailurl} alt="img"/>
        </div>
        <p>{article.bodyhtml}</p>
    </div>
  )
}

export default Article