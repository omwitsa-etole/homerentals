import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
export default class Session {
	constructor(){
		bake_cookie('user', 'false');
		bake_cookie('token', 'false');
	}
	
	get(session){
		if(read_cookie(session) && read_cookie(session) != "false"){
			return read_cookie(session)
		}
		return false;
	}
	set(session){
		let x = session.split("=")
		bake_cookie(x[0],x[1])
	}
	delete(){
		delete_cookie('user')
		delete_cookie('token')
	}
	toJson(session){
		return JSON.parse(session);
	}
} 