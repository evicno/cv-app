import '../../styles/Form.css';

import EducationFormItem from './EducationFormItem';

function EducationFormList({ education, toggleEducationVisibility }) {
  const listEducations = education.map((edu) => (
    <EducationFormItem
      data={edu}
      key={edu.id}
      toggleEducationVisibility={toggleEducationVisibility}
    />
  ));
  return <>{listEducations}</>;
}

export default EducationFormList;
