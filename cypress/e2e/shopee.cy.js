describe(" Open link in same tab", () => { });
it("loads the page using approach1", () => {
  cy.visit("https://shopee.co.id/");
    cy.get('.aSJqEv')
         .first()
         .invoke("attr", "target", "_self")
         .click({ force: true });
    cy.get(':nth-child(1) > .text___2YPkO')
        .first()
        .invoke("attr", "target", "_self")
        .click({ force: true });
        cy.get('input').type("video")
        cy.get('.icon___2A3NH').click()
        cy.get('.searchWrap___2kul9 > :nth-child(2) > :nth-child(2)').click()
        cy.get(':nth-child(4) > .without-default-a-style___3eD9V > .item___3fHzO').click()
        cy.get('.btn_group___THbfC > :nth-child(2) > span').click()
        cy.get(':nth-child(4) > .shopee-react-radio__indicator').click()
        cy.get('.shopee-react-input__inner').type("Kurang berguna dan bermanfaat!")
        cy.get('.shopee-react-modal__close').click()
        cy.get('.category-collapse-item-active > .category-collapse-content > .category-collapse-content-box > .category_items___pBMDO > :nth-child(5) > div')
        .first()
        .invoke("attr", "target", "_self")
        .click({ force: true });
        cy.get('[href="https://help.shopee.co.id/portal/4/article/72073-%5BMandiri-Kartu-Kredit-Shopee%5D-Bagaimana-cara-mengajukan-Mandiri-Kartu-Kredit-Shopee?previousPage=secondary%20category"] > .item___3laL-').click()
});

// it("loads the page using approach2", () => {
//   cy.visit("https://shopee.co.id/");
//     cy.get('.aSJqEvz').click();
//     cy.get("")
//     .first()
//     .invoke("removeAttr", "target")
//     .click({ force: true });
//   cy.go('back')
// });

// // it("loads the page using approach3", () => {
// //   cy.visit("https://test.io/coverage/website-testing");
// //   cy.get("button#onetrust-accept-btn-handler").click();
// //   cy.get('a[href="https://app.test.io/"]').click({ multiple: true });
// });