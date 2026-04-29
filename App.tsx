import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LandingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
      <Text style={styles.subtitle}>GIT Assignment 2</Text>
      <Text style={styles.profileName}>Name : Olugbodi Ayomide</Text>
      <Text style={styles.studentId}>Matric : RUN/CYB/22/13123</Text>
      <Text style={styles.department}>Department : Cyber Security</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0c29',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
    textAlign: 'center',
  },
  profileName: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 12,
  },
  studentId: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 12,
  },
  department: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 12,
  },
});