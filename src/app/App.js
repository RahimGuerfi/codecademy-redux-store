import React from "react";
//Components
import { Inventory } from "../features/inventory/Inventory";
import { CurrencyFilter } from "../features/currencyFilter/CurrencyFilter";
import { Cart } from "../features/cart/Cart";
import { SearchTerm } from "../features/searchTerm/SearchTerm";

import { filterInventory } from "../utilities/utilities";

export const App = ({ state, dispatch }) => {
  const filteredInventory = filterInventory(state.inventory, state.searchTerm);

  return (
    <div>
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <SearchTerm searchTerm={state.searchTerm} dispatch={dispatch} />

      <h4>
        <span style={{ color: "var(--purple)" }}>
          {filteredInventory.length}
        </span>{" "}
        items
      </h4>

      <Inventory
        inventory={filteredInventory}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Cart
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
    </div>
  );
};
