import '../../styles/Form.css';

function Button(props) {
  return (
    <button type={props.type} name={props.name}>
      {props.text}
    </button>
  );
}

export default Button;
