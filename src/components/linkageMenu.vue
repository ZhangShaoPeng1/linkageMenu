<template>
  <div class="linkageMenu">
    <el-form ref="form" :model="form" label-width="100px" class="elForm">
      <el-form-item  label="所选路径：">
        <el-cascader
          :options="StudentInfo"
          v-model="form.selectedOptions"
          :change-on-select="true"
          :clearable="true"
          :filterable="true"
          @change="handleChange">
        </el-cascader>
      </el-form-item>
    </el-form>
    
    <span>
      所选路径：{{form.one | myAddressOne(StudentInfo) }}{{form.two | myAddressTwo(StudentInfo) }}{{form.three | myAddressThree(StudentInfo) }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'linkageMenu',
  data: function() {
    return{
      /*数据源*/
      StudentInfo: [
        {value: 1, label: '不限'},
        {value: 2, label: '学生', children: [
            {value: 1, label: '不限'},
            {value: 2, label: '小学', children: [
                {value: 1, label: '不限'},
                {value: 2, label: '一年级'},
                {value: 3, label: '二年级'},
                {value: 4, label: '三年级'},
                {value: 5, label: '四年级'},
                {value: 6, label: '五年级'},
                {value: 7, label: '六年级'},
            ]},
            {value: 3, label: '初中', children: [
                {value: 8, label: '不限'},
                {value: 9, label: '初一'},
                {value: 10, label: '初二'},
                {value: 11, label: '初三'},
            ]},
            {value: 4, label: '高中', children: [
                {value: 12, label: '不限'},
                {value: 13, label: '高一'},
                {value: 14, label: '高二'},
                {value: 14, label: '高二'},
            ]}
        ]},
      ],
      form: {
        one : '',
        two : '',
        three : '',
        selectedOptions: [],  //筛选数组
      },
    }
  },
  methods: {
    handleChange(value) {
      this.form.one = this.form.selectedOptions[0];
      this.form.two = this.form.selectedOptions[1]
      this.form.three = this.form.selectedOptions[2]
      },
  },
  /*过滤器，返回点击的数据,返回到“所选路径”*/
  filters:{
    myAddressOne: function(value, StudentInfo) {
      for(var y in StudentInfo){
        if(StudentInfo[y].value == value){
          return value = StudentInfo[y].label
        }
      }
    },
    myAddressTwo: function(value, StudentInfo) {
      for(var y in StudentInfo){
        for(var z in StudentInfo[y].children){
          if(StudentInfo[y].children[z].value == value && value!=undefined){
            return value = "/" + StudentInfo[y].children[z].label;
          }
        }
      }
    },
    myAddressThree: function(value, StudentInfo) {
      for(var y in StudentInfo){
        for(var z in StudentInfo[y].children){
          for(var i in StudentInfo[y].children[z].children){
            if(StudentInfo[y].children[z].children[i].value == value && value!=undefined){
              return value = "/" + StudentInfo[y].children[z].children[i].label
            }
          }
        }
      }
    },
  },
}
</script>

<style>
.elForm {
   display:inline-block;
   margin-right:10px;
}
</style>
