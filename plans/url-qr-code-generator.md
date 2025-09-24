# Feature Implementation Plan: URL QR Code Generator

## 📋 Todo Checklist
- [x] ~~Create a new Git branch.~~ ✅ Implemented
- [ ] Create a new directory for the QR code generator.
- [ ] Set up `index.html` with basic structure and DaisyUI CDN.
- [ ] Implement UI for URL input and QR code display.
- [ ] Integrate a QR code generation library.
- [ ] Add "Generate", "Clear", and "Settings" buttons.
- [ ] Implement a "Recent QR Codes" section.
- [ ] Display a motivational message after generation.
- [ ] Ensure responsive design.
- [ ] Final Review and Testing.

## 🔍 Analysis & Investigation

### Codebase Structure
The current codebase is structured to accommodate multiple games, each in its own directory. The new URL QR Code Generator will follow this pattern, residing in its own dedicated directory at the root level.

### Current Architecture
The project utilizes vanilla HTML, CSS, and JavaScript for web-based games. Styling is handled by DaisyUI, which is a Tailwind CSS component library. This architecture will be maintained for the QR code generator to ensure consistency.

### Dependencies & Integration Points
The primary dependency will be a JavaScript library for QR code generation. I will use `qrious` due to its lightweight nature and ease of integration. The generator will be a standalone web application, so integration with other parts of the existing game codebase is not required.

### Considerations & Challenges
- **QR Code Library Selection:** `qrious` is chosen for its simplicity and direct integration into vanilla JavaScript projects.
- **Responsive Design:** DaisyUI and Tailwind CSS utilities will be used to ensure the generator's interface is responsive across various devices.
- **"Game Requirements" Interpretation:** The project guidelines mention "START, STOP, PAUSE/RESUME, and DIFFICULTY buttons or dropdowns" and a "scoreboard" for games. For this utility, these will be interpreted as:
    - **START:** "Generate" button to create the QR code.
    - **STOP/PAUSE/RESUME:** "Clear" button to clear the input and generated QR code. "Settings" button/dropdown for configuration.
    - **DIFFICULTY:** "Settings" dropdown to adjust QR code parameters (e.g., size, error correction level).
    - **SCOREBOARD:** A "Recent QR Codes" section to display a history of generated QR codes.
    - **MOTIVATIONAL MESSAGE:** A positive message displayed after a QR code is successfully generated.

## 📝 Implementation Plan

### Prerequisites
- Basic understanding of HTML, CSS, and JavaScript.
- Familiarity with DaisyUI and Tailwind CSS utility classes.

### Step-by-Step Implementation
1.  **Create a new Git branch**:
    - Branch name: `25-09-24-url-qr-code-generator`

2.  **Switch to the new branch**:
    - All subsequent steps must occur in this new branch.

3.  **Create the `qr-code-generator` directory**:
    - Command: `mkdir -p qr-code-generator`
    - This directory will house all files related to the URL QR Code Generator.

4.  **Create `qr-code-generator/index.html`**:
    - Files to modify: `qr-code-generator/index.html`
    - Changes needed:
        - Basic HTML5 structure.
        - Include DaisyUI CDN links in the `<head>` section.
        - Add the `<meta name="viewport" content="width=device-width, initial-scale=1.0">` tag for responsiveness.
        - Create a main container using DaisyUI classes for centering and layout.
        - Implement a form with an `<input type="text">` for URL input and a "Generate" button using DaisyUI `btn` classes.
        - Add a `<div>` element with an `id` (e.g., `qrcode-container`) where the QR code canvas will be rendered.
        - Add a section for "Recent QR Codes" (e.g., a `<ul>` or `<div>` with an `id`).
        - Add a "Clear" button.
        - Add a "Settings" dropdown/modal for QR code parameters (e.g., size, error correction).
        - Add a `<div>` for displaying motivational messages.
        - Link to `script.js` at the end of the `<body>`.

5.  **Create `qr-code-generator/script.js`**:
    - Files to modify: `qr-code-generator/script.js`
    - Changes needed:
        - Import the `qrious` library (via CDN in `index.html`).
        - Get references to the URL input, generate button, QR code container, recent QR codes section, clear button, settings elements, and motivational message display.
        - Implement an event listener for the "Generate" button click:
            - Get the URL from the input field.
            - Validate the URL.
            - Create a new `QRious` instance with the URL and desired options (size, error correction).
            - Append the generated canvas to the QR code container.
            - Add the generated URL to the "Recent QR Codes" section.
            - Display a random motivational message.
        - Implement an event listener for the "Clear" button:
            - Clear the URL input field.
            - Clear the QR code container.
            - Clear the motivational message.
        - Implement logic for the "Settings" dropdown/modal to allow users to adjust QR code parameters (e.g., size, error correction level). Store these settings in local storage.

6.  **Integrate `qrious` library**:
    - Files to modify: `qr-code-generator/index.html`
    - Changes needed: Add `<script src="https://cdn.jsdelivr.net/npm/qrious@4.0.2/dist/qrious.min.js"></script>` to the `<head>` or before `script.js` in the `<body>`.

7.  **Commit Changes**: The commit message should begin with `step-7-implement-core-logic`.

### Testing Strategy
1.  **Manual UI Testing:**
    - Verify all UI elements (input field, buttons, QR code display, recent QR codes, settings) are rendered correctly.
    - Test inputting various URLs (valid, invalid, long, short) and observe QR code generation.
    - Verify the "Clear" button clears the input and QR code.
    - Test the "Settings" functionality to ensure QR code parameters can be adjusted and applied.
    - Check that motivational messages appear after generation.
2.  **Responsiveness Testing:**
    - Resize the browser window to ensure the layout adapts correctly to different screen sizes (desktop, tablet, mobile).
    - Use browser developer tools to simulate different devices.
3.  **Functional Testing:**
    - Generate QR codes and scan them with a mobile device to ensure they are scannable and lead to the correct URL.
    - Verify that the "Recent QR Codes" section correctly stores and displays previously generated URLs.

### Web Server Verification (for web-based tasks)
1.  **Run the server in the background**:
    - Command: `npx http-server qr-code-generator -p 8080 & echo $! > server_pid.txt`
    - Ensure the command runs the server in the background.
2.  **Verify server response with curl**:
    - Command: `curl -s -o /dev/null -w "%{http_code}" http://localhost:8080`
    - Expected output: `200`
    - Implement a retry mechanism with a timeout if the initial check fails.
3.  **Troubleshoot if not 200**:
    - If the `curl` command does not return `200`, analyze server logs (if available) for errors.
    - Provide steps to diagnose common issues (e.g., port conflicts, missing dependencies, incorrect configuration).
    - Repeat verification after troubleshooting.
4.  **Keep Server Running for User Instructions**:
    - The server will be left running.
    - The Process ID (PID) of the running server will be stored in `server_pid.txt`.
    - Wait for the user to give further instructions. Do not kill the server until explicitly told to do so.

## 🎯 Success Criteria
- The URL QR Code Generator is accessible via a web browser.
- Users can input a URL and generate a scannable QR code.
- The generated QR code is displayed clearly on the page.
- The "Clear" button functions correctly, resetting the input and display.
- The "Settings" functionality allows users to adjust QR code parameters.
- A "Recent QR Codes" section displays a history of generated URLs.
- A motivational message is displayed after successful QR code generation.
- The interface is responsive and user-friendly across various devices.
