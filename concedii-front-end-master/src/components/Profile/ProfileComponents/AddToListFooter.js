import React from "react";
import BlackPlus from "../../../../src/components/blackPlus.svg";
import Button from "../Buttons/Button";
const AddToListFooter = () => {
  return (
    <div className="addToListFooter">
      <Button type="tertiary" imageURL={BlackPlus} buttonID="addplus" />
    </div>
  );
};
export default AddToListFooter;
