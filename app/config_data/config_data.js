var Config_data = {
		head:{
			name:'借贷管理',
			butText:'退出'
		},
		menu:[{
				text:'建标',
				page:'create'
			},{
				text:'审标',
				page:'examine'
			},{
				text:'发标',
				page:'release'
			}],
		login:{
			form:[
					[
						{
			                  text:'手机号码',
			                  noEditor:true
			            }
		            ],
		            [
						{
			                  text:'输入密码'
			            },{
			                  text:'请输入密码'
			            }
		            ],
		            [
			            {
			                  text:'图片验证'
			            },{
			                  text:'请输入验证'
			            },{
			                  text:'',
			                  class:'g_verify'
			            }
		            ]
	            ],
	        but:[
			        {
			          text:"登录"
			        }
			    ]
	    }
}

module.exports  = Config_data;