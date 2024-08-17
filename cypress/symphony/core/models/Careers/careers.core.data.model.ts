import CommonDatModel from "../../../common/models/common.data.model";
import Helpers from "../../util/helpers";

export default class CareersCoreDataModel implements CommonDatModel{
    
    //properties
    currentOpeningsNumber: number;

    setDefaultValues(): this {
        Helpers.readDataFile().then((data) => {
            this.currentOpeningsNumber = data.careers.numberOfCurrentOpenings
        })
        return this;
    }
}