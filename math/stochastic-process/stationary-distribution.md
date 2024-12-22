# 定常分布

そこに至ったらもう変化しない分布であり、確率過程の行き着く先

## 定義

$\mathcal S$上の確率分布$\pi = (\pi_i)_{i\in\mathcal S}$が推移確率行列$\mathbf P$の**定常分布**であるとは、$\pi$が
$$\pi = \pi \mathbf P$$
をみたすことをいう。

つまり、$n$ステップ後も
$$\pi = \pi \mathbf P ^n$$
となるので、分布が変わらない。

任意の時刻での状態が定常分布に従うとき、マルコフ連鎖は**定常**であるという。

::: warning
定常分布は**存在するとは限らない！**
定常分布は存在したとしても**一意とは限らない！**
:::

じゃあ、

- 定常分布はどういうときに存在するの？
- 定常分布が一意的に存在するのはどういうとき？

## 平衡方程式

$P$を推移確率行列、$\pi$を定常分布であることと、
$$\forall C \subset S\;s.t.\;C\neq \emptyset$$
に対して
$$\sum_{i\in C}\sum_{j \in S\setminus C} \pi_i p_{i,j}=\sum_{i\in S\setminus C} \sum_{j \in C} \pi_ip_{i,j}$$
が成り立つことは**同値**である。

つまり、定常状態とは**状態の集合から出ていく確率と入ってくる確率が等しい**ということだと言っている。しかもそれがどんな状態の集合に対しても成り立つ。

平衡方程式は、定常分布の定義の同値な言い換えである。

## 不変測度

定常分布の条件を緩めたもので、成分の和が1でなくてもいい
条件がゆるいので存在条件を調べるのが（定常分布と比較して）楽になる。

### 定義

$\mathcal S$上のベクトル$\xi =(\xi_i)_{i\in\mathcal S}$が
$$\xi \ge 0,\quad \xi = \xi \mathbf P$$
をみたすとき、$\xi$のことを$P$の**不変測度**という。

定義では$\xi$の成分の和について特に制約がない。定常分布と比較して、その条件がなくなっている分、緩い条件になっている。つまり、**定常分布は不変測度の特別な場合**。

大きさに関する制約がないので、$\xi$が不変測度ならそれを定数倍した
$$c\xi \quad(c>0)$$
も不変測度である。

### 既約なマルコフ連鎖の不変測度

$\xi$を既約なマルコフ連鎖の不変測度とすると、
$$\xi_i > 0, \quad \forall j\in \mathcal S$$
が成り立つ。逆に言えば、既約でなければ$\xi_j = 0$となる可能性がある。

さらに、
$$\exists k\in \mathcal S \;s.t. \;\xi_k < \infty\Rightarrow \xi_j<\infty, \; \forall j\in\mathcal S$$
が成り立つ。つまり、一つでも有限な値があれば、すべてが有限になる。

### 既約かつ再帰的なマルコフ連鎖の不変測度

$\{X_n\}$を状態空間$\mathcal S$上の既約かつ再帰的なマルコフ連鎖として、$\mathbf P$をその推移確率行列とする。$T_0$を任意に固定した状態$0\in\mathcal S$への再帰時間とすると
$$\xi_i = E\left[\sum^{T_0-1}_{n=0} \mathbf 1_{\{X_n=i\}} \mid X_0 = 0\right]$$
とおいたとき、$\xi$が$\mathbf P$の不変測度になる。つまり、**既約で再帰的なマルコフ連鎖には不変測度が存在する**。

このとき、$\xi_i$は状態0から状態0に帰ってきたときに、状態iになった回数の期待値になっている。

さらに、既約で再帰的なマルコフ連鎖の不変測度は**定数倍の違いを除いて一意的である**ことが示せる。

以上より、既約で再帰的なマルコフ連鎖には、**不変測度が存在して定数倍を除いて一意的である**。ただし、逆は成り立たないので注意。

::: warning
既約で再帰的なら不変測度が存在するが、$\sum \xi_i$が有限とは限らない。有限じゃないと規格化できず、定常分布を作ることはできない
:::

### 既約かつ正再帰的なマルコフ連鎖では定常分布が存在

上の話から、既約かつ再帰的なマルコフ連鎖には不変測度が定数倍を除いて一意的に存在することがわかった。
$$\xi_i = E\left[\sum^{T_0-1}_{n=0} \mathbf 1_{\{X_n=i\}} \mid X_0 = 0\right]$$
なので、これら成分の和は
$$\sum_i\xi_i = E\left[\sum_{i\in \mathcal S}\sum^{T_0-1}_{n=0} \mathbf 1_{\{X_n=i\}} \mid X_0 = 0\right]=E[T_0\mid X_0=0]$$
となる。これは$\sum_{i\in\mathcal S}\mathbf 1_{\{X_n=i\}}=1$となるから。

ここで、

- 正再帰的：$E[T_i\mid X_0 = i]<\infty$
- 零再帰的：$E[T_i\mid X_0 = i] = \infty$
なので、正再帰的なら（既約なマルコフ連鎖を考えているからマルコフ連鎖が正再帰的なら）
$$\sum_i\xi_i =E[T_0\mid X_0 = 0] <\infty$$
となって、規格化することができて**定常分布が存在する**。
$$\xi'_j = \frac{\xi_j}{E[T_0\mid X_0=0]}$$
と定めることで、$\xi'$は定常分布である。また、不変測度が定数倍を除いて一意的であるから、規格化してしまえば一意的である。よって、**定常分布が一意的である**。

::: info 結論
**既約で正再帰的なマルコフ連鎖には定常分布が一意的に存在する**
:::

## 周期的なマルコフ連鎖の定常分布

周期的なマルコフ連鎖では、[[周期性#循環クラス]]がある。既約で、周期が$d$、循環クラスが$C_0,...,C_{d-1}$であるとすると、$P^d$はブロック対角行列になり、
$$P^d = \begin{pmatrix} P^{(d)}_0 &  &  & \\  & P^{(d)}_1 & &  \\ & & \ddots & \\ & & & P^{(d)}_{d-1} \end{pmatrix}$$
のようになる。$P^{(d)}_k$はそれぞれ循環クラス$C_k$の中での遷移になっている。

$P^{(d)}_k$を推移確率行列と考えて$C_k$上のマルコフ連鎖を考えると、既約かつ非周期的になる。
もしも$P$が正再帰的なら、$P^{(d)}_k$も$C_k$上で正再帰的になり、$C_k$上で定常分布を持つことになる。

つまり、$P$が既約で、正再帰的で、周期$d$をもつ推移確率行列であるとき、$P^{(d)}_k$を$C_k$に対応するブロックとして、$\rho_k$を$P^{(d)}_k$の定常分布とすれば、
$$\pi = \begin{pmatrix} \frac{\rho_0}{d} & \frac{\rho_1}d & \cdots & \frac{\rho_{d-1}}d \end{pmatrix}$$
は$P$の定常分布である。
周期的なマルコフ連鎖では、**循環クラスごとに定常分布を求めて合体させることで全体の定常分布になる**。