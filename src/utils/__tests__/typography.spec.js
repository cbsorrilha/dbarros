import {rhythm} from '../typography';

describe('Testing the typography utility', () => {
    describe('Testing the rythm utility', () => {
        it('should return the correct size, according to the given rythm', () => {
            expect(rhythm(1)).toBe('1.75rem');
            expect(rhythm(2)).toBe('3.5rem');
            expect(rhythm(3)).toBe('5.25rem');
        })
    })
});