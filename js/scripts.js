Vue.component('auth', {
  data: function () {
    return {
      auth_menu: false
    }
  },
  methods: {
    authorized: function () {
      this.$root.auth = !this.$root.auth;
      this.$root.application = !this.$root.application;
    }
  },

  template: `
  <div class="auth_container">
    <div class="auth">
      <header>
          <div class="app_name">Smart Home</div>
          <nav>
            <div class="nav_item">Разработчик</div>
            <div class="nav_item">Помощь</div>
          </nav>
          <img @click="auth_menu = !auth_menu" src="pix/menu.png" class="auth_menu_icon">
      </header>

      <main>
        <div class="form">
          <p class="text">Войдите,<br>чтобы воспользоваться сeрвисом:</p>
          <input type="text" placeholder="Логин">
          <input type="password" placeholder="Пароль">
          <div @click="authorized" class="btn">Войти</div>
          <p class="small_text">Забыли пароль или логин? <a href="">Востановить</a></p>
        </div>
        <img src="pix/home2.png">
      </main>

      <footer><p>© Smart Home, 2020  Все права защищены</p></footer>
    </div>

    <transition name="fade_auth_menu">
    <div v-if="auth_menu" class="auth_menu">
      <div class="auth_menu_items">
        <div class="auth_menu_item">Разработчик</div>
        <div class="auth_menu_item">Помощь</div>
        <img @click="auth_menu = !auth_menu" src="pix/close.png">
      </div>
    </div>
    </transition>
  </div>
  `
});

