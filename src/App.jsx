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

  function handlePersonalUpdate(e) {
    const name = e.target.name;
    const value = e.target.value;
    setPersonalInfo({ ...personalInfo, [name]: value });
  }

  return (
    <div>
      <div className="form">
        <PersonalForm
          personalInfo={personalInfo}
          onPersonalChange={handlePersonalUpdate}
        />
        <EducationForm />
        <ProfessionalForm />
      </div>
      <Cv personalInfo={personalInfo} />
    </div>
  );
}

export default App;
