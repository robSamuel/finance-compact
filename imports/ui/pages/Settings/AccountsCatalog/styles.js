import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => 
    createStyles({
        button: {
          marginRight: 10
        },
        rightButton: {
          marginLeft: 10
        },
        accountsClasificationBody: {
          display: 'flex',
          flexDirection: 'column',
          minHeight: 300
        },
        accountsClasificationButtons: {
          marginBottom: 10
        },
        accountsClasificationTextfield: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: 10
        },
        accountsClasificationTable: {
          flex: 1
        }
    })
);
