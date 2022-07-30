import { useParams } from "react-router-dom";
import { Fragment } from "react";
import { Box, Typography, CardMedia, Button } from "@mui/material";
import { ref, remove } from "firebase/database";
import NavBar from "../Components/NavBar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Easy from "../Images/easy.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { db } from "../Firebase";

const ViewDescription = () => {
  const data = useSelector((state) => {
    return state.Data;
  });
  const { id } = useParams();
  const deleteHandler = () => {
    remove(ref(db, id));
  };

  return (
    <Fragment>
      <NavBar />
      <Box
        sx={{ backgroundColor: "#003145", height: { xs: "80vh", md: "60vh" } }}
      >
        <Box>
          <Typography
            sx={{
              backgroundColor: "#FFCE5C",
              borderRadius: 3,
              m: { xs: 1, md: 2 },
              p: 2,
              width: { md: "50vw" },
            }}
          >
            Starts on {data.data.startDate} (India Standard Time)
          </Typography>
          <Typography
            sx={{
              backgroundColor: "#FFCE5C",
              borderRadius: 3,
              m: { xs: 1, md: 2 },
              p: 2,
              width: { md: "50vw" },
            }}
          >
            Ends on {data.data.endDate} (India Standard Time)
          </Typography>
        </Box>
        <Typography variant="h3" sx={{ m: 3, color: "white" }}>
          {data.data.name}
        </Typography>
        <Typography sx={{ m: 3, color: "white" }}>
          {data.data.description.slice(0, 10)}
        </Typography>
        <Box>
          <Box>
            <Typography
              sx={{
                m: 3,
                color: "black",
                borderRadius: 2,
                width: 80,
                display: "flex",
                backgroundColor: "white",
              }}
            >
              <CardMedia
                sx={{ width: 10, height: 10, m: 1 }}
                image={Easy}
                alt="Live from space album cover"
              />
              {data.data.level}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ backgroundColor: "white" }}>
            <Toolbar
              variant="dense"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography
                variant="h6"
                color="inherit"
                component="div"
                sx={{ color: "black" }}
              >
                OverView
              </Typography>
              <Box>
                <Link to="/Create" style={{ textDecoration: "none" }}>
                  <Button variant="contained" color="success" sx={{ m: 1 }}>
                    Edit
                  </Button>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  {" "}
                  <Button
                    variant="outlined"
                    color="error"
                    sx={{ m: 1 }}
                    onClick={deleteHandler}
                  >
                    Delete
                  </Button>
                </Link>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        <Box sx={{ m: 3 }}>
          <Typography variant="div">{data.data.description}</Typography>
        </Box>
      </Box>
    </Fragment>
  );
};
export default ViewDescription;
