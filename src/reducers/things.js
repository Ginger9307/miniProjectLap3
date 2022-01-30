// handle all actions with todo item: add, mark as done, delete 
const initState = {
    all: ['hummus', 'celery', 'cucumber'] 
}

const thingReducer = (list=initState, action) => {
    switch (action.type) {
      case 'ADD_THING': {
          console.log(action.payload);
          console.log(list.all)
            const newItem = action.payload;
          console.log(newItem);
          return { ...list, all: [...list.all, newItem ]};
        };

      default:
        return list;
    };
  };

  export default thingReducer;