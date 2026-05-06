import '../../styles/Cv.css';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

function EducationCvItem({ data }) {
  const startDate = data.schoolStart;
  const endDate = data.schoolEnd;

  return (
    <div className="formation">
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
      <div className="school">{data.school}</div>
      <div className="location">{data.location}</div>
      <div className="degree">{data.degree}</div>
    </div>
  );
}

export default EducationCvItem;
