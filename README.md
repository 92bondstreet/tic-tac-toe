# [React.js] tic tac toe

> building a Tic Tac Toe game with React.js

## Some React general tutorials

* [Facebook tutorial](https://facebook.github.io/react/docs/tutorial.html)
* [Building dynamic forms with Facebook React](http://www.dustingetz.com/2014/02/18/react-dynamic-forms.html)
* [React Tutorial: Two way data binding](http://voidcanvas.com/react-tutorial-two-way-data-binding/)
* [Learn basics of React.js making the tests pass](https://github.com/arkency/reactjs_koans)
* [Simplifying Code with React](http://www.kevindangoor.com/2014/05/simplifying-code-with-react/)
* [Building a board game with React.js](http://jjt.io/2014/07/30/building-a-board-game-with-react-js/)


## Getting Started

1. **Fork** the repository.
1. `git clone https://github.com/YOUR_USERNAME/tic-tac-toe.git`
1. Install dependencies

```sh
❯ sudo npm i -g gulp
❯ npm i
```

## Usage

1. Once installed, run the default gulp task
```sh
❯ gulp
```
1. Open `index.html` in your browser of choice.
1. Follow the steps below to build Tic Tac Toe in the file `lib/app.jsx`
1. Your changes to `app.jsx` will auto rebuild your application.
1. Reload your browser to see changes.


## Steps to do

**Note:** If you get stuck, look at the docs [here](http://facebook.github.io/react/docs/getting-started.html)

**Please, solve each step in a separate message commit:**

```sh
❯ git commit -m "step 2"
❯ git commit -m "step 3"
❯ git commit -m "step 4 and 5"
```

### 1. Build a react component called `Box`

The `Box` is a `button` render the `X` value.

**Tips:** [First component](https://facebook.github.io/react/docs/tutorial.html#your-first-component)

### 2. Set a **property called** `value` to the Box to render the current button

Render (again) the `X` value.

**Tips:** [Using props](https://facebook.github.io/react/docs/tutorial.html#using-props)

### 3. Add style to the button

Set

* `height` to `100px`
* `width` to `100px`

**Tips:** [Inline styles](https://facebook.github.io/react/tips/inline-styles.html)

### 4. Render the button with an initial state

Render (again) the `X` `value` as initial state.

Name it `initialValue`.

**Tips:** [Props in getInitialState Is an Anti-Pattern](https://facebook.github.io/react/tips/props-in-getInitialState-as-anti-pattern.html)


### 5. Change state alternating between `X` and `O`

Every 300ms, change by alternating the **state** `value` between `X` and `O`

**Tips:** [Lifecycle Methods](https://facebook.github.io/react/docs/component-specs.html#mounting-componentwillmount)

### 6. In fact, the Box state changes by clicking on button

Make Box value alternates between `X` and `O` on clicks.

**Tips:** [DOM Event Listeners in a Component](https://facebook.github.io/react/tips/dom-event-listeners.html)

### 7. Build a react component called `Row`

`Row` renders **3** `Box` components

**Tips:** [Composition Example](https://facebook.github.io/react/docs/multiple-components.html)

### 8. In fact, `Row` build dynamically its `Box`

`Row` render `3` children `Box` with `-` as initial value.

**Tips:** [Dynamic Children](https://facebook.github.io/react/docs/multiple-components.html#dynamic-children)

### 9. Move logic to `Row`

Now, the event `click` changes the state of the `Row` component

**Tips:** Save the value for each row index.

### 10. Render a `Grid`

Now, create a `Grid` component that renders 3 `Row` components.

**Tips:** Same as 7 ;)

### 11. In fact, `Grid` build dynamically its `Row`

`Grid` render `3` children `Row` with `-` as initial value.

**Tips:** Same as 8 ;)

### 12. Move logic to `Grid`

Now, the event `click` changes the state of the `Grid` component

**Tips:** Save the value for each row/column index inside the grid (and same as 9 ;))
