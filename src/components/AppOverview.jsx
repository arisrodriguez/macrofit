import React from 'react'

/**
 * Componente que muestra una breve descripción de la aplicación.
 * 
 * Este componente presenta un párrafo explicativo que describe la funcionalidad principal de la aplicación, 
 * "MacroFit", enfocada en la optimización de la nutrición mediante el cálculo y ajuste de macronutrientes.
 * El texto está diseñado para ser responsivo y se adapta a pantallas más grandes mediante clases de Tailwind CSS.
 * 
 * @returns {JSX.Element} - El componente `AppOverview` con un párrafo que describe la aplicación.
 */

export const AppOverview = () => {
    return (
        <section className='py-5 px-14 md:px-0 md:w-[90%] mx-auto'>
            <p className='font-light text-lg text-gray-500 dark:text-white'>
                Optimize your nutrition with MacroFit, the ultimate app for calculating and adjusting your macronutrients. Customize your fitness goals, maintain a healthy lifestyle, and achieve your targets with our app's help. Start transforming your well-being today!
            </p>
        </section>
    )
}
