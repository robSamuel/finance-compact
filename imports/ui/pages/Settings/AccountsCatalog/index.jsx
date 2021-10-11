import React from 'react';
import PropTypes from 'prop-types';
// import { Table } from '/imports/ui/components/Table/Table';

const AccountsCatlog = props => {
  console.log(props);

  return (
    <div>
      Chart of Accounts
    </div>
  );
};

AccountsCatlog.defaultProps = {
  records: []
};

AccountsCatlog.propTypes = {
  loading: PropTypes.bool.isRequired,
  records: PropTypes.array
};

export default AccountsCatlog;
