import { useState } from "react"

/**
 * Componente de formulario para calcular macronutrientes basado en el peso y el objetivo del usuario.
 * 
 * Este componente permite al usuario ingresar su peso y seleccionar un objetivo (definición, mantenimiento o volumen),
 * y calcular los macronutrientes recomendados para ese objetivo.
 * 
 * Los resultados se envían al componente padre a través de la función `onResults`.
 * Si los campos están vacíos al presionar el botón de "calcular", se muestra una alerta centrada en la pantalla.
 * 
 * @param {function} onResults - Función para pasar los resultados al componente padre.
 * 
 * @returns {JSX.Element} - El formulario con campos para peso, objetivo, y el botón de cálculo.
 */

export const Form = ({ onResults }) => {
    const [weight, setWeight] = useState("");  // Estado para manejar el valor del peso ingresado por el usuario
    const [goal, setGoal] = useState(""); // Estado para manejar el valor del objetivo seleccionado por el usuario
    const [showAlert, setShowAlert] = useState(false); // Estado para controlar la visibilidad de la alerta si los campos no están completos

    const calculateMacros = (e) => {
        e.preventDefault(); // Evitar el comportamiento predeterminado del formulario

        // Si los campos no están completos, muestra la alerta
        if (!weight || !goal) {
            setShowAlert(true); // Mostrar la alerta
            return;  // Detener la ejecución si no se llenan los campos
        }

        // Si los campos están completos, ocultar la alerta
        setShowAlert(false);

        //calulate calories
        const weightnum = parseFloat(weight);
        let calories = 0;
        if (goal == "definition") calories = weightnum * 24 - 500;
        else if (goal == "maintenance") calories = weightnum * 24;
        else if (goal == "volume") calories = weight * 24 + 500

        //calucalte macros
        const proteinGrams = weightnum * 2;
        const proteinCalories = proteinGrams * 4;

        const fatCalories = calories * 0.3;
        const fatGrams = fatCalories / 9;

        const carbsCalories = calories - (proteinCalories + fatCalories);
        const carbsGrams = carbsCalories / 4;

        const results = {
            calories: Math.round(calories),
            protein: Math.round(proteinGrams),
            proteincal: Math.round(proteinCalories),
            fat: Math.round(fatGrams),
            fatcal: Math.round(fatCalories),
            carbs: Math.round(carbsGrams),
            carbscal: Math.round(carbsCalories)
        };

        onResults(results);
    };

    return (
        <section className="text-base text-center px-14 mx-auto md:flex-1">
            <div className="md:w-full">
                <h1 className="font-bold text-xl text-gray-700 dark:text-white">Macros Calculator</h1>

                {/* Mostrar alerta si showAlert es true */}
                {showAlert && (
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-full text-center">
                            <h2 className="text-red-500 font-bold text-lg">Error</h2>
                            <p className="text-gray-700 mt-2">Please fill in all fields.</p>
                            <button
                                onClick={() => setShowAlert(false)}
                                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}

                <form onSubmit={calculateMacros} id="formulario">
                    <div className="pt-[30px] pb-6 font-regular ">
                        <input
                            type="number"
                            id="number"
                            placeholder="Enter you weight (kg)"
                            min="1"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="px-4 py-2 h-[48px] border rounded-md text-gray-500 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="pb-6">
                        <label htmlFor="goals" className="sr-only">Choose yo goals</label>
                        <select
                            id="goals"
                            value={goal}
                            onChange={(e) => setGoal(e.target.value)}
                            className="w-full px-4 py-2 h-[48px] border rounded-md font-regular text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select your goal</option>
                            <option value="definition">Definiton</option>
                            <option value="maintenance">Maintenance</option>
                            <option value="volume">Volume</option>
                        </select>
                    </div>
                    <div className="">
                        <button type="submit" className="w-full px-4 py-2 h-[48px] rounded-md uppercase font-bold text-base text-white bg-neutral-800 hover:bg-neutral-900 dark:bg-neutral-600 dark:hover:bg-neutral-700">calculate macros</button>
                    </div>
                </form>

                <hr className="mt-8 md:sr-only" />

            </div>
        </section>

    )
}
