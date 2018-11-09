import React, { Component } from 'react';
import './datasourcesV2.css'

export class DataSourcesV2 extends React.Component {

    render() {
        return (
            <div>
                <h3>Data Sources</h3>
                <DataSourceList dataSources={this.props.dataSources} />
            </div>
        );
    }
}

class DataSourceList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.dataSources.map(dataSource => (
                        <DataSourceCard key={dataSource.id} dataSource={dataSource} />
                ))}
            </ul>
        );
    }
}

const DataSourceCard = ( { dataSource} ) => {
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">{dataSource.name}</h3>
                <h4 className="card-title">{"Status: " + dataSource.status}</h4>
                <p className="card-text">{dataSource.description}</p>
                <p className="card-text">{"Legal Status: " + dataSource.legalStatus}</p>
                <a href={dataSource.schemaUri}>{"Schema (" + dataSource.schemaType + ")"} </a>
                <p className="card-text">{"Maintainer: " + dataSource.maintainer}</p>
                <p className="card-text">{"Source: " + dataSource.sourceUri + " (" + dataSource.sourceType + ")"}</p>
                <a href={"https://s3.console.aws.amazon.com/s3/buckets/gaius/" + dataSource.name + "/?region=us-east-1&tab=overview"}>{"Explore Data"} </a>
                <p href={"https://s3.console.aws.amazon.com/s3/buckets/gaius/" + dataSource.name + "/?region=us-east-1&tab=overview"}>{"Create Consumer"} </p>
            </div>
        </div>
    );
}

