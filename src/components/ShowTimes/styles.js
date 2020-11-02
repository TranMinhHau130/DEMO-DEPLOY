import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => {
  return {
    btnBooking: {
      backgroundColor: theme.palette.newColor,
      "&:hover": {
        backgroundColor: theme.palette.newColor,
      },
    },
  };
});
export default useStyles;
