import React from 'react'
import PrimarySearchAppBar from './components/Header/PrimarySearchAppBar'
import BlogCard from './components/BlogCard/BlogCard'
import BlogDetails from './components/BlogDetails/BlogDetails'
import './App.css';
const App = () => {
  
  return (
    
    <>
      <PrimarySearchAppBar/>
      <div>
        <h2>
          TRENDING BLOGS
        </h2>
      </div>
      <div className='blogCards'>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      </div>

      <div>
        <h2>
          RECENT BLOGS
          </h2>
      </div>
      <div className='blogDetails'>
      <BlogDetails/>
      <BlogDetails/>
      <BlogDetails/>
      <BlogDetails/>
      </div>

      
    </> // can we use fragment?
    // <PrimarySearchAppBar/> use this
  )
}

export default App
