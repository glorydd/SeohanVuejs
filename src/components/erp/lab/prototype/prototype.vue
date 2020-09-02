<template>
  <div class="container" id="app">
    <div class="row">
      <div class="col-6 " align="left">
        <button class="btn btn-success btn-lg"
                type="button"
                id="linkProtoLocaAlarm"
        >시작품 출고 목록
        </button>
      </div>
      <div class="col-6" >
        <button
          class="btn btn-primary btn-lg  text-right"
          type="button"
          id="linkProtoWarehouse"
        >시작품 재고 현황
        </button>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>
