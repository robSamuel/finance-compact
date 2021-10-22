import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';
import SettingsPanel from '/imports/ui/components/SettingsPanel';
import SettingsToolbar from '/imports/ui/components/SettingsToolbar';
import { Table } from '/imports/ui/components/Table/Table';
import { AccountsClasificationContainer } from '/imports/ui/containers/AccountsClasificationContainer';

const columnStyle = { 
  display: 'flex',
  alignItems: 'left',
  border: 'none',
  flexDirections: 'column',
  textAlign: 'center'
};

const AccountsCatalog = ({ loading, records }) => {
  const [selectedRow, setSelectedRow] = useState({});
  const [isAccountsClasificationOpen, setIsAccountsClasificationOpen] = useState(false);
  const classes = useStyles();
  console.log({loading, records});

  const getColumns = () => {
    return [
      {
        Header: 'Nombre de Cuenta',
        accessor: 'name',
        style: columnStyle
      },
      {
        Header: 'Tipo de Cuenta',
        accessor: 'type',
        style: columnStyle
      }
    ];
  };

  const isSelectedRow = id => isEmpty(selectedRow) ? false : selectedRow._id === id;

  const toggleAccountsClasification = () =>
    setIsAccountsClasificationOpen(prevIsAccountsClasificationOpen => !prevIsAccountsClasificationOpen);

  const renderTable = () => {
    console.log(`records`, records);

    return (
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
            onDoubleClick: () => {},
          };
        }}
      />
    )
  };

  return (
    <>
      <SettingsPanel>
        <SettingsToolbar margin={10}>
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
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
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
            onClick={toggleAccountsClasification}
          >
            Clasificación de Cuentas
          </Button>
        </SettingsToolbar>
        {renderTable()}
      </SettingsPanel>
      {isAccountsClasificationOpen && (
        <AccountsClasificationContainer
          isOpened={isAccountsClasificationOpen}
          onClose={toggleAccountsClasification}
        />
      )}
    </>
  );
};

AccountsCatalog.defaultProps = {
  records: []
};

AccountsCatalog.propTypes = {
  loading: PropTypes.bool.isRequired,
  records: PropTypes.array
};

export default AccountsCatalog;
