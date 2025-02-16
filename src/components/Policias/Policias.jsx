export const fuerzas = [
  {
    id: "ciudad",
    title: "Policía de la Ciudad",
    pics: ["Ciudad_1.webp", "Ciudad_2.webp","Ciudad_3.webp","Ciudad_4.webp"]
  }, {
    id: "dou",
    title: "(DOU) Operaciones Urbanas de Contención",
    pics: ["DOEM_2.webp"]
  }, {
    id: "prev",
    title: "Agentes de Prevención CABA",
    pics: ["Prevencion_1.webp", "AGC.webp"]
  }, {
    id: "pub",
    title: "Espacio Público",
    pics: ["EspacioPublico.webp"]
  }, {
    id: "federal",
    title: "Policía Federal",
    pics: ["Federal_1.webp", "Federal_2.webp"]
  }, {
    id: "pref",
    title: "Prefectura",
    pics: ["Prefectura_1.webp", "Prefectura_2.webp"]
  }, {
    id: "gend",
    title: "Gendarmería Nacional",
    pics: ["Gendarmeria.webp"]
  }, {
    id: "bon",
    title: "Policía Bonaerense",
    pics: ["Bonarence.webp"]
  }, {
    id: "civil",
    title: "De Civil (sin uniforme)",
    pics: []
  }
];

export const fuerzas2Poli = fuerzas => fuerzas.map(({pics, ...rest}) => ({
  ...rest,
  children: [pics.map(p => <img src={`/polis/${p}`} />)]
}));

export default function Poli({title, pics, ...props}) {
  return (
    <div {...props}>
      {title}
      <ul>
        {pics.map((p) =>
          <li key={p}>
            <img src={`polis/${p}`}/>
          </li>
        )}
      </ul>
    </div>
  )
};
