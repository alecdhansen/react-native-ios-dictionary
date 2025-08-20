# react-native-dictionary-ios

Access the native iOS dictionary in React Native.

**iOS only** - No Android implementation included, won't affect Android builds.

## Installation

```bash
# npm
npm install react-native-dictionary-ios

# yarn
yarn add react-native-dictionary-ios

# Install iOS dependencies
cd ios && pod install
```

## Usage

```typescript
import IOSDictionary from 'react-native-dictionary-ios';

// Show dictionary for a word
await IOSDictionary.showDefinition('example');

// Check if a word exists
const result = await IOSDictionary.checkIfTermExists('hello');
console.log(result.exists); // true or false

// Check if dictionary is available
const available = await IOSDictionary.isDictionaryAvailable();
```

## API

| Method | Returns | Description |
|--------|---------|-------------|
| `showDefinition(term: string)` | `Promise<{success: boolean, term: string}>` | Shows the iOS dictionary view for a word |
| `checkIfTermExists(term: string)` | `Promise<{exists: boolean, term: string}>` | Checks if a word has a definition |
| `isDictionaryAvailable()` | `Promise<boolean>` | Checks if dictionary service is available |

## Requirements

- iOS 11.0+
- React Native 0.60+
- Dictionary must be downloaded on device (Settings > General > Dictionary)

## License

MIT
