import React from 'react'
import {Stack,Typography} from '@mui/material'

import Icon from './../assets/icons/gym.png'
const BodyPart = ({item,bodyPart,setBodyPart}) => {
 

  return (
   <Stack 
   type="button"
   alignItems="center"
   justifyContent="center"
   className='bodyPart-card'
   sx={{ borderTop:bodyPart===item ? '4px solid #ff2625' : ' ' , backgroundColor:'#fff',borderBottomLeftRadius:'20px',width:'270px',height:'270px',cursor:'pointer',gap:'47px' ,m:'10px'}}

   onClick={()=>{
        //  fun;
        setBodyPart(item)
      window.scrollTo({top:1800,left:100,behavious:'smooth'})
      }
   }
   >
    <img src={Icon} alt='dumbell' style={{width:'40px' ,height:'40px'}}/> 
    <Typography fontSize={'20px'} fontWeight={'bold'} 
    textTransform={'capitalize'}
    >{item}</Typography>
     
   </Stack>
  )
}

export default BodyPart
