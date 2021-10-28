const core = require('@actions/core')

/**
 * Convert the `ref` to a branch name prefix, like so:
 * - `refs/heads/main` -> `MAIN`
 * - `refs/heads/feature/stuff -> `FEATURE_STUFF`
 * @param {string} ref
 * @returns
 */
const refToPrefix = (ref) => {
  if (ref.startsWith('refs/') && !ref.startsWith('refs/heads/')) {
    throw new Error(`Ref ${ref} doesn't point to a branch`)
  }

  return ref.replace('refs/heads/', '').replace(/\\/g, '_').toUpperCase()
}

/**
 * Uses `GITHUB_BASE_REF` if defined, otherwise uses `GITHUB_REF`. `GITHUB_BASE_REF` will only be
 * defined for PRs and will
 * @returns the ref of the current branch
 */
const getRef = () => {
  const { GITHUB_REF, GITHUB_BASE_REF } = process.env
  return GITHUB_BASE_REF || GITHUB_REF
}

/**
 * Gets the names of all secrets provided to the workflow
 * @returns {string[]} list of secret names
 */
const getSecretNames = () => {
  return core
    .getInput('secrets', { required: true })
    .replace(/ /g, '')
    .split(',')
}

/**
 * creates a function which exports a `secret` with the name `MY_SECRET` as a new variable name of
 * the format:
 *
 * `BRANCH_MY_SECRET=<PREFIX>_MY_SECRET`
 *
 * and set the value to which can later be accessed in the workflow by
 *
 * `secrets[env.BRANCH_SECRET_NAME]`
 *
 * @param {string} prefix
 * @param {string} secretName
 * */
const exportSecret = (prefix, secretName) => {
  const branchSecretKey = `BRANCH_${secretName}`
  const resolvedSecretName = `${prefix}_${secretName}`

  core.exportVariable(branchSecretKey, resolvedSecretName)
}

module.exports = {
  refToPrefix,
  getRef,
  getSecretNames,
  exportSecret,
}
