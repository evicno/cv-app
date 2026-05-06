import '../styles/Cv.css';
import PersonalCv from './personal/PersonalCv';
import EducationCv from './education/EducationCv';

function Cv({ personalInfo, education, currentEducation, addEducation }) {
  return (
    <>
      <div className="personal-cv">
        <PersonalCv personalInfo={personalInfo} />
      </div>
      <div className="experience-cv">
        <EducationCv
          education={education}
          currentEducation={currentEducation}
          addEducation={addEducation}
        />
      </div>
    </>
  );
}

export default Cv;