Vue.component('app-menu', {
  data: function () {
    return {
      auth_menu: false
    }
  },
  methods: {
    unAuthorized: function () {
      this.$root.auth = !this.$root.auth;
      this.$root.application = !this.$root.application;
    },
    mainItem: function () {
      this.$root.livingRoom=false
      this.$root.mainPage=true
      this.$root.notificationsPage=false
      this.$root.bedRoom=false
      this.$root.kitchenPage=false
      this.$root.bathRoom=false
      this.$root.sensorsPage=false
      this.$root.isActive1=true
      this.$root.isActive2=false
      this.$root.isActive3=false
      this.$root.isActive4=false
      this.$root.isActive5=false
      this.$root.isActive6=false
      this.$root.isActive7=false
      this.$root.isActive8=false
      this.$root.remoteTV = false
      this.$root.remoteCond = false
    },
    livingRoomItem: function () {
      this.$root.livingRoom=true
      this.$root.mainPage=false
      this.$root.notificationsPage=false
      this.$root.bedRoom=false
      this.$root.kitchenPage=false
      this.$root.sensorsPage=false
      this.$root.bathRoom=false
      this.$root.isActive1=false
      this.$root.isActive2=true
      this.$root.isActive3=false
      this.$root.isActive4=false
      this.$root.isActive5=false
      this.$root.isActive6=false
      this.$root.isActive7=false
      this.$root.isActive8=false
      this.$root.remoteTV = false
      this.$root.remoteCond = false
    },
    notificationsItem: function () {
      this.$root.livingRoom=false
      this.$root.mainPage=false
      this.$root.notificationsPage=true
      this.$root.bedRoom=false
      this.$root.kitchenPage=false
      this.$root.bathRoom=false
      this.$root.sensorsPage=false
      this.$root.isActive1=false
      this.$root.isActive2=false
      this.$root.isActive3=false
      this.$root.isActive4=false
      this.$root.isActive5=false
      this.$root.isActive6=false
      this.$root.isActive7=true
      this.$root.isActive8=false
      this.$root.remoteTV = false
      this.$root.remoteCond = false
    },
    bedRoomItem: function () {
      this.$root.livingRoom=false
      this.$root.mainPage=false
      this.$root.notificationsPage=false
      this.$root.bedRoom=true
      this.$root.kitchenPage=false
      this.$root.bathRoom=false
      this.$root.sensorsPage=false
      this.$root.isActive1=false
      this.$root.isActive2=false
      this.$root.isActive3=true
      this.$root.isActive4=false
      this.$root.isActive5=false
      this.$root.isActive6=false
      this.$root.isActive7=false
      this.$root.isActive8=false
      this.$root.remoteTV = false
      this.$root.remoteCond = false
    },
    kitchenPageItem: function () {
      this.$root.livingRoom=false
      this.$root.mainPage=false
      this.$root.notificationsPage=false
      this.$root.bedRoom=false
      this.$root.kitchenPage=true
      this.$root.bathRoom=false
      this.$root.sensorsPage=false
      this.$root.isActive1=false
      this.$root.isActive2=false
      this.$root.isActive3=false
      this.$root.isActive4=true
      this.$root.isActive5=false
      this.$root.isActive6=false
      this.$root.isActive7=false
      this.$root.isActive8=false
      this.$root.remoteTV = false
      this.$root.remoteCond = false
    },
    bathRoomItem: function () {
      this.$root.livingRoom=false
      this.$root.mainPage=false
      this.$root.notificationsPage=false
      this.$root.bedRoom=false
      this.$root.bathRoom=true
      this.$root.sensorsPage=false
      this.$root.kitchenPage=false
      this.$root.isActive1=false
      this.$root.isActive2=false
      this.$root.isActive3=false
      this.$root.isActive4=false
      this.$root.isActive5=true
      this.$root.isActive6=false
      this.$root.isActive7=false
      this.$root.isActive8=false
      this.$root.remoteTV = false
      this.$root.remoteCond = false
    },
    sensorsPageItem: function () {
      this.$root.livingRoom=false
      this.$root.mainPage=false
      this.$root.notificationsPage=false
      this.$root.bedRoom=false
      this.$root.bathRoom=false
      this.$root.sensorsPage=true
      this.$root.kitchenPage=false
      this.$root.isActive1=false
      this.$root.isActive2=false
      this.$root.isActive3=false
      this.$root.isActive4=false
      this.$root.isActive5=false
      this.$root.isActive6=true
      this.$root.isActive7=false
      this.$root.isActive8=false
      this.$root.remoteTV = false
      this.$root.remoteCond = false
    },
    hideAppMenu: function () {
      $('.menu').css('left', '-280px');
    }
  },

  template: `
  <div class="menu">
    <div class="logo">
      <div>Smart Home</div>
      <img @click="hideAppMenu" class="menu_cross" src="pix/close.png">
    </div>

    <div class="menu_items">
      <div class="menu_item_wrapper"><img src=pix/home.png><span class="menu_item" v-bind:class="{menu_item__active: this.$root.isActive1}" @click="mainItem">Главная</span></div>
      <div class="line"></div>
      <div class="menu_item_wrapper"><img src=pix/livingroom.png><span class="menu_item" v-bind:class="{menu_item__active: this.$root.isActive2}" @click="livingRoomItem">Гостиная</span></div>
      <div class="menu_item_wrapper"><img src=pix/bedroom.png><span class="menu_item" v-bind:class="{menu_item__active: this.$root.isActive3}" @click="bedRoomItem">Спальня</span></div>
      <div class="menu_item_wrapper"><img src=pix/kitchen.png><span class="menu_item" v-bind:class="{menu_item__active: this.$root.isActive4}" @click="kitchenPageItem">Кухня</span></div>
      <div class="menu_item_wrapper"><img src=pix/bathroom.png><span class="menu_item" v-bind:class="{menu_item__active: this.$root.isActive5}" @click="bathRoomItem">Ванная</span></div>
      <div class="line"></div>
     <div class="menu_item_wrapper"><img src=pix/sensors.png><span class="menu_item"  v-bind:class="{menu_item__active: this.$root.isActive6}" @click="sensorsPageItem">Датчики</span></div>
      <div class="menu_item_wrapper"><img src=pix/notifications.png><span class="menu_item" v-bind:class="{menu_item__active: this.$root.isActive7}" @click="notificationsItem">Уведомления</span></div>
      <div class="line"></div>
      <div class="menu_item_wrapper"><img src=pix/settings.png><span class="menu_item">Настройки</span></div>
    </div>

    <div class="logout_block">
      <div class="user_name">Николай</div>
      <div @click="unAuthorized" class="logout">
        <span>выйти</span>
        <img src="pix/logout.png">
      </div>
    </div>
  </div>
  `
});

