export default class Session {
	constructor(){
		document.cookie = "session=false";
		if(!this.get("loggedIn")){
			document.cookie = "token=None"
		}
		if(!this.get("token")){
			document.cookie = "token=false"
		}
		if(!this.get("company")){
			document.cookie = "company=false"
		}
	}
	
	check(session=false){
		return document.cookie
	}
	get(session){
		if(session){
			session = session.replace(" ","");
			let cookie = document.cookie;
			const slits = cookie.split(";");
			for(const slit of slits){
				let sls = slit.split("=");
				
				if( sls[0].replace(" ","") === session){
				
					this.session = sls[1].replace(" ","");
					if(this.session === "false" || this.session === "False" || this.session === "None"){return false}
					return this.session
				}
			}
			return false
		}
		return false;
	}
	set(session){
		document.cookie = session;
	}
	delete(){
		this.set("company=false")
		this.set("token=None")
		this.set("user=false")
		
		console.log(document.cookie)
	}
	toJson(session){
		return JSON.parse(session);
	}
} 