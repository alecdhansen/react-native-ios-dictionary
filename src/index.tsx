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

interface IOSDictionaryInterface {
	/** Show the native iOS dictionary for a term */
	showDefinition(term: string): Promise<DictionaryResult>;
	/** Check if a term exists in the dictionary */
	checkIfTermExists(term: string): Promise<TermExistsResult>;
	/** Check if dictionary service is available */
	isDictionaryAvailable(): Promise<boolean>;
}

const IOSDictionary: IOSDictionaryInterface = {
	showDefinition: (t: string) => {
		if (Platform.OS !== 'ios') return Promise.reject(new Error('iOS only'));
		if (!RNIOSDictionary) return Promise.reject(new Error('Native module not linked'));
		if (!t) return Promise.reject(new Error('Term required'));
		return RNIOSDictionary.showDefinition(t);
	},
	checkIfTermExists: (t: string) => {
		if (Platform.OS !== 'ios') return Promise.reject(new Error('iOS only'));
		if (!RNIOSDictionary) return Promise.reject(new Error('Native module not linked'));
		if (!t) return Promise.reject(new Error('Term required'));
		return RNIOSDictionary.checkIfTermExists(t);
	},
	isDictionaryAvailable: () => {
		if (Platform.OS !== 'ios' || !RNIOSDictionary) return Promise.resolve(false);
		return RNIOSDictionary.isDictionaryAvailable();
	},
};

export default IOSDictionary;
