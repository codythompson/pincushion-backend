class EntityAction {
  constructor (action=null) {
    this.action = action
    this.collectionName = null
    this.fields= []
    this.next = null
    this.recordsArray = []
  }

  create () {
    this.action = EntityAction.CREATE
    return this
  }

  read () {
    this.action = EntityAction.READ
    return this
  }

  update () {
    this.action = EntityAction.UPDATE
    return this
  }

  delete () {
    this.action = EntityAction.DELETE
    return this
  }

  collection (collectionName) {
    this.collectionName = collectionName
    return this
  }

  field(...fields) {
    this.fields = this.fields
      .concat(fields)
    return this
  }

  /**
   * @method record
   * adds a record(s) to be inserted.
   * records are ignored if action is not CREATE
   * @param  {...object} records the records to be
   *   inserted by a create action
   */
  record (...records) {
    this.recordsArray = this.recordsArray
      .concat(records)
    return this
  }

  then () {
    this.next = new EntityAction()
    return this.next
  }

  static get CREATE () {
    return 'create'
  }

  static get READ () {
    return 'read'
  }

  static get UPDATE () {
    return 'update'
  }

  static get DELETE () {
    return 'delete'
  }

  static create () {
    return new EntityAction(EntityAction.CREATE)
  }

  static read () {
    return new EntityAction(EntityAction.READ)
  }

  static update () {
    return new EntityAction(EntityAction.UPDATE)
  }

  static delete () {
    return new EntityAction(EntityAction.DELETE)
  }

}

module.exports = EntityAction
