-- K&D Daily Huddle — run this in your Supabase SQL editor
-- Project: rlhfofdsdpsiavikuxhd

CREATE TABLE IF NOT EXISTS huddle_checkins (
  id               uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  foreman_name     text NOT NULL,
  branch           text NOT NULL,
  submitted_at     timestamptz NOT NULL DEFAULT now(),
  input_lang       text DEFAULT 'en',

  today_work_orig  text,
  today_work_en    text,

  materials_orig   text,
  materials_en     text,
  materials_urgency text,

  labor_orig       text,
  labor_en         text,
  labor_need       text,

  equipment_orig   text,
  equipment_en     text,
  equipment_status text,

  issues_orig      text,
  issues_en        text,
  issue_urgency    text,

  plan_finish_orig text,
  plan_finish_en   text,

  created_at       timestamptz DEFAULT now()
);

-- Row Level Security
ALTER TABLE huddle_checkins ENABLE ROW LEVEL SECURITY;

-- Foremen can insert (anon key)
CREATE POLICY "anon_insert" ON huddle_checkins
  FOR INSERT TO anon WITH CHECK (true);

-- Hub can read today's entries
CREATE POLICY "anon_select_today" ON huddle_checkins
  FOR SELECT TO anon
  USING (submitted_at >= current_date::timestamptz);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_huddle_submitted ON huddle_checkins (submitted_at DESC);
CREATE INDEX IF NOT EXISTS idx_huddle_branch    ON huddle_checkins (branch);
