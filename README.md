# Search-Based Web Application

A React-based web application designed for Girman Technologies as part of a frontend development assignment. The application provides a search functionality to find user details with a responsive, card-based UI.

## Features

1. **Home Screen**
   - Minimalistic design inspired by Google’s search page.
   - Top navigation bar with links to:
     - [Girman Technologies Website](http://girmantech.com/)
     - [LinkedIn Company Page](https://www.linkedin.com/)
     - Contact (opens default email client with a pre-filled email).
   - Search box for user input.

2. **Search Results Page**
   - Displays user information in a card-based layout after search.
   - Each card includes:
     - First Name, Last Name, Address, and Phone Number.
     - A "Fetch Details" button to display additional user details in a dialog box.
   - Shows an empty state UI if no results are found.
   - Responsive design for desktop and mobile screens.

3. **Data Management**
   - User data is stored locally in a JSON file.
   - Search functionality filters user information based on input.

4. **UI Enhancements**
   - Utilizes the [Shadcn Component Library](https://ui.shadcn.com/) for consistent and modern UI elements.
   - Dialog component for detailed user information.

## Technical Details

- **Frontend Framework**: React.js
- **Styling**: Tailwind CSS
- **UI Library**: Shadcn
- **State Management**: React hooks
- **Routing**: React Router

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/royabhi647/search-based-web-app.git

2. Install dependencies:
  <code>npm install</code>

3. Run application on browser:
  <code>npm run dev</code>