
Feature('Pesquisa google');

Scenario('test something', (I) => {
    I.amOnPage('/');
    I.fillField('#lst-ib', 'foo fighters');
    I.click('btnK');
    I.see('https://foofighters.com/')
});

