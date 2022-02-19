import qaConfig from './qa_di_config_sq';

class HomeCtrl {
  constructor($scope) {
    'ngInject';

    this.name = 'AngularJS';
    this.index = 0;
    this.list = qaConfig;
    this.submitted = false;

    this.model = this.list[this.index];
  }

  clickedYes() {
    this.model.yes = true;
    this.model.no = false;
  }

  clickedNo() {
    this.model.no = true;
    this.model.yes = false;
    this.model.value = 0;

    if (this.model.sub_question) {
      this.model.a_val = 0;
      this.model.b_val = 0;
    }
  }

  next() {
    this.submitted = true;

    if (this.list.length > this.index + 1) {
      if (this.model.sub_question) {
        if (this.model.a_val <= 0 && this.model.yes) {
          return;
        }
      } else if (this.model.value <= 0 && this.model.yes) {
        return;
      }

      if (!this.model.yes && !this.model.no) {
        return;
      }

      this.index = this.index + 1;
      this.model = this.list[this.index];

      //reset form validations
      this.submitted = false;
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
