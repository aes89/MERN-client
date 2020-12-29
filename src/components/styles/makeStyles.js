import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    height: "400px",
    maxWidth: "275px",
  },
  paperIngredient: {
    margin: theme.spacing(1),
    maxHeight: "35px",
    maxWidth: "275px",
  },
}));

export default useStyles;
