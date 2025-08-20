import { NativeModules, Platform } from 'react-native';

const { RNIOSDictionary } = NativeModules;

export interface DictionaryResult {
  success: boolean;
  term: string;
}

export interface TermExistsResult {
  exists: boolean;
  term: string;
}

export interface IOSDictionaryInterface {
  /** Show the native iOS dictionary for a term */
  showDefinition(term: string): Promise<DictionaryResult>;
  /** Check if a term exists in the dictionary */
  checkIfTermExists(term: string): Promise<TermExistsResult>;
  /** Check if dictionary service is available */
  isDictionaryAvailable(): Promise<boolean>;
}

/** Show the native iOS dictionary for a term */
export const showDefinition = (term: string): Promise<DictionaryResult> => {
  if (Platform.OS !== 'ios') return Promise.reject(new Error('iOS only'));
  if (!RNIOSDictionary) return Promise.reject(new Error('Native module not linked'));
  if (!term) return Promise.reject(new Error('Term required'));
  return RNIOSDictionary.showDefinition(term);
};

/** Check if a term exists in the dictionary */
export const checkIfTermExists = (term: string): Promise<TermExistsResult> => {
  if (Platform.OS !== 'ios') return Promise.reject(new Error('iOS only'));
  if (!RNIOSDictionary) return Promise.reject(new Error('Native module not linked'));
  if (!term) return Promise.reject(new Error('Term required'));
  return RNIOSDictionary.checkIfTermExists(term);
};

/** Check if dictionary service is available */
export const isDictionaryAvailable = (): Promise<boolean> => {
  if (Platform.OS !== 'ios' || !RNIOSDictionary) return Promise.resolve(false);
  return RNIOSDictionary.isDictionaryAvailable();
};

const Dictionary: IOSDictionaryInterface = {
  showDefinition,
  checkIfTermExists,
  isDictionaryAvailable,
};

export default Dictionary;
