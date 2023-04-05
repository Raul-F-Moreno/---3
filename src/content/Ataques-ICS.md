---
layout: post
title: 'Criminalidad 4.0 - Ataques ICS'
author: [Raul Moreno]
image: img/banners/ics.png
date: '2021-04-22T07:03:47.149Z'
tags:
  - Infraestructura Critica
  - Insider Threat
  - SCADA
---

Definiendo ICS, SCADA, PLC
--------------------------

Los **ICS** son sistemas de control industrial **que se utilizan para operar procesos industriales**, por ejemplo: la aplicación de cloro en la etapa de desinfección de agua en una potabilizadora. Para monitorizar de manera remota procesos como el anterior mencionado existen tipos específicos de ICS, como los [***sistemas SCADA***](https://www.plctr.com/what-is-scada/)que funcionan para la supervisión, control y adquisición de datos.

![No alt text provided for this image](https://media.licdn.com/dms/image/C5612AQHZuGpuu-WgDQ/article-inline_image-shrink_400_744/0/1616606104197?e=1684972800&v=beta&t=YodzPcb0hsyBIflfxzkLuNtcLjsNCwcVkMXPNV_Cfcc)

En la imagen arriba podemos observar algunos datos, como: el nivel máximo del tanque de succión aparenta ser de 28 pies, su nivel actual de 12.8 pies, una falla en la válvula de la bomba 1, un medidor de presión con 61.7 PSI, y un control de velocidad en variador que indica 75.0%.

Estos datos son recopilados por un tipo de hardware conocido como [**controlador lógico programable (PLC)**](https://www.electrical4u.com/programmable-logic-controllers/), y este a su vez envía su información al SCADA para permitir que estos procesos sean monitorizados de manera remota.

![No alt text provided for this image](https://media.licdn.com/dms/image/C5612AQHD7AzdqghRqg/article-inline_image-shrink_1500_2232/0/1619024868242?e=1684972800&v=beta&t=opO8XHkdMNvWQSKus2w-0BZhOrL-nAPkpS45mysS0dM)

En el [diagrama](https://inductiveautomation.com/resources/article/what-is-scada) de arriba podemos apreciar como se componen estos sistemas, podemos ver que los sensores envían información al PLC o a una Unidad Terminal Remota(RTU) que a su vez recopila los datos y los envía al SCADA. Un **HMI** es una Interfaz humano-máquina, nos muestra la información y utiliza gráficos para añadir contexto a la misma. Abajo veamos un ejemplo de un HMI.

![No alt text provided for this image](https://media.licdn.com/dms/image/C5612AQG-qHdDonHGgQ/article-inline_image-shrink_1000_1488/0/1619104378780?e=1684972800&v=beta&t=Phx-GtvLECnNqv5KgiSfoxm5fAUwHoUROjZpHBvcuSE)

Al estar conectados al Internet, **estos sistemas** que a menudo son utilizados para operar infraestructura crítica como: Plantas eléctricas, Plantas de tratamiento de agua, etc. **son vulnerables a ataques cibernéticos.**

El riesgo no proviene exclusivamente de la conexión al Internet como tal, pero de los sospechosos usuales: configuraciones inadecuadas, contraseñas débiles, software desactualizado, usuarios con falta de capacitación necesaria, e inclusive amenazas internas(Insider threat).

Ataques a Sistemas de Control Industrial (ICS)
----------------------------------------------

El 5 de Febrero del 2021, [actores maliciosos no identificados obtuvieron acceso remoto a la planta potabilizadora de Oldsmar, Florida](https://thehackernews.com/2021/02/hacker-tried-poisoning-water-supply.html), e **incrementaron los niveles de hidróxido de sodio (soda cáustica) de 100 partes por millón a 11,100 partes por millón**. Esta modificación pudo resultar en un envenenamiento del agua potable, y potencialmente causar graves problemas de salud a quienes consumieran este agua, muy probablemente hasta muertes.

![No alt text provided for this image](https://media.licdn.com/dms/image/C5612AQFreVu1LirycQ/article-inline_image-shrink_1500_2232/0/1618973033107?e=1684972800&v=beta&t=uj-3KIJsVnAS2PU1NsGB_kGQOu70kkqoa469bD1BgAg)

Afortunadamente, el personal de la planta logro identificar y reaccionar rápidamente a la situación, corrigiendo los niveles de hidróxido de sodio antes que los cambios letales surtieran efecto. El Departamento de Protección Ambiental de Massachusetts(EPA), Estados Unidos, emitió un comunicado en el cual detallan que: "[***Los actores maliciosos accedieron a los controles SCADA de la planta a través del software de acceso remoto TeamViewer, instalado en una de varias computadoras de la planta de tratamiento de agua...***](https://www.mass.gov/service-details/cybersecurity-advisory-for-public-water-suppliers)"

De igual manera establecen que estas computadoras compartían la misma contraseña para el acceso remoto, estaban conectadas a Internet sin ningún tipo de firewall instalado, y estaban utilizando Windows 7. Una receta potente para una catástrofe.

Otro caso bastante similar sucedió en Marzo del 2019, cuando Wyatt Travnichek ingresó de manera remota a la planta potabilizadora de Post Rock en Kansas, y **apago los procesos de limpieza y desinfección del agua**.

Según el documento de acusación [USA v. WYATT TRAVNICHEK](https://www.documentcloud.org/documents/20536881-travnichek-indictment), desde Enero del 2018 y hasta su renuncia en Enero del 2019, Wyatt laboro en la planta. Sus responsabilidades incluían acceder de manera remota para monitorizar la planta. Pareciera ser que, **para apagar estos importantes procesos Wyatt uso su teléfono celular, un Samsung Galaxy S7**.

Potencial Bélico
----------------

El malware [**BlackEnergy** **fue utilizado** **para atacar a 3 compañías de utilidad eléctrica en Ucrania**](https://attack.mitre.org/software/S0089/) durante el 2015, el ataque provoco perdidas de energía. De acuerdo a [un analisis de perfil de amenza](https://www.cyber.nj.gov/threat-center/threat-profiles/trojan-variants/blackenergy) emitido por el Centro de Comunicación de Ciberseguridad de New Jersey (NJCCIC) **este ataque dejo alrededor de 225,000 personas sin servicios eléctricos**.

Aparentemente, este ataque específico fue ejecutado por el grupo APT denominado Sandworm Team. [Un comunicado de Alerta ICS](https://us-cert.cisa.gov/ics/alerts/IR-ALERT-H-16-056-01) de la Agencia de Seguridad de Infraestructura y Ciberseguridad(CISA) de Estados Unidos, indica que **el ataque ocurrió de manera simultanea y sincronizada con una diferencia de tan solo 30 minutos desde el primer ataque**. Utilizaron un correo de phishing con un adjunto malicioso de Microsoft Office para infiltrar el malware.

Aun más reciente fue un incidente en el cual se vieron involucrados Israel e Iran, cuando en Abril del 2021, [**Iran ataco 6 plantas de tratamiento de agua israelies**](https://www.israel365news.com/151142/iran-nearly-poisoned-israels-drinking-water-miraculously-failed/). En este caso sucedió algo similar a la planta en Oldsmar, y buscaron alterar los niveles de químicos utilizados, Israel por su parte respondió con un ataque que **interrumpió los sistemas de navegación de buques provocando una paralización del puerto Shahid Rajaei uno de los más grandes en Iran**.

El Director General de la Dirección Nacional Cibernética de Israel, Yigal Unna, comento lo siguiente sobre el incidente: "[***El ataque mostró la capacidad cibernética de una potencia mundial...un claro mensaje israelí a Irán, no se atrevan a tocar los sistemas civiles, los sistemas de agua y electricidad en Israel...El invierno cibernético está llegando y llegará incluso más rápido de lo que sospechaba.***](https://www.timesofisrael.com/israeli-cyber-chief-attack-on-water-systems-a-changing-point-in-cyber-warfare/)"

Todos estos incidentes son alarmantes, y deberíamos tomar una iniciativa proactiva respecto a la protección de la infraestructura critica, después de todo, como hemos visto en estos ejemplos algo tan simple como [implementar factor de doble autenticación, y utilizar contraseñas robustas podría evitar una crisis importante](https://www.mass.gov/doc/joint-fbi-cisa-cybersecurity-advisory-on-compromise-of-water-treatment-facility/download).

Sin embargo, al tratarse de infraestructura crítica es necesario implementar un acercamiento que involucre medidas de seguridad a profundidad, para crear una superficie de difícil acceso y [mitigar la mayor cantidad de riesgos posibles](https://www.waterisac.org/system/files/articles/15%20Cybersecurity%20Fundamentals%20%28WaterISAC%29.pdf).


**Referencias:**

-   [**PLC Programming - What is SCADA**](https://www.plctr.com/what-is-scada/)
-   [**Electrical4u - Programmable logic controllers**](https://www.electrical4u.com/programmable-logic-controllers/)
-   [**Inductive Automation - SCADA Diagram**](https://inductiveautomation.com/resources/article/what-is-scada)
-   [**The Hackernews - Hacker tried poisoning water supply**](https://thehackernews.com/2021/02/hacker-tried-poisoning-water-supply.html)
-   [**Massachusets EPA - Cybersecurity Advisory for public water suppliers**](https://www.mass.gov/service-details/cybersecurity-advisory-for-public-water-suppliers)
-   [**USA V. WYATT TRAVNICHEK - Indictment**](https://www.documentcloud.org/documents/20536881-travnichek-indictment)
-   [**Mitre ATT&CK - BlackEnergy**](https://attack.mitre.org/software/S0089/)
-   [**NJCCIC - BlackEnergy Threat Profile**](https://www.cyber.nj.gov/threat-center/threat-profiles/trojan-variants/blackenergy)
-   [**Israel365News - Iran nearly poisoned Israel drinking water**](https://www.israel365news.com/151142/iran-nearly-poisoned-israels-drinking-water-miraculously-failed/)
-   [**Zdnet - Cyberattack hit Israel water system**](https://www.zdnet.com/article/two-more-cyber-attacks-hit-israels-water-system/)
-   [**The Times of Israel - Cyber winter is coming**](https://www.timesofisrael.com/israeli-cyber-chief-attack-on-water-systems-a-changing-point-in-cyber-warfare/)
-   [**Joint Cybersecurity Advisory - Cybersecurity Advisory**](https://www.mass.gov/doc/joint-fbi-cisa-cybersecurity-advisory-on-compromise-of-water-treatment-facility/download)
-   [**Water ISAC - 15 Cybersecurity Fundamentals for Water and Wastewater Utilities**](https://www.waterisac.org/system/files/articles/15%20Cybersecurity%20Fundamentals%20%28WaterISAC%29.pdf)