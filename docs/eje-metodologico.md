# Eje metodológico — el material teórico

## Cómo corre

| | |
|---|---|
| **Dónde está** | `docs/metodologias/clase-XX.pdf` |
| **Dónde se lee** | Fuera de clase |
| **Cuándo se entrega** | El cuestionario, al inicio de la clase siguiente |
| **Tiempo en el aula** | 5 minutos de puesta en común |
| **Peso** | 10% de la nota final, individual |

Los parciales de las clases 8 y 15 **no son un múltiple choice**: son la defensa del proyecto. La teoría no se evalúa por separado — se evalúa **aplicada**, en las preguntas de esas defensas (ver la última sección de este documento).

La puesta en común de 5 minutos **no es un resumen del PDF**. Es una pregunta que obliga a aplicar la lectura al proyecto propio, respondida por dos o tres alumnos en voz alta. Si nadie leyó, se nota en treinta segundos y se sigue: el material no se re-explica en clase.

## El puente: lectura ↔ taller

Cada página de clase abre con un bloque **"Esto que leyeron, hoy lo hacen así"** que traduce la lectura en una acción concreta sobre el repositorio del equipo.

| Clase | Lectura | Pregunta disparadora (5 min) | Puente concreto con el taller |
|---|---|---|---|
| 1 | **MIDAS, MDA, MDE, XML-XSLT** | "¿En qué se parece MDA a pedirle código a una IA?" | La materia arranca por la especificación, no por el código, por la misma razón por la que MDA arrancaba por el modelo |
| 2 | **Usabilidad y accesibilidad** | "¿Cómo verificarían que el sistema es fácil de usar?" | Los 5 criterios de usabilidad se escriben como **criterios de aceptación medibles** en `docs/spec.md`; accesibilidad como requisito no funcional desde el día 1 |
| 3 | **Programación Extrema (XP)** | "¿Cuál de las prácticas de XP no están haciendo todavía?" | Se modela **de a pares**, el schema entra por PR revisado y la restricción se escribe como test antes de implementarla |
| 4 | **Scrum** | "¿Qué evento de Scrum hacemos en el minuto 0 de cada clase?" | El tablero del equipo, las historias como issues y los roles asignados |
| 5 | **Ágil** | "¿Qué significa exactamente que una tarea está terminada en su equipo?" | Se escribe la **Definition of Done** del equipo en el README |
| 6 | **Monolitos vs. SOA** | "¿Resuelven la identidad adentro o la delegan?" | La decisión Auth.js vs. servicio externo, documentada como ADR — es su primera decisión monolito/servicios real |
| 7 | **SOA** | "¿Su sistema es proveedor, consumidor, o las dos cosas?" | Consumen un servicio externo y exponen el suyo; la dependencia se documenta con límites y contingencia |
| **8** | — | — | **Parcial I: defensa del proyecto** |
| 9 | **MVC** | "¿Dónde está el modelo, la vista y el controlador en su repo?" | Se ubican las tres piezas en el código propio y se agrega la pregunta que MVC no contesta: ¿de qué lado del cable corre cada una? |
| 10 | **APIs, API First, REST, JSON** | "¿Por qué su API existía antes que la primera pantalla?" | La UI consume un contrato que ya existía. Además se auditan los criterios de usabilidad escritos en la clase 2 |
| 11 | **Programación para móviles** | "¿Por qué no están haciendo una app nativa?" | El formulario tiene que funcionar con el pulgar, en 5 pulgadas y con mala conexión: la web como estrategia multiplataforma |
| 12 | **Pruebas** | "¿Alcanza con probar en el Chrome de su notebook?" | Se prueba en tres capas: tests automatizados, preview deployment y **celular real** |
| 13 | **Agentes de software** | "¿Cuánta autonomía le darían a un agente dentro del sistema?" | Se construye la funcionalidad con IA definiendo explícitamente qué herramientas puede usar y qué necesita confirmación |
| 14 | **Programación paralela** | "¿Qué pasa si dos usuarios hacen lo mismo en el mismo instante?" | Se busca una race condition real en el propio código y se cierra; se cazan waterfalls y N+1 |
| **15** | — | — | **Parcial II: defensa del proyecto** |
| 16 | **Programación paralela (2)** | "¿Qué harían si mañana tuvieran diez mil usuarios?" | Pregunta de cierre de la defensa final + retrospectiva del equipo |

