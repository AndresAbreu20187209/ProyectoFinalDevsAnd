const saludo = require('./script');

test('saludo function', () => {
    expect(saludo('Andrés Abreu')).toBe('Los Saluda Andrés Abreu');
});
