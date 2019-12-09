# employee-tool
It contains Login, Employee registration adn display components

Employee:
employee interface contains first name, middle name, last name, email and mobile

Login:
login contains email and password
It validates them and if exists navigates to display
it also contains register, which adds new employee data.
When clicked on register it navigates to employee registration

Employee Registration:
It takes all the data from form and validates.
If validations are passed adds the data to list

Display:
It contains a table with employee data and edit, delete options
Edit takes email and checks for the data, if present updates the data after form validation
Delete take email and deletes if present
