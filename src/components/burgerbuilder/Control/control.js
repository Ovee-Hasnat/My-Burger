import React from "react";
import { Card, CardBody, CardFooter, CardHeader, Button } from "reactstrap";


const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const BuildControl = props => {
    return (
        <div className="d-flex">
            <div className="me-auto ms-5" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{props.label}</div>
            <Button color="danger" className=" btn-sm m-1">Less</Button>
            <Button color="success" className="btn-sm m-1">More</Button>
        </div>
    )
}

const Controls = props => {
    return (
        <div className="container ml-md-5" style={{ textAlign: 'center' }} >
            <Card style={{ margin: "30px 0", textAlign: "center" }} >
                <CardHeader style={{ backgroundColor: '#D70F64', color: "white" }}>
                    <h4>Add Ingredients</h4>
                </CardHeader>
                <CardBody>
                    {
                        controls.map(item => {
                            return <BuildControl label={item.label} type={item.type} key={Math.random()} />
                        })
                    }

                </CardBody>
                <CardFooter>Price BDT</CardFooter>
            </Card>
        </div>
    )
}

export default Controls;