# Procesamiento de Lenguaje Natural

![example workflow](https://github.com/fdiaz1968/NLP/actions/workflows/documentation.yml/badge.svg)
<a href="https://fdiaz1968.github.io/NLP/"><img alt="Link a la Documentación" src="https://img.shields.io/badge/docs-link-brightgreen"></a>

Curso intensivo de **Procesamiento de Lenguaje Natural (PLN)** — Análisis Textual con R y Python.

Fernando Díaz H., PhD. — Departamento de Ingeniería Comercial, Universidad Técnica Federico Santa María (UTFSM) / Universidad del Pacífico.

## Descripción del Curso

Este curso introduce las técnicas fundamentales del PLN aplicadas al análisis de textos en ciencias sociales, economía y finanzas, combinando dos paradigmas complementarios: métodos estadísticos clásicos en **R / Quanteda** y modelos transformer / LLM en **Python / HuggingFace**. Ver el detalle completo de contenidos en [docs/index.md](docs/index.md).

## Descripción del Repositorio

```
|
├───.github
│   └───workflows
│           documentation.yml
│
├────docs
│   ├───images
│   │       logo_utfsm.png
│   │       logo_upacifico.jpg
│   │
│   │   __init__.py
│   │   index.md
│   │   unit1_limpieza_transformacion.ipynb
│   │   unit2_dfm.ipynb
│   │   unit3_estadistica_descriptiva.ipynb
│   │   unit4_keyness_dispersion.ipynb
│   │   unit5_topic_modeling.ipynb
│   │   unit6_analisis_sentimiento.ipynb
│   │   unit7_similitud_semantica.ipynb
│
│   .gitignore
│   LICENSE
│   mkdocs.yml
│   poetry.lock
│   pyproject.toml
│   README.md
```

donde:

* `documentation.yml`: archivo para generar el CI del proyecto y publicar la documentación en GitHub Pages.
* `docs`: carpeta donde se almacenan los jupyter notebooks de cada unidad.
  * `images`: carpeta con los logos UTFSM / Universidad del Pacífico.
  * `index.md`: página de inicio con la descripción del curso, objetivos y tabla de contenidos.
  * `unitN_*.ipynb`: notebook de cada una de las 7 unidades del curso.
* `.gitignore`: lugar donde se define los archivos a ignorar.
* `LICENSE`: licencia asociada al proyecto.
* `mkdocs.yml`: archivo que orquesta la documentación del proyecto.
* `poetry.lock` / `pyproject.toml`: dependencias del proyecto.
* `README.md`: archivo que describe el repositorio.

## Instalación y uso local

```bash
poetry install
poetry run mkdocs serve
```

La documentación quedará disponible en `http://127.0.0.1:8000`.

## Publicación (GitHub Pages)

El sitio se publica automáticamente vía GitHub Actions (`.github/workflows/documentation.yml`) al hacer `push` a `main`, usando `mkdocs gh-deploy`.

## Contacto

Fernando Díaz H., PhD. — [fernando.diaz@usm.cl](mailto:fernando.diaz@usm.cl)
