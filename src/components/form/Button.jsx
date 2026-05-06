import '../../styles/Form.css';

function Button(props) {
  return (
    <button type={props.type} name={props.name} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Button;
