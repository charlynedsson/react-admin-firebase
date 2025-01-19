# Demo

Bootstraped using `npm init react-admin demo` and Firebase emulated using `firebase-tools`.

## Run the demo
From [workspace root](https://github.com/charlynedsson/react-admin-firebase) run:
```npm
npm run start-emulators
```
### Prerequisits
From Firebase emulator ui (defaults is [http://127.0.0.1:4000/](http://127.0.0.1:4000/)):
- Create a `user` from Authentication ui.
- Create a `posts` collection and at least one document from Firestore ui.

In another terminal run:
```npm
npm run start-demo
```