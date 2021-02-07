# React Shopping Cart

## 03

- 執行 react 連線: `npm start`

## 04

- 有列出每個功能所需時間
- github 使用&commit 教學

## 05

- 把 funciton 改寫成 react class (5'09)
- RCC: 直接列出 react 簡易 template 內容 (8'45)
- [google fonts](https://fonts.google.com/?selection.family=Montserrat&sidebar.open=true) import (18'48)

## 06

- 選單:
  ```js
  <select>
    <option value="">ALL</option>
  </select>
  ```

## 07

- 假如條件只判斷一種狀況，且沒有 else，那&&可以當作 then (22'10)

  ```js
  cartItems.length !== 0 && <div> blabla </div>;
  ```

- `>`: child combinator (22'51)
  E > F, 以 > 符號分隔 2 個選擇器,表示會套用在 F 元素是 E 元素的子代,如果 E 跟 F 中間還有其他的元素就不是子代了。[(ref)](https://powerfuleric.pixnet.net/blog/post/89523013)

## 08 記住上次選項

- localStorage 的使用 和 JSON 讀取寫入
  - localStorage.setItem: 更新 Storage (1'46) [(ref)](https://andy6804tw.github.io/2018/03/04/browser-localstorage/)
    這裡的更新就等於新增，每次呼叫就等於將資料暫存的內容重新刷新一次。
    - 將資料存入 Storage:
      ```js
      localStorage.setItem("todoList", JSON.stringify(data));
      ```
      其中，JSON.stringify(): 將任何物件轉變為 JSON 字串 [(ref)](https://medium.com/itsems-frontend/javascript-json-stringify-and-json-parse-7a1251d3824c)
    - JSON 變物件: JSON.parse() (3'02)
      可以接收 JSON 字串，轉為 Javascript 物件或是值。

## 09 Animation

- 安裝 react-reveal 使用特效(Fade): (2'15)

  - [react-reveal 官網](https://www.react-reveal.com/docs/cascade/)
  - code:　`<Fade bottom cascade></Fade>`
    - bottom: 從下而上滑動進入

- 安裝 react-modal 使用彈出視窗效果: (6'17)
- 把 package-lock 加到 gitignore (19'35)
  - 但此作法待議，網路上很多人建議 package-lock.json 不应写进 .gitignore

## 10 Build Products Backend

- async (11'00)
  - 非同步語法
- 安裝 mongoDB, postman
  - npm run server
  - 在 postman，選擇 GET，貼上 server 網址: http://localhost:5000/api/products
  - 在 postman，選擇 POST，貼上 server 網址: http://localhost:5000/api/products，在下方蘭位貼上 Data
