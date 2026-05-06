import '../../styles/Cv.css';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

function ProfessionalCvItem({ data }) {
  const startDate = data.jobStart;
  const endDate = data.jobEnd;
  return (
    <div className="profession">
      <div className="date">
        {startDate
          ? format(new Date(startDate), 'MMM yyyy', { locale: fr }) + ' - '
          : ''}
        {endDate
          ? format(new Date(endDate), 'MMM yyyy', { locale: fr })
          : startDate
            ? 'present'
            : ''}
      </div>
      <div className="company">{data.company}</div>
      <div className="location">{data.jobLocation}</div>
      <div className="position">{data.position}</div>
      <div className="description">{data.description}</div>
    </div>
  );
}

export default ProfessionalCvItem;
