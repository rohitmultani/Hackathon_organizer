import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import HomeCards from "./Design/HomeCards";
import notebook from "../Images/notebook.svg";
import Robot from "../Images/Robot.svg";
import people from "../Images/people.svg";
import vector from "../Images/Vector.svg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AiChallenges = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h4" sx={{ textAlign: "center", m: 2 }}>
        Why Participate in{" "}
        <span style={{ color: "green" }}> AI Challenges?</span>
      </Typography>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ m: 4 }}
      >
        <Grid item xs={12} md={6}>
          <HomeCards
            image={notebook}
            title={"Prove Your Skills"}
            details={
              "Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions."
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <HomeCards
            image={vector}
            title={"Learn From community"}
            details={
              "One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them."
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <HomeCards
            image={Robot}
            title={"Challenge Youself"}
            details={
              "There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder."
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <HomeCards
            image={people}
            title={"Earn Recognition"}
            details={
              "You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards."
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default AiChallenges;
