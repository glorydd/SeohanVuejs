export default class User {
    companyCode='';
    kname='';
    email='';
    asabn='';
    pass='';

    constructor (companyCode, userid, pass, kname, email) {
      // ,email,kname
      this.companyCode = companyCode;
      this.kname = kname;
      this.email = email;
      this.asabn = userid;
      this.pass = pass;
    }

    constructor2 (companyCode, asabn, pass) {
      // ,email,kname
      this.companyCode = companyCode;
      // this.kname = kname;
      // this.email = email;
      this.asabn = asabn;
      this.pass = pass;
    }
  }
