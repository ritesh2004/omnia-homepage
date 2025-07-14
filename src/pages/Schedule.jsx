import React, { useState } from 'react';
import { FiCalendar, FiClock, FiGlobe, FiVideo, FiChevronRight } from 'react-icons/fi';

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [email, setEmail] = useState('');
  const [step, setStep] = useState('date');

  const daysInJuly = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const startingDayIndex = 2;

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM'
  ];

  const handleDateSelect = (day) => {
    setSelectedDate(day);
    setStep('time');
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setStep('confirm');
  };

  const handleConfirm = () => {
    if (!email) {
      alert('Please enter your email.');
      return;
    }
    alert(`✅ Meeting booked:\nDate: July ${selectedDate}, 2025\nTime: ${selectedTime}\nEmail: ${email}`);
    setSelectedDate(null);
    setSelectedTime(null);
    setEmail('');
    setStep('date');
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 text-white">
        <h1 className="text-2xl font-bold">Animesh Aman</h1>
        <div className="flex items-center mt-2">
          <FiClock className="mr-2" />
          <span className="font-medium">30 Minute Meeting</span>
        </div>
        <div className="flex items-center mt-1">
          <FiVideo className="mr-2" />
          <span className="text-sm">Web conferencing details provided upon confirmation</span>
        </div>
      </div>

      {/* Steps */}
      <div className="flex justify-between px-6 pt-6 pb-2 relative">
        <div className="flex flex-col items-center z-10">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step !== 'date' ? 'bg-blue-100 text-blue-600' : 'bg-blue-600 text-white'}`}>
            {step === 'date' ? <FiCalendar size={18} /> : <span>1</span>}
          </div>
          <span className={`text-xs mt-1 ${step === 'date' ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>Date</span>
        </div>
        <div className="flex flex-col items-center z-10">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 'confirm' ? 'bg-blue-600 text-white' : step === 'time' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
            {step === 'confirm' ? <span>2</span> : <FiClock size={18} />}
          </div>
          <span className={`text-xs mt-1 ${step !== 'date' ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>Time</span>
        </div>
        <div className="flex flex-col items-center z-10">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 'confirm' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className={`text-xs mt-1 ${step === 'confirm' ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>Confirm</span>
        </div>
        <div className="absolute top-10 left-16 right-16 h-1 bg-gray-200">
          <div className={`h-full bg-blue-500 transition-all duration-300 ${step === 'date' ? 'w-0' : step === 'time' ? 'w-1/2' : 'w-full'}`}></div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {step === 'date' && (
          <>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Select a Day</h3>
            <div className="mb-4 flex justify-between items-center">
              <p className="text-gray-700 font-medium">July 2025</p>
              <div className="flex items-center text-sm text-gray-500">
                <FiGlobe className="mr-1" />
                <span>India Standard Time (IST)</span>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 mb-2">
              {weekdays.map(day => (
                <div key={day} className="text-center text-xs font-medium text-gray-500 py-1">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: startingDayIndex }).map((_, i) => (
                <div key={`empty-${i}`} className="h-10"></div>
              ))}
              {daysInJuly.map(day => (
                <button
                  key={day}
                  onClick={() => handleDateSelect(day)}
                  className={`h-10 rounded-full flex items-center justify-center text-sm transition-colors ${
                    selectedDate === day
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 'time' && selectedDate && (
          <>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Select a Time</h3>
              <button 
                onClick={() => setStep('date')}
                className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
              >
                <FiChevronRight className="transform rotate-180 mr-1" />
                Change date
              </button>
            </div>
            <p className="text-gray-600 mb-4">Available times for July {selectedDate}, 2025</p>
            <div className="grid grid-cols-2 gap-3">
              {timeSlots.map(time => (
                <button
                  key={time}
                  onClick={() => handleTimeSelect(time)}
                  className={`py-3 px-4 rounded-lg border text-sm font-medium transition-colors ${
                    selectedTime === time
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 'confirm' && selectedDate && selectedTime && (
          <>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Confirm Your Meeting</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex justify-between mb-3">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium">July {selectedDate}, 2025</span>
              </div>
              <div className="flex justify-between mb-3">
                <span className="text-gray-600">Time:</span>
                <span className="font-medium">{selectedTime} (IST)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration:</span>
                <span className="font-medium">30 minutes</span>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="text-gray-700 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              onClick={handleConfirm}
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Confirm Booking
            </button>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-100">
        <p className="text-xs text-gray-400 text-center">
          By proceeding, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Schedule;
