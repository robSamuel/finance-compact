import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { isEmpty } from 'lodash';
import moment from 'moment';
import { useStyles } from './styles';
import SettingsPanel from '/imports/ui/components/SettingsPanel';
import SettingsToolbar from '/imports/ui/components/SettingsToolbar';
import { Table } from '/imports/ui/components/Table/Table';

const columnStyle = { 
  display: 'flex',
  alignItems: 'left',
  border: 'none',
  flexDirections: 'column',
  textAlign: 'center'
};

const AccountsClasification = ({ loading, records }) => {
  const [selectedRow, setSelectedRow] = useState({});
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const classes = useStyles();

  const toggleDialog = () =>
    setIsOpenDialog(prevIsOpenDialog => !prevIsOpenDialog);

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
    <SettingsPanel>
      <SettingsToolbar margin={10}>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          onClick={toggleDialog}
        >
          Agregar
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
      </SettingsToolbar>
      {renderTable()}
    </SettingsPanel>
  );
};

AccountsClasification.defaultProps = {
  records: []
};

AccountsClasification.propTypes = {
  loading: PropTypes.bool.isRequired,
  records: PropTypes.array
};

export default AccountsClasification;
