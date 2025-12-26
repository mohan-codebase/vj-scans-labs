import React from 'react';
import section5 from './Section5.module.css';

const Section5 = () => {
  return (
    <div className={section5.section5Container}>
      <div className={section5.bookingSection}>
        <div className={section5.bookingLeft}>
          <h2 className={section5.bookingTitle}>Book Your CT Scan</h2>

          <form className={section5.bookingForm}>
            <div className={section5.formRow}>
              <input
                type="text"
                placeholder="Your Name*"
                className={section5.formInput}
                required
              />
              <input
                type="email"
                placeholder="Email ID*"
                className={section5.formInput}
                required
              />
            </div>

            <div className={section5.formRow}>
              <input
                type="tel"
                placeholder="Phone Number*"
                className={section5.formInput}
                required
              />
              <select className={section5.formSelect} defaultValue="" required>
                <option value="" disabled>Type Of Scan</option>
                <option>Brain CT Scan</option>
                <option>Chest CT Scan</option>
                <option>Abdominal CT Scan</option>
                <option>Full Body CT Scan</option>
              </select>
            </div>

            <div className={section5.formRow}>
              <input
                type="date"
                placeholder="Date*"
                className={section5.formInput}
                required
              />
              <select className={section5.formSelect} defaultValue="" required>
                <option value="" disabled>Time Slot*</option>
                <option>09:00 AM - 10:00 AM</option>
                <option>10:00 AM - 11:00 AM</option>
                <option>11:00 AM - 12:00 PM</option>
                <option>12:00 PM - 01:00 PM</option>
                <option>02:00 PM - 03:00 PM</option>
                <option>03:00 PM - 04:00 PM</option>
                <option>04:00 PM - 05:00 PM</option>
              </select>
            </div>

            <button type="submit" className={section5.bookNowBtn}>
              Book Now
            </button>
          </form>
        </div>

        <div className={section5.bookingRight}>
        </div>
      </div>
    </div>
  );
};

export default Section5;
