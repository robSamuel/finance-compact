import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => 
    createStyles({
        appBar: {
          position: 'relative'
        },
        dialogTitle: {
          padding: 0
        },
        toolbar: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }
    })
);
