# Navbar Project
The Hyrule Navbar Project is a web application that provides navigation functionality using hash-based routing. It features a navigation bar that allows users to easily navigate between different sections of the website. The project is built using HTML, CSS, and JavaScript.

## Features
Navigation bar with buttons for different sections of the website.
Hash-based routing to load content dynamically without page reloads.
Displays content from separate HTML files based on the selected route.
Smooth scrolling behavior when clicking on navigation buttons.

## Usage
### Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/PatMcCue/portfolio/tree/main/Navbar%20Project
Open the index.html file in a web browser.

### Use the navigation buttons in the navbar to switch between different sections of the website.

## How It Works
The navigation bar contains buttons with links to different routes using hash fragments (e.g., #/nutritionlabel, #/gridmagazine).
The router function listens for changes in the hash fragment and loads the corresponding HTML content based on the route defined in the routes object.
The loadPage function fetches the content from the specified URL and injects it into the #content element.
If a specific anchor is targeted within the URL (e.g., #/nutritionlabel#section1), the script scrolls to that section after loading the page.

## Credits
The project structure and concept were inspired by the need for efficient client-side navigation.
The Bootstrap CSS framework was used for styling the navigation bar.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
