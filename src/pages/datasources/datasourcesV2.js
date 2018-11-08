import React, { Component } from 'react';

export class DataSourcesV2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
    }

    componentDidMount() {
        this.getDataSources();
    }


    getDataSources() {
        fetch("http://localhost:7878/gaius/v1/datasources")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
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
            <div>
                <h3>Data Sources</h3>
                <DataSourceList items={this.state.items} />
            </div>
        );
    }
}

class DataSourceList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <DataSource key={item.id} name={item.name} type={item.type} uri={item.uri}/>
                ))}
            </ul>
        );
    }
}

const DataSource = ( { name, uri, type } ) => {
    return (
        <li>
            <div className="datasource">
                <a> {name} {uri} {type} </a>
            </div>
        </li>
    );
}

