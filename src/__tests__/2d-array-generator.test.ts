import expect from 'expect'
import get2dArray from '../utils/2d-array-generator'

describe('Check 2D array creation', () => {
	test('2D array is created', () => {
		const array = get2dArray()
		expect(array).toBeInstanceOf(Array)
		expect(array.length).toBe(8)
		expect(array[0].length).toBe(8)
	})

	test('2D array contains proper coordinates', () => {
		const array = get2dArray();
		expect(typeof array[0][0]).toBe('boolean')
	})

	test('2D array function handles varying height and width params', () => {
		const height = 2;
		const width = 2;
		const array = get2dArray(height, width);
		expect(typeof array[0][0]).toBe('boolean')
	})

	test('Error thrown if function params are not numbers', () => {
		/* eslint-disable  @typescript-eslint/no-explicit-any */
		const height = 'string' as any
		/* eslint-disable  @typescript-eslint/no-explicit-any */
		const width = true as any
		expect(() => get2dArray(height, width)).toThrowError()
	})
})
