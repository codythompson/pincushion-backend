const PincushionError = require('./PincushionError')

describe('PincushionError', ()=> {
  it('should extend Error', ()=>{
    const e = new PincushionError('blahblah')
    expect(e).toBeInstanceOf(Error)
  })
  it('should deal with constructor args correctly', () => {
    const eOmitBoth = new PincushionError('blah both')
    const eOmitMod = new PincushionError('blah mod', 'bar')
    const eOmitNone = new PincushionError('blah none', 'bar', 'foo')
    expect(eOmitBoth.message).toStrictEqual('[pincushion] blah both')
    expect(eOmitBoth.moduleName).toBeNull()
    expect(eOmitBoth.functionName).toBeNull()
    expect(eOmitMod.message).toStrictEqual('[pincushion][bar] blah mod')
    expect(eOmitMod.moduleName).toBeNull()
    expect(eOmitMod.functionName).toStrictEqual('bar')
    expect(eOmitNone.message).toStrictEqual('[pincushion][foo][bar] blah none')
    expect(eOmitNone.moduleName).toStrictEqual('foo')
    expect(eOmitNone.functionName).toStrictEqual('bar')

    expect(eOmitNone.isServerError).toBe(false)
    expect(eOmitNone.clientMessage).toBeNull()
  })
})
