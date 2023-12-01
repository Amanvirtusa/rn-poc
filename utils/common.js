export const substractValue = (total,value) => {

    try {
        return total-value;
    } catch (error) {
        return 0;
    }
  };

  export const checkBelowZero = (total) => {

    try {
        if(total > 0)
        return true;
    } catch (error) {
        return false;
    }
  };

  export const checkArray = (items) => {

    try {
        const filtered = items.filter((obj) => obj.quantity !== 0)
        return filtered;
    } catch (error) {
        return [];
    }
  };

 