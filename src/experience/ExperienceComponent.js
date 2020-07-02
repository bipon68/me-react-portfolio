import React, { Component } from 'react'

export default class ExperienceComponent extends Component {
    render() {
        return (
            <>
              <section id="experience">
                <h1>Work Experience</h1>
                <article>
                    <h1><a href="http://www.bipon.me" title="Bipon Biswas">bipon.me</a> <span>Freelancer/Worldwide</span></h1>
                    <h2>Front-End Developer, Web Designer</h2>
                    <time datetime="2011-07-01" className="start">July 2011</time>
                    <span className="end">Present</span>
                    <p>
                        Working for several companies across the globe on a variety of areas as real estate, education counseling and online ticket selling.<br />
                        Most projects started as wireframes done with Balsamiq Mockups which later became full Photoshop comps.<br />
                        Front-end development using latest HTML5 and CSS3 techniques, backed by jQuery script to enable optimum user experience throughout the site.<br />
                        Wordpress used as a blog and as a full CMS: hand crafted themes, custom fields and menus to enable maximum adaptation for the customer and yet keeping it easy to use.<br />
                        Razor (Asp.Net) integration on custom built CMS (4pm.ie).
                    </p>            
                </article>

                <article>
                    <h1><a href="http://www.3yz.com.br" title="3YZ">3YZ</a> <span>Brazil</span></h1>
                    <h2>Web Designer</h2>
                    <time datetime="2010-07-01" className="start">July 2010</time>
                    <time datetime="2011-05-01" className="end">May 2011</time>
                    <p>
                        Responsible for designing and coding internal pages for retail shop portal.<br />
                        E-mail marketing design and coding.<br />
                        Flash animation of banners.
                    </p>            
                </article>
                <article>
                    <h1><a href="http://www.4pm.ie" title="4PM">4PM</a> <span>Ireland</span></h1>
                    <h2>Web Designer</h2>
                    <time datetime="2008-05-01" className="start">May 2008</time>
                    <time datetime="2010-03-01" className="end">March 2010</time>
                    <p>
                        Spent 2 years living in Ireland as one of the main designers of the company, I was in charge of the design and front-end code of websites and web based systems.<br />
                        Attended meetings with clients and participated to initial project brainstorms.<br />
                        Also worked integrating designs into blog platforms (PHP), CMS and 4pm's in-house property interface (ASP.Net).<br />
                        After 2010, back in Brazil, continued working for them as a freelancer.
                    </p>            
                </article>
                <article>
                    <h1><a href="http://www.copernicus.com.br" title="Copernicus Web Design">Copernicus Web Design</a> <span>Brazil</span></h1>
                    <h2>Cofounder / Web Designer</h2>
                    <time datetime="2003-03-01" className="start">March 2003</time>
                    <time datetime="2008-05-01" className="end">May 2008</time>
                    <p>
                        Copernicus started as an idea to bring the web environment to the town of Carlos Barbosa and its neighbour cities. Internet was new back then and our main role as a digital agency was to introduce this new concept to the companies around us.<br />
                        As any small startup, my role was divided into several fields, like management, development and design. Later on focusing on design.<br />
                        Even though I am not directly connected to the company, I still provide design services & consultancy when needed.
                    </p>            
                </article>
            </section>  
            </>
        )
    }
}
