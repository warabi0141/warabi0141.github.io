---
prev: false
next: false
---

# 量子状態

量子情報理論における「情報」。

量子情報理論では、量子状態を**密度行列**を使って記述することがほとんど。密度行列というのは、
$$\rho \ge 0, \quad\text{tr}(\rho) = 1$$
をみたすような行列。1つめの条件は $\rho$ が半正定値行列だということ。従って固有値は非負でスペクトル分解可能であり、
$$\rho = \sum_i \lambda_i \ket{\psi_i}\bra{\psi_i}$$
と書ける。さらに、トレースが1なので、
$$\sum_i\lambda_i = 1$$
である。行列の性質は固有値を見ればだいたい分かるので、固有値だけに着目すると、
$$\lambda_i \ge 0, \quad \sum_i\lambda_i = 1$$
ということになる。つまり、$\{\lambda_i\}$は確率分布になっている。[Wilde]によると「密度行列」という名前は「確率密度関数」に由来しているらしい。（それをいうなら確率質量関数では？と思っちゃうけど）


## モチベーション

なぜ密度行列で量子状態が記述できるのか？

まず、一番単純な
$$\rho = \ket{\psi}\bra{\psi}$$
という密度行列を考える。この行列がもつ情報は、$\ket{\psi}$だけなので$\ket{\psi}$に付いて考えれば十分。この$\ket{\psi}$を量子論の公理系で定まる状態ベクトルと考えれば、このような単純な$\rho$は状態ベクトルを表していることがわかる。

一般の密度行列$\rho$は
$$\rho=\sum_i \lambda_i \ket{\psi_i}\bra{\psi_i}$$
と書けるが、$\sum_i \lambda_i = 1$なので$\lambda_i$による$\ket{\psi_i}$の凸結合になっている。この凸結合は、確率混合に対応していて、
$$\text{Pr}[\;状態が\ket{\psi_i}\bra{\psi_i}\;] = \lambda_i$$
となっている。このことは量子論の公理の１つである**ボルンの確率則**から正当化できる。

## 参考文献

- [Wilde] Mark M. Wilde, "From Classical to Quantum Shannon Theory", arXiv:1106.1445
- Michael A. Nielsen, Isaac L. Chuang, "Quantum Computation and Quantum Information
10th Anniversary Edition", Cambridge University Press