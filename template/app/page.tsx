/**
 * Home del proyecto.
 *
 * Esto es un Server Component: corre en el servidor, puede leer de la base
 * directamente y nunca llega al navegador. Por eso puede llamar a `listarNotas`
 * sin pasar por un endpoint HTTP.
 *
 * En la clase 1 se reemplaza por la portada del proyecto del equipo.
 */
import { listarNotas } from "@/lib/db/notas";

// Esta página lee datos que cambian, así que se renderiza en cada request.
// Sin esta línea, Next.js intentaría generarla una sola vez durante el build
// —cuando todavía no hay base de datos disponible— y el deploy fallaría.
// En la clase 12 vemos cuándo conviene lo contrario: cachear y revalidar.
export const dynamic = "force-dynamic";

export default async function Home() {
  const notas = await listarNotas();

  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-2xl font-bold">Proyecto MDW 2026</h1>
      <p className="mt-2 text-sm opacity-70">
        Equipo: completar en el README y acá.
      </p>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Notas de ejemplo</h2>

        {notas.length === 0 ? (
          <p className="mt-4 text-sm opacity-70">
            No hay datos todavía. Corré <code>pnpm db:seed</code>.
          </p>
        ) : (
          <ul className="mt-4 space-y-3">
            {notas.map((nota) => (
              <li key={nota.id} className="rounded-lg border p-4">
                <h3 className="font-medium">{nota.titulo}</h3>
                <p className="mt-1 text-sm opacity-80">{nota.contenido}</p>
                <p className="mt-2 text-xs opacity-60">
                  por {nota.autor.nombre}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
