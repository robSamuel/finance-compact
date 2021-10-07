import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => 
    createStyles({
        root: {
            flexGrow: 0
        },
        toolbar: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        firstItem: {
            display: 'flex',
            alignItems: 'center'
        }
    })
);
