import { useState } from "react"
import Login from "../Login-Form/Login"

function Heading() {
    const [showLogin, setShowLogin ] = useState(false)

    const handleLoginClick = () => {
        setShowLogin(true)
    }


    return (
        <div className="heading">         
            <p>Inventory <span>Purchase</span></p>        
            <button className="btn"  onClick={handleLoginClick}>Login</button>    
            {showLogin && <Login />}   
        </div>
    )
}

export default Heading
