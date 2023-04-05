---
layout: post
title: 'Criminalidad 4.0 - Amenaza Interna'
author: [Raul Moreno]
image: img/banners/amenazainterna.jpg
date: '2021-08-17T07:03:47.149Z'
tags:
  - Threat Insider
  - Riesgo
  - 
---

Las amenazas internas (Insider threats) son personas con acceso legitimo a información de una empresa, que utilizan este acceso en perjuicio de la organización. Este tipo de riesgo es presente tanto en las organizaciones públicas como en privadas.

Existen dos tipos distintos de amenazas internas, **las intencionales y las accidentales.**

**Amenazas internas accidentales**

Las amenazas internas accidentales tienen una naturaleza menos maligna, pero **pueden ser igual de catastróficas que las intencionales**. Suceden principalmente por falta de capacitación/conocimientos, error humano, atajos en seguridad informática,etc.

Algo que pareciera inocente, como compartir una imagen de trabajo en redes sociales, podría ser un incidente de amenaza interna accidental. Abajo, una imagen de panel de control industrial con información sensitiva.

![No alt text provided for this image](https://media.licdn.com/dms/image/C5612AQHkOL79RAi5Eg/article-inline_image-shrink_1500_2232/0/1629163502498?e=1685577600&v=beta&t=J0oVzwj7w__y2uaFVh69GiHDcMB4GvAZfUuxHyMPMJw)

### Amenazas internas intencionales

Las amenazas internas intencionales son personas que utilizan los privilegios de acceso interno, con el fin de satisfacer algún objetivo personal. Este objetivo esta relacionado con las motivaciones que le impulsan a convertirse en una amenaza interna intencional.

Las siglas MICE están estrechamente vinculadas con indicadores de advertencia de amenazas internas intencionales. Este acrónimo representa las [**potenciales motivaciones de una amenaza interna intencional: dinero, ideología, coerción y ego**](https://www.afio.com/publications/CHARNEY_The_Psychology_of_Espionage_DRAFT_2014Aug28.pdf)(Money, Ideology, Coercion, Ego).

![No alt text provided for this image](https://media.licdn.com/dms/image/C5612AQEjwHcfOCKFBQ/article-inline_image-shrink_1500_2232/0/1629163893172?e=1685577600&v=beta&t=-RxIRY5hpohnudMLlKplH-Xjn04cSIhb9pLxNAIGMnQ)

Observemos algunos de los indicadores de advertencia frecuentes para la detección este tipo especifico de amenaza interna:

-   Dificultades financieras // Desaparición repentina de dificultades financieras.
-   Dificultades en relaciones interpersonales extremas y persistentes // Comportamiento hostil o vengativo. // Toma de riesgo exacerbado.
-   Uso incorrecto de sistemas informáticos // Interés excesivo o inadecuado de información sensitiva o propietaria.
-   Horas de trabajo inconsistentes // Violaciones de seguridad repetidas.

A pesar que existan otros marcos de referencia más actualizados, como [RASCLS](https://www.cia.gov/static/3e909813c3f24ffea6481524038bcace/Alt-Framework-Agent-Recruitment.pdf) y [FIREPLACES](http://www.homelandsecuritynewswire.com/dr20210517-informant-motivation). MICE sigue teniendo relevancia debido a que se puede determinar la motivación de muchos de estos incidentes. En los indicadores de advertencia anteriormente mencionados, es posible distinguir las motivaciones de una amenaza interna intencional con MICE.

### Incidentes en Tesla - Parulekar (Motivación: Dinero)

Para demostrar la frecuencia de los incidentes de amenazas internas, utilizaré de ejemplo a Tesla. Para desgracia de Elon Musk, su compañía es un objetivo muy atractivo.

![No alt text provided for this image](https://media.licdn.com/dms/image/C5612AQGBWoXDBhqGZQ/article-inline_image-shrink_1500_2232/0/1628629478778?e=1685577600&v=beta&t=Zx0EPXgThrJWlHQ7n9SJoI227Ce1g6dRTumsjYfNysE)

Salil Parulekar comenzó a trabajar para Tesla en el 2013, como especialista de compras senior. Tres años después le otorgan una promoción a gerente de grupo en la división de Suministros Globales, sin duda una historia de superación profesional.

Excepto que en lugar de cumplir con sus nuevas responsabilidades, **Parulekar se puso creativo y malversó $9.3 Millones de dolares a su favor**. En el documento de acusación [USA v. Parulekar](https://www.courthousenews.com/wp-content/uploads/2018/11/TeslaParulekar-INDICT.pdf), detallan como Parulekar **utilizó información que conocía debido a su puesto para lograr su plan**.

Hizo ordenes de compras falsas, creó cuentas de correo para representar compañías conocidas por Tesla, y **cambio las cuentas bancarias de estas compañías legítimamente registradas, con la finalidad de interceptar pagos millonarios.** Mientras que, simultáneamente realizaba el recibido conforme de dichos pagos.

Como podemos ver en este caso la amenaza interna, **tenia tanto las capacidades, como las oportunidades para realizar acciones que buscaban un beneficio financiero**. Tenía acceso a información privilegiada, y mantenía una posición jerárquica alta lo que le permitió realizar acciones que de otra forma no hubiesen sido posibles, como cambiar números de cuentas bancarias.

### Khalitov - Scripts de Automatización de Control de Calidad. (Motivación: Dinero)

En ocasiones **la amenaza interna puede optar por adquirir documentación técnica propietaria, para luego venderla a terceros y lograr su objetivo financiero**. Estos documentos requieren cantidades considerables de tiempo y dinero en ser creados.

Un ejemplo de estos son: **los scripts de automatización de Control de Calidad de Tesla**. **Los mismos fueron desarrollados en el transcurso de 12 años, tomando alrededor de 200 años en horas de trabajo acumulativo.**

![No alt text provided for this image](https://media.licdn.com/dms/image/C5612AQGWMrs5n1jooA/article-inline_image-shrink_1500_2232/0/1628817026211?e=1685577600&v=beta&t=3hYfqbRLZwN9HLNZKkBNLk9u1Fmeo5KMDtTEJTkbRj0)

Al tener un enorme valor, el acceso a estos scripts de automatización es relativamente limitado. **De los aproximados 50,000 empleados en Tesla**, **solamente 40 forman parte del equipo de Control de Calidad** que puede utilizarlos. De estos **solamente 8 tienen privilegios de acceso directo**.

Es decir que para accederlos, la amenaza interna tendría que lograr una promoción a uno de estos puestos, o de alguna manera obtener acceso a los scripts abusando los privilegios de estos puestos. **El 28 de Diciembre del 2020, Tesla contrata a Alex Khalitov como Ingeniero Senior de Software en Control de Calidad**.

Probablemente sus primeros días en la compañía transcurrieron como en muchas otras, con tareas administrativas. Firmar acuerdos de confidencialidad, recibir una laptop, obtener credenciales, leer [El Anti-manual de Tesla](http://www.ceconline.com/PDF/Tesla-Anti-Handbook-Handbook.pdf), etc. Al tercer día, **Khalitov decidió copiar 26,000 documentos a su cuenta personal de Dropbox**.

De acuerdo al documento de demanda [Tesla, Inc. v. Alex Khalitov](https://cdn.vox-cdn.com/uploads/chorus_asset/file/22256438/491775490_Tesla_Inc_v_Alex_Khalitov_Case_4_21_cv_00528_YGR.pdf), el equipo de seguridad de Tesla noto la gran cantidad de archivos que Khalitov subió a su Dropbox, investigaron rápidamente la naturaleza de lo transcurrido. Pudieron determinar que **no era una transferencia autorizada**, y que **los archivos transferidos no tenían nada que ver con las responsabilidades laborales de Khatilov**.

Una vez más podemos apreciar las circunstancias que facilitaron este incidente. En este caso, si las responsabilidades laborales no tenían relación con estos preciados archivos, no tenia que existir la posibilidad de acceder a los mismos en primer lugar. Khalitov observo una oportunidad y tomo ventaja de la misma.

### Egor Kriuchkov - Ransomware (Motivación: Dinero, Coerción)

En ambos de los casos mencionados, se trata de iniciativas propias. Pero, no todos los incidentes de amenazas internas intencionales suceden de manera pro-activa. En ocasiones es necesario recibir incentivos de terceras personas para que los mismos sucedan.

Esto último fue lo que le sucedió a un empleado de Tesla. El 16 de Julio del 2020, fue contactado por un conocido llamado Egor Kriuchkov, le comento que estaría viajando a USA. Le pide reunirse para conversar sobre **un proyecto especial, que involucraría la probabilidad de ganar $500,000 mil dolares. Solo necesitaría conectar un usb en su computadora de trabajo, y ejecutar unos archivos.**

Lo que Kriuchkov no esperaba, y probablemente para alivio de Elon Musk. Es que este empleado en particular se contacto inmediatamente con el FBI. Se ofreció para colaborar con la agencia como un informante. Kriuchkov llegó a USA, y se reúne con su contacto y un grupo de sus amigos.

![No alt text provided for this image](https://media.licdn.com/dms/image/C5612AQESz85fUyXC9w/article-inline_image-shrink_1000_1488/0/1629077343176?e=1685577600&v=beta&t=r81ExDFIpkbJxGaaqSzScuoMDcdlmXyA5rJW5DMddLo)

El documento de acusación [USA v. Egor Igorevich Kriuchkov](https://www.justice.gov/opa/press-release/file/1308766/download), presenta una serie de detalles interesantes sobre el caso. Por ejemplo, en cuanto a comportamiento: Kriuchkov se oponía a salir en fotos grupales, e insistió en pagar todas las cuentas del grupo.

Kriuchkov y su contacto conversan sobre el proyecto especial. Le explica que, se trataría de un ataque ransomware con el cual exigirían un pago de $2 millones de dolares. **Utilizarían un ataque de negación de servicio (DDoS) como una distracción**, y necesitarían que la computadora infectada estuviese conectada alrededor de 8 horas.

Al notar que su contacto se encuentra indeciso, Kriuchkov le ofrece un adelanto de $50 mil dolares y un pago total de $1 millón de dolares. Luego, **le pregunta sobre alguna enemistad laboral ya que sería posible inculparlo del ataque**. Finalmente, le confiesa a su contacto que ya han realizado proyectos similares con éxito, incluyendo uno en donde lograron obtener $4 millones de dolares.

Kriuchkov era un emisario del cibercrimen organizado, estos grupos son sofisticados y utilizan múltiples métodos para ejecutar ataques. El contacto de Kriuchkov menciono, que si el optaba por no cooperar el grupo simplemente encontraría alguna manera de chantajearlo para lograr el objetivo.

Kriuchkov no lo refuto, ya que **la coerción es uno de los métodos utilizados por estos grupos**.

### Martin Tripp (Motivación: Ego, Ideología)

El dinero es un gran motivador, sin embargo la ideología también puede ser un fuerte incentivo para tomar acciones que puedan perjudicar a una organización. Por ideología se puede entender cualquier tipo de creencia, inclinación moral o política de la persona.

En este caso Martin Tripp, divulgo información confidencial de la compañía, y de acuerdo al documento [Tesla, Inc. v. Martin Tripp](https://www.tresslerllp.com/docs/default-source/Publication-Documents/tesla-inc-vs-martin-tripp.pdf?sfvrsn=4) divulgo información confidencial e **implanto un código en las computadoras de Tesla, con la finalidad de periódicamente exportar información de la compañía a terceros.**

![No alt text provided for this image](https://media.licdn.com/dms/image/C5612AQHnHT0PxBVHSQ/article-inline_image-shrink_1500_2232/0/1628197176188?e=1685577600&v=beta&t=_5xW9Gf0T0abaGBwVXO3vrLGsfp0N7nMF3G0mGV5koo)

Esto sucedió, ya que según Tripp era necesario que todos conocieran la verdad de los procesos de manufactura de Tesla, y las grandes cantidades de materia prima que se mal gastaban. De acuerdo a la compañía, Tripp había tenido varios problemas con sus compañeros de trabajo, y le mencionó a un supervisor que sentia que sus talentos eran desperdiciados en su puesto.

### En este último caso, una combinación de ideología y ego fue lo que motivo el incidente.

El impacto de las amenazas internas mismas va a depender de factores como capacidad y oportunidad. Por ejemplo, podríamos tener una amenaza interna intencional de bajo impacto debido a una falta de capacidades técnicas, acceso limitado a información y un puesto de baja jerarquía en la organización lo cual podría implicar menores oportunidades.

Es importante entender la naturaleza de estas amenazas, para poder implementar programas y politicas a nivel organizacional que busquen reducir el riesgo relacionado con las mismas.

Referencias:

-   [The Intelligencer - The Psychology of Espionage](https://www.afio.com/publications/CHARNEY_The_Psychology_of_Espionage_DRAFT_2014Aug28.pdf)
-   [CIA - An Alternative Framework for Agent Recruitment: From MICE to RASCLS](https://www.cia.gov/static/3e909813c3f24ffea6481524038bcace/Alt-Framework-Agent-Recruitment.pdf)
-   [Homeland Security News Wire - Informant Motivations](http://www.homelandsecuritynewswire.com/dr20210517-informant-motivation)
-   [USDC Northern District California - USA v. Salil Parulekar](https://www.courthousenews.com/wp-content/uploads/2018/11/TeslaParulekar-INDICT.pdf)
-   [DOJ - Former Tesla employee charged embezzlement scheme](https://www.justice.gov/usao-ndca/pr/former-tesla-employee-charged-embezzlement-scheme-tesla)
-   [Tesla - Anti-Handbook Handbook](http://www.ceconline.com/PDF/Tesla-Anti-Handbook-Handbook.pdf)
-   [USDC Northern District California - Tesla, Inc. V. Alex Khalitov](https://cdn.vox-cdn.com/uploads/chorus_asset/file/22256438/491775490_Tesla_Inc_v_Alex_Khalitov_Case_4_21_cv_00528_YGR.pdf)
-   [DOJ - USA v. Egor Igorevich Kriuchkov](https://www.justice.gov/opa/press-release/file/1308766/download)
-   [USDC District of Nevada - Tesla, Inc. V. Martin Tripp](https://www.tresslerllp.com/docs/default-source/Publication-Documents/tesla-inc-vs-martin-tripp.pdf?sfvrsn=4)