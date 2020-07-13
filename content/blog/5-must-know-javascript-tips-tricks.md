---
path: 5-Must-know-Javascript-Tips-&-Tricks
date: 2020-07-13T12:34:16.666Z
title: 5 Must-know Javascript Tips & Tricks
description: Must know JavaScript tips & tricks for the JS developer of 2020
---


![](https://cdn-images-1.medium.com/max/2400/1*9NpIEqA7unwxJo7t_u1YUA.png)

JavaScript keeps adding new and neat features. Sometimes, it’s hard to keep up. In this article, I’ll share a couple of cool tips & tricks to keep you up to speed and deepen your JS knowledge.

### 1. Create an array with unique values using the “Set” object

![](https://cdn-images-1.medium.com/max/2400/1*YumzRMDm5AVUMNhejYp9Jg.png)

Imagine having an array with some duplicate items and wanting to filter out only the unique ones.

You could try writing a *map* or *filter* to achieve this. Alternatively, ES6 introduces the ***Set object***, which solves this problem in just 1 line of code.

```Javascript
const arrayWithUniqueItems = [...new Set([1, 2, 3, 3,])]
// [1, 2, 3]
```

Now, this example uses integers, but you can use strings and floating-point numbers as well!

For a little more in-depth knowledge about the Set object, check out this [article by Claire-Parker Jones](https://dev.to/clairecodes/how-to-create-an-array-of-unique-values-in-javascript-using-sets-5dg6).

### 2. Shorten your “if” statements

![](https://cdn-images-1.medium.com/max/2400/1*8p7lcXKKW3eCmIoLql8vmQ.png)

Now this is a tricky one.

Shortening your “if” statements can be a great way to simplify your code.

However, if you need to write more complicated statements, you should definitely go for the first option.

```Javascript
// Instead of using this                                      
if (iAmHungry) {
   bakeAnEgg()
}

// You can use this
if (iAmHungry) bakeAnEgg()

// Or this
iAmHungry? bakeAnEgg() : 0

```

Remember, readability & ease-of-use are more important than a couple less lines of code.

### 3. Shorten an array using its length property

![](https://cdn-images-1.medium.com/max/2400/1*JLm5quDrO7b5rIm7idsrdw.png)

A great way of shortening an array is by redefining its length property.

```Javascript
let array = [0, 1, 2, 3, 4, 5, 6, 6, 8, 9]
array.length = 4

// Result: [0, 1, 2, 3]
```

Important to know though is that this is a destructive way of changing the array. This means you lose all the other values that used to be in the array.

### 4. Using the spread operator to combine objects

![](https://cdn-images-1.medium.com/max/2400/1*QQDQHw4aEPHucfRvk6W0vg.png)

Let’s say you want to combine multiple objects into one object containing them all.

The spread operator ( … ) is a great way to achieve this!

```Javascript
const obj1 = {'a': 1, 'b': 2}
const obj2 = {'c': 3}
const obj3 = {'d': 4}

// Combine them using the spread operator            
const objCombined = {...obj1, ...obj2, ...obj3}

// Result: {'a': 1, 'b': 2, 'c': 3, 'd': 4}
```

Something to keep in mind while using this is that whenever you update one of the objects, it doesn’t reflect those changes in the combined object.

### 5. Using the window.location object

![](https://cdn-images-1.medium.com/max/2400/1*Z0iAQx6K5GMl2DiECkMwNQ.png)

JavaScript can access the current URL using the window.location object. Pretty neat, but even cooler is that this object contains certain parts of the URL as well.

Get access to the protocol/host/pathname/search/and more!

```Javascript
// JavaScript can access the current URL in parts. For this URL:
`https://thatsanegg.com/example/index.html?s=article`

window.location.protocol == `https:`
window.location.host == `thatsanegg.com`
window.location.pathname == `/example/index.html`
window.location.search == `?s=article`
```
- - -

#### That’s all!

Thanks for reading, look at how much you’ve learned 😄