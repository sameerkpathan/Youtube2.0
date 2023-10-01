import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./Indexfile";
import { fetchFromAPI } from "../Utils/fetchFromAPI";

const ChannelDetails = () => {
    
  const [channelDetail, setChannelDetails] = useState(null);
  const [video, setVideo] = useState([]);

  const { id } = useParams();

  //   console.log(video);

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) =>
      setChannelDetails(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideo(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,238,247,1)0%,rgba(206,3,184,1)100%,rgba(0,212,255,1)100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetails={channelDetail} marginTop="-100px" />
      </Box>

      <Box display="flex" p="2" justifyContent={"center"}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videoslist={video} />
      </Box>

    </Box>
  );
};

export default ChannelDetails;
