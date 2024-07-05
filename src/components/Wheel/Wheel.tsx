import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { useEffect } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wheel: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      border: '3px solid #000',
      borderRadius: '50%',
      overflow: 'hidden',
      "& span": {
        position: 'absolute',
        left: 'calc(50% - 1px)',
        width: '2px',
        height: '100%',
        background: '#000',
        transform: `rotate(calc(45deg * var(--i)))`
      }
    },
    firstSection: {
      "--i": "0" 
    },
    secondSection: {
      "--i": "1" 
    },
    thirdSection: {
      "--i": "2" 
    },
    fourthSection: {
      "--i": "3" 
    },
    fifthSection: {
      "--i": "4" 
    },
    sixthSection: {
      "--i": "5" 
    },
    seventhSection: {
      "--i": "6" 
    },
    eighthSection: {
      "--i": "7" 
    }
  }),
);

const Wheel = () => {
  const classes = useStyles();
  
  useEffect(() => {
  }, []);

  return (
    <div className={classes.wheel}>
      <span id="wheelItem0" className={classes.firstSection}>
        <svg width="300" height="300">
          <path fill="none" id="curve" d="M10 15 Q60 15, 125 60"></path>
          <text>
            <textPath style={{fontSize: "10px"}} href="#curve">My curved text blah blah</textPath>
          </text>
        </svg>
      </span>
      <span id="wheelItem1" className={classes.secondSection}>
        <svg width="300" height="300">
          <path fill="none" id="curve" d="M10 15 Q60 15, 125 60"></path>
          <text>
            <textPath style={{fontSize: "10px"}} href="#curve">My curved text blah blah</textPath>
          </text>
        </svg>
      </span>
      <span id="wheelItem2" className={classes.thirdSection}><svg width="300" height="300">
        <path fill="none" id="curve" d="M10 15 Q60 15, 125 60"></path>
          <text>
            <textPath style={{fontSize: "10px"}} href="#curve">My curved text blah blah</textPath>
          </text>
        </svg>
      </span>
      <span id="wheelItem3" className={classes.fourthSection}>
        <svg width="300" height="300">
          <path fill="none" id="curve" d="M10 15 Q60 15, 125 60"></path>
          <text>
            <textPath style={{fontSize: "10px"}} href="#curve">My curved text blah blah</textPath>
          </text>
        </svg>
      </span>
      <span id="wheelItem4" className={classes.fifthSection}>
      <svg width="300" height="300">
        <path fill="none" id="curve" d="M10 15 Q60 15, 125 60"></path>
          <text>
            <textPath style={{fontSize: "10px"}} href="#curve">My curved text blah blah</textPath>
          </text>
        </svg>
      </span>
      <span id="wheelItem5" className={classes.sixthSection}>
        <svg width="300" height="300">
          <path fill="none" id="curve" d="M10 15 Q60 15, 125 60"></path>
          <text>
            <textPath style={{fontSize: "10px"}} href="#curve">My curved text blah blah</textPath>
          </text>
        </svg>
      </span>
      <span id="wheelItem6" className={classes.seventhSection}>
        <svg width="300" height="300">
          <path fill="none" id="curve" d="M10 15 Q60 15, 125 60"></path>
          <text>
            <textPath style={{fontSize: "10px"}} href="#curve">My curved text blah blah</textPath>
          </text>
        </svg>
      </span>
      <span id="wheelItem7" className={classes.eighthSection}>
        <svg width="300" height="300">
          <path fill="none" id="curve" d="M10 15 Q60 15, 125 60"></path>
          <text>
            <textPath style={{fontSize: "10px"}} href="#curve">My curved text blah blah</textPath>
          </text>
        </svg>
      </span>
    </div>
  );
}

export { Wheel };