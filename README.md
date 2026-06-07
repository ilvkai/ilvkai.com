# Kai Lv Academic Homepage

This is the first static version of the academic homepage for `www.ilvkai.com`.

## Structure

- `index.html`: English homepage
- `zh/index.html`: Chinese theme entrance
- `zh/admissions/index.html`: Chinese admissions page
- `zh/publications/index.html`: Chinese publications page
- `assets/css/styles.css`: shared styling
- `assets/js/site.js`: publication filtering and year rendering

## Local Preview

Run a local static server from this directory:

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

Open:

```text
http://127.0.0.1:8080/
```

On Windows, if the Python launcher is installed, `py -m http.server 8080 --bind 127.0.0.1` also works.

## No-Server Deployment With GitHub Pages

The simplest way to avoid running a server is to publish this static website
directly with GitHub Pages.

1. Create a GitHub repository, for example `ilvkai.com`.
2. Push this directory to the repository:

```powershell
git init
git branch -M main
git add .
git commit -m "Initial academic homepage"
git remote add origin git@github.com:YOUR_GITHUB_NAME/ilvkai.com.git
git push -u origin main
```

3. In GitHub, open the repository and go to:

```text
Settings -> Pages
```

4. Under `Build and deployment`, choose:

```text
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

5. Under `Custom domain`, enter:

```text
www.ilvkai.com
```

The repository already includes a root-level `CNAME` file with this domain.

6. In Huawei Cloud DNS, add:

```text
Record name: www
Record type: CNAME
Record value: YOUR_GITHUB_NAME.github.io
```

7. After GitHub finishes certificate provisioning, enable `Enforce HTTPS` in
   `Settings -> Pages`.

Future updates are simple:

```powershell
git add .
git commit -m "Update homepage"
git push
```

GitHub Pages will publish the new version automatically after each push.

If you also want `https://ilvkai.com/` without `www` to work, configure the
apex domain in GitHub Pages and add the GitHub Pages apex A records in Huawei
Cloud DNS. For this first version, using `https://www.ilvkai.com/` as the main
entry is cleaner.

## Other No-Server Options

GitHub Pages is the easiest fit for this repository. Other options are:

- Cloudflare Pages: connect the GitHub repository, then bind `www.ilvkai.com`.
  It provides a modern deployment dashboard and preview deployments.
- Vercel or Netlify: also connect directly to GitHub. These are convenient if
  the website later migrates to Astro, Next.js, or a component-based build.
- Huawei Cloud OBS static website hosting: no server, better domestic-cloud
  alignment, but it needs more cloud setup and may involve ICP filing when using
  mainland China resources.

For the current pure static homepage, GitHub Pages is the lowest-maintenance
choice.
