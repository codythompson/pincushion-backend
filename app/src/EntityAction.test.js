const EntityAction = require('./EntityAction')

describe('EntityAction', ()=>{
  it('should have a static methods for each action that returns a new EntityAction instance', ()=>{
    expect(EntityAction.create()).toBeInstanceOf(EntityAction)
    expect(EntityAction.read()).toBeInstanceOf(EntityAction)
    expect(EntityAction.update()).toBeInstanceOf(EntityAction)
    expect(EntityAction.delete()).toBeInstanceOf(EntityAction)

    expect(EntityAction.create().action).toStrictEqual('create')
    expect(EntityAction.read().action).toStrictEqual('read')
    expect(EntityAction.update().action).toStrictEqual('update')
    expect(EntityAction.delete().action).toStrictEqual('delete')
  })
  it('should have static readonly fields that contain the string representation of every action', ()=>{
    expect(EntityAction.CREATE).toStrictEqual('create')
    expect(EntityAction.READ).toStrictEqual('read')
    expect(EntityAction.UPDATE).toStrictEqual('update')
    expect(EntityAction.DELETE).toStrictEqual('delete')
  })
  it('should have a collection method that specifies the collection to be used', ()=>{
    let ea = EntityAction
      .create()
      .collection('test-collection')
    expect(ea.collectionName).toStrictEqual('test-collection')
  })
  it('should have field method that adds the field name to a list of fields that will be created/read/updated', ()=>{
    let ea = EntityAction
      .update()
      .field('test-field 1')
      .field('test-field 2')
    expect(ea.fields).toEqual(['test-field 1', 'test-field 2'])
    ea = EntityAction
      .update()
      .field('test-field 3', 'test-field 4')
    expect(ea.fields).toEqual(['test-field 3', 'test-field 4'])
  })
  it('should have a then method that creates a new entity-action and returns ishould have methods for each action that sets the action field', ()=>{
    let ea = new EntityAction()
    ea = ea.create()
    expect(ea).toBeInstanceOf(EntityAction)
    expect(ea.action).toStrictEqual('create')
    ea = new EntityAction()
    ea = ea.read()
    expect(ea).toBeInstanceOf(EntityAction)
    expect(ea.action).toStrictEqual('read')
    ea = new EntityAction()
    ea = ea.update()
    expect(ea).toBeInstanceOf(EntityAction)
    expect(ea.action).toStrictEqual('update')
    ea = new EntityAction()
    ea = ea.delete()
    expect(ea).toBeInstanceOf(EntityAction)
    expect(ea.action).toStrictEqual('delete')
  })
  it('should have a then method that creates a new entity-action and returns it', ()=>{
    let origEA = EntityAction
      .create()
    let next = origEA
      .then()
    expect(origEA.next).toEqual(next)
    expect(next).not.toEqual(origEA)
  })
})