import React from "react";

interface IClassComponentProps {
    isLoaded: boolean;
    someNumber?: number;
}

class ClassComponent extends React.Component<IClassComponentProps> {
    public render() {
        return <span>
            IsLoaded: {this.props.isLoaded}<br />
            { this.props.someNumber && "SomeNumber:" + this.props.someNumber }
        </span>
    }
}

export default ClassComponent;