import '../../styles/Cv.css';

import EducationItem from './EducationItem.jsx';
import EducationList from './EducationList.jsx';

function EducationCv({ education, currentEducation }) {
  return (
    <>
      {(education.length > 0 ||
        currentEducation.school.trim() ||
        currentEducation.degree.trim()) && <h1>Formations</h1>}
      <EducationList education={education} />
      <EducationItem data={currentEducation} />
    </>
  );
}

export default EducationCv;
