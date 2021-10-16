import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => 
    createStyles({
        root: { display: 'flex' },
        container: {
            background: '#EEF4F9CC',
            flex: 1,
            overflow: 'hidden'
        },
        content: {
            display: 'flex',
            flexGrow: 1,
            height: '100vh',
            overflow: 'hidden',
            padding: theme.spacing(10, 3, 3, 3)
        },
        childrenContainer: {
            display: 'flex',
            flex: '1',
            overflow: 'hidden',
            position: 'relative'
        }
    })
);
