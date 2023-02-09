import findIndex from "../utils/get-index-of-2D-array";
import solution from "../utils/mock-solution-array";

describe('Find index of 2D array', () => {
	it('Returns an array', () => {
		const index = findIndex(solution, 1);
		expect(index).toBeInstanceOf(Array)
	})

	it('Returns the correct index', () => {
		const index = findIndex(solution, 1);
		expect(index).toStrictEqual([0, 0])
	})
})
