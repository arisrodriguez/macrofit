import { Header } from './components/Header'
import { AppOverview } from './components/AppOverview'
import { Content } from './components/Content'
import { Footer } from './components/Footer'
import './index.css'

/**
 * Componente App
 * 
 * El componente `App` sirve como el contenedor principal de la aplicación. Reúne todos los 
 * componentes individuales, como `Header`, `AppOverview`, `Content` y `Footer`, para formar 
 * el diseño completo de la página. El diseño es responsive y utiliza clases de Tailwind CSS 
 * para lograr un diseño limpio y moderno.
 * 
 * Estructura:
 * - `Header`: Contiene la barra de navegación y el interruptor de tema.
 * - `AppOverview`: Muestra un resumen o texto introductorio sobre la aplicación.
 * - `Content`: Contiene la sección principal interactiva donde los usuarios ingresan datos y ven los resultados.
 * - `Footer`: Incluye los créditos y los enlaces al desarrollador o recursos relevantes.
 * 
 * Características:
 * - Diseño responsive utilizando Tailwind CSS.
 * - Cambio de tema entre modo claro y oscuro.
 * - Flexbox para la alineación y centrado de los componentes.
 * 
 * Clases de Tailwind CSS aplicadas:
 * - `md:flex`: Aplica el diseño Flexbox en pantallas medianas y más grandes.
 * - `md:items-center`: Centra los elementos verticalmente en Flexbox en pantallas medianas y más grandes.
 * - `md:justify-center`: Centra los elementos horizontalmente en Flexbox en pantallas medianas y más grandes.
 * - `md:h-[100vh]`: Establece la altura al 100% de la altura del viewport en pantallas medianas y más grandes.
 * - `bg-white` / `dark:bg-neutral-900`: Cambia el color de fondo para el modo claro y oscuro.
 * - `mx-auto`: Centra el contenido horizontalmente con márgenes automáticos.
 * - `md:w-3/4`: Establece el ancho al 75% del contenedor principal en pantallas medianas y más grandes.
 * - `md:bg-gray-100` / `md:dark:bg-neutral-800`: Proporciona colores de fondo para el modo claro y oscuro.
 * - `md:rounded-xl`: Redondea las esquinas del contenedor en pantallas medianas y más grandes.
 * - `flex`: Aplica Flexbox a los elementos `div` para administrar la alineación del diseño.
 * 
 * @returns {JSX.Element} El componente raíz que incluye todos los componentes hijos (Header, AppOverview, Content, Footer).
 */

function App() {
  return (
    <div className='md:flex md:items-center md:justify-center md:h-[100vh]'>
      <div className="bg-white dark:bg-neutral-900 mx-auto md:w-3/4 md:bg-gray-100 md:dark:bg-neutral-800 md:rounded-xl flex items-center justify-center">
        <div className="w-full">
          <Header />
          <AppOverview />
          <Content />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
