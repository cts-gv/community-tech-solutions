/*
  # Create contact_submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key, auto-generated)
      - `name` (text, not null) — Submitter's full name
      - `email` (text, not null) — Submitter's email address
      - `phone` (text, default empty) — Submitter's phone number (optional)
      - `service` (text, default empty) — Service the submitter is interested in
      - `message` (text, not null) — The submitter's message
      - `created_at` (timestamptz, default now()) — Timestamp of submission

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add INSERT policy allowing anyone (including anonymous) to submit contact forms
    - No SELECT/UPDATE/DELETE policies — only service role can read submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  service text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
