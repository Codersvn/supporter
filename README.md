- [Vicoders Supporter](#vicoders-supporter)
    - [Installation](#installation)
    - [Functions & Services](#functions--services)
        - [Notification](#notification)
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

### Notification

The notification library

```javascript
import { Notification } from '@vicoders/support/services';

// Or partial import
// import Notification from "@vicoders/support/services/Notification";
const notification = new Notification();

notification.show('success', 'This is a successed message and it will display for 3000 ms', 3000); // show the loader
notification.show('success', 'This one display forever until you remove it');
notification.show('warning', 'ALERT!!!'); // and the warning type
notification.remove(); // hide the loader
```

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
