

import { useDispatch } from "react-redux";
import { Component, useEffect } from "react";
import {BugAdded, BugResolve} from "./action/action";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { bugAdded, logData, addBug } from "./store";
import store from "./store";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      items: []
    }
  }
  componentDidMount(){
    this.props.dispatch(addBug({description:"sample Data"}))
   // this.props.dispatch(logData())
  }
  render(){
    return(
    <div>
      Hello
     {
       this.props.items.map((data)=>{
        return (
            <div key={data.id}>
              <span>{data.id}</span>
              <br/>
              <span>{data.description}</span>
              <br/>
              {/* <span>{data.resolve.toString()}</span> */}
              <br/>
              <span>{data.title}</span>
            </div>
            
        )
      })
     }
    </div>
    )
  }
}

const mapStateToProps=(state)=>({
  items:state.list
  
})


const mapDispatchToProps = (dispatch) => ({
  BugAdded: (description) => dispatch(bugAdded(description)),
  BugResolve: (id)=>dispatch(BugResolve(id)),
  dispatch
});

export default connect(mapStateToProps,mapDispatchToProps )(App);


