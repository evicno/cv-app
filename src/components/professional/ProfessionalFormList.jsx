import '../../styles/Form.css';

import ProfessionalFormItem from './ProfessionalFormItem';

function ProfessionalFormList({ professional, toggleProfessionVisibility }) {
  const listProfessions = professional.map((prof) => (
    <ProfessionalFormItem
      data={prof}
      key={prof.id}
      toggleProfessionVisibility={toggleProfessionVisibility}
    />
  ));
  return <>{listProfessions}</>;
}

export default ProfessionalFormList;
