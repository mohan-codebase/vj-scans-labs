'use client';

import React, { useState } from 'react';
import section8 from './Section8.module.css';
import { useBooking } from '@/context/BookingContext';

const Section8 = () => {
  const { openSuccessModal } = useBooking();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    scanType: '',
    timeSlot: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', date: '', scanType: '', timeSlot: '' });
      openSuccessModal();
      setTimeout(() => setStatus('idle'), 2000);
    }, 1500);
  };

  return (
    <div className={section8.section5Container}>
      <div className={section8.bookingSection}>
        <div className={section8.bookingLeft}>
          <h2 className={section8.bookingTitle}>Book Infectious Disease Test</h2>

          <form onSubmit={handleSubmit} className={section8.bookingForm}>
            <div className={section8.formRow}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name*"
                className={section8.formInput}
                required
                disabled={status === 'loading'}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email ID*"
                className={section8.formInput}
                required
                disabled={status === 'loading'}
              />
            </div>

            <div className={section8.formRow}>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number*"
                className={section8.formInput}
                required
                disabled={status === 'loading'}
              />
              <select name="scanType" value={formData.scanType} onChange={handleChange} className={section8.formSelect} required disabled={status === 'loading'}>
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
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="Date*"
                className={section8.formInput}
                required
                disabled={status === 'loading'}
              />
              <select name="timeSlot" value={formData.timeSlot} onChange={handleChange} className={section8.formSelect} required disabled={status === 'loading'}>
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

            <button type="submit" className={section8.bookNowBtn} disabled={status === 'loading'}>
              {status === 'loading' ? 'Booking...' : 'Book Now'}
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
