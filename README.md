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
// Partial import
import Notification from '@vicoders/support/services/Notification';
// Or you can do like this
// import { Notification } from '@vicoders/support/services';

Notification.show('success', 'This is a successed message and it will display for 3000 ms', 3000); // show the loader
Notification.show('success', 'This one display forever until you remove it');
Notification.show('warning', 'ALERT!!!'); // and the warning type
Notification.remove(); // hide the notification
```

### Loader

The loading animation

```javascript
// partial import
import Loader from '@vicoders/support/services/Loader';
// Or you can do like this
// import { Loader } from '@vicoders/support/services';

Loader.show(); // show the loader
Loader.hide(); // hide the loader
```
