- [Vicoders Supporter](#vicoders-supporter)
    - [Installation](#installation)
    - [Functions & Services](#functions--services)
        - [Loader](#loader)

# Vicoders Supporter

Collection of javascript utility functions.

## Installation

Using npm

```
npm install @vicoders/support
```

Using yarn

```
yarn add @vicoders/support
```

## Functions & Services

### Loader

The loading animation

```javascript
import { Loader } from '@vicoders/support/services';

// Or partial import
// import Loader from "@vicoders/support/services/Loader";
const loader = new Loader();

loader.show(); // show the loader
loader.hide(); // hide the loader

// another way
new Loader().show();
new Loader().hide();
```
