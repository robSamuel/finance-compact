import { MeteorContainer } from "/imports/ui/components/MeteorContainer";
import { AccountsCatalog as AccountsCatalogCollection } from "/imports/api/settings/collections";
import AccountsCatalog from "/imports/ui/pages/Settings/AccountsCatalog";

const wrap = () => {
  const handle = Meteor.subscribe('accountsCatalog', {});
  const records = AccountsCatalogCollection.find().fetch();

  return {
    loading: !handle.ready(),
    records
  }
};

export const AccountsCatalogContainer = MeteorContainer.create(wrap, AccountsCatalog);
