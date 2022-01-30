import thingReducer from "./things";
import { addThing } from '../actions';


describe("thing reducer", () => {

    it('should return the initial state', () => {
        expect(thingReducer(undefined, {})).toEqual(
            {
                all: ['hummus', 'celery', 'cucumber']
            }
        );
    });

    it('should handle ADD_THING', () => {
        const action = {
          type: 'ADD_THING',
          payload: 'breadcrumbs',
        };
        const initState = {
            all: ['hummus', 'celery', 'cucumber'] 
        };

        expect(thingReducer(initState, action)).toEqual({
            all: ['hummus', 'celery', 'cucumber', 'breadcrumbs'] 
        }
    );
      });

})
