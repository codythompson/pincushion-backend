db = db.getSiblingDB('pincushion');

db.dropUser('schemaAdmin');
db.createUser({
  user: 'schemaAdmin',
  pwd: users.setup,
  roles: ['dbAdmin']
});
