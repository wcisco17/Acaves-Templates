<p align="center">
  <a href="https://websitelink">
    <img width="80" alt="intercoin_image2" src="https://user-images.githubusercontent.com/35783824/66107094-a206b500-e5e9-11e9-8b7a-f855bfc6d219.png">
  </a>
</p>

<h1 align="center">
  Acave-Template
</h1>

<p align="center">
  <a href="https://app.netlify.com/sites/practical-mahavira-2a74c0/deploys">
    <img
      src="https://api.netlify.com/api/v1/badges/279adfbe-dd11-487c-9ab9-cecc21fc4d69/deploy-status"
      alt="Netlify"
    />
  </a>
</p>

<p align="center">
 A template made with React - inspired by Creative Tim.
</p>

<p align="center">
  <strong>
    Available at https://romantic-edison-b62585.netlify.com/
  </strong>
</p>

---

# Install 

1st Step
```
  git clone 
```

2nd Step
```
  yarn
  // or
  npm install
```

3rd Step - Should launch on http://localhost:3000/!
```
  yarn start 
```

## Tech Stack
  - Hosted on Netlify.
  - React on the FrontEnd.
  - CSS for styles.
  - Global State with React-hooks-global-state

## Comments
<p>
  For my global State I used this awesome library called react-hooks-global-state, since this is a minimal project 
  I didn't see the point on implementing redux.
</p>

#### A little Preview on How every initialState, action, and reducer is structured.

```ts
import { dispatch } from 'app/store';

export type ICounterAction =
    | { type: "increment" }
    | { type: "decrement" };

export const counterState = 0;

export type ICState = typeof counterState;

export const counterReducer = (
    state: ICState = counterState,
    action: ICounterAction
) => {
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            return state;
    }
};

export const increment = () => dispatch({
    type: 'increment'
});

export const decrement = () => dispatch({
    type: 'decrement'
});
```

