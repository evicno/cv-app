import '../../styles/Cv.css';

import ProfessionalCvList from './ProfessionalCvList';
import ProfessionalCvItem from './ProfessionalCvItem';

function ProfessionalCv({ professional, currentProfession, editingProfId }) {
  return (
    <>
      {(professional.length > 0 ||
        currentProfession.company.trim() ||
        currentProfession.position.trim()) && (
        <h1>Expériences Professionnelles</h1>
      )}
      <ProfessionalCvList
        professional={professional}
        editingProfId={editingProfId}
        currentProfession={currentProfession}
      />
      {!editingProfId ? <ProfessionalCvItem data={currentProfession} /> : null}
    </>
  );
}

export default ProfessionalCv;
