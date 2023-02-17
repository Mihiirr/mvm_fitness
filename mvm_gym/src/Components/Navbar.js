import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/logo2.png';


const Navbar= () => {
    return(
    <div> 
      <Stack direction="row" 
      justifyContent="space-around" sx={{ gap: { sm: '12px', 
         xs: '40px'
    }, mt: { sm: '32px', xs: '20px'}, justifyContent: 'none'}} px="20px">
        <Link to="/home">
          <img src={Logo} alt="logo" style={{
            width: '98px', height: '98px', margin: '0 10px' 
          }}/>
        </Link>
        <Stack 
           direction="row"
           gap="40px"
           fontSize="24px"
           alignItems="flex-end"
           
         >
          <Link to="/" style={{ textDecoration: 'none',
            color: "#3A1212", borderBottom: "3px solid #FF2625"
        }}> Home </Link>
            <a href="#exercises" style={{
                textDecoration: 'none', color: '#3A1212'
            }}> Exercises</a>
          
        </Stack>
      </Stack>   
    </div>
    )
}

export default Navbar;