var vm = new Vue({
	el: "#myVue",
	data: {
		/*数据源*/
		BookInfo: BookInfo,//地区数据
		form: {
	         	city : '',
				erae : '',
				minerae : '',
				selectedOptions: [],//地区筛选数组
        },
	},
	methods: {
		handleChange(value) {
			this.form.city = this.form.selectedOptions[0];
			this.form.erae = this.form.selectedOptions[1]
			this.form.minerae = this.form.selectedOptions[2]
     	},
	},
	/*过滤器，返回点击的地址*/
	filters:{
		myAddressCity:function(value){
			for(y in this.BookInfo){
				if(this.BookInfo[y].value == value){
					return value = this.BookInfo[y].label
				}
			}
		},
		myAddressErae:function(value){
			for(y in this.BookInfo){
				for(z in this.BookInfo[y].children){
					if(this.BookInfo[y].children[z].value == value && value!=undefined){
						return value = this.BookInfo[y].children[z].label;
					}
				}
			}
		},
		myAddressMinerae:function(value){
			for(y in this.BookInfo){
				for(z in this.BookInfo[y].children){
					for(i in this.BookInfo[y].children[z].children){
						if(this.BookInfo[y].children[z].children[i].value == value && value!=undefined){
							return value = this.BookInfo[y].children[z].children[i].label
						}
					}
				}
			}
		},
	},
});
