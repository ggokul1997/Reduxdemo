import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <>
    <div style={{height:"100vh",}}>Something Went Wrong
    
    <h1><Link to={"/"}>Go Back Home</Link></h1>
    </div>
    </>
  )
}

export default Error