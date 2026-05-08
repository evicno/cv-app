import '../../styles/Form.css';
import visbilityOnIcon from '../../assets/visibility_on.svg';
import visbilityOffIcon from '../../assets/visibility_off.svg';
import Button from '../form/Button';

function EducationFormItem({
  data,
  toggleEducationVisibility,
  editEducation,
  deleteEducation,
}) {
  return (
    <div className="formation-item">
      <div className="formation-content">
        <div className="formation-titles" data-visible={data.isVisible}>
          <p className="school">{data.school}</p>
          <p className="degree">{data.degree}</p>
        </div>

        <p className="visible">
          <img
            src={data.isVisible ? visbilityOnIcon : visbilityOffIcon}
            alt={data.isVisible ? 'Visible' : 'Invisible'}
            onClick={() => toggleEducationVisibility(data.id)}
          />
        </p>
      </div>
      <div className="form-buttons">
        <Button
          type="button"
          name="personal-edit"
          text="Éditer"
          onClick={() => editEducation(data.id)}
        />
        <Button
          type="button"
          name="personal-delete"
          text="Supprimer"
          onClick={() => deleteEducation(data.id)}
        />
      </div>
    </div>
  );
}

export default EducationFormItem;
