import { useState } from 'react';
import './Career.css';
import { IMaskInput } from 'react-imask';

const CareerPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [applying, setApplying] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const jobs = [
    { id: 1, title: 'Cashier', location: 'Tulsa', type: 'Part-Time', description: 'Handles customer transactions and ensures smooth operation.', requirements: 'Good communication skills.', salary: '$15/hour' },
    { id: 2, title: 'Short Cook', location: 'Edmond', type: 'Full-Time', description: 'Prepares food items in the kitchen.', requirements: 'Basic culinary skills.', salary: '$18/hour' },
    { id: 3, title: 'Waiter', location: 'Tulsa', type: 'Part-Time', description: 'Serves food and beverages to customers.', requirements: 'Friendly and attentive.', salary: '$14/hour' },
    { id: 4, title: 'Dishwasher', location: 'Oklahoma', type: 'Full-Time', description: 'Cleans dishes and kitchen equipment.', requirements: 'Attention to detail.', salary: '$13/hour' },
    { id: 5, title: 'Manager', location: 'Oklahoma', type: 'Full-Time', description: 'Oversees restaurant operations.', requirements: 'Leadership skills.', salary: '$40/hour' },
    { id: 6, title: 'Host', location: 'Edmond', type: 'Part-Time', description: 'Greets and seats customers.', requirements: 'Friendly and organized.', salary: '$12/hour' },
    { id: 7, title: 'Barista', location: 'Tulsa', type: 'Full-Time', description: 'Prepares and serves coffee and beverages.', requirements: 'Experience with coffee machines.', salary: '$16/hour' },
    { id: 8, title: 'Sous Chef', location: 'Oklahoma', type: 'Full-Time', description: 'Assists the head chef in the kitchen.', requirements: 'Advanced culinary skills.', salary: '$22/hour' },
    { id: 9, title: 'Janitor', location: 'Tulsa', type: 'Part-Time', description: 'Maintains cleanliness of the restaurant.', requirements: 'Attention to detail.', salary: '$12/hour' },
    { id: 10, title: 'Delivery Driver', location: 'Oklahoma', type: 'Full-Time', description: 'Delivers food to customers.', requirements: 'Valid driver’s license.', salary: '$17/hour' },
    { id: 11, title: 'Head Chef', location: 'Oklahoma', type: 'Full-Time', description: 'The head chef in the kitchen.', requirements: 'Advanced culinary skills and graduated from culinary school.', salary: '$35/hour' },
  ];

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (locationFilter ? job.location === locationFilter : true) &&
    (typeFilter ? job.type === typeFilter : true)
  );

  const handleViewJob = (job) => {
    setSelectedJob(job);
    setShowPopup(true);
    setApplying(false);
    setSubmitted(false);
    setFormData({ name: '', email: '', phone: '' });
  };

  const handleApplyNow = () => setApplying(true);

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedJob(null);
    setApplying(false);
    setSubmitted(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData(prev => ({ ...prev, phone: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally you would also validate or send data here
    setSubmitted(true);
  };

  return (
    <div className="career-page">
      <div className="intro">
        <h1>Careers at Swad</h1>
        <p>Join our team at Swad Farm-to-Table and be part of a mission to bring fresh, locally-sourced vegetarian food to the community.</p>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search jobs..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select className="dropdown" value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
          <option value="">All Locations</option>
          <option value="Edmond">Edmond</option>
          <option value="Oklahoma">Oklahoma</option>
          <option value="Tulsa">Tulsa</option>
        </select>
        <select className="dropdown" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
          <option value="">All Types</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
        </select>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Type</th>
              <th>Salary</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map(job => (
              <tr key={job.id}>
                <td>{job.title}</td>
                <td>{job.type}</td>
                <td>{job.salary}</td>
                <td>{job.location}</td>
                <td><button onClick={() => handleViewJob(job)}>View Job</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showPopup && selectedJob && (
        <div className="popup-wrapper">
          <div className="popup-container">
            <button className="popup-close" onClick={handleClosePopup}>×</button>
            {!applying ? (
              <>
                <h2>{selectedJob.title}</h2>
                <p>{selectedJob.description}</p>
                <h3>Requirements:</h3>
                <p>{selectedJob.requirements}</p>
                <h3>Salary:</h3>
                <p>{selectedJob.salary}</p>
                <button className="apply-button" onClick={handleApplyNow}>Apply Now</button>
              </>
            ) : submitted ? (
              <div>
                <h2>Application Submitted</h2>
                <p>Thank you for applying for the {selectedJob.title} position. We will review your application and get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="application-form">
                <h2>Application</h2>
                <p>Applying for: {selectedJob.title}</p>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <IMaskInput
                  mask="+{1} (000) 000-0000"
                  name="phone"
                  value={formData.phone}
                  onAccept={handlePhoneChange}
                  placeholder="+1 (___) ___-____"
                  required
                  style={{ width: '90%' }}
                />
                <button type="submit" className="apply-submit-button">Submit</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerPage;
