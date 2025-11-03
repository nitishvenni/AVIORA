-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'guide', 'user');

-- Create user_roles table (security best practice - separate from profiles)
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- RLS policies for user_roles
CREATE POLICY "Users can view their own roles"
  ON public.user_roles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all roles"
  ON public.user_roles FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage roles"
  ON public.user_roles FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- Create locations table
CREATE TABLE public.locations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  state TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.locations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Locations are viewable by everyone"
  ON public.locations FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage locations"
  ON public.locations FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- Create guides table
CREATE TABLE public.guides (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  bio TEXT,
  specialties TEXT[],
  verified BOOLEAN DEFAULT false,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.guides ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Guides are viewable by everyone"
  ON public.guides FOR SELECT
  USING (verified = true OR user_id = auth.uid());

CREATE POLICY "Guides can update their own profile"
  ON public.guides FOR UPDATE
  USING (user_id = auth.uid());

CREATE POLICY "Admins can manage all guides"
  ON public.guides FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- Create adventures table
CREATE TABLE public.adventures (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  location_id UUID REFERENCES public.locations(id) ON DELETE SET NULL,
  guide_id UUID REFERENCES public.guides(id) ON DELETE SET NULL,
  price DECIMAL(10,2),
  duration_hours INTEGER,
  difficulty TEXT CHECK (difficulty IN ('easy', 'moderate', 'challenging', 'extreme')),
  max_participants INTEGER,
  image_url TEXT,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.adventures ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Active adventures are viewable by everyone"
  ON public.adventures FOR SELECT
  USING (active = true OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage adventures"
  ON public.adventures FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- Create bookings/trips table
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  adventure_id UUID REFERENCES public.adventures(id) ON DELETE CASCADE NOT NULL,
  booking_date DATE NOT NULL,
  booking_time TIME NOT NULL,
  participants INTEGER NOT NULL DEFAULT 1,
  status TEXT DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'ongoing', 'completed', 'cancelled')),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own bookings"
  ON public.bookings FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own bookings"
  ON public.bookings FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own bookings"
  ON public.bookings FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all bookings"
  ON public.bookings FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Guides can view bookings for their adventures"
  ON public.bookings FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.adventures a
      JOIN public.guides g ON a.guide_id = g.id
      WHERE a.id = bookings.adventure_id
      AND g.user_id = auth.uid()
    )
  );