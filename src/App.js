import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {DataSourceList, DataSources} from './pages/datasources/datasources'
import {RegisterDatasourceForm} from "./pages/datasources/registerDatasourceForm";
import {NavbarFeatures} from "./pages/navbarFeatures";
import {DataSourcesV2} from "./pages/datasources/datasourcesV2";

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavbarFeatures/>
                <div className="row">
                    <div className="col-md-8 ">
                        .col-md-8
                      <DataSourcesV2/>
                    </div>
                    <div className="col-md-4">
                        .col-md-4
                        <RegisterDatasourceForm/>
                    </div>
                </div>
                {/*<DataSources/>*/}

            </div>
        );
    }
}

export default App;
