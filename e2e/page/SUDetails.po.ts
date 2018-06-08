
import { browser, by, element, promise, ElementFinder, ElementArrayFinder, WebElement, ExpectedConditions } from '../../node_modules/protractor';
import { SelectWrapper } from '../Utility';
import { By } from 'selenium-webdriver';

export class SUDetails {

    /*  wait(){   
      browser.wait(ExpectedConditions.visibilityOf(we), 3000, 'recently button is not visible.....')
      browser.manage().timeouts().implicitlyWait(3000);
    browser.wait(function () {
            browser.sleep(2000);
            return element(by.id('identifier1')).isDisplayed()
            .then(
                function (isDisplayed) { 
                    return isDisplayed; 
                }, 
                function (error) { 
                    return false 
                });
        }, 20 * 2000);  
    
    }  */
    // <<<<<<< HEAD
    serviceUsersBtn = "//button[text()='Service Users']";
    serviceUserViewBtn = "(//span[@class='glyphicon glyphicon-search'])[1]";
    idendBtn = "//button[text()='Identifiers']";
    AIAddBtn = "#alias_addButton";

    public static locatorValue = function (locatorTpye, value) {

        switch (locatorTpye) {
            case "id":
                this.by = by.id(value);
                let Btnid = element(this.by);
                Btnid.isDisplayed().then(output => {
                    Btnid.click()
                });
                break;
            case "name":
                this.by = by.name(value);
                break;
            case "xpath":
                this.by = by.xpath(value);
                let Btnxpath = element(this.by);
                Btnxpath.isDisplayed().then(output => {
                    Btnxpath.click()
                });
                break;
            case "css":
                this.by = by.css(value);
                let Btncss = element(this.by);
                Btncss.isDisplayed().then(output => {
                    Btncss.click()
                });
                break;
            case "linkText":
                this.by = by.linkText(value);
                break;
            case "partialLinkText":
                this.by = by.partialLinkText(value);
                break;
            default:
                this.by = null;
                break;
        }
        return this.by;
    }

    addAlias() {
        SUDetails.locatorValue("xpath", this.serviceUsersBtn);
        SUDetails.locatorValue("xpath", this.serviceUserViewBtn);
        SUDetails.locatorValue("xpath", this.idendBtn);
        SUDetails.locatorValue("css", this.AIAddBtn);
        browser.sleep(2000);
        let firstname = element(by.css('#firstName'));
        firstname.sendKeys('simran');
        let secondname = element(by.css('#secondName'));
        secondname.sendKeys("singh");
        let faimlyname = element(by.css('#familyName'));
        faimlyname.sendKeys("rathore");
        var gender = element(by.id('genderId'));
        let wrapper = new SelectWrapper();
        wrapper.selectDropdownbyNum(gender, 2);
        var gender = element(by.css('#saveButton'));
        gender.click();
        browser.sleep(2000);
    }



    getHomePageTitle() {
        browser.sleep(3000);
        return browser.getTitle();

    }

}