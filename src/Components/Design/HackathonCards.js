import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Countdown from "react-countdown";
import {Link} from 'react-router-dom';
import { db } from "../../Firebase";
import { ref as refD, update } from "firebase/database";
import { useDispatch } from "react-redux"
import { upDate } from "../../Utils/Store";
const HackathonCard = (props) => {
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const [status, setStatus] = useState(props.value.newStatus);
  const d1 = new Date(props.value.startDate);
  const d2 = new Date(props.value.endDate);
  const dispatch = useDispatch();
  const updateHandler = ()=>{
dispatch(upDate(props.value))
  }
  const Completionist = () => <Countdown date={d2} renderer={rendererAgain} />;
  const Completion = () => <span>{props.value.endDate}</span>;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      setStart(true);
      setStatus("Active");

      // Render a completed state
      return <Completionist />;
    } else {
      setStart(false);
      // Render a countdown
      return (
        <span>
          {days} days:{hours} hrs:{minutes} min:{seconds} sec
        </span>
      );
    }
  };
  const rendererAgain = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      setStatus("Past");
      setEnd(true);
      // Render a completed state
      return <Completion />;
    } else {
      setEnd(false);
      // Render a countdown
      return (
        <span>
          {days} days:{hours} hrs:{minutes} mins:{seconds} sec
        </span>
      );
    }
  };
  useEffect(() => {   
    statusUpdate();
  }, [status]);
  function statusUpdate() {
    setTimeout(() => {
      update(refD(db, `/${props.value.uuid}`), {
        newStatus: status,
      });
    }, 1000);
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.value.image}
        alt="green iguana"
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            width: 100,
            m: "auto",
            backgroundColor: `${
              !start ? "#F2C94C40" : !end ? "#44924C3D" : "#FF3C002B"
            }}`,
          }}
        >
          {!start ? "Upcoming" : !end ? "Active" : "Past"}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {props.value.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ m: 1 }}>
          {!start ? "Starts In" : !end ? "Ends In" : "Ended on"}
        </Typography>
        <Typography sx={{ m: 1 }}>
          <Countdown date={d1} renderer={renderer} />
        </Typography>
        <Link to={`/${props.value.uuid}`} style={{textDecoration:'none',color:'white'}}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#44924C", color: "white" }}
          onClick={updateHandler}
        >
          <TaskAltIcon sx={{ m:1 }} />

          Participate Now
        </Button>
          </Link>
      </CardContent>
      <CardActions sx={{ textAlign: "center" }}></CardActions>
    </Card>
  );
};
export default HackathonCard;
