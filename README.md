# React Native Web Boilerplate

## Screens

<img src='https://github.com/kiyohken2000/react-native-web-boilerplate/blob/main/__DELELE_ME__/img1.jpg' width='80%'>

## Libraries

- react
- react-router-dom
- axios
- react-native
- react-native-web
- moment

## Requirements

- Node 16
- Yarn 1.22.x

## How to use

### 1. Install

Download zip or click "Use this template"

```
yarn install
```

### 2. Run

```
yarn start
```

## NOTES

### Deploying app to the subfolder on server

Adding publicPath to React Router's basename prop.

**src\config.js**

```javascript
// e.g. basename='/path/to/subfolder/'
const basename = ''
```