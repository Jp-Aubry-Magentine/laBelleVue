<template>
	<div>
		<b-container style="margin-top:100px">
      <label>Birthdate <span style="color:red">*</span></label>
      <b-row>
        <b-col>
          <b-form-input placeholder="AAAA" 
          :state="checkField(birthDate.year)"
          v-model="birthDate.year"
          :maxlength="4"
          @keypress="isNumber($event)"   
          ></b-form-input>
        </b-col>
        <b-col>
          <b-form-input placeholder="MM" 
          :state="checkField(birthDate.month)"
          v-model="birthDate.month"
          :maxlength="2"
          @keypress="isNumber($event)"
          >
          </b-form-input>
        </b-col>
        <b-col>
          <b-form-input placeholder="DD" 
          :state="checkField(birthDate.day)"
          v-model="birthDate.day"
          :maxlength="2"
          @keypress="isNumber($event)"
          ></b-form-input>
        </b-col>
        <b-col>
          <b-btn @click="getBirthdate()">Ok</b-btn>
        </b-col>
        <b-col>
          {{ identity.birthDate }}
        </b-col>
      </b-row>
    </b-container>
	</div>
</template>

<script>
export default {
  data: () => ({
    birthDate: {
      day: null,
      month: null,
      year: null,
    }, 
    identity: {
      birthDate:null
    },
    mandatory: ['birthDate'],
  }),
  mounted() {
    console.log("mounted");
  },
  beforeDestroy() {
    console.log("beforeDestroyed")
    
  },
  methods: {
    checkField(txt) {
      return null != txt && 0 < txt.trim(' ').length
    },
    isNumber(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    getBirthdate() {
      this.identity.birthDate = this.birthDate.year + "-" + this.birthDate.month + "-" + this.birthDate.day;
      console.log(this.identity.birthDate);
    }
  },
  watch: {
    identity: {
      deep: true,
      handler() {
        this.$emit(
          'input',
          this.mandatory.reduce((filled, field) => this.checkField(this.identity[field]) && filled, true)
        )
        console.log("watched")
      },
    },
  },
}
</script>
