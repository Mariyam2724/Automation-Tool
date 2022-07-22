// 1. component is a javascript function
// 2.function should start with upper case letter
// 3. it should contain a top level(which is not nested) return statement


// rafce

import React from 'react'

const Home = () => {
  return (
    <div>
        <h1 style={{color: 'red'}}>Home page</h1>
        <h1>A home component</h1>
        <input className='form-control' />
    </div>
  )
}

export default Home;