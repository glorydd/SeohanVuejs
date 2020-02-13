export default class User {
    companyCode='';
    kname='';
    email='';
    asabn='';
    pass='';

    constructor (companyCode, asabn, pass) {
      // ,email,kname
      this.companyCode = companyCode;
      // this.kname = kname;
      // this.email = email;
      this.asabn = asabn;
      this.pass = pass;
    }
  }
