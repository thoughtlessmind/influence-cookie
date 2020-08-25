import React, { useState } from 'react'
import  {Box, Typography, createStyles,makeStyles } from '@material-ui/core'


const CookiePreview1 = (props) =>{
  const {activePanel, activePanelHandler} = props
  const classes = useStyles()
  // const [activePanel, setActivePanel] = useState(0)

  // const handler1 = ({}) =>{
  //   setActivePanel(1)
  // }

  return(
    <div className={activePanel===0?`${classes.showPanel} ${classes.mainBoxStyle}`:classes.hidePanel1} style={{overflow:'hidden'}}>
      <div  style={{display:'flex', alignItem:'center', justifyContent: 'space-between'}} >
        <p className={classes.upperLine}>Can we store Cookie?</p>
        <a  href={"#"} target="_blank" className={classes.upperLine}>Inf</a>
      </div>
      <p className={classes.middleLine}>
        These will be used to power trialf and Marketing.
      </p>
      <div>
        <div style={{display:'flex', justifyContent:'space-between',marginTop:'36px'}}>
          <button onClick={()=>activePanelHandler(1)}  className={`${classes.generalBtnStyle} ${classes.leftBtn}`}>
            Customize
          </button>
          <div style={{display:'flex'}}>
            <button className={`${classes.generalBtnStyle} ${classes.filledBtn}`}>No</button>
            <button className={`${classes.generalBtnStyle} ${classes.filledBtn}`}>Yes</button>
          </div>
        </div>
      </div>
    </div>
  )
}


const useStyles = makeStyles(() =>
createStyles({
  hidePanel1:{
    transform:'translateX(-350px)',
    transformOrigin:'left',
    transition:'transform 0.3s',
    overflow:'hidden',
    width:'350px'
  },
  showPanel:{
    transform:'translateX(0)',
    transformOrigin:'left',
    transition:'transform 0.3s',
    overflow:'hidden'
  },
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
    overflowX:'hidden'
  },
  upperLine:{
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: 'rgb(104, 104, 104)',
    fontSize: '12px',
    lineHeight: '1.2'
  },
  middleLine:{
    lineHeight: '1.5',
    margin: '12px 0px',
    overflow: 'hidden',
    fontSize: '12px',
    color: 'rgb(3, 3, 3)',
    textDecoration: 'none'
  },
  generalBtnStyle:{
    appearance: 'none',
    minWidth: '72px',
    minHeight: '31px',
    display: 'flex',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    WebkitBoxPack: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxSizing: 'border-box',
    userSelect: 'none',
    padding: '0px 12px',
    borderRadius: '3px',
    borderWidth: 'initial',
    borderStyle: 'none',
    borderColor: 'initial',
    borderImage: 'initial',
    transition: 'background-color 250ms ease 0s',
    marginLeft:'7px',
    '&:focus':{
      outline:'none'
    }
  },

  leftBtn:{
    color: 'rgb(151, 151, 151)',
    background:'transparent',
    '&:hover':{
      color:'rgb(131, 131, 131);'
    }
  },

  filledBtn:{
    background: 'rgb(84, 92, 164)',
    color: 'white',
    '&:hover':{
      background: 'rgb(64, 72, 144)'
    },
  }

})
)


export default CookiePreview1
