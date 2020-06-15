<h1 align="center">
  <img alt="Logo" src="https://github.com/digaodev/gobarber-mobile-ts/blob/master/docs/logo.svg?raw=true" width="200px">
</h1>

<h3 align="center">
  React Native mobile app for the GoBarber project
</h3>

<h1 align="center">
  <img alt="Login page" src="https://github.com/digaodev/gobarber-mobile-ts/blob/master/docs/login.png?raw=true" width="250px">
</h1>

<p align="center">A useful and intuitive way to manage your appointments</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/digaodev/gobarber-mobile-ts?color=%23FF9000">

  <a href="https://www.linkedin.com/in/rodrigorb/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-digaodev-%23FF9000">
  </a>

  <a href="https://github.com/digaodev/gobarber-mobile-ts/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/digaodev/gobarber-mobile-ts?color=%23FF9000">
  </a>

  <a href="https://github.com/digaodev/gobarber-mobile-ts/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/digaodev/gobarber-mobile-ts?color=%23FF9000">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/digaodev/gobarber-mobile-ts?color=%23FF9000">
</p>

## About the project

This repository contains the mobile app for the GoBarber project, a way to organize appointments for barbers and their customers.

To see the **backend api**, go to [GoBarber API](https://github.com/digaodev/gobarber-backend-ts)<br />

To see the **web app**, go to [GoBarber Web](https://github.com/digaodev/gobarber-frontend-ts)

## Main Technologies

These are the main techs used in this project:

- [React.js](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Unform](https://unform.dev/)
- [Yup](https://github.com/jquense/yup)
- [React Navigation](https://reactnavigation.org/)

## Getting Started

### Requirements

- Have the backend API running in order for this app to consume its data
- If you haven't yet, go to [GoBarber API](https://github.com/digaodev/gobarber-backend-ts) and follow the instructions
- There is a lot to setup in React Native, so follow the [official instructions](https://reactnative.dev/docs/environment-setup) carefully for your operating system before moving on

**Clone the project and access the project folder**

```bash
$ git clone https://github.com/digaodev/gobarber-mobile-ts.git && cd gobarber-mobile-ts
```

**Go through the following steps**

```bash
# Install the dependencies
$ yarn

# Install the pods for ios
$ cd ios && pod install

# Run the app in dev mode and start the IOS emulator (ios command is MacOS only)
$ yarn run ios

# OR run the app in dev mode and start the Android emulator
$ yarn run android

# All done, hopefully the project is setup and running!
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made by [digaodev](https://www.linkedin.com/in/rodrigorb/)
