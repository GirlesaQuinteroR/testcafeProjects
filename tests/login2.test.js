import LoginPage from '../page objects/components/LoginPage'
//import Navbar from '../page objects/components/Navbar'

//const navbar = new Navbar()
const loginPage = new LoginPage()


//prettier-ignore
fixture `Login Test`
.page `http://zero.webappsecurity.com/login.html`

test('User cannot login with invalid credentials', async t =>{
    loginPage.loginToApp('invalidUsername', 'Invalidpassword)')
    await t
    .expect(loginPage.errorMessage.innerText).contains('Login and/or password are wrong.')
})

