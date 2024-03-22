---
layout: post
title: 'Criminalidad 4.0 - Cyberheist'
author: [Raul Moreno]
image: img/banners/cyberheist.png
date: '2023-10-12T11:03:47.149Z'
tags:
  - Fraude bancario
  - ciberataque bancario
  - Sector Financiero
---

En el 2020 en Araçatuba, Brasil, alrededor de 40 criminales llevaron a cabo un asalto altamente planificado.  [Bloquearon múltiples puntos de acceso a la ciudad para evitar que las fuerzas del orden pudieran intervenir, desplegaron drones para vigilar los movimientos de la policía, utilizaron 98 explosivos con sensores de proximidad en diferentes puntos de la ciudad, tomaron rehenes y los utilizaron como escudos humanos, amarrándolos a los vehículos de fuga.](https://brasil.elpais.com/brasil/2021-08-30/mega-assalto-a-bancos-em-aracatuba-faz-moradores-de-escudo-humano-e-deixa-tres-mortos.html)

La ejecución de este asalto a tres instituciones financieras simultáneamente revela un sorprendente nivel de coordinación por parte de los criminales involucrados.

El resultado final fue el robo de alrededor de $1 millón de dólares (equivalentes a R$7 millones de Reais en Brasil). El objetivo primordial del asalto era el contenido del Banco de Brasil, que ascendía a unos $17 millones de dólares (R$90 millones de Reais); sin embargo,  [los criminales fueron sorprendidos por el mecanismo de protección que destruyó los billetes con cuchillas y tinta](https://noticias.uol.com.br/cotidiano/ultimas-noticias/2021/09/19/aracatuba-mega-assalto-a-bancos.htm), frustrando sus planes de obtener un botín más grande.

<iframe width="560" height="315" src="https://youtube.com/embed/zs6gz4aj9k0" title="Mega asalto Araçatuba" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Existen métodos mucho más sigilosos para ejecutar acciones similares, causar un impacto significativo y la herramienta es de fácil acceso: una computadora. Estas operaciones se realizan a menudo de forma remota y con frecuencia involucran múltiples jurisdicciones, lo que dificulta las investigaciones y tiempos de respuesta.

En 2016, el grupo de amenaza persistente avanzada (APT) Lazarus/Apt38/Hidden Cobra intentó robar $951 millones de dólares en un atraco bancario. Cometieron errores que limitaron su botín a alrededor de $101 millones de dólares, una suma significativa, considerando que esta acción fue solo uno de sus ataques planificados a diversas instituciones financieras.

Esta APT emplea  [tácticas, técnicas y procedimientos](https://attack.mitre.org/groups/G0032/)  que desarrollaron específicamente para el sector financiero y como resultado  [han vulnerado múltiples instituciones como el Banco de Chile, Bancomext, Banco Austral, Tien Phong Bank, Far Eastern International Bank of Taiwan, Banco de Bangladesh, entre otros.](https://www.mandiant.com/sites/default/files/2021-09/rpt-apt38-2018-web_v5-1.pdf)

![](https://media.licdn.com/dms/image/D4E12AQHcCUz41BGZRw/article-inline_image-shrink_1000_1488/0/1696653683906?e=1716422400&v=beta&t=Ovl-89zLOVaVJMnSp3S1HHhBGlaatAwUHjIZ4czyAyk)

Nos centraremos en el caso del Banco de Bangladesh, ya que, de no haber cometido errores, podría haber resultado en el robo de $951 millones de dólares.

La primera fase se centró en el reconocimiento con el objetivo de obtener información sobre el banco. Para llevar a cabo esta tarea, utilizaron Facebook y LinkedIn.  [Desde la cuenta agena316@gmail[.]com, realizaron investigaciones en Facebook, mientras que desde la cuenta watsonhenny@gmail[.]com, agregaron a aproximadamente 37 empleados de la institución financiera como contactos en LinkedIn](https://www.justice.gov/opa/press-release/file/1092091/download).

Posteriormente, seleccionaron sus objetivos e iniciaron una campaña de spearphishing bajo el pretexto de búsqueda de empleo. Utilizaron las cuentas rsaflam8808@gmail[.]com, yardgen@gmail[.]com y rasel.aflam@gmail[.]com para enviar alrededor de 205 correos de spearphishing.

Esta campaña se extendió desde enero hasta agosto de 2015. En los primeros meses, al menos tres usuarios  *descargaron el contenido de los correos*, uno de los cuales era uno de los objetivos identificados en la fase de reconocimiento.

### Alquimia Digital: 0x90 No-Operation a $81 millones.

![](https://media.licdn.com/dms/image/D4E12AQEg6Z1Jeu46Aw/article-inline_image-shrink_1500_2232/0/1696653377328?e=1716422400&v=beta&t=c7GVOHUzZHCZOduBjiLWDIgbMinRzEx8pApfME10jx4)

El trabajo no estaba concluido, a pesar de que ya contaran con un programa malicioso en los sistemas del banco este solo sería el primero. La tarea del mismo seria de alterar los sistemas defensivos(firewall) del banco para descargar el programa malicioso que se encargaría de alterar las transferencias SWIFT del banco.

El programa malicioso se le conoce como  [NESTEGG,](https://malpedia.caad.fkie.fraunhofer.de/details/win.nestegg)  y está diseñado para establecer una puerta trasera(backdoor) al dispositivo infectado. Luego, el programa realiza modificaciones a las reglas de firewall para permitir la descarga de otros archivos por parte del actor malicioso.

Entre los archivos descargados se encontraba uno llamado "evtdiag.exe". Este malware fue desarrollado específicamente con el sistema de transferencias Swift en mente, y existen investigaciones que demuestran que los desarrolladores de estos programas maliciosos realizaron  [un esfuerzo significativo en la lectura de los manuales de dicho sistema.](https://www.swift.com/sites/default/files/documents/swift_corporates_mt_ig_trade_guide.pdf)

Equipados con este programa malicioso aplican un parche es decir una modificación a un programa legítimo, y remplazaron unas líneas de código.

![](https://media.licdn.com/dms/image/D4E12AQFy8Dsx-n1zMw/article-inline_image-shrink_1500_2232/0/1696870923004?e=1716422400&v=beta&t=mRkvSiQcFRVx6UQO8e-YZwGxS2suu7lnqYlsnKuI5eM)

Los números que se observan arriba representan numéricamente un código de operación(opcode) en  [lenguaje ensamblador.](https://www.javatpoint.com/classification-of-programming-languages)

[El 75 (0x75) es de particular importancia, ya que se trata de una verificación condicional](http://ref.x86asm.net/coder32.html#x75). En otras palabras, se encarga de validar que exista una condición para que continúe la ejecución del código.

[Al realizar el parche, lo reemplazaron con 90 (0x90), que corresponde a una instrucción "No-operation" o "No hacer nada"](https://baesystemsai.blogspot.com/2016/04/two-bytes-to-951m.html). Esto le permite llevar a cabo todas las acciones necesarias para realizar las transferencias fraudulentas al eliminar esta verificación.

![](https://media.licdn.com/dms/image/D4E12AQFlmuBS_xXi3g/article-inline_image-shrink_1500_2232/0/1696871519419?e=1716422400&v=beta&t=ejIZf5TD-CqcghV5EEuNONA_6AkHajcMyFgtPJ_-b-E)

Tambien modificaron un mecanismo de supervisión de las transferencias internacionales:  [la impresión de todas las transferencias ordenadas a través del sistema](https://www.ibm.com/docs/en/ftmswsfm324?topic=components-message-printing-service). Esta impresión alertaría a los oficiales del banco sobre cualquier actividad sospechosa y arruinaría los planes. Por lo tanto, para eludir eficazmente este mecanismo, se aseguraron de que las transacciones manipuladas no fueran impresas.

Estuvieron durante 8 meses dentro de los sistemas del Banco, recolectando información, y analizando los procesos internos del banco. Esto les fue vital para el 2016 cuando finalmente ejecutaron su plan.

Se realizaron 35 órdenes de transferencia,  [entre ellas solo cinco por un valor de $101 millones pasaron desapercibidas](https://documents1.worldbank.org/curated/fr/835401468193768661/pdf/105134-WP-PUBLIC-Bangladesh-Development-Update-April-2016.pdf). De este monto, $20 millones se enviaron a Sri Lanka a nombre de una ONG, pero el dinero no se entregó porque el nombre de la ONG estaba mal escrito (fandation en lugar de utilizar foundation). El resto, $81 millones, se transfirió al sistema bancario de Filipinas a 4 cuentas del Banco Comercial Rizal (RCBC).

En comparación con el asalto en Araçatuba, el riesgo para llevar a cabo esta acción es menor, mientras que la recompensa potencial es mayor. A pesar de que el nivel de complejidad puede variar, esto puede incentivar a que se busquen repetir este tipo de ataques

Posterior al incidente, un documento oficial del Banco de Bangladesh detalla lo siguiente:

> "[A falta de incidentes destacados de ciberdelincuencia en el sector bancario de Bangladesh antes de 2016, no había urgencia por tomar medidas de protección contra estos delitos...es fundamental que los bancos se centren en la gestión y mitigación de los riesgos cibernéticos...adoptar nuevas tecnologías y servicios para enfrentar esta situación, así como cumplir con las normativas de seguridad y gobernanza tecnológica, en línea con los avances tecnológicos y legales...es esencial para superar las amenazas cibernéticas.](https://www.bb.org.bd/pub/annual/anreport/ar1516/full_2015_2016.pdf)"

Las instituciones financieras siempre serán un objetivo de alto interés para el cibercrimen organizado. Los comentarios emitidos por la entidad bancaria en 2016 siguen siendo válidos en la actualidad.

Es imperativo cambiar la forma en que abordamos la mitigación de los riesgos cibernéticos, y evolucionar de una postura reactiva a una proactiva. De lo contrario, nos arriesgamos a sufrir ataques que puedan tener un impacto significativo en diversos niveles sociales.

Si esta información te ayudó a comprender mejor los peligros asociados con los riesgos cibernéticos,  **por favor ayúdame a crear conciencia compartiéndolo en tus redes sociales y dando tu opinión en los comentarios.**  Juntos podemos contribuir a informar y prevenir la propagación de estas amenazas cibernéticas.

**Referencias:**

-   [El Pais Brasil - Mega-assalto a bancos em Araçatuba](https://brasil.elpais.com/brasil/2021-08-30/mega-assalto-a-bancos-em-aracatuba-faz-moradores-de-escudo-humano-e-deixa-tres-mortos.html)
-   [UOL - Solucionado sobre o mega-assalto a bancos](https://noticias.uol.com.br/cotidiano/ultimas-noticias/2021/09/19/aracatuba-mega-assalto-a-bancos.htm)
-   [Mitre ATT&CK - Lazarus Group](https://attack.mitre.org/groups/G0032/)
-   [Mandiant - APT38](https://www.mandiant.com/sites/default/files/2021-09/rpt-apt38-2018-web_v5-1.pdf)
-   [DOJ - USA v. Park Jin Hyok](https://www.justice.gov/opa/press-release/file/1092091/download)
-   [Malpedia - Nestegg](https://malpedia.caad.fkie.fraunhofer.de/details/win.nestegg)
-   [SWIFT - Swift trade guide](https://www.swift.com/sites/default/files/documents/swift_corporates_mt_ig_trade_guide.pdf)
-   [Javatpoint - Classification of programming languages](https://www.javatpoint.com/classification-of-programming-languages)
-   [x86asm.net - x86 opcode reference sheet](http://ref.x86asm.net/coder32.html#x75)
-   [BAE Systems - two bytes to 951m](https://baesystemsai.blogspot.com/2016/04/two-bytes-to-951m.html)
-   [IBM - Components message printing service](https://www.ibm.com/docs/en/ftmswsfm324?topic=components-message-printing-service)
-   [WorldBank - Bangladesh Development](https://documents1.worldbank.org/curated/fr/835401468193768661/pdf/105134-WP-PUBLIC-Bangladesh-Development-Update-April-2016.pdf)
-   [Bangladesh Bank - Annual Report 2015-2016](https://www.bb.org.bd/pub/annual/anreport/ar1516/full_2015_2016.pdf)