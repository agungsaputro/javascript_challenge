function sortCSV(string, delimiter = ',') {
    const titles = string.slice(0, string.indexOf('\n')).split(delimiter);
    const rows = string.slice(string.indexOf('\n') + 1).split('\n');
    return rows.map(row => {
        const values = row.split(delimiter);
        return titles.reduce((object, curr, i) => (object[curr] = values[i], object), {})
    });
};

let data;

data = 'name, category, price\nXiomi Redmi 5A, Smartphone, 1199000\nMacbook Air, Laptop, 13775000';
console.log(sortCSV(data, ','))
