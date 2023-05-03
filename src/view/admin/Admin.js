import React from 'react'
import './Styles.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Admin = () => {

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        console.log( "AASADASSD")
        event.preventDefault()
        const title = document.getElementById("title").value
        const author = document.getElementById("author").value
        const thumbnailUrl = document.getElementById("image").value
        const bodyHtml = document.getElementById("bodyHtml").value

        const header = { 
            title,
            slug,
            author,
            thumbnailUrl
        }
        const data = {header, bodyHtml}

        await axios.post("http://localhost:3002/blog", data)
        navigate(`/${slug}`)
    }

    const handleClick = () => {
        const slug = document.getElementById("title").value.toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');
        setSlug(slug)
    }

    const [slug, setSlug] = React.useState('')

    return (
        <div className="adminDiv">
            <form className="adminForm" onSubmit={handleSubmit}>
                <input maxlength="32" type="text" placeholder='Título' id="title" onChange={() => handleClick()} />
                {slug}
                <input type="text" placeholder='Autor' id="author" />
                <input type="text" placeholder='Link da sua imagem' id="image" />

                <textarea id="bodyHtml"/>
                <button type='submit'>Criar artigo</button>
            </form>
        </div>
    )
}

export default Admin