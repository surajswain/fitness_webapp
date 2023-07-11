import React,{useState,useEffect} from 'react'
import  Pagination from '@mui/material/Pagination'
import { Box,Stack,Typography} from '@mui/material'
import { exerciseOptions,fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

const Exercises = ({exercises,setExercises,bodyPart}) => {
  const [currentPage,setCurrentPage]=useState(1);
  const exercisePerPage=9;


const lastIndex=currentPage*exercisePerPage ;
const firstIndex=lastIndex-exercisePerPage;

// let currentExercises=" ";
const currentExercises=exercises.slice(firstIndex,lastIndex);

useEffect(()=>{
  
  const fetch1=async()=>{
    
     let exercises2=[];
  
     if(bodyPart==='all')
     exercises2=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
     else
     exercises2=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions);

    
    setExercises(exercises2);
 
  }
  
  fetch1();

},[bodyPart])


const paginate=(event,value)=>{
  setCurrentPage(value)
  // console.log( currentPage,firstIndex,lastIndex, currentExercises.length,exercisePerPage)
  window.scrollTo({top:1700 ,behavior:'smooth'})
}


  return (
   <Box 
   id='exercises'
   mt='50px'
   sx={{mt:{lg:'110px'}  }}
   p='20px'
   >
   
<Typography variant='h3' sx={{mb:'40px'}}>
  Showing results
</Typography>
<Stack direction='row' 
sx={{gap:{lg:'110px' ,sm:'50px'}}} 
flexWrap='wrap' justifyContent={'center'}>
 
 

{  currentExercises.map((exercise,index)=>(
    
   <ExerciseCard key={index} exercise={exercise}/>  

 ))  } 

</Stack>
 <Stack mt='100px' alignItems='center'>
{exercises.length>9 &&

 <Pagination   
  color='standard'
  shape='rounded'
  defaultPage={1}
  count={Math.ceil(exercises.length/exercisePerPage)}
  page={currentPage}
  onChange={paginate}
  size='large'
 />


}
 </Stack>
   </Box>
  )
}

export default Exercises