## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Difference Between DOM Selectors

- getElementById() is used to select a single element based on its unique id.

- getElementsByClassName() selects all elements that share the same class name.

- querySelector() returns the first element that matches a specified CSS selector (such as a class, id, or tag).

- querySelectorAll() returns all elements that match a specified CSS selector. It provides a NodeList, which is not live (it doesn’t 
  automatically update when the DOM changes).

### 2. How do you create and insert a new element into the DOM?

To create a new element in JavaScript, you use document.createElement().
After creating it, you can insert it into the page using methods like appendChild().

### 3. What is Event Bubbling? And how does it work?

Event bubbling is the process where an event starts from the element that triggered it (the target element) and then moves upward through its parent elements in the DOM hierarchy.

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation means adding a single event listener to a parent element instead of attaching listeners to multiple child elements.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() prevents the browser’s default behavior for an event.
stopPropagation() prevents the event from bubbling up (or capturing down) the DOM tree, so parent elements won’t receive the event.
