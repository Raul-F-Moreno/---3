---
layout: post
title: 'Criminalidad 4.0 - Deepfakes'
author: [Raul Moreno]
image: img/banners/deepfakes.png
date: '2020-09-26T07:03:47.149Z'
tags:
  - Deepfakes
  - Deepvoice
  - Fraude
---

El termino "deepfake" surge de la combinación de "deep learning" y "fake", y es utilizado generalmente para referirse a vídeos que son alterados utilizando Inteligencia Artificial. Esta tecnología permite substituir la cara de una persona con la de otra, como por ejemplo: cambiar la cara de Keanu Reeves con la de Will Smith en algunas memorables escenas de "Matrix".

<iframe width="560" height="315" src="https://www.youtube.com/embed/1h-yy3h1u04" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Como podrán ver los resultados son impresionantes, los movimientos oculares, expresiones faciales, el reflejo en los lentes de Morpheus. Este "deepfake" esta muy bien ejecutado, a pesar de que existan pequeños momentos como la transición de imagen en el minuto 2:14-2:15, donde podemos brevemente visualizar como se "aplica" la cara de Will Smith a Keanu Reeves. (Jamás imaginé que escribiría algo así en un contexto que hiciera sentido.)

<iframe width="560" height="315" src="https://www.youtube.com/embed/1h-yy3h1u04?start=133" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Para entender mejor los deepfakes necesitamos comprender la tecnología que los hace posible. El "deep learning" o aprendizaje profundo es cuando se utilizan algoritmos computacionales que realizan "iteraciones", es decir ejecutan una tarea en particular de manera repetitiva y con cada repetición obtienen progresivamente mejores resultados.

IBM define el aprendizaje profundo de la siguiente manera: "[El aprendizaje profundo es un subconjunto del aprendizaje de máquina (machine learning) en el que las redes neuronales, algoritmos inspirados en el cerebro humano, aprenden de grandes cantidades de datos.](https://www.ibm.com/cloud/deep-learning)"

