import React, { Component } from 'react';
import SecondScreenHeader from './SecondScreenHeader';
import { Button, ButtonGroup } from 'reactstrap';
import SecondScreenBody from './secondeScreenBody';
import { reviewedlist, notsubmittedlist, submittedlist } from './data';
import zIndex from '@material-ui/core/styles/zIndex';
import { PublishRounded } from '@material-ui/icons';
import { IconButton, Link } from '@material-ui/core';

class SecondScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: 40,
            notSubmitted: 10,
            reviewed: 5,
            submittedFlag: "primary",
            notSubmittedFlag: "secondary",
            reviewedFlag: "secondary",
            submittedList: submittedlist,
            notSubmittedList: notsubmittedlist,
            reviewedList: reviewedlist,
            visible: false
        }
    }

    render() {
        return (
            <div style={{}}>

                <header style={{ position: "relative", zIndex: 1 }}>
                    <div style={{ position: "fixed", width: "100%", zIndex: 1 }}>

                        <SecondScreenHeader />

                        <div className="container" >
                            <ButtonGroup style={{ width: "100%", position: "relative" }}>
                                <Button color={this.state.submittedFlag} style={{ fontSize: "x-small" }} block
                                    onClick={() => {
                                        this.setState({ submittedFlag: "primary", notSubmittedFlag: "secondary", reviewedFlag: "secondary" })
                                    }} >

                                    <b> Submitted ({this.state.submitted})</b>
                                </Button>

                                <Button color={this.state.notSubmittedFlag} style={{ fontSize: "x-small", width: "100%" }}
                                    onClick={() => {
                                        this.setState({ submittedFlag: "secondary", notSubmittedFlag: "primary", reviewedFlag: "secondary" })
                                    }}>
                                    <b>Not-Submitted ({this.state.notSubmitted})</b>
                                </Button>

                                <Button color={this.state.reviewedFlag} style={{ fontSize: "x-small" }} block onClick={() => {
                                    this.setState({ submittedFlag: "secondary", notSubmittedFlag: "secondary", reviewedFlag: "primary" })
                                }}>
                                    <b>  Reviewed ({this.state.reviewed})</b>
                                </Button>
                            </ButtonGroup>

                            <div style={{ position: "absolute", left: "70%", top: "350%", zIndex: 1 }}>
                                <IconButton style={{ border: "1px solid black", borderRadius: "50px", backgroundColor: "grey" }}
                                    onClick={() => {
                                        document.documentElement.scrollTop = 0;
                                    }}>
                                    <PublishRounded />
                                </IconButton>
                            </div>

                        </div>

                    </div>

                </header>
                <body style={{ position: "relative", zIndex: -5, paddingTop: "190px" }} >
                    {
                        this.state.submittedFlag === "primary" ?
                            <SecondScreenBody payload={this.state.submittedList} /> : null

                    }
                    {
                        this.state.notSubmittedFlag === "primary" ?
                            <SecondScreenBody payload={this.state.notSubmittedList} /> : null
                    }
                    {
                        this.state.reviewedFlag === "primary" ?
                            <SecondScreenBody payload={this.state.reviewedList} /> : null
                    }
                </body>

            </div>
        );
    }

}

export default SecondScreen;