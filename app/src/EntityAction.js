class EntityAction {
  constructor (action=null) {
    this.action = action
    this.collectionName = null
    this.fields= []
  }

  collection (collectionName) {
    this.collectionName = collectionName
    return this
  }

  static get CREATE () {
    return 'create';
  }

  static get READ () {
    return 'read';
  }

  static get UPDATE () {
    return 'update';
  }

  static get DELETE () {
    return 'delete';
  }

  static create () {
    return new EntityAction(EntityAction.CREATE);
  }

  static read () {
    return new EntityAction(EntityAction.READ);
  }

  static update () {
    return new EntityAction(EntityAction.UPDATE);
  }

  static delete () {
    return new EntityAction(EntityAction.DELETE);
  }

}

module.exports = EntityAction;