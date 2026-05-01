import '../../styles/Form.css';
import InputField from '../form/InputField';

function PersonalForm({ personalInfo, onPersonalChange }) {
  return (
    <fieldset className="general">
      <legend>Information Personnelles</legend>
      <ul>
        <InputField
          type={'text'}
          name="firstName"
          id="first-name"
          screen="Prénom"
          personalInfo={personalInfo}
          onPersonalChange={onPersonalChange}
        />
        <InputField
          type={'text'}
          name="lastName"
          id="last-,ame"
          screen="Nom"
          personalInfo={personalInfo}
          onPersonalChange={onPersonalChange}
        />
        <InputField
          type={'email'}
          name="email"
          id="email"
          screen="Email"
          personalInfo={personalInfo}
          onPersonalChange={onPersonalChange}
        />
        <InputField
          type={'text'}
          name="address"
          id="address"
          screen="Adresse"
          personalInfo={personalInfo}
          onPersonalChange={onPersonalChange}
        />
        <InputField
          type={'phone'}
          name="zip"
          id="zip"
          screen="Code Postal"
          personalInfo={personalInfo}
          onPersonalChange={onPersonalChange}
        />
        <InputField
          type={'text'}
          name="city"
          id="city"
          screen="Ville"
          personalInfo={personalInfo}
          onPersonalChange={onPersonalChange}
        />
      </ul>
    </fieldset>
  );
}

export default PersonalForm;
