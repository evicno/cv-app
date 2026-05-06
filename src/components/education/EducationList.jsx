import '../../styles/Form.css';
import EducationItem from './EducationItem';

function EducationList({ education }) {
  const listEducations = education.map((edu) => (
    <>
      <EducationItem data={edu} key={edu.id} />
    </>
  ));
  return <>{listEducations}</>;
}

export default EducationList;
