# Customer Portal App

A React application designed to display and manage customer information. This project includes features for viewing customer details and dynamically fetching and displaying photos associated with each customer.

## Features

- **Customer Details**: View detailed information about customers, including their name, title, and address.
- **Photo Gallery**: Fetch and display a grid of photos related to each customer. Photos are updated every 10 seconds.
- **Error Handling**: Gracefully handles errors when fetching photos, with user-friendly error messages.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Axios**: Promise-based HTTP client for making API requests.

## Project Structure

- **`components/`**: Contains reusable React components like `CustomerList` and `CustomerDetails`.
- **`hooks/`**: Custom React hooks such as `useFetchPhotos` for encapsulating logic.
- **`data/`**: Static data files, including `customers.json`.


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/customer-management-app.git
2. Navigate into the project directory:
   ```bash
   cd customers-portal-app
3. Install dependencies:
   ```bash
   npm install
4. Start the development server:
   ```bash
   npm start


## Usage

Run the application and navigate to the customer details page to view customer information and a gallery of photos.
Photos will refresh every 10 seconds, and any errors during fetching will be displayed to the user.