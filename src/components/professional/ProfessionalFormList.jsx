import '../../styles/Form.css';

import ProfessionalFormItem from './ProfessionalFormItem';

function ProfessionalFormList({
  professional,
  toggleProfessionVisibility,
  editProfession,
  deleteProfession,
}) {
  const listProfessions = professional.map((prof) => (
    <ProfessionalFormItem
      data={prof}
      key={prof.id}
      toggleProfessionVisibility={toggleProfessionVisibility}
      editProfession={editProfession}
      deleteProfession={deleteProfession}
    />
  ));
  return <>{listProfessions}</>;
}

export default ProfessionalFormList;
