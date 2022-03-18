import './Input.css';

export default function Input(props) {
    return (
        <label className={`input__label ${props.name === "comment" ? `input__label_${props.name}` : ''}`}> {props.label}
            <input
                type={props.type}
                disabled={props.disabled}
                name={props.name}
                value={props.value}
                className={props.disabled ? (`input__data ${props.name === "comment" ? `input__data_${props.name}` : ''}`) : `input__data input__data_edit ${props.name === "comment" ? `input__data_${props.name}` : ''}`}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
            {props.error && <p className={props.name === "comment" ? "input__error_hide" : "input__error"}>{props.error}</p>}
        </label>
    )
}
