import '../../styles/Form.css';
import InputField from '../form/InputField';

function PersonalForm({ onPersonalChange }) {
  return (
    <fieldset className="general">
      <legend>Information Personnelles</legend>
      <ul>
        <InputField
          type={'text'}
          name="firstName"
          id="first-name"
          screen="Prénom"
          onChange={onPersonalChange}
        />
        <InputField
          type={'text'}
          name="lastName"
          id="last-name"
          screen="Nom"
          onChange={onPersonalChange}
        />
        <InputField
          type={'email'}
          name="email"
          id="email"
          screen="Email"
          onChange={onPersonalChange}
        />
        <InputField
          type={'phone'}
          name="phone"
          id="phone"
          screen="Téléphone"
          onChange={onPersonalChange}
        />
        <InputField
          type={'text'}
          name="address"
          id="address"
          screen="Adresse"
          onChange={onPersonalChange}
        />
        <InputField
          type={'phone'}
          name="zip"
          id="zip"
          screen="Code Postal"
          onChange={onPersonalChange}
        />
        <InputField
          type={'text'}
          name="city"
          id="city"
          screen="Ville"
          onChange={onPersonalChange}
        />
      </ul>
    </fieldset>
  );
}

export default PersonalForm;
