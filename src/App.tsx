import { createStyles, makeStyles } from '@mui/styles';
import { Wheel } from './components';

const useStyles = makeStyles(() =>
  createStyles({
    body: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'white'
    },
    container: {
      position: 'relative',
      width: '300px',
      height: '300px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    
  }),
);

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <Wheel></Wheel>
      </div>
    </div>
  );
};

export { App };