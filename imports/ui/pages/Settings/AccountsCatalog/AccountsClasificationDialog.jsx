import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogAppBar from '/imports/ui/components/DialogAppBar';
import { Table } from '/imports/ui/components/Table/Table';
import { useStyles } from './styles';

const columnStyle = { 
  display: 'flex',
  alignItems: 'left',
  border: 'none',
  flexDirections: 'column',
  textAlign: 'center'
};

const AccountsClasificationDialog = ({
  isOpened,
  loading,
  onClose,
  records
}) => {
  const [clasification, setClasification] = useState('');
  const [selectedRow, setSelectedRow] = useState({});
  const classes = useStyles();

  const onCloseDialog = () => {
    onClose()
  };

  const onClasificationChange = event => {
    const value = event?.target?.value;
    console.log(`event`, event)

    setClasification(value);
  };
  
  const getColumns = () => {
    return [
      {
        Header: 'Nombre',
        accessor: 'name',
        style: columnStyle
      },
      {
        Header: 'Fecha de Creación',
        id: 'createdOn',
        accessor: record => record,
        style: columnStyle,
        Cell: props => {
          const record = props.value || {};
          const date = moment(record.createdOn  ).format('DD/MM/YYYY HH:mm');

          return <span>{date}</span>;
        }
      },
      {
        Header: 'Fecha de Modificación',
        id: 'modifiedOn',
        accessor: record => record,
        style: columnStyle,
        Cell: props => {
          const record = props.value || {};
          const date = moment(record.modifiedOn).format('DD/MM/YYYY HH:mm');

          return <span>{date}</span>;
        }
      },
    ];
  };

  const isSelectedRow = id => isEmpty(selectedRow) ? false : selectedRow._id === id;

  const renderTable = () => (
    <Table
      columns={getColumns()}
      data={records || []}
      load={false}
      rowSelected={false}
      getTrProps={(state, rowInfo) => {
        const record = rowInfo.original;
        const selected = isSelectedRow(record._id);

        return {
          onClick: () => {},
          onDoubleClick: () => {}
        };
      }}
    />
  );

  return (
    <Dialog
      open={isOpened}
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="sm"
      fullWidth={true}
    >
      <DialogAppBar
        onClose={onCloseDialog}
        title="Clasificación de Cuentas"
      />
      <DialogContent className={classes.accountsClasificationBody}>
        <div className={classes.accountsClasificationButtons}>
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
          >
            Nuevo
          </Button>
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
          >
            Editar
          </Button>
          <Button
            className={classes.button}
            color="secondary"
            variant="contained"
          >
            Eliminar
          </Button>
        </div>
        <div className={classes.accountsClasificationTextfield}>
          <TextField
            label="Clasificación"
            value={clasification}
            margin="dense"
            variant="outlined"
            onChange={event => onClasificationChange(event)}
          />
          <Button
            className={classes.rightButton}
            color="primary"
            variant="contained"
          >
            Agregar
          </Button>
        </div>
        <div className={classes.accountsClasificationTable}>
          {renderTable()}
        </div>
      </DialogContent>
    </Dialog>
  );
};

AccountsClasificationDialog.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  onClose: PropTypes.func,
  records: PropTypes.array
};

export default AccountsClasificationDialog;
