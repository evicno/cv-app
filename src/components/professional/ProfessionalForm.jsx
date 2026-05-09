import '../../styles/Form.css';

import AddProfessionalForm from './AddProfessionalForm';
import Button from '../form/Button';
import ProfessionalFormList from './ProfessionalFormList';

function ProfessionalForm({
  professional,
  currentProfession,
  addProfession,
  addNewProfession,
  toggleProfForm,
  profFormDisabled,
  clearCurrentProfession,
  toggleProfessionVisibility,
  editProfession,
  editingProfId,
  setEditingProfId,
  submitEditProfession,
  deleteProfession,
}) {
  return (
    <fieldset className="professional">
      <legend>Expériences Professionnelles</legend>
      {profFormDisabled ? (
        <>
          <ProfessionalFormList
            professional={professional}
            toggleProfessionVisibility={toggleProfessionVisibility}
            editProfession={editProfession}
            deleteProfession={deleteProfession}
          />
          <div className="buttons">
            <Button
              type="button"
              name="addProfession"
              text="Ajouter une expérience professionnelle"
              onClick={toggleProfForm}
            />
          </div>
        </>
      ) : (
        <AddProfessionalForm
          addProfession={addProfession}
          addNewProfession={addNewProfession}
          currentProfession={currentProfession}
          toggleProfForm={toggleProfForm}
          profFormDisabled={profFormDisabled}
          editingProfId={editingProfId}
          setEditingProfId={setEditingProfId}
          submitEditProfession={submitEditProfession}
          clearCurrentProfession={clearCurrentProfession}
        />
      )}
    </fieldset>
  );
}

export default ProfessionalForm;
