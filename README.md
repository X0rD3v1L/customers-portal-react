<a href="https://www.loom.com/share/91dc6e636c8342238fac2b50fcecc130?sid=e74a7739-29e1-4c0f-9019-60de1938a983" style="font-size:32px;">Customer Portal App</a>

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

Run the application and click on any customer from the list on left side to view customer information and a gallery of photos. Photos will refresh every 10 seconds, and any errors during fetching will be displayed to the user.