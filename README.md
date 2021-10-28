# Branch Env Action

Used to selectively set a secret based on a branch environment variable

## Input

Requires a `secrets` parameter which is a comma separated list of secrets that need to be read:

```yml
- uses: this/action
  with:
    secrets: SECRET_TOKEN_TOKEN,SECRET_USERNAME,
```