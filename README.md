# browserr

This library allows you to determine a user's browser by the errors it throws. Currently it can tell the difference between:

1. Chrome
2. Firefox
3. Safari

## Usage

```
import browserr from 'browserr';

// 'chrome' | 'firefox' | 'safari'
const browser = browserr(); 
```
