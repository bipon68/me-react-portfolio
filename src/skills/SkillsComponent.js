import React, { Component } from 'react';
import SkillsData from '../DemoData/Skills/Skills';

export default class SkillsComponent extends Component {
    render() {
        return (
            <>
               <section id="skills">
    	<h1>{SkillsData.skills.title}</h1>
        <dl>
        	<dt>{SkillsData.skills.design.title}</dt>
            {
              SkillsData.skills.design.list.map((item, i) => 
                <dd title={item.tooltip} key={i}>{item.title}</dd>
              )  
            }
            {/* <dd title="Design of websites on screen, tablets and mobiles">Web Design</dd>
            <dd title="Design of interfaces for apps and web based systems">User Interface Design</dd>
            <dd title="Sketching and wireframing using Balsamiq Mockup">Wireframing / Mockups</dd>
            <dd title="Turning mockups into comps">Photoshop</dd> */}

            <dt>{SkillsData.skills.frontEnd.title}</dt>
            {
              SkillsData.skills.frontEnd.list.map((item, i) => 
                <dd title={item.tooltip} key={i}>{item.title}</dd>
              ) 
            }
            
            {/* <dt>Front-End Development</dt>
            <dd title="Hyper Text Markup Language">HTML5</dd>
            <dd title="Cascading Style Sheets">CSS3</dd>
            <dd title="Front-end programming language">JavaScript</dd>
            <dd title="Javascript Library">jQuery</dd>
            <dd title="Ensuring website/app has usable experience on all platforms">Cross-browser Compatibility</dd>
            <dd title="Coding markup in an accessible, usable and semantic way, using best practices and avoiding proprietary rules.">Web Standards</dd> */}
            
            <dt>Back-end / Integration</dt>
            <dd title="PHP: Hypertext Preprocessor">PHP</dd>
            <dd title="PHP Based Blog Platform">Wordpress</dd>
            <dd title="MS Web Framework">Asp.Net</dd>
            <dd title="ASP.NET MVC 3 Engine">Razor</dd>
            
            <dt>Others</dt>
            <dd title="Visual Studio Source Control">TFS Version Control</dd>
            <dd title="Search Engine Optimization">SEO</dd>
            <dd title="Adobe's animation software">Flash (Timeline)</dd>            
        </dl>
    </section> 
            </>
        )
    }
}
