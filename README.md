# Palette lab 

Palette Lab is a web app that generates color palettes based on a user-selected base color

This project was created for the ITCC 14 A Free API Niche Challenge - Lab Activity

## Niche

Color Palettes

## API Used

This project uses The Color API

API Website:  
https://www.thecolorapi.com/

Documentation:  
https://www.thecolorapi.com/docs

The application uses the `/scheme` GET endpoint to generate color schemes based on a hexadecimal color value

Ex. request:

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

## Palette modes

- Monochrome
- Monochrome Dark
- Monochrome Light
- Analogic
- Complement
- Analogic Complement
- Triad
- Quad

## API Key

The Color API does not require an API key
No API key or secret credentials are stored in this repository

## How to run locally
1. Clone or download this repository
2. Open the project folder
3. Open `index.html` in a browser or run it using the Live Server extension in VSC (Visual Studio Code)

## Technologies used

- HTML
- CSS
- JavaScript
- Fetch API
- The Color API
