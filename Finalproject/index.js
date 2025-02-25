import fetch from "node-fetch";
import minimist from "minimist";

// Parse command-line arguments
const args = minimist(process.argv.slice(2), {
    string: ["country", "year"], // Define expected arguments
    alias: {
        c: "country",
        y: "year",
    },
    default: {
        year: new Date().getFullYear(), // Default to the current year
    },
});

const API_KEY = "8yTlBbKn7gqN2JBfJjJJZnH0M28yX49t";
async function fetchHolidays(apiKey, country, year) {
    const url = "https://calendarific.com/api/v2/holidays";
    const params = new URLSearchParams({
        api_key: apiKey,
        country: country,
        year: year,
    });

    try {
        const response = await fetch(`${url}?${params}`);
        if (response.ok) {
            const data = await response.json();
            const holidays = data.response?.holidays || [];
            if (holidays.length > 0) {
                console.log(`Public Holidays in ${country} for ${year}:`);
                holidays.forEach(holiday => {
                    const date = new Date(holiday.date.iso);
                    const formattedDate = date.toLocaleDateString('en-us', {
                        weekday: 'long', // Full weekday name (e.g., "Monday")
                        year: 'numeric', // Full year (e.g., "2023")
                        month: 'short',  // Abbreviated month name (e.g., "Oct")
                        day: 'numeric'   // Day of the month (e.g., "30")
                    });
                    console.log(`- ${holiday.name} (${formattedDate})`);
                });
            } else {
                console.log("No holidays found or invalid country code.");
            }
        } else {
            console.error(
                "Failed to fetch holidays. Please check your API key or parameters.",
            );
        }
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

// Check if required arguments are provided
if (!args.country || !args.year) {
    console.error("Please provide both --country and --year arguments.");
    console.log("Example: node index.js --country PT --year 2025");
} else {
    fetchHolidays(API_KEY, args.country, args.year);
}
