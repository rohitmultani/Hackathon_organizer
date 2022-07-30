import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import AI from "../Images/AI.svg";
import Icon from "../Images/Icon2.svg";
import people from "../Images/people.svg";

const HomeCatalogue = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          border: (theme) => `1px solid ${theme.palette.divider}`,

          bgcolor: "#002A3B",
          color: "white",
          "& svg": {
            m: 1.5,
          },
          "& hr": {
            mx: 0.5,
          },
        }}
      >
        <CardMedia
          sx={{ width: 50, height: 50, m: 4 }}
          image={AI}
          alt="Live from space album cover"
        />
        <Typography sx={{ m: 2 }}>
          100K+
          <Typography>AL model submissions</Typography>
        </Typography>

        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{
            backgroundColor: "white",
            display: { xs: "none", md: "block" },
          }}
        />
        <CardMedia
          sx={{ width: 50, height: 50, m: 4 }}
          image={Icon}
          alt="Live from space album cover"
        />
        <Typography sx={{ m: 2 }}>
          50K+
          <Typography>Data Scientists</Typography>
        </Typography>

        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{
            backgroundColor: "white",
            display: { xs: "none", md: "block" },
          }}
        />
        <CardMedia
          sx={{ width: 50, height: 50, m: 2 }}
          image={people}
          alt="Live from space album cover"
        />

        <Typography sx={{ m: 2 }}>
          100+
          <Typography>Al Challenges hosted</Typography>
        </Typography>
      </Box>
    </div>
  );
};
export default HomeCatalogue;
