import React, { Component } from 'react';
import Header from './header';
import { Input } from 'reactstrap';
import Footer from './footer';
import SecondScreen from './screen2';


class FirstScreen extends React.Component {

    constructor(props) {

        super(props);
        this.stsate = {
            title: null,
            subject: null,
            dueDate: null,
            remarks: null
        }

    }

    render() {

        return (
            <div>



                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-6 mt-4">
                            <label>Homework Due Date</label>
                        </div>
                        <div className="col-6 mt-3">
                            <Input type="date" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-3">
                            <Input type="text" placeholder="Enter Title here" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-3">
                            <Input style={{ height: '300px' }} type="textarea" placeholder="Enter remark here" />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

}

export default FirstScreen;