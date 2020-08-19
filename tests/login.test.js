import {Selector} from 'testcafe'

//prettier-ignore
fixture `Login Test`
.page `http://zero.webappsecurity.com/login.html`

test ('User cannot login with invalid credentials', async t =>{
    const signInButton = Selector('#user_login')
    await t.click(signInButton)
}

)
