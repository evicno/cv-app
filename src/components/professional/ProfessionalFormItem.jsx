import '../../styles/Form.css';
import visbilityOnIcon from '../../assets/visibility_on.svg';
import visbilityOffIcon from '../../assets/visibility_off.svg';
import Button from '../form/Button';

function ProfessionalFormItem({
  data,
  toggleProfessionVisibility,
  editProfession,
  deleteProfession,
}) {
  return (
    <div className="profession-item">
      <div className="profession-content">
        <div className="profession-titles" data-visible={data.isVisible}>
          <p className="company">{data.company}</p>
          <p className="position">{data.position}</p>
        </div>
        <p className="visible">
          <img
            src={data.isVisible ? visbilityOnIcon : visbilityOffIcon}
            alt={data.isVisible ? 'Visible' : 'Invisible'}
            onClick={() => toggleProfessionVisibility(data.id)}
          />
        </p>
      </div>
      <div className="form-buttons">
        <Button
          type="button"
          name="personal-edit"
          text="Éditer"
          onClick={() => editProfession(data.id)}
        />
        <Button
          type="button"
          name="personal-delete"
          text="Supprimer"
          onClick={() => deleteProfession(data.id)}
        />
      </div>
    </div>
  );
}
export default ProfessionalFormItem;
