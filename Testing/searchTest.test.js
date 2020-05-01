//Must have Jest for this to work!
import {item1Shown, displayed, submitThis} from './testOne.js';

//Change this depending on what value you want to test for
//In this example, testing for all values with a price of 2
submitThis("2");

describe('SpecifiedItem', () => {
	it('is shown', () =>{
		expect(item1Shown).toBe(true);
	})
})