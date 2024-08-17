export default class CommonPage {
    
    //properties
    public uri: string

    //methods implementation
    setUri(uri: string) {
        this.uri = uri;
    }

    goToPage(): this {
        cy.goToPage(this.uri);
        return this;
    }
}