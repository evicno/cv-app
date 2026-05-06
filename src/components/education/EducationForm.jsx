import { useState } from 'react';

import '../../styles/Form.css';

import AddEducationForm from './AddEducationForm';
import Button from '../form/Button';
import EducationFormList from './EducationFormList';

function EducationForm({
  education,
  currentEducation,
  addEducation,
  addNewEducation,
  clearCurrentEducation,
  toggleEducationVisibility,
}) {
  const [formDisabled, setFormDisabled] = useState(true);

  function toggleForm() {
    setFormDisabled(!formDisabled);
  }

  return (
    <fieldset className="education">
      <legend>Formations</legend>
      <EducationFormList
        education={education}
        toggleEducationVisibility={toggleEducationVisibility}
      />
      {formDisabled ? (
        <div className="buttons">
          <Button
            type="button"
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
