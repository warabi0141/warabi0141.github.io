---
prev: false
next: false
---

# スタビライザ

定義の仕方がいくつかあるが、まずは[量子誤り訂正符号](./quantum-error-correction-code.md)から定義する。

QECC $T \subseteq \mathcal H_{2^n}$に対して、
$$\text S(T) = \{M \in P_n \mid M\ket{\psi} = \ket{\psi} \;(\forall \ket{\psi} \in T)\}$$
で定める$\text S(T)$のことを**スタビライザ**という。

これは別の言葉で言えば、$\ket{\psi} \in T$が$+1$固有空間に入っているような演算子$M$の集まり。

## 性質

スタビライザの基本的な性質として次の3つがある。

- $-I \notin \text S(T)$
- $\text S(T)$ は群
- $\text S(T)$ は可換群

簡単に証明すると、$\text S(T)$ の要素は固有値として$+1$を持つ必要があるが $-I$ は $+1$ を固有値に持たないので $-I \notin \text S(T)$ 。
群であることの確認は、$M,N\in \text S(T)$ ならば $MN \ket {\psi} = M\ket{\psi} = \ket{\psi}$ なので $MN \in \text S(T)$ である。

可換群であることの証明は少しだけテクニカルで、
$$MN \ket{\psi} = NM \ket{\psi}$$
が任意の$\ket{\psi}$について成り立つことから、
$$(MN-NM) \ket{\psi} = [M,N]\ket{\psi} = 0$$
である。仮に$M,N$が反交換であるなら、
$$[M,N] = MN -NM = 2MN$$
であることから、
$$2MN\ket{\psi} = 0$$
となるが、$MN \in \text S(T)$ なのでこれはおかしい。よって、$M,N$は可換である。よって、$\text S(T)$は可換群。

## モチベーション

「スタビライザ」という名前については自然なネーミングだと思う。$M\in \text S(T)$について
$$M\ket{\psi} = \ket{\psi} \quad (\forall \ket{\psi} \in T)$$
となるので、**スタビライザの要素が作用しても状態が変わらない**。「stabilize」は「安定させる」というような意味なので状態が変わらないことを表していると思える。実際に、上のような式が成り立つときに、「$M$は$\ket{\psi}$をスタビライズする」という言い方もする。

## 具体例

9-qubit符号について、スタビライザを考えてみる。9-qubit符号の論理状態は、
$$\ket{\overline 0}=\frac 1{2\sqrt 2}(\ket{000} + \ket{111})^{\otimes 3}$$
$$\ket{\overline 1} = \frac1{2\sqrt 2}(\ket{000} - \ket{111} )^{\otimes 3}$$
である。この状態に、$X_1X_2X_3X_4X_5X_6$をかけてみると、
$$\begin{align}X_1X_2X_3X_4X_5X_6 \ket{\overline 0} &= \frac 1{2\sqrt 2}X_1X_2X_3(\ket{000} + \ket{111})\otimes X_4X_5X_6(\ket{000} + \ket{111}) \otimes (\ket{000} + \ket{111}) \\ &=  \frac 1{2\sqrt 2}(\ket{000} + \ket{111})^{\otimes 3}\\ &= \ket{\overline 0}\end{align}$$
となって、状態が変わらないことがわかる。なので、$X_1X_2X_3X_4X_5X_6$は9-qubit符号のスタビライザに含まれていることになる。

## 参考文献

- [Gottesman] Daniel Gottesman, "Surviving as a Quantum Computer in a Classical World", https://www.cs.umd.edu/class/spring2024/cmsc858G/QECCbook-2024-ch1-15.pdf