export const modules=[
 {id:"entorno",label:"1. Diagnóstico multidimensional",short:"Entorno",chapter:"Cap. 3"},
 {id:"investigacion",label:"2. Diseño metodológico y sesgos",short:"Investigación",chapter:"Cap. 4"},
 {id:"directorio",label:"3. Simulador de directorio",short:"Directorio",chapter:"Casos"},
 {id:"cuantitativo",label:"4. Aritmética de marketing",short:"Cálculos",chapter:"Laboratorio"},
 {id:"tarjetas",label:"5. Tarjetas de maestría",short:"Conceptos",chapter:"Cap. 3 y 4"}
];

const choice=(id,module,title,context,options,answer,explanation,meta={})=>({id,module,type:"choice",title,context,options,answer,explanation,...meta});
export const activities=[
 choice("e1","entorno","Aranceles al acero importado","Una ensambladora enfrenta un alza del 25% y riesgo de desabastecimiento.",["Micro · Intermediarios · Negociación","Macro · Político-legal · Adaptación","Macro · Tecnológico · Innovación","Micro · Público financiero · Negociación"],1,"Es macroentorno político-legal. La firma debe adaptarse, buscar fuentes locales y recalcular costos."),
 choice("e2","entorno","Derecho de anaquel","Walmart exige a una pyme de pastas un 8% adicional o reubicará sus productos.",["Macro · Económico · Adaptación","Micro · Intermediarios · Negociación","Macro · Cultural · Innovación","Micro · Competidores · Adaptación"],1,"Es un intermediario del microentorno: existe relación directa y margen para negociar volumen, rotación y canales."),
 choice("e3","entorno","Nuevas estructuras familiares","Crecen los hogares monoparentales y unipersonales; se estanca la demanda de heladeras familiares.",["Micro · Clientes · Negociación","Macro · Demográfico · Innovación proactiva","Macro · Natural · Adaptación","Micro · Competidores · Innovación"],1,"Es una transformación demográfica que invita a investigar y rediseñar la cartera hacia soluciones compactas."),
 choice("e4","entorno","Un fondo activista presiona","Un fondo adquiere 12% de las acciones y exige cancelar la inversión verde para elevar dividendos.",["Macro · Económico · Adaptación","Micro · Público financiero · Negociación","Macro · Político-legal · Adaptación","Micro · Proveedores · Innovación"],1,"Los accionistas integran los públicos financieros del microentorno. Corresponde negociar con evidencia de retorno y riesgo ESG."),
 choice("e5","entorno","Racionamiento industrial de agua","La contaminación de acuíferos obliga al municipio a reducir 40% el uso industrial de agua.",["Macro · Natural · Innovación proactiva","Micro · Proveedores · Negociación","Macro · Demográfico · Adaptación","Micro · Público local · Negociación"],0,"Es una fuerza del macroentorno natural. La respuesta proactiva incluye recirculación, ecoeficiencia y reducción de huella hídrica."),
 choice("e6","entorno","Un competidor SaaS cambia el mercado","Un rival reduce a la mitad el costo de implementación mediante suscripción mensual sin hardware inicial.",["Macro · Tecnológico · Adaptación","Micro · Competidores · Innovación proactiva","Micro · Intermediarios · Negociación","Macro · Económico · Adaptación"],1,"El rival es un actor del microentorno. Requiere revisar el modelo comercial, pricing por uso y ventajas de soporte."),
 choice("i1","investigacion","Red Bull: precio y canibalización","Se estudia lanzar agua vitaminizada a USD 2,80 sin dañar la lata clásica.",["Encuestas descriptivas en gimnasios","Exploración cualitativa y experimento causal en plazas comparables","Diez focus groups para fijar el precio"],1,"La fase cualitativa descubre ocasiones de uso; el experimento permite aislar canibalización y efecto de precio."),
 choice("i2","investigacion","Nielsen: 9.000 hogares","Finanzas afirma que 9.000 hogares no pueden representar a millones de habitantes.",["Aceptar un margen de error del 30%","Explicar muestreo probabilístico estratificado y error estándar","Reemplazarlo por encuestas telefónicas diarias"],1,"La precisión depende del diseño y del tamaño absoluto de la muestra, además del control de cobertura y no respuesta."),
 choice("i3","investigacion","Frito-Lay y neuromarketing","Las encuestas elogiaban un envase brillante, pero las ventas caían 12%.",["El brillo activaba dolor físico","El empaque despertaba culpa no verbalizada; se rediseñó mate","La biometría no produjo patrones útiles"],1,"La contradicción ilustra el valor —y los límites— de combinar declaraciones con observación biométrica."),
 choice("i4","investigacion","Una pregunta manipuladora","“Dado que nuestra marca lidera en calidad, ¿qué tan superior considera nuestro servicio?”",["Es técnicamente correcta","Es inductora; debe neutralizarse con escala equilibrada","Debe ser siempre abierta"],1,"Los adjetivos anticipan una conclusión y sesgan la respuesta. La redacción debe ser neutral y admitir todo el rango."),
 choice("d1","directorio","Target durante la recesión","Las ventas caen y la marca es percibida como cara. ¿Cómo equilibrar valor y diferenciación?",["Liquidar diseño y competir solo por precio","Mantener diseño, sumar compra frecuente y marca propia","Sostener precios altos con publicidad aspiracional"],1,"El rebalanceo hacia “pague menos” protege la diferenciación y aumenta frecuencia sin una guerra frontal de costos.",{kpis:["Ventas/tienda −10%","Walmart +5%","Imagen de precio: cara"]}),
 choice("d2","directorio","Harrah’s Total Rewards","La analítica muestra que 26% de clientes genera 82% de las utilidades.",["Concentrarse en grandes apostadores","CRM predictivo para jugadores frecuentes de tragamonedas"],1,"La fidelización basada en comportamiento produce ingresos más estables y permite recompensas oportunas.",{kpis:["40 M clientes","26% genera 82%","+24% gasto feliz"]}),
 choice("d3","directorio","Kellogg’s y evidencia publicitaria","El promedio observado fue 11%, pero se propone anunciar una mejora de hasta 20%.",["Publicar con aclaración pequeña","Descartar la afirmación y comunicar evidencia representativa"],1,"Elegir el extremo para representar el resultado general induce a error y expone a riesgo ético y regulatorio.",{kpis:["Claim +20%","Promedio 11%","Confianza en riesgo"]}),
 choice("d4","directorio","Crisis reputacional viral","Un cliente publica un video destruyendo su equipo tras una garantía rechazada.",["Demandar y forzar la baja del video","Disculpa, solución al cliente y auditoría del soporte"],1,"La respuesta repara el caso y aborda la causa raíz; la judicialización puede amplificar la crisis.",{kpis:["520.000 vistas","Boicot emergente","Riesgo Streisand"]}),
 {id:"q1",module:"cuantitativo",type:"number",title:"Tamaño de mercado pediátrico",context:"40.000 hogares × 60% con hijos × 50% de incidencia × USD 1.000 anuales.",question:"¿Cuál es el mercado anual estimado en USD?",answer:12000000,tolerance:0,explanation:"40.000 × 0,60 × 0,50 × 1.000 = USD 12.000.000."},
 {id:"q2",module:"cuantitativo",type:"number",title:"Brecha de gasto por experiencia",context:"Un cliente feliz aumenta 24% un gasto base de USD 500; uno decepcionado lo reduce 10%.",question:"¿Cuál es la diferencia de gasto entre ambos?",answer:170,tolerance:0,explanation:"USD 620 frente a USD 450: la brecha es USD 170 por visita."},
 {id:"q3",module:"cuantitativo",type:"number",title:"Utilidad por cliente clave",context:"De 40.000 clientes, 26% produce 82% de USD 10 millones en utilidades.",question:"¿Cuánta utilidad genera en promedio cada cliente clave?",answer:788,tolerance:1,explanation:"USD 8.200.000 / 10.400 clientes = aproximadamente USD 788 por cliente."}
];

