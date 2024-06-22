# Survey Form with Dependent Questions and Dynamic Sections

## Objective
This project implements an advanced survey form using React, featuring complex conditional fields, dynamic sections, and integration with an external API for fetching additional questions.

## Features
- **Dynamic Sections**: Conditionally display sections based on the selected survey topic.
- **External API Integration**: Fetch additional questions dynamically based on the survey topic selection.
- **Validation**: Ensures all required fields are filled out correctly before submission.
- **Summary Display**: Shows a summary of the entered data and additional questions upon form submission.

## Form Fields
- **Full Name**: Required text input for participant's full name.
- **Email**: Required email input for participant's email address.
- **Survey Topic**: Dropdown selection (Technology, Health, Education).
- **Technology Section**:
  - **Favorite Programming Language**: Dropdown (JavaScript, Python, Java, C#).
  - **Years of Experience**: Number input.
- **Health Section**:
  - **Exercise Frequency**: Dropdown (Daily, Weekly, Monthly, Rarely).
  - **Diet Preference**: Dropdown (Vegetarian, Vegan, Non-Vegetarian).
- **Education Section**:
  - **Highest Qualification**: Dropdown (High School, Bachelor's, Master's, PhD).
  - **Field of Study**: Text input.
- **Feedback**: Textarea.

## Technologies Used
- React
- Custom Hooks (`useForm`, `useFormValidation`)
- External API for dynamic question fetching
- HTML/CSS for styling

## Setup Instructions
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server with `npm start`.
5. Open your browser and go to `http://localhost:3000` to view the form.


## Custom Hooks
- **useForm**: Manages form state including field values and visibility based on conditional logic.
- **useFormValidation**: Handles form validation logic based on defined rules.

## External API Integration
- Utilizes an external API (`api.js`) to fetch additional survey questions based on the selected survey topic.

## Additional Notes
- Ensure all dependencies are installed (`react`, `react-dom`, etc.) before running the application.
- The form UI is designed to provide a seamless user experience with clear feedback on errors and dynamically fetched questions.

Feel free to customize and expand upon this project as needed. Happy coding!
