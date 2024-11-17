import { useState, useEffect } from "react"
import { Form } from "./Form"
import { Results } from "./Results"

/**
 * Componente principal que maneja la interacción entre el formulario y los resultados de los cálculos.
 * 
 * Este componente administra el estado de los resultados de los macronutrientes, que se actualizan al
 * recibir los datos desde el formulario a través de la función `onResults`. El componente incluye
 * dos subcomponentes: `Form` y `Results`. 
 * 
 * - `Form`: Permite al usuario ingresar su peso y objetivo, y al presionar el botón de calcular, 
 *   pasa los resultados calculados al componente `Content` a través de la función `onResults`.
 * - `Results`: Recibe los resultados y los muestra al usuario.
 * 
 * @returns {JSX.Element} - El componente `Content`, que contiene el formulario y los resultados.
 */

export const Content = () => {
    const [results, setResults] = useState({ // Estado que mantiene los resultados de los cálculos de macronutrientes
        calories: 0,
        protein: 0,
        proteincal: 0,
        fat: 0,
        fatcal: 0,
        carbs: 0,
        carbscal: 0
    });

    // useEffect para depuración, aunque actualmente está comentado. Este efecto se ejecutaría cada vez que los resultados cambian
    /*useEffect(() => { 
        console.log(results);
    }, [results]);*/

    return (
        <div className="mx-auto md:flex pt-3">
            <Form onResults={setResults} /> {/* Componente Form, pasando `setResults` como la función `onResults` */}
            <Results results={results} /> {/* Componente Results, pasando `results` para mostrar los resultados */}
        </div>
    )
}

