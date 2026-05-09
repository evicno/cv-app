import '../../styles/Form.css';
import EducationCvItem from './EducationCvItem';

function EducationCvList({ education, editingEducId, currentEducation }) {
  const listEducations = education
    .filter((edu) => edu.isVisible)
    .map((edu) =>
      editingEducId === edu.id ? (
        <EducationCvItem data={currentEducation} key={currentEducation.id} />
      ) : (
        <EducationCvItem data={edu} key={edu.id} />
      ),
    );
  return <>{listEducations}</>;
}

export default EducationCvList;
