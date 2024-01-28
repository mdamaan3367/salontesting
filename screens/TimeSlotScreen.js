// screens/TimeSlotScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const sampleTimeSlots = [
  { id: '1', time: '10:00 AM', date: '2024-01-26', available: true },
  { id: '2', time: '02:00 PM', date: '2024-01-26', available: false },
  { id: '3', time: '04:30 PM', date: '2024-01-26', available: true },
  // Add more time slots as needed
];

export default function TimeSlotScreen({ navigation }) {
  const [timeSlots, setTimeSlots] = useState(sampleTimeSlots);

  const handleSlotPress = (id) => {
    const updatedTimeSlots = timeSlots.map((slot) =>
      slot.id === id ? { ...slot, available: !slot.available } : slot
    );
    setTimeSlots(updatedTimeSlots);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={timeSlots}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.slot, { backgroundColor: item.available ? 'green' : 'red' }]}
            onPress={() => handleSlotPress(item.id)}
          >
            <Text style={styles.slotText}>{`${item.time} - ${item.date}`}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  slot: {
    marginVertical: 8,
    padding: 16,
    borderRadius: 8,
  },
  slotText: {
    color: 'white',
  },
});
