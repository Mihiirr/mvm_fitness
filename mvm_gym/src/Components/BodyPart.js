import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon2 from '../assets/icons/menu-com.png'

const BodyPart = ({ item, setBodyPart, bodyPart}) => {
  return (
    <Stack
       type="button"
       alignItems="center"
       justifyContent="center"
       className="bodyPart-card"
       sx={{
         
            borderTop: bodyPart === item ? '4px solid #1E5128' : '',
            backgroundColor: '#749F82',
            borderBottomLeftRadius: '20px',
            width: '270px',
            height: '280px',
            cursor: 'pointer',
            gap: '47px' }}
            onClick={() => {setBodyPart(item);
            window.scrollTo({top: 1800 , left: 100, behaviour: 'smooth'})
            }}
        
    >
      <img  src={Icon2} alt="dumbell"
       style={{ width: '90px', height: '90px'}}/>
       <Typography 
       fontSize="24px" fontWeight="bold" color="#425F57"
        textTransform="capitalize"
       >
       {item}</Typography>
    </Stack>
  )
}

export default BodyPart