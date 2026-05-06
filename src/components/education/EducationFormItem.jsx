import '../../styles/Form.css';
import visbilityOnIcon from '../../assets/visibility_on.svg';
import visbilityOffIcon from '../../assets/visibility_off.svg';

function EducationFormItem({ data, toggleEducationVisibility }) {
  return (
    <div className="formation-item">
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
  );
}

export default EducationFormItem;
