import fetch from "node-fetch";
import fs from "node:fs";

// Function to get the current year
function getCurrentYear() {
    return new Date().getFullYear();
}

// Function to save data to a .txt file
function saveToFile(filename, data) {
    fs.writeFileSync(filename, data, "utf-8"); // Write data to the file
    console.log(`Data saved to file: ${filename}`);
}

export async function fetchHolidays(apiKey, country, month = null) {
    const year = getCurrentYear(); // Use the current year
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

            // Filter holidays by month if month is specified
            const filteredHolidays = month
                ? holidays.filter((holiday) => {
                      const date = new Date(holiday.date.iso);
                      return date.getMonth() + 1 === parseInt(month); // Month 1-12
                  })
                : holidays;

            // Prepare data for the .txt file
            if (filteredHolidays.length > 0) {
                let output = `Holidays in ${country} for the year ${year}${month ? `, month ${month}` : ""}:\n\n`;

                filteredHolidays.forEach((holiday) => {
                    const date = new Date(holiday.date.iso);
                    const formattedDate = date.toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                    });
                    output += `- ${holiday.name}: ${formattedDate}\n`;
                });

                // Save data to a .txt file
                const filename = `Holidays_${country}_${year}${month ? `_${month}` : ""}.txt`;
                saveToFile(filename, output);
            } else {
                console.log("No holidays found.");
            }
        } else {
            console.error("Failed to fetch holidays. Please check your API key or parameters.");
        }
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}