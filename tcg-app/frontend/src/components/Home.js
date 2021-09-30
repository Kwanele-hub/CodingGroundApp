import React from 'react'
import { Link }from 'react-router-dom'

function Home() {
    return (
        <div>
   
    <h2>TCG-tracker-app</h2>
    <Link to="/login">
    <button >LOGIN</button>
    </Link>       
        </div>
    )
}

export default Home