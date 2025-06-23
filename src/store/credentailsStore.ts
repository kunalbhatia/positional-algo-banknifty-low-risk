// dataStore.ts

class CredentailsStore {
  private static instance: DataStore;
  private postData: Credentails;

  private constructor() {
    // Initialize postData with default values or leave it empty.
    this.postData = {
      APIKEY: '',
      CLIENT_CODE: '',
      CLIENT_PIN: '',
      CLIENT_TOTP_PIN: '',
    };
  }

  static getInstance() {
    if (!CredentailsStore.instance) {
      CredentailsStore.instance = new DataStore();
    }
    return CredentailsStore.instance;
  }

  setPostData(data: Credentails) {
    this.postData = data;
  }

  getPostData() {
    return this.postData;
  }
}

export default CredentailsStore;
