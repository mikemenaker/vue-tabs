[![GitHub release](https://img.shields.io/github/release/mikemenaker/vue-tabs.svg)]() [![license](https://img.shields.io/github/license/mikemenaker/vue-tabs.svg)]()

# vue-tabs
Simple vue.js 2.0 tab component

## Demo:

https://jsfiddle.net/mikemenaker/c5941ygx/

## Installation
### With npm:
```bash
npm i vtabs --save
```

### With a CDN:
```html
<!-- In <head> -->
<meta rel="stylesheet" href="https://unpkg.com/vtabs/dist/vtabs.css">
<!-- In <body>, after Vue import -->
<script src="https://unpkg.com/vtabs/dist/vtabs.js"></script>
```

## Usage
### With an ES6 bundler (via npm)
In your index file
```js
import vTabs from 'vtabs'
Vue.use(vTabs)
```

### With a CDN
```html
<script>
    Vue.use(Tabs)

    new Vue({
        // ...
    })
</script>
```

## Tab Props:
 - title
	 - String   	 
 - isActive
	 - Boolean	 
   
##  Example
```html
<div id="app">
  <tabs>
    <tab title="A">
      <p>Content A</p>
    </tab>
    <tab title="B">
      <div>Content B</div>
    </tab>
    <tab title="C" :is-active="true">
      <p>Content C</p>
    </tab>
  </tabs>
</div>
```
