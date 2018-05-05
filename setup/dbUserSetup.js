db.createUser({
  user: 'schemaAdmin',
  pwd: users.setup,
  roles: ['readWrite']
});
