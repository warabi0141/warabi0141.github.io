---
prev:
  text: 'ルベーグ外測度'
  link: './lebesgue-exterior-measure'
next:
  text: 'ルベーグ測度'
  link: './lebesgue-measure'
---

# ルベーグ可測集合

ルベーグ可測集合を定義するためには、[ルベーグ外測度](./lebesgue-exterior-measure)を定義する必要がある。

## 定義（ルベーグ可測集合）

$E\subset \mathbb R$とする。$E$は任意の$A\subset \mathbb R$に対して
$$m^*(A)=m^*(A\cap E) + m^*(A\cap E^c)$$
を満たすとき**ルベーグ可測集合**という。ルベーグ可測な部分集合全体の集合$\mathcal L$を**ルベーグ可測集合族**とよぶ。

この定義は、ルベーグ可測の概念が発表された後、一般化の過程でカラテオドリによって整備された方法。一般の集合に可測空間を定義するにあたって、この定義が使いやすい（ルベーグが外側度と内測度を考えて、内側と外側から挟むことで測度を定義したが、この方法では開区間や閉区間のようなものが必要になるため、一般の空間ではめんどくさい）

この定義を直感的に解釈すると、
$$A = (A\cap E) \cup(A\cap E^c) $$
なので、$A\cap E$と$A\cap E^c$は集合$A$を分割したものになっている。結局、集合$A$を2つに分けてそれぞれの外測度を足したときに$A$の外側度になるということを意味している。つまり、ルベーグ可測な$E$は任意の集合の面積を分割できるような集合である。
互いに素な集合$A,B$について
$$m^*(A\cup B)=m^*(A) + m^*(B)$$
が成り立つみたいなことである。

## 可測集合の同値な定義

以下の7個の条件は同値である
$E\subset \mathbb R$に対して

1. $E$はルベーグ可測
2. 任意の$\epsilon > 0$に対してある開集合$O\supset E$が存在して$m^*(O\setminus E)<\epsilon$
3. $m^*(G\setminus E)=0$をみたす$\mathcal G_{\delta}$集合$G\supset E$が存在する
4. $\mathcal G_{\delta}$集合$G$と零集合$N$が存在して$E=G\setminus N$と表せる
5. 任意の$\epsilon > 0$に対してある閉集合$F\subset E$が存在して$m^*(E\setminus F)<\epsilon$
6. $m^*(E\setminus F)=0$をみたす$\mathcal F_{\sigma}$集合$F\subset E$が存在する
7. $\mathcal F_{\sigma}$集合$F$と零集合$N$が存在して$E=F\cup N$と表せる

さらに$m^*(E)<\infty$なら

- 任意の$\epsilon > 0$に対して$m^*(U\ominus E)<\epsilon$をみたす有限個の有界な開区間の和集合$U$が存在する
も同値。ただし$U\ominus E = (U\setminus E)\cup(E\setminus U)$（対称差）

つまり、可測集合というのは

- **ほとんど開集合の和集合**
- 開集合で近似できる
- **ほとんど閉集合の共通部分**
- 閉集合で近似できる

ルベーグ積分論とは**零集合の違いを無視する**という思想を持っているから、可測集合というのはほとんど$\mathcal G_{\delta}$集合とか$\mathcal F_{\sigma}$集合と言える

## ルベーグ可測集合族の性質

1. 任意の区間$I$について$I\in \mathcal L$
2. $\mathcal L$はσ代数である
3. $E\in \mathcal L$なら$E+x \in \mathcal L\;(\forall x \in \mathbb R)$
4. $m^*(E) = 0 \Rightarrow E \in \mathcal L$

つまり、ルベーグ測度は測度であるということである。外測度の性質を受け継いだ測度になっているので直感的にも馴染みやすい測度。

これらの性質の証明には、外測度の性質1)~5)のみを用いる。特に、σ代数であることの証明では1)~3)しか使わない。この証明方法は一般の測度空間を考えるときにも有効である。

証明は次のいくつかの補題からなる。

### 補題（性質4の証明）

$m^*(E)=0$なら$E\in \mathcal L$で$m(E)=0$

### 補題（$\mathcal L$が集合代数であることの証明）

$E\in\mathcal L$なら$E^c \in \mathcal L$、$E_1,E_2\in \mathcal L$なら$E_1 \cup E_2 \in \mathcal L$である

### 補題（σ加法性への足がかり、有限加法性）

$E_1,...E_n\in \mathcal L$が互いに素なら、任意の$A\subset \mathbb R$に対して
$$m^*(A\cup \left\{\bigcup^n_{j=1}E_j\right\}) = \sum^n_{j=1} m^*(A\cap E_j)$$
とくに$A=\mathbb R$とおいて、$m(\sum^n_jE_j)=\sum^n_jm(E_j)$が成立する

### 補題（$\mathcal L$がσ代数であることの証明、σ加法性の証明）

$E_1,... \in \mathcal L$なら、$\bigcup_{n=1}^{\infty} E_n\in\mathcal L$である。さらに、$E_1,E_2,...$が互いに素なら$m(\sum^{\infty}_{n=1}E_n)=\sum^{\infty}_{n=1}m(E_n)$が成り立つ

### 補題（平行移動不変性の証明）

$E\in \mathcal L$なら、$E+x \in \mathcal L$で$m(E+x)=m(E)\;(\forall x\in \mathbb R)$である

### 補題（区間はルベーグ可測であることの証明）

任意の区間はルベーグ可測で$m(I) =|I|$である

## ルベーグ可測集合はドット絵

$E\subset \mathbb R^d$が測度有限なルベーグ可測集合であることと、任意の$\epsilon > 0$に対してある自然数$n$が存在して
$$m^*(E\Delta F)\le \epsilon$$
を満たすような、一辺の長さが$2^{-n}$であるような閉2進立方体の有限和集合$F$が存在することが同値である。ここで$\Delta$は対称差を表していて
$$E\Delta F=(E\setminus F)\cup (F\setminus E)$$
である。

イメージしやすいように$d=2$として２次元平面で考えると、**小さな正方形で測度をいくらでも近似できる**ということ。つまり、十分細かいドットを考えれば、それを使って図形を近似できているということなので、ドット絵のようになっているということ。

## 参考文献

- 谷島賢二(2015),『新版 ルベーグ積分と関数解析』, 朝倉書店
- 舟木 直久(監訳)／乙部 厳己(訳)(2016),『テレンス・タオ ルベーグ積分入門』, 朝倉書店