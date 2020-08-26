import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";

const CookiePreview2 = (props) => {
  const classes = useStyles();
  const { activePanel, activePanelHandler } = props;

  return (
    <div
      className={
        activePanel === 1
          ? `${classes.showPanel} ${classes.mainBoxStyle}`
          : classes.hidePanel1
      }
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>Back</div>
        <div>Our Features</div>
        <div>Done</div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    hidePanel1: {
      transform: "translateX(-350px)",
      transformOrigin: "left",
      transition: "transform 0.3s",
      overflow: "hidden",
      width: "350px"
    },
    showPanel: {
      transform: "translateX(0)",
      transformOrigin: "left",
      transition: "transform 0.3s",
      overflow: "hidden"
    },
    mainBoxStyle: {
      display: "flex",
      flexDirection: "column",
      width: "315px",
      height: "398px",
      boxShadow: "rgba(0, 0, 0, 0.05) 0px 4px 14px",
      position: "relative",
      padding: "20px 20px 18px 17px",
      background: "white",
      borderRadius: "5px",
      margin: "15px auto",
      overflowX: "hidden"
    }
  })
);

export default CookiePreview2;
