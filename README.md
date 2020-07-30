# sample-expo-next

## How to create this repo

### Setup

```shell script
# https://docs.expo.io/guides/using-nextjs/
$ npx create-react-native-app -t with-nextjs
$ yarn add --dev typescript @types/react @types/react-native @types/react-dom @types/next

$ tsc init

$ mv App.js App.tsx
$ mv pages/index.js pages/index.tsx
$ mv pages/_document.js pages/_document.tsx
```

### Media Query 

```shell script
# https://blog.expo.io/media-queries-with-react-native-for-ios-android-and-web-e0b73ed5777b
$ yarn add @expo/match-media react-responsive @types/react-responsive
```
