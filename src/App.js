import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {DataSourceList, DataSources} from './pages/datasources/datasources'
import {RegisterDatasourceForm} from "./pages/datasources/registerDatasourceForm";
import {NavbarFeatures} from "./pages/navbarFeatures";
import {DataSourcesV2} from "./pages/datasources/datasourcesV2";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { dataSources: [
                {
                    name: "Name",
                    sourceUri: "Source Uri",
                    sourceType: "Source Type",
                    maintainer: "Maintainer",
                    schemaUri: "Schema Uri",
                    schemaType: "Schema Type",
                    description: "Description",
                    tier: "Tier",
                    legalStatus: "Legal Status",
                    status: "Initializing"
                }
            ]};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.getDataSources();
    }

    handleSubmit(dataSource, callback) {

        console.log("XXZ" + JSON.stringify(dataSource));

        fetch('http://localhost:7878/gaius/v1/datasources', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Origin': 'localhost:3000',
                'Access-Control-Request-Method': 'POST'
            },
            body: JSON.stringify(dataSource)
        })
            .then(res => res.json())
            .then(
                (result) => {
                    callback();
                    this.getDataSources()
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    callback(error);
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

    }


    getDataSources() {
        fetch("http://localhost:7878/gaius/v1/datasources")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        dataSources: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        return (
            <div className="App">
                <NavbarFeatures/>
                <div className="row">
                    <div className="col-md-8 ">
                        <DataSourcesV2 dataSources={this.state.dataSources}/>
                    </div>
                    <div className="col-md-4">
                        <RegisterDatasourceForm submitDataSource={this.handleSubmit}/>
                    </div>
                </div>
                {/*<DataSources/>*/}

            </div>
        );
    }
}





export default App;
