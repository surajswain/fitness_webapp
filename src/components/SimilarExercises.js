import React from 'react'
import { Box ,Stack,Typography} from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'
const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {
  return (
    <Box sx={{mt:{lg:'100px', xs:'0px'}}}>
<Typography variant='h3'>Exercises that target the same Muscle</Typography>
<Stack direction='row' sx={{p:'2' ,position:'relative'}}>
{targetMuscleExercises.length ? <HorizontalScrollBar data={equipmentExercises}/>: <Loader/>}
</Stack>
    </Box>
  )
}

export default SimilarExercises