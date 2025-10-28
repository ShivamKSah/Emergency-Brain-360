
import { Patient } from '../types';
import { patientData as initialSeedData } from '../data/patientData';

const DB_KEY = 'EMERGENCY_BRAIN_360_DB';

const getAllPatientsFromStorage = (): Patient[] => {
  try {
    const data = localStorage.getItem(DB_KEY);
    console.log('Raw data from localStorage:', data);
    const parsedData = data ? JSON.parse(data) : [];
    console.log('Parsed data from localStorage:', parsedData);
    return parsedData;
  } catch (e) {
    console.error('Error retrieving patients from localStorage:', e);
    return [];
  }
};

const saveAllPatientsToStorage = (patients: Patient[]): void => {
  try {
    console.log('Saving patients to localStorage:', patients);
    localStorage.setItem(DB_KEY, JSON.stringify(patients));
    console.log('Patients saved to localStorage');
  } catch (e) {
    console.error('Error saving patients to localStorage:', e);
  }
};

export const initializeDB = (): void => {
  try {
    if (localStorage.getItem(DB_KEY)) {
      console.log('DB already initialized');
      return;
    }
    console.log('Initializing DB with seed data');
    let currentTimestamp = Date.now();
    const seededPatients: Patient[] = initialSeedData.map((p: any, index: number) => ({
      ...p,
      id: index + 1,
      submission_timestamp: currentTimestamp - (initialSeedData.length - index) * 300000, // Stagger timestamps by 5 minutes
      status: 'ACTIVE',
    }));
    console.log('Seeded patients:', seededPatients);
    saveAllPatientsToStorage(seededPatients);
    console.log('DB initialized successfully');
  } catch (e) {
    console.error('Error initializing DB:', e);
  }
};

export const getAllPatients = (): Patient[] => {
  const patients = getAllPatientsFromStorage();
  console.log('Retrieved patients from storage:', patients);
  return patients.sort((a, b) => b.submission_timestamp - a.submission_timestamp);
};

export const getLatestActivePatients = (limit: number = 15): Patient[] => {
  const allPatients = getAllPatients();
  const activePatients = allPatients.filter(p => p.status === 'ACTIVE');
  console.log('Active patients:', activePatients);
  return activePatients.slice(0, limit);
};

export const getDischargedPatients = (): Patient[] => {
  const allPatients = getAllPatients();
  const dischargedPatients = allPatients.filter(p => p.status === 'DISCHARGED');
  console.log('Discharged patients:', dischargedPatients);
  return dischargedPatients;
};

export const insertPatient = (patientData: Omit<Patient, 'id' | 'submission_timestamp' | 'status'>): Patient => {
  const allPatients = getAllPatientsFromStorage();
  const newId = allPatients.length > 0 ? Math.max(...allPatients.map(p => p.id)) + 1 : 1;
  
  const newPatient: Patient = {
    ...patientData,
    id: newId,
    submission_timestamp: Date.now(),
    status: 'ACTIVE',
  };

  allPatients.push(newPatient);
  saveAllPatientsToStorage(allPatients);
  return newPatient;
};

export const updatePatientStatus = (id: number, newStatus: 'ACTIVE' | 'DISCHARGED'): void => {
  let allPatients = getAllPatientsFromStorage();
  const patientIndex = allPatients.findIndex(p => p.id === id);
  if (patientIndex !== -1) {
    allPatients[patientIndex].status = newStatus;
    saveAllPatientsToStorage(allPatients);
  }
};

export const getNextPatientId = (): string => {
  const totalPatients = getAllPatientsFromStorage().length;
  console.log('Total patients for ID generation:', totalPatients);
  return `P${(totalPatients + 1).toString().padStart(4, '0')}`;
};
