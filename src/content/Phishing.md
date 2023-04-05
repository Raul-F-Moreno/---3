---
layout: post
title: 'Criminalidad 4.0 - Analizando Phishing sofisticado'
author: [Raul Moreno]
image: img/banners/phishing.png
date: '2020-09-02T07:03:47.149Z'
tags:
  - Phishing
  - Fraude 419
  - PUBG Phishing
---

Cuando nos mencionan el termino "crímenes cibernéticos" es muy probable que nos salte a la mente el termino "Phishing", o que lo relacionemos con el clásico "fraude nigeriano" también conocido como el fraude "419"; el uso de este número en referencia al articulo 419 del Código Penal (Criminal Code Act) de Nigeria, que penaliza actos que buscan obtener bienes bajo cualquier tipo de pretexto falso.

![Frecuentemente en contexto de una urgencia y con promesa de grandes sumas.](https://media.licdn.com/dms/image/C5612AQFqn4JEuSG7YQ/article-inline_image-shrink_1500_2232/0/1601605981164?e=1685577600&v=beta&t=SHEdZCbDL2NSvyozYE6RQl5bs6gQaedVPaNHM8YF0gk)

Existen distintas variaciones, y a pesar de su relativa "simplicidad" este método de fraude continúa siendo exitoso, en el 2019 la Comisión Federal de Comercio(USA) estimó que este tipo de fraude resulto en la perdida de más de $667 millones.

Las campañas de phishing también intentan engañar al usuario a tomar alguna acción con el objetivo de robar información sensitiva, ya sean credenciales de usuario o números de tarjetas de crédito. Usualmente las técnicas empleadas incluyen explotar el *sentido de la urgencia* (Expiró tu password!), *simular autoridad* (Equipo de Seguridad), y en el ejemplo abajo vemos que se *aprovechan de la tendencia del usuario por preferir lo conveniente* (Conserva tu password).

![No alt text provided for this image](https://media.licdn.com/dms/image/C5612AQFGAZzABjQMqg/article-inline_image-shrink_1500_2232/0/1601608648041?e=1685577600&v=beta&t=Lrs907ONCLdfy5jIeAoxv9fi12VmXDZXyeIVwXFdCXY)

Sin embargo, existen distintos niveles de complejidad al Phishing como método de extracción de información; y si bien estamos familiarizados con algunas formas de phishing menos complejas debido a la exposición, debemos también tener presente que la habilidad y creatividad de los actores de amenaza(hackers maliciosos, grupos de amenaza persistente) influye en el nivel de sofisticación de estos ataques.

Una manera de lograr mayor exposición es utilizar sitios como [PhishTank](http://phishtank.org/) donde el usuario califica de "Cierto" o "Falso" los reportes de phishing que suben otros usuarios. Mientras realizaba esta tarea tuve la oportunidad de toparme con lo siguiente.

![No alt text provided for this image](https://media.licdn.com/dms/image/C5612AQFwQcJI4gD9jA/article-inline_image-shrink_1500_2232/0/1601611434515?e=1685577600&v=beta&t=NBFkXbk4MKKf_IvsAsTw7ouODymxmsfbM4tOKMhtZQo)

Esta campaña es especifica para usuarios móviles, podemos notar que ha sido optimizada con este objetivo.

Una de las características típicas del phishing son los hipervínculos que asemejan el sitio legítimo, en este caso http://items.pubgtencen [.]com.

Se puede apreciar elementos indicativos clásicos de una página maliciosa, la ausencia de protocolos de seguridad TLS (https), el uso de "tencen" cuando en realidad la compañía es Tencent. Es notable el nivel de atención al detalle que logran, aunque se puede observar que tanto el banner de "Pharaoh Reward" y el "Welcome" tienen ciertos errores estéticos. (Nota: espacios blancos desalineados)

![No alt text provided for this image](https://media.licdn.com/dms/image/C5612AQEjgH-rQ2z_Kw/article-inline_image-shrink_1500_2232/0/1601611968700?e=1685577600&v=beta&t=_lPZ7Q4OswDPRbih3g3gu9DGFu1iQw2goUNwuj79aI8)

Para otorgarle un falso aire de legitimidad, este ataque aparenta basarse en un evento oficial del famoso juego PUBG de la compañía Tencent. Las fechas tanto del evento como las del ataque concuerdan lo que apaciguaría las sospechas del usuario ya que es algo que esperaría ver durante ese periodo especifico de tiempo.

Esto funciona como un elemento importante para elevar la tasa de posible éxito del ataque, se busca utilizar la mayor cantidad de elementos "familiares" o "reconocibles" al usuario para generar un falso sentido de "normalidad".

![No alt text provided for this image](https://media.licdn.com/dms/image/C5612AQHkjFaPo8pbxQ/article-inline_image-shrink_1500_2232/0/1601613395473?e=1685577600&v=beta&t=G1hsYtNXAXSCbu5n9QmH6mOBtLQcRvW3brxf4uozqaQ)

La tipografía (font) que utilizan es idéntica a la del app, por tanto engañando por medio visual presentando consistencia tanto en este aspecto como en el esquema de colores que también es similar a lo que se podría apreciar en el app.

Cuando se intenta hacer "Collect" se hace aparente otra de estas particularidades, el sonido que genera este botón es reconocible al usuario como el mismo del App, adicionalmente se integra de igual manera el sonido característico del "back" (Cancel). Ambos sonidos utilizados en el contexto correcto, manteniendo consistencia, inclusive la animación "fade-in" es similar a la del App. Procedamos a "canjear" nuestro premio.

![No alt text provided for this image](https://media.licdn.com/dms/image/C5612AQGyNUe2P_QNRA/article-inline_image-shrink_1500_2232/0/1601657418762?e=1685577600&v=beta&t=OtQ5rFOH79OBsI2eU-6KkS9oyrPI6ecwFvnT45UVfHs)

Ahora, nos solicita conectarnos a una cuenta para redimir el premio se puede advertir que como los anteriores, el banner principal tiene ciertas imperfecciones estéticas. (Nota: espacio blanco, lateral izquierdo)

![No alt text provided for this image](https://media.licdn.com/dms/image/C5612AQEnIFT1quxMDQ/article-inline_image-shrink_1500_2232/0/1601658094180?e=1685577600&v=beta&t=hvIa3viETUD-UwdJ2hBK-AFuZdMC2Oeo9hJvwKBgz5o)

Al intentar acceder a la cuenta de Facebook se aprecia lo siguiente. En esta ventana en particular ninguno de los otros botones funciona, solamente el de "Log In" y también es apreciable el uso de "Forgotten Password?" en lugar del termino correcto "Forgot Password?". El botón de salida (x) en la parte superior también tiene ciertas imperfecciones que le hace ver inconsistente. Llama la atención los idiomas en particular que seleccionaron, una pista de la región especifica para la cual fue planificada esta campaña de phishing.

Al analizar el URL con herramientas como [VirusTotal](https://www.virustotal.com/gui/home/url), o [URL Void](https://www.urlvoid.com/) se evidencia rápidamente que se trata de un intento de Phishing. Es necesario mencionar que *ninguna de estas herramientas es infalible*, pero sí pueden mejorar la probabilidad del usuario en determinar si un link es malicioso o no.

![No alt text provided for this image](https://media.licdn.com/dms/image/C5612AQH71eSA20auZQ/article-inline_image-shrink_1500_2232/0/1601659488719?e=1685577600&v=beta&t=CzGQIuYZ0h7fK2RufFfTUPp2LyKX0HqHStkEKR4VDLc)

Los delitos cibernéticos han evolucionado exponencialmente en años recientes y continuarán avanzando en sus niveles de sofisticación, a medida que los actores de amenaza implementen mejores tecnologías en sus procesos delictivos recaudaran más recursos financieros producto de estas actividades, y a su vez utilizar los mismos para mejorar capacidades.

El robo de credenciales es utilizado ya sea para tomar control de cuentas particulares, pivotar a esquemas de fraude o extorsión, o se compila en bases de datos las cuales los criminales proceden a vender en la dark web; con precios que pueden variar entre $5 USD por credencial individual hasta los $500 USD por base de datos.

Es necesario que tomemos conciencia de estos problemas, y sobre todo *no confiar automáticamente en todo lo que recibimos en las diferentes plataformas digitales*. Que un email de un compañero de trabajo sea el "correcto" no implica que no tenga el potencial de ser un ataque, ni mucho menos dejarnos llevar por el sentido de la "familiaridad" que nos pueda producir una pagina elaborada porque como demostrado esto también podría ser un ataque.

**Referencias:**

-   [FBI - Common Scams and Crimes // 419 Fraud](https://www.fbi.gov/scams-and-safety/common-scams-and-crimes/nigerian-letter-or-419-fraud)
-   [Criminal Code Act - Nigeria // Chap.38, Art. 419](https://lawsofnigeria.placng.org/laws/C38.pdf)
-   [FTC - Top frauds 2019](https://www.consumer.ftc.gov/blog/2020/01/top-frauds-2019)