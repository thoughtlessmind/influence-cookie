import React, { useState } from "react";
import {
  Box,
  Typography,
  createStyles,
  makeStyles,
  Button
} from "@material-ui/core";
import CookiePreview1 from "./CookiePreview1";
import CookiePreview2 from "./CookiePreview2";

const CookiePreviewContainer = (props) => {

  const classes = useStyles();


  return (
    <Box style={{width:'340px', overflow:'hidden', margin:'auto'}}>
      
      <CookiePreview1
        activePanel={props.activePanel}
        activePanelHandler={props.activePanelHandler}
      />
      <CookiePreview2
        activePanel={props.activePanel}
        activePanelHandler={props.activePanelHandler}
      />
    </Box>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    mainBoxStyle: {
      display: "flex",
      flexDirection: "column",
      width: "315px",
      boxShadow: "rgba(0, 0, 0, 0.05) 0px 4px 14px",
      position: "relative",
      padding: "20px 20px 18px 17px",
      background: "white",
      borderRadius: "5px",
      margin: "15px auto",
    }
  })
);

export default CookiePreviewContainer;
