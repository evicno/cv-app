import '../../styles/Form.css';

function InputField(props) {
  return (
    <li>
      <label htmlFor={props.id}>{props.screen}</label>
      {props.type === 'textarea' ? (
        <textarea
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
      ) : (
        <input
          type={props.type}
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
      )}
    </li>
  );
}

export default InputField;
