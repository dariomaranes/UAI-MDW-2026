# Guía docente — MDW 2026

Documento operativo: cómo se dicta cada clase, qué preparar antes y qué demostrar en vivo.

---

## El ritual de 120 minutos

| Bloque | Min | Qué hace el docente | Qué hacen los alumnos |
|---|---|---|---|
| Standup | 5 | Modera, corta a los 3 min | Un equipo muestra su app en producción |
| Metodología | 5 | Lanza **una** pregunta disparadora | 2 o 3 responden aplicando la lectura a su proyecto |
| Concepto | 25 | Explica el *porqué*: diagrama, decisiones, trade-offs | Escuchan y preguntan |
| Demo con IA | 15 | Implementa el tema en el proyecto de referencia, en vivo, con IA | Miran cómo se dirige y se corrige a la IA |
| Taller | 50 | Rota por los 10 equipos, ~4 min cada uno | Aplican el tema a su propio proyecto |
| Code review | 15 | Recorre que nadie apruebe su propio PR | Cada integrante revisa el PR de un compañero y deja 2 comentarios |
| Cierre | 5 | Recuerda entregable y lectura | Anotan |

**Versión de 90 minutos:** se eliminan standup y code review; el taller queda en 45 min.

### Reglas de dictado que sostienen el formato

1. **El bloque de concepto no pasa de 25 minutos.** Si te estás pasando, es que estás explicando sintaxis. Cortá y pasalo a la demo.
2. **Nunca leer código línea por línea.** Se muestra la estructura y se explica la decisión. El detalle lo resuelven con la IA en el taller.
3. **En el taller no se resuelve el problema del equipo**: se le hacen 2 preguntas que los desbloqueen. "¿Dónde están validando eso?" desbloquea más que "cambiá esta línea".
4. **Nadie se va sin mergear.** El entregable de la clase se cierra en clase.

---

## La demo con IA: cómo se hace bien

Es el bloque diferencial de la materia y el más fácil de arruinar. No es "miren qué rápido escribe". Es **modelar en voz alta el criterio** con el que se dirige y se audita a un asistente.

Guion de los 15 minutos:

1. **Enunciar la intención antes de escribir el prompt** (1 min). "Necesito que un turno no se superponga con otro del mismo profesional. Eso es una regla de negocio, así que va en el servidor."
2. **Escribir el prompt en pantalla, con contexto** (2 min). Mostrar que se referencian archivos y convenciones, no que se pide "hacé el CRUD".
3. **Leer el diff en voz alta** (5 min). Este es el corazón. Señalar: qué está bien, qué no, qué asumió de más.
4. **Rechazar algo, siempre** (4 min). Nunca aceptar el output completo. Si esta vez salió perfecto, pedir un cambio que lo empeore y mostrar por qué se rechaza.
5. **Verificar** (3 min). Correr, probar el caso borde, mostrar que "compila" no es "funciona".

**Errores a introducir a propósito** (una vez cada tantas clases, sin avisar): dejar pasar una validación solo en el cliente, un `any`, una consulta N+1, una autorización que confía en un parámetro del request. Después preguntar "¿alguien vio el problema?". Los que lo vean, se llevan el punto de la clase.

---

## Antes de que empiece el cuatrimestre

- [ ] Repo template funcionando y desplegado. Cronometrar el camino de cero a producción: debe dar menos de 30 minutos.
- [ ] Proyecto de referencia del docente creado (sugerido: **turnero de veterinaria**). Nunca coincide con el dominio de ningún equipo.
- [ ] Cuentas listas: GitHub, Vercel, proveedor de Postgres. Verificar los límites de los planes gratuitos con 10 equipos.
- [ ] Calendario 2026 con fechas reales y deadlines de cada cuestionario.
- [ ] Leer los 14 PDFs de `metodologias/` antes de empezar: el puente de cada clase depende de conocerlos.

---

## Plan clase por clase

