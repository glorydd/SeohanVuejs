<template>
  <div id="itDamage" class="container">
    등록
    <div id="insertForm" class="col-xs-12 col-sm-12">
      <div class="panel panel-default">
        <form @submit="save">
          <div class="input-group">
            <label for="fact">공장</label>
            <select class="form-control" id="fact" v-model="fact" @change="selectfact(fact)" required>
                  <option selected value="null">공장</option>
                  <option v-for="fact in factList" v-bind:key="fact.asgub" v-bind:value="fact.asgub" >{{ fact.asdes }}</option>
						</select>
          </div>
          <div class="input-group">
            <label for="wrkct">라인</label>
            <select class="form-control" id="wrkct" v-model="wrkct" required>
								 <option selected value="null">라인</option>
                <option v-for="wrkct in wrkctList" v-bind:key="wrkct.wrkct" v-bind:value="wrkct.wrkct" >{{ wrkct.wrkct }}-{{ wrkct.wrkds }}</option>
						</select>
          </div>
          <div class="input-group">
						<label for="class1">고장 유형</label>
            <select class="form-control" id="class1" v-model="class1" required>
								 <option selected value="null">고장 유형</option>
                  <option v-for="data in class1List" v-bind:key="data.asgub" v-bind:value="data.asgub + '-' + data.asdes" >{{ data.asdes }}</option>
						</select>
					</div>
          <div class="input-group">
            <label for="rtel">연락처</label>
            <input class="form-control" type="tel" id="rtel" v-model="rtel" placeholder="010-1234-5678" required/>
          </div>
          <div class="input-group">
            <label for="rtxt">내용</label>
            <input class="form-control" type="text" id="rtxt" v-model="rtxt" required />
          </div>

          <div class="input-group">
            <input class="form-control"  type="file" id="file" ref="file" accept="image/*"
                   v-on:change="handleFileUpload()"/>
             <button v-on:click="submitFile()">Submit</button>
          </div>
          <div class="col-md-12 col-sm-12 col-xs-12">
            <button type="submit" class="btn btn-default">확인</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import crudService from "@/services/general/crudService";
import axios from "axios";

export default {
  name: "itDamage",
  data() {
    return {
      folderPath:"itdamage",
      file: '',
      rtime: '',
      fact:'',
      wrkct:'',
      class1:'',
      class2:'',
      class3:'',
      rsabun:'',
      rteam:'',
      rname:'',
      rtel:'',
      rtxt:'',
      attach:'',
      stat:'01',
      class1List:[],
      factList:[],
      wrkctList:[],
    };
  },
  methods: {
    submitFile(fileName) {
      let formData = new FormData();
      formData.append("file", this.file);
      formData.append("fileName",fileName);
      // for( var i = 0; i < this.files.length; i++ ){
      //   let file = this.files[i];
      //   formData.append('files[' + i + ']', file);
      // }

      crudService
      .fileUpload(this.folderPath,formData)
      .then(function() {
        console.log("SUCCESS!!");
      })
      .catch(function() {
        console.log("FAILURE!!");
      });
    },
    save(e) {
      crudService.setRoute('general/itdamage');
      let formData = new FormData();
      formData.append("file", this.file);
      formData.append("fileName",fileName);

      crudService
      .fileUpload(this.folderPath,formData)
      .then(function() {
        console.log("SUCCESS!!");
      })
      .catch(function() {
        console.log("FAILURE!!");
      });

      crudService.save(this._data)
      .then((response) => {
        // this.submitFile(response.data.rtime)
      })
      .catch(e => {
        console.log(e);
      });
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      this.attach =this.$refs.file.files[0].name;
    },
    fileDown(data) {
      window.open("/api/file/" + data.attach);
    },
    selectfact(fact){
      crudService.setRoute('general/wrkct');
      crudService.getWrkctListByFact(fact)
      .then(response => {
        this.wrkctList = response.data;
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      });
    }
  },
  created() {
    crudService.setRoute('general/codeLib');
    crudService.retrieve("IT")
    .then(response => {
      this.class1List = response.data;
      console.log(response);
    })
    .catch(e => {
      console.log(e);
    });;
    crudService.retrieve('/fact')
    .then(response => {
      this.factList = response.data;
      console.log(response);
    })
    .catch(e => {
      console.log(e);
    });;
  },
  mounted: function() {}
};
</script>

