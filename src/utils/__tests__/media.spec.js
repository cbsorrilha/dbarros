import media from '../media'
import css from 'styled-components'

describe('Testing the media utility', () => {
    it('should return the correct media query for the phone size', () => {
        const result = media.phone(`background-color: red`)
        expect(result[0]).toBe('\n    @media (max-width: ')
        expect(result[1]).toBe('36')
    });
    it('should return the correct media query for the desktop size', () => {
        const result = media.desktop(`background-color: red`)
        expect(result[0]).toBe('\n    @media (max-width: ')
        expect(result[1]).toBe('62')
    });
    it('should return the correct media query for the tablet size', () => {
        const result = media.tablet(`background-color: red`)
        expect(result[0]).toBe('\n    @media (max-width: ')
        expect(result[1]).toBe('48')
    });
})
