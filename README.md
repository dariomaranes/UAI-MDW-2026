# UAI-MDW-2026

Material de cátedra de **Metodologías de Desarrollo Web** — Ingeniería en Sistemas Informáticos, Universidad Abierta Interamericana. Comisión Turno Noche, año 2026.

Proyecto con fines académicos.

## De qué se trata el cursado

Durante el cuatrimestre, equipos de 4 alumnos construyen **un sistema web real, en producción desde la primera clase**. Las clases son 30% teoría y 70% taller.

La materia asume que los alumnos programan con IA. Por eso no se evalúa escribir sintaxis, sino estructurar una aplicación, decidir tecnología, revisar lo que la IA escribe y llevar el sistema a producción. La regla que ordena todo es **“Ship it, but own it”**: la IA está permitida y fomentada, pero en cualquier defensa se le puede pedir a cualquier integrante que explique cualquier línea del proyecto.

## Contenido del repositorio

| Ruta | Qué es |
|---|---|
| [`index.html`](./index.html) | Índice de las 16 clases. Es el punto de entrada para los alumnos |
| `clase-01/` … `clase-16/` | Una página por clase: concepto, decisiones, consigna de taller y checklist |
| [`docs/guia-docente.md`](./docs/guia-docente.md) | Plan minutado clase por clase y guion de las demos |
| [`docs/politica-ia.md`](./docs/politica-ia.md) | Política de uso de IA y qué se exige en cada Pull Request |
| [`docs/equipos-y-roles.md`](./docs/equipos-y-roles.md) | Conformación de equipos, roles rotativos y núcleo obligatorio del proyecto |
| [`docs/rubricas.md`](./docs/rubricas.md) | Rúbricas de los parciales, el Demo Day y la nota individual |
| [`docs/eje-metodologico.md`](./docs/eje-metodologico.md) | Lecturas teóricas y su puente con el taller de cada clase |
| `docs/metodologias/` | Los 14 PDFs del eje teórico, uno por clase |
| `template/` | Repo starter que clonan los equipos (Next.js + TypeScript + Prisma + Zod + Tailwind) |

## Stack sugerido

Next.js (App Router) · TypeScript · Postgres o MongoDB · Prisma · Zod · Auth.js · Tailwind + shadcn/ui · Deploy en Vercel.

Es el stack de las demos, del repositorio template y de las consignas de los talleres. **No es obligatorio:** cada equipo puede usar la tecnología con la que se sienta cómodo, siempre que cumpla el núcleo obligatorio del proyecto y justifique la decisión en un ADR.

## Evaluación

| Instancia | Clase |
|---|---|
| Parcial I — defensa del backend en producción | 8 |
| Parcial II — defensa de la aplicación | 15 |
| Demo Day — cierre de la cursada | 16 |
| Eje metodológico (individual) | todas |
| Proceso y concepto (individual) | todas |


Los parciales **no son un examen escrito**: son la demo y la defensa del proyecto en producción. La teoría se evalúa aplicada, en las preguntas de esas defensas.

**El trabajo es grupal, la nota es individual.** Se parte de la nota del proyecto y se ajusta por integrante: quien no tenga contribución verificable en el repositorio o no pueda explicar lo entregado en la defensa desaprueba esa instancia.

**Escala:** se aprueba con el 60% del trabajo bien realizado, que equivale a **4**. La nota máxima es **10**. La tabla de conversión completa está en [`docs/rubricas.md`](./docs/rubricas.md).

## Ver el material

Es HTML estático, sin dependencias. Se puede abrir `index.html` directamente en el navegador, o servirlo:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```
