import React from "react";
import { Param } from "../types";

interface Props {
  param: Param;
  value: string;
  onChange: (paramId: number, value: string) => void;
}

const ParamInput: React.FC<Props> = ({ param, value, onChange }) => {
  return (
    <div className="param-item">
      <label>
        {param.name}:
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(param.id, e.target.value)}
        />
      </label>
    </div>
  );
};

export default ParamInput;
