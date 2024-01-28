// screens/BookingScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert,TouchableOpacity } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

const sampleTimeSlots = [
  { id: '1', time: '10:00 AM', date: '2024-01-26', available: true },
  { id: '2', time: '02:00 PM', date: '2024-01-26', available: false },
  { id: '3', time: '04:30 PM', date: '2024-01-26', available: true },
  // Add more time slots as needed
];

export default function BookingScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const timeSlotOptions = sampleTimeSlots
    .filter((slot) => slot.available)
    .map((slot) => `${slot.time} - ${slot.date}`);

  const handleSubmit = () => {
    if (!name || !email || !selectedTimeSlot) {
      Alert.alert('Error', 'Please fill in all fields.');
    } else {
      // Perform the actual submission logic here
      // For now, just display a confirmation message
      Alert.alert('Success', 'Booking submitted successfully!');
      // Reset form fields
      setName('');
      setEmail('');
      setSelectedTimeSlot(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Email:</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Text style={styles.label}>Preferred Time Slot:</Text>
      <ModalDropdown
        options={timeSlotOptions}
        onSelect={(index, value) => {
          const selectedSlot = sampleTimeSlots.find(
            (slot) => `${slot.time} - ${slot.date}` === value
          );
          setSelectedTimeSlot(selectedSlot);
        }}
        style={styles.dropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownContainer}
        dropdownTextStyle={styles.dropdownText}
        dropdownTextHighlightStyle={styles.dropdownTextHighlight}
      />
      
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit}
        
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  submitButton: {
    backgroundColor: 'blue',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 8,
  },
  dropdownContainer: {
    borderRadius: 8,
    marginTop: 2,
  },
  dropdownText: {
    fontSize: 16,
    color: 'black',
  },
  dropdownTextHighlight: {
    color: 'white',
  },
});
