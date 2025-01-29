import React from "react";
import { Param, ParamValue, Model } from "../types";
import ParamInput from "./ParamInput";

interface Props {
  params: Param[];
  model: Model;
}

interface State {
  paramValues: ParamValue[];
}

class ParamEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      paramValues: props.model.paramValues,
    };
  }

  handleParamChange = (paramId: number, value: string) => {
    this.setState((prevState) => ({
      paramValues: prevState.paramValues.map((paramValue) =>
        paramValue.paramId === paramId
          ? { ...paramValue, value }
          : paramValue
      ),
    }));
  };

  public getModel(): Model {
    return {
      ...this.props.model,
      paramValues: this.state.paramValues,
    };
  }

  render() {
    const { params } = this.props;
    const { paramValues } = this.state;

    return (
      <div className="param-editor">
        {params.map((param) => {
          const paramValue = paramValues.find(
            (value) => value.paramId === param.id
          )?.value || "";

          return (
            <ParamInput
              key={param.id}
              param={param}
              value={paramValue}
              onChange={this.handleParamChange}
            />
          );
        })}
        <button
          onClick={() =>
            console.log("Current Model:", this.getModel())
          }
        >
          Console log
        </button>
      </div>
    );
  }
}

export default ParamEditor;
