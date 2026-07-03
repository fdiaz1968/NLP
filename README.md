# Procesamiento de Lenguaje Natural

![example workflow](https://github.com/fdiaz1968/NLP/actions/workflows/documentation.yml/badge.svg)
<a href="https://fdiaz1968.github.io/NLP/"><img alt="Link a la Documentación" src="https://img.shields.io/badge/docs-link-brightgreen"></a>

Curso intensivo de **Procesamiento de Lenguaje Natural (PLN)** — Análisis Textual con R y Python.

Fernando Díaz H., PhD. — Departamento de Ingeniería Comercial, Universidad Técnica Federico Santa María (UTFSM) / Universidad del Pacífico.

## Descripción del Curso

Este curso introduce las técnicas fundamentales del PLN aplicadas al análisis de textos en ciencias sociales, economía y finanzas, combinando dos paradigmas complementarios: métodos estadísticos clásicos en **R / Quanteda** y modelos transformer / LLM en **Python / HuggingFace**. Ver el detalle completo en [docs/programa.md](docs/programa.md).

La estructura del sitio sigue el mismo esquema usado en [usm-course](https://github.com/hizocar/usm-course): Home (perfil), Programa, Clases, Ejercicios, Datasets y Evaluaciones.

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
│   │       perfil_fernando.png
│   │
│   ├───clases
│   │       clases.md
│   │       Unidad_1_Limpieza_Transformacion.ipynb
│   │       Unidad_2_DFM.ipynb
│   │       Unidad_3_Estadistica_Descriptiva.ipynb
│   │       Unidad_4_Keyness_Dispersion.ipynb
│   │       Unidad_5_Topic_Modeling.ipynb
│   │       Unidad_6_Analisis_Sentimiento.ipynb
│   │       Unidad_7_Similitud_Semantica.ipynb
│   │
│   ├───exercises
│   │       exercises.md
│   │
│   ├───datasets
│   │       datasets.md
│   │
│   ├───assessments
│   │       proyecto_integrador.md
│   │
│   │   __init__.py
│   │   index.md
│   │   programa.md
│
├────notebooks
│       1_Limpieza_procesamiento.ipynb
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
* `docs`: carpeta que orquesta mkdocs (sitio publicado).
  * `images`: logos UTFSM / Universidad del Pacífico y foto de perfil.
  * `index.md`: Home — perfil del profesor.
  * `programa.md`: Programa — descripción del curso, objetivos, contenidos y evaluación.
  * `clases/`: Clases — un notebook por unidad, más `clases.md` como índice con enlaces a Colab.
  * `exercises/`, `datasets/`, `assessments/`: secciones Ejercicios, Datasets y Evaluaciones.
* `notebooks`: notebooks originales de cada unidad tal como los redacta el autor, antes de integrarse a `docs/clases/`.
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
