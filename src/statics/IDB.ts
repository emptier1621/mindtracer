const idbQuestions = [
  {
    question: 1,
    sintoma: "Tristeza.",
    opciones: [
      { opcion: 'No me siento triste.', valor: 0 },
      { opcion: 'Me siento triste gran parte del tiempo.', valor: 1 },
      { opcion: 'Me siento triste todo el tiempo.', valor: 2 },
      { opcion: 'Me siento tan triste o soy tan infeliz que no puedo soportarlo.', valor: 3 },
    ],
  },
  {
    question: 2,
    sintoma: "Pesimismo.",
    opciones: [
      { opcion: 'No estoy desalentado respecto del mi futuro.', valor: 0 },
      { opcion: 'Me siento más desalentado respecto de mi futuro que lo que solía estarlo.', valor: 1 },
      { opcion: 'No espero que las cosas funcionen para mi.', valor: 2 },
      { opcion: 'Siento que no hay esperanza para mi futuro y que sólo puede empeorar.', valor: 3 },
    ],
  },
  {
    question: 3,
    sintoma: "Fracaso.",
    opciones: [
      { opcion: 'No me siento como un fracasado.', valor: 0 },
      { opcion: 'He fracasado más de lo que hubiera debido.', valor: 1 },
      { opcion: 'Cuando miro hacia atrás, veo muchos fracasos.', valor: 2 },
      { opcion: 'Siento que como persona soy un fracaso total.', valor: 3 },
    ],
  },
  {
    question: 4,
    sintoma: "Pérdida de Placer.",
    opciones: [
      { opcion: 'Obtengo tanto placer como siempre por las cosas de las que disfruto.', valor: 0 },
      { opcion: 'No disfruto tanto de las cosas como solía hacerlo.', valor: 1 },
      { opcion: 'Obtengo muy poco placer de las cosas que solía disfrutar.', valor: 2 },
      { opcion: 'No puedo obtener ningún placer de las cosas de las que solía disfrutar.', valor: 3 },
    ],
  },
  {
    question: 5,
    sintoma: "sintomas de Culpa.",
    opciones: [
      { opcion: 'No me siento particularmente culpable.', valor: 0 },
      { opcion: 'Me siento culpable respecto de varias cosas que he hecho o que debería haber hecho.', valor: 1 },
      { opcion: 'Me siento bastante culpable la mayor parte del tiempo. ', valor: 2 },
      { opcion: 'Me siento culpable todo el tiempo.', valor: 3 },
    ],
  },
  {
    question: 6,
    sintoma: "sintomas de Castigo",
    opciones: [
      { opcion: 'No siento que este siendo castigado.', valor: 0 },
      { opcion: 'Siento que tal vez pueda ser castigado.', valor: 1 },
      { opcion: 'Espero ser castigado.', valor: 2 },
      { opcion: 'Siento que estoy siendo castigado. ', valor: 3 },
    ],
  },
  {
    question: 7,
    sintoma: "Disconformidad con uno mismo.",
    opciones: [
      { opcion: 'Siento acerca de mi lo mismo que siempre.', valor: 0 },
      { opcion: 'He perdido la confianza en mí mismo. ', valor: 1 },
      { opcion: 'Estoy decepcionado conmigo mismo.', valor: 2 },
      { opcion: 'No me gusto a mí mismo.', valor: 3 },
    ],
  },
  {
    question: 8,
    sintoma: "Autocrítica",
    opciones: [
      { opcion: 'No me critico ni me culpo más de lo habitual.', valor: 0 },
      { opcion: 'Estoy más crítico conmigo mismo de lo que solía estarlo.', valor: 1 },
      { opcion: 'Me critico a mí mismo por todos mis errores.', valor: 2 },
      { opcion: 'Me culpo a mí mismo por todo lo malo que sucede.', valor: 3 },
    ],
  },
  {
    question: 9,
    sintoma: "Pensamientos o Deseos Suicidas.",
    opciones: [
      { opcion: 'No tengo ningún pensamiento de matarme.', valor: 0 },
      { opcion: 'He tenido pensamientos de matarme, pero no lo haría.', valor: 1 },
      { opcion: 'Querría matarme', valor: 2 },
      { opcion: 'Me mataría si tuviera la oportunidad de hacerlo.', valor: 3 },
    ],
  },
  {
    question: 10,
    sintoma: "Llanto.",
    opciones: [
      { opcion: 'No lloro más de lo que solía hacerlo.', valor: 0 },
      { opcion: 'Lloro más de lo que solía hacerlo.', valor: 1 },
      { opcion: 'Lloro por cualquier pequeñez.', valor: 2 },
      { opcion: 'Siento ganas de llorar pero no puedo.', valor: 3 },
    ],
  },
  {
    question: 11,
    sintoma: "Agitación.",
    opciones: [
      { opcion: 'No estoy más inquieto o tenso que lo habitual.', valor: 0 },
      { opcion: 'Me siento más inquieto o tenso que lo habitual.', valor: 1 },
      { opcion: 'Estoy tan inquieto o agitado que me es difícil quedarme quieto.', valor: 2 },
      { opcion: 'Estoy tan inquieto o agitado que tengo que estar siempre en movimiento o haciendo algo.', valor: 3 },
    ],
  },
  {
    question: 12,
    sintoma: "Pérdida de Interés.",
    opciones: [
      { opcion: 'No he perdido el interés en otras actividades o personas.', valor: 0 },
      { opcion: 'Estoy menos interesado que antes en otras personas o cosas.', valor: 1 },
      { opcion: 'He perdido casi todo el interés en otras personas o cosas.', valor: 2 },
      { opcion: 'Me es difícil interesarme por algo.', valor: 3 },
    ],
  },
  {
    question: 13,
    sintoma: "Indecisión.",
    opciones: [
      { opcion: 'Tomo mis propias decisiones tan bien como siempre.', valor: 0 },
      { opcion: 'Me resulta más difícil que de costumbre tomar decisiones.', valor: 1 },
      { opcion: 'Encuentro mucha más dificultad que antes para tomar decisiones.', valor: 2 },
      { opcion: 'Tengo problemas para tomar cualquier decisión.', valor: 3 },
    ],
  },
  {
    question: 14,
    sintoma: "Desvalorización.",
    opciones: [
      { opcion: 'No siento que yo no sea valioso.', valor: 0 },
      { opcion: 'No me considero a mi mismo tan valioso y útil como solía considerarme', valor: 1 },
      { opcion: 'Me siento menos valioso cuando me comparo con otros.', valor: 2 },
      { opcion: 'Siento que no valgo nada.', valor: 3 },
    ],
  },
  {
    question: 15,
    sintoma: "Pérdida de Energía.",
    opciones: [
      { opcion: 'Tengo tanta energía como siempre.', valor: 0 },
      { opcion: 'Tengo menos energía que la que solía tener.', valor: 1 },
      { opcion: 'No tengo suficiente energía para hacer demasiado.', valor: 2 },
      { opcion: 'No tengo energía suficiente para hacer nada.', valor: 3 },
    ],
  },
  {
    question: 16,
    sintoma: "Cambios en los Hábitos de Sueño.",
    opciones: [
      { opcion: 'No he experimentado ningún cambio en mis hábitos de sueño.', valor: 0 },
      { opcion: 'Duermo un poco más que lo habitual.', valor: 1 },
      { opcion: 'Duermo un poco menos que lo habitual.', valor: 11 },
      { opcion: 'Duermo mucho más que lo habitual.', valor: 2 },
      { opcion: 'Duermo mucho menos que lo habitual.', valor: 22 },
      { opcion: 'Duermo la mayor parte del día.', valor: 3 },
      { opcion: 'Me despierto 1-2 horas más temprano y no puedo volver a dormirme.', valor: 33 },
    ],
  },
  {
    question: 17,
    sintoma: "Irritabilidad.",
    opciones: [
      { opcion: 'No estoy tan irritable que lo habitual.', valor: 0 },
      { opcion: 'Estoy más irritable que lo habitual.', valor: 1 },
      { opcion: 'Estoy mucho más irritable que lo habitual.', valor: 2 },
      { opcion: 'Estoy irritable todo el tiempo.', valor: 3 },
    ],
  },
  {
    question: 18,
    sintoma: "Cambios en el Apetito.",
    opciones: [
      { opcion: 'No he experimentado ningún cambio en mi apetito.', valor: 0 },
      { opcion: 'Mi apetito es un poco menor que lo habitual.', valor: 1 },
      { opcion: 'Mi apetito es un poco mayor que lo habitual. ', valor: 11 },
      { opcion: 'Mi apetito es mucho menor que antes.', valor: 2 },
      { opcion: 'Mi apetito es mucho mayor que lo habitual.', valor: 22 },
      { opcion: 'No tengo apetito en absoluto.', valor: 3 },
      { opcion: 'Quiero comer todo el día.', valor: 33 },
    ],
  },
  {
    question: 19,
    sintoma: "Dificultad de Concentración.",
    opciones: [
      { opcion: 'Puedo concentrarme tan bien como siempre.', valor: 0 },
      { opcion: 'No puedo concentrarme tan bien como habitualmente.', valor: 1 },
      { opcion: 'Me es difícil mantener la mente en algo por mucho tiempo.', valor: 2 },
      { opcion: 'Encuentro que no puedo concentrarme en nada.', valor: 3 },
    ],
  },
  {
    question: 20,
    sintoma: "Cansancio o Fatiga.",
    opciones: [
      { opcion: 'No estoy más cansado o fatigado que lo habitual.', valor: 0 },
      { opcion: 'Me fatigo o me canso más fácilmente que lo habitual.', valor: 1 },
      { opcion: 'Estoy demasiado fatigado o cansado para hacer muchas de las cosas que solía hacer.', valor: 2 },
      { opcion: 'Estoy demasiado fatigado o cansado para hacer la mayoría de las cosas que solía hacer.', valor: 3 },
    ],
  },
  {
    question: 21,
    sintoma: "Pérdida de Interés en el Sexo.",
    opciones: [
      { opcion: 'No he notado ningún cambio reciente en mi interés por el sexo.', valor: 0 },
      { opcion: 'Estoy menos interesado en el sexo de lo que solía estarlo.', valor: 1 },
      { opcion: 'Estoy mucho menos interesado en el sexo.', valor: 2 },
      { opcion: 'He perdido completamente el interés en el sexo.', valor: 3 },
    ],
  },
]

export default idbQuestions