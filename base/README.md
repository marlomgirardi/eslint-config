# eslint-config-mg-base

This package is based on Airbnb eslint base with some modifications based on my usage.

## Usage

We export two ESLint configurations for your usage.

### eslint-config-mg-base

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

1. Install the correct versions of each package, which are listed by the command:

```sh
npx install-peerdeps --dev eslint-config-mg-base
```

If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.
Otherwise, run `npm info "eslint-config-airbnb-base@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.

2. Add `"extends": "mg-base"` to your .eslintrc.
