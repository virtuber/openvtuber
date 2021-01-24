import $protobuf from "protobufjs/minimal";
// Common aliases
var $Reader = $protobuf.Reader,
    $Writer = $protobuf.Writer,
    $util = $protobuf.util; // Exported root namespace

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.VrmStateMessage = function () {
  /**
   * Properties of a VrmStateMessage.
   * @exports IVrmStateMessage
   * @interface IVrmStateMessage
   * @property {number|null} [aValue] VrmStateMessage aValue
   * @property {number|null} [angryValue] VrmStateMessage angryValue
   * @property {number|null} [blinkLeftValue] VrmStateMessage blinkLeftValue
   * @property {number|null} [blinkRightValue] VrmStateMessage blinkRightValue
   * @property {number|null} [eValue] VrmStateMessage eValue
   * @property {number|null} [funValue] VrmStateMessage funValue
   * @property {number|null} [headRotationX] VrmStateMessage headRotationX
   * @property {number|null} [headRotationY] VrmStateMessage headRotationY
   * @property {number|null} [iValue] VrmStateMessage iValue
   * @property {number|null} [jawRotationX] VrmStateMessage jawRotationX
   * @property {number|null} [jawRotationY] VrmStateMessage jawRotationY
   * @property {number|null} [joyValue] VrmStateMessage joyValue
   * @property {number|null} [lookAtX] VrmStateMessage lookAtX
   * @property {number|null} [lookAtY] VrmStateMessage lookAtY
   * @property {number|null} [lookAtZ] VrmStateMessage lookAtZ
   * @property {number|null} [neckRotationX] VrmStateMessage neckRotationX
   * @property {number|null} [neckRotationY] VrmStateMessage neckRotationY
   * @property {number|null} [neutralValue] VrmStateMessage neutralValue
   * @property {number|null} [oValue] VrmStateMessage oValue
   * @property {number|null} [sorrowValue] VrmStateMessage sorrowValue
   * @property {number|null} [uValue] VrmStateMessage uValue
   */

  /**
   * Constructs a new VrmStateMessage.
   * @exports VrmStateMessage
   * @classdesc Represents a VrmStateMessage.
   * @implements IVrmStateMessage
   * @constructor
   * @param {IVrmStateMessage=} [properties] Properties to set
   */
  function VrmStateMessage(properties) {
    if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
  }
  /**
   * VrmStateMessage aValue.
   * @member {number} aValue
   * @memberof VrmStateMessage
   * @instance
   */


  VrmStateMessage.prototype.aValue = 0;
  /**
   * VrmStateMessage angryValue.
   * @member {number} angryValue
   * @memberof VrmStateMessage
   * @instance
   */

  VrmStateMessage.prototype.angryValue = 0;
  /**
   * VrmStateMessage blinkLeftValue.
   * @member {number} blinkLeftValue
   * @memberof VrmStateMessage
   * @instance
   */

  VrmStateMessage.prototype.blinkLeftValue = 0;
  /**
   * VrmStateMessage blinkRightValue.
   * @member {number} blinkRightValue
   * @memberof VrmStateMessage
   * @instance
   */

  VrmStateMessage.prototype.blinkRightValue = 0;
  /**
   * VrmStateMessage eValue.
   * @member {number} eValue
   * @memberof VrmStateMessage
   * @instance
   */

  VrmStateMessage.prototype.eValue = 0;
  /**
   * VrmStateMessage funValue.
   * @member {number} funValue
   * @memberof VrmStateMessage
   * @instance
   */

  VrmStateMessage.prototype.funValue = 0;
  /**
   * VrmStateMessage headRotationX.
   * @member {number} headRotationX
   * @memberof VrmStateMessage
   * @instance
   */

  VrmStateMessage.prototype.headRotationX = 0;
  /**
   * VrmStateMessage headRotationY.
   * @member {number} headRotationY
   * @memberof VrmStateMessage
   * @instance
   */

  VrmStateMessage.prototype.headRotationY = 0;
  /**
   * VrmStateMessage iValue.
   * @member {number} iValue
   * @memberof VrmStateMessage
   * @instance
   */

  VrmStateMessage.prototype.iValue = 0;
  /**
   * VrmStateMessage jawRotationX.
   * @member {number} jawRotationX
   * @memberof VrmStateMessage
   * @instance
   */

  VrmStateMessage.prototype.jawRotationX = 0;
  /**
   * VrmStateMessage jawRotationY.
   * @member {number} jawRotationY
   * @memberof VrmStateMessage
   * @instance
   */

  VrmStateMessage.prototype.jawRotationY = 0;
  /**
   * VrmStateMessage joyValue.
   * @member {number} joyValue
   * @memberof VrmStateMessage
   * @instance
   */

  VrmStateMessage.prototype.joyValue = 0;
  /**
   * VrmStateMessage lookAtX.
   * @member {number} lookAtX
   * @memberof VrmStateMessage
   * @instance
   */

  VrmStateMessage.prototype.lookAtX = 0;
  /**
   * VrmStateMessage lookAtY.
   * @member {number} lookAtY
   * @memberof VrmStateMessage
   * @instance
   */

  VrmStateMessage.prototype.lookAtY = 0;
  /**
   * VrmStateMessage lookAtZ.
   * @member {number} lookAtZ
   * @memberof VrmStateMessage
   * @instance
   */

  VrmStateMessage.prototype.lookAtZ = 0;
  /**
   * VrmStateMessage neckRotationX.
   * @member {number} neckRotationX
   * @memberof VrmStateMessage
   * @instance
   */

  VrmStateMessage.prototype.neckRotationX = 0;
  /**
   * VrmStateMessage neckRotationY.
   * @member {number} neckRotationY
   * @memberof VrmStateMessage
   * @instance
   */

  VrmStateMessage.prototype.neckRotationY = 0;
  /**
   * VrmStateMessage neutralValue.
   * @member {number} neutralValue
   * @memberof VrmStateMessage
   * @instance
   */

  VrmStateMessage.prototype.neutralValue = 0;
  /**
   * VrmStateMessage oValue.
   * @member {number} oValue
   * @memberof VrmStateMessage
   * @instance
   */

  VrmStateMessage.prototype.oValue = 0;
  /**
   * VrmStateMessage sorrowValue.
   * @member {number} sorrowValue
   * @memberof VrmStateMessage
   * @instance
   */

  VrmStateMessage.prototype.sorrowValue = 0;
  /**
   * VrmStateMessage uValue.
   * @member {number} uValue
   * @memberof VrmStateMessage
   * @instance
   */

  VrmStateMessage.prototype.uValue = 0;
  /**
   * Creates a new VrmStateMessage instance using the specified properties.
   * @function create
   * @memberof VrmStateMessage
   * @static
   * @param {IVrmStateMessage=} [properties] Properties to set
   * @returns {VrmStateMessage} VrmStateMessage instance
   */

  VrmStateMessage.create = function create(properties) {
    return new VrmStateMessage(properties);
  };
  /**
   * Encodes the specified VrmStateMessage message. Does not implicitly {@link VrmStateMessage.verify|verify} messages.
   * @function encode
   * @memberof VrmStateMessage
   * @static
   * @param {IVrmStateMessage} message VrmStateMessage message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */


  VrmStateMessage.encode = function encode(message, writer) {
    if (!writer) writer = $Writer.create();
    if (message.aValue != null && Object.hasOwnProperty.call(message, "aValue")) writer.uint32(
    /* id 1, wireType 5 =*/
    13).float(message.aValue);
    if (message.angryValue != null && Object.hasOwnProperty.call(message, "angryValue")) writer.uint32(
    /* id 2, wireType 5 =*/
    21).float(message.angryValue);
    if (message.blinkLeftValue != null && Object.hasOwnProperty.call(message, "blinkLeftValue")) writer.uint32(
    /* id 3, wireType 5 =*/
    29).float(message.blinkLeftValue);
    if (message.blinkRightValue != null && Object.hasOwnProperty.call(message, "blinkRightValue")) writer.uint32(
    /* id 4, wireType 5 =*/
    37).float(message.blinkRightValue);
    if (message.eValue != null && Object.hasOwnProperty.call(message, "eValue")) writer.uint32(
    /* id 5, wireType 5 =*/
    45).float(message.eValue);
    if (message.funValue != null && Object.hasOwnProperty.call(message, "funValue")) writer.uint32(
    /* id 6, wireType 5 =*/
    53).float(message.funValue);
    if (message.headRotationX != null && Object.hasOwnProperty.call(message, "headRotationX")) writer.uint32(
    /* id 7, wireType 5 =*/
    61).float(message.headRotationX);
    if (message.headRotationY != null && Object.hasOwnProperty.call(message, "headRotationY")) writer.uint32(
    /* id 8, wireType 5 =*/
    69).float(message.headRotationY);
    if (message.iValue != null && Object.hasOwnProperty.call(message, "iValue")) writer.uint32(
    /* id 9, wireType 5 =*/
    77).float(message.iValue);
    if (message.jawRotationX != null && Object.hasOwnProperty.call(message, "jawRotationX")) writer.uint32(
    /* id 10, wireType 5 =*/
    85).float(message.jawRotationX);
    if (message.jawRotationY != null && Object.hasOwnProperty.call(message, "jawRotationY")) writer.uint32(
    /* id 11, wireType 5 =*/
    93).float(message.jawRotationY);
    if (message.joyValue != null && Object.hasOwnProperty.call(message, "joyValue")) writer.uint32(
    /* id 12, wireType 5 =*/
    101).float(message.joyValue);
    if (message.lookAtX != null && Object.hasOwnProperty.call(message, "lookAtX")) writer.uint32(
    /* id 13, wireType 5 =*/
    109).float(message.lookAtX);
    if (message.lookAtY != null && Object.hasOwnProperty.call(message, "lookAtY")) writer.uint32(
    /* id 14, wireType 5 =*/
    117).float(message.lookAtY);
    if (message.lookAtZ != null && Object.hasOwnProperty.call(message, "lookAtZ")) writer.uint32(
    /* id 15, wireType 5 =*/
    125).float(message.lookAtZ);
    if (message.neckRotationX != null && Object.hasOwnProperty.call(message, "neckRotationX")) writer.uint32(
    /* id 16, wireType 5 =*/
    133).float(message.neckRotationX);
    if (message.neckRotationY != null && Object.hasOwnProperty.call(message, "neckRotationY")) writer.uint32(
    /* id 17, wireType 5 =*/
    141).float(message.neckRotationY);
    if (message.neutralValue != null && Object.hasOwnProperty.call(message, "neutralValue")) writer.uint32(
    /* id 18, wireType 5 =*/
    149).float(message.neutralValue);
    if (message.oValue != null && Object.hasOwnProperty.call(message, "oValue")) writer.uint32(
    /* id 19, wireType 5 =*/
    157).float(message.oValue);
    if (message.sorrowValue != null && Object.hasOwnProperty.call(message, "sorrowValue")) writer.uint32(
    /* id 20, wireType 5 =*/
    165).float(message.sorrowValue);
    if (message.uValue != null && Object.hasOwnProperty.call(message, "uValue")) writer.uint32(
    /* id 21, wireType 5 =*/
    173).float(message.uValue);
    return writer;
  };
  /**
   * Encodes the specified VrmStateMessage message, length delimited. Does not implicitly {@link VrmStateMessage.verify|verify} messages.
   * @function encodeDelimited
   * @memberof VrmStateMessage
   * @static
   * @param {IVrmStateMessage} message VrmStateMessage message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */


  VrmStateMessage.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };
  /**
   * Decodes a VrmStateMessage message from the specified reader or buffer.
   * @function decode
   * @memberof VrmStateMessage
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {VrmStateMessage} VrmStateMessage
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */


  VrmStateMessage.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
    var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.VrmStateMessage();

    while (reader.pos < end) {
      var tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.aValue = reader.float();
          break;

        case 2:
          message.angryValue = reader.float();
          break;

        case 3:
          message.blinkLeftValue = reader.float();
          break;

        case 4:
          message.blinkRightValue = reader.float();
          break;

        case 5:
          message.eValue = reader.float();
          break;

        case 6:
          message.funValue = reader.float();
          break;

        case 7:
          message.headRotationX = reader.float();
          break;

        case 8:
          message.headRotationY = reader.float();
          break;

        case 9:
          message.iValue = reader.float();
          break;

        case 10:
          message.jawRotationX = reader.float();
          break;

        case 11:
          message.jawRotationY = reader.float();
          break;

        case 12:
          message.joyValue = reader.float();
          break;

        case 13:
          message.lookAtX = reader.float();
          break;

        case 14:
          message.lookAtY = reader.float();
          break;

        case 15:
          message.lookAtZ = reader.float();
          break;

        case 16:
          message.neckRotationX = reader.float();
          break;

        case 17:
          message.neckRotationY = reader.float();
          break;

        case 18:
          message.neutralValue = reader.float();
          break;

        case 19:
          message.oValue = reader.float();
          break;

        case 20:
          message.sorrowValue = reader.float();
          break;

        case 21:
          message.uValue = reader.float();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  };
  /**
   * Decodes a VrmStateMessage message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof VrmStateMessage
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {VrmStateMessage} VrmStateMessage
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */


  VrmStateMessage.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) reader = new $Reader(reader);
    return this.decode(reader, reader.uint32());
  };
  /**
   * Verifies a VrmStateMessage message.
   * @function verify
   * @memberof VrmStateMessage
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */


  VrmStateMessage.verify = function verify(message) {
    if (typeof message !== "object" || message === null) return "object expected";
    if (message.aValue != null && message.hasOwnProperty("aValue")) if (typeof message.aValue !== "number") return "aValue: number expected";
    if (message.angryValue != null && message.hasOwnProperty("angryValue")) if (typeof message.angryValue !== "number") return "angryValue: number expected";
    if (message.blinkLeftValue != null && message.hasOwnProperty("blinkLeftValue")) if (typeof message.blinkLeftValue !== "number") return "blinkLeftValue: number expected";
    if (message.blinkRightValue != null && message.hasOwnProperty("blinkRightValue")) if (typeof message.blinkRightValue !== "number") return "blinkRightValue: number expected";
    if (message.eValue != null && message.hasOwnProperty("eValue")) if (typeof message.eValue !== "number") return "eValue: number expected";
    if (message.funValue != null && message.hasOwnProperty("funValue")) if (typeof message.funValue !== "number") return "funValue: number expected";
    if (message.headRotationX != null && message.hasOwnProperty("headRotationX")) if (typeof message.headRotationX !== "number") return "headRotationX: number expected";
    if (message.headRotationY != null && message.hasOwnProperty("headRotationY")) if (typeof message.headRotationY !== "number") return "headRotationY: number expected";
    if (message.iValue != null && message.hasOwnProperty("iValue")) if (typeof message.iValue !== "number") return "iValue: number expected";
    if (message.jawRotationX != null && message.hasOwnProperty("jawRotationX")) if (typeof message.jawRotationX !== "number") return "jawRotationX: number expected";
    if (message.jawRotationY != null && message.hasOwnProperty("jawRotationY")) if (typeof message.jawRotationY !== "number") return "jawRotationY: number expected";
    if (message.joyValue != null && message.hasOwnProperty("joyValue")) if (typeof message.joyValue !== "number") return "joyValue: number expected";
    if (message.lookAtX != null && message.hasOwnProperty("lookAtX")) if (typeof message.lookAtX !== "number") return "lookAtX: number expected";
    if (message.lookAtY != null && message.hasOwnProperty("lookAtY")) if (typeof message.lookAtY !== "number") return "lookAtY: number expected";
    if (message.lookAtZ != null && message.hasOwnProperty("lookAtZ")) if (typeof message.lookAtZ !== "number") return "lookAtZ: number expected";
    if (message.neckRotationX != null && message.hasOwnProperty("neckRotationX")) if (typeof message.neckRotationX !== "number") return "neckRotationX: number expected";
    if (message.neckRotationY != null && message.hasOwnProperty("neckRotationY")) if (typeof message.neckRotationY !== "number") return "neckRotationY: number expected";
    if (message.neutralValue != null && message.hasOwnProperty("neutralValue")) if (typeof message.neutralValue !== "number") return "neutralValue: number expected";
    if (message.oValue != null && message.hasOwnProperty("oValue")) if (typeof message.oValue !== "number") return "oValue: number expected";
    if (message.sorrowValue != null && message.hasOwnProperty("sorrowValue")) if (typeof message.sorrowValue !== "number") return "sorrowValue: number expected";
    if (message.uValue != null && message.hasOwnProperty("uValue")) if (typeof message.uValue !== "number") return "uValue: number expected";
    return null;
  };
  /**
   * Creates a VrmStateMessage message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof VrmStateMessage
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {VrmStateMessage} VrmStateMessage
   */


  VrmStateMessage.fromObject = function fromObject(object) {
    if (object instanceof $root.VrmStateMessage) return object;
    var message = new $root.VrmStateMessage();
    if (object.aValue != null) message.aValue = Number(object.aValue);
    if (object.angryValue != null) message.angryValue = Number(object.angryValue);
    if (object.blinkLeftValue != null) message.blinkLeftValue = Number(object.blinkLeftValue);
    if (object.blinkRightValue != null) message.blinkRightValue = Number(object.blinkRightValue);
    if (object.eValue != null) message.eValue = Number(object.eValue);
    if (object.funValue != null) message.funValue = Number(object.funValue);
    if (object.headRotationX != null) message.headRotationX = Number(object.headRotationX);
    if (object.headRotationY != null) message.headRotationY = Number(object.headRotationY);
    if (object.iValue != null) message.iValue = Number(object.iValue);
    if (object.jawRotationX != null) message.jawRotationX = Number(object.jawRotationX);
    if (object.jawRotationY != null) message.jawRotationY = Number(object.jawRotationY);
    if (object.joyValue != null) message.joyValue = Number(object.joyValue);
    if (object.lookAtX != null) message.lookAtX = Number(object.lookAtX);
    if (object.lookAtY != null) message.lookAtY = Number(object.lookAtY);
    if (object.lookAtZ != null) message.lookAtZ = Number(object.lookAtZ);
    if (object.neckRotationX != null) message.neckRotationX = Number(object.neckRotationX);
    if (object.neckRotationY != null) message.neckRotationY = Number(object.neckRotationY);
    if (object.neutralValue != null) message.neutralValue = Number(object.neutralValue);
    if (object.oValue != null) message.oValue = Number(object.oValue);
    if (object.sorrowValue != null) message.sorrowValue = Number(object.sorrowValue);
    if (object.uValue != null) message.uValue = Number(object.uValue);
    return message;
  };
  /**
   * Creates a plain object from a VrmStateMessage message. Also converts values to other types if specified.
   * @function toObject
   * @memberof VrmStateMessage
   * @static
   * @param {VrmStateMessage} message VrmStateMessage
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */


  VrmStateMessage.toObject = function toObject(message, options) {
    if (!options) options = {};
    var object = {};

    if (options.defaults) {
      object.aValue = 0;
      object.angryValue = 0;
      object.blinkLeftValue = 0;
      object.blinkRightValue = 0;
      object.eValue = 0;
      object.funValue = 0;
      object.headRotationX = 0;
      object.headRotationY = 0;
      object.iValue = 0;
      object.jawRotationX = 0;
      object.jawRotationY = 0;
      object.joyValue = 0;
      object.lookAtX = 0;
      object.lookAtY = 0;
      object.lookAtZ = 0;
      object.neckRotationX = 0;
      object.neckRotationY = 0;
      object.neutralValue = 0;
      object.oValue = 0;
      object.sorrowValue = 0;
      object.uValue = 0;
    }

    if (message.aValue != null && message.hasOwnProperty("aValue")) object.aValue = options.json && !isFinite(message.aValue) ? String(message.aValue) : message.aValue;
    if (message.angryValue != null && message.hasOwnProperty("angryValue")) object.angryValue = options.json && !isFinite(message.angryValue) ? String(message.angryValue) : message.angryValue;
    if (message.blinkLeftValue != null && message.hasOwnProperty("blinkLeftValue")) object.blinkLeftValue = options.json && !isFinite(message.blinkLeftValue) ? String(message.blinkLeftValue) : message.blinkLeftValue;
    if (message.blinkRightValue != null && message.hasOwnProperty("blinkRightValue")) object.blinkRightValue = options.json && !isFinite(message.blinkRightValue) ? String(message.blinkRightValue) : message.blinkRightValue;
    if (message.eValue != null && message.hasOwnProperty("eValue")) object.eValue = options.json && !isFinite(message.eValue) ? String(message.eValue) : message.eValue;
    if (message.funValue != null && message.hasOwnProperty("funValue")) object.funValue = options.json && !isFinite(message.funValue) ? String(message.funValue) : message.funValue;
    if (message.headRotationX != null && message.hasOwnProperty("headRotationX")) object.headRotationX = options.json && !isFinite(message.headRotationX) ? String(message.headRotationX) : message.headRotationX;
    if (message.headRotationY != null && message.hasOwnProperty("headRotationY")) object.headRotationY = options.json && !isFinite(message.headRotationY) ? String(message.headRotationY) : message.headRotationY;
    if (message.iValue != null && message.hasOwnProperty("iValue")) object.iValue = options.json && !isFinite(message.iValue) ? String(message.iValue) : message.iValue;
    if (message.jawRotationX != null && message.hasOwnProperty("jawRotationX")) object.jawRotationX = options.json && !isFinite(message.jawRotationX) ? String(message.jawRotationX) : message.jawRotationX;
    if (message.jawRotationY != null && message.hasOwnProperty("jawRotationY")) object.jawRotationY = options.json && !isFinite(message.jawRotationY) ? String(message.jawRotationY) : message.jawRotationY;
    if (message.joyValue != null && message.hasOwnProperty("joyValue")) object.joyValue = options.json && !isFinite(message.joyValue) ? String(message.joyValue) : message.joyValue;
    if (message.lookAtX != null && message.hasOwnProperty("lookAtX")) object.lookAtX = options.json && !isFinite(message.lookAtX) ? String(message.lookAtX) : message.lookAtX;
    if (message.lookAtY != null && message.hasOwnProperty("lookAtY")) object.lookAtY = options.json && !isFinite(message.lookAtY) ? String(message.lookAtY) : message.lookAtY;
    if (message.lookAtZ != null && message.hasOwnProperty("lookAtZ")) object.lookAtZ = options.json && !isFinite(message.lookAtZ) ? String(message.lookAtZ) : message.lookAtZ;
    if (message.neckRotationX != null && message.hasOwnProperty("neckRotationX")) object.neckRotationX = options.json && !isFinite(message.neckRotationX) ? String(message.neckRotationX) : message.neckRotationX;
    if (message.neckRotationY != null && message.hasOwnProperty("neckRotationY")) object.neckRotationY = options.json && !isFinite(message.neckRotationY) ? String(message.neckRotationY) : message.neckRotationY;
    if (message.neutralValue != null && message.hasOwnProperty("neutralValue")) object.neutralValue = options.json && !isFinite(message.neutralValue) ? String(message.neutralValue) : message.neutralValue;
    if (message.oValue != null && message.hasOwnProperty("oValue")) object.oValue = options.json && !isFinite(message.oValue) ? String(message.oValue) : message.oValue;
    if (message.sorrowValue != null && message.hasOwnProperty("sorrowValue")) object.sorrowValue = options.json && !isFinite(message.sorrowValue) ? String(message.sorrowValue) : message.sorrowValue;
    if (message.uValue != null && message.hasOwnProperty("uValue")) object.uValue = options.json && !isFinite(message.uValue) ? String(message.uValue) : message.uValue;
    return object;
  };
  /**
   * Converts this VrmStateMessage to JSON.
   * @function toJSON
   * @memberof VrmStateMessage
   * @instance
   * @returns {Object.<string,*>} JSON object
   */


  VrmStateMessage.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  return VrmStateMessage;
}();

export default $root;