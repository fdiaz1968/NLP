# Programa del Curso

### Procesamiento de Lenguaje Natural — Análisis Textual con R y Python

## Información General

| | | | |
|---|---|---|---|
| **Modalidad** | Intensivo (Semana Internacional) | **Idioma** | Español |
| **Nivel** | Pregrado | **Jornadas** | 5 días |
| **Herramientas** | R + Python | **Entorno** | Colab / Local |

## Descripción del Curso

Este curso introduce las técnicas fundamentales del **Procesamiento de Lenguaje Natural (PLN)** aplicadas al análisis de textos en ciencias sociales, economía y finanzas. El programa combina dos paradigmas complementarios:

- <span style="background-color:#0850411a;color:#085041;padding:2px 8px;border-radius:4px;font-weight:700;">R / Quanteda</span> para tareas donde los métodos estadísticos clásicos son más interpretables, rápidos y reproducibles.
- <span style="background-color:#1758951a;color:#175895;padding:2px 8px;border-radius:4px;font-weight:700;">Python / LLM</span> para tareas donde la comprensión contextual profunda de los LLM supera claramente al enfoque tradicional.

Se hace énfasis en que *no existe un enfoque universalmente superior*: la elección de la herramienta depende del corpus, la tarea, los recursos computacionales y el nivel de interpretabilidad requerido. Esta perspectiva crítica es uno de los objetivos centrales del curso.

Aprendemos Quanteda no porque sea el estado final del NLP, sino porque proporciona los fundamentos conceptuales necesarios para comprender por qué los embeddings y los Transformers representan un avance sobre las representaciones tradicionales del texto.

## Objetivos Generales

Al finalizar el curso, el estudiante será capaz de:

1. Preprocesar y estructurar corpus textuales para análisis cuantitativo.
2. Aplicar métodos estadísticos clásicos de PLN (frecuencias, keyness, LDA) usando R/Quanteda.
3. Utilizar modelos transformer especializados (FinBERT, DeBERTa, sentence-transformers) en Python para tareas de clasificación y similitud.
4. Evaluar y comparar el rendimiento de enfoques tradicionales y LLM sobre un mismo corpus.
5. Fundamentar críticamente la elección metodológica según el contexto de investigación.

## Stack Tecnológico del Curso

| | <span style="background-color:#0850411a;color:#085041;padding:2px 8px;border-radius:4px;font-weight:700;">R / Quanteda</span> | <span style="background-color:#1758951a;color:#175895;padding:2px 8px;border-radius:4px;font-weight:700;">Python / HuggingFace</span> |
|---|---|---|
| **Paquetes clave** | `quanteda`, `topicmodels`, `stringr`, `ggplot2` | `transformers`, `sentence-transformers`, `bertopic`, `scikit-learn`, `pandas` |
| **Cuándo usarlo** | Corpus grandes, reproducibilidad, métricas lingüísticas, DFM | Comprensión contextual, tareas sin anotaciones, similitud semántica |

## Contenidos, Herramientas y Justificación

| # | Unidad | Contenidos | Herramienta | Justificación metodológica |
|---|---|---|---|---|
| 1 | Limpieza y Transformación | Corpus, tokens, metadatos. Stopwords, stemming, lematización. | <span style="background-color:#0850411a;color:#085041;padding:1px 7px;border-radius:4px;font-weight:700;font-size:0.85em;">R</span> | Quanteda ofrece el flujo corpus → tokens → DFM más completo y pedagógico. Los LLM no requieren preprocesamiento explícito, lo que oculta conceptos fundamentales al estudiante. |
| 2 | Document Feature Matrix | Construcción de la DFM. Frecuencias, trimming, agrupación por `docvars`. | <span style="background-color:#0850411a;color:#085041;padding:1px 7px;border-radius:4px;font-weight:700;font-size:0.85em;">R</span> | La DFM es la representación matricial base del PLN clásico. Comprenderla es prerequisito para entender por qué los embeddings densos de los LLM son una mejora. |
| 3 | Estadística Descriptiva | Tokens, types, TTR. Wordclouds, gráficos de frecuencia. | <span style="background-color:#0850411a;color:#085041;padding:1px 7px;border-radius:4px;font-weight:700;font-size:0.85em;">R</span> | Las métricas lingüísticas descriptivas (TTR, ley de Zipf) son agnósticas al modelo. R/Quanteda las calcula eficientemente sobre corpus de cualquier tamaño. |
| 4 | Keyness y Dispersión | Chi-cuadrado, log-likelihood. `textplot_keyness()`, `textplot_xray()`. | <span style="background-color:#854f0b1a;color:#854f0b;padding:1px 7px;border-radius:4px;font-weight:700;font-size:0.85em;">Híbrido</span> | Keyness estadístico se mantiene en R por su transparencia e interpretabilidad. Se incorpora un LLM para narrar y contextualizar automáticamente los términos clave detectados. |
| 5 | Topic Modeling | LDA (Gibbs/VEM), selección de k. Introducción a BERTopic. | <span style="background-color:#854f0b1a;color:#854f0b;padding:1px 7px;border-radius:4px;font-weight:700;font-size:0.85em;">Híbrido</span> | LDA se enseña para transmitir el modelo generativo subyacente. Se agrega BERTopic (Python) para mostrar cómo los embeddings mejoran la coherencia temática, y un LLM para etiquetar tópicos automáticamente. |
| 6 | Análisis de Sentimiento | FinBERT, RoBERTa, DeBERTa, modelos en español. Evaluación con F1 macro. | <span style="background-color:#1758951a;color:#175895;padding:1px 7px;border-radius:4px;font-weight:700;font-size:0.85em;">Python</span> | Los diccionarios financieros (Loughran-McDonald) tienen cobertura limitada ante jerga nueva e ironía. Los modelos transformer superan consistentemente el baseline léxico: DeBERTa F1 = 1.00 vs. FinEspañol F1 = 0.41 en inglés. |
| 7 | Similitud Semántica | Cosine/Jaccard/Euclídea sobre DFM. Embeddings con `sentence-transformers`. Clustering, MDS. | <span style="background-color:#854f0b1a;color:#854f0b;padding:1px 7px;border-radius:4px;font-weight:700;font-size:0.85em;">Híbrido</span> | Unidad puente del curso: primero similitud sobre TF-IDF (R), luego sobre embeddings densos (Python). El contraste hace tangible la diferencia entre similitud léxica y semántica. |

