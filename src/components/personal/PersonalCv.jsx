import '../../styles/Cv.css';
import emailIcon from '../../assets/email-icon.svg';
import phoneIcon from '../../assets/phone-icon.svg';
import locationIcon from '../../assets/location-icon.svg';

function PersonalCv({ personalInfo }) {
  return (
    <>
      <h1>
        {personalInfo.firstName} {personalInfo.lastName}
      </h1>
      <div className="contact">
        {personalInfo.email && (
          <p className="email">
            <img src={emailIcon} alt="Email" /> {personalInfo.email}
          </p>
        )}
        {personalInfo.phone && (
          <p className="phone">
            <img src={phoneIcon} alt="Phone" /> {personalInfo.phone}
          </p>
        )}
        {(personalInfo.address || personalInfo.zip || personalInfo.city) && (
          <p className="location">
            <img src={locationIcon} alt="Location" /> {personalInfo.address}
            <br /> {personalInfo.zip} {personalInfo.city}
          </p>
        )}
      </div>
    </>
  );
}

export default PersonalCv;
