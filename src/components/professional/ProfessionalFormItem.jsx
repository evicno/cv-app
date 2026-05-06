import '../../styles/Form.css';
import visbilityOnIcon from '../../assets/visibility_on.svg';
import visbilityOffIcon from '../../assets/visibility_off.svg';

function ProfessionalFormItem({ data, toggleProfessionVisibility }) {
  return (
    <div className="profession-item">
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
  );
}
export default ProfessionalFormItem;
