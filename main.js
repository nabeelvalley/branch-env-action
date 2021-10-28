const { getSecretNames, getRef, refToPrefix, exportSecret } = require('./lib')

const secretNames = getSecretNames()
const ref = getRef()
const prefix = refToPrefix(ref)

const exporter = exportSecret.bind(undefined, prefix)

secretNames.forEach(exporter)
