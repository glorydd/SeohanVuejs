<template>
  <div id="itDamage" class="container">
    등록
    <div id="insertForm" class="col-xs-12 col-sm-12">
      <div class="panel panel-default">

        <div class="btn-group" role="group" aria-label="Fact Group">
          <button type="button" class="btn btn-secondary" v-model="fact" v-for="data in factList" v-bind:key="data.asgub" v-bind:value="data.fact"> {{data.factnm}}</button>
        </div>

        <div class="btn-group" role="group" aria-label="Fact Group">
          <button type="button" class="btn btn-secondary" v-for="wrkct in wrkctList" v-bind:key="wrkct.wrkct" v-bind:value="wrkct.wrkct"> {{ wrkct.wrkct }}-{{ wrkct.wrkds }} </button>
        </div>

<!--          <div class="input-group">-->
<!--            <label for="wrkct">라인</label>-->
<!--            <select class="form-control" id="wrkct" v-model="wrkct" required>-->
<!--								 <option selected value="null">라인</option>-->
<!--                <option v-for="wrkct in wrkctList" v-bind:key="wrkct.wrkct" v-bind:value="wrkct.wrkct" >{{ wrkct.wrkct }}-{{ wrkct.wrkds }}</option>-->
<!--						</select>-->
<!--          </div>-->

        <div class="btn-group" role="group" aria-label="Error Type">
          <button type="button" class="btn btn-secondary" v-model="class1" v-for="data in class1List" v-bind:key="data.asgub" v-bind:value="data.asgub + '-' + data.asdes"> {{ data.asdes }} </button>
        </div>

          <div class="input-group">
            <input class="form-control" type="tel" id="rtel" v-model="rtel" placeholder="010-1234-5678" required/>
          </div>

          <div class="input-group">
            <input class="form-control" type="text" id="rtxt" v-model="rtxt" required />
          </div>

          <div class="input-group">
            <input class="form-control"  type="file" id="file" ref="file" accept="image/*"
                   v-on:change="handleFileUpload()"/>
             <button v-on:click="submitFile()">Submit</button>
          </div>
          <button type="submit" class="btn btn-default">확인</button>



      </div>
    </div>
  </div>
</template>

<script>
import lineService from "@/services/erp/base/lineService";
import dictionayService from "@/services/erp/base/dictionaryService";
import itDamageService from "@/services/erp/general/itDamageService";

export default {
  name: "itDamage",
  data() {
    return {
      fact:'',
      wrkct:'',
      class1:'',
      class2:'',
      class3:'',

      rtel:'',
      rtxt:'',

      file: '',
      attach:'',

      class1List:[],
      factList:[],
      wrkctList:[],
    };
  },
  created() {
    var data = { adgub:'IT' }
    dictionayService.getDataByParam(data)
      .then(response => {
        this.class1List = response.data;
      })
      .catch(e => {console.log(e);});;

    var data = { adgub:'31' }
    lineService.getDataByParam(data)
      .then(response => {
        this.factList = response.data;
      })
      .catch(e => {console.log(e)});;
  },
  methods: {
    save(e) {
      let formData = new FormData();
      formData.append("file", this.file);
      formData.append("fileName",fileName);

      itDamageService.fileUpload(this.folderPath,formData)
                  .then(function() {})
                  .catch(e => {console.log(e)});
      itDamageService.save(this._data)
      .then((response) => { })
      .catch(e => {
        console.log(e);
      });
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      this.attach =this.$refs.file.files[0].name;
    },
    fileDown(data) {
      itDamageService.fileDown(data.attach)
    },
    selectfact(fact){
      itDamageService.getWrkctListByFact(fact)
      .then(response => {
        this.wrkctList = response.data;
        console.log(response);
      })
      .catch(e => {console.log(e);});
    }
  },
  mounted: function() {}
};
</script>

