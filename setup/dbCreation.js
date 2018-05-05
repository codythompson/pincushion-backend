db = db.getSiblingDB('pincushion');

db.users.drop();
db.materialTypes.drop();

db.createCollection('users', {});

db.createCollection('materialTypes', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['name', 'ancestors'],
      properties: {
        name: {
          bsonType: 'string',
          description: 'must be a string and is required'
        },
        description: {
          bsonType: 'string',
          description: 'optional string'
        },
        attributes: {
          bsonType: 'array'
        },
        images: {
          bsonType: 'array'
        },
        ancestors: {
          bsonType: 'array'
        }
      }
    }
  }
});
