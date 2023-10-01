import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Stack, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import Videos from "./Videos";
import { fetchFromAPI } from "../Utils/fetchFromAPI";

const VideoDetails = () => {

  const [videoDetails, setVideoDetails] = useState(null);
  const [video, setVideo] = useState(null);

  const { id } = useParams();

  useEffect(() => {

    fetchFromAPI(`videos?part=snippet,statistic&id=${id}`).then((data) =>
      setVideoDetails(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideo(data.items)
    );
  }, [id]);

  if (!videoDetails?.snippet) return "Loading...";

  // Destructure the Api Details

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetails;

  return (
    <Box minHeight="95vh">

      <Stack direction={{ xs: "column", md: "row" }}>

        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            
            <ReactPlayer
              className="react-player"
              controls
              url={`https://www.youtube.com/watch?v=${id}`}
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p="2">
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h5" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>

              <Stack direction="row" gap="20px" alignItems="center">

                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} Views
                </Typography>

                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} Views
                </Typography>

              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>

      <Box
        px={2}
        py={{ md: 1, xs: 5 }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Videos videoslist={video} />
      </Box>

    </Box>
  );
};

export default VideoDetails;
