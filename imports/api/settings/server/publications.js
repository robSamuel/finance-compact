import { AccountsCatalog } from '/imports/api/settings/collections';

Meteor.publish('accountsCatalog', function() {
  return AccountsCatalog.find();
})