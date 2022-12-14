# Index:
  1. [React Redux : Action, Reducer, Store](https://github.com/vipulchaudhary16/react-redux#react-redux--action-reducer-store)
  2. [Using Redux with React Hooks](https://github.com/vipulchaudhary16/react-redux#using-redux-with-react-hooks)
  3. [Multiple Reducer](https://github.com/vipulchaudhary16/react-redux#multiple-reducers)



## React Redux : Action, Reducer, Store:

* First we need to define types of action
* Create a file called `actionTypes.js` in `src\redux\cake` folder
  ```javascript
    const BUY_CAKE = "BUY_CAKE";
    export { BUY_CAKE };
    ```

* Create a file called `cakeActions.js` in `src\redux\cake` folder
  ```javascript
    import { BUY_CAKE } from "./actionTypes";

    export const buyCake = () => {
      return {
        type: BUY_CAKE,
      };
    };
    ```
* Create a file called `cakeReducer.js` in `src\redux\cake` folder
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
* Now we need to create a store
* Create a file called `store.js` in `src\redux` folder
    ```javascript
    import { createStore } from "redux";
    import cakeReducer from "./cake/cakeReducer";

    const store = createStore(cakeReducer);

    export default store;
    ```
* For convinient we can create a file called `index.js` in `src\redux` folder
    ```javascript
    export { buyCake } from "./cake/cakeActions";
    ```
* Now we can use this action in our component
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
# Using Redux with React Hooks

* We can use redux with react hooks
* We need to install `react-redux` and `redux` packages
* Component level coding

    * In context of previous code we need to do some changes to achieve the same outcome
        ```javascript
        import React from "react";
        import { useDispatch, useSelector } from    "react-redux";
        import { buyCake } from "../redux";

        function HooksCakeContainer() {
          const noOfCakes = useSelector((state) => state.   numOfCakes);
          const dispatch = useDispatch();
          return (
            <div>
              <h2>Number of Cake : {noOfCakes}</h2>
              <button onClick={() => dispatch(buyCake())}   >Buy Cake</button>
            </div>
          );
        }

        export default HooksCakeContainer;
        ```

# Multiple Reducers

* Create same files as in `redux\cake` above in `src\redux\iceCream` folder

* Add this line to export icecream action in `redux\index.js`
    ```javascript
    export { buyIceCream } from "./iceCream/iceCreamActions";
    ```
* Now we need to create root reducer
* Create a file called `rootReducer.js` in `src\redux` folder
    ```javascript
    import { combineReducers } from "redux";
    import cakeReducer from "./cake/cakeReducer";
    import iceCreamReducer from "./iceCream/iceCreamReducer";

    const rootReducer = combineReducers({
      cake: cakeReducer,
      iceCream: iceCreamReducer,
    });

    export default rootReducer;
    ```
* Now we need to update our store
* Update `src\redux\store.js`
    ```javascript
    import { createStore } from "redux";
    import rootReducer from "./rootReducer";

    const store = createStore(rootReducer);

    export default store;
    ```
* Now we can use this action in our component
  ```javascript
  import React from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { buyIceCream } from "../redux";

  export default function IceCreamContainer() {
    //const noOfIceCreams = useSelector((state) => state.noOfIceCreams);
    const noOfIceCreams = useSelector((state) => state.iceCream.noOfIceCreams);
    const dispatch = useDispatch();
    return (
      <div>
        <h2>No of IceCream : {noOfIceCreams}</h2>
        <button onClick={() => dispatch(buyIceCream())}>buy iceCream</button>
      </div>
    );
  }
  ```