## Cronograma — Semana Intensiva

*(fechas por confirmar según la sede/edición del curso)*

| Día | Unidad(es) |
|---|---|
| Día 1 | Unidad 1 — Limpieza y Transformación · Unidad 2 — Document Feature Matrix |
| Día 2 | Unidad 3 — Estadística Descriptiva · Unidad 4 — Keyness y Dispersión |
| Día 3 | Unidad 5 — Modelamiento de Tópicos |
| Día 4 | Unidad 6 — Análisis de Sentimiento Financiero |
| Día 5 | Unidad 7 — Similitud Semántica · Cierre y Proyecto Integrador |

## Detalle de Unidades

Los notebooks de cada unidad están disponibles en la sección [Clases](clases/clases.md).

### Unidad 1 — Limpieza y Transformación de Textos <span style="background-color:#0850411a;color:#085041;padding:1px 7px;border-radius:4px;font-weight:700;font-size:0.85em;">R</span>

**Objetivos de aprendizaje:**

- Construir un corpus estructurado con metadatos usando `quanteda`.
- Aplicar operaciones de normalización: eliminación de stopwords, puntuación, stemming y lematización.
- Comprender el impacto de cada decisión de preprocesamiento sobre los análisis posteriores.

**Lecturas sugeridas:**

- Benoit, K. et al. (2018). *quanteda: An R package for the quantitative analysis of textual data*. JOSS, 3(30), 774.
- Silge, J. & Robinson, D. (2017). *Text Mining with R*. O'Reilly. [tidytextmining.com](https://www.tidytextmining.com)

### Unidad 2 — Document Feature Matrix <span style="background-color:#0850411a;color:#085041;padding:1px 7px;border-radius:4px;font-weight:700;font-size:0.85em;">R</span>

**Objetivos de aprendizaje:**

- Construir y manipular una DFM con ponderación TF-IDF.
- Realizar trimming por frecuencia y agrupar documentos por variables de metadatos.
- Exportar la DFM para uso en modelos externos.

**Lecturas sugeridas:**

