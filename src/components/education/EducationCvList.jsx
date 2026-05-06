import '../../styles/Form.css';
import EducationCvItem from './EducationCvItem';

function EducationCvList({ education }) {
  const listEducations = education
    .filter((edu) => edu.isVisible)
    .map((edu) => <EducationCvItem data={edu} key={edu.id} />);
  return <>{listEducations}</>;
}

export default EducationCvList;
