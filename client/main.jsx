import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import FinanceCompact from '/imports/ui/FinanceCompact';

Meteor.startup(() => {
  render(
    <FinanceCompact/>,
    document.getElementById('react-target')
  );
});
