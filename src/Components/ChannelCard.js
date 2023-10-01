import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoThumbnailUrl } from "../Utils/constants";

const ChannelCard = ({ channelDetails, marginTop }) => {
  // console.log(channelDetails)
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link to={`/channel/${channelDetails?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetails?.snippet?.thumbnails?.high?.url || demoThumbnailUrl
            }
            alt={channelDetails?.snippet.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channelDetails?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "7px" }} />
          </Typography>
          1 M Subscribers
        </CardContent>
        
      </Link>
    </Box>
  );
};

export default ChannelCard;