Algunos ejemplos de uso de esta tecnología en particular serian: reconocer emociones y estados cognitivos de las personas en base a imágenes, vídeos, e incluso audio analizando el tono de voz y patrón conversacional. Lo cuál es realizado por la empresa [Affectiva](https://www.affectiva.com/how/deep-learning-at-affectiva/); también utilizan esta tecnología para el monitoreo a conductores de vehículos, para asegurarse que no estén distraídos.

Esta tecnología también esta siendo utilizada de manera nefasta, de acuerdo al reporte "[The State of Deepfakes: Landscapes, Threats and Impacts](https://storage.googleapis.com/deeptrace-public/Deeptrace-the-State-of-Deepfakes-2019.pdf)" de la empresa Deeptrace(ahora Sensity), **el 96% de los deepfakes en internet son de naturaleza pornográfica**. La mayoría de estos deepfakes pornográficos son de mujeres, principalmente profesionales (actrices) de la industria del entretenimiento.

Pero, **¿esta tecnología es compleja y requiere de mucha información para ser utilizada cierto ? No necesariamente.** En la actualidad, se ha desarrollado a tal punto en el cuál es relativamente sencillo utilizar esta tecnología, inclusive podríamos utilizar una fotografía del "objetivo" para poder hacer un deepfake. Para el siguiente ejemplo, utilizaremos fotos que se pueden encontrar en Google con gran facilidad.

En este caso se utiliza el "[First Order Motion Model for image animation](https://papers.nips.cc/paper/8935-first-order-motion-model-for-image-animation)", es un modelo de animación de imágenes que crearon Aliaksandr Siarohin, Stephane Lathuiliere, Sergey Tulyakov, Elisa Ricci, Nicu Sebe en Diciembre del 2019. Los autores de este proyecto lo describen de esta manera: "La animación de imágenes consiste, en generar una secuencia de vídeo para que un objeto en una imagen de origen se anime de acuerdo con el movimiento de un vídeo de conducción". En otras palabras, podrías grabar un vídeo y utilizarlo para generar las expresiones faciales, movimientos oculares, etc y luego animar una imagen objetivo.

Como pueden observar, los resultados son bastante buenos. El proceso involucra seguir los pasos que están detallados [en el repositorio Github](https://github.com/AliaksandrSiarohin/first-order-model) de Aliaksandr Siarohin, en este sitio se puede obtener todo lo necesario para lograr un vídeo como este. También se debe resaltar, que este proceso no tomo una gran cantidad de tiempo, en un par de horas es posible obtener el primer vídeo animado de la imagen objetivo.

<iframe src="https://player.vimeo.com/video/471415069?h=cc4fe1b151" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/471415069">Deepfakes figuras p&uacute;blicas Panam&aacute;.</a> from <a href="https://vimeo.com/raulfmoreno">Raul Moreno</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

Esto implica que la "barrera de entrada" en cuanto a conocimientos para realizar este tipo de acción es relativamente baja. Una persona con un manejo intermedio o hasta fundamental del lenguaje de programación Python, podría lograr animar una imagen sin mayor percances. Alternativamente podrían desconocer Python y optar por seguir un tutorial de Youtube, esto tomaría más tiempo; pero, no representaría un obstáculo substancial para lograr el objetivo final.

El problema radica en que la criminalidad ha demostrado consistentemente interés, en integrar las tecnologías emergentes en sus actividades ilícitas. Esta tecnología en particular podría ser utilizada para nuevas formas sofisticadas de fraude. Un ejemplo de esto seria: en lugar de recibir la tradicional llamada de "su hijo me debe dinero" los criminales podrían enviar un vídeo de su hijo solicitando este dinero.

Esto incrementaría las probabilidades de caer víctima de fraude, ya que la persona estaría viendo y **escuchando** a un ser querido o conocido cercano, solicitando auxilio. Agregado a esto, el desconocimiento de esta tecnología podría conducir a la víctima a pensar que se trata de una situación legitima.

Como podrán notar menciono "escuchando", esto se debe a que esta tecnología también se puede utilizar para generar audio. Oraciones completas que nunca se dijeron en la voz de la persona "objetivo", con la cual entrenaron el algoritmo. Para apreciar lo realista que podría sonar una voz sintética, escuchemos este ejemplo de Joe Rogan creado por los ingenieros Hashiam Kadhim, Rayhane Mama, Joseph Palermo.

<iframe width="560" height="315" src="https://www.youtube.com/embed/DWK_iYBl8cA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

El tono de voz y la cadencia verbal es impresionante; sin embargo, podemos apreciar que en momentos la voz se puede escuchar un poco plana, esto se puede notar en el 0:10-0:12. Este ejemplo de voz sintética es un exito. En parte se debe a que integra otros sonidos que realizamos al hablar, como los que hacemos al respirar. Inmediatamente luego de decir "Friends" en el segundo 0:09 se puede apreciar este efecto, es aún más pronunciado en el minuto 1:25-1:26.

Existen casos en los cuales se han utilizado deepfakes de voz para ejecutar crímenes, como una [**transferencia fraudulenta de $243,000 USD**](https://www.wsj.com/articles/fraudsters-use-ai-to-mimic-ceos-voice-in-unusual-cybercrime-case-11567157402). El supuesto CEO de la sede matriz "llamo" al CEO de la sede en Reino Unido, para que se realizara una transferencia urgente a una cuenta bancaria en Hungria. Los criminales lograron su objetivo ya que pudieron engañar con éxito a este alto ejecutivo.

Si como sociedad ya experimentamos problemas con las noticias falsas, cadenas virales con desinformación en whatsapp, *notas de voz reenviadas* de supuestos expertos, etc. Entonces, en un contexto en el cual se utilice de forma indebida, o con fines maliciosos; ¿Que podríamos esperar de este tipo de tecnología y cuales serian sus consecuencias ?

Necesitamos tener presente que este tipo de tecnología existe. Que el riesgo de su uso en un contexto criminal es real, y no es posible eliminarlo. Podría ser mitigado; sin embargo, para que esto suceda se necesitaría adoptar una postura pro-activa para enfrentar estos nuevos desafíos. De lo contrario, permaneceremos vulnerables a delitos asistidos con alta tecnología.

**Referencias:**

[**IBM - Deep Learning**](https://www.ibm.com/cloud/deep-learning)

[**Affectiva - Deep Learning at Affectiva**](https://www.affectiva.com/how/deep-learning-at-affectiva/)

[**Deeptrace - The State of the Deepfakes**](https://storage.googleapis.com/deeptrace-public/Deeptrace-the-State-of-Deepfakes-2019.pdf)

[**First Order Motion Model for Image Animation**](https://papers.nips.cc/paper/8935-first-order-motion-model-for-image-animation)

[**Github - Aliaksandr Siarohin**](https://github.com/AliaksandrSiarohin/first-order-model)

[**WSJ - Fraudsters Mimic CEO voice in unusual cybercrime**](https://www.wsj.com/articles/fraudsters-use-ai-to-mimic-ceos-voice-in-unusual-cybercrime-case-11567157402)