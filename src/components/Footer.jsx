/**
 * Componente Footer de la aplicación.
 * 
 * Este componente muestra un pie de página que contiene información sobre la autoría del proyecto,
 * con un enlace a la página de GitHub de Aristides Rodríguez. El texto es estilizado usando Tailwind CSS 
 * y permite interacciones suaves cuando se pasa el cursor sobre el enlace del autor.
 * 
 * @returns {JSX.Element} - El componente `Footer` con el nombre del autor y un enlace a su GitHub.
 */

export const Footer = () => {
    return (
        <footer className="flex items-center justify-center gap-2 text-center text-lg py-8 md:pt-5">
            <p className="font-light text-gray-600 dark:text-neutral-300">Coded by</p>
            <p className="font-bold dark:font-normal text-violet-700 md:dark:text-white relative group">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/arisrodriguez" className="relative group">
                    Aris Rodríguez
                    <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-violet-700 transition-all duration-300 group-hover:w-full group-hover:bg-violet-700"></span>
                </a>
            </p>
        </footer>

    )
}
