---
title: "Datasets"
---

# Datasets disponibles

La mayoría de los notebooks usan corpus incorporados en `quanteda` (por ejemplo, `data_corpus_inaugural`, `data_corpus_moviereviews`) o corpus descargados directamente en el notebook (NLTK, Kaggle), por lo que no requieren archivos externos.

Algunas unidades sí generan o consumen archivos de datos intermedios entre notebooks. Estos archivos ya están incluidos junto a cada notebook en [Clases](../clases/clases.md) — se listan aquí, organizados por unidad, solo como referencia rápida.

## Unidad 4b: Keyness e Interpretación con LLM

[tstat_key_movies.csv](Unidad_4b/tstat_key_movies.csv) — tabla de keyness (chi-cuadrado) exportada por la Unidad 4a (`write_csv`) y leída por la Unidad 4b para la interpretación con un LLM.

## Unidad 5: Modelamiento de Tópicos

Tablas de términos principales por tópico, exportadas por la Unidad 5a (`write_csv`) para los tres modelos LDA ($k=12$, $20$, $25$) y reutilizadas en las Unidades 5b, 5c y 5d:

- [lda_topterms_k12.csv](Unidad_5/lda_topterms_k12.csv)
- [lda_topterms_k20.csv](Unidad_5/lda_topterms_k20.csv)
- [lda_topterms_k25.csv](Unidad_5/lda_topterms_k25.csv)

## Unidad 6: Análisis de Sentimiento Financiero

<a href="Unidad_6/Sentences_AllAgree.txt" download>Sentences_AllAgree.txt</a> — subconjunto *AllAgree* del **FinancialPhraseBank** (Malo et al., 2014), 2.264 frases financieras en inglés con etiqueta de sentimiento de acuerdo unánime entre anotadores. Licencia **CC BY-NC-SA 3.0** (uso no comercial, con atribución) — ver [ficha del dataset](https://huggingface.co/datasets/takala/financial_phrasebank).
