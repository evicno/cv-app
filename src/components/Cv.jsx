import '../styles/Cv.css';
import PersonalCv from './personal/PersonalCv';

function Cv({ personalInfo }) {
  return (
    <div className="personal-cv">
      <PersonalCv personalInfo={personalInfo} />
    </div>
  );
}

export default Cv;
