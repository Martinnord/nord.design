import * as React from "react";
import * as PropTypes from "prop-types";

interface IProps {
  [propName: string]: any;
}

class InputField extends React.Component<IProps> {
    render() {
        console.log('asdads', this.props)
        const { label, placeholder, value, disabled, showNumPad } = this.props;
        return (
          <React.Fragment>
            {label && <label>{label}</label>}
            <span onClick={showNumPad}>
            <input
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                readOnly
                />
            </span>
          </React.Fragment>
        );
    }
}
// @ts-ignore
InputField.defaultProps = {
  placeholder: "",
  value: "",
  label: "",
  disabled: false,
};

// @ts-ignore
InputField.propTypes = {
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
};


export default InputField;
