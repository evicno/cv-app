import { useState } from 'react';
import './styles/App.css';
import PersonalForm from './components/personal/PersonalForm.jsx';
import EducationForm from './components/education/EducationForm.jsx';
import ProfessionalForm from './components/professional/ProfessionalForm.jsx';
import Cv from './components/Cv.jsx';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    zip: '',
    city: '',
  });

  const [education, setEducation] = useState([]);
  const [currentEducation, setCurrentEducation] = useState({
    school: '',
    degree: '',
    schoolStart: '',
    schoolEnd: '',
    location: '',
  });

  function handlePersonalUpdate(e) {
    const name = e.target.name;
    const value = e.target.value;
    setPersonalInfo({ ...personalInfo, [name]: value });
  }

  function handleCurrentEducation(e) {
    const name = e.target.name;
    const value = e.target.value;
    setCurrentEducation({ ...currentEducation, [name]: value });
  }

  function clearCurrentEducation() {
    setCurrentEducation({
      school: '',
      degree: '',
      schoolStart: '',
      schoolEnd: '',
      location: '',
    });
  }

  function addNewEducation() {
    setEducation([
      ...education,
      { ...currentEducation, id: crypto.randomUUID() },
    ]);
    clearCurrentEducation();
  }

  return (
    <div className="main">
      <div className="form-container">
        <PersonalForm onPersonalChange={handlePersonalUpdate} />
        <EducationForm
          education={education}
          currentEducation={currentEducation}
          addEducation={handleCurrentEducation}
          addNewEducation={addNewEducation}
          clearCurrentEducation={clearCurrentEducation}
        />
        <ProfessionalForm />
      </div>
      <div className="cv-container">
        <Cv
          personalInfo={personalInfo}
          education={education}
          currentEducation={currentEducation}
        />
      </div>
    </div>
  );
}

export default App;
