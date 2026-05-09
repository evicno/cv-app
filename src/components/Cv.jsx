import '../styles/Cv.css';

import PersonalCv from './personal/PersonalCv';
import EducationCv from './education/EducationCv';
import ProfessionalCv from './professional/ProfessionalCv';

function Cv({
  personalInfo,
  education,
  currentEducation,
  editingEducId,
  addEducation,
  professional,
  currentProfession,
  addProfession,
}) {
  return (
    <>
      <div className="personal-cv">
        <PersonalCv personalInfo={personalInfo} />
      </div>
      <div className="experience-cv">
        <EducationCv
          education={education}
          currentEducation={currentEducation}
          editingEducId={editingEducId}
          addEducation={addEducation}
        />
        <ProfessionalCv
          professional={professional}
          currentProfession={currentProfession}
          addProfession={addProfession}
        />
      </div>
    </>
  );
}

export default Cv;
