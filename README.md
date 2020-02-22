# eslint-config-mg

This package is inspired by Airbnb Eslint with customizations for what I need.

## Usage

1. Install the correct versions of each package, which are listed by the command:

```sh
npx install-peerdeps --dev eslint-config-mg
```

Note: The peer dependency `babel-eslint` is just needed if you use `mg/babel`.

2. Add `"extends": "mg"` to your .eslintrc.

### Usage options

- You can extend `mg` or `mg/base` to just import javascript related rules.
- You can extend `mg/react` to import react related rules.
- You can extend `mg/babel` to import base related rules that supports babel.

Note: When using `mg/babel` you will need to have "babel-eslint` installed as well. It is a peer dependency.
