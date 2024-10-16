import React, { useState } from "react";
import { View, Button, Platform, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  // Function to handle the date change
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios"); // For Android, close picker after selecting
    setDate(currentDate); // Update the date state
  };

  // Function to show the date picker
  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View>
      <View>
        <Button onPress={showDatepicker} title="Show Date Picker" />
      </View>
      <Text>Selected Date: {date.toLocaleDateString()}</Text>
      {show && (
        <DateTimePicker
          value={date} // Initial date value
          mode="date" // Can be "date", "time", or "datetime"
          display="default" // Can be "default", "spinner", "calendar", etc.
          onChange={onChange} // Handle change
        />
      )}
    </View>
  );
};

export default DatePicker;
