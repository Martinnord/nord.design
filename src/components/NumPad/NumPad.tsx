import * as React from "react";
import { Portal } from "react-portal";
import * as PropTypes from "prop-types";
import { InputField, KeyPad } from "../../elements";

interface IProps {
  onClick: (e: React.FormEvent<any>) => void;
  palceHolder: string;
  label: string;
  buttonArray: any;
  disabledButtons: any;
}

interface IState {
  show: boolean;
}

class NumPad extends React.Component<IProps, IState> {
  state = {
    show: false,
  };

  toggleNumPad = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  public render() {
    const buttonArray = [
      {
        value: 1,
        key: 1,
      },
      { value: 2, key: 2 },
    ];
    return (
      <React.Fragment>
        <InputField
          label="Test"
          showNumPad={this.toggleNumPad}
          placeholder="Test"
          value="blä"
          disabled={false}
        />
        <Portal>
          {this.state.show && <KeyPad buttonArray={buttonArray} />}
        </Portal>
      </React.Fragment>
    );
  }
}

export default NumPad;
