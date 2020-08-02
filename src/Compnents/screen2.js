import React, { Component } from 'react';
import SecondScreenHeader from './SecondScreenHeader';
import { Button, ButtonGroup } from 'reactstrap';
import SecondScreenBody from './secondeScreenBody';
import { reviewedlist, notsubmittedlist, submittedlist } from './data';


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
            reviewedList: reviewedlist

        }
    }

    render() {
        return (
            <div>

                <SecondScreenHeader />

                <div className="container">
                    <ButtonGroup style={{ width: "100%" }}>
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
                </div>
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

            </div >
        );
    }

}

export default SecondScreen;