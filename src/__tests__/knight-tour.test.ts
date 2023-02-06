import knightTour from "../utils/knight-tour";

describe('Back Tracking Algorithm', () => {
	it('Returns a 2D array with all elements filled with non-zero numbers', () => {
		const solution = knightTour(8, 8, 0, 0)
		expect(solution).toBeTruthy()


		let allBoardSquareNonZero = true;
		if (typeof solution === 'object') {
			for (let i = 0; i < solution.length; i++) {
				for (let j = 0; j < solution.length; j++) {
					if (solution[i][j] === 0) {
						allBoardSquareNonZero = false;
					}
				}
			}
		}
		expect(allBoardSquareNonZero).toBe(true)
	})
})
