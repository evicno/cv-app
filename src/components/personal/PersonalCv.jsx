import '../../styles/Cv.css';

function PersonalCv({ personalInfo }) {
  return (
    <div>
      <h1>
        {personalInfo.firstName} {personalInfo.lastName}
      </h1>
    </div>
  );
}

export default PersonalCv;
