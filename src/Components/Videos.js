import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "./Indexfile";

const Videos = ({ videoslist }) => {

    if (!videoslist?.length) return "Loading...";
    
    // console.log(videoslist)

  return (
    <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"start"} gap={2}>

      {videoslist?.map((element, index) => {
        return (
          <Box key={index}>
            {element.id.videoId && <VideoCard video={element} />}
            {element.id.channelId && <ChannelCard channelDetails={element} />}
          </Box>
        );
      })}
      
    </Stack>
  );
};

export default Videos;