Vue.component('remote-tv', {
  data: function () {
    return {
    }
  },
  methods: {
    hideRemote: function () {
      this.$root.remoteTV = !this.$root.remoteTV
    }
  },

  template: `
  <transition name="fade">
    <div class="remote">
      <div class="remote_top">
          <img class="on_off" src="pix/power.png">

          <img class="remote_btn" src="pix/blackmenu.png">

          <img class="remote_btn" src="pix/home.png">

          <img class="remote_btn" src="pix/return-arrow.png">
      </div>

      <div class="remote_mid">
        <img class="next next_left" src="pix/next.png">
        <div class="remote_mid_mid">
          <img class="next next_up" src="pix/next.png">
          <div class="ok_btn">OK</div>
          <img class="next next_down" src="pix/next.png">
        </div>
        <img class="next next_right" src="pix/next.png">
      </div>

      <div class="remote_bot">
        <div class="vert">
          <img class="next next_up" src="pix/next.png">
          <span>Vol</span>
          <img class="next next_down" src="pix/next.png">
        </div>

        <img class="mute" src="pix/mute.png">

        <div class="vert">
          <img class="next next_up" src="pix/next.png">
          <span>Ch</span>
          <img class="next next_down" src="pix/next.png">
        </div>
      </div>

      <img @click="hideRemote" class="remote_close" src="pix/close.png">
    </div>
  </transition>
  `
});

Vue.component('remote-cond', {
  data: function () {
    return {
    }
  },
  methods: {
    hideRemote: function () {
      this.$root.remoteCond = false
    }
  },

  template: `
  <transition name="fade">
    <div class="remote_cond">
      <div class="remote_cond_themp">
        <div class="remote_cond_themp_value">28</div>
        <div class="remote_cond_themp_sign">°C</div>
      </div>

      <div class="remote_cond_mode">Какой-то режим</div>

      <div class="remote_cond_status">
        <div>Нормальная</div>
        <div>Вниз</div>
        <div>Неподвижно</div>
      </div>

      <div class="remote_cond_control">
        <div class="remote_cond_control_top">
          <div><img class="power" src="pix/power.png"></div>
          <div>Режим</div>
        </div>

        <div class="remote_cond_control_mid">
          <div class="minus">-</div>
          <div>Температура</div>
          <div class="plus">+</div>
        </div>

        <div class="remote_cond_control_bot">
          <div>Скорость</div>
          <div>Направление</div>
          <div>Качание</div>
        </div>
      </div>

      <img @click="hideRemote" class="remote_close" src="pix/close.png">
    </div>
  </transition>
  `
});

