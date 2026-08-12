# Equipos, roles y el proyecto

## Conformación

- **Equipos de 4** (con 40 alumnos: 10 equipos). Si el número no cierra, se admite un equipo de 3, nunca de 5.
- Se arman en la **clase 1** y no se cambian durante el cuatrimestre.
- Se permite que se armen por afinidad, con una condición: **ningún equipo puede tener a los cuatro integrantes con el mismo nivel de experiencia declarado**. Se pregunta a mano alzada al inicio (quién programó fuera de la facultad, quién nunca desplegó algo) y se balancea.
- **Plan B si a los 20 minutos no están cerrados:** el docente asigna por lista. Se avisa desde el minuto 1 para que no se dilate.

## Roles

Cada integrante toma un rol. **Los roles rotan cada 4 clases** (clases 1, 5, 9 y 13): al final del cuatrimestre todos pasaron por los cuatro. La rotación se registra en el README del proyecto.

| Rol | De qué se hace cargo | Qué se le pregunta en la defensa |
|---|---|---|
| **Tech Lead / Arquitectura** | Decisiones técnicas, ADRs, que el equipo no se disperse, que el `AGENTS.md` esté al día | "¿Por qué eligieron esto y qué descartaron?" |
| **Datos & API** | Schema, migraciones, endpoints, contratos, validaciones | "¿Por qué esta relación es 1‑N y no N‑N?" |
| **Frontend & UX** | Pantallas, componentes, flujo del usuario, accesibilidad | "Muéstrenme qué ve un usuario sin permisos" |
| **DevOps & QA** | Deploy, variables de entorno, CI, que producción no se caiga | "¿Qué pasa si se cae la base?" |

El rol **no** significa "el único que toca eso". Significa que esa persona responde por eso. Todos escriben código en todas las áreas.

### La excepción: el dueño de la infraestructura

Además de los cuatro roles rotativos, el equipo designa un **dueño de la infraestructura** que **no rota** en todo el cuatrimestre. Es quien conecta el repositorio a Vercel con su cuenta.

El motivo es práctico: el plan gratuito de Vercel no permite agregar miembros a un proyecto, así que la cuenta no se puede pasar de mano cada cuatro clases. Los deploys se disparan igual desde GitHub cuando cualquiera pushea; lo que queda reservado a esa persona es el panel — variables de entorno, logs y redeploys manuales.

Se anota en el README junto con los roles. Si esa persona abandona la materia, el equipo avisa al docente: hay que rehacer la conexión del repositorio con otra cuenta.

## Núcleo obligatorio del proyecto

El dominio lo elige cada equipo, pero todos los proyectos deben cumplir estos cinco requisitos. Son los que hacen que todos los proyectos sean comparables y que las consignas semanales apliquen a todos por igual.

1. **Autenticación con al menos 2 roles** que puedan hacer cosas distintas (no basta con "usuario logueado" / "usuario no logueado").
2. **Al menos 3 entidades relacionadas**, con CRUD completo sobre al menos una. La base puede ser relacional (Postgres) o documental (MongoDB); la elección se justifica en un ADR.
3. **Un flujo de negocio real de punta a punta**: reservar, aprobar, publicar, facturar, asignar. No alcanza con un conjunto de ABMs.
4. **Una integración externa**: storage de archivos, envío de emails, pagos, mapas, o IA dentro del producto.
5. **En producción desde la clase 1**, con una URL pública que no cambia durante todo el cuatrimestre.

## Cómo elegir el dominio

**Sirve:** algo chico, real y verificable. Turnos de una veterinaria. Pedidos de un emprendimiento de comida. Inventario y préstamos de un club. Mesa de ayuda de una cátedra. Gestión de socios de una biblioteca. Reserva de canchas.

**No sirve:** cualquier cosa cuyo valor dependa de tener miles de usuarios (redes sociales, marketplaces), clones genéricos ("un Uber de X"), o ideas tan grandes que en 16 clases solo se llegue a la pantalla de login.

**Criterio rápido:** si pueden nombrar a una persona real que lo usaría el mes que viene, la idea sirve.

## El pitch (clase 1, 2 minutos)

Tres preguntas, en voz alta, antes de escribir una línea:

1. ¿Qué problema resuelve y para quién?
2. ¿Quiénes son los dos roles y qué puede hacer cada uno que el otro no?
3. ¿Cuál es el flujo principal, en una sola oración?

Si el equipo no puede responder la 3 en una oración, el alcance está mal definido y hay que achicarlo ahí mismo.

## Ritual semanal del equipo

| Cuándo | Qué |
|---|---|
| Antes de la clase | Cada uno leyó el material del eje metodológico y entregó su cuestionario |
| Minuto 0 de la clase | El equipo que le toca muestra su app en producción (3 min) |
| Durante el taller | Se trabaja en ramas; nadie pushea a `main` |
| Últimos 15 min | Code review: un integrante revisa el PR de otro |
| Antes de irse | El entregable de la clase está mergeado y desplegado |

## Free-riders

La nota del proyecto se ajusta por integrante, y **quien no tenga contribución verificable en el repositorio o no pueda explicar lo entregado desaprueba esa instancia**, aunque el equipo haya sacado 10.

Las dos señales que lo determinan son demostrables: el historial del repositorio (commits, PRs y reviews, con fecha y autor) y las respuestas en las defensas. Se avisa en la clase 1 y se aplica sin excepciones. El detalle está en `rubricas.md`.

Si un equipo tiene un problema de convivencia o de reparto de trabajo, se plantea al docente **antes** del parcial, no después de la nota.
