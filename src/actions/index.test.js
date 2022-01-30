import { addThing } from ".";

describe("Thing actions", () => {

    it('returns an object {type, item}', () => {
        const item = "breadcrumbs";
        const result = {"payload": "breadcrumbs", "type": "ADD_THING"}
        expect(addThing(item)).toEqual(result)
    })
    
})

