import '../../styles/Form.css';

import InputField from '../form/InputField';
import Button from '../form/Button';

function AddProfessionalForm({
  currentProfession,
  addProfession,
  addNewProfession,
  toggleForm,
  clearCurrentProfession,
}) {
  function resetForm() {
    toggleForm();
    clearCurrentProfession();
  }

  function addNewProfessionAndReset() {
    addNewProfession();
    resetForm();
  }
  return (
    <>
      <div className="professional-form">
        <ul>
          <InputField
            type={'text'}
            name="company"
            id="company"
            screen="Entreprise"
            value={currentProfession.company}
            onChange={addProfession}
          />
          <InputField
            type={'text'}
            name="position"
            id="position"
            screen="Fonction"
            value={currentProfession.position}
            onChange={addProfession}
          />
          <InputField
            type={'date'}
            name="jobStart"
            id="job-start"
            screen="Date de début"
            value={currentProfession.jobStart}
            onChange={addProfession}
          />
          <InputField
            type={'date'}
            name="jobEnd"
            id="job-end"
            screen="Date de fin"
            value={currentProfession.jobEnd}
            onChange={addProfession}
          />
          <InputField
            type={'text'}
            name="jobLocation"
            id="job-location"
            screen="Ville"
            value={currentProfession.jobLocation}
            onChange={addProfession}
          />
          <InputField
            type={'textarea'}
            name="description"
            id="description"
            screen="Description"
            value={currentProfession.description}
            onChange={addProfession}
          />
        </ul>
      </div>
      <div className="buttons">
        <Button
          type="button"
          name="resetJob"
          text="Annuler"
          onClick={resetForm}
        />
        <Button
          type="submit"
          name="submitJob"
          text="Ajouter"
          onClick={addNewProfessionAndReset}
        />
      </div>
    </>
  );
}

export default AddProfessionalForm;
