# 特異値分解

英語だとSingular Value Decomposition
SVDともいう
線形代数の基本定理と呼ばれるくらい重要らしい（[出典](https://ogyahogya.hatenablog.com/entry/2019/12/30/%E7%89%B9%E7%95%B0%E5%80%A4%E5%88%86%E8%A7%A3)）

## 定義

いかなる行列も特異値分解によって3つの行列に分解できる。

階数$r$の任意の$n\times p$の行列$X$は
$$X=K\Lambda L^\top$$
のように分解できる。ここで$\Lambda$は
$$\Lambda = \begin{pmatrix}\lambda_1 & & \\ & \ddots &  \\ & & \lambda_r\end{pmatrix},\quad \lambda_1\ge \cdots\ge \lambda_r>0$$
で定義される$r\times r$行列である。$K$と$L^\top$はそれぞれ
$$K^\top K=I_r$$
$$L^\top L=I_r$$
を満たすような列直交行列である。ちなみに、$X$は$n\times p$行列なので、$K$は$n\times r$行列であり、$L^\top$は$r\times p$行列である。このような$L,K$はアイソメトリと呼ばれる。

**$\Lambda$は一意に定まり**、その成分$\lambda_i$を**特異値**という。特異値は大きいものから順番に並んでいることに注意する。

特異値がいずれも異なれば、$K,L$についても、**「各列事に符号を変える自由」を除いて一意**に定まる。つまり、$D_{\pm}$を対角成分が$1$か$-1$であるような行列としたときに、
$$K'=KD_{\pm},\quad L'=LD_\pm$$
としても、同様に
$$X=K\Lambda L^\top=K'\Lambda L'^\top$$
が成り立つ。

## SVDのありがたみ

- **任意の行列について定義できる**
- SVDは行列の主要な性質のコアにある
  - つまり、SVDから始めることで主要な性質を導けるということ

## スペクトル分解の拡張としてのSVD

ここでは[ブラケット](../../quantum/quantum-information/braket.md)を利用して記述している。個人的には見やすくていいと思う。

### 対称行列についてのスペクトル分解

対称行列$A$について、$\{\ket {u_i}\}$をその固有ベクトルとして、$\lambda_i$を固有値とすると、
$$A=\sum_i \lambda_i\ket {u_i}\bra{u_i}$$
とスペクトル分解できる。これを内積のように書くと
$$\begin{align}A &=\begin{pmatrix}\lambda_1\ket{u_1}&\cdots & \lambda_n\ket{u_n}\end{pmatrix}\begin{pmatrix}\bra{u_1} \\ \vdots \\ \bra{u_n}\end{pmatrix} \\ &= \begin{pmatrix}\ket{u_1}&\cdots & \ket{u_n}\end{pmatrix}\begin{pmatrix}\lambda_1 & & \\ & \ddots & \\ & & \lambda_n\end{pmatrix}\begin{pmatrix}\bra{u_1} \\ \vdots \\ \bra{u_n}\end{pmatrix}\end{align}$$
と書ける。この式は
$$U=\begin{pmatrix}\ket{u_1}&\cdots & \ket{u_n}\end{pmatrix}$$
$$\Lambda =\begin{pmatrix}\lambda_1 & & \\ & \ddots & \\ & & \lambda_n\end{pmatrix}$$
とおくと、
$$A=U\Lambda U^\top$$
と書き換えられる。このように書くと、

- $U$は適切な基底の取り替え
  - 適切な基底とは固有ベクトル
- $\Lambda$は固有ベクトル方向への伸び縮み

と考えたり、あるいは

- $U$は回転
- $\Lambda$は伸び縮み

を表していると考える事もできる。そもそも対称行列とは、演算子的な見方をすればこういう操作ができる行列のことである。（複素数版で考えればエルミート行列）

### 長方行列への拡張

任意の行列$A\in \mathbb R^{m\times n}$について、
$$A\ket v =\sigma \ket u,\quad \bra u A=\sigma \bra v,\quad (\sigma >0,\; \ket u\neq 0,\;\ket v \neq 0)$$
を満たすとき、$\sigma$のことを**特異値**、$\ket u$を**左特異ベクトル**、$\ket v$を**右特異ベクトル**という。このような組$(\sigma,\ket u,\ket v)$は$r(=\mathrm{rank}\; A)$個存在する。（重複も含めて？）
上記の式から、
$$A^\top A\ket v=\sigma A^\top\ket u=\sigma^2\ket v$$
$$AA^\top \ket u=\sigma A\ket v =\sigma^2\ket u$$
となる。つまり、

- $(\sigma^2, \ket v)$は$A^\top A$の固有値と固有ベクトル
- $(\sigma^2, \ket u)$は$AA^\top$の固有値と固有ベクトル
となっている。このことから、$\{\ket {v_i}\}_{i=1}^r$と$\{\ket {u_i}\}_{i=1}^r$がそれぞれ正規直交になるように取れて、それぞれ拡張することで$\mathbb R^n$と$\mathbb R^m$のCONSにすることができる。ちなみに、拡張すると
$$A^\top A\ket {v_i}=0,\quad(i=r+1,\cdots,n)$$
$$AA^\top \ket {u_i}=0,\quad (i=r+1,\cdots,m)$$
が成り立つ（$i=r+1,...,n$については固有ベクトルと直交しているから）。このことから、
- $A$は$\{\ket{v_i}\}_{i=1}^n$を$\sigma_1\ket{u_1},\cdots, \sigma_r\ket{u_r}$に写す
  - $i=r+1,\cdots n$については$0$に写すことになるから消える
- $A^\top$は$\{\ket {u_i}\}^m_{i=1}$を$\sigma_1 \ket{v_1},\cdots,\sigma_r \ket{v_r}$に写す
ということが言えて、そのことをベクトルを使って表現すると
$$A=\sigma_1\ket{u_1}\bra{v_1}+\cdots+\sigma_r\ket{u_r}\bra{v_r}$$
$$A^\top=\sigma_1\ket{v_1}\bra{u_1}+\cdots+\sigma_r\ket{v_r}\bra{u_r}$$
と書ける。これが特異値分解だけど、見栄えは良くないから行列積の形で書きたい。スペクトル分解のときと同様に内積の形で書くと、
$$\begin{align} A&=\begin{pmatrix}\sigma_1 \ket{u_1}&\cdots& \sigma_r\ket{u_r} \end{pmatrix}\begin{pmatrix}\bra{v_1} \\ \vdots \\ \bra{v_r}\end{pmatrix} \\ &= \begin{pmatrix}\ket{u_1}&\cdots& \ket{u_r} \end{pmatrix}\begin{pmatrix}\sigma_1 & & \\ & \ddots & \\ & & \sigma_r\end{pmatrix}\begin{pmatrix}\bra{v_1} \\ \vdots \\ \bra{v_r}\end{pmatrix}\end{align}$$
と書ける。それぞれ行列で
$$U=\begin{pmatrix}\ket{u_1}&\cdots& \ket{u_r} \end{pmatrix}$$
$$V^\top =\begin{pmatrix}\bra{v_1} \\ \vdots \\ \bra{v_r}\end{pmatrix}$$
$$\Sigma =\begin{pmatrix}\sigma_1 & & \\ & \ddots & \\ & & \sigma_r\end{pmatrix}$$
とおくと、
$$A=U\Sigma V^\top$$
となる。これでSVDの形が導けた。

## 参考文献

- 足立 浩平, 山本 倫生, 『主成分分析と因子分析 ―特異値分解を出発点として―』, 共立出版
- 金谷 健一, 『線形代数セミナー ―射影，特異値分解，一般逆行列―』, 共立出版