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

## 置中
* 內容的水平&垂直置中
  ```
  justify-content: center; /*水平置中*/
  align-items: center; /*垂直置中*/
  ```

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
  
