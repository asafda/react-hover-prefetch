# react-hover-prefetch
Prefetch data on hover for better perceived performance.
## Usage Example
`react-hover-prefetch` exports a single `Prefetch` component that fetches data upon `mousenter`, and invokes the requested action upon click.

There are no extra HTML elements added.

```
<Prefetch
  prefetch={this.prefetch}
  onClickAction={this.onClick}>
  <button>Click Me!</button>
</Prefetch>
```

`Prefetch` manages cases where the user clicks the button before or after the data was prefetched.

## Installation
Via npm:
```
npm install react-hover-prefetch
```

Via Yarn:
```
yarn add react-hover-prefetch
```