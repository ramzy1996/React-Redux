import React from "react";
import ReactDOM from "react-dom";
import { vadiveluComedy, goundermaniComedy, subscribe } from "./index";
import { useDispatch, useSelector, connect } from "react-redux";

class AppClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // const comedies = useSelector((state) => state);
    // const dispatch = useDispatch();
    return (
      <>
        <p>{this.props.isSubscribed ? "true" : "false"}</p>
        <img src={this.props.img} />
        <button
          disabled={!this.props.isSubscribed}
          onClick={() => this.props.vComedy()}
        >
          Vadivelu
        </button>
        &nbsp;
        <button
          disabled={!this.props.isSubscribed}
          onClick={() => this.props.gComedy()}
        >
          Goundamani
        </button>
        <button onClick={() => this.props.subs()}>
          {!this.props.isSubscribed ? "Subscribe" : "Unsubscribe"}
        </button>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch) => {
  return {
    vComedy: () => dispatch(vadiveluComedy()),
    gComedy: () => dispatch(goundermaniComedy()),
    subs: () => dispatch(subscribe())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppClass);
