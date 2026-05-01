import '../../styles/Form.css';
import InputField from '../form/InputField';
import Button from '../form/Button';

function EducationForm() {
  return (
    <fieldset className="education">
      <legend>Formation</legend>
      <ul>
        <InputField
          type={'text'}
          name="school"
          id="school"
          screen="Établissement"
        />
        <InputField type={'text'} name="degree" id="degree" screen="Diplôme" />
        <InputField
          type={'date'}
          name="schoolStart"
          id="school-start"
          screen="Date de début"
        />
        <InputField
          type={'date'}
          name="schoolEnd"
          id="school-end"
          screen="Date de fin"
        />
        <InputField
          type={'text'}
          name="location"
          id="location"
          screen="Ville"
        />
      </ul>
      <div className="buttons">
        <Button type="reset" name="resetEducation" text="Annuler" />
        <Button type="submit" name="submitEducation" text="Ajouter" />
      </div>
    </fieldset>
  );
}

export default EducationForm;
