import { Injectable } from "@angular/core";
import{HttpClient} from "@angular/common/http"
import { environment } from "src/environments/environment";
import { AuthResponsedata } from "../models/AuthResposedata";
import { Observable } from "rxjs";
import { User } from "../models/user.model";
import { timeInterval } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { AppState } from "../store/app.state";
import { logedOut } from "../auth/state/auth.action";

@Injectable({
    providedIn:'root'
})
export class Authservice{
timeoutInterval:any
 constructor(private http:HttpClient,private store:Store<AppState>){}
 login(email:any,password:any):Observable<AuthResponsedata>{
return this.http.post<AuthResponsedata>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`,{email,password,returnSecureToken:true}
);
 }
 formactUser(data:AuthResponsedata){
     const expirationDate=new Date(new Date().getTime()+ +data.expiresIn*1000)
const user=new User(data.email,data.idToken,data.localId,expirationDate);
return user
 }
 errormessages(message:string){
 switch(message){
    case 'EMAIL_NOT_FOUND': return 'Email not Found' ;
    case 'INVALID_PASSWORD': return "Your password invalid";
    case 'EMAIL_EXISTS':return"eamil alrady exits";
    default: return "Unknown Error occoured Please try again"
 }
 }
 Register(email:string,password:string):Observable<AuthResponsedata>{
     return this.http.post<AuthResponsedata>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIREBASE_API_KEY}`,
     {email,password,returnSecureToken:true} )
 }
 setLocalstorage(user:User){
localStorage.setItem('userData',JSON.stringify(user))
this.runTimeoutInterval(user)
 }
 runTimeoutInterval(user:User){
    const today=new Date().getTime()
    const expirationDate=user.expiration.getTime()
    const timeInterval=expirationDate-today;
    
    this.timeoutInterval=setTimeout(()=>{
    this.store.dispatch(logedOut())
    },timeInterval);
 }
 getLocalStorage(){
     const userdata=localStorage.getItem('userData');
     if(userdata){
         const userData=JSON.parse(userdata);
         const expirationDate=new Date(userData.expirationDate)
         const user=new User(userData.email,userData.token,userData.localId,expirationDate);
         this.runTimeoutInterval(user)
         return user;
     }
   return null
    
 }
 logOut(){
     localStorage.removeItem('userData');
     if(this.timeoutInterval){
         clearTimeout(this.timeoutInterval);
         this.timeoutInterval=null
     }
 }
 loggedin(){
     return !!localStorage.getItem('userData')
 }
}


