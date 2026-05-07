import { useState } from 'react';

import '../../styles/Form.css';

import AddProfessionalForm from './AddProfessionalForm';
import Button from '../form/Button';
import ProfessionalFormList from './ProfessionalFormList';

function ProfessionalForm({
  professional,
  currentProfession,
  addProfession,
  addNewProfession,
  clearCurrentProfession,
  toggleProfessionVisibility,
}) {
  const [formDisabled, setFormDisabled] = useState(true);

  function toggleForm() {
    setFormDisabled(!formDisabled);
  }
  return (
    <fieldset className="professional">
      <legend>Expériences Professionnelles</legend>
      {formDisabled ? (
        <>
          <ProfessionalFormList
            professional={professional}
            toggleProfessionVisibility={toggleProfessionVisibility}
          />
          <div className="buttons">
            <Button
              type="button"
              name="addProfession"
              text="Ajouter une expérience professionnelle"
              onClick={toggleForm}
            />
          </div>
        </>
      ) : (
        <AddProfessionalForm
          addProfession={addProfession}
          addNewProfession={addNewProfession}
          currentProfession={currentProfession}
          toggleForm={toggleForm}
          clearCurrentProfession={clearCurrentProfession}
        />
      )}
    </fieldset>
  );
}

export default ProfessionalForm;
