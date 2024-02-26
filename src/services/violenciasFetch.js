import constants from "../constants/constants";

export const violenciasFetch = async () => {
const responseViolencias = await fetch(constants.sheetUrl);
const data = await responseViolencias.json();
const values = data.values.slice(1);
console.log(values);


let parsedValues = [];
values.forEach((c) => {
    if (c.length === 8){
        const [latitude, longitude] = c[4].split(",").map(parseFloat);

        const event = {
            id: parseInt(c[0]),
            title: c[1],
            date: c[2],
            source: c[3],
            coords: {
              latitude,
              longitude,
            },
            provincia: c[5],
            tipoId: c[6],
            tipo: c[7]

        };
        if (longitude !== undefined && event.date !== "") {
            parsedValues.push(event);
    }
} else {
    console.log(c)
  }
})
console.log(parsedValues);

return parsedValues;

};