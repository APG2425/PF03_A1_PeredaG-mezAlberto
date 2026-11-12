import { describe, it, expect } from 'vitest';
import { fibonacci } from '../src/fibonacci.js';

describe('Función fibonacci', () => {

    it('Debe devolver 0 cuando n es 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    it('Debe devolver 1 cuando n es 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    it('Debe devolver 1 cuando n es 2', () => {
        expect(fibonacci(2)).toBe(1);
    });

    it('Debe devolver 2 cuando n es 3', () => {
        expect(fibonacci(3)).toBe(2);
    });

    it('Debe devolver 3 cuando n es 4', () => {
        expect(fibonacci(4)).toBe(3);
    });

    it('Debe devolver 55 cuando n es 10', () => {
        expect(fibonacci(10)).toBe(55);
    });

    it('Debe lanzar RangeError cuando n es negativo', () => {
        expect(() => fibonacci(-1)).toThrowError(
            new RangeError('solo números enteros ≥ 0')
        );
    });

});