db = db.getSiblingDB('pincushion');

db.dropDatabase();

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

db.createCollection('materialInventory', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['userId', 'materialTypeId'],
      properties: {
        userId: {
          bsonType: 'objectId'
        },
        materialTypeId: {
          bsonType: 'objectId'
        },
        notes: {
          bsonType: 'string'
        },
        images: {
          bsonType: 'array'
        },
        quantity: {
          bsonType: 'object'
        },
        materialTypeName: {
          bsonType: 'string'
        },
        materialTypeDescription: {
          bsonType: 'string'
        },
        materialImages: {
          bsonType: 'array'
        },
        materialAncestors: {
          bsonType: 'array'
        }
      }
    }
  }
});

db.createCollection('patternBrand', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      properties: {
        name: {
          bsonType: 'string'
        },
        description: {
          bsonType: 'string'
        }
      }
    }
  }
});

db.createCollection('pattern', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      properties: {
        patternBrandId: {
          bsonType: 'objectId'
        },
        number: {
          bsonType: 'string'
        },
        minSize: {
          bsonType: 'number'
        },
        maxSize: {
          bsonType: 'number'
        },
        sizeUnits: {
          bsonType: 'string'
        },
        envelopFrontImages: {
          bsonType: 'array'
        },
        envelopBackImages: {
          bsonType: 'array'
        },
        lineArt: {
          bsonType: 'array'
        },
        yardageChargs: {
          bsonType: 'object'
        },
        patternBrandName: {
          bsonType: 'string'
        },
        patternBrandDescription: {
          bsonType: 'string'
        }
      }
    }
  }
});

db.createCollection('patternInventory', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['userId', 'patternId'],
      properties: {
        userId: {
          bsonType: 'objectId'
        },
        patternId: {
          bsonType: 'objectId'
        },
        notes: {
          bsonType: 'string'
        },
        patternBrandId: {
          bsonType: 'objectId'
        },
        patternNumber: {
          bsonType: 'string'
        },
        patternMinSize: {
          bsonType: 'number'
        },
        patternMaxSize: {
          bsonType: 'number'
        },
        patternSizeUnits: {
          bsonType: 'string'
        },
        patternEnvelopFrontImages: {
          bsonType: 'array'
        },
        patternEnvelopBackImages: {
          bsonType: 'array'
        },
        patternLineArt: {
          bsonType: 'array'
        },
        patternYardageChargs: {
          bsonType: 'object'
        },
        patternPatternBrandName: {
          bsonType: 'string'
        },
        patternPatternBrandDescription: {
          bsonType: 'string'
        }
      }
    }
  }
});

db.createCollection('projects', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['name'],
      properties: {
        name: {
          bsonType: 'string'
        },
        description: {
          bsonType: 'string'
        },
        patternIds: {
          bsonType: 'array'
        },
        materialIds: {
          bsonType: 'array'
        },
        images: {
          bsonType: 'array'
        },
        notes: {
          bsonType: 'string'
        }
      }
    }
  }
});

db.createCollection('resources', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['name'],
      properties: {
        name: {
          bsonType: 'string'
        },
        description: {
          bsonType: 'string'
        },
        link: {
          bsonType: 'string'
        },
        images: {
          bsonType: 'array'
        },
        notes: {
          bsonType: 'string'
        }
      }
    }
  }
});