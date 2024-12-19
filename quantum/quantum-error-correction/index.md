---
prev: false
next: false
---

# 量子誤り訂正

量子情報をノイズから保護し、なるべく長い間情報を保持できるようにする営みのこと。

どの記事でも[ブラケット](../quantum-information/braket.md)や、[量子操作](../quantum-information/quantum-operation.md)の記法などを断りなく使う。

## 基本的な道具

当然量子情報の道具を使うので、そのへんについては[量子情報理論](../quantum-information/index.md)のほうを参照。中でも、

- [量子通信路](../quantum-information/quantum-channel.md)
- フィデリティ

などはよく出てくるかも。具体的な通信路として、

- t-qubitエラー
- Pauliエラー
- dephasingエラー
- depolarizingエラー
- erasureエラー

などが、エラーのモデルとして登場する。

それ以外だと、[群論](../../math/group-theory/index.md)の知識をよく使う。具体的な群として

- パウリ群
- クリフォード群
- シンプレクティック群

などが出てくる。

## 一般論

「量子誤り訂正」なるものについて一般に

- [量子誤り訂正符号](./quantum-error-correction-code.md)
- 量子誤り訂正の線形性
- 独立な量子通信路の訂正

などが基本的。そのうえで、

- QECC条件
- 量子誤り検出条件
- degenerate符号
- 符号距離

などが重要。

## スタビライザ符号

便利で扱いやすい量子誤り訂正符号のクラス。量子誤り訂正符号についての論文のほとんどはスタビライザの言葉で書かれているので必須の概念。古典誤り訂正における線形符号に対応している。

定義については、

- [スタビライザ](./stabilizer.md)
- ノーマライザ
- [スタビライザ符号](./stabilizer-code.md)

便利な道具として

- [binary symplectic表現](./binary-symplectic-representation.md)

## 具体的な符号

- 3-qubit符号
- 9-qubit符号
- Steane符号
- トポロジカル符号
- 表面符号
- カラー符号
- HGP符号

## 雑多な概念

- クリフォード階層
