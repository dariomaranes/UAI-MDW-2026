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
| `clase-01/`, `clase-02/`… | Una página por clase: concepto, decisiones, consigna de taller y checklist. **Se publican el día que se dictan** |
| [`docs/politica-ia.md`](./docs/politica-ia.md) | Política de uso de IA y qué se exige en cada Pull Request |
| [`docs/equipos-y-roles.md`](./docs/equipos-y-roles.md) | Conformación de equipos, roles rotativos y núcleo obligatorio del proyecto |
| [`docs/rubricas.md`](./docs/rubricas.md) | Rúbricas de los parciales, la defensa final y el factor individual |
| [`docs/calendario.md`](./docs/calendario.md) | Las 16 fechas del cuatrimestre, entregas y parciales |
| `docs/metodologias/` | Los PDFs del eje teórico, uno por clase |
| `template/` | Repo starter que clonan los equipos (Next.js + TypeScript + Prisma + Zod + Tailwind) |

## Stack del proyecto

Next.js (App Router) · TypeScript · Postgres · Prisma · Zod · Auth.js · Tailwind + shadcn/ui · Deploy en Vercel.

## Evaluación

| Instancia | Clase | Peso |
|---|---|---|
| Parcial I — defensa del backend en producción | 8 | 25% |
| Parcial II — defensa de la aplicación | 15 | 25% |
| Defensa final (Demo Day) | 16 | 25% |
| Eje metodológico (individual) | todas | 10% |
| Proceso (individual) | todas | 15% |

Los parciales **no son un examen escrito**: son la demo y la defensa del proyecto en producción. La teoría se evalúa aplicada, en las preguntas de esas defensas.

La nota de las tres instancias grupales se ajusta por un factor individual: ×1.0 por defecto, ×0.7 solo con evidencia (sin contribución en el repositorio o sin poder explicar el propio código en la defensa).

**Escala:** se aprueba con el 60% del trabajo bien realizado, que equivale a **4**. La nota máxima es **10**. La tabla de conversión completa está en [`docs/rubricas.md`](./docs/rubricas.md).

## Ver el material

Es HTML estático, sin dependencias. Se puede abrir `index.html` directamente en el navegador, o servirlo:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```
