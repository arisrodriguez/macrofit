import { useState, useEffect } from 'react'
import lightModeIcon from '../assets/images/sun-solid.svg'
import darkModeIcon from '../assets/images/moon-solid.svg'

/**
 * Componente de encabezado que permite cambiar entre el modo claro y oscuro.
 * 
 * Este componente detecta el tema predeterminado del sistema y permite al usuario
 * alternar entre el modo claro y oscuro mediante un clic en el ícono.
 * 
 * - El ícono del tema cambia dependiendo de si el modo oscuro está activado o no.
 * - El tema se guarda temporalmente en el `document.documentElement` usando la clase `dark`.
 * 
 * @returns {JSX.Element} - El componente `Header` que muestra el nombre de la app y el ícono de cambio de tema.
 */

export const Header = () => {

    const [isDarkMode, setIsDarkMode] = useState(false); // Estado que indica si el modo oscuro está activado o no.

    // Efecto para detectar y aplicar el tema predeterminado del sistema.
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const initialTheme = mediaQuery.matches;
        setIsDarkMode(initialTheme);
        document.documentElement.classList.toggle('dark', initialTheme);

        // Función que maneja el cambio del tema cuando el usuario cambia la configuración del sistema.
        const handleChange = (e) => {
            setIsDarkMode(e.matches);
            document.documentElement.classList.toggle('dark', e.matches);
        };
        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange); // Cleanup del efecto, eliminando el listener cuando el componente se desmonta.
    }, []);

    // Función que alterna el modo oscuro al hacer clic en el ícono del tema.
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark', !isDarkMode);
    };

    return (
        <header className='w-full h-[60px]'>
            <div className='flex justify-between items-center px-14 h-full'>
                <h1 className="text-xl font-bold text-black dark:text-white">MacroFit</h1>
                <img src={isDarkMode ? darkModeIcon : lightModeIcon} alt="icono light-dark mode" className='w-[20px] h-[20px] ml-auto cursor-pointer' onClick={toggleTheme} />
            </div>
        </header>
    )
}
