import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";
const SimilarExercise = ({
  targetMuscleExercises,
  equipmentMuscleExercises,
}) => {
  return (
    <Box
      sx={{
        mt: {
          lg: "100px",
          xs: "0",
        },
      }}
    >
      <Typography variant="h3" mb="5px" mt="20px">
        Exercises that target the same muscle group
      </Typography>
      <Stack
        direction="row"
        sx={{
          p: "2px",
          position: "relative",
        }}
      >
        {targetMuscleExercises.length ? (
          <HorizontalScrollBar data={targetMuscleExercises} />
        ) : <Loader />}
      </Stack>

      <Typography variant="h3" mb="5px" mt="60px">
        Exercises that use the same equipment
      </Typography>
      <Stack
        direction="row"
        sx={{
          p: "2px",
          position: "relative",
        }}
      >
        {equipmentMuscleExercises.length ? (
          <HorizontalScrollBar data={equipmentMuscleExercises} />
        ) : <Loader />}
      </Stack>
    </Box>
  );
};

export default SimilarExercise;
