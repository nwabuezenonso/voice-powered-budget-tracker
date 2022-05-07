// import make styles from component that allow us create our styles
import { makeStyles } from '@material-ui/core/styles';

// exorting styles component
export default makeStyles(() => ({
  income: {
    borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
  },
  expense: {
    borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
  },
}));
