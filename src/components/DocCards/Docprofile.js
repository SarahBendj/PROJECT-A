import Button from '../../UI/Button';
import './style.scss';

const DocProfile = () => {
  // Assume the nearest appointment date and time from the data source
  const nearestAppointment = '2023-08-15 10:00 AM';

  return (
    <div className="doctor-profile">
      {/* Doctor's details */}
      <h2 className='doc-name'>Dr. John Doe</h2>
      <p className='doc-specialty'>Specialty: Cardiologist</p>
      <p className='doc-contact'>Contact: johndoe@example.com</p>
      <p className='doc-description'>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

   
      <img src="/path/to/doctor-picture.jpg" alt="Dr. John Doe" />

      {/* Display the nearest appointment date and time */}
      <p className='nearest-appointment'>Nearest Appointment: {nearestAppointment}</p>

      {/* Link to the booking page */}
      <Button href="/booking">Book an Appointment</Button>
    </div>
  );
};

export default DocProfile;
