create table public.reviews (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(btrim(name)) between 1 and 40),
  rating smallint not null check (rating between 1 and 5),
  comment text not null check (char_length(btrim(comment)) between 1 and 500),
  approved boolean not null default false
);

alter table public.reviews enable row level security;

create policy "ver reseñas aprobadas" on public.reviews
  for select to anon using (approved = true);

create policy "enviar reseña sin aprobar" on public.reviews
  for insert to anon with check (approved = false);
