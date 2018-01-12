import $ from 'jquery';
import config from './../../config';
let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIxNjEwMDQxMiIsInN5cyI6ImVjayIsImV4cCI6MTQ5NzM0MDg5NzUxM30.ewgPR1J7c0fdrSQpZW4BEPlR9itfoz1l-5UP6LDn6Ls'
export default function (obj) {
	$.ajax({
		type:'post',
		url: 'http://localhost:3000'+config.apiPrefix+''+obj.url,
		data: JSON.stringify(obj.data),
		headers: {
		   	'Authorization': 'Bearer '+token,
			'Content-Type': 'application/json'
		},
		success:function(data){
			obj.success && obj.success(data)
		}
	})
	return 'hello world'
}


