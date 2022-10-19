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

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
