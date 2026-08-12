# Rúbricas de evaluación

## Distribución

| Instancia | Cuándo | Peso | Tipo |
|---|---|---|---|
| **Parcial I** — defensa del backend | Clase 8 | 25% | Grupal (ajustada por factor individual) |
| **Parcial II** — defensa de la aplicación | Clase 15 | 25% | Grupal (ajustada por factor individual) |
| Defensa final (Demo Day) | Clase 16 | 25% | Grupal + preguntas individuales |
| Eje metodológico | Todas | 10% | Individual |
| Proceso | Todas | 15% | Individual |

**Nota final individual = (Parcial I × 0.25 + Parcial II × 0.25 + Final × 0.25) × factor individual + Metodológico × 0.10 + Proceso × 0.15**

Los parciales de las clases 8 y 15 **no son un examen escrito**: son la demo y la defensa del proyecto. La teoría se evalúa aplicada, dentro de esas preguntas (ver `eje-metodologico.md`).

---

## Escala de calificación

Se aprueba con el **60% del trabajo bien realizado**, que equivale a **4**. La nota máxima es **10**.

Cada rúbrica se puntúa por **porcentaje de cumplimiento** de cada criterio; el promedio ponderado da el porcentaje total, y ese porcentaje se convierte a nota con esta tabla:

| % de cumplimiento | Nota | |
|---|---|---|
| 97 – 100 | **10** | |
| 91 – 96 | **9** | |
| 84 – 90 | **8** | Aprobado |
| 77 – 83 | **7** | |
| 71 – 76 | **6** | |
| 64 – 70 | **5** | |
| **60 – 63** | **4** | ← piso de aprobación |
| 45 – 59 | 3 | |
| 30 – 44 | 2 | Desaprobado |
| 0 – 29 | 1 | |

La conversión es lineal: **nota = 4 + 0,15 × (porcentaje − 60)**, redondeada. La tabla ya tiene el resultado, no hace falta calcularla.

### Cómo se puntúa un criterio

Cada criterio de las rúbricas de abajo tiene tres niveles. Se traducen así:

| Nivel | % del criterio |
|---|---|
| **Insuficiente** — no está, o está de una forma que no sirve | 0 – 55% |
| **Aceptable** — cumple lo pedido, funciona | 60 – 80% |
| **Destacado** — cumple y además resuelve lo que casi nadie resuelve | 85 – 100% |

Ejemplo del Parcial I: un equipo con modelo de datos destacado (90%), API aceptable (70%), validación aceptable (65%), auth aceptable (70%) y producción destacada (90%) da
`90×0,30 + 70×0,25 + 65×0,15 + 70×0,20 + 90×0,10 = 76,5%` → **nota 6**.

---

## Parcial I — Clase 8 (25%)

El equipo presenta 10 minutos: demo del backend funcionando en producción + preguntas.

| Criterio | Peso | Insuficiente (0–55%) | Aceptable (60–80%) | Destacado (85–100%) |
|---|---|---|---|---|
| **Modelo de datos** | 30% | Entidades sueltas, sin relaciones o mal tipadas | 3+ entidades relacionadas, tipos razonables | Relaciones correctas, índices y restricciones justificadas, elección de base y modelado documentados en un ADR. Si eligieron Mongo, la integridad la garantiza el código |
| **API** | 25% | Endpoints incompletos o incoherentes | CRUD funcionando, verbos y status codes correctos | Contrato claro, errores tipados, colección de Postman completa |
| **Validación y errores** | 15% | Se confía en el input del cliente | Validación con Zod en el servidor | Validación compartida cliente/servidor, errores útiles para el usuario |
| **Auth y roles** | 20% | No hay auth o los roles no cambian nada | Login funcionando con 2 roles diferenciados | Autorización verificada en el servidor en todos los caminos, incluidos los que no se ven en la UI |
| **Servicio externo** | *(dentro de API)* | No existe | Funciona en el camino feliz | Maneja la falla del proveedor y la comunica al usuario |
| **Producción** | 10% | No está desplegado | URL pública funcionando | Preview deployments por PR, variables de entorno bien manejadas |

**Condición de aprobación del parcial:** la URL pública responde y el login funciona. Sin eso, el parcial no se evalúa y pasa a la recuperación de la clase 16.

---

## Parcial II — Clase 15 (25%)

El equipo presenta 10 minutos: recorrido completo del flujo principal desde la UI.

| Criterio | Peso | Insuficiente (0–55%) | Aceptable (60–80%) | Destacado (85–100%) |
|---|---|---|---|---|
| **Flujo de negocio completo** | 30% | Solo ABMs sueltos | El flujo principal se puede completar | El flujo se completa y contempla los casos de error del negocio |
| **UI y experiencia** | 25% | Sin estilo, no se entiende qué hacer | Navegable, responsive, consistente | Estados de carga y error resueltos, accesible con teclado, consistente en todo el sistema |
| **Manejo de estado y datos** | 20% | Datos desactualizados o recargas innecesarias | Datos que se refrescan correctamente | Caching e invalidación conscientes, sin waterfalls, sin estado duplicado |
| **Testing** | 15% | Sin tests o triviales | E2E del flujo principal y test de autorización | Casos borde propios cubiertos, tests corriendo en CI |
| **Calidad del código** | 10% | Copy-paste, componentes gigantes | Organizado según el `AGENTS.md` | Reutilización real, capas separadas, tests en lo que importa |

