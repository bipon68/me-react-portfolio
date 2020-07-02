import React, { Component } from 'react';
import headerData from '../DemoData/Header/Header';

export default class HeaderComponent extends Component {
    render() {
        return (
            <>
                <header className="vcard">
                    <h1 className="fn">{headerData.name}</h1>
                    <h2 className="role">{headerData.role}</h2>
                    <ul className="contact">
                        <li className="email">{headerData.email}</li>
                        <li className="tel">+{headerData.phone}</li>
                        <li className="url"><a href="http://www.bipon.me" title="Bipon Biswas Website">{headerData.website}</a></li>
                        <li className="adr"><span className="locality">Dkaka</span>, <span className="country-name">{headerData.country}</span></li>
                        <li className="url twitter">{headerData.tuser}</li>
                    </ul>
                </header>
            </>
        )
    }
}
