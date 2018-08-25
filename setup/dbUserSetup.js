db = db.getSiblingDB('pincushion');

db.dropUser('userAdmin');
db.dropUser('schemaAdmin');
db.dropUser('app');

db.createUser({
  user: 'userAdmin',
  pwd: users.userAdmin,
  roles: ['userAdmin']
});

db.createUser({
  user: 'schemaAdmin',
  pwd: users.setup,
  roles: ['dbAdmin']
});

db.createUser({
  user: 'app',
  pwd: users.app,
  roles: ['readWrite']
});
