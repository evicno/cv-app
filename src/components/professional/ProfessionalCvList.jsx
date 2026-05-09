import '../../styles/Cv.css';
import ProfessionalCvItem from './ProfessionalCvItem';

function ProfessionalCvList({
  professional,
  editingProfId,
  currentProfession,
}) {
  const listProfessions = professional
    .filter((prof) => prof.isVisible)
    .map((prof) =>
      editingProfId === prof.id ? (
        <ProfessionalCvItem
          data={currentProfession}
          key={currentProfession.id}
        />
      ) : (
        <ProfessionalCvItem data={prof} key={prof.id} />
      ),
    );
  return <>{listProfessions}</>;
}

export default ProfessionalCvList;
