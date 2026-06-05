K&D DAILY HUDDLE — DEPLOY GUIDE
================================

STEP 1: Run this SQL in Supabase
---------------------------------
Go to: https://supabase.com/dashboard/project/rlhfofdsdpsiavikuxhd/sql/new
Paste and run: setup.sql

STEP 2: Add Anthropic API Key
------------------------------
Open index.html, find this line near the top of the <script>:
  const ANTHROPIC_KEY = '';
Replace with your key:
  const ANTHROPIC_KEY = 'sk-ant-...';

(Without the key, the app still works — Spanish text just won't be 
translated and will appear as-is in the hub.)

STEP 3: Change the Hub PIN
---------------------------
In index.html, find:
  const HUB_PIN = '1234';
Change to your preferred PIN.

STEP 4: Deploy to Netlify
--------------------------
1. Go to netlify.com → "Add new site" → "Deploy manually"
2. Drag the entire huddle-pwa folder onto the page
3. Done — share the URL with your foremen

STEP 5: Install on phones (optional but recommended)
------------------------------------------------------
iPhone: Open URL in Safari → Share → "Add to Home Screen"
Android: Open URL in Chrome → Menu → "Add to Home Screen"
The app will install like a native app with the K&D icon.

PIN: 1234 (change this before going live)
Supabase Project: rlhfofdsdpsiavikuxhd
