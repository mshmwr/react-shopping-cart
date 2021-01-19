# React Shopping Cart Note
* start the web: `npm start`
# Question
* 在JS裡面可以寫HTML語法!?;
  

# Step 3: Create React App
## grid
* [grid-template-areas](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-template-areas)
* [CSS-Grid 學習筆記](https://ithelp.ithome.com.tw/articles/10231044)

## CSS 字體單位
* [一次搞懂 CSS 字體單位：px、em、rem 和 %](https://www.oxxostudio.tw/articles/201809/css-font-size.html)

## 空間分配
* 置中
  * 內容的水平&垂直置中
    ```
    justify-content: center; /*水平置中*/
    align-items: center; /*垂直置中*/
    ```
  
  * 內容的平均分配&垂直置中
    ```
    justify-content: space-between; /*平均分配空間*/
    align-items: center; /*垂直置中*/
    ```
* 欄位均分空間: `flex: 1;`
# Step 4: Project Workflow 
有列出做每個功能需要的時長

# Step 5
* [React 生命週期： 建立初期 constructor、componentDidMount](https://yakimhsu.com/project/project_w21_01_React_life_constructor.html)
  * constructor() & super()
  可以不写constructor，一旦写了constructor，就必须在此函数中写super(),此时组件才有自己的this，在组件的全局中都可以使用this关键字，否则如果只是constructor 而不执行 super() 那么以后的this都是错的！！！[ref](https://www.cnblogs.com/faith3/p/9219446.html)

* flex: 1 5rem
  ```css
  /* 两个值: flex-grow | flex-basis */
  flex: 1 30px;
  ```
  [ref](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)
  * flex-grow v.s. flex-basis [ref](https://ithelp.ithome.com.tw/articles/10208741)
    * flex-grow: 分配剩餘空間，值只有1或0
    *  flex-basis: 分配到的空間(數值後面要有單位)，flex-basis 會覆蓋 width
  
* [google fonts](https://fonts.google.com/?selection.family=Montserrat&sidebar.open=true)
  * import教學: 18'48
  
# Step 7
* let v.s. const
  ES6的語法。[ref](https://eyesofkids.gitbooks.io/react-basic-zh-tw/content/day05_es6_let_const/)
  * const針對是常數的定義，常數在一宣告時就必定要指定給值，不然會產生錯誤。而對於常數在ES6的定義是:__不可再指定(can't re-assignment)__。指定的意思就是用等號(=)作指定運算，像下面這例子就是再指定值(或重覆指定值)，所以會產生錯誤。
  * let使用於for語句
* cartItems.push({...product, count: 1});
  * TODO
* div:last-child
  偽類，最後一個子元素。
  [CSS 偽類 child 和 of-type](https://www.oxxostudio.tw/articles/201405/css-selector.html)
* filter(): (ES5, ES6語法) 遍歷每個元素，回傳 true 時，目前的值會保留在陣列內，這會回傳一個新陣列，而不是修改原本的陣列。
* reduce(): (ES5, ES6語法) 遍历数组，在每一项元素后面触发一个回调函数，经过计算返回一个累加的值。

