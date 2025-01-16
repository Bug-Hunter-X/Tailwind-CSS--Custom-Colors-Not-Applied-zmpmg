# Tailwind CSS Custom Colors Bug

This repository demonstrates a bug where custom colors defined in `tailwind.config.js` are not applied correctly in the HTML.  The `bg-theme-color` class, which should set the background color to '#f56565', fails to apply the color.

## Bug Description

The issue is likely due to an incorrect configuration or a missing step in the Tailwind CSS build process.  The custom color is defined, but Tailwind isn't picking it up during the compilation/build stage.

## How to Reproduce

1. Clone the repository.
2. Run `npm install` to install dependencies (if any are required).
3. Run the build process for Tailwind CSS.  This will vary depending on your project setup.
4. Open `index.html` in a browser.
5. Observe that the div with the `bg-theme-color` class does not have the expected red background color.

## Solution

The solution is provided in the `bugSolution.js` and updated `tailwind.config.js` file. Check the solution section for details. 