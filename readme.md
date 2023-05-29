# Mobile App - Random Quotes App

This is a React Native mobile app that generates random quotes. It fetches data from the [Quotable API](https://api.quotable.io/random) and displays a random quote along with its author. The user can click the "Next" button to fetch and display a new random quote.

## Installation

To run this app on your local machine, follow these steps:

1. Ensure you have Node.js and Yarn (a package manager) installed on your system.

2. Clone the repository or download the source code files to your local machine.

3. Open a terminal or command prompt and navigate to the project directory.

4. Run the following command to install the required dependencies:

   ```bash
   yarn install
5. Once the installation is complete, you can start the app using the following command: 
   ```bash
   yarn expo start
6. Install the Expo Go app on your mobile device from the App Store (for iOS) or Google Play Store (for Android).
7. Scan the QR code displayed in the terminal using the Expo Go app. This will launch the app on your mobile device.


## Usage

When you open the app on your mobile device, it will display a random quote along with the author's name. To generate a new random quote, simply tap the "Next" button. The app will fetch and display a new quote each time you tap the button.

## Dependencies

This app uses the following dependencies:

- `expo-status-bar`: A component provided by Expo to customize the status bar appearance.
- `react-native`: The core library for building React Native apps.
- `react`: The JavaScript library for building user interfaces.

These dependencies are automatically installed when you run `yarn install` as mentioned in the installation instructions.

## File Structure

- `App.js`: The main component of the app that fetches a random quote and renders the UI.
- `quote.js`: A reusable component that displays the quote and author's name along with a "Next" button.

## Credits

This app fetches random quotes from the Quotable API. The API provides a collection of quotes from various authors. You can find more information about the API at [https://api.quotable.io](https://api.quotable.io).

## License

This project is licensed under the MIT License. Feel free to modify and use the code for your own purposes.
