import { MeteorContainer } from '/imports/ui/components/MeteorContainer';
import { AccountsClasification as AccountsClasificationCollection } from '/imports/api/settings/collections';
import AccountsClasification from '/imports/ui/pages/Settings/AccountsCatalog/AccountsClasificationDialog';

const wrap = () => {
  const handle = Meteor.subscribe('accountsClasification', {});
  const records = AccountsClasificationCollection.find().fetch();

  return {
    loading: !handle.ready(),
    records
  };
};

export const AccountsClasificationContainer = MeteorContainer.create(wrap, AccountsClasification);