---

## Defensa final — Clase 16 (25%)

Presentación de 10 minutos + 10 de preguntas. El sistema debe estar en producción y con datos reales (no de prueba).

| Criterio | Peso | Qué se evalúa |
|---|---|---|
| **El producto funciona** | 25% | Se recorre completo, sin caerse, con datos reales |
| **Defensa técnica individual** | 35% | Cada integrante responde sobre código que no escribió necesariamente él. Esta es la instancia donde se verifica "Ship it, but own it" |
| **Decisiones y trade-offs** | 20% | Por qué eligieron lo que eligieron, qué descartaron, qué harían distinto |
| **Producción y operación** | 10% | Envs, CI, logs, qué pasa cuando algo falla |
| **Retrospectiva** | 10% | Qué estimaron vs. qué pasó realmente, qué aprendieron del proceso |

### Banco de preguntas de la defensa individual

Se elige código del propio repo del equipo y se pregunta a un integrante al azar:

- "¿Por qué esto corre en el servidor y no en el cliente?"
- "¿Qué pasa si dos usuarios hacen esta acción al mismo tiempo?"
- "Borren esta línea mentalmente: ¿qué se rompe?"
- "Un usuario del rol A llama a este endpoint directamente con Postman, sin pasar por la UI. ¿Qué pasa?"
- "Esta validación está acá, ¿dónde más debería estar y por qué?"
- "¿Por qué esta relación es 1‑N y no N‑N?"
- "Si mañana tienen 100.000 registros, ¿qué se rompe primero?"

**Regla de corte:** si ningún integrante del equipo puede explicar una funcionalidad, esa funcionalidad no se computa aunque funcione.

---

## Eje metodológico (10%) — individual

Las lecturas y sus cuestionarios se entregan fuera de clase, con deadline al inicio de la clase siguiente.

- Cada entrega vale lo mismo. La nota del eje es el promedio de las entregas.
- Se descartan las **2 peores** notas del cuatrimestre (cubre enfermedad, olvido, semana complicada).
- Entregar menos del **70% de los cuestionarios** deja el eje desaprobado, y con él la cursada.
- La nota del eje sale del promedio de las entregas, en la misma escala: 60% de respuestas correctas = 4.
- Las respuestas copiadas literalmente entre compañeros se anulan para ambos.

---

## Proceso (15%) — individual

Se mide sobre el repositorio, no sobre percepción.

| Señal | Qué se mira |
|---|---|
| Commits | Distribución a lo largo del cuatrimestre, no todo la noche antes del parcial |
| Pull Requests | PRs propios, con la línea de curaduría completada |
| Reviews | Comentarios hechos a los PRs de sus compañeros de equipo |
| Documentación | ADRs, `spec.md`, `AGENTS.md` mantenidos al día |
| Ritual | Participación en los standups y en los code reviews |

---

## Factor individual

Las tres instancias grandes se le ponen **al proyecto**, no a cada persona. El factor ajusta esa nota individuo por individuo, para que no se lleven lo mismo quienes no hicieron lo mismo.

```
nota de cada integrante = nota del proyecto × su factor
```

| Factor | Cuándo se aplica |
|---|---|
| **1.0** | Por defecto. Todos arrancan acá |
| **0.7** | Solo con evidencia: no aparece en el historial del repositorio, o no pudo explicar nada en la defensa |

Ejemplo: el proyecto saca **8** en el Parcial I. Tres integrantes se llevan **8**; el que no tiene un solo commit y no contestó en la defensa se lleva **5,6**.

Dos criterios y nada más, a propósito: son los dos que se pueden demostrar con datos (el historial de git tiene fecha y autor; la defensa la escuchó todo el curso). Ante una duda, el docente pregunta más en la defensa — la duda se resuelve con evidencia, no con impresión.

Se comunica en la clase 1 y se aplica sin excepciones.

---

## Recuperación

- Los parciales I y II se recuperan en la **clase 16**, junto al Demo Day.
- Un parcial recuperado tiene nota máxima **7**.
- El eje metodológico no se recupera: para eso están las 2 entregas descartadas.

---

## Cómo se aprueba la cursada

- **Nota final ≥ 4** (equivalente al 60% del trabajo bien realizado).
- Los **dos parciales aprobados**, propios o recuperados en la clase 16.
- El **70% de los cuestionarios** del eje metodológico entregados.
- El sistema **en producción** al momento del Demo Day.
