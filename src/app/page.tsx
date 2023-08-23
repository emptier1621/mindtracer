"use client"

import NavBar from '@/components/NavBar/NavBar'
import { Accordion, AccordionItem, Button, Popover, PopoverContent, PopoverTrigger, Spacer } from '@nextui-org/react'
import { IoIosAdd, IoIosAddCircle, IoIosBook, IoIosColorPalette, IoIosDocument, IoIosHelpCircle, IoIosLock, IoIosSearch, IoLogoAndroid, IoMdAddCircle, IoMdCheckmark, IoMdCheckmarkCircle, IoMdDoneAll, IoMdHeart, IoMdSearch } from 'react-icons/io'

export default function Home () {

  const comoFuncionaSections = [
    {
    "titulo":"Regístrate en la Plataforma",
    "contenido":"Comienza creando una cuenta en nuestra plataforma. Tu privacidad es nuestra prioridad, y tus datos personales se manejarán con total confidencialidad y seguridad. Tu registro es el primer paso para un futuro más brillante en salud mental. Puede hacerlo desde el botón de REGÍSTRATE en el menu de usuario."
    },
    {
    "titulo":"Pruebas Psicológicas",
    "contenido":"Una vez registrado, podrás acceder a las pruebas psicológicas TAT (Test de Apercepción Temática) e IDB-II (Inventario de Depresión de Beck - Segunda Edición). Estas pruebas han sido diseñadas por profesionales de la psicología y son ampliamente utilizadas en la evaluación de la depresión."
    },
    {
    "titulo":"Realiza las Pruebas Psicológicas",
    "contenido":"Una vez registrado, podrás acceder a nuestras Pruebas TAT (Test de Apercepción Temática) e IDB-II (Inventario de Depresión de Beck - Segunda Edición). Estas pruebas son la base de nuestro proyecto y tu contribución es esencial. Responde con sinceridad a las preguntas, y estarás ayudando a entrenar a nuestra IA."
    },
    {
    "titulo":"Tus Respuestas Son Claves",
    "contenido":"Cada respuesta que proporcionas es valiosa. Tus pensamientos, sentimientos y experiencias alimentarán el desarrollo de nuestra IA. Las Pruebas TAT exploran tu creatividad, mientras que el IDB-II evalúa la depresión. Tu participación es el ladrillo fundamental para construir un sistema más inteligente en salud mental."
    },
    {
    "titulo":"Privacidad y Seguridad",
    "contenido":"Puedes estar seguro de que tus datos están protegidos. Nuestra plataforma cumple con rigurosas medidas de privacidad y seguridad. Tu bienestar emocional es nuestra prioridad en cada paso del camino."
    },
    {
    "titulo":"El Futuro de la Salud Mental",
    "contenido":"Tus respuestas se utilizarán para entrenar a nuestra IA en futuros despliegues. Imagina un mundo donde la detección temprana de la depresión sea más efectiva, donde las personas reciban el apoyo que necesitan cuando más lo necesitan. Tu contribución hace que este futuro sea posible."
    },
  ]

  const pruebasPsicologicasSections = [
    {
      "titulo":"¿Qué son las Pruebas Psicológicas?",
      "descripcion":"Imagina estas pruebas como peldaños en la escalera hacia un bienestar emocional más elevado. Son cuestionarios diseñados meticulosamente que exploran tus pensamientos, sentimientos y experiencias. Cada respuesta que proporcionas es una valiosa pieza en el rompecabezas del bienestar mental."
    },
    {
      "titulo":"Las Pruebas TAT. (Test de Apercepción Temática)",
      "descripcion":"Las Pruebas TAT te invitan a explorar tu creatividad e imaginación. Te presentamos imágenes intrigantes y te pedimos que cuentes una historia a partir de ellas. Cada narración que creas es un ladrillo en la construcción de un sistema más inteligente para la salud mental."
    },
    {
      "titulo":"El IDB-II. (Inventario de Depresión de Beck - Segunda Edición)",
      "descripcion":"El IDB-II es tu aliado en la evaluación de la depresión. Respondiendo sinceramente a sus preguntas, estás contribuyendo al desarrollo de una herramienta que podría cambiar la vida de muchas personas al identificar la depresión de manera temprana y precisa."
    },
    {
      "titulo":"¿Por qué Realizar Estas Pruebas?",
      "descripcion":"Tu participación es la base de nuestro proyecto. Al realizar estas pruebas, estás proporcionando los datos necesarios para entrenar a nuestra IA y hacerla más capaz de detectar síntomas de depresión en futuros usuarios. Cada respuesta es un paso más hacia un futuro más saludable."
    },
    {
      "titulo":"Tu Contribución en Acción.",
      "descripcion":"Después de completar las pruebas, tu información se utilizará para entrenar a nuestra IA. En futuros despliegues, esta IA podrá proporcionar resultados precisos y recomendaciones significativas a usuarios de todo el mundo, ayudando a cambiar la forma en que abordamos la salud mental."
    },
    {
      "titulo":"Empieza Tu Viaje de Contribución.",
      "descripcion":"Listo para ser parte de este emocionante viaje? Regístrate hoy y contribuye a construir un futuro más saludable y compasivo para todos. Tu participación en estas Pruebas Psicológicas es un paso vital hacia un mundo donde la detección temprana de la depresión sea más efectiva que nunca."
    },
  ]
  const acercaDeSections = [
    {
      "titulo":"Nuestra Misión",
      "descripcion":"Nuestra misión es simple pero profunda: mejorar la vida de las personas a través de la tecnología y la comprensión emocional. Creemos que la salud mental es igual de importante que la salud física y estamos decididos a hacer que la detección temprana de la depresión sea más accesible y efectiva que nunca."
    },
    {
      "titulo":"El Poder de la Ciencia y la Tecnología",
      "descripcion":"Nos inspiramos en el poder de la ciencia y la tecnología para transformar la atención de la salud mental. Al combinar la experiencia en psicología con la inteligencia artificial de vanguardia, hemos creado una plataforma que puede ayudar a millones a comprender y gestionar sus síntomas emocionales."
    },
    {
      "titulo":"Tu Bienestar es Nuestra Prioridad",
      "descripcion":"Finalmente, queremos que sepas que tu bienestar es nuestra prioridad número uno. Estamos aquí para ofrecerte apoyo y recursos en tu camino hacia una vida emocional más saludable."
    },
    {
      "titulo":"La Comunidad en el Centro",
      "descripcion":"Creemos en el poder de la comunidad y la empatía. Queremos que te sientas parte de algo más grande. A medida que utilices nuestras Pruebas Psicológicas, estás contribuyendo a un banco de datos que tiene el potencial de ayudar a innumerables personas en todo el mundo."
    }
  ]
  return (
      <>
      <header>
        <NavBar />
      </header>
<main>
{/* Como funciona */}
<section id='CómoFunciona' className='w-full pt-16 flex-col h-full md:pb-0 pb-20 overflow-hidden items-center justify-center overflow-x-hidden'>
          {/* titulo */}
          <div className='w-full flex items-center justify-center'>
            <h2 className='text-primary text-2xl py-2 hover:scale-105 transition duration-200 hover:cursor-default'>¿Cómo Funciona?</h2>
          </div>
          
         

          {/* etapas */}

          <div className="pt-4 flex h-96 w-full flex-wrap gap-6 justify-center items-center">
          <p className='px-4 text-foreground text-center w-full'>Te invitamos a unirte a nosotros en este viaje hacia un mundo donde la salud mental sea tratada con la misma importancia que cualquier otro aspecto de la salud. Juntos, podemos lograr un cambio significativo y positivo en la forma en que abordamos la salud emocional.</p>
          <p className='px-4 text-foreground text-center w-full'>¡Bienvenido a nuestra comunidad dedicada a un futuro más saludable y emocionalmente equilibrado!</p>

            {comoFuncionaSections.map((item, index) => {
              
              return (
                <Popover key={item.titulo} placement="top" color={
                  index===0? "primary":
                  index===1? "secondary":
                  index===2? "success":
                  index===3? "danger":
                  index===4? "warning":"default"
               } >
                  <PopoverTrigger>
                    
                    <Button variant='bordered' 
                    color={
                         index===0? "primary":
                         index===1? "secondary":
                         index===2? "success":
                         index===3? "danger":
                         index===4? "warning":"default"

                      } 
                      className="capitalize grid h-max w-max p-2">
                    <div className='h-full w-full flex justify-center items-center'>
                    {
                         index===0? <IoIosAddCircle className="text-2xl my-2"/>:
                         index===1? <IoIosBook className="text-2xl my-2"/>:
                         index===2? <IoIosDocument className="text-2xl my-2"/>:
                         index===3? <IoMdCheckmark className="text-2xl my-2"/>:
                         index===4? <IoIosLock className="text-2xl my-2"/>:
                         index===5? <IoMdHeart className="text-2xl my-2"/>:""

                    }
                    </div>
                    <p> 
                      {
                        index+1
                      }
                      </p>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className='w-64'>
                    <div className="px-1 py-2">
                      <div className="text-small font-bold">{item.titulo}</div>
                      <div className="text-tiny">{item.contenido}</div>
                    </div>
                  </PopoverContent>
                </Popover>

              )
            })}

          </div>


  
          {/* Pruebas psicologicas */}


            
        </section>

        <section id='PruebasPsicológicas' className='w-full flex-col h-full overflow-hidden items-center justify-center overflow-x-hidden'>
          {/* titulo */}
          <div className='w-full flex items-center justify-center'>
            <h3 className='mt-16 text-primary text-2xl hover:scale-105 transition duration-200 hover:cursor-default'>Pruebas Psicológicas</h3>
          </div>
        

          {/* etapas */}

          <div className="pt-4 flex w-full flex-wrap gap-6 justify-center items-center">
          <p className='px-16 text-foreground text-center w-full'>En este emocionante primer lanzamiento de nuestra aplicación, tienes la oportunidad de ser parte fundamental de un avance en salud mental.</p>
          <Accordion>
            {
              pruebasPsicologicasSections.map(
                (item, index)=>{
                  
                  const color=
                    index===0? "default":
                    index===1? "secondary":
                    index===2? "success":
                    index===3? "danger":
                    index===4? "warning":
                    index===5? "primary":"default"

                  return(   
                                         
                        <AccordionItem key={item.titulo} aria-label={item.titulo} subtitle="Presione para expandir" title={<span>
                              <strong className={`text-${color}`}>{item.titulo}</strong>
                            </span>}>
                          {item.descripcion}
                        </AccordionItem>  
                )}  
              )
            }
            </Accordion>
          </div>


  
          {/* Pruebas psicologicas */}


            
        </section>

        <section id='Acercade' className='w-full pt-16 flex-col h-full md:pb-0 pb-20 overflow-hidden items-center justify-center overflow-x-hidden'>
          {/* titulo */}
          <div className='w-full flex items-center justify-center'>
            <h2 className='text-primary text-2xl py-2 hover:scale-105 transition duration-200 hover:cursor-default'>Acerca de</h2>
          </div>
          
         

          {/* etapas */}

          <div className="pt-4 grid place-items-center mb-4 md:flex h-full w-full md:flex-wrap gap-6 justify-center items-center">
          <p className='px-16 text-foreground text-center w-full'>En el corazón de nuestra plataforma, encontrarás una dedicación inquebrantable a la salud mental y al bienestar emocional. Somos un equipo apasionado y comprometido que busca marcar la diferencia en la vida de las personas. Permítenos presentarnos:</p>

            {acercaDeSections.map((item, index) => {
              
              return (
                <Popover key={item.titulo} placement="top" color={
                  index===0? "primary":
                  index===1? "secondary":
                  index===2? "success":
                  index===3? "danger":
                  index===4? "warning":"default"
               } >
                  <PopoverTrigger>
                    
                    <Button variant='flat' 
                    color={
                         index===0? "primary":
                         index===1? "secondary":
                         index===2? "success":
                         index===3? "danger":
                         index===4? "warning":"default"

                      } 
                      className="capitalize grid h-max w-max p-2 hover:scale-105">
                    <div className='h-full w-full flex justify-center items-center'>
                    <p> 
                      {
                        item.titulo
                      }
                      </p>
                    </div>
                    
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className='w-64'>
                    <div className="px-1 py-2">
                      <div className="text-small font-bold">{item.titulo}</div>
                      <div className="text-tiny">{item.descripcion}</div>
                    </div>
                  </PopoverContent>
                </Popover>

              )
            })}

          </div>


  
          {/* Pruebas psicologicas */}


            
        </section>


</main>
 
          </>

  )
}