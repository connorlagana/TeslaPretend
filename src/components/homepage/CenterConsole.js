import React from "react";

const CenterConsole = () => {
  return (
    <div className="centerConsole">
      <div>
        <h1>Model 3</h1>
      </div>
      <div>
        <a href="/model3/design/battery">
          <button id="customOrder">Custom Order</button>
        </a>
        <button id="existingInventory">Existing Inventory</button>
      </div>
      <div>
        <p>Visit a Store</p>
      </div>
    </div>
  );
};

export default CenterConsole;
