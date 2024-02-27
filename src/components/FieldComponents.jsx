import {useState, useCallback, useEffect} from 'react';
import styles from "./FieldComponents.module.css";

export function Field({title, id, type="text", children, ...props}) {
  if (!id) id = title;
  return (
    <div className={styles.field}>
      {title && <label htmlFor={id}>{title}</label>}
      <input id={id} type={type} {...props}/>
      {children}
    </div>
  )
}

export function FieldSet({name, options = {}, title, onChange = () => {}, type="radio"}) {
  const [selected, setSelected] = useState({});
  const changeHandler = useCallback(({target}) => {
    let newValue = {}
    if (type == "radio") {
      newValue = {[target.id]: target.checked};
    } else {
      newValue = {
        ...selected,
        [target.id]: target.checked
      }
    }
    setSelected(newValue);
    onChange({[name]: newValue});

  },[setSelected]);

  console.error(type, options);

  return (
    <fieldset>
      {title && <legend>{title}</legend>}
      <ul>
        {options && options.map(({id, ...props}) => (
          <li key={`${name}-${id}`}>
            <Field type={type} id={id} name={name}
              {...props} onChange={changeHandler} />
          </li>
        ))}
      </ul>
    </fieldset>
  )
}