Cada clase tiene su lectura teórica en `metodologias/clase-XX.pdf`. El bloque de 5 minutos de metodología usa la pregunta disparadora que está en `eje-metodologico.md`.

### Clase 1 — Kickoff · Lectura: MIDAS, MDA, MDE
No sigue el ritual: 60 min de encuadre + 60 min de taller. Ver `../clase-01/index.html`.
**El puente que vale oro:** MDA prometía generar código desde un modelo y fracasó por herramientas rígidas y código ilegible. Hoy la promesa volvió con una IA como motor de transformación, y con el mismo problema de fondo: modelo ambiguo, basura prolija. Es el mejor arranque posible para la política de IA.
**Riesgo principal:** que la conformación de equipos se coma la segunda hora. Avisar desde el minuto 1 que a los 20 minutos se asignan por lista.
**Meta innegociable:** todos los equipos con URL pública antes de irse.

### Clase 2 — Especificación y TypeScript · Lectura: usabilidad y accesibilidad
**Concepto:** el tipo como contrato entre partes del sistema y como especificación para la IA.
**Demo:** escribir la spec del dominio de referencia y derivar tipos y schemas. Mostrar el mismo prompt con y sin tipos en contexto.
**Puente:** los 5 criterios de usabilidad se escriben hoy como criterios de aceptación medibles. La accesibilidad entra como requisito no funcional ahora, no en la clase 10.

### Clase 3 — Modelado de datos · Lectura: XP
**Concepto:** relacional vs. documental, normalización, qué es caro cambiar después.
**Decisión del equipo:** Postgres es el default recomendado, pero Mongo está permitido si lo justifican en un ADR. Prisma soporta los dos, así que el resto del material no cambia. Insistir en la fila que importa: con Mongo, la integridad referencial la garantiza el código y no la base.
**Demo:** schema de Prisma a partir de las historias; migración; seed; Prisma Studio.
**Puente:** hoy se aplican las prácticas de XP, no se comentan — pair programming en el taller, PR revisado, test antes de la implementación.
**Mensaje central:** esta es la decisión que la IA no puede tomar, porque no conoce el dominio.

### Clase 4 — La API · Lectura: Scrum
**Concepto:** REST, verbos, status codes; Route Handlers vs. Server Actions.
**Demo:** generar el CRUD con IA y revisarlo en vivo. Clase ideal para introducir un error a propósito.
**Puente:** se arma el tablero con las historias como issues; se nombran los eventos de Scrum que ya vienen haciendo.

### Clase 5 — Validación, errores y capas · Lectura: Ágil
**Concepto:** dónde valida cada capa y por qué el cliente nunca es confiable.
**Demo:** Zod compartido, errores tipados, regla de negocio en `lib/db/`, primer test.
**Puente:** se escribe la Definition of Done del equipo.

### Clase 6 — Auth · Lectura: monolitos vs. SOA
**Concepto:** sesión, JWT, roles, autorización en el servidor.
**Demo:** Auth.js, proteger rutas y **probar con Postman que el endpoint rechaza al rol equivocado**, aunque la UI no muestre el botón.
**Puente:** resolver la identidad adentro (Auth.js) o delegarla a un servicio es la primera decisión monolito/servicios real del equipo. Va a un ADR.
**Mensaje central:** esconder el botón no es seguridad.

### Clase 7 — Servicios externos · Lectura: SOA
**Concepto:** dependencias externas, fallas, contingencia, secretos, webhooks.
**Demo:** una integración end-to-end y qué pasa cuando el proveedor devuelve error.
**Puente:** el sistema pasa a ser proveedor y consumidor a la vez. Última clase antes del parcial: reservar 10 minutos para repasar la rúbrica.

### Clase 8 — PARCIAL I
10 min por equipo (5 de demo + 5 de preguntas). Con 10 equipos son 100 minutos: cronometrar estricto. Los últimos 20 min, devolución general de errores comunes.
**Recordar:** se evalúa sobre producción. Las preguntas incluyen teoría aplicada (ver el banco en `eje-metodologico.md`).

