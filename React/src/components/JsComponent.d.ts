import React from "react";

interface JsComponentProps {
    name: string;
}

declare class JsComponent extends React.Component<JsComponentProps> {}
export default JsComponent;
