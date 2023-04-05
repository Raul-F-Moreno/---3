---
layout: post
title: 'Criminalidad 4.0 - Cryptojacking'
author: [Raul Moreno]
image: img/banners/cryptojacking.png
date: '2021-11-22T07:03:47.149Z'
tags:
  - Criptomonedas
  - Cryptojacking
  - Malware
---

El cryptojacking es un ciberataque sigiloso, que [utiliza los recursos computacionales de la víctima para minar criptomonedas](https://www.interpol.int/en/Crimes/Cybercrime/Cryptojacking). El concepto puede ser un poco difícil de entender si no sabemos que es una criptomoneda, y como funciona la minería de las mismas.

La siguiente analogía debería ayudarnos un poco a entender de que se tratan estos ataques, sin tener que adentrarnos demasiado en explicaciones de las criptomonedas como tal.

Es como tener un carro estacionado afuera de la casa, y mientras dormimos una persona lo usa sin nuestro consentimiento, para Uber. En la mañana notamos que hace falta combustible, y el kilometraje ha aumentado.

En este ejemplo hay indicios evidentes de que algo anda mal, sin embargo con el cryptojacking puede que no sea tan fácil para un usuario final determinar lo que esta sucediendo.

Si bien es cierto existen indicadores que nos puedan alertar sobre el cryptojacking, como por ejemplo: un uso del 100% de la cpu, a pesar que no estemos haciendo nada. Los actores maliciosos podrían tomar medidas adicionales para asegurar, que estos ataques sean más sigilosos y difíciles de detectar.

### Tesla - Un ejemplo recurrente

En un articulo reciente de [amenazas internas](https://www.linkedin.com/pulse/criminalidad-40-amenaza-interna-ra%25C3%25BAl-felipe-moreno-jimenez/?trackingId=RBMTlpTUTmykRg3TkzAKzQ%3D%3D) utilice esta compañía en particular de ejemplo, en esta ocasión les presento nuevamente a Tesla.

Elon Musk, no desconoce de las criptomonedas. Inclusive durante inicios del 2021 una serie de twits por parte de Musk genero un gran impacto en el mercado, a tal punto de ser denominado el "[Efecto Musk](https://www.blockchainresearchlab.org/2021/02/08/the-musk-effect-how-elon-musks-tweets-affect-the-cryptocurrency-market/)". Aunque probablemente desconozca de la participación involuntaria de Tesla en la criptomineria, debido a un ataque de cryptojacking.

![No alt text provided for this image](https://media.licdn.com/dms/image/C5612AQETv7OpKkpjKg/article-inline_image-shrink_1500_2232/0/1637601599805?e=1685577600&v=beta&t=KL0MYJHcXtnW-JxCj4lLJAaIlPGWF04BjA3e7w5lZME)

En el 2018, Tesla sufrió uno de estos ataques. El incidente sucedió debido a la falta de controles de acceso para una consola de Kubernetes, que a su vez mantenía credenciales de la nube computacional de Amazon. En otras palabras, los actores maliciosos tenían todo lo necesario para instalar su cryptojacker, y minar criptomonedas en computadora ajena.

Lo interesante en este caso fueron los pasos extra que tomaron los actores maliciosos, [**para ocultar la presencia de sus actividades configuraron un pool de minería en lugar de utilizar uno público, de esta manera dificultando su detección**](https://redlock.io/blog/cryptojacking-tesla), escondieron el IP verdadero del pool con Cloudfare, **y en lugar de utilizar todo el poder de la cpu para minar limitaron su uso para evitar sospechas.**

Existen otras maneras de llevar acabo este ataque, por ejemplo: durante el 2018 el popular sistema de manejo de contenidos (CMS) Drupal, fue afectado por una vulnerabilidad conocida como el Drupalgeddon2 ([CVE-2018-7600](https://www.linkedin.com/redir/general-malware-page?url=https%3A%2F%2Fwww%2eexploit-db%2ecom%2Fexploits%2F44482)). Entre otras cosas esto le permitió a los actores maliciosos implantar código en páginas web que utilizaban esta tecnología.

El código que utilizaron era un script llamado CoinHive, cuyo concepto original era permitirle a los administradores de páginas web monetizar la página tomando prestado el poder computacional de los visitantes para minar la criptomoneda [Monero](https://www.getmonero.org/resources/about/). De esta manera, las personas podrían contribuir a sus páginas favoritas, y los administradores podrían evitar sobrecargarla con publicidad.

La idea era muy interesante pero aún más interesante le pareció a los actores maliciosos, que arrancaron a trabajar [**explotando la vulnerabilidad que les permitió instalar el script de CoinHive en páginas vulnerables para minar criptomonedas a favor de ellos**](https://threatpost.com/drupalgeddon-2-0-still-haunting-115k-sites/132518/).

Drupalgeddon2 también se uso para instalar software como [XMrig](https://xmrig.com/docs/miner) en servidores vulnerados, estos serian utilizados para la criptomineria de Monero. De esta manera logrando una mayor monetización, en ciertos casos los actores maliciosos lograron minar [**un total de 544.74 XMR(Monero) que en su momento habría sido unos $105,566.80 dolares**](https://www.volexity.com/blog/2018/04/16/drupalgeddon-2-profiting-from-mass-exploitation/).

A pesar que el Drupalgeddon2 es una vulnerabilidad que cuenta con parche, y que [CoinHive este descontinuado](https://www.zdnet.com/article/coinhive-cryptojacking-service-to-shut-down-in-march-2019/) no quiere decir que el cryptojacking sea menos viable como ataque, de hecho hay grupos de actores maliciosos que se especializan en los mismos.

### TeamTNT

![No alt text provided for this image](https://media.licdn.com/dms/image/C5612AQHiltq_MKsy-w/article-inline_image-shrink_1000_1488/0/1637600257640?e=1685577600&v=beta&t=IVWzpqtdt7Y1QGB7bBqcCk0yTE8tG2niKI8N_3c6UAM)

El grupo [TeamTNT](https://attack.mitre.org/groups/G0139/) se enfoca en ataques de cryptojacking a contenedores virtuales como Kubernetes, y similar al ataque de Tesla este actor malicioso en particular toma varias medidas evitar detección. Por ejemplo: [disfrazar el nombre del proceso malicioso con el de un proceso conocido.](https://unit42.paloaltonetworks.com/hildegard-malware-teamtnt/)

En la imagen de abajo cortesía de Group-IB, podremos apreciar una parte de la infraestructura que utiliza este actor malicioso que incluye dominios como the.borg[.]wtf, pacu.borg[.]wtf, pwn.borg[.]wtf, irc.borg[.]wtf, irc03.teamtnt[.]red.

![No alt text provided for this image](https://media.licdn.com/dms/image/C4D12AQFaduu2xdaZNg/article-inline_image-shrink_1000_1488/0/1637595560485?e=1685577600&v=beta&t=wvwfVKYyLSOlAxjy1-cllAOdwYhn-RbmgCDQEUuMqk4)

Al hacer zoom-out en este gráfico(abajo) podremos apreciar en la parte superior derecha un ramillete rojo. Este representa algunas herramientas maliciosas utilizadas por este actor, como "spread_docker_loop.sh" [que ejecutaría una serie de comandos como un wget(descarga) de la variable PWNWWWLNK="http://45.9.148[.]35/chimaera/sh/setup_xmr.sh"](https://otx.alienvault.com/indicator/file/d214201e35264663e746ac7331423f33c29aae0c), cuya finalidad era descargar otro script para posteriormente instalar el software de cryptomining.

![No alt text provided for this image](https://media.licdn.com/dms/image/C5612AQFVSRhO7o7R3Q/article-inline_image-shrink_1000_1488/0/1637355038674?e=1685577600&v=beta&t=C7Cjp3MhQJJwAgeYFxNNHE9gId5cte9YQyQG4vl-lmQ)

Si bien es cierto que se trata de ataques sigilosos, en algunas ocasiones los actores maliciosos no logran configurarlo de manera adecuada, y terminan obstaculizando el funcionamiento normal de un servicio. De esta manera transformándose en un ataque de negación de servicios(DoS).

Un ejemplo reciente, es el del Instituto Nacional de Transparencia de México. El cual se vio forzado a realizar un comunicado durante Septiembre del 2021, ya que su plataforma de transparencia dejo de funcionar luego de un ["hackeo de tipo de explotación de criptomonedas"](https://www.criptonoticias.com/seguridad-bitcoin/hackers-atacaron-sistema-transparencia-mexico-minar-criptomonedas/).

![No alt text provided for this image](https://media.licdn.com/dms/image/C5612AQHvyzcT3A9cNg/article-inline_image-shrink_1500_2232/0/1636387132593?e=1685577600&v=beta&t=b_159pLHQcvVyoq4kgWBnss8cxXnY_lLNrogJm43ogE)

Como hemos podido ver existen actores maliciosos sofisticados que se enfocan exclusivamente la modalidad de cryptojacking. Entre más tiempo permanezcan sin ser detectados minando criptomonedas mayor sera su retorno, por lo tanto toman diversas medidas para evitar detección.

Existe una serie de variables que determinan ese retorno por ejemplo la criptomoneda que minan y el hardware que vulneraron para esta tarea, pero al no tener que asumir los costos de equipo ni de electricidad, el retorno para el actor malicioso es suficiente como para incentivar este tipo de ataques.

**Referencias:**

-   [Interpol - Cryptojacking](https://www.interpol.int/en/Crimes/Cybercrime/Cryptojacking)
-   [Blockchain Research Lab - The Musk Effect](https://www.blockchainresearchlab.org/2021/02/08/the-musk-effect-how-elon-musks-tweets-affect-the-cryptocurrency-market/)
-   [RedLock - Cryptojacking Tesla](https://redlock.io/blog/cryptojacking-tesla)
-   [Exploit-db - Drupalggedon2 Remote Code Execution](https://www.linkedin.com/redir/general-malware-page?url=https%3A%2F%2Fwww%2eexploit-db%2ecom%2Fexploits%2F44482)
-   [GetMonero.org - About Monero](https://www.getmonero.org/resources/about/)
-   [ThreatPost - Drupalgeddon2.0 still haunting 115k sites](https://threatpost.com/drupalgeddon-2-0-still-haunting-115k-sites/132518/)
-   [Xmrig.com - Miner](https://xmrig.com/docs/miner)
-   [Volexity - Drupalgeddon2 profiting from mass exploitation](https://www.volexity.com/blog/2018/04/16/drupalgeddon-2-profiting-from-mass-exploitation/)
-   [Zdnet - Coinhive cryptojacking service to shut down](https://www.zdnet.com/article/coinhive-cryptojacking-service-to-shut-down-in-march-2019/)
-   [Mitre - TeamTNT(G0139)](https://attack.mitre.org/groups/G0139/)
-   [Unit42 PaloAltoNetworks - Hildegard malware TeamTNT](https://unit42.paloaltonetworks.com/hildegard-malware-teamtnt/)
-   [ATT - TeamTNT Chimera Campaign](https://cybersecurity.att.com/blogs/labs-research/teamtnt-with-new-campaign-aka-chimaera)
-   [AlienVault - Indicator file d214201e35264663e746ac7331423f33c29aae0c](https://otx.alienvault.com/indicator/file/d214201e35264663e746ac7331423f33c29aae0c)
-   [Criptonoticias - Hackers atacaron sistema transparencia México](https://www.criptonoticias.com/seguridad-bitcoin/hackers-atacaron-sistema-transparencia-mexico-minar-criptomonedas/)