---
prev: false
next: false
---

# ブラケット

Diracが導入した記法で、縦複素ベクトルを
$$\ket{\psi} = \begin{pmatrix} \psi_1\\\psi_2\\\vdots\\\psi_n\end{pmatrix}$$
と書く。また、この双対ベクトルを$\bra{\psi}$と書く。つまり、
$$\bra{\psi}:\ket{\phi} \mapsto \braket{\psi,\phi}$$
をみたす線形写像のこと。ここで、$\braket{\psi,\phi}$は通常の内積で
$$\braket{\psi,\phi} = \sum_i\overline{\psi}_i\phi_i$$
で定義される。少し注意なのが、線形代数の本で内積を
$$\braket{v,u} =v^{\top}\overline u = \sum_i v_i\overline u_i$$
と定義していることがある（数学ではこれが普通らしい）。でも、ブラケットを使った表記では、
$$\braket{u,v}= \overline v^{\top}u$$
のように、複素共役も転置も片方のベクトルが担う。（この違いのせいで線形代数の期末で減点されました）

## モチベーション

「ブラケット」というのは括弧という意味。ブラケット自体は、内積を記述するときに
$$\braket{\psi,\phi} = \sum_i\overline{\psi}_i\phi_i$$
のように使うことがある。これを次のように分解して
$$\braket{\psi,\phi} \to \bra{\psi} \cdot \ket{\phi}$$
さらに、
$$\bra{\psi} = \overline {\ket{\psi}}^{\top}$$
とすることで、
$$\bra{\psi}\cdot \ket{\phi}=\overline{\ket{\psi}}^{\top} \ket{\phi}$$
のようにして内積を書くことができる。通常は間のドットを省略して、
$$\bra{\psi}\cdot \ket{\phi} = \braket{\psi|\phi}$$
と書く。

## 具体例

僕が初めてブラケットに出会ったときに混乱したのが、括弧の中に書いてある記号。この記号自体は本当になんでもよくて、
$$\ket{\star}, \ket{\Box}, \ket{\bigcirc}$$
とかでもいい。とにかく$\ket{\text -}$の記号があればベクトルを表現できる。

量子ビットについて考えると、
$$\ket 0=\begin{pmatrix}1\\0\end{pmatrix},\quad \ket 1 = \begin{pmatrix}0\\1\end{pmatrix}$$
などがよく使われる。また、量子ビット列を
$$\ket{000} = \begin{pmatrix}1\\0\\0\\0\\0\\0\\0\\0\end{pmatrix},\quad\ket{110}=\begin{pmatrix}0\\0\\0\\0\\0\\0\\1\\0\end{pmatrix}$$
と書く。$110$ を2進数と見ると6を表すので、7番目の要素が1になっている。プログラミング言語の配列のように、0から数えるので注意が必要。これはテンソル積を使うと、
$$\ket{110}=\ket{1}\otimes \ket{1}\otimes \ket{0}=\begin{pmatrix}0\\1\end{pmatrix} \otimes \begin{pmatrix}0\\1\end{pmatrix} \otimes \begin{pmatrix}1\\0\end{pmatrix}$$
と書ける。クロネッカー積を使って具体的に計算すれば上で書いた成分と一致することがわかる。

## 注意点

有限次元のベクトルを記述する分には曖昧さはない。定義は
$$\ket{\psi} = \begin{pmatrix}\psi_1\\\vdots \\ \psi_n\end{pmatrix}$$
$$\bra{\psi}=\begin{pmatrix}\overline{\psi_1} & \cdots \overline{\psi_n} \end{pmatrix}$$
として十分。

ただ、これが無限次元のベクトルになるとややこしいこともあるらしい。というのも、ヒルベルト空間のベクトルの双対ベクトルを考えたときに、それが元のヒルベルト空間をはみ出してしまうらしい。このようなことは連続スペクトルをもつような演算子の固有ベクトルについて考えるときに生じる（なので、位置演算子や運動量演算子などの連続量をもつ物理量の演算子を考えるときには問題になる）。

ブラケットについての注意がまとまっているスライドとして、

- [ブラケット記法の機微- 双対構造と内積構造](http://kir018304.kir.jp/nc/htdocs/?action=common_download_main&upload_id=203)

が参考になる。また、無限次元ベクトル空間で双対ベクトルを考えるときに重要になるRigged Hilbert Spaceについて、

- [Rigged Hilbert Space とブラケット記法](http://kir018304.kir.jp/nc/htdocs/?action=common_download_main&upload_id=204)
- [The role of the rigged Hilbert space in Quantum Mechanics](https://arxiv.org/abs/quant-ph/0502053)

などの資料があります（すべては読めてないです）。
