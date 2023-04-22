import React, { useContext, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import Pagination from "@mui/material/Pagination";
import { fetchData, youtubeOptions } from "../utils/fetchData";
import Loader from "./Loader";
const ExerciseVideos = ({ exerciseVideos, name, setExerciseVideos }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = async (e, value) => {
    setCurrentPage(value);
    if (exerciseVideos?.next) {
      const youtubeSearchUrl = `https://youtube-search-and-download.p.rapidapi.com`;
      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?next=${exerciseVideos.next}`,
        youtubeOptions
      );

      setExerciseVideos(exerciseVideosData);
      window.scrollTo({
        top: 1000,
        behavior: "smooth",
      });
    }
  };
  return (
    <Box
      sx={{
        mt: {
          lg: "200px",
          xs: "20px",
        },
      }}
      p="20px"
    >
      <Typography variant="h3" mt="33px" mb="20px">
        Watch{" "}
        <span
          style={{
            color: "#ff2625",
            textTransform: "capitalize",
          }}
        >
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      {exerciseVideos?.contents?.length ? (
        <>
          <Stack
            justifyContent="flex-start"
            flexWrap="wrap"
            alignItems="center"
            sx={{
              flexDirection: {
                lg: "row",
              },
              gap: {
                lg: "110px",
                xs: "0px",
              },
            }}
          >
            {exerciseVideos?.contents?.map((item, index) => (
              <a
                key={index}
                className="exercise-video"
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_Blank"
                rel="noreferrer"
              >
                <img
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                />
                <Box>
                  <Typography variant="h5" color="#000">
                    {item.video.title}
                  </Typography>
                  <Typography variant="h6" color="#000">
                    {item.video.channelName}
                  </Typography>
                </Box>
              </a>
            ))}
          </Stack>
          <Stack mt="100px" alignItems="center">
            <Pagination
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={exerciseVideos?.estimatedResults}
              page={currentPage}
              onChange={paginate}
              size="medium"
            />
          </Stack>
        </>
      ) : (
        <Loader />
      )}
    </Box>
  );
};

export default ExerciseVideos;
