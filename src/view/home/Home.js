import React from 'react'
import Cover from '../../components/cover/Cover'
import Trend from '../../components/trend/Trend'
import Posts from '../../components/posts/Posts'

const Home = () => {
  return (
    <div>
        <Cover />
        <Trend />
        <Posts />
    </div>
  )
}

export default Home