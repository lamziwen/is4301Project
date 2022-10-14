

import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import './Admission.css';
var data = [{
    "id": "1",
    "description": "Understanding Admission requirements"
},
{
    "id": "2",
    "description": "Submit application online"
},
{
    "id": "3",
    "description": "Upload supporting documents"
},
{
    "id": "4",
    "description": "Make application fee payment"
},
{
    "id": "5",
    "description": "Check application status"
}]

export default class Admission extends Component {
    renderTimeline(element, index) {
        return (
            <li>{element.description}</li>
        )
    }
    render() {
        return (
            <div className='admission-background'>
                <h1 className='admission-centerContent'>Admission Timeline</h1>
                <div className="admission-center">
                    <ol  type='1'>
                        {data.map(this.renderTimeline)}
                    </ol>
                </div>

            </div>

        )
    }
}