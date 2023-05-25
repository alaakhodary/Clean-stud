import React, { useState } from "react";

import calender from "../../../assest/Date_range_duotone.svg";

const DateTimePicker: React.FC = () => {
  const [selectedDateTime, setSelectedDateTime] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const handleIconClick = () => {
    setShowPicker(true);
  };

  const handleDateTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDateTime(event.target.value);
  };

  const handleBlur = () => {
    setShowPicker(false);
  };

  return (
    <div className="mt-5 px-4">
      <label
        htmlFor="datetime-input"
        className="mb-2 block text-lg text-[#1D1D35]"
      >
        التاريخ و الوقت
      </label>
      <div className="relative">
        <input
          type={showPicker ? "datetime-local" : "text"}
          id="datetime-input"
          value={selectedDateTime}
          onChange={handleDateTimeChange}
          onBlur={handleBlur}
          placeholder="التاريخ والوقت"
          readOnly={!showPicker}
          className="w-[16rem] rounded-xl border-2 border-[#F2F2F2] px-3 py-3 outline-none"
        />
        {!showPicker && (
          <div className="absolute inset-y-0 right-[13rem] flex items-center px-2">
            <img
              src={calender}
              alt="calender"
              className="h-6 w-6 cursor-pointer text-[#CCD2E3]"
              onClick={handleIconClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DateTimePicker;
