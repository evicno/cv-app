import '../../styles/Form.css';
import InputField from '../form/InputField';
import Button from '../form/Button';

function ProfessionalForm() {
  return (
    <fieldset className="professional">
      <legend>Expériences Professionnelles</legend>
      <ul>
        <InputField
          type={'text'}
          name="company"
          id="company"
          screen="Entreprise"
        />
        <InputField
          type={'text'}
          name="position"
          id="position"
          screen="Fonction"
        />
        <InputField
          type={'date'}
          name="jobStart"
          id="job-start"
          screen="Date de début"
        />
        <InputField
          type={'date'}
          name="jobEnd"
          id="job-end"
          screen="Date de fin"
        />
        <InputField
          type={'text'}
          name="jobLocation"
          id="job-location"
          screen="Ville"
        />
        <InputField
          type={'textarea'}
          name="description"
          id="description"
          screen="Description"
        />
      </ul>
      <div className="buttons">
        <Button type="button" name="resetJob" text="Annuler" />
        <Button type="submit" name="submitJob" text="Ajouter" />
      </div>
    </fieldset>
  );
}

export default ProfessionalForm;
