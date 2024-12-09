# ヴィタリ集合

[ルベーグ可測集合](./lebesgue-measurable-set.md)でない集合の代表例。選択公理を仮定することで証明できる。

[ルベーグ外測度](./lebesgue-exterior-measure.md)が[測度](./measure.md)になっていないことを示す反例になっている。

## 定義

次の性質をみたす集合$V \subset [0,1]$を**ヴィタリ集合**という。

1. $\forall x \in \mathbb R, \; \exists u \in V, \exists r\in \mathbb Q, \quad u+r=x$
2. 異なる$u,v \in V$について$u+r=v$となる$r\in \mathbb Q$が存在しない

上の条件は

1. 任意の実数はヴィタリ集合の元を有理数分だけ平行移動することで表現できる
2. ヴィタリ集合のどの2元も有理数分の平行移動で一致せられない

ヴィタリ集合は**選択公理を認めることで存在を証明できる**

また、ヴィタリ集合は**ルベーグ可測集合でない**。したがって、[ルベーグ外測度](./lebesgue-exterior-measure.md)が[測度](./measure.md)になっていないことを示すための反例になっている。

ヴィタリ集合の存在証明、ルベーグ可測集合でないことの証明は[こちらの記事](https://math-note.xyz/analysis/measure-theory/lebesgue-integral/lebesgue-unmeasurable-set/)が参考になる。
