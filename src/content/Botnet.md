---
layout: post
title: 'Criminalidad 4.0 - Botnet'
author: [Raul Moreno]
image: img/banners/botnet.png
date: '2023-05-20T07:03:47.149Z'
tags:
  - Botnet
  - Click Fraud
  - Blockchain

---

Bot es una forma corta de la palabra "robot", este termino en particular se utiliza frecuentemente en referencia a  [programas computacionales que están diseñados con el fin de automatizar una tarea repetitiva](https://www.cobalt.io/blog/what-is-a-bot).

Los bots pueden ser de gran utilidad por ejemplo, dar respuesta inmediata a los clientes de un negocio(chatbot), enviar notificaciones, alertas, realizar transacciones en mercados, etc. Sin embargo, también pueden ser utilizados de manera malintencionada.

Plataformas de redes sociales intentan reducir el impacto de estos bots maliciosos.  [En el caso de Twitter removiendo alrededor de 1 millón de cuentas por día](https://www.reuters.com/technology/twitter-says-it-removes-over-1-million-spam-accounts-each-day-2022-07-07/), es muy probable que en algún punto hemos interactuado o visto uno de estos bots en redes sociales y que surja la interrogante ¿por qué existen los bots en redes sociales?

Existen diversos factores que motivan el uso de bots en redes sociales pero el principal es el dinero.  [Los bots se pueden utilizar para diversas acciones por ejemplo, farming de clicks/likes, hijacking de hashtags, repost de contenido](https://www.cisa.gov/sites/default/files/publications/social_media_bots_infographic_set_508.pdf).

![No alt text provided for this image](https://media.licdn.com/dms/image/D4E12AQH3XccFu8Lj2Q/article-inline_image-shrink_1000_1488/0/1680283353435?e=1716422400&v=beta&t=IVacT2tHGg66eJ0M5V1L1X6TDVblVW-XUpm7gr4lyyY)

![No alt text provided for this image](https://media.licdn.com/dms/image/D4E12AQFMOhqZ8dPMTg/article-inline_image-shrink_1500_2232/0/1680286991438?e=1716422400&v=beta&t=72HRbhbrP-ahsv4vy_U0gshdzD5kO9c-_yBfFJjGuyk)

Como podemos ver existen múltiples opciones para comprar interacciones con cuentas bot, en diferentes redes sociales. Ya sea para generar vistas en contenido, obtener más followers, comentarios y likes.

Estas operaciones son bastante lucrativas, un ejemplo es la compañía Social Media Series Limited que operaba sitios como SocialEnvy.co, IGFamous.net y Likesocial.co. Fueron demandados por Facebook debido a la violación de términos de uso, y los documentos detallan que  [en un periodo aproximado de 9 meses la compañía genero $9,430,000 millones de dólares producto de la venta de likes, seguidores, y comentarios.](https://digitalcommons.law.scu.edu/cgi/viewcontent.cgi?article=2935&context=historical)

En el ejemplo de abajo, podemos ver varias cuentas de bots haciendo tuits y que la estructura de los tuits es muy similar con pequeñas variaciones. En este caso los tuits son todos del mismo tema, dejando links de referencia a esta situación.

![No alt text provided for this image](https://media.licdn.com/dms/image/D4E12AQHAXafJDCk1kw/article-inline_image-shrink_1000_1488/0/1680196382786?e=1716422400&v=beta&t=UHcd7BnvgktpUHDsBLen0OOQ0xyHW2S5g8bVeKaAB7g)

Los bots de este ejemplo comparten características similares en cuanto la composición de nombre de usuario, la sintaxis de los tuits: primero el texto " **** Panama viral video | **** video | " seguido de un hashtag, emojis de dedos apuntando hacia abajo, y diversos links maliciosos.

Esto nos da a entender que existe un nivel de coordinación entre estas cuentas, para lograr esto usualmente se usan  [centros de comando y control (C&C/C2)](https://attack.mitre.org/tactics/TA0011/). Esta técnica se utiliza para  [enviar comandos a miles de computadoras infectadas para llevar acabo diferentes acciones](https://www.docdroid.net/oo0ekA1/bbv3-pdf). Estas redes de computadoras zombificadas que ejecutan tareas al recibir instrucciones del C2 se le conoce como "[Botnet](https://www.enisa.europa.eu/topics/incident-response/glossary/botnets)".

![No alt text provided for this image](https://media.licdn.com/dms/image/D4E12AQF4-MWdk_hAKw/article-inline_image-shrink_1500_2232/0/1681851077413?e=1716422400&v=beta&t=508fuDXe6Q_bvyVTOccCCrZaMCNp7mAl7WzDavXgTAc)

Las botnet no solo se utilizan en el contexto de redes sociales, existen múltiples usos de comandar grandes cantidades de bots. Se pueden utilizar por ejemplo, para  [fraude de publicidad digital, dirigir trafico de internet para ataques de negación de servicio distribuido(DDoS), y establecer servidores proxy para vender acceso a los mismos.](https://www.trendmicro.com/vinfo/pl/security/news/cyber-attacks/the-botnet-threat-how-botnets-are-used-by-cybercriminals)

El fraude de publicidad digital en particular es llamativo para los actores maliciosos, debido a que  [las ganancias pueden llegar a ser entre $3 a $7 millones de dólares por día.](https://krebsonsecurity.com/2016/12/report-3-5m-in-ad-fraud-daily-from-methbot/)  Este incentivo es poderoso, a continuación veremos un ejemplo de como se utiliza una botnet para cometer este crimen.

### Methbot: Click fraud.

![No alt text provided for this image](https://media.licdn.com/dms/image/D4E12AQHwIpT-0bPEUA/article-inline_image-shrink_1500_2232/0/1680845476150?e=1716422400&v=beta&t=7PUpUnSbCVLB-DqkNPFRCZCKxERa0zz6F3iOTKzLg8U)

[Cada clic en una publicidad en línea y cada visualización de un video publicitario genera ganancias para los operadores de la página web correspondiente](https://www.semrush.com/blog/what-is-ppc/)  mediante el modelo pay-per-click (PPC). Esta dinámica puede ser explotada mediante la automatización de tráfico fraudulento, utilizando una técnica conocida como "[Click fraud](https://www.cloudflare.com/learning/bots/what-is-click-fraud/)".

Para realizar este tipo este fraude el autor principal Aleksandr Zhukov y su equipo necesitaron de una infraestructura extensa que contaba con 1,900 servidores alquilados de centros de datos en Dallas, Texas. Realizaron 250,000 copias falsas(spoofing) de páginas web de más de 5,000 dominios de diferentes negocios.

![No alt text provided for this image](https://media.licdn.com/dms/image/D5612AQHhmSEb5YnqqA/article-inline_image-shrink_1500_2232/0/1681708763997?e=1716422400&v=beta&t=JITEegI-ABeWawTV4Khre34VvDdUUAtyv9TbcKN1x3k)

El trabajo principal de Zhukov y su equipo era crear un bot que simulara el comportamiento humano para eludir las medidas de seguridad anti-fraude de la industria de publicidad digital. Estas medidas incluyen el  [registro de la dirección IP, el agente de usuario (user-agent) es decir detalles del navegador utilizado, fecha, hora y ubicación geográfica](https://support.google.com/admanager/answer/141811#googleAdManagerIABFiltration).

Para lograr esto, el equipo de Zhukov realizó investigaciones exhaustivas y desarrolló un bot capaz de evadir dichas medidas de seguridad.  [Estudiaron movimientos de mouse realistas, los bots visualizaban videos publicitarios entre 60 a 90 segundos con pausas aleatorias, emplearon 852,992 direcciones IP que disfrazaron como IPs residenciales](https://www.humansecurity.com/hubfs/WO_Methbot_Operation_WP_01.pdf), ajustaron la zona horaria de los bots a EST (Eastern Standard Time), y aseguraron que los bots emplearan user-agents que los hicieran parecer usuarios reales.

![No alt text provided for this image](https://media.licdn.com/dms/image/D4E12AQHE5k8fWeN-wg/article-inline_image-shrink_1500_2232/0/1681694226131?e=1716422400&v=beta&t=wam6V7XKv9oBkYClDfUsbtTfpg568tOGx1jlGfN_Ml8)

Esta operación resultó altamente rentable para los actores maliciosos, ya que en un solo día podían falsificar hasta 16 millones de impresiones publicitarias, generando ganancias de hasta $56,000 dólares.  [En total Aleksandr "El Rey del Fraude" Zhukov logro obtener hasta $4.8 millones de dólares](https://www.justice.gov/usao-edny/pr/russian-cybercriminal-sentenced-10-years-prison-digital-advertising-fraud-scheme).

Estas operaciones pueden ser interrumpidas deteniendo el comando y control(C2) que tienen los operadores sobre la botnet. Un ejemplo de interrupción es  [el esfuerzo cooperativo que realizaron agencias policiales de Holanda, Alemania, Francia, Lithuania, Canada, Estados Unidos, Reino Unido y Ucrania para frenar las actividades del botnet Emotet](https://www.europol.europa.eu/media-press/newsroom/news/world%E2%80%99s-most-dangerous-malware-emotet-disrupted-through-global-action).

[La interrupción duro desde Enero a Abril del 2021](https://www.justice.gov/opa/documents-and-resources-related-disruption-emotet-malware-and-botnet); sin embargo, no fue duradera, ya que  [Emotet estaba devuelta en acción en Noviembre del mismo año](https://www.checkpoint.com/press/2021/november-2021s-most-wanted-malware-emotet-returns-to-the-top-10/). Interrumpir los C2 de los operadores resulta cada vez más difícil debido a que muchos cuentan con métodos para asegurar la continuidad operacional.

### Blockchain para botnets.

![No alt text provided for this image](https://media.licdn.com/dms/image/D4E12AQH0xjTZ1GOb-Q/article-inline_image-shrink_1500_2232/0/1681967059838?e=1716422400&v=beta&t=TQqMeEyVIEEeiGYOM2qGJb8Z5IgTEZ1DRxRvvqLrRFA)

Con la finalidad de lograr dicha continuidad operacional, los operadores de botnets han desarrollado varios métodos para restablecer el control sobre sus bots en caso de que el mismo se vea interrumpido.

Un método interesante es el de  [utilizar transacciones en la blockchain para enviar instrucciones a los bots sobre la nueva dirección IP de comando y control(C2).](https://arstechnica.com/information-technology/2021/02/crooks-use-the-bitcoin-blockchain-to-protect-their-botnets-from-takedown/)

La implementación de este mecanismo puede variar según los operadores de la botnet. Investigadores de Akamai Researchers detallan que actores maliciosos utilizaban la dirección "1Hf2CKoVDyPj7dNn3vgTeFMgDqVvbVNZQq", y  [usaban las dos últimas transacciones realizadas en esta billetera, para restablecer su C2 en caso de interrupción.](https://www.akamai.com/blog/security/bitcoins--blockchains--and-botnets)

![No alt text provided for this image](https://media.licdn.com/dms/image/D4E12AQGTzeUOJSAzhg/article-inline_image-shrink_1500_2232/0/1681878436704?e=1716422400&v=beta&t=S-3cj4Uq7Pxu0k40kyJ9eXXEzHruezpmmCnjml7bHxs)

Los bots al no recibir respuesta en un tiempo programado de su servidor de comando y control (C2) ejecutan un script, capturando los valores de estas transacciones y las convierten en una dirección IP. De esta manera, los operadores pueden utilizar la blockchain para realizar transacciones emparejadas, y designar nuevas direcciones IP desde las cuales los bots continuarían recibiendo sus comandos.

![No alt text provided for this image](https://media.licdn.com/dms/image/D4E12AQH9mMq_zY_fvg/article-inline_image-shrink_1500_2232/0/1681878269291?e=1716422400&v=beta&t=2LFER62xOuf7q4R5BHZ7p8jzFXzHHePAluPTkcNz5NA)

En este último caso, sería posible interrumpir la botnet con transacciones a los wallets utilizados para la obtención de direcciones IP. Esto podría realizarse simultáneamente con la interrupción del servidor de comando y control (C2). En el mejor de los casos, se podría incluso tomar el control de la botnet.

Este no siempre es el caso, ya que otros actores utilizan métodos más complejos para usar la blockchain, y mantener sus operaciones. Por ejemplo, investigadores de la empresa Nozomi Networks descubrieron que  [la botnet Glupteba utilizaba una función llamada OP_Return](https://www.nozominetworks.com/blog/tracking-malicious-glupteba-activity-through-the-blockchain/), que  [permite almacenar hasta 80 bytes de datos arbitrarios en la firma de las transacciones](https://bitcoindev.network/guides/bitcoinjs-lib/embedding-data-with-op_return/). En este caso, los datos enviados estaban encriptados y solo podían ser interpretados por los bots.

![No alt text provided for this image](https://media.licdn.com/dms/image/D4E12AQEtYDlkJGxSDQ/article-inline_image-shrink_1500_2232/0/1682012506863?e=1716422400&v=beta&t=79rhJTgLXrPbcPOfY0IXIVM9xmYsid9DjGOoeFLlhck)

Esta botnet cuyo modelo de negocios era el  [robo de información de cuentas de Google, vender acceso a esas cuentas a terceros, vender información de tarjetas de crédito de esas cuentas, colocar anuncios disruptivos, minar criptomonedas, y vender acceso como proxy en los dispositivos infectados](https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1:2021cv10260/571146/62/)  recibio una demanda civil por parte de Google.

Como resultado de la acción legal que tomo Google en contra de sus operaciones, pudieron interrumpir esta Botnet. Sin embargo similar al caso de Emotet la interrupción fue momentánea, debido a que  [volvieron a operar de manera rapida demostrando que los actores maliciosos han desarollado gran resiliencia, y habilidad en cuanto a continuidad operacional](https://www.bleepingcomputer.com/news/security/glupteba-malware-is-back-in-action-after-google-disruption/).

Como podemos ver los operadores de botnets desarrollan técnicas cada vez más sofisticadas para mantener sus operaciones. Sin embargo, con la colaboración de la industria y las agencias policiales, se pueden tomar medidas para interrumpir y desmantelar estas botnets para proteger a los usuarios, el primer paso es entender la amenaza.

Si esta información te ayudó a comprender mejor los peligros asociados con las botnets,  **por favor ayúdame a crear conciencia compartiéndolo en tus redes sociales y dando tu opinión en los comentarios**. Juntos podemos contribuir a informar y prevenir la propagación de estas amenazas cibernéticas.

**Referencias:**

-   [Cobalt - What is a bot?](https://www.cobalt.io/blog/what-is-a-bot)
-   [Reuters - Twitter removes 1M accounts](https://www.reuters.com/technology/twitter-says-it-removes-over-1-million-spam-accounts-each-day-2022-07-07/)
-   [CISA USA - Social Bot Infographic](https://www.cisa.gov/sites/default/files/publications/social_media_bots_infographic_set_508.pdf)
-   [USA Northern California District Court - Facebook v. Social Media Series Limited](https://digitalcommons.law.scu.edu/cgi/viewcontent.cgi?article=2935&context=historical)
-   [MITRE ATT&CK - Command and Control (TA0011)](https://attack.mitre.org/tactics/TA0011/)
-   [Botnet Bible V3](https://www.docdroid.net/oo0ekA1/bbv3-pdf)
-   [ENISA EU - Botnet](https://www.enisa.europa.eu/topics/incident-response/glossary/botnets)
-   [TrendMicro - How botnets are used by cybercriminals](https://www.trendmicro.com/vinfo/pl/security/news/cyber-attacks/the-botnet-threat-how-botnets-are-used-by-cybercriminals)
-   [KrebsonSecurity - $3-5M in Ad Fraud Daily from 'Methbot'](https://krebsonsecurity.com/2016/12/report-3-5m-in-ad-fraud-daily-from-methbot/)
-   [Cloudflare - Click fraud](https://www.cloudflare.com/learning/bots/what-is-click-fraud/)
-   [SemRush - What is Pay-per-click](https://www.semrush.com/blog/what-is-ppc/)
-   [Google - Invalid traffic detection and filtration methodology](https://support.google.com/admanager/answer/141811#googleAdManagerIABFiltration)
-   [Human Security - Methbot Operation](https://www.humansecurity.com/hubfs/WO_Methbot_Operation_WP_01.pdf)
-   [Department of Justice(DOJ) - Russian Cybercriminal Sentenced to 10 Years in Prison for Digital Advertising Fraud Scheme](https://www.justice.gov/usao-edny/pr/russian-cybercriminal-sentenced-10-years-prison-digital-advertising-fraud-scheme)
-   [Europol - Emotet disruption](https://www.europol.europa.eu/media-press/newsroom/news/world%E2%80%99s-most-dangerous-malware-emotet-disrupted-through-global-action)
-   [Department of Justice(DOJ) - Documents and Resources related to the disruption of the Emotet Malware and Botnet](https://www.justice.gov/opa/documents-and-resources-related-disruption-emotet-malware-and-botnet)
-   [Checkpoint - Most wanted malware returns](https://www.checkpoint.com/press/2021/november-2021s-most-wanted-malware-emotet-returns-to-the-top-10/)
-   [ARS Technica - Bitcoin blockchain to protect botnets from takedown](http://bitcoin-blockchain-to-protect-their-botnets-from-takedown)
-   [Akamai - Blockchain and Botnets](https://www.akamai.com/blog/security/bitcoins--blockchains--and-botnets)
-   [Nozomi Networks - Tracking Glupteba through the blockchain](https://www.nozominetworks.com/blog/tracking-malicious-glupteba-activity-through-the-blockchain/)
-   [Bitcoin Dev - Embedding data with OP_Return](https://bitcoindev.network/guides/bitcoinjs-lib/embedding-data-with-op_return/)
-   [USA Southern District of New York Court - Google LLC v. Dmitry Starovikov(Glupteba)](https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1:2021cv10260/571146/62/)
-   [Bleeping Computer - Glupteba back in action](https://www.bleepingcomputer.com/news/security/glupteba-malware-is-back-in-action-after-google-disruption/)