import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    render() {
        return (
            <>
                <header className="vcard">
                    <h1 className="fn">Bipon Biswas</h1>
                    <h2 className="role">Front-End Developer &amp; Web Designer</h2>
                    <ul className="contact">
                        <li className="email">bipon770@gmail.com</li>
                        <li className="tel">+8801920835077</li>
                        <li className="url"><a href="http://www.bipon.me" title="Bipon Biswas Website">http://www.bipon.me</a></li>
                        <li className="adr"><span className="locality">Dkaka</span>, <span className="country-name">Bangladesh</span></li>
                        <li className="url twitter">@bipon68</li>
                    </ul>
                </header>
            </>
        )
    }
}
