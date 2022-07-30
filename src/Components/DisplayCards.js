import * as React from "react";
import { useState, useEffect, useCallback, useRef } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import HackathonCard from "./Design/HackathonCards";
import { db } from "../Firebase";
import { useSelector } from "react-redux";
import { ref, onValue } from "firebase/database";
import LinearProgress from "@mui/material/LinearProgress";

const DisplayCards = () => {
  const isMounted = useRef(false);
  const data = useSelector((state) => state.Notes);
  const [hackCard, setHackCard] = useState([]);
  const [updatedCard, setUpdatedCard] = useState([]);
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setHackCard([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((x) => {
          setHackCard((oldArray) => [...oldArray, x]);
          setUpdatedCard((oldArray) => [...oldArray, x]);
        });
      }
    });
  }, []);
  useEffect(() => {
    if (isMounted.current) {
      setTimeout(() => {
        getFilter();
      }, 1000);
      console.log("ks");
      console.log(data.name);
    } else {
      isMounted.current = true;
    }
  }, [data.data]);
  const getFilter = useCallback(() => {
    if (data.name === "Sort" && data.data === "Old") {
      const sortByDate = (updatedCard) => {
        const sorter = (a, b) => {
          console.log(a, b);
          return (
            new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
          );
        };
        updatedCard.sort(sorter);
      };
      sortByDate(updatedCard);
    } else if (data.name === "Sort" && data.data === "New") {
      const sortByDate = (updatedCard) => {
        const sorter = (a, b) => {
          console.log(a, b);
          return (
            new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
          );
        };
        updatedCard.sort(sorter);
      };
      sortByDate(updatedCard);
    }
    const filteredData = updatedCard.filter(
      (item) => {
        switch (data.name) {
          case "Level":
            if (data.data.includes("All")) {
              return updatedCard;
            } else if (data.data.includes(item.level)) {
              return item;
            }

            break;

          case "Status":
            if (data.data.includes("All")) {
              return updatedCard;
            } else if (data.data.includes(item.newStatus)) {
              return item;
            }

            break;

          case "Search":
            if (item.name.includes(data.data)) {
              console.log("found");
              return item;
            }

            break;

          default:
            return item;
        }
        return 0;
      },
      [data.data]
    );
    setHackCard(filteredData);
  });
  return (
    <Box sx={{ width: "100%", backgroundColor: "#003145" }}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        {hackCard ? (
          hackCard.map((x) => (
            <Grid item xs={12} md={4} key={Math.random()}>
              <HackathonCard value={x} />
            </Grid>
          ))
        ) : (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default DisplayCards;
