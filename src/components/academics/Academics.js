

import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import './Academics.css';
var data = [{
    "id": "1",
    "code": "BT1101",
    "title": "Introduction to Business Analytics"
},
{
    "id": "2",
    "code": "BT2101",
    "title": "Econometrics Modelling for Business Analytics"
},
{
    "id": "3",
    "code": "BT2102",
    "title": "Data Management and Visualisation"
},
{
    "id": "4",
    "code": "BT2103",
    "title": "Optimization Methods in Business Analytics"
}]

export default class Academics extends Component {
    renderModule(module, index) {
        return (
            <tr key={index}>
                <td>{module.code}</td>
                <td>{module.title}</td>
            </tr>
        )
    }
    render() {
        return (
            <div className='academics-background'>
                <h1 className='academics-header'>Academics</h1>
                <Table striped condensed hover variant="dark">
                    <thead>
                        <tr>
                            <th>Module Code</th>
                            <th>Module Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(this.renderModule)}
                    </tbody>
                </Table>
            </div>

        )
    }
}