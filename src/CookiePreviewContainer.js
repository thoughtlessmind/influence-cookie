import React from 'react'
import  {Box, Typography, createStyles, makeStyles } from '@material-ui/core'
import CookiePreview1 from './CookiePreview1'


const CookiePreviewContainer = () =>{
  const classes = useStyles()
  return(
    <Box className={classes.mainBoxStyle}>
      <CookiePreview1/>
    </Box>
  )
}


const useStyles = makeStyles(() =>
	createStyles({
    mainBoxStyle:{
      display: 'flex',
      flexDirection: 'column',
      width: '315px',
      boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 14px',
      position: 'relative',
      padding: '20px 20px 18px 17px',
      background: 'white',
      borderRadius: '5px',
      margin: '15px auto'
    }
	})
)

export default CookiePreviewContainer