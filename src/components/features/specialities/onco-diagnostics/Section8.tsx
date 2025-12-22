import React from 'react';
import section8 from './Section8.module.css';

const Section8 = () => {
  return (
    <div className={section8.section5Container}>
      <div className={section8.bookingSection}>
        <div className={section8.bookingLeft}>
          <h2 className={section8.bookingTitle}>Book Your ONCO Test</h2>

          <form className={section8.bookingForm}>
            <div className={section8.formRow}>
              <input
                type="text"
                placeholder="Your Name*"
                className={section8.formInput}
                required
              />
              <input
                type="email"
                placeholder="Email ID*"
                className={section8.formInput}
                required
              />
            </div>

            <div className={section8.formRow}>
              <input
                type="tel"
                placeholder="Phone Number*"
                className={section8.formInput}
                required
              />
              <select className={section8.formSelect} defaultValue="" required>
                <option value="" disabled>Type Of Scan</option>
                <option>Brain CT Scan</option>
                <option>Chest CT Scan</option>
                <option>Abdominal CT Scan</option>
                <option>Full Body CT Scan</option>
              </select>
            </div>

            <div className={section8.formRow}>
              <input
                type="date"
                placeholder="Date*"
                className={section8.formInput}
                required
              />
              <select className={section8.formSelect} defaultValue="" required>
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

            <button type="submit" className={section8.bookNowBtn}>
              Book Now
            </button>
          </form>
        </div>

        <div className={section8.bookingRight}>
        </div>
      </div>
    </div>
  );
};

export default Section8;
