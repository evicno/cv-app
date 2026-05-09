import '../../styles/Form.css';

import InputField from '../form/InputField';
import Button from '../form/Button';

function AddEducationForm({
  currentEducation,
  addEducation,
  addNewEducation,
  toggleEducForm,
  editingEducId,
  setEditingEducId,
  submitEditEducation,
  clearCurrentEducation,
}) {
  function resetForm() {
    toggleEducForm();
    clearCurrentEducation();
    setEditingEducId(null);
  }

  function addNewEducationAndReset() {
    addNewEducation();
    resetForm();
  }

  function submitEditEducationAndReset() {
    submitEditEducation();
    toggleEducForm();
  }
  return (
    <>
      <div className="education-form">
        <ul>
          <InputField
            type={'text'}
            name="school"
            id="school"
            screen="Établissement"
            value={currentEducation.school}
            onChange={addEducation}
          />
          <InputField
            type={'text'}
            name="degree"
            id="degree"
            screen="Diplôme"
            value={currentEducation.degree}
            onChange={addEducation}
          />
          <InputField
            type={'date'}
            name="schoolStart"
            id="school-start"
            screen="Date de début"
            value={currentEducation.schoolStart}
            onChange={addEducation}
          />
          <InputField
            type={'date'}
            name="schoolEnd"
            id="school-end"
            screen="Date de fin"
            value={currentEducation.schoolEnd}
            onChange={addEducation}
          />
          <InputField
            type={'text'}
            name="location"
            id="location"
            screen="Ville"
            value={currentEducation.location}
            onChange={addEducation}
          />
        </ul>
      </div>
      <div className="buttons">
        <Button
          type="button"
          name={editingEducId ? 'cancelEditEducation' : 'resetEducation'}
          text="Annuler"
          onClick={resetForm}
        />
        <Button
          type="submit"
          name={editingEducId ? 'submitEditEducation' : 'submitEducation'}
          text={editingEducId ? 'Enregistrer' : 'Ajouter'}
          onClick={
            editingEducId
              ? submitEditEducationAndReset
              : addNewEducationAndReset
          }
        />
      </div>
    </>
  );
}

export default AddEducationForm;
