# smoothScroll

 __UNTESTED AND OPTIMIZED, JUST START__

plugin for smoothScroll,

## Simplest way

```javascript
window.scrollTo({
  top: 1000,
  behavior: 'smooth'
})
```
It works in Chrome and Firefox. However, `IE` and `Edge` doesn't support. Code above will run like

```js
window.scrollTo(0, 0)
```

Similar API also exists like `scrollIntoView` or `scrollBy`. The compatibility is the key problem.

## My Solution

1. Add _smoothScroll.js_ to your code.

2. Run like below

```js
smoothScoll(1000)
```

3. You can also choose the timing-function.


## Similar Solutions

- [jump.js](https://github.com/callmecavs/jump.js)