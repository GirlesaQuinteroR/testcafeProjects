import {Selector} from 'testcafe'


//prettier-ignore
fixture `Getting the link for forgotten password`
    .page `http://zero.webappsecurity.com/index.html`

test ('User can get an email with instructions to restore the password', async t =>{

    //Get the Selectors
    const signInhome = Selector('#signin_button')
    const linkForgottenPw = Selector('a').withText('Forgot your password ?')
    const emailInput = Selector('#user_email')
    const message = Selector('div').innerText

    //Actions
    await t.click(signInhome)
    await t.click(linkForgottenPw)
    await t.typeText(emailInput, 'example@email.com', { paste: true})
    await t.pressKey('enter')
    
    //Assertions
    await t.expect(message).contains('example@email.com')
    await t.expect(signInhome.exists).notOk()
    
    })
