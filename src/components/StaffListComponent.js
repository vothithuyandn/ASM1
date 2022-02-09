import { render } from '@testing-library/react';
import React, {Component} from 'react';

import {Card, CardImg , CardImgOverlay , CardBody, CardText , CardTitle} from 'reactstrap';

class StaffList extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            staffs: [

            ]

        }
    }


render(){

    const stafflist = this.props.staffs.map((staff) => {
    return (
        <div key={staff.id} className="col-12 col-md-6 m-1">
            <Card>
                <CardText>
                    {staff.name}
                </CardText>

            </Card>

        </div>
    );
    });
    
    return (
        <div className="container">
            <div className="row">
            
                    {stafflist}
                <p>Bam vao ten de xem thong tin</p>
            </div>
        </div>

    );
}

}

export default StaffList;

