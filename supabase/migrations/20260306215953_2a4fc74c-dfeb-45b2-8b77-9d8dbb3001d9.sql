ALTER TABLE public.services DROP CONSTRAINT services_type_check;
ALTER TABLE public.services ADD CONSTRAINT services_type_check CHECK (type IN ('SaaS', 'AaaS', 'Tek Seferlik'));