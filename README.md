# LoggerTS
![example](https://user-images.githubusercontent.com/59962964/177773913-58c5f966-222c-4ca7-bfc3-0df386d76376.png)

## Installation 💾
### NPM
`npm install @enffinity/loggerts`
### Yarn
`yarn add @enffinity/loggerts`

## Documentation

```ts
import logger from '@enffinity/loggerts';

logger.info('Hello, World!');

// You can also import indivual parts like this
import { error } from '@enffinity/loggerts'

error('Hello, Error!');
```
> ### Info
> `<logger>.info('Info Message')` 

> ### Error
> `<logger>.error('Error Message')`

> ### Warn
> `<logger>.warn('Warn Message')`

> ### Success
> `<logger>.success('Success Message')`

> ### Debug
> `<logger>.debug('Debug Message')`

> ### Bomb 💣
> `<logger>.bomb('Bomb Message', profanity: <true/false>)`

> ### Custom 🗃️
> `<logger>.custom('Custom Message', 'Custom Title')`