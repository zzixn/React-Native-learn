import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Svg, Path } from 'react-native-svg';

const CalendarButton = ({}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
    setShowCalendar(false); // 날짜를 선택하면 모달을 닫습니다.
  };

  const goToToday = () => {
    setSelectedDate(null); // 선택한 날짜 초기화하여 현재 날짜로 되돌아갑니다.
    setCurrentDate(new Date()); // 현재 날짜 업데이트
  };

  const goToPreviousDay = () => {
    const previousDate = new Date(selectedDate || currentDate);
    previousDate.setDate(previousDate.getDate() - 1);
    setSelectedDate(previousDate.toISOString().split('T')[0]);
  };
  
  const goToNextDay = () => {
    const nextDate = new Date(selectedDate || currentDate);
    nextDate.setDate(nextDate.getDate() + 1);
    setSelectedDate(nextDate.toISOString().split('T')[0]);
  };

  const formatCurrentDate = (date) => {
    const options = { month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Modal
        visible={showCalendar}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setShowCalendar(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowCalendar(false)}
        >
          <View style={styles.modalContent}>
            <Calendar
              onDayPress={(day) => handleDateSelect(day)}
              markedDates={{ [selectedDate]: { selected: true, marked: true } }}
            />
          </View>
        </TouchableOpacity>
      </Modal>
      <TouchableOpacity style={styles.todayButton} onPress={goToToday}>
        <Text style={styles.todayText}>Today</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={goToPreviousDay}>
        <Svg width="24" height="24" viewBox="0 0 24 24">
          <Path d="M15 6L9 12L15 18"></Path>
        </Svg>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setShowCalendar(true)}>
        <Text style={styles.buttonText}>
          {selectedDate ? formatCurrentDate(new Date(selectedDate)) : formatCurrentDate(currentDate)}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToNextDay}>
        <Svg width="24" height="24" viewBox="0 0 24 24">
          <Path d="M9 6L15 12L9 18"></Path>
        </Svg>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 20,
  },
  button: {
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  todayButton: {
    marginTop: 30,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  todayText: {
    fontSize: 20,
    color: '#515151',
    fontWeight: '800'
  },
  buttonText: {
    fontSize: 16,
    color: '#515151',
    fontWeight: '500'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignContent: 'center'
  }
});

export default CalendarButton;
