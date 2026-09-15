const colorPicker =
  document.getElementById("colorPicker");

const hexInput =
  document.getElementById("hexInput");

const modeSelect =
  document.getElementById("modeSelect");

const generateBtn =
  document.getElementById("generateBtn");

const randomBtn =
  document.getElementById("randomBtn");

const palette =
  document.getElementById("palette");

const statusText =
  document.getElementById("status");

const currentMode =
  document.getElementById("currentMode");


// Sync color picker with HEX input
colorPicker.addEventListener(
  "input",
  () => {

    hexInput.value =
      colorPicker.value.toUpperCase();

  }
);


// Sync HEX input with color picker
hexInput.addEventListener(
  "input",
  () => {

    let hex =
      hexInput.value.trim();

    if (
      /^#[0-9A-Fa-f]{6}$/.test(hex)
    ) {

      colorPicker.value =
        hex;

    }

  }
);


// Generate button
generateBtn.addEventListener(
  "click",
  generatePalette
);


// Random color button
randomBtn.addEventListener(
  "click",
  () => {

    const randomHex =
      "#" +
      Math.floor(
        Math.random() * 16777215
      )
        .toString(16)
        .padStart(6, "0")
        .toUpperCase();

    colorPicker.value =
      randomHex;

    hexInput.value =
      randomHex;

    generatePalette();

  }
);


// Press Enter inside HEX box
hexInput.addEventListener(
  "keydown",
  event => {

    if (event.key === "Enter") {

      generatePalette();

    }

  }
);


// Main API function
async function generatePalette() {

  let hex =
    hexInput.value.trim();

  const mode =
    modeSelect.value;


  // Validate HEX
  if (
    !/^#[0-9A-Fa-f]{6}$/.test(hex)
  ) {

    statusText.textContent =
      "Please enter a valid HEX code, for example #6750A4.";

    palette.innerHTML = "";

    return;

  }


  hex =
    hex.replace("#", "");


  // Loading state
  statusText.textContent =
    "Loading palette...";

  palette.innerHTML = "";

  generateBtn.disabled =
    true;

  generateBtn.textContent =
    "Generating...";


  try {

    const apiURL =
      `https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`;


    const response =
      await fetch(apiURL);


    if (!response.ok) {

      throw new Error(
        `HTTP error: ${response.status}`
      );

    }


    const data =
      await response.json();


    // Empty state
    if (
      !data.colors ||
      data.colors.length === 0
    ) {

      statusText.textContent =
        "No colors were returned.";

      return;

    }


    displayPalette(
      data.colors
    );


    currentMode.textContent =
      mode.replaceAll("-", " ");


    statusText.textContent =
      "Click any color to copy its HEX code.";

  }

  catch (error) {

    console.error(
      "API Error:",
      error
    );


    statusText.textContent =
      "Unable to load the palette. Please try again.";


    palette.innerHTML =
      `
        <div class="error">
          Something went wrong while requesting data from The Color API.
        </div>
      `;

  }

  finally {

    generateBtn.disabled =
      false;

    generateBtn.textContent =
      "Generate Palette";

  }

}


// Display colors returned by API
function displayPalette(colors) {

  palette.innerHTML = "";


  colors.forEach(
    color => {

      const hexValue =
        color.hex.value;

      const colorName =
        color.name.value;


      const card =
        document.createElement("div");


      card.className =
        "color-card";


      card.innerHTML =
        `
          <div
            class="color-preview"
            style="
              background-color:
              ${hexValue};
            "
          >
          </div>

          <div class="color-info">

            <p>
              ${hexValue}
            </p>

            <small>
              ${colorName}
            </small>

          </div>
        `;


      card.addEventListener(
        "click",
        () => {

          copyColor(
            hexValue
          );

        }
      );


      palette.appendChild(
        card
      );

    }
  );

}


// Copy HEX to clipboard
async function copyColor(hexValue) {

  try {

    await navigator.clipboard.writeText(
      hexValue
    );


    statusText.textContent =
      `${hexValue} copied to clipboard!`;


    setTimeout(
      () => {

        statusText.textContent =
          "Click any color to copy its HEX code.";

      },
      1500
    );

  }

  catch (error) {

    statusText.textContent =
      `Color: ${hexValue}`;

  }

}


// Initial palette
generatePalette();