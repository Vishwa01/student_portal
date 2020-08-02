import React from 'react'
import { ListGroup } from 'reactstrap'
import { PhoneAndroid, BorderTop } from '@material-ui/icons';
const SecondScreenBody = (props) => {
    return (
        <div>
            <div className="container">

                <ListGroup>
                    {
                        props.payload.map((item) => <div style={{ borderBottom: "0.1px solid lightgrey" }}>
                            <div className="row mt-2"  >
                                <div className="col-8">
                                    <h6>{item.name}</h6>
                                </div>
                                <div className="col-4">
                                    {item.date}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <PhoneAndroid />
                                    {item.phone}
                                </div>
                                <div className="col-4 mb-2">
                                    {item.time}
                                </div>
                            </div>
                        </div>
                        )
                    }
                </ListGroup>
            </div>
        </div>
    );
}
export default SecondScreenBody;