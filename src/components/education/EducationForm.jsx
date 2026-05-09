import '../../styles/Form.css';

import AddEducationForm from './AddEducationForm';
import Button from '../form/Button';
import EducationFormList from './EducationFormList';

function EducationForm({
  education,
  currentEducation,
  addEducation,
  addNewEducation,
  toggleEducForm,
  educFormDisabled,
  clearCurrentEducation,
  toggleEducationVisibility,
  editEducation,
  editingEducId,
  setEditingEducId,
  submitEditEducation,
  deleteEducation,
}) {
  return (
    <fieldset className="education">
      <legend>Formations</legend>

      {educFormDisabled ? (
        <>
          <EducationFormList
            education={education}
            toggleEducationVisibility={toggleEducationVisibility}
            editEducation={editEducation}
            deleteEducation={deleteEducation}
          />
          <div className="buttons">
            <Button
              type="button"
              name="addEducation"
              text="Ajouter une formation"
              onClick={toggleEducForm}
            />
          </div>
        </>
      ) : (
        <AddEducationForm
          addEducation={addEducation}
          addNewEducation={addNewEducation}
          currentEducation={currentEducation}
          toggleEducForm={toggleEducForm}
          educFormDisabled={educFormDisabled}
          editingEducId={editingEducId}
          setEditingEducId={setEditingEducId}
          submitEditEducation={submitEditEducation}
          clearCurrentEducation={clearCurrentEducation}
        />
      )}
    </fieldset>
  );
}

export default EducationForm;
