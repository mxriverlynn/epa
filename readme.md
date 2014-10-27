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

touch env/development/config.json
touch env/production/config.json
```

**3) Require it**

`var epa = require("epa").getEnvironment();`

**4) Set the NODE_ENV to the right environment when running your app**

`NODE_ENV=production node myApp.js`

The default is to assume "development" as the environment. If you specify anything other
than "development", it will look for that folder / config.json.

**5) Use it**

In your app, you can reference any value from your config file as a property of the `epa`
object, directly.

```
{
  "foo": "bar"
}
```

```js
var epa = require("epa").getEnvironment();
var foo = epa.get("foo");
console.log(epa.foo);
```

The same works for environment variables. For example, the current
"NODE\_ENV" environment variable can be retrieved using the same
`get` method:

```js
var epa = require("epa").getEnvironment();
var env = epa.get("NODE_ENV");
console.log(env);
```

## Your Own EPA Instance

The `getEnvironment` method from the EPA object returns a cached, and
default instance of the EPA environment configuration. However, you can
create your own instances whenever you want to, using the `EPA` class
that comes with the `EPA` namespace.

```js
var EPA = require("epa").EPA;

var myEPA = new EPA({
  folder: "my-config",
  systemEnv: process.env,
  environment: "dev"
});
```

The `folder` option tells the EPA system what the root folder of
your environment configurations is. This parameter is combined with
the `environment` option to find the correct `config.json` file.

The `systemEnv` option tells the EPA system what "system" environment
variables to use. You should specify `process.env` unless you have a 
good reason not to. 

## Legal Mumbo Jumbo

Copyright &copy; 2014 Muted Solutions, LLC. All Rights Reserved.

Distributed under the [MIT license](http://mutedsolutions.mit-license.org).
