import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../Utils/constants";

import SearchBar from "./SearchBar";

//with the help of sx we can provide additional style to material ui components

const Navbar = () => {
  return (
    
      <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{
          position: "sticky",
          background: "#000",
          top: 0,
          justifyContent: "space-between",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Logo" height={42} />
        </Link>

        <SearchBar />

      </Stack>
    
  );
};

export default Navbar;
