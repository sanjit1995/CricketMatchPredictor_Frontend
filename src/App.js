import './App.css';
import {BodyHeader} from "./BodyHeader.js";
import React from "react";
import './SubComponents.css';
import {MainArea} from "./MainArea.js";
import {ErrorArea} from "./ErrorArea.js";
import {PredArea} from "./PredArea";

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            rows: [],
            pred_rows: [],
            errorMsg: ""
        };
    }

    componentDidMount() {
        this.getLiveData();
        this.getPredData();
        // setInterval(this.getLiveData, 5000)
        // setInterval(this.getPredData, 10000)
    }

    getLiveData = () => {
        fetch('http://127.0.0.1:8000/getMatchData', {
            method: "GET",
            cache: "no-cache"
        }).then(response => {
            if (response.status === 500) {
                throw new Error("SERVER_ERR_500 : CHECK SERVER CONNECTION")
            }
            return response.json()
        }).then(output => {
            console.log(output)
            if (output['matches_status'] === 200){
                this.setState({rows : output['matches_details'], pred_rows: this.state.pred_rows})
            }
            else{
                throw new Error(output['error_msg'])
            }
        }).catch((error) => {
            console.log(error.message)
            this.setState({errorMsg : error.message})
        });
    }

    getPredData = () => {
        fetch('http://127.0.0.1:8000/getPredData', {
            method: "GET",
            cache: "no-cache"
        }).then(response => {
            if (response.status === 500) {
                throw new Error("SERVER_ERR_500 : CHECK SERVER CONNECTION")
            }
            return response.json()
        }).then(output => {
            console.log(output)
            if (output['pred_status'] === 200){
                this.setState({rows: this.state.rows, pred_rows: output['pred_details']})
            }
            else{
                throw new Error(output['error_msg'])
            }
        }).catch((error) => {
            console.log(error.message)
            this.setState({errorMsg : error.message})
        });
    }

    render() {
        return (
            <>
              <BodyHeader />
              <div className={"main-area"}>
              {!this.state.errorMsg ?
                  <>
                    <MainArea value={this.state.rows}/>
                    <PredArea value={this.state.pred_rows}/>
                  </>
                  :
                  <ErrorArea value={this.state.errorMsg}/>
              }
              </div>
            </>
        )
      };
}

export default App;
