# Mapa de la Policia
## red de cuidado ciudadano

Este repositorio es una re-implementacion del mapa de la policia que desvincula datos de presentacion para poder facilmente replicar la experiencia en diversas ciudades.

# design (goals and implementation)
this project was designed to have many different organizations handle their own 'violence map', while still having a centralized tech team. We want bugs to be handled in a central maner but publication and data to be distributed (politically).

that said we're also included in a bigger ecosystem of 'map pages', so we've created a repository (and npm package) to host our components: https://github.com/edipoarg/components these are shared between this (mapa) repo and the radar repo (https://github.com/edipoarg/radar), but we do plan to use them for many other instances.

This repository hosts the main code, for the 'police violence map' skeleton, it is pre-seeded with old data from the CABA (Ciudad Autonoma de Buenos Aires) instance. Data present in this repo should be the bare minimum to be able to develop, that said, YOU SHOULD NOT HACK ON THE DATA PRESENT IN THIS REPO FOR A PRODUCTION SITE, see the 'repositories' section for more details.

The data should be hosted in a 'data-only' repository, we have various of them under the 'mapadelapolicia' github organization: https://github.com/mapadelapolicia

these repos are checked out during build and 'copied' over the `public/data` and `src/data` directories of this repo.

the rationale being: 
 - `public/data`: data that should be fetch()ed during run time
 - `src/data`: load-sensitive data that should be complied into the build.

the 'data-only' repositories come with a pages.yml (i.e. https://github.com/mapadelapolicia/caba/blob/main/.github/workflows/pages.yml) github action that does all this magic, use it.


## repositories (how is this thing supposed to work)

- https://github.com/edipoarg/mapa (this): main code repository
- https://github.com/edipoarg/components: shared components
- https://github.com/mapadelapolicia/ (*): data repository.

## sugested dev setup

you should not need to touch the `components` API, in any case never break the existing API as other projects depend on it.

that said, it can be usefull to be able to hack on both at the same time, we suggest this dev setup:

``` sh
git clone https://github.com/edipoarg/components
git clone https://github.com/edipoarg/mapa
sh -c 'cd components && yarn && yarn link && vite build -w -m dev'
sh -c 'cd mapa && yarn link @edipoarg/components && yarn && yarn run dev'
```

this should have you semi-live reloading the whole stack.
if you're going to introduce a new data-need, be sure that your code fails gracefully if data is not present, and THEN add it to this repo either in the `src/data` or the `public/data` directories

# REACT + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
