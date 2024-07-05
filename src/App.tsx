import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
      width: '400px',
      height: '400px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    
  }),
);

const theme = createTheme();

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