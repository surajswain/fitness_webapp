import React, { useEffect, useState } from 'react'
import {Typography,Stack,Box,TextField,Button} from '@mui/material';
import { exerciseOptions,fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';
const SearchExercises = ({exercises,setExercises,bodyPart,setBodyPart }) => {

  const [search,setSearch]=useState('');
  // const [exercises,setExercises]=useState([]);
  const [bodyParts,setBodyParts]=useState([]);

    useEffect( ()=>{
      const fetchExerciseData= async()=>{

        const bodyPartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
        setBodyParts(['all',...bodyPartsData])
      }

      fetchExerciseData();

    },[])

  const handleSearch= async ()=>{
    if(search)
    {
      // console.log(search)
      const exercisesData= await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);

      // console.log(exercisesData);
      const searchedExercises=exercisesData.filter((ele)=>ele.name.toLowerCase().includes(search)||
      ele.target.toLowerCase().includes(search)||
      ele.equipment.toLowerCase().includes(search)||
      ele.bodyPart.toLowerCase().includes(search) );
      // console.log(searchedExercises);
 
setSearch('');
 
setExercises(searchedExercises);
 

 
    }

  }



  return (
    <>
    <Stack alignItems='center' justifyContent='center' margin='30px' padding='20px'  >
    <Typography fontWeight={700} sx={{fontSize:{lg:'44px', sm:'30px'} ,alignItems:'center' }}>
      Awesome Exercises <br/> You Should Know
    </Typography>
    
    
    <Stack
  direction="row"
  display="flex"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  
>
      <div>

      <TextField
      sx={{ input:{fontWeight:'600',border:'none',borderRadius:'4px'} , width:{lg:'810px',xs:"350px" } ,backgroundColor:'white'}}
      height='76px'
        value={search}
        onChange={(e)=>setSearch(e.target.value.toLowerCase())}
        placeholder='Search Exercises'
        type='text'
      />
      </div>
      <div>

       
        <Button  className='search-btn' sx={{backgroundColor:'red' ,color:'white' ,
      
        width:{lg:"175px",sm:"80px"} 
         
        }} 
        onClick={handleSearch}
        >
        Search
      </Button>
      </div>


  </Stack>
  

  <Box sx={{ position:'relative',width:'100%',p:'20px'}}>
   <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart/>
  </Box>
  </Stack>
  </>
)
      }

export default SearchExercises