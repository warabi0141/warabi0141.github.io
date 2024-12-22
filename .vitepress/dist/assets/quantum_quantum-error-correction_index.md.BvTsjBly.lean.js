import{_ as i,c as l,a2 as e,o as t}from"./chunks/framework.BQmytedh.js";const d=JSON.parse('{"title":"量子誤り訂正","description":"","frontmatter":{"prev":false,"next":false},"headers":[],"relativePath":"quantum/quantum-error-correction/index.md","filePath":"quantum/quantum-error-correction/index.md","lastUpdated":1734597328000}'),r={name:"quantum/quantum-error-correction/index.md"};function n(o,a,u,h,p,m){return t(),l("div",null,a[0]||(a[0]=[e('<h1 id="量子誤り訂正" tabindex="-1">量子誤り訂正 <a class="header-anchor" href="#量子誤り訂正" aria-label="Permalink to &quot;量子誤り訂正&quot;">​</a></h1><p>量子情報をノイズから保護し、なるべく長い間情報を保持できるようにする営みのこと。</p><p>どの記事でも<a href="./../quantum-information/braket.html">ブラケット</a>や、<a href="./../quantum-information/quantum-operation.html">量子操作</a>の記法などを断りなく使う。</p><h2 id="基本的な道具" tabindex="-1">基本的な道具 <a class="header-anchor" href="#基本的な道具" aria-label="Permalink to &quot;基本的な道具&quot;">​</a></h2><p>当然量子情報の道具を使うので、そのへんについては<a href="./../quantum-information/">量子情報理論</a>のほうを参照。中でも、</p><ul><li><a href="./../quantum-information/quantum-channel.html">量子通信路</a></li><li>フィデリティ</li></ul><p>などはよく出てくるかも。具体的な通信路として、</p><ul><li>t-qubitエラー</li><li>Pauliエラー</li><li>dephasingエラー</li><li>depolarizingエラー</li><li>erasureエラー</li></ul><p>などが、エラーのモデルとして登場する。</p><p>それ以外だと、<a href="./../../math/group-theory/">群論</a>の知識をよく使う。具体的な群として</p><ul><li>パウリ群</li><li>クリフォード群</li><li>シンプレクティック群</li></ul><p>などが出てくる。</p><h2 id="一般論" tabindex="-1">一般論 <a class="header-anchor" href="#一般論" aria-label="Permalink to &quot;一般論&quot;">​</a></h2><p>「量子誤り訂正」なるものについて一般に</p><ul><li><a href="./quantum-error-correction-code.html">量子誤り訂正符号</a></li><li>量子誤り訂正の線形性</li><li>独立な量子通信路の訂正</li></ul><p>などが基本的。そのうえで、</p><ul><li>QECC条件</li><li>量子誤り検出条件</li><li>degenerate符号</li><li>符号距離</li></ul><p>などが重要。</p><h2 id="スタビライザ符号" tabindex="-1">スタビライザ符号 <a class="header-anchor" href="#スタビライザ符号" aria-label="Permalink to &quot;スタビライザ符号&quot;">​</a></h2><p>便利で扱いやすい量子誤り訂正符号のクラス。量子誤り訂正符号についての論文のほとんどはスタビライザの言葉で書かれているので必須の概念。古典誤り訂正における線形符号に対応している。</p><p>定義については、</p><ul><li><a href="./stabilizer.html">スタビライザ</a></li><li>ノーマライザ</li><li><a href="./stabilizer-code.html">スタビライザ符号</a></li></ul><p>便利な道具として</p><ul><li><a href="./binary-symplectic-representation.html">binary symplectic表現</a></li></ul><h2 id="具体的な符号" tabindex="-1">具体的な符号 <a class="header-anchor" href="#具体的な符号" aria-label="Permalink to &quot;具体的な符号&quot;">​</a></h2><ul><li>3-qubit符号</li><li>9-qubit符号</li><li>Steane符号</li><li>トポロジカル符号</li><li>表面符号</li><li>カラー符号</li><li>HGP符号</li></ul><h2 id="雑多な概念" tabindex="-1">雑多な概念 <a class="header-anchor" href="#雑多な概念" aria-label="Permalink to &quot;雑多な概念&quot;">​</a></h2><ul><li>クリフォード階層</li></ul>',28)]))}const s=i(r,[["render",n]]);export{d as __pageData,s as default};