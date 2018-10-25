import React, { Component } from 'react';

export class DataSources extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
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
                <h1>GAIUS V1</h1>
                <h3>Data Sources</h3>
                <DataSourceList items={this.state.items} />
                <h3>Add New Data Source</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-name">
                        Name:
                        <input id="new-name" name="new-name" type="text" ref={(newName) => this.newName = newName}/>
                    </label>
                    <br/>
                    {/*<label htmlFor="new-schema">*/}
                        {/*Schema Uri*/}
                        {/*<input id="new-schema" name="new-schema" type="text" ref={(newSchema) => this.newSchema = newSchema}/>*/}
                    {/*</label>*/}
                    <br/>
                    <label htmlFor="new-uri">
                        Uri:
                        <input id="new-uri" type="text" ref={(newUri) => this.newUri = newUri}/>
                    </label>
                    <br/>
                    <label htmlFor="new-type">
                        Type
                        <select name="type" ref={(newType) => this.newType = newType}>
                            <option value="KAFKA">Kafka</option>
                            <option value="RABBIT">Rabbit</option>
                        </select>
                    </label>
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        );
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!this.newName.value.length) {
            return;
        }
        if (!this.newUri.value.length) {
            return;
        }
        if (!this.newType.value.length) {
            return;
        }
        // if (!this.newSchema.value.length) {
        //     return;
        // }

        const newDataSource = {
            name : this.newName.value,
            uri : this.newUri.value,
            type : this.newType.value,
            // schemaUri : this.newSchema.value,
            schemaUri : "NONE",
        };

        fetch('http://localhost:7878/gaius/v1/datasources', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Origin': 'localhost:3000',
                'Access-Control-Request-Method': 'POST'
            },
            body: JSON.stringify(newDataSource)
        })
        .then(res => res.json())
            .then(
                (result) => {
                    this.getDataSources()
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
        //
        // this.setState(state => ({
        //     items: state.items.concat(newItem),
        //     text: ''
        // }));
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

