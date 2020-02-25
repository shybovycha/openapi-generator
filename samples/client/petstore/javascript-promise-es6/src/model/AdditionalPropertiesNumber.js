/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AdditionalPropertiesNumber model module.
 * @module model/AdditionalPropertiesNumber
 * @version 1.0.0
 */
class AdditionalPropertiesNumber {
    /**
     * Constructs a new <code>AdditionalPropertiesNumber</code>.
     * @alias module:model/AdditionalPropertiesNumber
     * @extends 
     */
    constructor() { 
        
        AdditionalPropertiesNumber.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AdditionalPropertiesNumber</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AdditionalPropertiesNumber} obj Optional instance to populate.
     * @return {module:model/AdditionalPropertiesNumber} The populated <code>AdditionalPropertiesNumber</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AdditionalPropertiesNumber();

            ApiClient.constructFromObject(data, obj, '');
            

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
AdditionalPropertiesNumber.prototype['name'] = undefined;






export default AdditionalPropertiesNumber;

