# UAI-MDW-2026

Material de cátedra de **Metodologías de Desarrollo Web** — Ingeniería en Sistemas Informáticos, Universidad Abierta Interamericana. Comisión Turno Noche, año 2026.

Proyecto con fines académicos.

## De qué se trata el cursado

Durante el cuatrimestre, equipos de 4 alumnos construyen **un sistema web real, en producción desde la primera clase**. Las clases son mayormente taller: un bloque corto de concepto y el resto construyendo.

La materia asume que los alumnos programan con IA. Por eso no se evalúa escribir sintaxis, sino estructurar una aplicación, decidir tecnología, revisar lo que la IA escribe y llevar el sistema a producción. La regla que ordena todo es **“Ship it, but own it”**: la IA está permitida y fomentada, pero en cualquier defensa se le puede pedir a cualquier integrante que explique cualquier línea del proyecto.

## Contenido del repositorio

| Ruta | Qué es |
|---|---|
| [`index.html`](./index.html) | Índice de las 16 clases. Es el punto de entrada para los alumnos |
| `clase-01/` … `clase-16/` | Una página por clase: concepto, decisiones, consigna de taller y checklist |
| [`docs/politica-ia.md`](./docs/politica-ia.md) | Política de uso de IA y qué se exige en cada Pull Request |
| [`docs/equipos-y-roles.md`](./docs/equipos-y-roles.md) | Conformación de equipos y núcleo obligatorio del proyecto |
| [`docs/rubricas.md`](./docs/rubricas.md) | Rúbricas de los parciales, el Demo Day y la nota individual |
| [`docs/calendario.md`](./docs/calendario.md) | Las 16 fechas, entregas, parciales y Demo Day |
| `docs/metodologias/` | Los 14 PDFs del eje teórico, uno por clase |
| [Repositorio template](https://github.com/dariomaranes/UAI-MDW-2026-template) | Repo aparte, marcado como *template* en GitHub: el punto de partida de cada equipo |
| [Proyecto de referencia](https://github.com/dariomaranes/UAI-MDW-2026-referencia) | La libreta sanitaria de mascotas, construida clase a clase en las demos |

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
| Nota de concepto (individual) | todas |


Los parciales **no son un examen escrito**: son la demo y la defensa del proyecto en producción. La teoría se evalúa aplicada, en las preguntas de esas defensas.

**El trabajo es grupal, la nota es individual.** Se parte de la nota del proyecto y se ajusta por integrante: quien no tenga contribución verificable en el repositorio o no pueda explicar lo entregado en la defensa desaprueba esa instancia.

**Escala:** se aprueba con el 60% del trabajo bien realizado, que equivale a **4**. La nota máxima es **10**. La tabla de conversión completa está en [`docs/rubricas.md`](./docs/rubricas.md).

## Ver el material

Es HTML estático, sin dependencias. Se puede abrir `index.html` directamente en el navegador, o servirlo:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```
