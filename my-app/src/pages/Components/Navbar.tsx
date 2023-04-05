import React from "react";
import Link from 'next/link'

export default function Navbar(){
    return(
        <>
            <nav className="navbar" style={{  
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      backgroundColor: 'white', 
      color: 'black',
      position: 'fixed', 
      top: '0', 
      width: '100%', 
      height: 'auto',
      zIndex: '1',
      fontSize: '1.5vw', 
      padding: '1vw' 
    }}>
<div style={{ display: 'flex', alignItems: 'center' }}>
<h3 style={{ marginLeft: '20px' }}>Payz Wallet</h3>
</div>

</nav>
        </>
    )
}