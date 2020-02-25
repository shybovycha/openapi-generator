<?php

/**
 * Animal
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
 * Animal
 *
 * @package OpenAPIServer\Model
 * @author  OpenAPI Generator team
 * @link    https://github.com/openapitools/openapi-generator
 */
class Animal implements ModelInterface
{
    private const MODEL_SCHEMA = <<<'SCHEMA'
{
  "required" : [ "className" ],
  "type" : "object",
  "properties" : {
    "className" : {
      "type" : "string"
    },
    "color" : {
      "type" : "string",
      "default" : "red"
    }
  },
  "discriminator" : {
    "propertyName" : "className"
  }
}
SCHEMA;

    /** @var string $className */
    private $className;

    /** @var string $color */
    private $color;

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
