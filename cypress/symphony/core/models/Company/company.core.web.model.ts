import CommonWebModel from "../../../common/models/common.web.model";
import Helpers from "../../util/helpers";

export default class CompanyCoreWebModel implements CommonWebModel{
    hQValue: string;
    foundedValue: string;
    consultingLocationsValue: string[];
    engineeringHubsValue: string[];
    clientsValue: string;

    setDefaultValues(): this {
        Helpers.readDataFile().then((data) => {
            this.hQValue = data.company.HQ
            this.foundedValue = data.company.founded
            this.consultingLocationsValue = data.company.consultingLocations
            this.engineeringHubsValue = data.company.engineeringHubs
            this.clientsValue = data.company.clients
        })
        return this;
    }

}