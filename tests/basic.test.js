import { Selector } from 'testcafe'

//prettier-ignore
fixture `Getting started with Testcafe`
    .page `https://devexpress.github.io/testcafe/example/`
    
test.skip ('My first testcafe test', async t => {
    await t.typeText('#developer-name', 'Girlesa')
    await t.click('#submit-button')
    await t.expect(Selector('#article-header').innerText).contains('Jesus')

})
