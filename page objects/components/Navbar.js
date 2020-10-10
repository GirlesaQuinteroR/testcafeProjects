import { Selector, t } from 'testcafe'

class Navbar {
    constructor() {
        this.searchbox = Selector('#searchTerm')
        this.signInButton = Selector('#signin_button')
    }

    async signInToApp() {
        await t.click(signInButton)
    }

}



export default Navbar