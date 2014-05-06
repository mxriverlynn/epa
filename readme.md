# EPA

No, not *that* EPA... this EPA is a simple way to configure different run time environments
using JSON files instead of ENV settings.

## How To Use It

**1) Install it:**

`npm install epa`

**2) Add config files to the root of your project:**

```
mkdir env
mkdir env/development
mkdir env/production

touch env/development/index.json
touch env/production/index.json
```

**3) Require it**

`var epa = require("epa")`

**4) Set the NODE_ENV to the right environment when running your app**

`NODE_ENV=production node myApp.js`

The default is to assume "development" as the environment. If you specify anything other
than "development", it will look for that folder / index.json.

**5) Use it**

In your app, you can reference any value from your config file as a property of the `epa`
object, directly.

```
{
  "foo": "bar"
}
```

```js
var epa = require("epa");
console.log(epa.foo);
```

## Legal Mumbo Jumbo

Copyright &copy; 2014 Muted Solutions, LLC. All Rights Reserved.

Distributed under the [MIT license](http://mutedsolutions.mit-license.org).
