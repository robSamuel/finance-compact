import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => 
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            height: '100%',
            overflow: 'hidden',
            zIndex: 900
        },
        tabsContainer: {
            display: 'flex',
            background: '#FFF',
            flex: 1,
            marginTop: 10,
            overflow: 'hidden',
            padding: 10
        }
    })
);
