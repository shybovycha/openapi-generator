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
import FileSchemaTestClass from '../model/FileSchemaTestClass';
import OuterComposite from '../model/OuterComposite';
import User from '../model/User';
import XmlItem from '../model/XmlItem';

/**
* Fake service.
* @module api/FakeApi
* @version 1.0.0
*/
export default class FakeApi {

    /**
    * Constructs a new FakeApi. 
    * @alias module:api/FakeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * creates an XmlItem
     * this route creates an XmlItem
     * @param {module:model/XmlItem} xmlItem XmlItem Body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    createXmlItemWithHttpInfo() {
      let postBody = xmlItem;
      // verify the required parameter 'xmlItem' is set
      if (xmlItem === undefined || xmlItem === null) {
        throw new Error("Missing the required parameter 'xmlItem' when calling createXmlItem");
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
      let contentTypes = ['application/xml', 'application/xml; charset=utf-8', 'application/xml; charset=utf-16', 'text/xml', 'text/xml; charset=utf-8', 'text/xml; charset=utf-16'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/fake/create_xml_item', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * creates an XmlItem
     * this route creates an XmlItem
     * @param {module:model/XmlItem} xmlItem XmlItem Body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    createXmlItem() {
      return this.createXmlItemWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Test serialization of outer boolean types
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.body Input boolean as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Boolean} and HTTP response
     */
    fakeOuterBooleanSerializeWithHttpInfo() {
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = 'Boolean';
      return this.apiClient.callApi(
        '/fake/outer/boolean', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Test serialization of outer boolean types
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.body Input boolean as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Boolean}
     */
    fakeOuterBooleanSerialize() {
      return this.fakeOuterBooleanSerializeWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Test serialization of object with outer number type
     * @param {Object} opts Optional parameters
     * @param {module:model/OuterComposite} opts.body Input composite as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OuterComposite} and HTTP response
     */
    fakeOuterCompositeSerializeWithHttpInfo() {
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = OuterComposite;
      return this.apiClient.callApi(
        '/fake/outer/composite', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Test serialization of object with outer number type
     * @param {Object} opts Optional parameters
     * @param {module:model/OuterComposite} opts.body Input composite as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OuterComposite}
     */
    fakeOuterCompositeSerialize() {
      return this.fakeOuterCompositeSerializeWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Test serialization of outer number types
     * @param {Object} opts Optional parameters
     * @param {Number} opts.body Input number as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Number} and HTTP response
     */
    fakeOuterNumberSerializeWithHttpInfo() {
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = 'Number';
      return this.apiClient.callApi(
        '/fake/outer/number', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Test serialization of outer number types
     * @param {Object} opts Optional parameters
     * @param {Number} opts.body Input number as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Number}
     */
    fakeOuterNumberSerialize() {
      return this.fakeOuterNumberSerializeWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Test serialization of outer string types
     * @param {Object} opts Optional parameters
     * @param {String} opts.body Input string as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    fakeOuterStringSerializeWithHttpInfo() {
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/fake/outer/string', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Test serialization of outer string types
     * @param {Object} opts Optional parameters
     * @param {String} opts.body Input string as post body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    fakeOuterStringSerialize() {
      return this.fakeOuterStringSerializeWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * For this test, the body for this request much reference a schema named `File`.
     * @param {module:model/FileSchemaTestClass} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    testBodyWithFileSchemaWithHttpInfo() {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling testBodyWithFileSchema");
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/fake/body-with-file-schema', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * For this test, the body for this request much reference a schema named `File`.
     * @param {module:model/FileSchemaTestClass} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    testBodyWithFileSchema() {
      return this.testBodyWithFileSchemaWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} query 
     * @param {module:model/User} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    testBodyWithQueryParamsWithHttpInfo() {
      let postBody = body;
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling testBodyWithQueryParams");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling testBodyWithQueryParams");
      }

      let pathParams = {
      };
      let queryParams = {
        'query': query
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/fake/body-with-query-params', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} query 
     * @param {module:model/User} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    testBodyWithQueryParams() {
      return this.testBodyWithQueryParamsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * To test \"client\" model
     * To test \"client\" model
     * @param {module:model/Client} body client model
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Client} and HTTP response
     */
    testClientModelWithHttpInfo() {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling testClientModel");
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
        '/fake', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * To test \"client\" model
     * To test \"client\" model
     * @param {module:model/Client} body client model
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Client}
     */
    testClientModel() {
      return this.testClientModelWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fake endpoint for testing various parameters  假端點  偽のエンドポイント  가짜 엔드 포인트
     * Fake endpoint for testing various parameters  假端點  偽のエンドポイント  가짜 엔드 포인트
     * @param {Number} _number None
     * @param {Number} _double None
     * @param {String} patternWithoutDelimiter None
     * @param {Blob} _byte None
     * @param {Object} opts Optional parameters
     * @param {Number} opts.integer None
     * @param {Number} opts.int32 None
     * @param {Number} opts.int64 None
     * @param {Number} opts._float None
     * @param {String} opts._string None
     * @param {File} opts.binary None
     * @param {Date} opts._date None
     * @param {Date} opts.dateTime None
     * @param {String} opts.password None
     * @param {String} opts.callback None
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    testEndpointParametersWithHttpInfo() {
      let postBody = null;
      // verify the required parameter '_number' is set
      if (_number === undefined || _number === null) {
        throw new Error("Missing the required parameter '_number' when calling testEndpointParameters");
      }
      // verify the required parameter '_double' is set
      if (_double === undefined || _double === null) {
        throw new Error("Missing the required parameter '_double' when calling testEndpointParameters");
      }
      // verify the required parameter 'patternWithoutDelimiter' is set
      if (patternWithoutDelimiter === undefined || patternWithoutDelimiter === null) {
        throw new Error("Missing the required parameter 'patternWithoutDelimiter' when calling testEndpointParameters");
      }
      // verify the required parameter '_byte' is set
      if (_byte === undefined || _byte === null) {
        throw new Error("Missing the required parameter '_byte' when calling testEndpointParameters");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'integer': opts['integer'],
        'int32': opts['int32'],
        'int64': opts['int64'],
        'number': _number,
        'float': opts['_float'],
        'double': _double,
        'string': opts['_string'],
        'pattern_without_delimiter': patternWithoutDelimiter,
        'byte': _byte,
        'binary': opts['binary'],
        'date': opts['_date'],
        'dateTime': opts['dateTime'],
        'password': opts['password'],
        'callback': opts['callback']
      };

      let authNames = ['http_basic_test'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/fake', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Fake endpoint for testing various parameters  假端點  偽のエンドポイント  가짜 엔드 포인트
     * Fake endpoint for testing various parameters  假端點  偽のエンドポイント  가짜 엔드 포인트
     * @param {Number} _number None
     * @param {Number} _double None
     * @param {String} patternWithoutDelimiter None
     * @param {Blob} _byte None
     * @param {Object} opts Optional parameters
     * @param {Number} opts.integer None
     * @param {Number} opts.int32 None
     * @param {Number} opts.int64 None
     * @param {Number} opts._float None
     * @param {String} opts._string None
     * @param {File} opts.binary None
     * @param {Date} opts._date None
     * @param {Date} opts.dateTime None
     * @param {String} opts.password None
     * @param {String} opts.callback None
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    testEndpointParameters() {
      return this.testEndpointParametersWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * To test enum parameters
     * To test enum parameters
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.enumHeaderStringArray Header parameter enum test (string array)
     * @param {module:model/String} opts.enumHeaderString Header parameter enum test (string) (default to '-efg')
     * @param {Array.<module:model/String>} opts.enumQueryStringArray Query parameter enum test (string array)
     * @param {module:model/String} opts.enumQueryString Query parameter enum test (string) (default to '-efg')
     * @param {module:model/Number} opts.enumQueryInteger Query parameter enum test (double)
     * @param {module:model/Number} opts.enumQueryDouble Query parameter enum test (double)
     * @param {Array.<module:model/String>} opts.enumFormStringArray Form parameter enum test (string array) (default to '$')
     * @param {module:model/String} opts.enumFormString Form parameter enum test (string) (default to '-efg')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    testEnumParametersWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'enum_query_string_array': this.apiClient.buildCollectionParam(opts['enumQueryStringArray'], 'csv'),
        'enum_query_string': opts['enumQueryString'],
        'enum_query_integer': opts['enumQueryInteger'],
        'enum_query_double': opts['enumQueryDouble']
      };
      let headerParams = {
        'enum_header_string_array': opts['enumHeaderStringArray'],
        'enum_header_string': opts['enumHeaderString']
      };
      let formParams = {
        'enum_form_string_array': this.apiClient.buildCollectionParam(opts['enumFormStringArray'], 'csv'),
        'enum_form_string': opts['enumFormString']
      };

      let authNames = [];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/fake', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * To test enum parameters
     * To test enum parameters
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.enumHeaderStringArray Header parameter enum test (string array)
     * @param {module:model/String} opts.enumHeaderString Header parameter enum test (string) (default to '-efg')
     * @param {Array.<module:model/String>} opts.enumQueryStringArray Query parameter enum test (string array)
     * @param {module:model/String} opts.enumQueryString Query parameter enum test (string) (default to '-efg')
     * @param {module:model/Number} opts.enumQueryInteger Query parameter enum test (double)
     * @param {module:model/Number} opts.enumQueryDouble Query parameter enum test (double)
     * @param {Array.<module:model/String>} opts.enumFormStringArray Form parameter enum test (string array) (default to '$')
     * @param {module:model/String} opts.enumFormString Form parameter enum test (string) (default to '-efg')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    testEnumParameters() {
      return this.testEnumParametersWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fake endpoint to test group parameters (optional)
     * Fake endpoint to test group parameters (optional)
     * @param {Number} requiredStringGroup Required String in group parameters
     * @param {Boolean} requiredBooleanGroup Required Boolean in group parameters
     * @param {Number} requiredInt64Group Required Integer in group parameters
     * @param {Object} opts Optional parameters
     * @param {Number} opts.stringGroup String in group parameters
     * @param {Boolean} opts.booleanGroup Boolean in group parameters
     * @param {Number} opts.int64Group Integer in group parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    testGroupParametersWithHttpInfo() {
      let postBody = null;
      // verify the required parameter 'requiredStringGroup' is set
      if (requiredStringGroup === undefined || requiredStringGroup === null) {
        throw new Error("Missing the required parameter 'requiredStringGroup' when calling testGroupParameters");
      }
      // verify the required parameter 'requiredBooleanGroup' is set
      if (requiredBooleanGroup === undefined || requiredBooleanGroup === null) {
        throw new Error("Missing the required parameter 'requiredBooleanGroup' when calling testGroupParameters");
      }
      // verify the required parameter 'requiredInt64Group' is set
      if (requiredInt64Group === undefined || requiredInt64Group === null) {
        throw new Error("Missing the required parameter 'requiredInt64Group' when calling testGroupParameters");
      }

      let pathParams = {
      };
      let queryParams = {
        'required_string_group': requiredStringGroup,
        'required_int64_group': requiredInt64Group,
        'string_group': opts['stringGroup'],
        'int64_group': opts['int64Group']
      };
      let headerParams = {
        'required_boolean_group': requiredBooleanGroup,
        'boolean_group': opts['booleanGroup']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/fake', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Fake endpoint to test group parameters (optional)
     * Fake endpoint to test group parameters (optional)
     * @param {Number} requiredStringGroup Required String in group parameters
     * @param {Boolean} requiredBooleanGroup Required Boolean in group parameters
     * @param {Number} requiredInt64Group Required Integer in group parameters
     * @param {Object} opts Optional parameters
     * @param {Number} opts.stringGroup String in group parameters
     * @param {Boolean} opts.booleanGroup Boolean in group parameters
     * @param {Number} opts.int64Group Integer in group parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    testGroupParameters() {
      return this.testGroupParametersWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * test inline additionalProperties
     * @param {Object.<String, {String: String}>} param request body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    testInlineAdditionalPropertiesWithHttpInfo() {
      let postBody = param;
      // verify the required parameter 'param' is set
      if (param === undefined || param === null) {
        throw new Error("Missing the required parameter 'param' when calling testInlineAdditionalProperties");
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/fake/inline-additionalProperties', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * test inline additionalProperties
     * @param {Object.<String, {String: String}>} param request body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    testInlineAdditionalProperties() {
      return this.testInlineAdditionalPropertiesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * test json serialization of form data
     * @param {String} param field1
     * @param {String} param2 field2
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    testJsonFormDataWithHttpInfo() {
      let postBody = null;
      // verify the required parameter 'param' is set
      if (param === undefined || param === null) {
        throw new Error("Missing the required parameter 'param' when calling testJsonFormData");
      }
      // verify the required parameter 'param2' is set
      if (param2 === undefined || param2 === null) {
        throw new Error("Missing the required parameter 'param2' when calling testJsonFormData");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'param': param,
        'param2': param2
      };

      let authNames = [];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/fake/jsonFormData', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * test json serialization of form data
     * @param {String} param field1
     * @param {String} param2 field2
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    testJsonFormData() {
      return this.testJsonFormDataWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * To test the collection format in query parameters
     * @param {Array.<String>} pipe 
     * @param {Array.<String>} ioutil 
     * @param {Array.<String>} http 
     * @param {Array.<String>} url 
     * @param {Array.<String>} context 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    testQueryParameterCollectionFormatWithHttpInfo() {
      let postBody = null;
      // verify the required parameter 'pipe' is set
      if (pipe === undefined || pipe === null) {
        throw new Error("Missing the required parameter 'pipe' when calling testQueryParameterCollectionFormat");
      }
      // verify the required parameter 'ioutil' is set
      if (ioutil === undefined || ioutil === null) {
        throw new Error("Missing the required parameter 'ioutil' when calling testQueryParameterCollectionFormat");
      }
      // verify the required parameter 'http' is set
      if (http === undefined || http === null) {
        throw new Error("Missing the required parameter 'http' when calling testQueryParameterCollectionFormat");
      }
      // verify the required parameter 'url' is set
      if (url === undefined || url === null) {
        throw new Error("Missing the required parameter 'url' when calling testQueryParameterCollectionFormat");
      }
      // verify the required parameter 'context' is set
      if (context === undefined || context === null) {
        throw new Error("Missing the required parameter 'context' when calling testQueryParameterCollectionFormat");
      }

      let pathParams = {
      };
      let queryParams = {
        'pipe': this.apiClient.buildCollectionParam(pipe, 'csv'),
        'ioutil': this.apiClient.buildCollectionParam(ioutil, 'csv'),
        'http': this.apiClient.buildCollectionParam(http, 'space'),
        'url': this.apiClient.buildCollectionParam(url, 'csv'),
        'context': this.apiClient.buildCollectionParam(context, 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/fake/test-query-paramters', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * To test the collection format in query parameters
     * @param {Array.<String>} pipe 
     * @param {Array.<String>} ioutil 
     * @param {Array.<String>} http 
     * @param {Array.<String>} url 
     * @param {Array.<String>} context 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    testQueryParameterCollectionFormat() {
      return this.testQueryParameterCollectionFormatWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
