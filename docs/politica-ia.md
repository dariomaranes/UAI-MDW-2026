# Política de uso de IA — "Ship it, but own it"

## La regla

**Pueden usar toda la IA que prefieran. En cualquier defensa se le puede pedir a cualquier integrante que explique cualquier línea del proyecto del equipo. Lo que ningún integrante del equipo puede explicar, no suma.**

No hay penalización por usar IA. No hay que declarar "esto lo hizo la IA". La materia asume que la usan, igual que asume que usan un editor de texto. Lo que se evalúa es el criterio con el que la dirigen y la capacidad de sostener lo que entregaron.

## Por qué esta regla y no otra

Prohibir la IA sería enseñar para un mundo que ya no existe, y además es inverificable. Permitirla sin condiciones produce equipos que entregan código que nadie entiende y que se cae en la primera modificación.

La condición de "poder explicarlo" es la única que resuelve las dos cosas: no limita la herramienta, pero obliga a leer, entender y curar lo que genera. Es exactamente lo que se espera en un equipo profesional cuando alguien abre un Pull Request.

## Lo que se exige en cada Pull Request

Una sola línea, ya está en la plantilla del repositorio:

> **¿Qué revisó el equipo de lo que generó la IA?**

Es una línea, no un informe. Lo que importa es que alguien haya *mirado* el código antes de mergearlo.

| Respuesta pobre | Respuesta válida |
|---|---|
| "Nada" / "lo dejé como salió" | "Generó la validación de superposición en el cliente; la movimos al servidor porque el cliente no es confiable" |
| "Anda" | "Sacamos un índice que no hacía falta y agregamos el caso de fecha pasada" |

Si no se usó IA en ese PR, se pone "sin IA" y listo. No es un trámite de control: es la costumbre de leer el diff antes de aprobarlo, que es lo que se hace en cualquier equipo profesional.

**Y tiene un uso concreto al final.** En la mesa de examen final se pide: *"abrime un Pull Request donde hayan corregido algo que generó la IA y contame qué cambiaron"*. Esa respuesta no se improvisa ni se recuerda: se lee del propio repositorio. El equipo que completó la línea durante todo el cuatrimestre llega con decenas de ejemplos para elegir; el que puso "nada" en todos los PRs se queda sin nada que mostrar, aunque haya trabajado.

## Qué se espera que la IA haga (y qué no)

**Deleguen sin culpa:** boilerplate, configuración, componentes de UI a partir de una descripción, tests de casos obvios, migraciones a partir de un schema, refactors mecánicos, documentación, mensajes de commit.

**No delegues la decisión, solo la ejecución:**

- **El modelo de datos.** Es la decisión más cara de revertir y la que más depende de su dominio. La IA no sabe que en su veterinaria un turno puede tener varias mascotas.
- **La seguridad y la autorización.** Es el lugar donde el código "plausible" es más peligroso: parece correcto, compila, y deja pasar a cualquiera. Se revisa línea por línea, siempre.
- **Qué construir.** La IA responde bien a specs claras y pésimo a "hacé el sistema". La spec es propia.
- **El criterio de aceptación.** La IA puede escribir el test; el caso borde lo piensan ustedes.

## Cómo se detecta el código que nadie entendió

No se detecta con un detector: se detecta preguntando. En las defensas de los parciales (clases 8 y 15) y en la mesa de examen final, el docente elige código del propio repositorio del equipo y pregunta a un integrante al azar:

- "¿Por qué esto está en el servidor y no en el cliente?"
- "¿Qué pasa si dos usuarios hacen esto al mismo tiempo?"
- "Esta validación, ¿dónde más habría que ponerla?"
- "Borrame esta línea: ¿qué se rompe?"

Si la respuesta no existe, esa funcionalidad no se computa para el parcial, aunque funcione.

## Herramienta: la que prefieran

La materia es agnóstica. Cursor, Copilot, Claude Code, ChatGPT, Gemini o nada. Lo único que se exige es que el repositorio tenga un **`AGENTS.md`** en la raíz con las reglas del proyecto, porque:

- es el formato que leen la mayoría de los asistentes actuales;
- obliga al equipo a explicitar sus convenciones, que es un ejercicio valioso aunque no hubiera IA;
- hace que el código generado por los cuatro integrantes se parezca entre sí.

## Un buen `AGENTS.md`

Reglas verificables, no intenciones. Comparalas:

| Intención (inútil) | Regla (útil) |
|---|---|
| "Escribir código limpio" | "Componentes en PascalCase, un componente por archivo, en `components/`" |
| "Validar bien" | "Toda entrada externa se valida con un schema de Zod definido en `lib/schemas/`. No usar `any`" |
| "Cuidar la seguridad" | "Las reglas de autorización van siempre en el servidor. Ningún Client Component decide permisos" |
| "Usar la base de datos" | "Todo acceso a datos pasa por `lib/db/`. No importar el cliente de Prisma en componentes" |

Prueba de fuego: pídanle al asistente un cambio trivial. Si no respetó las reglas, el problema es el archivo, no la IA.
