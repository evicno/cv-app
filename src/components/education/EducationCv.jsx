import '../../styles/Cv.css';

import EducationCvItem from './EducationCvItem.jsx';
import EducationCvList from './EducationCvList.jsx';

function EducationCv({ education, currentEducation }) {
  return (
    <>
      {(education.length > 0 ||
        currentEducation.school.trim() ||
        currentEducation.degree.trim()) && <h1>Formations</h1>}
      <EducationCvList education={education} />
      <EducationCvItem data={currentEducation} />
    </>
  );
}

export default EducationCv;
