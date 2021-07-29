import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      marginTop: '10rem',
      marginBottom: '80px',
      '& article:not(:last-child) :after': {
        borderBottom: '1px solid #dee2e6',
      },
    },
  }),
);
