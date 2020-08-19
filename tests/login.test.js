import {Selector} from 'testcafe'

//prettier-ignore
fixture `Login Test`
.page `http://zero.webappsecurity.com/login.html`

test ('User cannot login with invalid credentials', async t =>{
    const signInButton = Selector('#user_login')
    await t.click(signInButton)

    const loginForm = Selector('#login_form')
    await t.expect(loginForm.exists).ok()

    const userNameInput = Selector('#user_login')
    const passwordInput = Selector('#user_password')
    await t.typeText(userNameInput, 'Invalid UserName',{ paste: true })
    await t.typeText(passwordInput, 'Invalid Password',{ paste: true })

    const submitBtn = Selector('.btn-primary')
    await t.click(submitBtn)

    const errorMessage = Selector('.alert-error').innerText
    await t.expect(errorMessage).contains('Login and/or password are wrong.')



}

)
