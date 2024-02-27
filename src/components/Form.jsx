import {useState, useCallback, useEffect} from 'react';
import {fuerzas, fuerzas2Poli} from "./Policias/Policias";
import {Field, FieldSet} from "./FieldComponents";

export default function Report() {
  const [data, setData] = useState({})
  const handleFieldset = useCallback((fields) => {
    setData(data => ({...data, ...fields}))
  })
  const makeField = useCallback(({name, ...props}) => (
    <Field id={name} onChange={({target}) => {
      setData(data => ({...data, [name]: target.value}))
    }}
      {...props} />
  ), [setData]);

  useEffect(() => {
    console.error(data);
  }, [data]);


  return (
    <>
      <h1>I. lugar y fecha</h1>
      <h2>¿Cuándo fue?</h2>
      {makeField({name: 'fecha', title:'fecha', type: 'date',
        placeholder:"Elige una fecha"})}
      {makeField({name: 'hora', title:'hora', type: 'time',
        placeholder:"Elige una fecha"})}

      <h2>¿Dónde fue?</h2>

      {makeField({name: 'donde',
        placeholder:"Cuentanos donde fue"})}
      <h1>II. DESCRIPCIÓN DEL HECHO</h1>
      {makeField({name: 'como', title: "Contanos cómo fue el hecho",
        placeholder:"describa aqui el hecho"})}
      <h1>III. DATOS DEL AGRESOR</h1>
      <FieldSet name="agresor" onChange={handleFieldset}
        options={fuerzas2Poli(fuerzas)} />
      {makeField({name: "cual",
        title: "Si no fue ninguna de las anteriores",
        placeholder: "especificanos cual fue"})}
      {makeField({name: "id_police",
        title: "Si identificaste a los policías implicados",
        placeholder: "podes consignarlo aqui"})}
      {makeField({name: "id_vehiculo",
        title: "Si identificaste la patente de algún patrullero o moto",
        placeholder: "podes anotarlo aqui"})}
      <h1>IV. INFORMACIÓN DE CONTACTO</h1>
      {makeField({name: "name", title: "Nombre"})}
      {makeField({name: "phone", title: "Telefono", type: "phone"})}
      {makeField({name: "email", title: "Email", type: "email"})}
      <FieldSet name="type" type="checkbox" onChange={handleFieldset}
        title="Marque las opiones deseadas"
        options={[{
          id: 'visibilizar',
          title: 'Quiero visibilizar la situación de violencia institucional',
        }, {
          id: 'denunciar',
          title: 'Quiero denunciar legalmente'
        }]}
      />
    </>
  )
}
