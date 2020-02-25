/* 
 * OpenAPI Petstore
 *
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Org.OpenAPITools.Client.OpenAPIDateConverter;
using OpenAPIClientUtils = Org.OpenAPITools.Client.ClientUtils;

namespace Org.OpenAPITools.Model
{
    /// <summary>
    /// BigCat
    /// </summary>
    [DataContract]
    public partial class BigCat : Cat,  IEquatable<BigCat>, IValidatableObject
    {
        /// <summary>
        /// Defines Kind
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum KindEnum
        {
            /// <summary>
            /// Enum Lions for value: lions
            /// </summary>
            [EnumMember(Value = "lions")]
            Lions = 1,

            /// <summary>
            /// Enum Tigers for value: tigers
            /// </summary>
            [EnumMember(Value = "tigers")]
            Tigers = 2,

            /// <summary>
            /// Enum Leopards for value: leopards
            /// </summary>
            [EnumMember(Value = "leopards")]
            Leopards = 3,

            /// <summary>
            /// Enum Jaguars for value: jaguars
            /// </summary>
            [EnumMember(Value = "jaguars")]
            Jaguars = 4

        }

        /// <summary>
        /// Gets or Sets Kind
        /// </summary>
        [DataMember(Name="kind", EmitDefaultValue=false)]
        public KindEnum? Kind { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="BigCat" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected BigCat() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="BigCat" /> class.
        /// </summary>
        /// <param name="kind">kind.</param>
        /// <param name="className">className (required).</param>
        /// <param name="color">color (default to &quot;red&quot;).</param>
        /// <param name="declawed">declawed.</param>
        public BigCat(KindEnum? kind = default(KindEnum?), string className = default(string), string color = "red", bool declawed = default(bool)) : base(declawed)
        {
            this.Kind = kind;
        }
        
        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class BigCat {\n");
            sb.Append("  ").Append(base.ToString().Replace("\n", "\n  ")).Append("\n");
            sb.Append("  Kind: ").Append(Kind).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public override string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return OpenAPIClientUtils.compareLogic.Compare(this, input as BigCat).AreEqual;
        }

        /// <summary>
        /// Returns true if BigCat instances are equal
        /// </summary>
        /// <param name="input">Instance of BigCat to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(BigCat input)
        {
            return OpenAPIClientUtils.compareLogic.Compare(this, input).AreEqual;
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = base.GetHashCode();
                if (this.Kind != null)
                    hashCode = hashCode * 59 + this.Kind.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            foreach(var x in BaseValidate(validationContext)) yield return x;
            yield break;
        }
    }

}
