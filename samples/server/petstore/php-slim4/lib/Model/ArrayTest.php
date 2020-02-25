<?php

/**
 * ArrayTest
 *
 * PHP version 7.1
 *
 * @package OpenAPIServer\Model
 * @author  OpenAPI Generator team
 * @link    https://github.com/openapitools/openapi-generator
 */

/**
 * NOTE: This class is auto generated by the openapi generator program.
 * https://github.com/openapitools/openapi-generator
 */
namespace OpenAPIServer\Model;

use \ModelInterface;

/**
 * ArrayTest
 *
 * @package OpenAPIServer\Model
 * @author  OpenAPI Generator team
 * @link    https://github.com/openapitools/openapi-generator
 */
class ArrayTest implements ModelInterface
{
    private const MODEL_SCHEMA = <<<'SCHEMA'
{
  "type" : "object",
  "properties" : {
    "array_of_string" : {
      "type" : "array",
      "items" : {
        "type" : "string"
      }
    },
    "array_array_of_integer" : {
      "type" : "array",
      "items" : {
        "type" : "array",
        "items" : {
          "type" : "integer",
          "format" : "int64"
        }
      }
    },
    "array_array_of_model" : {
      "type" : "array",
      "items" : {
        "type" : "array",
        "items" : {
          "$ref" : "#/components/schemas/ReadOnlyFirst"
        }
      }
    }
  }
}
SCHEMA;

    /** @var string[] $arrayOfString */
    private $arrayOfString;

    /** @var int[][] $arrayArrayOfInteger */
    private $arrayArrayOfInteger;

    /** @var \OpenAPIServer\Model\ReadOnlyFirst[][] $arrayArrayOfModel */
    private $arrayArrayOfModel;

    /**
     * Returns model schema.
     *
     * @param bool $assoc When TRUE, returned objects will be converted into associative arrays. Default FALSE.
     *
     * @return array
     */
    public static function getOpenApiSchema($assoc = false)
    {
        return json_decode(static::MODEL_SCHEMA, $assoc);
    }
}
