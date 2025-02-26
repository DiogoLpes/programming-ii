const fs = require("fs");

try {
    if (!fs.existsSync("input.csv")) {
        throw new Error("File does not exist, please create .csv file!");
    }


    const csvData = fs.readFileSync("input.csv", "utf-8");

    const rows = csvData.split("\n");
    const data = rows.slice(1).map((row) => {
        const values = row.split(",");
        const age = parseInt(values[2], 10);
        if (isNaN(age)) {
            return null;
        }
        return {
            name: values[0],
            email: values[1],
            age: age,
        };
    }).filter((item) => item !== null); 
    console.log(data);

    fs.writeFileSync("output.json", JSON.stringify(data, null, 2));
} catch (error) {
    console.error("Error:", error.message);
}