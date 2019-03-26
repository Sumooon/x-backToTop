# x-backtotop

> back to top plugins for vue

## Install
``` bash
npm install x-backtotop
```

## Props
``` bash
  zIndex: {
    type: Number,
    default: 9999
  },
  triggerHeight: {
    type: Number
  },
  smooth: {
    type: Boolean,
    default: true
  },
  scrollInterval: {
    type: Number,
    default: 10
  },
  scrollHeight: {
    type: Number,
    default: 100
  }
```
## How to use
Using in Vue application
``` bash
<template>
  <back-to-top></back-to-top>
</template>
import toTop from 'x-backtotop'
Vue.use(toTop)
```
## Development
This command will start a webpack-dev-server with content of dev folder.
``` bash
npm run dev
```
