# Palette Lab

Palette Lab is a web application that generates color palettes based on a user-selected base color.

This project was created for the Free API Niche Challenge.

## Niche

Color Palettes

## API Used

This project uses The Color API.

API Website:
https://www.thecolorapi.com/

Documentation:
https://www.thecolorapi.com/docs

The application uses the `/scheme` GET endpoint to generate color schemes based on a hexadecimal color value.

Example request:

https://www.thecolorapi.com/scheme?hex=6750A4&mode=analogic&count=5

## Features

- Select a base color using a color picker
- Enter a HEX color manually
- Generate palettes using different color scheme modes
- Random color generator
- Displays five generated colors
- Displays color names and HEX values
- Click a color to copy its HEX code
- Loading state
- Empty response handling
- Error handling
- Responsive layout for desktop and mobile

## Palette Modes

- Monochrome
- Monochrome Dark
- Monochrome Light
- Analogic
- Complement
- Analogic Complement
- Triad
- Quad

## API Key

The Color API does not require an API key.

No API key or secret credentials are stored in this repository.

## How to Run Locally

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in a browser.

For development, the project can also be opened using the Live Server extension in Visual Studio Code.

## Technologies Used

- HTML
- CSS
- JavaScript
- Fetch API
- The Color API

## Author

Yassin Lomangco Unte