import { Stack } from "@mui/material";
import { categories } from "../Utils/constants";

const Sidebar = ({ seLectedCategory, setSeLectedCategory }) => {

  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories?.map((category) => (
        <button
          onClick={() => setSeLectedCategory(category.name)}
          className="category-btn"
          style={{
            background: category.name === seLectedCategory && "#FC1503",
            color: "white",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === seLectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === seLectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
    
  );
};

export default Sidebar;