### Clase 9 — React en Next.js · Lectura: MVC
**Concepto:** Server vs. Client Components; hooks desde el *cuándo*, no desde el *cómo*.
**Demo:** primera pantalla con datos reales.
**Puente:** ubicar modelo, vista y controlador en el propio repo, y mostrar el límite del patrón — MVC no dice nada sobre qué corre de cada lado del cable.
**Rotación de roles** (segunda vuelta). Las observaciones del Parcial I se convierten en issues.

### Clase 10 — UI y design system · Lectura: APIs, API First, REST
**Concepto:** sistema de diseño, responsive, accesibilidad.
**Demo:** generar componentes con IA y **curarlos**: mostrar por qué el primer resultado no se acepta tal cual.
**Puente:** la API existía antes que la pantalla — eso es API First, y por eso mañana podrían hacer una app móvil sin tocar el backend. En la prueba de usabilidad del cierre se auditan los criterios de la clase 2.

### Clase 11 — Formularios · Lectura: programación para móviles
**Concepto:** el formulario como cruce de validación, estado, error y UX.
**Demo:** react-hook-form + Zod con el mismo schema del servidor; los cuatro estados; optimistic UI.
**Puente:** el equipo ya eligió la web como estrategia multiplataforma. Hoy la hace valer: el formulario tiene que funcionar con el pulgar y con mala conexión.

### Clase 12 — Testing y calidad · Lectura: pruebas
**Concepto:** qué testear cuando el tiempo es poco; la pirámide; E2E.
**Demo:** un test que atrapa un bug real. Mostrar el antipatrón: pedirle a la IA "arreglá el test que falla" y que modifique el test en vez del código.
**Puente:** dispositivos reales vs. emuladores vs. simuladores → tests, preview deployment y celular real. Los tres encuentran cosas distintas.

### Clase 13 — IA dentro del producto · Lectura: agentes de software
**Concepto:** los tres niveles (transformación, contexto, agente); herramientas; autonomía; inyección de prompt.
**Demo:** una funcionalidad con IA y qué pasa cuando alucina. Mostrar una herramienta mal filtrada que expone datos de otros usuarios.
**Puente:** la definición de agente del material —autonomía, proactividad, reactividad— describe exactamente lo que van a construir. La pregunta de la clase es cuánta autonomía darle.
**Advertencia para los equipos:** nivel 1 o 2 alcanza. El nivel 3 sobre acciones irreversibles arruina Demo Days.

### Clase 14 — El sistema bajo carga · Lectura: programación paralela
**Concepto:** concurrencia vs. paralelismo; race conditions; caching e invalidación; observabilidad y seguridad.
**Demo:** cazar un waterfall y un N+1 con datos reales cargados. Mostrar el patrón "chequear y después crear" y por qué es el que genera cualquier IA.
**Puente:** el multihilo de la lectura son las race conditions de su código. Es la clase que prepara la pregunta estrella de la defensa final.

### Clase 15 — PARCIAL II
Mismo formato que el Parcial I, con el recorrido completo desde la UI y al menos una parte de la demo desde un celular.

### Clase 16 — Demo Day · Lectura: programación paralela (2)
10 min de presentación + 10 de preguntas por equipo. Recuperación de parciales en paralelo.
**Puente y cierre:** "¿qué harían si mañana tuvieran diez mil usuarios?" Cerrar con la retrospectiva de cada equipo.

---

## Bitácora del docente

Después de cada clase, anotar tres cosas (30 segundos):

1. ¿El bloque de concepto se pasó de 25 minutos? ¿Por qué?
2. ¿Qué pregunta repitieron 3 o más equipos en el taller? → va al material de la próxima cohorte.
3. ¿Qué equipo se está quedando atrás? → intervenir antes del parcial, no después.
