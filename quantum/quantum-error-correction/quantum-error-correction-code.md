---
prev: false
next: false
---

# 量子誤り訂正符号

略称QECC（quantum error correction code）

量子誤り訂正をするために、量子情報を符号化する方法。同時に、情報をもとに戻す復号の手順も定める。

定義の仕方はいろいろあるかもしれないが、ここでは[Gottesman]の定義を紹介する。

**量子誤り訂正符号**とは、部分アイソメトリ $U:\mathcal H_K \to \mathcal H_N$ と、訂正可能なエラーの集合 $\mathcal E$ の組 $(U,\mathcal E)$ であり、ある[量子操作](../quantum-information/quantum-operation.md) $\mathcal D: \mathcal H_M \to \mathcal H_K$ が存在して、
$$\forall E\in \mathcal E, \forall \ket{\psi} \in \mathcal H_K\quad \mathcal D(EU\ket{\psi}\bra{\psi}U^{\dagger}E^{\dagger})=c(E,\ket{\psi})\ket{\psi}\bra{\psi}$$
をみたすものをいう。ここで、$c(E,\ket{\psi})$は$E,\ket{\psi}$のみに依存する定数。

$U$がエンコードして、$\mathcal D$がデコードしていることになる。

## 参考文献

- [Gottesman] Daniel Gottesman, "Surviving as a Quantum Computer in a Classical World", https://www.cs.umd.edu/class/spring2024/cmsc858G/QECCbook-2024-ch1-15.pdf