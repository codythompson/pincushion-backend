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
})