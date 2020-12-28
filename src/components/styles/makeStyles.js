import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    height: "400px",
    maxWidth: "300px",
    color: theme.palette.text.secondary,
  },
}));
  
  export default useStyles