var app = new Vue({
  el: '#app',
  data: {
    /* auth */
    auth: true,

    /* application */
    application: false,
    app_menu: false,
    devices: false,
    isActive1: true,
    isActive2: false,
    isActive3: false,
    isActive4: false,
    isActive5: false,
    isActive6: false,
    isActive7: false,
    isActive8: false,

    /* Страницы */
    main_page: true,
    mainPage: true,
    livingRoom: false,
    bedRoom: false,
    kitchenPage: false,
    bathRoom: false,
    notificationsPage: false,
    sensorsPage: false,

    /* Главная */
    thempValueMain: 24,
    thempStatusMain: 'В норме',
    thempMainLow: false,
    thempMainHi: false,
    gasStatusMain: 'Выкл',
    common_device_door1: true,
    lightStatusMain: 'Вкл',
    door1: true,
    door2: false,
    water: true,
    elec: true,
    gas: false,
    fan: false,
    curtains: true,
    lightMain: true,
    waterStatusMain: 'В норме',
    lightMainOff: false,

    /* Гостиная */
    smartTVLiving: true,
    fanLiving: false,
    curtainsLiving: true,
    thempValueLiving: 20,
    thempStatusLiving: 'В норме',
    thempLivingLow: false,
    thempLivingHi: false,
    lightLivingOff: false,
    lightStatusLiving: 'Вкл',
    lightLiving1: false,
    lightLiving2 : true,
    arrowUp1: false,
    arrowUp2: false,
    lightControlLiving1: false,
    lightControlLiving2: false,

    /* Спальня */
    thempValueBed: 21,
    thempStatusBed: 'В норме',
    thempBedLow: false,
    thempBedHi: false,
    fanBed: false,
    curtainsBed: true,
    light1Bed: false,
    light2Bed: true,
    smartTVBed: false,
    conditioner: false,
    lightControl1Bed: false,
    arrowUp1Bed: false,
    lightControl2Bed: false,
    arrowUp2Bed: false,
    lightBedOff: false,
    lightStatusBed: 'Вкл',

    /* Кухня */
    thempValueKitchen: 23,
    thempStatusKitchen: 'В норме',
    thempKitchenLow: false,
    thempKitchenHi: false,
    fanKitchen: false,
    curtainsKitchen: true,
    lightKitchen: false,
    tvKitchen: false,
    kettleKitchen: true,
    kettleControlKitchen: false,
    lightKitchenOff: true,
    lightStatusKitchen: 'Выкл',
    arrowUpKitchen: false,

    /* Ванная */
    thempValueBath: 23,
    thempStatusBath: 'В норме',
    thempBathLow: false,
    thempBathHi: false,
    fanBath: false,
    lightBath: true,
    lightBathOff: false,
    lightStatusBath: 'Вкл',
    boilerValue : 23,
    boilerStatus : 'В норме',
    boilerLow : false,
    boilerHi : false,

    /* Уведомления и уведомления справа */
    notifThempRight: false,
    notifDoorsRight: false,
    notifWaterRight: false,
    notifGasRight: false,
    notifElecRight: false,

    notifThemp: false,
    notifDoors: true,
    notifWater: false,
    notifGas: true,
    notifElec: false,

    /* additional */
    remoteTV: false,
    remoteCond: false
  },
  methods: {
    /* Уведомления */
    alertThemp: function () {
      if (((this.thempValueMain >= 25) || (this.thempValueLiving >= 25) || (this.thempValueBed >= 25) || (this.thempValueKitchen >= 25) || (this.thempValueBath >= 25)) || ((this.thempValueMain <= 19) || (this.thempValueLiving <= 19) || (this.thempValueBed <= 19) || (this.thempValueKitchen <= 19) || (this.thempValueBath <= 19))) {
          this.notifications = true
          this.notifThemp = true
          this.notifThempRight = true
      } else if (((this.thempValueMain > 19) && (this.thempValueMain < 25)) || ((this.thempValueLiving > 19) && (this.thempValueLiving < 25)) || ((this.thempValueBed > 19) && (this.thempValueBed < 25)) || ((this.thempValueKitchen > 19) && (this.thempValueKitchen < 25)) || ((this.thempValueBath > 19) && (this.thempValueBath < 25))) {
          this.notifThemp = false
          this.notifThempRight = false
      }
    },

    /* Уведомления */
    showAppMenu: function () {
      $('.menu').css('left', '0');
    },
    doorChange1: function() {
      this.door1 = !this.door1
      if ((this.door1 === true) || (this.door2 === true)) {
        this.notifDoorsRight = true
        this.notifDoors = true
      } else if ((this.door1 === false) && (this.door2 === false)) {
        this.notifDoorsRight = false
        this.notifDoors = false
      }
    },
    doorChange2: function() {
      this.door2 = !this.door2
      if ((this.door1 === true) || (this.door2 === true)) {
        this.notifDoorsRight = true
        this.notifDoors = true
      } else if ((this.door1 === false) && (this.door2 === false)) {
        this.notifDoorsRight = false
        this.notifDoors = false
      }
    },
    statusMain: function () {
      this.alertThemp();
      this.thempValueLiving = this.thempValueMain
      this.thempValueBed = this.thempValueMain
      this.thempValueKitchen = this.thempValueMain
      this.thempValueBath = this.thempValueMain

      if (this.thempValueMain >= 25) {
        this.thempStatusMain = 'Высокая'
        this.thempMainLow = false
        this.thempMainHi = true

        this.thempStatusLiving = 'Высокая'
        this.thempLivingLow = false
        this.thempLivingHi = true

        this.thempStatusBed = 'Высокая'
        this.thempBedLow = false
        this.thempBedHi = true

        this.thempStatusKitchen = 'Высокая'
        this.thempKitchenLow = false
        this.thempKitchenHi = true

        this.thempStatusBath = 'Высокая'
        this.thempBathLow = false
        this.thempBathHi = true
      } else if (this.thempValueMain <= 19) {
        this.thempStatusMain = 'Низкая'
        this.thempMainLow = true
        this.thempMainHi = false

        this.thempStatusLiving = 'Низкая'
        this.thempLivingLow = true
        this.thempLivingHi = false

        this.thempStatusBed = 'Низкая'
        this.thempBedLow = true
        this.thempBedHi = false

        this.thempStatusKitchen = 'Низкая'
        this.thempKitchenLow = true
        this.thempKitchenHi = false

        this.thempStatusBath = 'Низкая'
        this.thempBathLow = true
        this.thempBathHi = false
      } else if ((this.thempValueMain > 19) && (this.thempValueMain < 25)) {
        this.thempStatusMain = 'В норме'
        this.thempMainLow = false
        this.thempMainHi = false

        this.thempStatusLiving = 'В норме'
        this.thempLivingLow = false
        this.thempLivingHi = false

        this.thempStatusBed = 'В норме'
        this.thempBedLow = false
        this.thempBedHi = false

        this.thempStatusKitchen = 'В норме'
        this.thempKitchenLow = false
        this.thempKitchenHi = false

        this.thempStatusBath = 'В норме'
        this.thempBathLow = false
        this.thempBathHi = false
      }
    },
    waterChangeMain: function () {
      this.water = !this.water
      if (this.water === true) {
        this.waterStatusMain = 'В норме'
        this.notifWaterRight = false
        this.notifWater = false
      } else {
        this.waterStatusMain = 'Выкл'
        this.notifWaterRight = true
        this.notifWater = true        
      }
    },
    elecChange: function () {
      this.elec = !this.elec
      if (this.elec === false) {
        this.smartTVLiving = false
        this.smartTVBed = false
        this.conditioner = false
        this.tvKitchen = false
        this.kettleKitchen = false
        this.notifElecRight = true
        this.notifElec = true
      } else {
        this.notifElecRight = false
        this.notifElec = false
      }
    },
    gasChangeMain: function () {
      this.gas = !this.gas
      if (this.gas === true) {
        this.gasStatusMain = 'В норме'
        this.notifGasRight = false
        this.notifGas = false        
      } else {
        this.notifGasRight = true
        this.notifGas = true  
        this.gasStatusMain = 'Выкл'
      }
    },
    lightChangeMain: function () {
      this.lightMain = !this.lightMain
      if (this.lightMain === true) {
        this.lightStatusMain = 'Вкл'
      } else this.lightStatusMain = 'Выкл'
    },

    /* Гостиная */

    showRemoteLiving: function () {
      if (this.smartTVLiving === true) {
          this.$root.remoteTV = true;
      }
    },
    changeLightLiving1: function () {
      this.lightLiving1 = !this.lightLiving1
      if ((this.lightLiving1 === false) && (this.lightLiving2 === false)){
        this.lightLivingOff = true;
        this.lightStatusLiving = 'Выкл';
      }
      if ((this.lightLiving1 === true) || (this.lightLiving2 === true)){
        this.lightLivingOff = false;
        this.lightStatusLiving = 'Вкл';
      }
      if ((this.lightLivingOff === false) || (this.lightBedOff === false) || (this.lightKitchenOff === false) || (this.lightBathOff === false)) {
        this.lightMainOff = false
        this.lightStatusMain = 'Вкл'
      }
      if ((this.lightLivingOff === true) && (this.lightBedOff === true) && (this.lightKitchenOff === true) && (this.lightBathOff === true)) {
        this.lightMainOff = true
        this.lightStatusMain = 'Выкл'
      }
    },
    changeLightLiving2: function () {
      this.lightLiving2 = !this.lightLiving2
      if ((this.lightLiving1 === false) && (this.lightLiving2 === false)){
        this.lightLivingOff = true;
        this.lightStatusLiving = 'Выкл';
      }
      if ((this.lightLiving1 === true) || (this.lightLiving2 === true)){
        this.lightLivingOff = false;
        this.lightStatusLiving = 'Вкл';
      }
      if ((this.lightLivingOff === false) || (this.lightBedOff === false) || (this.lightKitchenOff === false) || (this.lightBathOff === false)) {
        this.lightMainOff = false
        this.lightStatusMain = 'Вкл'
      }
      if ((this.lightLivingOff === true) && (this.lightBedOff === true) && (this.lightKitchenOff === true) && (this.lightBathOff === true)) {
        this.lightMainOff = true
        this.lightStatusMain = 'Выкл'
      }
    },
    hideRemoteLiving: function () {
      if (this.elec === true) {
          this.smartTVLiving = !this.smartTVLiving
      }
      if (this.$root.remoteTV === true) {
          this.$root.remoteTV = false;
      }
    },
    statusLiving: function () {
      this.alertThemp();
      if (this.thempValueLiving >= 25) {
        this.thempStatusLiving = 'Высокая'
        this.thempLivingLow = false
        this.thempLivingHi = true
      } else if (this.thempValueLiving <= 19) {
        this.thempStatusLiving = 'Низкая'
        this.thempLivingLow = true
        this.thempLivingHi = false
      } else if ((this.thempValueLiving > 19) && (this.thempValueLiving < 25)) {
        this.thempStatusLiving = 'В норме'
        this.thempLivingLow = false
        this.thempLivingHi = false
      }
    },

    /* Спальня */

    statusBed: function () {
      this.alertThemp();
      if (this.thempValueBed >= 25) {
        this.thempStatusBed = 'Высокая'
        this.thempBedLow = false
        this.thempBedHi = true
      } else if (this.thempValueBed <= 19) {
        this.thempStatusBed = 'Низкая'
        this.thempBedLow = true
        this.thempBedHi = false
      } else if ((this.thempValueBed > 19) && (this.thempValueBed < 25)) {
        this.thempStatusBed = 'В норме'
        this.thempBedLow = false
        this.thempBedHi = false
      }
    },
    changeLightBed1: function () {
      this.light1Bed = !this.light1Bed
      if ((this.light1Bed === false) && (this.light2Bed === false)){
        this.lightBedOff = true;
        this.lightStatusBed = 'Выкл';
      }
      if ((this.light1Bed === true) || (this.light2Bed === true)){
        this.lightBedOff = false;
        this.lightStatusBed = 'Вкл';
      }
      if ((this.lightLivingOff === false) || (this.lightBedOff === false) || (this.lightKitchenOff === false) || (this.lightBathOff === false)) {
        this.lightMainOff = false
        this.lightStatusMain = 'Вкл'
      }
      if ((this.lightLivingOff === true) && (this.lightBedOff === true) && (this.lightKitchenOff === true) && (this.lightBathOff === true)) {
        this.lightMainOff = true
        this.lightStatusMain = 'Выкл'
      }
    },
    changeLightBed2: function () {
      this.light2Bed = !this.light2Bed
      if ((this.light1Bed === false) && (this.light2Bed === false)){
        this.lightBedOff = true;
        this.lightStatusBed = 'Выкл';
      }
      if ((this.light1Bed === true) || (this.light2Bed === true)){
        this.lightBedOff = false;
        this.lightStatusBed = 'Вкл';
      }
      if ((this.lightLivingOff === false) || (this.lightBedOff === false) || (this.lightKitchenOff === false) || (this.lightBathOff === false)) {
        this.lightMainOff = false
        this.lightStatusMain = 'Вкл'
      }
      if ((this.lightLivingOff === true) && (this.lightBedOff === true) && (this.lightKitchenOff === true) && (this.lightBathOff === true)) {
        this.lightMainOff = true
        this.lightStatusMain = 'Выкл'
      }
    },
    showRemoteTVBed: function () {
      if (this.smartTVBed === true) {
          this.$root.remoteTV = true;
      }
    },
    hideRemoteTVBed: function () {
      if (this.elec === true) {
        this.smartTVBed = !this.smartTVBed
      }
      if (this.$root.remoteTV === true) {
          this.$root.remoteTV = false;
      }
    },
    showRemoteCond: function () {
      if (this.conditioner === true) {
          this.$root.remoteCond = true;
      }
    },
    hideRemoteCond: function () {
      if (this.elec === true) {
        this.conditioner = !this.conditioner
      }
      if (this.$root.remoteCond === true) {
          this.$root.remoteCond = false;
      }
    },

    /* Кухня */

    statusKitchen: function () {
      this.alertThemp();
      if (this.thempValueKitchen >= 25) {
        this.thempStatusKitchen = 'Высокая'
        this.thempKitchenLow = false
        this.thempKitchenHi = true
      } else if (this.thempValueKitchen <= 19) {
        this.thempStatusKitchen = 'Низкая'
        this.thempKitchenLow = true
        this.thempKitchenHi = false
      } else if ((this.thempValueKitchen > 19) && (this.thempValueKitchen < 25)) {
        this.thempStatusKitchen = 'В норме'
        this.thempKitchenLow = false
        this.thempKitchenHi = false
      }
    },
    changeTVKitchen: function () {
      if (this.elec === true) {
          this.tvKitchen = !this.tvKitchen
      }
    },
    changeKettleKitchen: function () {
      if (this.elec === true) {
          this.kettleKitchen = !this.kettleKitchen
      }
    },
    changeLightKitchen: function () {
      this.lightKitchen = !this.lightKitchen
      if (this.lightKitchen === false) {
        this.lightKitchenOff = true;
        this.lightStatusKitchen = 'Выкл';
      }
      if (this.lightKitchen === true) {
        this.lightKitchenOff = false;
        this.lightStatusKitchen = 'Вкл';
      }
      if ((this.lightLivingOff === false) || (this.lightBedOff === false) || (this.lightKitchenOff === false) || (this.lightBathOff === false)) {
        this.lightMainOff = false
        this.lightStatusMain = 'Вкл'
      }
      if ((this.lightLivingOff === true) && (this.lightBedOff === true) && (this.lightKitchenOff === true) && (this.lightBathOff === true)) {
        this.lightMainOff = true
        this.lightStatusMain = 'Выкл'
      }
    },

    /* Ванная */

    statusBath: function () {
      this.alertThemp();
      if (this.thempValueBath >= 25) {
        this.thempStatusBath = 'Высокая'
        this.thempBathLow = false
        this.thempBathHi = true
      } else if (this.thempValueBath <= 19) {
        this.thempStatusBath = 'Низкая'
        this.thempBathLow = true
        this.thempBathHi = false
      } else if ((this.thempValueBath > 19) && (this.thempValueBath < 25)) {
        this.thempStatusBath = 'В норме'
        this.thempBathLow = false
        this.thempBathHi = false
      }
    },
    boilStatus: function () {
      if (this.boilerValue >= 25) {
        this.boilerStatus = 'Высокая'
        this.boilerLow = false
        this.boilerHi = true
      } else if (this.boilerValue <= 19) {
        this.boilerStatus = 'Низкая'
        this.boilerLow = true
        this.boilerHi = false
      } else if ((this.boilerValue > 19) && (this.boilerValue < 25)) {
        this.boilerStatus = 'В норме'
        this.boilerLow = false
        this.boilerHi = false
      }
    },
    changeLightBath: function () {
      this.lightBath = !this.lightBath
      if (this.lightBath === false) {
        this.lightBathOff = true;
        this.lightStatusBath = 'Выкл';
      }
      if (this.lightBath === true) {
        this.lightBathOff = false;
        this.lightStatusBath = 'Вкл';
      }
      if ((this.lightLivingOff === false) || (this.lightBedOff === false) || (this.lightKitchenOff === false) || (this.lightBathOff === false)) {
        this.lightMainOff = false
        this.lightStatusMain = 'Вкл'
      }
      if ((this.lightLivingOff === true) && (this.lightBedOff === true) && (this.lightKitchenOff === true) && (this.lightBathOff === true)) {
        this.lightMainOff = true
        this.lightStatusMain = 'Выкл'
      }
    },
    turnOffAllLight: function () {
      this.lightMainOff = true
      this.lightStatusMain = 'Выкл'

      this.lightLivingOff = true
      this.lightStatusLiving = 'Выкл'

      this.lightBedOff = true
      this.lightStatusBed = 'Выкл'

      this.lightKitchenOff = true
      this.lightStatusKitchen = 'Выкл'

      this.lightBathOff = true
      this.lightStatusBath = 'Выкл'

      this.lightLiving1 = false
      this.lightLiving2 = false
      this.light1Bed = false
      this.light2Bed = false
      this.lightKitchen = false
      this.lightBath = false
    }
  }
})
