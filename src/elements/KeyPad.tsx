import * as React from "react";
import * as PropTypes from "prop-types";
import { KeyPadButton } from './KeyPadButton'

interface IProps {
    buttonArray: any;
}

interface IState {
    value: string;
}

class KeyPad extends React.Component<IProps, IState> {
    state = {
        value: ""
    }

    componentDidMount() {
        document.addEventListener("keydown", this.keyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyDown);
    }

    handleClick = (key: string) => {
        this.setState(prevState => ({ value: prevState.value + key }))
    }

    keyDown = (value: any) => {
        const { buttonArray } = this.props;
        if (value === "Enter") {
            console.log("ENTER HAS BEEN CLICKED")
        } else if (value === "Backspace") {
            console.log("BACKSPACE HAS BEEN CLICKED")
        } else {
            this.handleClick(value);
            // Handle buttonArray here
        }
    }

    render() {
        const { buttonArray } = this.props;
        const { value } = this.state;
        return (
            <div>
                <input readOnly value={value} />
                {buttonArray.map((button: any) => (
                    <KeyPadButton onClick={() => this.keyDown(button.value)} value={button.value}>
                        {button.value}
                    </KeyPadButton>
                ))}
            </div>
        )
    }
}

export default KeyPad;