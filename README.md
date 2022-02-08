# 🥞 samu UIkit

**This repository is not used anymore. See the [https://github.com/samuswap/samu-toolkit](samu toolkit) instead**

[![Version](https://img.shields.io/npm/v/@samuswap-libs/uikit)](https://www.npmjs.com/package/@samuswap-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@samuswap-libs/uikit)](https://www.npmjs.com/package/@samuswap-libs/uikit)
samu UIkit is a set of React components and hooks used to build pages on samu's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @samuswap-libs/uikit`

## Setup

### Theme

Before using samu
 UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@samuswap-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@samuswap-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://samuswap.github.io/samuswap-uikit/)
