
ALTER TABLE public.services
  ADD COLUMN hero_subtitle text,
  ADD COLUMN pain_points jsonb,
  ADD COLUMN roi_data jsonb,
  ADD COLUMN how_it_works_steps jsonb,
  ADD COLUMN setup_description text;
