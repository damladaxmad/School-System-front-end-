import React from "react";
import { Avatar, Typography, makeStyles } from "@material-ui/core";
import StagesChart from "./StagesChart";
import { VictoryPie, VictoryContainer } from "victory";

const myData = [
  { x: "primary", y: 900 },
  { x: "secondary", y: 300 },
  { x: "others", y: 400 },
];

const useStyles = makeStyles((theme) => {
  return {
    avatar: {
      marginLeft: theme.spacing(2),
      cursor: "pointer",
      backgroundColor: "#F0F2FA",
    },
  };
});

const Chart = () => {
  const secondary = {
    color: "#F2994A",
    title: "Secondary School",
    value: "4,55",
  };
  const primary = { color: "#0061F7", title: "Primary School", value: "2,55" };
  const others = { color: "#F5EFFF", title: "Others", value: "1,55" };
  const classes = useStyles();

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        height: "350px",
        boxShadow: "1px 1px 1px #9E9E9E",
        display: "flex",
        gap: "100px",
        // justifyContent: 'center',
         alignItems: 'center'
      }}
    >

      <div>
        <Typography
          style={{ minWidth: '360px', fontWeight: "600", fontSize: "20px", color: "#0061F7" }}
        >
          Students By Educational Stage
        </Typography>

        <StagesChart value={primary} />
        <StagesChart value={secondary} />
        <StagesChart value={others} />
      </div>

      <div>
        <VictoryPie
          data={myData}
          colorScale={["#0061F7", " #F5EFFF", "#F2994A"]}
          radius={147}
          labels={() => null}
          animate={{
            animationWhitelist: ["style", "data", "size"], // Try removing "size"
            onExit: {
              duration: 500,
              before: () => ({ opacity: 0.3, _y: 0 }),
            },
            onEnter: {
              duration: 500,
              before: () => ({ opacity: 0.3, _y: 0 }),
              after: (datum) => ({ opacity: 1, _y: datum._y }),
            },
          }}
          containerComponent={
            <VictoryContainer
              style={
                {
                  // float: "right",
              
                  // marginRight: "70px",
                  // position: "absolute",
                  // top: "225px",
                  // right: "90px",
                }
              }
              responsive={false}
            />
          }
        />
      </div>
    </div>
  );
};

export default Chart;
