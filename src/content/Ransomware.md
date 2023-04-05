---
layout: post
title: 'Criminalidad 4.0 - Ransomware'
author: [Raul Moreno]
image: img/banners/ransomware.png
date: '2021-03-20T07:03:47.149Z'
tags:
  - Ransomware
  - Infraestructura Critica
  - Darkweb
---

### Definiendo el Ransomware

Imagínese que, luego de un largo día de trabajo llegas a la casa para descubrir que las llaves no funcionan y una nota en la puerta dice: "Para volver a acceder a tus cosas debes pagar $600 en Bitcoin, el precio subirá en 6 horas, desaparecemos tus pertenencias en 8 horas."

Este es un ejemplo simplificado de un **Ransomware.** Este tipo de software malicioso encripta toda la información en tu computadora, y para acceder a ellos tendrías que comprar la llave del actor malicioso. La Agencia de Seguridad de Infraestructura y Ciberseguridad(CISA) de Estados Unidos lo describe de la siguiente manera: [**"...malware en constante evolución diseñado para encriptar los archivos en un dispositivo, inutilizando los archivos y los sistemas que dependen de ellos."**](https://www.cisa.gov/ransomware)

Similar a nuestro ejemplo, podremos encontrar una de las notas que acompañan estos ataques en la imagen de abajo. Lo primero que podremos ver es el tipo de ransomware, ya que generalmente se utiliza la variante de ransomware como encabezado. En este caso "Maze Ransomware", en la nota le indican a la víctima que sus archivos han sido encriptados con los algoritmos RSA-2048 y ChaCha, los incentiva a investigar de ellos en wikipedia y le instruyen a abrir un documento donde encontraran instrucciones para pagar.

![No alt text provided for this image](https://media.licdn.com/dms/image/C5612AQE0JPcGkP3LCA/article-inline_image-shrink_1000_1488/0/1620922734481?e=1685577600&v=beta&t=ZNiy03K-ngsbei3Vnh4vYGsnNffANmyhwGqnB6yuEws)

Estos ataques pueden causar grandes interrupciones en las operaciones de un negocio, como ejemplo en una ocasión [**los supermercados en Holanda experimentaron problemas de desabastecimiento de queso por un ataque de ransomware**](https://www.bleepingcomputer.com/news/security/dutch-supermarkets-run-out-of-cheese-after-ransomware-attack/). Debido a este potencial, también [**han sido implementados por grupos APT iranies con el propósito principal de sabotaje a compañías israelíes**](https://www.flashpoint-intel.com/blog/second-iranian-ransomware-operation-project-signal-emerges/).

### Grupos Ransomware

El principal motivador de los actores maliciosos para atacar con ransomware son los incentivos monetarios. Por ejemplo, Zain Qaiser un ciudadano británico que participo en una organización criminal rusa especializada en ejecutar ataques cibernéticos, recibió $915,000 dolares por sus contribuciones al grupo.

La nota de la Agencia Nacional de Crimen del Reino Unido (NCA) detalla lo que: "[**Qaiser gastó las ganancias de su actividad criminal en estadías en hoteles de lujo, prostitutas, juegos de azar, drogas y artículos de lujo, incluido un reloj Rolex de $6,500. En solo un período de 10 meses, gastó $89,000 en juegos de azar en un casino de Londres, a pesar de estar desempleado y vivir con su familia.**](https://nationalcrimeagency.gov.uk/news/hacker-from-russian-crime-group-jailed-for-multi-million-pound-global-blackmail-conspiracy?hootPostID=838cec97fb8658d3fad01719b1935516)" Un presagio que la historia de Qaiser no terminaría bien.

El trabajo principal de Qaiser dentro de esta organización, era obtener espacios publicitarios en sitios pornográficos. Utilizando ingeniería social se hacia pasar por un cliente legitimo y adquiría estos espacios. El objetivo era servir ransomware, una vez la víctima hacia click en el anuncio los redirigirán a un sitio web que los infectaba y le exigían a la víctima montos entre $300 y $1000.

Este monto se exigía en la forma de una recarga a una tarjeta prepago de debito, otro miembro de este grupo se encargaba enviar este dinero, según el Departamento de Justicia de Estados Unidos(DoJ): [**"Uadiale envió aproximadamente $93,640 dólares a su co-conspirador."**](https://www.justice.gov/opa/pr/washington-state-man-sentenced-prison-role-connection-reveton-ransomware) Su participación dentro del grupo sucedió mientras Uadiale estudiaba en la universidad, y como parte del grupo convertía los fondos enviados a la tarjeta en efectivo, se quedaba con una parte, y luego enviaba el resto a Qaiser.

Como podemos ver estos grupos se componen de integrantes de diferentes nacionalidades, con segmentaciones en cuanto a los objetivos individuales que deben desarrollar y **en algunos casos están compartimentados de manera tal que desconocen los trabajos que ejecutan otros miembros del grupo, dificultando significativamente la tarea de investigadores**.

Los ataques con ransomware fueron particularmente disruptivos en el 2020. La pandemia los hizo aún más graves, ya que el éxito de los mismos depende de un factor de urgencia. [**Atacar hospitales en medio de una crisis como esta era desafortunadamente irresistible para ciertos grupos**](https://us-cert.cisa.gov/ncas/alerts/aa20-302a), ya que aumentaría la posibilidad de recibir pagos. En muchos casos [**ambulancias tuvieron que ser redirigidas, tratamientos médicos pospuestos, y no podían acceder a resultados**](https://blog.emsisoft.com/en/37314/the-state-of-ransomware-in-the-us-report-and-statistics-2020/).

### Ransomware: Pasado, Presente y Futuro

De acuerdo al reporte "[Ransomware Uncovered: 2019](https://www.group-ib.com/whitepapers/ransomware-uncovered.html)" de la compañia Group IB, la ausencia de incidentes ransomware sobresalientes durante el 2018 se trataba de una pausa estratégica por parte de grupos grandes, para adaptar sus herramientas y poder realizar ataques más sofisticados. El resultado fue un incremento de 40% en ataques entre el 2018-2019, y un aumento importante en las sumas monetarias exigidas a sus víctimas, incrementando el promedio anterior de $6,000 a $84,000 dolares.

Indican que muchos de los ataques de este periodo se realizaron aprovechando vulnerabilidades conocidas, que contaban con métodos relativamente fáciles para explotarlas como la [BlueKeep](https://github.com/TinToSer/bluekeep-exploit)([CVE-2019-0708](https://www.cvedetails.com/cve/CVE-2019-0708/)). Uno de los primeros pasos para explotar vulnerabilidades como está es la etapa de reconocimiento, en la cual buscarían puertos default de servicios de escritorio remoto(RDP) como el [3389](https://www.speedguide.net/port.php?port=3389).

En la imagen de abajo, podemos apreciar que **en Panamá existen alrededor de 1,241 máquinas utilizando este puerto,** que se pueden descubrir fácilmente utilizando el motor de búsqueda Shodan. **116 son vulnerables a la BlueKeep.**

![No alt text provided for this image](https://media.licdn.com/dms/image/C5612AQE_V7wTizORAQ/article-inline_image-shrink_400_744/0/1621510237113?e=1685577600&v=beta&t=wMrSpmvX6qkI5xLiLSgmsY2_77EJIx6mC6NYCf8m1_8)

En la edición más reciente "[Ransomware Uncovered:2020-2021](https://www.group-ib.com/resources/threat-research/ransomware-2021.html)", la compañía Group IB indica que **este tipo de ataque continuaran evolucionando, y serán cada vez más disruptivos**. En parte esta situación obedece al factor de incremento de rentabilidad, con **un promedio de extorsión que alcanza los $170,000 dolares en el 2020**, **este nuevo hito es debido al** **enfoque en atacar grandes compañías,** y la implementación de nuevas técnicas.

Una de estas nuevas técnicas se trata de exfiltrar información sensitiva de la víctima, y luego amenazar con publicarla si no se cumplen las demandas del actor malicioso. En el reporte "M-Trends 2021" de la compañía FireEye, se detalla esta nueva tendencia de la siguiente manera: **"**[**La táctica más común fue la creación de sitios de vergüenza donde publicaban datos robados de las víctimas que se negaban a pagar la extorsión.**](https://content.fireeye.com/m-trends/rpt-m-trends-2021)**"**

### CLOP LEAKS - GlobalHawk

![No alt text provided for this image](https://media.licdn.com/dms/image/C4E12AQFsMvXcIDNW5A/article-inline_image-shrink_1000_1488/0/1620917896043?e=1685577600&v=beta&t=oF2d0SaZ5DsHa2MSoZqbCPMasGQZX7tKUbTeIPq6YUs)

En este caso especifico, **los detalles técnicos del avión militar de vigilancia** [**GlobalEye**](https://www.saab.com/products/globaleye) **fueron filtrados en la dark web**, por el grupo de ransomware Clop motivados principalmente por razones financieras. En la imagen de abajo podemos ver las compañías que han sido víctimas del grupo, las mismas son de diversas industrias entre las más notables Shell, Qualsys, Stanford, y el fabricante canadiense de aviones Bombardier cuyo [modelo Global 6500](https://businessaircraft.bombardier.com/en/aircraft/global-6500#!#bba-pdp-section-1) se utiliza como base para el GlobalEye.

![No alt text provided for this image](https://media.licdn.com/dms/image/C5612AQEAKM0CQ6OcQA/article-inline_image-shrink_400_744/0/1621121899919?e=1685577600&v=beta&t=-SRcUAZJ6wbbymwNfV4c575zySkaFu_rtzcykg_wxmo)

La información que filtran en estas páginas varia de acuerdo a la víctima. En caso de ser **una firma de abogados puede incluir información sensitiva de clientes como pasaportes, licencias de conducir, documentos legales, recibos de luz, facturas, etc.** En el caso de Bombardier filtraron documentos como especificaciones técnicas, esquemáticos 3D, y diagramas como el que encontramos en la imagen de abajo.

![No alt text provided for this image](https://media.licdn.com/dms/image/C5612AQEczSk8_u6c6A/article-inline_image-shrink_400_744/0/1621122582036?e=1685577600&v=beta&t=aGUp9T9NC1JZk7kzvuv9gTUDVXK-AhClEIPEOuQVfe0)

Enfrentados con una situación como esta, una compañía podría decidir intentar comprar tiempo pretendiendo negociar con los actores maliciosos, sin embargo, este podría no ser un buen plan ya que al percatarse de la situación los resultados son impredecibles y existe una buena posibilidad que agrave la situación.

En la imagen de abajo podremos ver un anuncio en referencia a la compañía Wright Medical Group, la cual según este grupo: "**...no le interesa la confidencialidad de sus clientes o los datos de sus empleados...piensan que pueden jugar para retrasar la publicación de su información y que ayudara su valoración de mercado...hay ciertas cosas de la compañía que le encantara ver pronto a los mercados.**"

![No alt text provided for this image](https://media.licdn.com/dms/image/C5612AQHcV0ojMbK9qw/article-inline_image-shrink_1000_1488/0/1621123121945?e=1685577600&v=beta&t=WG8QXT1dS2H3VbyUkcOR3hj18PJas5ZaoHj7GDcEVVI)

En estos escenarios las compañías se ven confrontadas con la decisión de cooperar y realizar grandes pagos para intentar salvaguardar información confidencial, o correrse el riesgo de **una filtración de información importante y experimentar un impacto a su reputación corporativa.** Lo cual podría ser aún más costoso, se trata de un escenario devastador ya que nada le asegura a la víctima que el actor malicioso cumpliría con su parte.

La situación de ataques con ransomware tiene un panorama desfavorable en el presente. En parte se debe a la falta de acciones adecuadas para mitigar estos riesgos, entre las cuales se podrían considerar **programas nacionales en donde, la comunidad local de ciberseguridad proactivamente realice búsqueda de vulnerabilidades en compañías y entidades publicas, a cambio de algún tipo reconocimiento o incentivo**.

De igual manera nos hace falta una mejora educacional sobre este tema, ya que al tener usuarios con más conocimientos para identificar situaciones o correos sospechosos aumentamos la capacidad de defensa de todos.

Si esta información te ayudo a comprender mejor el tema, o te pareció interesante ayúdame con tu comentario, un like, y compartiéndola en redes sociales para crear conciencia sobre los riesgos cibernéticos.

Referencias:

-   [**CISA - Ransomware**](https://www.cisa.gov/ransomware)
-   [**Bleeping Computer - Dutch supermarkets run out of cheese after ransomware attack**](https://www.bleepingcomputer.com/news/security/dutch-supermarkets-run-out-of-cheese-after-ransomware-attack/)
-   [**Flashpoint Intel - Iranian ransomware operation**](https://www.flashpoint-intel.com/blog/second-iranian-ransomware-operation-project-signal-emerges/)
-   [**National Crime Agency UK - Hacker from Russian crime group jailed**](https://nationalcrimeagency.gov.uk/news/hacker-from-russian-crime-group-jailed-for-multi-million-pound-global-blackmail-conspiracy?hootPostID=838cec97fb8658d3fad01719b1935516)
-   [**DoJ - Washington state man sentenced to prision in connection with reveton ransomware**](https://www.justice.gov/opa/pr/washington-state-man-sentenced-prison-role-connection-reveton-ransomware)
-   [**CISA - Hospitals targeted by ransomware alert**](https://us-cert.cisa.gov/ncas/alerts/aa20-302a)
-   [**Emisoft - State of ransomware in the US**](https://blog.emsisoft.com/en/37314/the-state-of-ransomware-in-the-us-report-and-statistics-2020/)
-   [**Group IB - Ransomware Uncovered 2019-2020**](https://www.group-ib.com/whitepapers/ransomware-uncovered.html)
-   [**Github - Bluekeep Exploit**](https://github.com/TinToSer/bluekeep-exploit)
-   [**CVE details - CVE-2019-0708**](https://www.cvedetails.com/cve/CVE-2019-0708/)
-   [**Speedguide - Port 3389**](https://www.speedguide.net/port.php?port=3389)
-   [**Group IB - Ransomware Uncovered 2021**](https://www.group-ib.com/resources/threat-research/ransomware-2021.html)
-   [**FireEye - M-trends 2021**](https://content.fireeye.com/m-trends/rpt-m-trends-2021)
-   [**Saab - GlobalEye**](https://www.saab.com/products/globaleye)
-   [**Bombardier - Global 6500**](https://businessaircraft.bombardier.com/en/aircraft/global-6500#!#bba-pdp-section-1)

[**Red Skull icon by Smashicons**](https://www.flaticon.com/authors/smashicons)
