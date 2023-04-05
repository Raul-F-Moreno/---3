---
layout: post
title: 'Criminalidad 4.0 - Criptolavado'
author: [Raul Moreno]
tags: ['Criptomonedas','Blanqueo de capitales','Mixers', 'Criptolavado']
image: img/banners/criptolavado.png
date: '2022-03-29T23:46:37.121Z'
draft: false
---


>**"Los criminales prefieren las criptomonedas porque no se pueden rastrear."**

Existen un sin número de concepciones erróneas como la anterior sobre las criptomonedas, en particular del [Bitcoin](https://bitcoin.org/en/how-it-works) debido a su protagonismo entre las mismas. Estas concepciones han sido creadas ya sea por exposición mediática (información incompleta/incorrecta), o interacción superficial con esta tecnología.

En realidad, la relación entre las criptomonedas y las actividades ilícitas es relativamente baja. El reporte "Crypto-crime 2021" de la empresa Chainalysis revela que, [durante el 2019 la actividad ilícita represento 2.1% (21,400 millones de dólares) del volumen total transaccional de criptodivisas mientras que en el 2020 solo el 0,34% (10,000 millones de dólares)](https://blog.chainalysis.com/reports/2021-crypto-crime-report-intro-ransomware-scams-darknet-markets/).

A pesar de esto hemos podido apreciar en titulares de noticias recientes, agrupaciones de cibercriminales que ejecutan ataques de ransomware a grandes compañías para exigir estrafalarios rescates en Bitcoin. Pero, como se utilizan las criptomonedas para ocultar procedencias ilícitas ?

![No alt text provided for this image](https://media.licdn.com/dms/image/C4D12AQFgVVVWTpK_gQ/article-inline_image-shrink_1500_2232/0/1647630212664?e=1685577600&v=beta&t=vg-N9NV7HjRac-EKHIUc6IWBa-IStnhM69jWjLGHnyI)

Bitcoin con ejemplos prácticos
------------------------------

Para comprender mejor este articulo como tal, sera necesario entender algunas nociones básicas de esta tecnología, explicaré algunas de manera superficial. Sin embargo es recomendable buscar fuentes adicionales(abajo un par) para obtener un entendimiento más completo de las mismas.

1.  [Bitcoin: 4 claves para entender la más grande de las criptomonedas y qué riesgos tiene](https://www.youtube.com/watch?v=C-3aYnhF6Io)
2.  [Qué son los Bitcoins y cómo funcionan](https://www.youtube.com/watch?v=Ow376vKIBXE)

Para obtener Bitcoins se crea un wallet este contiene un par de llaves, una pública y una privada. La pública es la dirección en la cual se reciben los Bitcoins mientras que la privada es la que permite al dueño del wallet a disponer del mismo.

La dirección no tiene un nombre como tal, son una serie de caracteres alfanuméricos como "357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P". Lo cual no nos dice mucho, sin embargo al realizar una búsqueda en Google de esta dirección podremos descubrir de quien se pueda tratar.

![No alt text provided for this image](https://media.licdn.com/dms/image/C4D12AQH8xOqLYLZt2g/article-inline_image-shrink_1500_2232/0/1647637690453?e=1685577600&v=beta&t=6z6SYYAnfleQSmml5-TjidBGfeck4PK3BtMtiUq3BpQ)

![No alt text provided for this image](https://media.licdn.com/dms/image/C4D12AQG5e0pzDC7R5g/article-inline_image-shrink_1500_2232/0/1647739582847?e=1685577600&v=beta&t=-nia5PMLs5FYBlhc5qI3v9rJU4AA9xnzXZoWysmbGI4)

Esta es la dirección de [donaciones a Ucrania](https://time.com/nextadvisor/investing/cryptocurrency/donate-crypto-to-ukraine/), no podían faltar los estafadores tratando de beneficiarse de la actual situación, [adulterando la imagen del twit para reemplazar la dirección oficial con la suya y recibir fondos, o circulando imágenes pretendiendo recibir fondos para causas humanitarias](https://security.georgetown.edu/announcements/ukraine-donation-scams/).

Al realizar una búsqueda en el [explorador de blockchain](https://www.blockchain.com/explorer) de esta dirección, podemos verificar si se trata de la original o un estafador. Se puede observar [la cantidad de transacciones que se ha realizado, los montos que ha enviado y recibido, el balance final actual de la dirección](https://www.blockchain.com/btc/address/357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P), en el historial de transacción es visible la fecha, hora, monto y dirección de las transacciones.

![No alt text provided for this image](https://media.licdn.com/dms/image/C5612AQG7bqsw6k8U-g/article-inline_image-shrink_1500_2232/0/1648056392568?e=1685577600&v=beta&t=mBHWLNrFTe_800DjQAPgm0SA0Ow1bSWx9nsgHBtWIcg)

Esto representa una desventaja importante cuando se trata del uso de Bitcoin para recibir pagos en concepto de actividades ilícitas, ya que [es posible realizar un análisis extenso de las transacciones que realizan las direcciones](https://www.maltego.com/blog/bitcoin-forensics-with-maltego-and-ciphertrace-blockchain-intelligence/).

No siempre es fácil determinar quienes operan una dirección, de hecho es más probable que nuestra búsqueda resulte en nada(como la de abajo). Esto se debe a que los grupos criminales operan cientos, o miles de direcciones para realizar transferencias entre ellas.

![No alt text provided for this image](https://media.licdn.com/dms/image/C4D12AQE6prdjC9JeOA/article-inline_image-shrink_1500_2232/0/1648154700167?e=1685577600&v=beta&t=H473N5gHhXdqrtLSIart81Vn0dzuq_IQ6yr0SXkwZ3E)

Pero, de alguna manera los criminales están utilizando esta tecnología para dificultar y esconder sus ganancias mal habidas de las fuerzas del orden cierto ?

La publicación ["Surfing the First Wave of Cryptocurrency Money Laundering"](https://www.justice.gov/usao/page/file/1403671/download) en la revista de Derecho y Práctica Federal del Departamento de Justicia(USA), explica cómo esta tecnología permite que [las fases de colocación y estratificación o segmentación por capas](https://www.antilavadodedinero.com/las-3-etapas-del-lavado-de-dinero/) del ciclo de [lavado de dinero](https://money.howstuffworks.com/money-laundering.htm) sea más fácil para los criminales. Pero debido a la falta de adopción masiva de la tecnología, la etapa de integración sigue siendo difícil.

Veamos ejemplos de las fases de colocación y estratificación, **sin embargo tomemos en cuenta que existen varios métodos distintos utilizados por los criminales para estas etapas.**

Colocación: Mil y un direcciones.
---------------------------------

![No alt text provided for this image](https://media.licdn.com/dms/image/C5612AQGLK1Boz3-bSw/article-inline_image-shrink_1500_2232/0/1648567402210?e=1685577600&v=beta&t=VPUSIGLPxg2qKSvYQNnH2lN1Haoq_-9s1Gr8PZtSU88)

El uso de multiples (cientos o miles) de direcciones para ocultar las transacciones, es una practica frecuente para los grupos criminales. Como ejemplo reciente podríamos observar al [grupo de ransomware Conti](https://unit42.paloaltonetworks.com/conti-ransomware-gang/) utilizando [cientos de direcciones para gestionar sus finanzas](https://github.com/0xjxd/Conti-Leak/blob/main/BTC-Wallets_Balance_Received.csv).

Existen estimados que [este grupo ha logrado amasar unos $2.7 billones de dólares](https://ransomware.org/blog/5-things-we-learned-from-the-conti-leaks/), y que [durante el periodo de Enero 2021 a Febrero 2022 Conti utilizo alrededor de $6 millones de dólares en distintos rubros como salarios y servicios profesionales](https://www.breachquest.com/conti-leaks-insight-into-a-ransomware-unicorn/).

Muchas direcciones no contienen absolutamente nada, sin embargo mantienen montos importantes en otras.

![No alt text provided for this image](https://media.licdn.com/dms/image/C4D12AQGEFH3eJzt8_w/article-inline_image-shrink_1500_2232/0/1648224341465?e=1685577600&v=beta&t=qMj4hFITVNi9i5rAXvY2H02ZvVUXEHFFtZSn6IqOlw8)

Esto lo hacen para ofuscar el origen del monto, por ejemplo: al recibir un rescate de $4 millones en BTC a una dirección esta repartiría el total en muchas otras direcciones, de esta manera "distanciándose" de la dirección original.

Las direcciones que recibieron estos montos fragmentados luego realizarían la misma acción multiples veces, y los montos re-fragmentados se enviarían posteriormente a algún [servicio de mixing o tumbler](https://mixbtc.net/mixers/) para continuar con el distanciamiento.

Estratificación: Mixers/Tumblers, Mezcladoras de monedas.
---------------------------------------------------------

![No alt text provided for this image](https://media.licdn.com/dms/image/C4D12AQEeCQbt0eFL0w/article-inline_image-shrink_1500_2232/0/1648486208665?e=1685577600&v=beta&t=14KEPnjH9SWDxsC7K5ePy9BjR8cLtiN2KKDri6xf_uo)

Este es uno de los métodos más utilizados, también conocido como "CoinJoin" o juntado de monedas. Esta técnica funciona de una manera relativamente sencilla, [multiples personas juntan sus Bitcoin en una transacción(se mezclan), y luego se hacen envíos a direcciones nuevas "limpias".](https://docs.wasabiwallet.io/using-wasabi/CoinJoin.html#doing-coinjoin-step-by-step)

Existen diversos métodos para lograr este objetivo, en algunos software de wallet como [Wasabi](https://docs.wasabiwallet.io/using-wasabi/ELI5.html#introduction) o [Samourai](https://samouraiwallet.com/) es una función integrada. En algunos casos el mínimo requerido para entrar a una mezcla es de 0.1 BTC, es decir unos $4385.97 dólares americanos (tasa de cambio marzo 2022).

En la imagen de abajo podemos ver que el CoinJoin de Wasabi, requiere de 100 participantes para dar inicio a la mezcla de las criptomonedas, y el cobro de coordinación es un porcentaje bajo del 0.003% total de la transacción.

![No alt text provided for this image](https://media.licdn.com/dms/image/C4D12AQFP1jcthKCrbA/article-inline_image-shrink_1500_2232/0/1648153302291?e=1685577600&v=beta&t=nEw5U9MwQ7GmJUYhsE_iDt9NpOWyIC7XxZwneLD4JZ4)

Mientras que la mezcla "[Whirpool](https://samouraiwallet.com/whirlpool)" de Samourai, promete la capacidad de "[disociar matemáticamente la propiedad de las entradas a las salidas, en una transacción de bitcoin dada](https://docs.samourai.io/whirlpool/start)". El objetivo es reducir substancialmente la correlación del wallet que recibe del que envía. La imagen abajo ilustra como funciona.

![No alt text provided for this image](https://media.licdn.com/dms/image/C4D12AQG78Ohnojy20Q/article-inline_image-shrink_1500_2232/0/1648242269618?e=1685577600&v=beta&t=SSNtQPEPzoyRBx7OU4TwsZS_C20dXjL0EG-9EP4S0jA)

No siempre utilizarían servicios integrados a los software de wallet, en ocasiones podrían optar por usar un servicio de mixer externo. Un ejemplo de estos servicios es [Bitcoin Fog](https://bitcoinfog.io/), un servicio de mezcla que operaba principalmente en la dark net, y cobraba entre 2-2.5% en cada transacción.

El documento de declaración de hechos, establece que Roman Sterlingov opero Bitcoin Fog desde el 2011, y [lavo un aproximado de $355 millones de dólares en criptomonedas](https://www.justice.gov/opa/pr/individual-arrested-and-charged-operating-notorious-darknet-cryptocurrency-mixer), entre sus clientes más importantes estaban reconocidos [Dark Marketplaces](https://es.linkedin.com/pulse/criminalidad-40-dark-marketplaces-ra%C3%BAl-felipe-moreno-jimenez?trk=portfolio_article-card_title) como Agora, Silk Road 2.0, Silk Road, Evolution, y AlphaBay.

Como hemos visto el Bitcoin posee unas características llamativas para el comercio ilícito como facilidad de uso, sin embargo de igual manera posee otras como la transparencia que lo convierte en desfavorable.

Es por lo tanto que los criminales, escogen utilizar criptomonedas alternativas que ofrecen mayor cobertura posible en cuanto a términos de anonimidad, y supuesta [imposibilidad de rastreo.](https://www.monero.how/how-does-monero-privacy-work)

Estratificación: Criptomonedas de privacidad mejorada.
------------------------------------------------------

![No alt text provided for this image](https://media.licdn.com/dms/image/C4D12AQG71-dGXtrfPw/article-inline_image-shrink_1500_2232/0/1648487153779?e=1685577600&v=beta&t=nkyk2k6szDsGg2qhG485G8ID_22P0SpVjOrWaf_Q42Q)

Es por lo tanto que los criminales optan por utilizar [casas de cambio descentralizadas o DEX](https://bisq.wiki/Trading_Monero), para convertir sus Bitcoin's en otras criptomonedas alternativas. En particular aquellas que tienen [protocolos de privacidad mejorada como Monero o Zcash.](https://ia803206.us.archive.org/23/items/dark-web-files-from-blueleaks/200309%20LES%20FBI%20EIR%20-%20Darknet%20Market%20Actors%20Likely%20Convert%20Illicit%20Bitcoin%20to%20Monero%20Using%20MorphToken%20Cryptocurrency%20Exchange%2C%20Impeding%20Law%20Enforcement%20Tracing%20Efforts.pdf)

En el 2016, [actores maliciosos realizaron alrededor de 2,000 mil transacciones no autorizadas del exchange Bitfinex, por un total de 119,754 BTC (Bitcoin)](https://www.reuters.com/article/us-bitfinex-hacked-hongkong-idUSKCN10E0KP) esto representaba en el cambio del momento unos $71 millones de dólares en criptomonedas. Debido al incremento en el valor de las criptomonedas este total llego a representar [$4.5 billones de dólares](https://www.justice.gov/opa/pr/two-arrested-alleged-conspiracy-launder-45-billion-stolen-cryptocurrency).

En Febrero del 2022, se realiza el arresto de Ilya Lichtenstein y Heather Morgan, una pareja a la que se le acusa de ser los autores del incidente de Bitfinex. El documento de declaración de hechos indica que la pareja utilizo multiples técnicas, incluyendo las anteriores mencionadas con la finalidad de lavar sus ganancias ilícitas.

Entre estas se encuentra el uso de criptomonedas como Monero. Luego de distribuir los Bitcoins a multiples direcciones, [compran desde dos direcciones distintas 13,200 XMR y 6,870 XMR (Monero), las cuales reconvirtieron a Bitcoin para enviar a una dirección que utilizarían para compras de tarjetas de regalo, reservas de hoteles, etc.](https://www.justice.gov/opa/press-release/file/1470211/download)

![No alt text provided for this image](https://media.licdn.com/dms/image/C4D12AQE1stgV9n7Thw/article-inline_image-shrink_1500_2232/0/1648580248835?e=1685577600&v=beta&t=x85sqKyEcg9scvDMYa1JpeQrESJlneo2P7LJw2pppJw)

A pesar de ser una criptomoneda "más segura", Monero no es infalible. Recientemente la empresa CipherTrace, [desarrollo técnicas patentadas para el seguimiento de esta criptomoneda](https://decrypt.co/49182/ciphertrace-files-patents-for-tech-that-traces-monero-transactions), y existen otras [maneras para de-anonimizar las transacciones que se realizan con esta criptomoneda](https://www.monero.observer/researchers-publish-forensic-statistical-analysis-xmr-transaction-volume-anomaly/) que a futuro podrían ser favorecidas por la Ley y el Orden.

Como pudimos ver la posibilidad del uso de las criptomonedas para el lavado de dinero es real. Sin embargo existen muchos detalles que deben ser observados para desarrollar una discusión sobre la viabilidad del uso de las mismas a largo plazo con esta finalidad, ya que como pudimos observar existen características inherentes de la tecnología que dificultan su uso para lo mismo.

**Referencias:**

-   [Bitcoin - How it works](https://bitcoin.org/en/how-it-works)
-   [**Chainalysis - Crypto crime report 2021**](https://blog.chainalysis.com/reports/2021-crypto-crime-report-intro-ransomware-scams-darknet-markets/)
-   [**Twitter - Ukraine Donation's twit**](https://twitter.com/Ukraine/status/1497594592438497282?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1497594592438497282%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Ftime.com%2Fnextadvisor%2Finvesting%2Fcryptocurrency%2Fdonate-crypto-to-ukraine%2F)
-   [**Time - Donate crypto to Ukraine**](https://time.com/nextadvisor/investing/cryptocurrency/donate-crypto-to-ukraine/)
-   [**Georgetown - Ukraine donation scams**](https://security.georgetown.edu/announcements/ukraine-donation-scams/)
-   [Blockchain - Blockchain Explorer](https://www.blockchain.com/explorer)
-   [Blockchain - Address 357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P](https://www.blockchain.com/btc/address/357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P)
-   [Maltego - Bitforensics with Maltego and Ciphertrace](https://www.maltego.com/blog/bitcoin-forensics-with-maltego-and-ciphertrace-blockchain-intelligence/)
-   [DOJ Magazine - Surfing the First Wave of Cryptocurrency Money Laundering](https://www.justice.gov/usao/page/file/1403671/download)
-   [Antilavado de Dinero](https://www.antilavadodedinero.com/las-3-etapas-del-lavado-de-dinero/)
-   [How Stuff Works - Money Laundering](https://money.howstuffworks.com/money-laundering.html)
-   [**Unit42 Palo Alto Networks - Conti Ransomware gang**](https://unit42.paloaltonetworks.com/conti-ransomware-gang/)
-   [Github - 0xjxd Conti Leak](https://github.com/0xjxd/Conti-Leak/blob/main/BTC-Wallets_Balance_Received.csv)
-   [Ransomware.org - Things we learned from Conti Leak](https://ransomware.org/blog/5-things-we-learned-from-the-conti-leaks/)
-   [BreachQuest - Insights into a Ransomware Unicorn](https://www.breachquest.com/conti-leaks-insight-into-a-ransomware-unicorn/)
-   [Mixbtc - Mixers](https://mixbtc.net/mixers/)
-   [Wasabi Wallet - Doing a CoinJoin Step by Step](https://docs.wasabiwallet.io/using-wasabi/CoinJoin.html#doing-coinjoin-step-by-step)
-   [Wasabi Wallet Docs - ELI5 Introduction](https://docs.wasabiwallet.io/using-wasabi/ELI5.html#introduction)
-   [Samourai Wallet - Whirpool](https://samouraiwallet.com/whirlpool)
-   [Samourai Wallet Docs - Whirpool start](https://docs.samourai.io/whirlpool/start)
-   [Bitcoin Fog](https://bitcoinfog.io/)
-   Department of Justice - Case 1:21-mj-00400-RMM Statement of Facts
-   [Department of Justice - Darknet cryptocurrency mixer](https://www.justice.gov/opa/pr/individual-arrested-and-charged-operating-notorious-darknet-cryptocurrency-mixer)
-   [Dark Marketplaces](https://es.linkedin.com/pulse/criminalidad-40-dark-marketplaces-ra%C3%BAl-felipe-moreno-jimenez?trk=portfolio_article-card_title)
-   [Monero how - How does Monero privacy work](https://www.monero.how/how-does-monero-privacy-work)
-   [Bisq - Trading Monero](https://bisq.wiki/Trading_Monero)
-   FBI - Darknet Market Actors Likely Convert Illicit Bitcoin to Monero
-   [Department of Justice - Two Arrested for Alleged Conspiracy to Launder $4.5 Billion in Stolen Cryptocurrency](https://www.justice.gov/opa/pr/two-arrested-alleged-conspiracy-launder-45-billion-stolen-cryptocurrency)
-   [Department of Justice - Case 1:22-mj-00022-RMM Statement of Facts](https://www.justice.gov/opa/press-release/file/1470211/download)
-   [Reuters - Bitfinex Hacked](https://www.reuters.com/article/us-bitfinex-hacked-hongkong-idUSKCN10E0KP)
-   [Decrypt - Ciphertrace patent for tech that traces Monero](https://decrypt.co/49182/ciphertrace-files-patents-for-tech-that-traces-monero-transactions)
-   [Monero Observer - Forensic statistical analysis xmr transaction volume anomaly](https://www.monero.observer/researchers-publish-forensic-statistical-analysis-xmr-transaction-volume-anomaly/)