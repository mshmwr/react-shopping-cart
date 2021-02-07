# React Shopping Cart Note

- start the web: `npm start`

# Question

- 在 JS 裡面可以寫 HTML 語法!?;

# Step 3: Create React App

## grid

- [grid-template-areas](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-template-areas)
- [CSS-Grid 學習筆記](https://ithelp.ithome.com.tw/articles/10231044)

## CSS 字體單位

- [一次搞懂 CSS 字體單位：px、em、rem 和 %](https://www.oxxostudio.tw/articles/201809/css-font-size.html)

## 空間分配

- 置中

  - 內容的水平&垂直置中

    ```
    justify-content: center; /*水平置中*/
    align-items: center; /*垂直置中*/
    ```

  - 內容的平均分配&垂直置中
    ```
    justify-content: space-between; /*平均分配空間*/
    align-items: center; /*垂直置中*/
    ```

- 欄位均分空間: `flex: 1;`

# Step 4: Project Workflow

有列出做每個功能需要的時長

# Step 5

- [React 生命週期： 建立初期 constructor、componentDidMount](https://yakimhsu.com/project/project_w21_01_React_life_constructor.html)

  - constructor() & super()
    可以不写 constructor，一旦写了 constructor，就必须在此函数中写 super(),此时组件才有自己的 this，在组件的全局中都可以使用 this 关键字，否则如果只是 constructor 而不执行 super() 那么以后的 this 都是错的！！！[ref](https://www.cnblogs.com/faith3/p/9219446.html)

- flex: 1 5rem
  ```css
  /* 两个值: flex-grow | flex-basis */
  flex: 1 30px;
  ```
  [(ref)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)
  - flex-grow v.s. flex-basis [(ref)](https://ithelp.ithome.com.tw/articles/10208741)
    - flex-grow: 分配剩餘空間，值只有 1 或 0
    - flex-basis: 分配到的空間(數值後面要有單位)，flex-basis 會覆蓋 width
- [google fonts](https://fonts.google.com/?selection.family=Montserrat&sidebar.open=true)
  - import 教學: 18'48

# Step 7

- let v.s. const
  ES6 的語法。[(ref)](https://eyesofkids.gitbooks.io/react-basic-zh-tw/content/day05_es6_let_const/)
  - const 針對是常數的定義，常數在一宣告時就必定要指定給值，不然會產生錯誤。而對於常數在 ES6 的定義是:**不可再指定(can't re-assignment)**。指定的意思就是用等號(=)作指定運算，像下面這例子就是再指定值(或重覆指定值)，所以會產生錯誤。
  - let 使用於 for 語句
- cartItems.push({...product, count: 1});
  - TODO
- div:last-child
  偽類，最後一個子元素。
  [CSS 偽類 child 和 of-type](https://www.oxxostudio.tw/articles/201405/css-selector.html)
- filter(): (ES5, ES6 語法) 遍歷每個元素，回傳 true 時，目前的值會保留在陣列內，這會回傳一個新陣列，而不是修改原本的陣列。
- reduce(): (ES5, ES6 語法) 遍历数组，在每一项元素后面触发一个回调函数，经过计算返回一个累加的值。

# Step 8

- 使用 react-reveal 的 Fade 時，遇到**Module build failed (from ./node_modules/babel-loader/lib/index.js)**
  - 原因: babel 版本過舊
  - 解法: `npm install @babel/core @babel/preset-env`，並重新執行`npm start` [(ref)](https://stackoverflow.com/questions/56098779/how-to-fix-module-build-failed-from-node-modules-babel-loader-lib-index-js)

# Step 10

- async, await and promise:
  只要 function 標記為 async，就表示裡頭可以撰寫 await 的同步語法，而 await 顧名思義就是「等待」，它會確保一個 promise 物件都解決 ( resolve ) 或出錯 ( reject ) 後才會進行下一步，當 async function 的內容全都結束後，會返回一個 promise，這表示後方可以使用.then 語法來做連接。 [(ref)](https://www.oxxostudio.tw/articles/201908/js-async-await.html)

- 安裝 mongoDB, postman
  - npm run server
  - postman
    - 取得目前 JSON 內存放的內容：
      - 在 postman，開新的標籤，選擇 GET，貼上 server 網址: http://localhost:5000/api/products，按下 send
      - 第一次按 send 時，應該會得到`[]`，因為沒有新增任何項目
    - 在 JSON 內加入項目：
      - 在 postman，開新的標籤，，選擇 POST，貼上 server 網址: http://localhost:5000/api/products
        - 選擇下方標籤的 Body，在選擇下方的 raw，右方下拉選單的輸入格式選 JSON，貼上 data.json 中第一項商品內容，要把`_id`去掉(因為要使用自動產生的短網址)
        - 按下 Send 會得到新的`_id`
        - 可以回到 GET 頁面，重新按下 send，會看到新增上去的項目
    - 刪除 JSON 內的項目：
      - 在 postman，開新的標籤，選擇 DELETE，貼上 server 網址和想刪除的項目 id: http://localhost:5000/api/products/"id"

# Step 11

- [介紹 redux](https://chentsulin.github.io/redux/docs/api/applyMiddleware.html)
