import constants from "";

export const ComisariasData = async () => {
const data = await responseComisarias.json();
const values = data.values.slice(1);

let parsedValues = [];
values.forEach((c) => {
    if (c.length === 8){
        const [latitude, longitude] = c[1].split(",").map(parseFloat);

        const event ={
            id: parseInt(c[0]),
            coords: {
                latitude,
                longitude,
            },
            comisaria: c[2],
            exComisaria: c[3],
            direccion: c[4] ,
            comisario: c[5] ,
            cargo: c[6]

        };
        if (longitude !== undefined && event.date !== "") {
            parsedValues.push(event);
    }
} else {
    console.log(c)
  }
})

return parsedValues;

};