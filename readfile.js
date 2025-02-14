const fs = require('fs');
fileExists = fs.existsSync("input.csv");
console.log("input.csv exists:", fileExists);


try {
    const csvData = fs.readFileSync('input.csv', 'utf-8');
    const rows = csvData.split('\n');
    const headers = rows[0].split(','); // ["name", "email", "age"]
    const data = rows.slice(1).map(row => {
    const values = row.split(',');
    let age = parseInt(values[2]);

    if (isNaN(age)) {
        return null;
    }
    return {
        name: values[0],
        email: values[1],
        age: parseInt(values[2])
    };
    });
    fs.writeFileSync('output.json', JSON.stringify(data, null, 2));
} catch (error) {
    console.error('Error:', error.message);
}
