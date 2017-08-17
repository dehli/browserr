/*!
 * browserr <https://github.com/dehli/browserr>
 *
 * C.P. Dehli
 */

// TODO:
// Figure out why build is failing, and use some newer
// browser features (for...of, destructuring, etc.)

import tests from './tests.js';

function browserr() {
  // Generate various errors; and use the error
  // messages to determine the user's browser.

  const scores = {};

  for (var i = 0; i < tests.length; ++i) {
    const test = tests[i];
    const js = test.js;
    try {
      eval(js);
    }
    catch (error) {
      const message = error.message;
      for (var key in test) {
        if (key !== 'js' && message === test[key]) {
          scores[key] ?
            scores[key]++ :
            scores[key] = 1;
        }
      }
    }
  }

  // Return whichever browser had the highest score
  var browser = null;
  const keys = Object.keys(scores);
  for (var i = 0; i < keys.length; ++i) {
    if (browser === null || scores[keys[i]] > scores[browser]) {
      browser = keys[i];
    }
  }
  return browser;
}

export default browserr;
