## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ANSWER:

- getElementById: HTML er moddhe thaka same name er ekadhik is thakle 1st ta return korbe, ar 1 unique id thakle seta return korbe.
- getElementsByClassName: HTML er moddhe thaka same name er ek ba ekadhik class thakle sobgula return korbe.
- querySelector: HTML er moddhe thaka same name er ek tag/class/id thakle 1st ta return korbe.
- querySelectorAll: HTML er moddhe thaka same name er ek ba ekadhik tag/class/id thakle sobgula return korbe.

## 2. How do you create and insert a new element into the DOM?

ANSWER:

```js
// element make korbo
const newDiv = document.createElement("div");

// element e content add korbo
newDiv.textContent = "Hello World!";
newDiv.classList.add("my-class");

// element insert korbo
document.body.appendChild(newDiv);
```

## 3. What is Event Bubbling? And how does it work?

ANSWER:

- Event Bubbling: child theke Event parent er dike jabe.
- - `example`: child > parent > grandparent

## 4. What is Event Delegation in JavaScript? Why is it useful?

ANSWER:

- Event Delegation: parent e event listener lagale child er event o handle hoy.
- why useful: karon ete kore ekadhik child element er jonno alada alada event listener lagate hoy na. ekta matro parent e event listener lagalei hoy.

## 5. What is the difference between preventDefault() and stopPropagation() methods?

ANSWER:

- preventDefault(): event er default behavior off kore. kintu event bubbling off kore na.
- stopPropagation(): event er bubbling off kore. kintu event er default behavior off kore na.
