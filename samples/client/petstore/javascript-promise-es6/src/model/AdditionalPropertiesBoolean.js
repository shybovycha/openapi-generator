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
 * The AdditionalPropertiesBoolean model module.
 * @module model/AdditionalPropertiesBoolean
 * @version 1.0.0
 */
class AdditionalPropertiesBoolean {
    /**
     * Constructs a new <code>AdditionalPropertiesBoolean</code>.
     * @alias module:model/AdditionalPropertiesBoolean
     * @extends 
     */
    constructor() { 
        
        AdditionalPropertiesBoolean.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AdditionalPropertiesBoolean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AdditionalPropertiesBoolean} obj Optional instance to populate.
     * @return {module:model/AdditionalPropertiesBoolean} The populated <code>AdditionalPropertiesBoolean</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AdditionalPropertiesBoolean();

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
AdditionalPropertiesBoolean.prototype['name'] = undefined;






export default AdditionalPropertiesBoolean;