## Coincidencias que conviene aprovechar en clase

Cuatro lecturas caen casi exactamente sobre el tema técnico del día. Vale la pena hacerlas explícitas en el aula, porque es donde el alumno ve que la teoría no es un trámite:

- **Clase 1 — MDA.** El material describe métodos que prometían generar código a partir de un modelo. Fracasaron por herramientas rígidas y código ilegible. Veinte años después la promesa volvió con otro motor de transformación: una IA que lee su especificación. **Mismo problema de fondo: si el modelo de entrada es ambiguo, sale basura prolija.** Es el mejor arranque posible para la política de IA de la materia.
- **Clase 9 — MVC.** Cae justo cuando empieza el frontend. Permite ubicar las tres piezas en su propio repositorio y después mostrar el límite del patrón: MVC no dice nada sobre qué corre en el servidor y qué en el navegador, que es *la* pregunta de una app moderna.
- **Clase 13 — Agentes de software.** El material define agente por autonomía, proactividad y reactividad, escrito mucho antes de los modelos de lenguaje. Describe con precisión lo que van a construir. La pregunta "¿cuánta autonomía le das?" sale directo de la lectura.
- **Clase 14 — Programación paralela.** El texto habla de multihilo en C/C++; el puente es directo: concurrencia = dos usuarios tocando el mismo dato, paralelismo = consultas que podrían haber salido juntas. Las dos cosas están en el código de todos los equipos.

## Cómo se evalúa la teoría sin examen escrito

El material se evalúa en dos lugares:

1. **El cuestionario semanal** (10% de la nota final). Verifica que leyeron.
2. **Las preguntas de las tres defensas** (clases 8, 15 y 16). Ahí la teoría aparece aplicada al propio sistema. Banco de preguntas:

| Lectura | Pregunta de defensa |
|---|---|
| MDA / MIDAS | "Muéstrenme la especificación de la que salió este módulo. ¿Qué tuvieron que corregir de lo generado?" |
| Usabilidad y accesibilidad | "Recorran el flujo principal solo con el teclado." |
| XP | "¿Qué parte de este código se escribió de a pares y qué test lo cubre?" |
| Scrum / Ágil | "¿Cuál era su Definition of Done y este módulo la cumple?" |
| Monolitos vs. SOA | "¿Por qué su aplicación es un monolito y no una arquitectura de servicios? ¿Qué cambiarían si tuvieran tres equipos?" |
| SOA | "Si mañana quisieran una app móvil, ¿qué parte de esto reusan tal cual?" |
| MVC | "Ubiquen el modelo, la vista y el controlador en este archivo. ¿Dónde no encaja el patrón?" |
| APIs / REST | "¿Por qué este endpoint devuelve 409 y no 400?" |
| Móviles | "Muéstrenme esta pantalla en su celular." |
| Pruebas | "¿Qué caso borde cubre este test y quién lo pensó?" |
| Agentes | "¿Qué acciones puede ejecutar su agente sin preguntar? ¿Por qué esas y no otras?" |
| Paralela | "¿Qué pasa si dos usuarios hacen esto al mismo tiempo?" |

> **A tener en cuenta.** Con esta decisión, la teoría no tiene una instancia escrita propia: se apoya en el cuestionario semanal y en las defensas. Si en algún momento la cátedra pide evidencia de evaluación escrita, la salida más barata es agregar 15 preguntas de múltiple choice al inicio de las clases 8 y 15 —el banco de arriba ya sirve de base— sin tocar el resto del cursado.
