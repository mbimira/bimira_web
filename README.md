# Michael Bimira — Data Analytics & Applied AI

Portfolio website and project case studies for Michael Bimira.

**Live site:** [mbimira.github.io/bimira_web](https://mbimira.github.io/bimira_web/)

The site is a static HTML, CSS, and JavaScript project. It has no build step or package installation. GitHub Actions publishes the `site/` directory to GitHub Pages when changes are pushed to `main`.

## Preview locally

From the repository root, run:

```bash
python3 -m http.server 8000 --directory site
```

Then open [http://localhost:8000](http://localhost:8000).

## Repository layout

- `site/` — published website, resume, contact form, project pages, and images.
- `site/projects/concrete-strength/` — concrete strength modeling case study, notebook, and data.
- `site/projects/automobile-clustering/` — clustering case study, notebook, and data.
- `DESIGN.md` and `PRODUCT.md` — design and product notes for the portfolio.
- `.hermes/` and `impeccable` — optional design-development tooling; these are not required to preview or publish the site.

The `impeccable` directory is a Git submodule. To include it when cloning, use:

```bash
git clone --recurse-submodules https://github.com/mbimira/bimira_web.git
```

Without the submodule, the website and its deployment still work.

## Featured work

- [Concrete compressive strength](https://mbimira.github.io/bimira_web/projects/concrete-strength/) — regression modeling on the UCI concrete dataset.
- [Automobile clustering](https://mbimira.github.io/bimira_web/projects/automobile-clustering/) — hierarchical clustering and PCA on `mtcars`.
- [Landing page A/B test](https://github.com/mbimira/A-B-TESTING) — experiment analysis and methodology.

## Deployment

The workflow in `.github/workflows/deploy-pages.yml` deploys `site/` to GitHub Pages on pushes to `main` and through manual workflow dispatch. The repository’s Pages source should be set to **GitHub Actions**.

## Contact

- Email: [mikebimira@gmail.com](mailto:mikebimira@gmail.com)
- [LinkedIn](https://linkedin.com/in/michael-bimira-77779a372)
- [GitHub](https://github.com/mbimira)
