import qaConfig from './qa_di_config_sq';

class HomeCtrl {
  constructor($scope) {
    'ngInject';

    this.name = 'AngularJS';
    this.index = 0;
    this.list = qaConfig;

    //if (this.list.length > 0) {
    this.model = this.list[this.index];
    //}

    //this.loadConfig();
  }

  clickedYes() {
    this.model.yes = true;
    this.model.no = false;
  }

  clickedNo() {
    this.model.no = true;
    this.model.yes = false;
  }

  next() {
    if (this.list.length > this.index + 1) {
      this.index = this.index + 1;
      this.model = this.list[this.index];
    }
  }

  previous() {
    if (this.index > 0) {
      this.index = this.index - 1;
      this.model = this.list[this.index];
    }
  }

  loadConfig() {
    console.log('qaConfig', qaConfig);
    this.list = qaConfig;
  }
}

export default HomeCtrl;