- Grimmer, J., Roberts, M. E. & Stewart, B. M. (2022). *Text as Data*. Princeton University Press. Cap. 4-5.
- Documentación oficial: [quanteda.io](https://quanteda.io)

### Unidad 3 — Estadística Descriptiva <span style="background-color:#0850411a;color:#085041;padding:1px 7px;border-radius:4px;font-weight:700;font-size:0.85em;">R</span>

**Objetivos de aprendizaje:**

- Calcular métricas de diversidad léxica: tokens, types, TTR y moving-average TTR.
- Visualizar distribuciones de frecuencia e interpretar la ley de Zipf en corpus reales.
- Producir wordclouds comparativos entre grupos de documentos.

**Lecturas sugeridas:**

- Manning, C. D. & Schütze, H. (1999). *Foundations of Statistical NLP*. MIT Press. Cap. 1-2.
- Zipf, G. K. (1949). *Human Behavior and the Principle of Least Effort*. Addison-Wesley.

### Unidad 4 — Keyness y Dispersión Textual <span style="background-color:#854f0b1a;color:#854f0b;padding:1px 7px;border-radius:4px;font-weight:700;font-size:0.85em;">Híbrido</span>

**Objetivos de aprendizaje:**

- Calcular e interpretar keyness con chi-cuadrado y log-likelihood entre grupos de texto.
- Visualizar la dispersión léxica a lo largo de un corpus con `textplot_xray()`.
- Usar un LLM para generar narrativas interpretativas de los términos clave detectados.

**Lecturas sugeridas:**

- Gabrielatos, C. (2018). Keyness analysis: nature, metrics and techniques. En: *Corpus Approaches to Discourse*. Routledge.
- Scott, M. (1997). PC analysis of key words. *Liverpool Papers in Language and Discourse*, 1.

### Unidad 5 — Modelamiento de Tópicos <span style="background-color:#854f0b1a;color:#854f0b;padding:1px 7px;border-radius:4px;font-weight:700;font-size:0.85em;">Híbrido</span>

**Objetivos de aprendizaje:**

- Estimar un modelo LDA con el paquete `topicmodels` y seleccionar k óptimo.
- Comparar LDA con BERTopic en términos de coherencia y legibilidad de tópicos.
- Aplicar un LLM para asignar etiquetas interpretables a los tópicos descubiertos.

**Lecturas sugeridas:**

- Blei, D. M., Ng, A. Y. & Jordan, M. I. (2003). Latent Dirichlet Allocation. JMLR, 3, 993-1022.
- Grootendorst, M. (2022). BERTopic: Neural topic modeling with a class-based TF-IDF procedure. arXiv:2203.05794.

### Unidad 6 — Análisis de Sentimiento Financiero <span style="background-color:#1758951a;color:#175895;padding:1px 7px;border-radius:4px;font-weight:700;font-size:0.85em;">Python</span>

**Objetivos de aprendizaje:**

- Cargar y aplicar modelos transformer especializados (FinBERT, RoBERTa, DeBERTa) desde HuggingFace.
- Evaluar modelos con métricas de clasificación: F1 macro, precisión, recall y matriz de confusión.
- Comparar el rendimiento entre modelos de distinto tamaño, arquitectura e idioma.
- Reflexionar sobre las limitaciones del enfoque basado en diccionarios léxicos financieros.

**Lecturas sugeridas:**

- Araci, D. (2019). FinBERT: Financial Sentiment Analysis with Pre-trained Language Models. arXiv:1908.10063.
- Malo, P. et al. (2014). Good debt or bad debt: Detecting semantic orientations in economic texts. JASIST, 65(4), 782-796. *(Dataset: Financial PhraseBank)*
- Loughran, T. & McDonald, B. (2011). When is a liability not a liability? Journal of Finance, 66(1), 35-65.

### Unidad 7 — Similitud y Distancias Semánticas <span style="background-color:#854f0b1a;color:#854f0b;padding:1px 7px;border-radius:4px;font-weight:700;font-size:0.85em;">Híbrido</span>

**Objetivos de aprendizaje:**

- Calcular similitud coseno, Jaccard y euclidiana sobre una DFM TF-IDF (R).
- Generar embeddings de oraciones con `sentence-transformers` y calcular similitud semántica (Python).
- Contrastar ambos enfoques sobre el mismo corpus y articular sus diferencias conceptuales.
- Visualizar agrupamientos de documentos con clustering jerárquico y MDS.

**Lecturas sugeridas:**

- Reimers, N. & Gurevych, I. (2019). Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks. EMNLP 2019. [sbert.net](https://www.sbert.net)
- Salton, G. & McGill, M. J. (1983). *Introduction to Modern Information Retrieval*. McGraw-Hill.

## Ponderaciones

| Componente | Ponderación |
|---|---:|
| Participación y ejercicios en clase | **40%** |
| Proyecto integrador final | **60%** |

Ver el detalle del proyecto integrador en la sección [Evaluaciones](assessments/proyecto_integrador.md).

## Guía Rápida: ¿Cuándo usar cada enfoque?

| <span style="background-color:#0850411a;color:#085041;padding:1px 7px;border-radius:4px;font-weight:700;font-size:0.85em;">R</span> Usar R / NLP Tradicional cuando... | <span style="background-color:#1758951a;color:#175895;padding:1px 7px;border-radius:4px;font-weight:700;font-size:0.85em;">Python</span> Usar Python / LLM cuando... |
|---|---|
| El corpus es grande (>50.000 docs) y la velocidad importa. | El texto contiene ironía, jerga, ambigüedad contextual. |
| Se requiere reproducibilidad y transparencia total. | No se dispone de datos etiquetados (zero-shot o few-shot). |
| La tarea está bien definida (frecuencias, keyness, readability). | La tarea requiere comprensión semántica profunda (similitud, QA). |
| Se dispone de datos anotados para entrenar un clasificador propio. | El dominio es especializado (finanzas, legal, salud). |
| El presupuesto computacional es limitado. | Se busca automatizar codificación cualitativa. |
