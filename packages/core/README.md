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

## Features
- [x] Firestore Dataprovider _(details below)_
- [x] Firebase AuthProvider (email, password)
- [x] Firebase storage upload functionality.

_Pull requests welcome!!_

## Firestore Dataprovider Features
- [x] Support react-admin v5
- [x] Dynamic caching of resources
- [x] All methods implemented; `(GET, POST, GET_LIST ect...)`
- [x] Filtering, sorting etc...
- [x] Ability to manage sub collections through app configuration
- [x] Ability to use externally initialized firebaseApp instance
- [x] Override firestore random id by using "id" as a field in the Create part of the resource
- [x] Upload to the firebase storage bucket using the standard `<FileInput />` field

## Get Started
`npm install --save @cnedsson/react-admin-firebase firebase`

## Options

``` typescript filename="firebaseProvider.ts"
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,  
} from '@cnedsson/react-admin-firebase';

const config = {
  apiKey: "aaaaaaaaaaaaaaaaaaaaaaaaaaa",
  projectId: "aaaaaaaaaaaaaaaaaaaaaaaaaaa",
  appId: "aaaaaaaaaaaaaaaaaaaaaaaaaaa",
  authDomain: "aaaaaaaaaaaaaaaaaaaaaaaaaaa",
  databaseURL: "aaaaaaaaaaaaaaaaaaaaaaaaaaa",
  storageBucket: "aaaaaaaaaaaaaaaaaaaaaaaaaaa",
  messagingSenderId: "aaaaaaaaaaaaaaaaaaaaaaaaaaa"
};

// All options are optional
const options = {
  // Use a different root document to set your resource collections, by default it uses the root collections of firestore
  rootRef: 'root-collection/some-doc' | () => 'root-collection/some-doc',
  // Your own, previously initialized firebase app instance
  app: firebaseAppInstance,
  // Enable logging of react-admin-firebase
  logging: true,
  // Authentication persistence, defaults to 'session', options are 'session' | 'local' | 'none'
  persistence: 'session',
  // Disable the metadata; 'createdate', 'lastupdate', 'createdby', 'updatedby'
  disableMeta: false,
  // Have custom metadata field names instead of: 'createdate', 'lastupdate', 'createdby', 'updatedby'
  renameMetaFields: {
    created_at: 'my_created_at', // default: 'createdate'
    created_by: 'my_created_by', // default: 'createdby'
    updated_at: 'my_updated_at', // default: 'lastupdate'
    updated_by: 'my_updated_by', // default: 'updatedby'
  },
  // Prevents document from getting the ID field added as a property
  dontAddIdFieldToDoc: false,
  // Adds 'deleted' meta field for non-destructive deleting functionality
  // NOTE: Hides 'deleted' records from list views unless overridden by filtering for {deleted: true} 
  softDelete: false,
  // Changes meta fields like 'createdby' and 'updatedby' to store user IDs instead of email addresses
  associateUsersById: false,
  // Casing for meta fields like 'createdby' and 'updatedby', defaults to 'lower', options are 'lower' | 'camel' | 'snake' | 'pascal' | 'kebab'
  metaFieldCasing: 'lower',
  // Instead of saving full download url for file, save just relative path and then get download url
  // when getting docs - main use case is handling multiple firebase projects (environments)
  // and moving/copying documents/storage files between them - with relativeFilePaths, download url
  // always point to project own storage
  relativeFilePaths: false, 
  // Add file name to storage path, when set to true the file name is included in the path
  useFileNamesInStorage: false,
  // Use firebase sdk queries for pagination, filtering and sorting
  lazyLoading: {
    enabled: false
  },
  // Logging of all reads performed by app (additional feature, for lazy-loading testing)
  firestoreCostsLogger: {
    enabled: false,
    localStoragePrefix // optional
  },
  // Function to transform documentData before they are written to Firestore
  transformToDb: (resourceName, documentData, documentId) => documentDataTransformed
}

const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

export { dataProvider, authProvider };
```

### Authentication status
To get the currently logged in user run `const user = await authProvider.checkAuth()`, this will return the firebase user object, or null if there is no currently logged in user.

### Upload Progress

Monitor file upload data using custom React component which listen for following events (`CustomEvent`):

- `FILE_UPLOAD_WILL_START`
- `FILE_UPLOAD_START`
- `FILE_UPLOAD_PROGRESS`
- `FILE_UPLOAD_PAUSED`
- `FILE_UPLOAD_CANCELD`
- `FILE_UPLOAD_COMPLETE`
- `FILE_SAVED`

All events have data passed in `details` key:

- `fileName`: the file anme
- `data`: percentage for `FILE_UPLOAD_PROGRESS`

Events are sent to HTML DOM element with id "eventMonitor".

## Demos Basic
A simple example based on the [React Admin Tutorial](https://marmelab.com/react-admin/Tutorial.html).

- [Demo Project (typescript)](https://github.com/charlynedsson/react-admin-firebase/tree/master/packages/demo)

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

## Help Develop `@cnedsson/react-admin-firebase`?
See how to get started from the [workspace root](https://github.com/charlynedsson/react-admin-firebase).

---
[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=ben.winding%40gmail.com&item_name=Development&currency_code=AUD&source=url)
