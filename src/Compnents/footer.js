import React from 'react';
import { AttachmentOutlined, CameraAlt, Mic, InsertPhoto, Cancel } from '@material-ui/icons';
import { Navbar, Input, Button, Media, Card, ListGroup } from 'reactstrap';
import { IconButton, ListItem } from '@material-ui/core';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            attachments: []
        }
    }

    imageUpload = () => {
        document.getElementById("image").click();
    };
    handlechange = (e) => {

        const url = URL.createObjectURL(e.target.files[0]);
        const oldAttachments = [...this.state.attachments];

        oldAttachments.push(url);
        this.setState({ attachments: oldAttachments });

    }

    closes = (attch, e) => {
        const oldAttachments = [...this.state.attachments];
        var key = oldAttachments.indexOf(attch);
        oldAttachments.splice(key, 1);
        this.setState({ attachments: oldAttachments });
    }

    render() {

        return (
            <div className=" mt-3">



                <Navbar color="light" light expand="sm">
                    <div className="container" >
                        <div className="row">
                            <div className="col-12 mt-3">
                                <h3 className="ml-3" ><span className="mt-3 ml-2" ><AttachmentOutlined /></span>  Attachments</h3>
                            </div>
                        </div>
                    </div>
                </Navbar>
                <Navbar color="light" light expand="sm">
                    <div className="container">
                        <div className="row">
                            <ListGroup horizontal>
                                {
                                    this.state.attachments.length !== 0 ? this.state.attachments.map((attch, i) =>

                                        <ListItem >
                                            <Card style={{ backgroundColor: 'transparent' }}>
                                                <Cancel onClick={(e) => this.closes(attch, e)} style={{ marginLeft: "65px" }} />

                                                <Media src={attch} key={i} height="90px" width="90px" />

                                            </Card>
                                        </ListItem>

                                    ) : null
                                }
                            </ListGroup>
                        </div>

                    </div>

                </Navbar>

                <Navbar color="light" light expand='md' className="foot">


                    <div className="container" >

                        <div className="col-4">
                            <IconButton  >
                                <CameraAlt />
                            </IconButton >
                            <label>Add from Camera</label>
                        </div>

                        <div className="col-4">
                            <IconButton className="micButton">
                                <Mic />
                            </IconButton>
                            <label>Add voice</label>
                        </div>

                        <div className="col-4" >
                            <IconButton style={{ border: "none" }} >
                                <InsertPhoto className="insertPhoto" onClick={this.imageUpload} />
                            </IconButton>
                            <label>Add from Gallery</label>
                            <Input id="image" type="file" style={{ display: "none" }} onChange={this.handlechange} />
                        </div>
                    </div>
                </Navbar>
                <Navbar color="light" light expand='md'  >
                    <div className="container">
                        <div className="col-2 " />
                        <Button color="primary" size="lg" block className="mt-3 col-8 sendButton">Send to Students</Button>
                        <div className="col-2" />
                    </div>
                </Navbar>

            </div >
        );
    }
}

export default Footer;



