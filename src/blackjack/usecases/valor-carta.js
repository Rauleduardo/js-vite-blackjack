
/**
 * 
 * @param { String } carta - trae el valor de una carta seleccionada 
 * @returns {number} returna el valor de la carta
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}