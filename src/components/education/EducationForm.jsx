import { useState } from 'react';

import '../../styles/Form.css';

import AddEducationForm from './AddEducationForm';
import Button from '../form/Button';

function EducationForm({
  // education,
  currentEducation,
  addEducation,
  addNewEducation,
  clearCurrentEducation,
}) {
  const [formDisabled, setFormDisabled] = useState(true);

  function toggleForm() {
    setFormDisabled(!formDisabled);
  }

  return (
    <fieldset className="education">
      <legend>Formations</legend>
      {formDisabled ? (
        <div className="buttons">
          <Button
            name="addEducation"
            text="Ajouter une formation"
            onClick={toggleForm}
          />
        </div>
      ) : (
        <AddEducationForm
          addEducation={addEducation}
          addNewEducation={addNewEducation}
          currentEducation={currentEducation}
          toggleForm={toggleForm}
          clearCurrentEducation={clearCurrentEducation}
        />
      )}
    </fieldset>
  );
}

export default EducationForm;
