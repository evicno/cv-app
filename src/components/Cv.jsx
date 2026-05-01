import '../styles/Cv.css';
import PersonalCv from './personal/PersonalCv';

function Cv({ personalInfo }) {
  return (
    <div>
      <PersonalCv personalInfo={personalInfo} />
    </div>
  );
}

export default Cv;
