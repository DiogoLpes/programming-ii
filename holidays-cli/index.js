import minimist from "minimist";
import { fetchHolidays } from "./fetchholidays.js";

const API_KEY = "8yTlBbKn7gqN2JBfJjJJZnH0M28yX49t";

const args = minimist(process.argv.slice(2), {
    string: ["country", "month"], 
    alias: {
        c: "country", // Shortcut for --country or -c
        m: "month",   // Shortcut for --month or -m
        h: "help",    // Shortcut for --help or -h
    },
});

// Function to display usage instructions
function displayHelp() {
    console.log(`
How to use:
   node index.js --country country code [--month month]

Example:
   node index.js --country PT --month 12
`);
}


if (args.help) {
    displayHelp(); // Display usage instructions
} else if (!args.country) {
    console.error("Please provide the country code.");
    displayHelp(); // Display usage instructions again
} else {
    fetchHolidays(API_KEY, args.country, args.month); // Fetch holidays
}