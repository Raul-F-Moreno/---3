---
layout: post
title: 'Criminalidad 4.0 - Amenaza Persistente Avanzada'
author: [Raul Moreno]
image: img/banners/apt.png
date: '2021-02-04T07:03:47.149Z'
tags:
  - APT
  - Malware
  - Sim Swapping
---

Benjamin Netanyahu, primer ministro de Israel, declaró en la Conferencia Cybertech 2017, un evento importante de seguridad cibernética: 
>"Con el click de un botón, puedes hacer arrodillar naciones de manera rápida. Si, así lo deseas; y si estas dispuesto a tomar el riesgo, porque todos los sistemas pueden ser hackeados..."

La amenaza persistente avanzada, conocida por sus siglas en ingles "APT" (Advanced Persistent Threat), es un tipo especifico de ciberataque que mantiene un mayor grado de sofisticación en contraste a otros ataques. En ellos se emplean diversas tácticas, técnicas y procedimientos (TTPs), y los mismos se ejecutan durante un lapso de prolongado de tiempo.

![Vector de ataque.](https://media.licdn.com/dms/image/C5612AQFtapJbr8oZJg/article-inline_image-shrink_1000_1488/0/1610480776116?e=1684972800&v=beta&t=jr11MjV0WxXlPXzFQ2tRCmUn7me8eDkfTtmWaYw6-AE)

En la imagen superior se puede ver una versión simplificada de cómo puede suceder uno de estos ataques. Generalmente utilizan alguna técnica de *spearphishing* para que el usuario abra un link o descargue un archivo. Después instalan otros archivos que permiten al atacante realizar otras acciones como: **conectarse con un servidor de comando y control, descargar herramientas maliciosas adicionales, enviar información detallada del sistema infectado, entre otras.**

Existen grupos organizados que se dedican a ejecutar este tipo de ataques y cuentan con capacidades superiores en comparación al común denominador de los actores maliciosos en la esfera cibernética. Esto se debe, a que estos grupos generalmente cuentan con cierto grado de apoyo del Estado en donde operen y, en algunos casos, pueden hasta contar con financiamiento por parte de su gobierno.

Este apoyo les permite, por ejemplo; realizar investigaciones para determinar la existencia de un "[Zero-day](https://usa.kaspersky.com/resource-center/definitions/zero-day-exploit)"(Dia cero), que son vulnerabilidades desconocidas y no cuentan con parches de seguridad. Posteriormente, pueden continuar desarrollando herramientas especializadas para explotar esta vulnerabilidad y poder completar su objetivo.

Alternativamente, estos grupos pueden optar por comprar estas vulnerabilidades. Existen reportes de un hacker llamado "Volodya" que ha logrado [**venderlas por sumas de hasta $200,000 USD.**](https://www.ibtimes.com/hacker-selling-windows-zero-days-worlds-most-dangerous-hacker-groups-2789374) Entre sus compradores se encontraban grupos como APT28 (FancyBear, Pawn Storm), un grupo especializado en ciberespionaje el cual se le asocia con el GRU (inteligencia militar rusa).

En resumen, las APT son amenazas cibernéticas que se originan de manera frecuente en Estados. Estos gobiernos emplean equipos de personas con habilidades avanzadas para atacar objetivos específicos y explotar vulnerabilidades para el robo de credenciales. Los mismos a su vez, serian utilizados para "pivotar" dentro de la red y, si hiciera falta, obtener credenciales con mayores privilegios para poder extraer información o monitorizar la actividad de la víctima.

**Campañas de Grupos APT**
--------------------------

El grupo [APT28](https://attack.mitre.org/groups/G0007/) se caracteriza por realizar [campañas dirigidas en contra de Instituciones publicas y de Seguridad de otros Estados,](https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/rpt-apt28.pdf) en particular aquellos de interés geopolítico para Rusia, como es el caso de la República Democrática de Georgia. En el 2013 el grupo creo una campaña de spearphishing en la cual, utilizaron una dirección "@mia.ge.gov", en lugar de la legitima "@mia.gov.ge".

Los objetivos eran el Departamento de Interior y el Departamento de Defensa de Georgia y tenían la finalidad de obtener información estratégica de relaciones internacionales, defensa de instalaciones y activos estratégicos, y detalles de un programa de desarrollo militar que se estaba llevando acabo con contratistas de Estados Unidos.

APT28 también se vio involucrado en el desarrollo de un app malicioso. [**El mismo tenia como objetivo suplantar un app legitimo desarrollado por unidades de Artillería de Ucrania**](https://www.crowdstrike.com/wp-content/brochures/FancyBearTracksUkrainianArtillery.pdf), para reducir el tiempo de fuego de minutos a segundos. **El propósito era ubicar las posiciones de unidades de artillería que utilizaban la app**(Abajo: Imagen del app). También se les asocio recientemente con [un ataque al Parlamento de Noruega,](https://www.bleepingcomputer.com/news/security/norway-russian-apt28-state-hackers-likely-behind-parliament-attack/) en el cual lograron obtener acceso a correos utilizando ataques de fuerza bruta, tomando ventaja de usuarios con contraseñas débiles y sin factor de doble autenticación.

![APP POPR-D30.APK](https://media.licdn.com/dms/image/C5612AQGm0fKsASOFag/article-inline_image-shrink_1000_1488/0/1610483205735?e=1684972800&v=beta&t=ea3dgBRFxnEkaI_cyl7F5zviNM0ILxGQUykLiAPO8-A)

Estos ejemplos sirven para ilustrar la gran utilidad que representan estos grupos para Estados cuyo interés sea captar grandes cantidades de información, para **avanzar su agenda política, cumplir propósitos militares, e inclusive, impulsar sus planes de desarrollo económico mediante el robo de propiedad intelectual.**

Un ejemplo notable es el grupo [APT10](https://attack.mitre.org/groups/G0045/) (MenuPass, StonePanda), relacionado con el Ministerio de Seguridad del Estado de China. El Departamento de Justicia de Estados Unidos (DOJ) describió cómo este grupo realizó una campaña denominada **"**[**Campaña de robo de tecnología**](https://www.justice.gov/opa/pr/two-chinese-hackers-associated-ministry-state-security-charged-global-computer-intrusion)**"**. El documento de acusación "[USA VS. ZHU HUA AKA "Afwar" and ZHANG SHILONG AKA "Baobeilong](https://www.justice.gov/opa/press-release/file/1121706/download)" detalla que esta campaña inicio alrededor del 2006 y continuo durante el 2018.

![No alt text provided for this image](https://media.licdn.com/dms/image/C5612AQH0WniRgNP8gA/article-inline_image-shrink_1000_1488/0/1610478786018?e=1684972800&v=beta&t=1sbVnMreTfYSEqiOF2ro9EYa-VVH0s-Lo-U98TgxHbM)

Zhu y Zhang, ambos miembros del APT10, trabajan para una compañía llamada Huaying Haitai, en la cual realizaban operaciones que involucraron un "**...esfuerzo continuo e incansable para robar, entre otros datos, propiedad intelectual e información comercial o tecnológica confidencial.**" El objetivo eran compañías de industrias como aviación, tecnología satelital, telecomunicaciones, tecnologías de manufacturación, farmacéuticas, etc. El documento también revela que entre sus víctimas se encuentra el Laboratorio de Propulsión Jet de la NASA.

En el reporte "[Gestion y supervision de ciberseguridad en el Laboratorio de propulsion jet (JPL)](https://oig.nasa.gov/docs/IG-19-022.pdf)", de la Oficina del Inspector General de NASA, se explica que en el 2011 se origino un ataque de una dirección IP china. Los intrusos **lograron acceder a 18 servidores en las 2 semanas que permanecieron en la red sin ser detectados.** Copiaron archivos de información sensitiva, agregaron usuarios nuevos a la red, descargaron malware adicional para obtener más credenciales y modificaron los registros de sistema para ocultar sus acciones. En total**, consiguieron extraer 87GB (gigabytes) de información.**

Entre algunas herramientas que utiliza APT10 se puede mencionar la [EvilGrab,](https://attack.mitre.org/software/S0152/) la cual se despliega mediante un adjunto de Microsoft Office malicioso y luego utiliza un "Autostart Execution" para iniciar con el sistema de la víctima. Esta herramienta permite que se tomen capturas de pantallas, se capten las teclas utilizadas (Keylogging), capturar audio usando el micrófono de la computadora, y también capturar videos tanto de aplicaciones como de la webcam integrada.

![Archivo Malicioso Word](https://media.licdn.com/dms/image/C5612AQHcurXxFwryFg/article-inline_image-shrink_1000_1488/0/1610478625918?e=1684972800&v=beta&t=rzFIgp1vBiFMD3BgqofYL0BkTnxBa7voJgOYTpfjDmE)

Esta situación plantea un desafío a naciones que mantienen niveles inferiores de defensa cibernética, y adicionalmente mantienen normas jurídicas inadecuadas e inclusive obsoletas. Esto otorga **una ventaja desproporcionada a los países que cuentan con grupos dedicados a explotar vulnerabilidades de otros gobiernos para conocer detalles que les beneficien**. Como por ejemplo; [**conocer información privilegiada para obtener ventaja en acuerdos de comercio,**](https://www.cnet.com/news/chinese-hackers-targeted-us-agencies-during-trade-talks/)[**monitorizar comunicaciones de delegaciones de otras naciones,**](https://www.brusselstimes.com/news/belgium-all-news/80042/foreign-affairs-office-knows-about-cyberattacks/)[**intervenir en procesos electorales,**](https://www.timesofisrael.com/hundreds-of-iranian-bots-working-to-influence-israeli-voters-report/) **o** [**hasta robar dinero de bancos**](https://www.wired.com/story/how-north-korea-robs-banks-around-world/)**.**

Es necesario que estos desafíos se consideren en la planificación de seguridad estatal de nuestros países, pues la alternativa seria ignorar el problema y esta no es una estrategia para mitigar riesgos. Mucho menos si tales riesgos tienen una recompensa tan alta y un riesgo relativamente bajo para los perpetradores. Es imperativo que se integren planes que busquen educar a la población en temas de seguridad de la información y de los riesgos potenciales a los que están expuestos.

De lo contrario, los usuarios seguirán siendo el vector de ataque preferido de estos grupos debido a la baja resistencia que presentan, en parte debido al desconocimiento.

**Referencias:**

-   [**Kaspersky - Zero Day**](https://usa.kaspersky.com/resource-center/definitions/zero-day-exploit)
-   [**IBtimes - Hacker selling Zero-Days**](https://www.ibtimes.com/hacker-selling-windows-zero-days-worlds-most-dangerous-hacker-groups-2789374)
-   [**Att&Ck Mitre - APT28**](https://attack.mitre.org/groups/G0007/)
-   [**FireEye - APT28 Report**](https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/rpt-apt28.pdf)
-   [**CrowdStrike - FancyBear tracks Ukranian Artillery Units**](https://www.crowdstrike.com/wp-content/brochures/FancyBearTracksUkrainianArtillery.pdf)
-   [**BleepingComputer - APT28 Norwegian Parliment attack**](https://www.bleepingcomputer.com/news/security/norway-russian-apt28-state-hackers-likely-behind-parliament-attack/)
-   [**Att&Ck Mitre - APT10**](https://attack.mitre.org/groups/G0045/)
-   [**Department of Justice - Charges on global computer intrusion**](https://www.justice.gov/opa/pr/two-chinese-hackers-associated-ministry-state-security-charged-global-computer-intrusion)
-   [**USA VS. ZHU HUA and ZHANG SHILONG - Indictment**](https://www.justice.gov/opa/press-release/file/1121706/download)
-   [**NASA OIG - Jet Propulsion Lab Report**](https://oig.nasa.gov/docs/IG-19-022.pdf)
-   [**Att&Ck Mitre - Evil Grab**](https://attack.mitre.org/software/S0152/)
-   [**CNET - Hackers targer US Agencies during Trade Talks**](https://www.cnet.com/news/chinese-hackers-targeted-us-agencies-during-trade-talks/)
-   [**BrusselsTimes - Trade Delegation cyberattacks**](https://www.brusselstimes.com/news/belgium-all-news/80042/foreign-affairs-office-knows-about-cyberattacks/)
-   [**TimesofIsrael - Iranian Bots working to Influence Votes**](https://www.timesofisrael.com/hundreds-of-iranian-bots-working-to-influence-israeli-voters-report/)
-   [**Wired - How North Korea steal money from Banks**](https://www.wired.com/story/how-north-korea-robs-banks-around-world/)