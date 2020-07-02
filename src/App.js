import React from 'react';
import './App.css';
import HeaderComponent from './header/HeaderComponent';
import SummaryComponent from './summary/SummaryComponent';
import SkillsComponent from './skills/SkillsComponent';
import ExperienceComponent from './experience/ExperienceComponent';
import EducationComponent from './education/EducationComponent';
import HobbiesComponent from './hobbies/HobbiesComponent';

function App() {
  return (
    <div className="App">
      
    <HeaderComponent></HeaderComponent>

	  <SummaryComponent></SummaryComponent>
    
    <SkillsComponent></SkillsComponent>
    
    <ExperienceComponent></ExperienceComponent>
    
    <EducationComponent></EducationComponent>

    <HobbiesComponent></HobbiesComponent>
    
    </div>
  );
}

export default App;
