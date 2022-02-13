

class AuthHandle{
    static loggedIn(){
        if (localStorage.getItem("access_token") && localStorage.getItem("refresh_token")) {
            return true;
          } else {
            return false;
          }
        }
    
}

export default AuthHandle;
