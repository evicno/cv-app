import '../../styles/Cv.css';
import ProfessionalCvItem from './ProfessionalCvItem';

function ProfessionalCvList({ professional }) {
  const listProfessions = professional
    .filter((prof) => prof.isVisible)
    .map((prof) => <ProfessionalCvItem data={prof} key={prof.id} />);
  return <>{listProfessions}</>;
}

export default ProfessionalCvList;
