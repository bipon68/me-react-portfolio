import React, { Component } from 'react';
import summartData from '../DemoData/Summary/Summary';

export default class SummaryComponent extends Component {
    render() {
        return (
            <>
                <section id="summary">
                    <h1>{summartData.summaryTitle}</h1>
                    <p>{summartData.initialTitle}</p>
                    <p>{summartData.focusTitle}</p>
                    <p>{summartData.educationTitle}</p>    	
                </section>
            </>
        )
    }
}
