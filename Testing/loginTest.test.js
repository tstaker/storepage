//Must have Jest for this to work!
import {registerCheck} from './testTwo.js';

//Change values passed to registerCheck to test for different values
describe('Username and Password', () => {
	it('are valid', () =>{
		expect(registerCheck("username", "password")).toBe(true);
	})
})