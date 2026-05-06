import { useState } from 'react';
import './styles/App.css';
import PersonalForm from './components/personal/PersonalForm.jsx';
import EducationForm from './components/education/EducationForm.jsx';
import ProfessionalForm from './components/professional/ProfessionalForm.jsx';
import Cv from './components/Cv.jsx';

function App() {
  // State variables for personal, education and professional data
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
    isVisible: true,
  });

  const [professional, setProfessional] = useState([]);
  const [currentProfession, setCurrentProfession] = useState({
    company: '',
    position: '',
    jobStart: '',
    jobEnd: '',
    description: '',
    jobLocation: '',
    isVisible: true,
  });

  // Function to update personal data
  function handlePersonalUpdate(e) {
    const name = e.target.name;
    const value = e.target.value;
    setPersonalInfo({ ...personalInfo, [name]: value });
  }

  // Functions related to Education data
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
      isVisible: true,
    });
  }

  function addNewEducation() {
    setEducation([
      ...education,
      { ...currentEducation, id: crypto.randomUUID() },
    ]);
    clearCurrentEducation();
  }

  function toggleEducationVisibility(id) {
    const newEduc = education.map((educ) =>
      educ.id === id ? { ...educ, isVisible: !educ.isVisible } : educ,
    );
    setEducation(newEduc);
  }

  // Functions related to Professional data
  function handleCurrentProfession(e) {
    const name = e.target.name;
    const value = e.target.value;
    setCurrentProfession({ ...currentProfession, [name]: value });
  }

  function clearCurrentProfession() {
    setCurrentProfession({
      company: '',
      position: '',
      jobStart: '',
      jobEnd: '',
      description: '',
      jobLocation: '',
      isVisible: true,
    });
  }

  function addNewProfession() {
    setProfessional([
      ...professional,
      { ...currentProfession, id: crypto.randomUUID() },
    ]);
    clearCurrentProfession();
  }

  function toggleProfessionVisibility(id) {
    const newProf = professional.map((prof) =>
      prof.id === id ? { ...prof, isVisible: !prof.isVisible } : prof,
    );
    setProfessional(newProf);
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
          toggleEducationVisibility={toggleEducationVisibility}
        />
        <ProfessionalForm
          professional={professional}
          currentProfession={currentProfession}
          addProfession={handleCurrentProfession}
          addNewProfession={addNewProfession}
          clearCurrentProfession={clearCurrentProfession}
          toggleProfessionVisibility={toggleProfessionVisibility}
        />
      </div>
      <div className="cv-container">
        <Cv
          personalInfo={personalInfo}
          education={education}
          currentEducation={currentEducation}
          professional={professional}
          currentProfession={currentProfession}
        />
      </div>
    </div>
  );
}

export default App;
