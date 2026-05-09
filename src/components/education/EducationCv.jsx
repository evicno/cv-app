import '../../styles/Cv.css';

import EducationCvList from './EducationCvList.jsx';
import EducationCvItem from './EducationCvItem.jsx';

function EducationCv({ education, currentEducation, editingEducId }) {
  return (
    <>
      {(education.length > 0 ||
        currentEducation.school.trim() ||
        currentEducation.degree.trim()) && <h1>Formations</h1>}
      <EducationCvList
        education={education}
        editingEducId={editingEducId}
        currentEducation={currentEducation}
      />
      {!editingEducId ? <EducationCvItem data={currentEducation} /> : null}
    </>
  );
}

export default EducationCv;
