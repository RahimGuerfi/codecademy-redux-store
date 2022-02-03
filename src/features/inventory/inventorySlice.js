export const loadData = (data) => {
  return {
    type: "inventory/loadData",
    payload: data,
  };
};

const initialInventory = [];
export const inventoryReducer = (inventory = initialInventory, action) => {
  switch (action.type) {
    case "inventory/loadData": {
      return action.payload;
    }
    default: {
      return inventory;
    }
  }
};
