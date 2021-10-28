# Branch Env Action

Used to selectively set a secret based on a branch environment variable

> Based heavily on [noliran/branch-based-secrets](https://github.com/noliran/branch-based-secrets) with some modifications to align to my specific use

## Input

Requires a `secrets` parameter which is a comma separated list of secrets that need to be read:

```yml
- uses: nabeelvalley/branch-env-action
  with:
    secrets: SECRET_TOKEN_TOKEN,SECRET_USERNAME,
```