const Config = require('./config')

const testConfigArgsA = {
  dbUsername: 'blah',
  dbPassword: 'some',
  rando: 42
}
const testConfigArgsB = {
  rando: '22' 
}

describe('config', () => {
  const cA = new Config(testConfigArgsA)
  const cB = new Config(testConfigArgsB)
  it('should have a defaults object', () => {
    expect(Config.defaults).toBeInstanceOf(Object);
  })
  it('should read some values from a passed in object', ()=> {
    expect(cA.dbUsername).toStrictEqual('blah')
    expect(cA.dbPassword).toStrictEqual('some')
    expect(cA.rando).toStrictEqual(42)
    expect(cB.dbUsername).not.toBeDefined();
    expect(cB.dbPassword).not.toBeDefined()
    expect(cB.rando).not.toStrictEqual(42)
    expect(cB.rando).toStrictEqual('22')
  })
  it('should add default values for unsupplied fields', ()=>{
    expect(cA.port).toStrictEqual(3000);
  })
})
