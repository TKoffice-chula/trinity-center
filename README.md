# Trinity Center

A static website for **Trinity Center** — a Center of Excellence for knowledge development, training, and academic collaboration to sustainably elevate kidney disease patient care.

Inspired by the design of [theisn.org](https://www.theisn.org/).

## Structure

```
.
├── index.html           # Landing page
├── about.html           # About / mission / history
├── education.html       # Training & education programs
├── research.html        # Research domains & initiatives
├── news.html            # News & events
├── assets/
│   ├── css/style.css    # Global stylesheet
│   └── js/main.js       # Light interactions
└── .nojekyll            # Tells GitHub Pages to skip Jekyll
```

## Local preview

Just open `index.html` in a browser, or run a tiny local server:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a new repo on GitHub (e.g. `trinity-center`).
2. From this folder, push the code:

   ```bash
   git init
   git add .
   git commit -m "Initial Trinity Center site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/trinity-center.git
   git push -u origin main
   ```

3. On GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
5. After a minute or two, your site will be live at:
   `https://<your-username>.github.io/trinity-center/`

## License

Content is placeholder / illustrative. Replace with your organization's official copy before publishing.
