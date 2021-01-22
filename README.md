# React Shopping Cart
## 03
* 執行react連線: `npm start`
## 04
* 有列出每個功能所需時間
* github使用&commit教學

## 05
* 把funciton改寫成react class (5'09)
* RCC: 直接列出react簡易template內容 (8'45)
* [google fonts](https://fonts.google.com/?selection.family=Montserrat&sidebar.open=true) import (18'48)

## 06
* 選單:
  ```js
  <select> 
    <option value="">ALL</option>
  </select>
  ```

## 07
* 假如條件只判斷一種狀況，且沒有else，那&&可以當作then (22'10)
  ```js
  cartItems.length !== 0 && <div> blabla </div>
  ```

* `>`: child combinator (22'51)
  E > F, 以 > 符號分隔2個選擇器,表示會套用在F元素是E元素的子代,如果E跟F中間還有其他的元素就不是子代了。[(ref)](https://powerfuleric.pixnet.net/blog/post/89523013)

## 08 記住上次選項
* localStorage的使用 和 JSON讀取寫入
  * localStorage.setItem: 更新 Storage (1'46) [(ref)](https://andy6804tw.github.io/2018/03/04/browser-localstorage/)
    這裡的更新就等於新增，每次呼叫就等於將資料暫存的內容重新刷新一次。
    * 將資料存入 Storage:
      ```js
      localStorage.setItem('todoList', JSON.stringify(data));
      ```
      其中，JSON.stringify(): 將任何物件轉變為 JSON 字串 [(ref)](https://medium.com/itsems-frontend/javascript-json-stringify-and-json-parse-7a1251d3824c)
    * JSON 變物件: JSON.parse() (3'02)
      可以接收 JSON 字串，轉為 Javascript 物件或是值。