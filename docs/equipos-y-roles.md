# Equipos, roles y el proyecto

## Conformación

- **Equipos de 4 integrantes.**
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
2. **Al menos 5 entidades propias del dominio** (sin contar la de usuarios), con **una relación 1‑N y una N‑N** entre ellas, y CRUD completo sobre al menos una.

   El número solo es el piso; lo que se evalúa es que el modelo represente el dominio. Un sistema con diez tablas colgando todas del usuario está peor modelado que uno con cinco bien relacionadas. La N‑N es obligatoria porque es donde aparece el trabajo de modelado de verdad: casi siempre necesita una tabla intermedia con datos propios (cantidad, precio, fecha, estado).

   La base puede ser relacional (Postgres) o documental (MongoDB); la elección se justifica en un ADR.
3. **Un flujo de negocio real de punta a punta**: reservar, aprobar, publicar, facturar, asignar. No alcanza con un conjunto de ABMs.
4. **Una integración externa**: storage de archivos, envío de emails, pagos, mapas, o IA dentro del producto.
5. **En producción desde la clase 1**, con una URL pública que no cambia durante todo el cuatrimestre.

### El stack

El stack de la materia (Next.js + TypeScript + Postgres/MongoDB + Prisma + Zod + Tailwind, deploy en Vercel) es **sugerido**, no obligatorio: es el de las demos, el del repositorio template y el de las consignas de los talleres.

Un equipo puede usar otra tecnología si se siente más cómodo, con dos condiciones: que cumpla el núcleo obligatorio y que la decisión esté en un ADR. Lo que se resigna es el andamiaje —las demos, el template y las consignas van a estar en el stack sugerido, y traducirlas es trabajo del equipo—. Lo que no cambia son los criterios de evaluación: valen igual, leídos en la tecnología equivalente.

## Cómo elegir el dominio

**Sirve:** algo chico, real y verificable. Turnos de una veterinaria. Pedidos de un emprendimiento de comida. Inventario y préstamos de un club. Mesa de ayuda de una cátedra. Gestión de socios de una biblioteca. Reserva de canchas.

**No sirve:** cualquier cosa cuyo valor dependa de tener miles de usuarios (redes sociales, marketplaces), clones genéricos ("un Uber de X"), o ideas tan grandes que en 16 clases solo se llegue a la pantalla de login.

**Criterio rápido:** si pueden nombrar a una persona real que lo usaría el mes que viene, la idea sirve.

### Lo ideal: conseguir un Product Owner de verdad

Un amigo, un familiar, alguien con un emprendimiento, la secretaría de un club. Si el equipo consigue a **una persona real que vaya a usar el sistema**, esa persona pasa a ser su **Product Owner**, y eso cambia todo el cursado:

- Los requerimientos de `docs/spec.md` (clase 2) salen de una conversación real, no de lo que el equipo imagina. Es un relevamiento de verdad.
- Las historias de usuario se validan preguntando, que es la única forma de saber si están bien escritas.
- Cuando en la clase 4 lean sobre Scrum y aparezca el rol de Product Owner, ya van a saber de qué se trata porque lo tienen.
- Aparecen los requisitos que nadie inventa sentado en el aula: "esto tiene que poder cancelarse hasta 24 horas antes", "los precios de enero no se tocan".
- Y en el Demo Day, poder decir *"esto lo está usando alguien"* pesa más que cualquier funcionalidad.

No es obligatorio —un equipo puede definir su dominio y avanzar igual— pero es la diferencia entre un trabajo práctico y un producto. Vale la pena hacer un par de llamadas antes de la clase 2.

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
| Durante el taller | Se trabaja en ramas; nadie pushea a `main`. El docente pasa por la computadora del equipo: qué avanzaron y en qué están trabados |
| Últimos 15 min | Code review: un integrante revisa el PR de otro |
| Antes de irse | El entregable de la clase está mergeado y desplegado |

## Free-riders

La nota del proyecto se ajusta por integrante, y **quien no tenga contribución verificable en el repositorio o no pueda explicar lo entregado desaprueba esa instancia**, aunque el equipo haya sacado 10.

Las dos señales que lo determinan son demostrables: el historial del repositorio (commits, PRs y reviews, con fecha y autor) y las respuestas en las defensas. Se avisa en la clase 1 y se aplica sin excepciones. El detalle está en `rubricas.md`.

Si un equipo tiene un problema de convivencia o de reparto de trabajo, se plantea al docente **antes** del parcial, no después de la nota.
