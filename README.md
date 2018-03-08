# script-injector


**Let's you inject script files to almost every website you wish.**

Tiny javascript module.

The injector allows you to inject predefined script files like jquery, underscorejs and custom script files.

## Installation

Go to any website you whish then copy open developer console. Copy/Paste below code snippet hit enter.

```javascript
let vbscript = document.createElement("script");
vbscript.src="https://rawgit.com/vbicer/script-injector/master/injector.js";
document.getElementsByTagName("head")[0].appendChild(vbscript);
```

## Usage

After you installed injector you are ready to use it.

Inject [jquery](https://jquery.com/)
```javascript
vb.inject._jquery()
```

Inject [underscorejs](http://underscorejs.org/)
```javascript
vb.inject._underscore()
```

Inject custom javascript file

```javascript
vb.inject('https:xxx.com/xxx.js')
```

> ***Tip:*** Injector functions start with ***_*** sign


## Contribution
Add More Injector as possible.