export const cards=[
 ["Capítulo 3","Red de transferencia de valor","Empresa, proveedores, distribuidores y clientes colaboran para mejorar el desempeño de todo el sistema de entrega de valor."],
 ["Capítulo 3","Públicos estratégicos","Grupos con interés o impacto real o potencial: financieros, medios, gobierno, ciudadanía, locales, general e internos."],
 ["Capítulo 3","Marketing de valor","Combinación de calidad y servicio a un precio justo, especialmente relevante cuando cae el poder adquisitivo."],
 ["Capítulo 3","Sustentabilidad ambiental","Estrategias, tecnologías y prácticas que el planeta puede sostener de manera indefinida."],
 ["Capítulo 3","Postura proactiva","La empresa intenta influir sobre su entorno mediante alianzas, relaciones públicas y otras acciones legítimas."],
 ["Capítulo 3","Marketing con causa","Vincula compras con una causa; debe crear valor auténtico y evitar la explotación oportunista."],
 ["Capítulo 4","Customer insight","Comprensión profunda y accionable de necesidades y conductas obtenida al transformar datos en conocimiento."],
 ["Capítulo 4","Sistema MIS","Personas y procedimientos que evalúan necesidades, recopilan información y distribuyen hallazgos útiles."],
 ["Capítulo 4","Investigación causal","Diseño para probar relaciones de causa y efecto mediante comparación y control de factores externos."],
 ["Capítulo 4","Etnografía de mercado","Observación cualitativa del consumidor en su contexto para descubrir necesidades no verbalizadas."],
 ["Capítulo 4","Data warehouse y mining","Consolidación de datos y análisis de patrones de compra, relaciones y señales predictivas."],
 ["Capítulo 4","Chief Privacy Officer","Responsable de la gobernanza y protección de datos personales y del cumplimiento ético y regulatorio."]
].map((x,i)=>({id:`c${i+1}`,tag:x[0],title:x[1],text:x[2]}));

// Mecánicas específicas: el contenido no se reduce a selección única.
const envKeys={
 e1:["macro","político-legal","adaptación"],e2:["micro","intermediarios","negociación"],
 e3:["macro","demográfico","innovación"],e4:["micro","público financiero","negociación"],
 e5:["macro","natural","innovación"],e6:["micro","competidores","innovación"]
};
activities.filter(a=>a.module==="entorno").forEach(a=>Object.assign(a,{type:"matrix",fields:[
 {label:"Ámbito",options:["micro","macro"]},
 {label:"Factor / actor",options:["intermediarios","público financiero","competidores","político-legal","demográfico","natural","tecnológico"]},
 {label:"Postura gerencial",options:["negociación","adaptación","innovación"]}
],answer:envKeys[a.id]}));

Object.assign(activities.find(a=>a.id==="i1"),{type:"sequence",steps:["Explorar ocasiones de uso","Formular hipótesis de canibalización","Experimentar en plazas comparables"],answer:[0,1,2]});
Object.assign(activities.find(a=>a.id==="i4"),{type:"text",prompt:"Reescriban la pregunta de manera neutral y con una escala equilibrada.",rubric:["No anticipa superioridad","Evita adjetivos valorativos","Incluye opciones equilibradas"]});
activities.filter(a=>a.module==="directorio").forEach(a=>Object.assign(a,{type:"allocation",prompt:"Distribuyan 100 puntos de apoyo del directorio entre los planes y defiendan la asignación."}));
