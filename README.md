# @cnedsson/react-admin-firebase
<!-- [START badges] -->
[![NPM Version](https://img.shields.io/npm/v/@cnedsson/react-admin-firebase.svg)](https://www.npmjs.com/package/@cnedsson/react-admin-firebase) 
[![License](https://img.shields.io/npm/l/@cnedsson/react-admin-firebase.svg)](https://github.com/charlynedsson/react-admin-firebase/blob/master/packages/core/LICENSE) 
[![Downloads/week](https://img.shields.io/npm/dm/@cnedsson/react-admin-firebase.svg)](https://www.npmjs.com/package/@cnedsson/react-admin-firebase) 
[![Github Issues](https://img.shields.io/github/issues/charlynedsson/react-admin-firebase.svg)](https://github.com/charlynedsson/react-admin-firebase)
<!-- [END badges] -->

Forked and refactored from original [project](https://github.com/benwinding/react-admin-firebase) by [Ben Winding](https://github.com/benwinding).

A firebase data provider for the [React-Admin](https://github.com/marmelab/react-admin) framework. It maps collections from the Firebase database (Firestore) to your react-admin application. It's an [npm package](https://www.npmjs.com/package/@cnedsson/react-admin-firebase)!

---

## Help Develop `@cnedsson/react-admin-firebase`?

1. `git clone https://github.com/charlynedsson/react-admin-firebase`
2. `npm i`
3. `npm start-emulators`
4. `npm watch`

Now all local changes in the library source code can be tested immediately in the demo app.

## Run the tests

Tested using `jest` and `@firebase/rules-unit-testing`. Firebase emulated using `firebase-tools`.

From [workspace root](https://github.com/charlynedsson/react-admin-firebase) run:
```npm
npm run start-emulators
```

In another terminal run:
```npm
npm test
```

## Run the demo

A simple example based on the [React Admin Tutorial](https://marmelab.com/react-admin/Tutorial.html).

- [Demo Project (typescript)](https://github.com/charlynedsson/react-admin-firebase/tree/master/packages/demo)