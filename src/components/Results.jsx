/**
 * Componente que muestra los resultados de los cálculos de macronutrientes.
 * 
 * Este componente recibe los resultados de los cálculos (calorías, carbohidratos, proteínas, grasas)
 * desde el componente principal (`Content`) y los presenta de manera visual.
 * 
 * - Muestra los valores calculados para los macronutrientes y el gasto energético requerido (calorías).
 * 
 * @param {Object} props - Propiedades pasadas al componente.
 * @param {Object} props.results - Un objeto con los resultados de los cálculos.
 * @param {number} props.results.calories - Calorías calculadas.
 * @param {number} props.results.carbs - Gramos de carbohidratos calculados.
 * @param {number} props.results.carbscal - Calorías de carbohidratos calculados.
 * @param {number} props.results.protein - Gramos de proteína calculados.
 * @param {number} props.results.proteincal - Calorías de proteínas calculados.
 * @param {number} props.results.fat - Gramos de grasa calculados.
 * @param {number} props.results.fatcal - Calorías de grasas calculados.
 * @returns {JSX.Element} - El componente `Results` que muestra los resultados de los cálculos.
 */

export const Results = ({ results }) => {
    return (
        <div className="pt-8 px-14 mx-auto text-base text-center md:flex-1 md:py-0" id="show-result">
            <div className="md:w-full">
                <div className="md:items-center md:justify-center">
                    <div>
                        <h2 className="font-medium text-lg text-white bg-blue-600 rounded-md py-2">Required Energy Expenditure</h2>
                        <span className="font-semibold dark:text-white" id="cals">{results.calories} Kcal</span>
                    </div>
                    <div>
                        <h3 className="font-medium text-lg text-white bg-cyan-700 rounded-md py-2">Carbohydrates</h3>
                        <span className="font-semibold dark:text-white" id="carbs">{results.carbs} g / {results.carbscal} kcal</span>
                    </div>
                    <div>
                        <h3 className="font-medium text-lg text-white bg-green-700 rounded-md py-2">Protein</h3>
                        <span className="font-semibold dark:text-white" id="protein">{results.protein} g / {results.proteincal} kcal</span>
                    </div>
                    <div>
                        <h3 className="font-medium text-lg text-white bg-red-600 rounded-md py-2">Fat</h3>
                        <span className="font-semibold dark:text-white" id="fat">{results.fat} g / {results.fatcal} kcal</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

