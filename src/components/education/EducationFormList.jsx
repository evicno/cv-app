import '../../styles/Form.css';

import EducationFormItem from './EducationFormItem';

function EducationFormList({
  education,
  toggleEducationVisibility,
  editEducation,
  deleteEducation,
}) {
  const listEducations = education.map((edu) => (
    <EducationFormItem
      data={edu}
      key={edu.id}
      toggleEducationVisibility={toggleEducationVisibility}
      editEducation={editEducation}
      deleteEducation={deleteEducation}
    />
  ));
  return <>{listEducations}</>;
}

export default EducationFormList;
