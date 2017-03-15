[![GitHub release](https://img.shields.io/github/release/mikemenaker/vue-tabs.svg)]() [![license](https://img.shields.io/github/license/mikemenaker/vue-tabs.svg)]()

# vue-tabs
Simple vue.js 2.0 tab component

## Demo:

https://jsfiddle.net/mikemenaker/c5941ygx/

## Installation:

``` html
<script src="https://cdn.rawgit.com/mikemenaker/vue-tabs/1.0.0/src/v-tabs.js"></script>	
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

## Styling:
- Tabs header is ul/li

```css
.tabs > ul {
  overflow: hidden;
  font: bold 10px Verdana, sans-serif;
  margin: 0;
  padding: 0;
  padding-bottom: 10px;
}

.tabs > ul li {
  float: left;
  list-style: none;
  background: #ddd;
  border: 1px solid #f5f7fa;
  color: #666;
  cursor: pointer;
  display: block;
  padding: 0 30px;
  text-decoration: none;
  border-top: 1px solid #ddd;
}

.tabs > ul li:hover {
  background: #eee;
  text-decoration: none;
}

.tabs > ul li.active {
  color: #333;
  background: #f5f7fa;
}
```
