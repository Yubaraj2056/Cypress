import {LoginPage} from "../pages/login_pages.cy"

const loginPage = new LoginPage()
it('login test', function(){
    loginPage.navigate('https://demo.qa.hisaav.com/')
    loginPage.enterUsername('9865103903')
    loginPage.enterPassword('12345')
    loginPage.clickLogin()
   
})