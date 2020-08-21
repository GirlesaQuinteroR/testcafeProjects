import {Selector} from 'testcafe'

//prettier-ignore
fixture `Login Test`
.page `http://zero.webappsecurity.com/login.html`

test.skip ('User cannot login with invalid credentials', async t =>{
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
})

test.skip ('User login with valid credentials', async t =>{
    const signInButton = Selector('#user_login')
    await t.click(signInButton)

    const loginForm = Selector('#login_form')
    await t.expect(loginForm.exists).ok()

    const userNameInput = Selector('#user_login')
    const passwordInput = Selector('#user_password')
    await t.typeText(userNameInput, 'username',{ paste: true })
    await t.typeText(passwordInput, 'password',{ paste: true })

    const submitBtn = Selector('.btn-primary')
    await t.click(submitBtn)

    const transferBtn = Selector('#transfer_funds_tab')
 
    await t.expect(transferBtn.exists).ok()
    await t.expect(loginForm.exists).notOk()

    const dropDown = Selector('.icon-user')
    await t.click(dropDown)

    const logoutLink = Selector('#logout_link')
    await t.click(logoutLink)

    const signInhome = Selector('#signin_button')
    await t.expect(signInhome.exists).ok()
    await t.expect(logoutLink.exists).notOk()
    
})
