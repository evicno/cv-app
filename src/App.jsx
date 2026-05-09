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
  const [educFormDisabled, setEducFormDisabled] = useState(true);
  const [editingEducId, setEditingEducId] = useState(null);

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
  const [profFormDisabled, setProfFormDisabled] = useState(true);
  const [editingProfId, setEditingProfId] = useState(null);

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

  function toggleEducForm() {
    setEducFormDisabled(!educFormDisabled);
  }

  function toggleEducationVisibility(id) {
    const newEduc = education.map((educ) =>
      educ.id === id ? { ...educ, isVisible: !educ.isVisible } : educ,
    );
    setEducation(newEduc);
  }

  function editEducation(id) {
    const educToEdit = education.find((educ) => educ.id === id);
    setCurrentEducation(educToEdit);
    setEditingEducId(id);
    toggleEducForm();
  }

  function submitEditEducation() {
    const educToEdit = education.map((educ) =>
      educ.id === editingEducId ? currentEducation : educ,
    );
    setEducation(educToEdit);
    clearCurrentEducation();
    setEditingEducId(null);
  }

  function deleteEducation(id) {
    const newEduc = education.filter((educ) => educ.id != id);
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

  function toggleProfForm() {
    setProfFormDisabled(!profFormDisabled);
  }

  function toggleProfessionVisibility(id) {
    const newProf = professional.map((prof) =>
      prof.id === id ? { ...prof, isVisible: !prof.isVisible } : prof,
    );
    setProfessional(newProf);
  }

  function editProfession(id) {
    const profToEdit = professional.find((prof) => prof.id === id);
    setCurrentProfession(profToEdit);
    setEditingProfId(id);
    toggleProfForm();
  }

  function submitEditProfession() {
    const profToEdit = professional.map((prof) =>
      prof.id === editingProfId ? currentProfession : prof,
    );
    setProfessional(profToEdit);
    clearCurrentProfession();
    setEditingProfId(null);
  }

  function deleteProfession(id) {
    const newProf = professional.filter((prof) => prof.id != id);
    setProfessional(newProf);
  }

  return (
    <div className="main">
      <div className="form-container">
        <PersonalForm onPersonalChange={handlePersonalUpdate} />
        <EducationForm
          education={education}
          currentEducation={currentEducation}
          toggleEducForm={toggleEducForm}
          educFormDisabled={educFormDisabled}
          addEducation={handleCurrentEducation}
          addNewEducation={addNewEducation}
          clearCurrentEducation={clearCurrentEducation}
          toggleEducationVisibility={toggleEducationVisibility}
          editEducation={editEducation}
          editingEducId={editingEducId}
          setEditingEducId={setEditingEducId}
          submitEditEducation={submitEditEducation}
          deleteEducation={deleteEducation}
        />
        <ProfessionalForm
          professional={professional}
          currentProfession={currentProfession}
          toggleProfForm={toggleProfForm}
          profFormDisabled={profFormDisabled}
          addProfession={handleCurrentProfession}
          addNewProfession={addNewProfession}
          clearCurrentProfession={clearCurrentProfession}
          toggleProfessionVisibility={toggleProfessionVisibility}
          editProfession={editProfession}
          editingProfId={editingProfId}
          setEditingProfId={setEditingProfId}
          submitEditProfession={submitEditProfession}
          deleteProfession={deleteProfession}
        />
      </div>
      <div className="cv-container">
        <Cv
          personalInfo={personalInfo}
          education={education}
          currentEducation={currentEducation}
          editingEducId={editingEducId}
          professional={professional}
          currentProfession={currentProfession}
          editingProfId={editingProfId}
        />
      </div>
    </div>
  );
}

export default App;
