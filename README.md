# react-ripple

## Getting Started

Install dependencies,

```bash
# npm
$ npm i react-ripple
# yarn
$ yarn add react-ripple
```

## Usage

### Basic

```javascript
import React from 'react';
import Ripple from 'react-ripple';
import 'react-ripple/es/style';

const ButtonStyle = {
  padding: `12px 36px`,
  color: `#fff`,
  fontSize: 18,
  background: `linear-gradient(90deg, #0162c8, #55e7fc)`,
  borderRadius: 40,
};

export default () => {
  return (
    <div>
      <Ripple>
        <div style={ButtonStyle}>React Ripple Button</div>
      </Ripple>
    </div>
  );
};
```

## Support By

[<img src="https://raw.githubusercontent.com/happy-func/next-official/6f30e1bb4140f195d5176a6ddc61082be8b25505/public/images/jetbrains.png" alt="Jetbrains" title="Jetbrains" width="100" />](https://www.jetbrains.com/)

[<img src="https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png" alt="dumi" title="dumi" width="100" />](https://d.umijs.org/)
