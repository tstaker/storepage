//Must have Jest for this to work!
import {item1Result} from './searchTest';
import {item1Shown, displayed} from '../search.js';

describe('item1Result', () => {
	it('correctly adjusted based on the search function', () =>{
		expect(item1Result(displayed)).toBe(item1Shown);
	})
})