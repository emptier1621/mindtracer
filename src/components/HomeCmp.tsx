import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  CardHeader,
  Divider,
  CardFooter,
  Avatar,
  AvatarIcon,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import {
  IoIosAddCircle,
  IoIosBook,
  IoIosDocument,
  IoMdCheckmark,
  IoIosLock,
  IoMdHeart,
  IoIosStar,
  IoIosHappy,
  IoMdPlanet,
  IoIosInformationCircleOutline,
  IoLogoGithub,
} from "react-icons/io";

export default function HomeCmp() {
  const comoFuncionaSections = [
    {
      titulo: "Regístrate en la Plataforma",
      contenido:
        "Comienza creando una cuenta en nuestra plataforma. Tu registro es el primer paso para un futuro más brillante en salud mental. Puede hacerlo desde el botón de REGÍSTRATE haciendo click el menú de INVITADO.",
    },
    {
      titulo: "Realiza las Pruebas Psicológicas",
      contenido:
        "Una vez registrado, podrás acceder a nuestras Pruebas TAT (Test de Apercepción Temática) e IDB-II (Inventario de Depresión de Beck - Segunda Edición). Tu contribución es esencial.",
    },
    {
      titulo: "Tus Respuestas Son Claves",
      contenido:
        "Cada respuesta que proporcionas es valiosa. Tus pensamientos, sentimientos y experiencias alimentarán el desarrollo de nuestra IA. Tu participación es el ladrillo fundamental para construir un sistema más inteligente en salud mental.",
    },
    {
      titulo: "Privacidad y Seguridad",
      contenido:
        "Puedes estar seguro de que tus datos están protegidos. Nuestra plataforma cumple con las medidas de privacidad y seguridad respectivas. Tu bienestar emocional es nuestra prioridad en cada paso del camino.",
    },
    {
      titulo: "El Futuro de la Salud Mental",
      contenido:
        "Imagina un mundo donde la detección temprana de la depresión sea más efectiva, donde las personas reciban el apoyo que necesitan cuando más lo necesitan. Tu contribución hace que este futuro sea posible.",
    },
  ];

  const pruebasPsicologicasSections = [
    {
      titulo: "¿Qué son las Pruebas Psicológicas?",
      descripcion:
        "Imagina estas pruebas como peldaños en la escalera hacia un bienestar emocional más elevado. Son cuestionarios diseñados meticulosamente que exploran tus pensamientos, sentimientos y experiencias. Cada respuesta que proporcionas es una valiosa pieza en el rompecabezas del bienestar mental.",
    },
    {
      titulo: "Las Pruebas TAT. (Test de Apercepción Temática)",
      descripcion:
        "Las Pruebas TAT te invitan a explorar tu creatividad e imaginación. Te presentamos imágenes intrigantes y te pedimos que cuentes una historia a partir de ellas. Cada narración que creas es un ladrillo en la construcción de un sistema más inteligente para la salud mental.",
    },
    {
      titulo: "El IDB-II. (Inventario de Depresión de Beck - Segunda Edición)",
      descripcion:
        "El IDB-II es tu aliado en la evaluación de la depresión. Respondiendo sinceramente a sus preguntas, estás contribuyendo al desarrollo de una herramienta que podría cambiar la vida de muchas personas al identificar la depresión de manera temprana y precisa.",
    },
    {
      titulo: "¿Por qué Realizar Estas Pruebas?",
      descripcion:
        "Tu participación es la base de nuestro proyecto. Al realizar estas pruebas, estás proporcionando los datos necesarios para entrenar a nuestra IA y hacerla más capaz de detectar síntomas de depresión en futuros usuarios. Cada respuesta es un paso más hacia un futuro más saludable.",
    },
    {
      titulo: "Tu Contribución en Acción.",
      descripcion:
        "Después de completar las pruebas, tu información se utilizará para entrenar a nuestra IA. En futuros despliegues, esta IA podrá proporcionar resultados precisos y recomendaciones significativas a usuarios de todo el mundo, ayudando a cambiar la forma en que abordamos la salud mental.",
    },
    {
      titulo: "Empieza Tu Viaje de Contribución.",
      descripcion:
        "Listo para ser parte de este emocionante viaje? Regístrate hoy y contribuye a construir un futuro más saludable y compasivo para todos. Tu participación en estas Pruebas Psicológicas es un paso vital hacia un mundo donde la detección temprana de la depresión sea más efectiva que nunca.",
    },
  ];
  const acercaDeSections = [
    {
      titulo: "Nuestra Misión",
      descripcion:
        "Nuestra misión es simple pero profunda: mejorar la vida de las personas a través de la tecnología y la comprensión emocional. Creemos que la salud mental es igual de importante que la salud física y estamos decididos a hacer que la detección temprana de la depresión sea más accesible y efectiva que nunca.",
    },
    {
      titulo: "El Poder de la Ciencia y la Tecnología",
      descripcion:
        "Nos inspiramos en el poder de la ciencia y la tecnología para transformar la atención de la salud mental. Al combinar la experiencia en psicología con la inteligencia artificial de vanguardia, hemos creado una plataforma que puede ayudar a millones a comprender y gestionar sus síntomas emocionales.",
    },
    {
      titulo: "Tu Bienestar es Nuestra Prioridad",
      descripcion:
        "Finalmente, queremos que sepas que tu bienestar es nuestra prioridad número uno. Estamos aquí para ofrecerte apoyo y recursos en tu camino hacia una vida emocional más saludable.",
    },
    {
      titulo: "La Comunidad en el Centro",
      descripcion:
        "Creemos en el poder de la comunidad y la empatía. Queremos que te sientas parte de algo más grande. A medida que utilices nuestras Pruebas Psicológicas, estás contribuyendo a un banco de datos que tiene el potencial de ayudar a innumerables personas en todo el mundo.",
    },
  ];

  const titulo = "MindTracer";
  const p1 =
    "MindTracer te brinda una ventana única a tu bienestar emocional utilizando inteligencia artificial y dos herramientas clave: el Test de Apercepción Temática y el Inventario de la Depresión de Beck, para una evaluación precisa de tu salud mental.";
  const seccion1titulo = "Pruebas Psicológicas";
  const seccion1Descripcion =
    "Estamos actualmente en la fase de recolección de datos, trabajando con dedicación para enriquecer nuestro conjunto de información. Esto permitirá a MindTracer detectar de manera sutil signos de la depresión en tu comportamiento y respuestas emocionales. ";

  return (
    <>
      <section
        id="CómoFunciona"
        className="w-full pt-16 flex-col h-full md:pb-0 overflow-hidden items-center justify-center overflow-x-hidden"
      >
        {/* titulo */}
        <div className="w-full flex items-center justify-center">
          <h1 className="text-warning text-2xl py-2 hover:scale-105 transition duration-200 hover:cursor-default">
            {titulo}
          </h1>
        </div>

        {/* etapas */}

        <div className="pt-1 flex h-full w-full flex-wrap gap-6 justify-center items-center hover:cursor-default">
          <p className="px-4 text-foreground text-center w-full">{p1}</p>
          {comoFuncionaSections.map((item, index) => {
            return (
              <Popover key={item.titulo} placement="top" color={"primary"}>
                <PopoverTrigger>
                  <Button
                    variant="bordered"
                    color={"primary"}
                    className="capitalize grid h-max w-max p-2"
                  >
                    <div className="h-full w-full flex justify-center items-center">
                      {index === 0 ? (
                        <IoIosAddCircle className="text-2xl my-2" />
                      ) : index === 1 ? (
                        <IoIosBook className="text-2xl my-2" />
                      ) : index === 2 ? (
                        <IoMdCheckmark className="text-2xl my-2" />
                      ) : index === 3 ? (
                        <IoIosLock className="text-2xl my-2" />
                      ) : index === 4 ? (
                        <IoMdHeart className="text-2xl my-2" />
                      ) : (
                        ""
                      )}
                    </div>
                    <p>{index + 1}°</p>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64">
                  <div className="px-1 py-2">
                    <div className="text-small font-bold">{item.titulo}</div>
                    <div className="text-tiny">{item.contenido}</div>
                  </div>
                </PopoverContent>
              </Popover>
            );
          })}
        </div>

        {/* Pruebas psicologicas */}
      </section>

      <section
        id="PruebasPsicológicas"
        className="w-full flex-col h-full overflow-hidden items-center justify-center overflow-x-hidden"
      >
        {/* titulo */}
        <div className="w-full flex items-center justify-center">
          <h3 className="mt-16 text-warning text-2xl hover:scale-105 transition duration-200 hover:cursor-default">
            {seccion1titulo}
          </h3>
        </div>

        {/* etapas */}

        <div className="pt-4 flex w-full flex-wrap gap-6 justify-center items-center hover:cursor-default">
          <p className="px-4 text-foreground text-center w-full">
            {seccion1Descripcion}
          </p>
          <Accordion>
            {pruebasPsicologicasSections.map((item) => {
              return (
                <AccordionItem
                  key={item.titulo}
                  aria-label={item.titulo}
                  subtitle="Presione para expandir"
                  title={
                    <span>
                      <strong className={`text-primary`}>{item.titulo}</strong>
                    </span>
                  }
                >
                  {item.descripcion}
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Pruebas psicologicas */}
      </section>

      <section
        id="Acercade"
        className="w-full pt-16 flex-col h-full md:pb-0 pb-5 overflow-hidden items-center justify-center overflow-x-hidden"
      >
        {/* titulo */}
        <div className="w-full flex items-center justify-center">
          <h2 className="text-warning text-2xl py-2 hover:scale-105 transition duration-200 hover:cursor-default">
            Acerca de
          </h2>
        </div>

        {/* etapas */}

        <div className="pt-4 px-4 grid place-items-center mb-4 md:flex h-full hover:cursor-default w-full md:flex-wrap gap-6 justify-center items-center">
          <p className="px-4 text-foreground text-center w-full">
            En el corazón de nuestra plataforma, encontrarás una dedicación
            inquebrantable a la salud mental y al bienestar emocional. Somos un
            equipo apasionado y comprometido que busca marcar la diferencia en
            la vida de las personas. Permítenos presentarnos:
          </p>

          <div className="grid place-items-center gap-4 px-6">
            {acercaDeSections.map((item, index) => {
              return (
                <Card key={item.titulo}>
                  <CardHeader className="flex w-full items-center justify-center text-primary">
                    <div className="h-full w-full flex justify-center items-center">
                      <p className="text-base flex gap-1 text-center h-max items-center justify-center">
                        <IoMdPlanet />
                        {item.titulo}
                        <IoMdPlanet />
                      </p>
                    </div>
                  </CardHeader>
                  <Divider />
                  <CardBody>
                    {" "}
                    <div className="px-2">
                      <div className="text-base text-justify">
                        {item.descripcion}
                      </div>
                    </div>
                  </CardBody>
                  <Divider />
                  <CardFooter className="flex w-full items-center justify-center text-primary">
                    <IoIosInformationCircleOutline className="text-2xl" />
                  </CardFooter>
                </Card>
              );
            })}
            <Divider />
            <div>
              <div className="w-full flex items-center justify-center">
                <h2 className="text-danger text-2xl py-2 hover:scale-105 transition duration-200 hover:cursor-default">
                  Desarrollador
                </h2>
              </div>

              <Card className="max-w-[340px] hover:scale-105">
                <CardHeader className="justify-between">
                  <div className="flex gap-5">
                    <Avatar className="invert-0" src="/mindtracer.svg" />
                    <div className="flex flex-col gap-1 items-start justify-center">
                      <h4 className="text-small font-semibold leading-none text-default-600">
                        Miguel Aliaga
                      </h4>
                      <h5 className="text-small tracking-tight text-default-400">
                        aliagaf404@gmail.com
                      </h5>
                    </div>
                  </div>
                  <Button
                    className="ml-4"
                    color="danger"
                    radius="full"
                    size="sm"
                    variant={"ghost"}
                    as={Link}
                    target="_blank"
                    href="https://github.com/emptier1621"
                  >
                    <IoLogoGithub className="text-2xl" />
                  </Button>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>

        {/* Pruebas psicologicas */}
      </section>
    </>
  );
}
