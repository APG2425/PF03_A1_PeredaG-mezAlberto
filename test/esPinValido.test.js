import { descrivbe, it, expect } from 'vitest';
import { esPinValido } from '../src/esPinValido.js';

describe('Función esPinValido', () => {

    it('Debe devolver false cuando el PIN es null', () => {
        expect(esPinValido(null)).toBe(false);
    });

    it('Debe devolver false cuando el PIN es undefined', () => {
        expect(esPinValido(undefined)).toBe(false);
    });

    it('Debe devolver false cuando el PIN está vacío', () => {
        expect(esPinValido('')).toBe(false);
    });

    it('Debe devolver true cuando el PIN tiene 4 dígitos', () => {
        expect(esPinValido('1234')).toBe(true);
    });

    it('Debe devolver true cuando el PIN tiene 6 dígitos', () => {
        expect(esPinValido('123456')).toBe(true);
    });

    it('Debe devolver false cuando el PIN tioene una longitud invcorrecta', () => {
        expect(esPinValido('123')).toBe(false);
        expect(esPinValido('12345')).toBe(false);
        expect(esPinValido('1234567')).toBe(false);
    });

    it('Debe devolver false cuando el PIN contiene letras', () => {
        expect(esPinValido('12a4')).toBe(false);
    });

    it('Debe devolver false cuando el PIN contiene caracteres especiales', () => {
        expect(esPinValido('12@4')).toBe(false);
    });
    
    it('Debe devolver false cuando todos los dígitos son iguales', () => {
        expect(esPinValido('1111')).toBe(false);
        expect(esPinValido('222222')).toBe(false);
    });

});
