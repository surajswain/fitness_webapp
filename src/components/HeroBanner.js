import React from 'react'
import {Box,Stack,Typography,Button} from '@mui/material'

import Heroimg from './../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box sx={{ mt:{lg:'212px' ,xs:'70px'} , ml:{sm:'50px'}}}  position='relative' p='20px'>
      <Typography color='red' fontWeight='600' fontSize='25px'>
        Fitness Club
      </Typography>
      <Typography fontWeight='700' sx={{fontSize:{lg:'44px' ,xs:'40px'}}} >
      Sweat, smile <br/>
      and repeat
      </Typography>
      <Typography fontSize='25px' lineHeight='35px'>
    Check out the most effective exercises
      </Typography>
      <Button variant='contained' color='error'sx={{mt:'20px', padding:'10px'}}>Explore Exercises</Button>
    <Typography fontWeight="600" fontSize='105px' color='red' margin='170px 0px 0px 70px' sx={{ opacity:'0.1', 
  display:{lg:'block', sm:'none'}
    }}>
        Exercise
      </Typography>
  <img src={Heroimg} alt='herobanner' className='hero-banner-img'
  />
    </Box>
  )
}

export default HeroBanner