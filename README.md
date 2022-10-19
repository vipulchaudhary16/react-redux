## React Redux : Action, Reducer, Store:

* first we need to define types of action
* create a file called `actionTypes.js` in `src\redux\cake` folder
  ```javascript
    const BUY_CAKE = "BUY_CAKE";
    export { BUY_CAKE };
    ```

* create a file called `cakeActions.js` in `src\redux\cake` folder
  ```javascript
    import { BUY_CAKE } from "./actionTypes";

    export const buyCake = () => {
      return {
        type: BUY_CAKE,
      };
    };
    ```
* create a file called `cakeReducer.js` in `src\redux\cake` folder
   ```javascript
    import { BUY_CAKE } from "./actionTypes";

    const initialState = {
      numOfCakes: 10,
    };

    const cakeReducer = (state = initialState, action) => {
      switch (action.type) {
        case BUY_CAKE:
          return {
            ...state,
            numOfCakes: state.numOfCakes - 1,
          };
        default:
          return state;
      }
    };

    export default cakeReducer;
    ```
* now we need to create a store
* create a file called `store.js` in `src\redux` folder
    ```javascript
    import { createStore } from "redux";
    import cakeReducer from "./cake/cakeReducer";

    const store = createStore(cakeReducer);

    export default store;
    ```
* for convinient we can create a file called `index.js` in `src\redux` folder
    ```javascript
    export { buyCake } from "./cake/cakeActions";
    ```
* now we can use this action in our component
    ```javascript
    import React from "react";
    import { connect } from "react-redux";
    import { buyCake } from "../redux";

    function CakeContainer(props) {
      return (
        <div>
          <h2>Number of Cakes - {props.numOfCakes}</h2>
          {props.numOfCakes > 0 ? (
            <button onClick={props.buyCake}>Buy Cake</button>
          ) : (
            <h2>Cake over</h2>
          )}
        </div>
      );
    }

    //step 1
    const mapStateToProps = (state) => {
      return {
        numOfCakes: state.numOfCakes,
      };
    };

    //step 2
    const mapDispatchToProps = (dispatch) => {
      return {
        buyCake: () => dispatch(buyCake()),
      };
    };

    export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer);
    ```
