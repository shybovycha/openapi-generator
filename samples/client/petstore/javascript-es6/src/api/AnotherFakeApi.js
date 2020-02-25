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


import ApiClient from "../ApiClient";
import Client from '../model/Client';

/**
* AnotherFake service.
* @module api/AnotherFakeApi
* @version 1.0.0
*/
export default class AnotherFakeApi {

    /**
    * Constructs a new AnotherFakeApi. 
    * @alias module:api/AnotherFakeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the call123testSpecialTags operation.
     * @callback module:api/AnotherFakeApi~call123testSpecialTagsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Client} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To test special tags
     * To test special tags and operation ID starting with number
     * @param {module:model/Client} body client model
     * @param {module:api/AnotherFakeApi~call123testSpecialTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Client}
     */
    call123testSpecialTags() {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling call123testSpecialTags");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Client;
      return this.apiClient.callApi(
        '/another-fake/dummy', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
