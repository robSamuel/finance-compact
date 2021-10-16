import { AccountsCatalog } from '/imports/api/settings/collections';
import { AccountsClasification } from '/imports/api/settings/collections';

Meteor.publish('accountsCatalog', function() {
  return AccountsCatalog.find();
});

Meteor.publish('accountsClasification', function() {
  return AccountsClasification.find();
});