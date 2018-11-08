import React from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';
import {DataSourcesV2} from "./datasourcesV2";

export class RegisterDatasourceForm extends React.Component  {

    constructor({submitDataSource}) {
        super({submitDataSource});

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    defaults = {
        name: "Name",
        sourceUri: "Source Uri",
        sourceType: "Source Type",
        maintainer: "Maintainer",
        schemaUri: "Schema Uri",
        schemaType: "Schema Type",
        description: "Description",
        tier: "Tier",
        legalStatus: "Legal Status",
    };

    state = this.defaults;

    handleSubmit(e) {
        e.preventDefault();

        if(!this.state.name || this.defaults.name === this.state.name ){
            alert("Please provide name")
        }
        if(!this.state.sourceUri || this.defaults.sourceUri === this.state.sourceUri ){
            alert("Please provide Source Uri")
        }
        if(!this.state.sourceType || this.defaults.sourceType === this.state.sourceType ){
            alert("Please provide Source Type")
        }
        if(!this.state.maintainer || this.defaults.maintainer === this.state.maintainer ){
            alert("Please provide Maintainer")
        }
        if(!this.state.schemaUri || this.defaults.schemaUri === this.state.schemaUri ){
            alert("Please provide Schema Uri")
        }
        if(!this.state.schemaType || this.defaults.schemaType === this.state.schemaType ){
            alert("Please provide Schema Type")
        }
        if(!this.state.description || this.defaults.description === this.state.description ){
            alert("Please provide Description")
        }
        if(!this.state.tier || this.defaults.tier === this.state.tier ){
            alert("Please provide Tier")
        }
        if(!this.state.legalStatus || this.defaults.legalStatus === this.state.legalStatus ){
            alert("Please provide Legal Status")
            return
        }

        const newDataSource = {
            name: this.state.name,
            sourceUri: this.state.sourceUri,
            sourceType: this.state.sourceType,
            maintainer: this.state.maintainer,
            schemaUri: this.state.schemaUri,
            schemaType: this.state.schemaType,
            description: this.state.description,
            tier: this.state.tier,
            legalStatus: this.state.legalStatus
        };

        this.props
            .submitDataSource(newDataSource, (err) => {
                if (err) {
                    alert("Broken " + err)
                } else {
                    alert("Thanky")
                }
            });

        alert("Wait for it");
        this.setState({...this.state, ...this.defaults});

    }

    changeHandler = (event) => {
        this.setState({...this.state, [event.target.name]: event.target.value})
    };

    render() {
        return(
            <Container>
                <Row>
                    <Col md="10">
                        <form onSubmit={this.handleSubmit}>
                            <p className="h5 text-center mb-4">Publish Dataset</p>
                            <div className="grey-text">
                                <Input name="name" onChange={this.changeHandler} value={this.state.name} placeholder="Name"  group type="text" validate error="wrong" success="right" />
                                <div className="row">
                                    <div className="col-md-6">
                                        <Input name="sourceUri" onChange={this.changeHandler} value={this.state.sourceUri} placeholder="Source Uri"  group type="text" validate />
                                    </div>
                                    <div className="col-md-6">
                                        <select name="sourceType" onChange={this.changeHandler} value={this.state.sourceType} className="custom-select browser-default" required >
                                            <option value="">Source Type</option>
                                            <option value="Kafka">Kafka</option>
                                            <option value="Rabbit">Rabbit</option>
                                            <option value="Kinesis">Kinesis</option>
                                            <option value="Ftp">Ftp</option>
                                            <option value="S3">S3</option>
                                        </select>
                                    </div>
                                </div>
                                <Input name="maintainer" onChange={this.changeHandler} value={this.state.maintainer} placeholder="Maintainer"  group type="text" validate error="wrong" success="right" />
                                <div className="row">
                                    <div className="col-md-6">
                                        <Input name="schemaUri" onChange={this.changeHandler} value={this.state.schemaUri} placeholder="Schema URI" group type="text" validate error="wrong" success="right" />
                                    </div>
                                    <div className="col-md-6">
                                        <select name="schemaType" onChange={this.changeHandler} value={this.state.schemaType} className="custom-select browser-default" required >
                                            <option value="">Schema Type</option>
                                            <option value="Avro">Avro</option>
                                            <option value="Protobuf">Protobuf</option>
                                            <option value="Parquet">Parquet</option>
                                            <option value="Json">Json</option>
                                        </select>
                                    </div>
                                </div>
                                <Input name="description" onChange={this.changeHandler} value={this.state.description} placeholder="Description"  group type="textarea" validate />
                                <select name="tier" onChange={this.changeHandler} value={this.state.tier} className="custom-select browser-default" >
                                    <option value="">Tier</option>
                                    <option value="Experimental">Experimental</option>
                                    <option value="Internal Use">Internal Use</option>
                                    <option value="Awesome">Awesome</option>
                                </select>
                                <br/>
                                <br/>
                                <select name="legalStatus" onChange={this.changeHandler} value={this.state.legalStatus} className="custom-select browser-default" required>
                                    <option value="">Legal Status</option>
                                    <option value="Free For All">Free For All</option>
                                    <option value="Internal Use">Internal Use</option>
                                    <option value="Restricted">Restricted</option>
                                </select>
                            </div>
                            <div className="text-center">
                                <Button color="primary" type="submit">Submit For Review</Button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    }
};
