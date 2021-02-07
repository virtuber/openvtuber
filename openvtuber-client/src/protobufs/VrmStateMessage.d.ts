import * as $protobuf from "protobufjs";
/** Properties of a VrmStateMessage. */
export interface IVrmStateMessage {

    /** VrmStateMessage aValue */
    aValue?: (number|null);

    /** VrmStateMessage angryValue */
    angryValue?: (number|null);

    /** VrmStateMessage blinkLeftValue */
    blinkLeftValue?: (number|null);

    /** VrmStateMessage blinkRightValue */
    blinkRightValue?: (number|null);

    /** VrmStateMessage eValue */
    eValue?: (number|null);

    /** VrmStateMessage funValue */
    funValue?: (number|null);

    /** VrmStateMessage headRotationX */
    headRotationX?: (number|null);

    /** VrmStateMessage headRotationY */
    headRotationY?: (number|null);

    /** VrmStateMessage headRotationZ */
    headRotationZ?: (number|null);

    /** VrmStateMessage iValue */
    iValue?: (number|null);

    /** VrmStateMessage jawRotationX */
    jawRotationX?: (number|null);

    /** VrmStateMessage jawRotationY */
    jawRotationY?: (number|null);

    /** VrmStateMessage joyValue */
    joyValue?: (number|null);

    /** VrmStateMessage lookAtX */
    lookAtX?: (number|null);

    /** VrmStateMessage lookAtY */
    lookAtY?: (number|null);

    /** VrmStateMessage lookAtZ */
    lookAtZ?: (number|null);

    /** VrmStateMessage neckRotationX */
    neckRotationX?: (number|null);

    /** VrmStateMessage neckRotationY */
    neckRotationY?: (number|null);

    /** VrmStateMessage neutralValue */
    neutralValue?: (number|null);

    /** VrmStateMessage oValue */
    oValue?: (number|null);

    /** VrmStateMessage sorrowValue */
    sorrowValue?: (number|null);

    /** VrmStateMessage upperChestX */
    upperChestX?: (number|null);

    /** VrmStateMessage upperChestY */
    upperChestY?: (number|null);

    /** VrmStateMessage upperChestZ */
    upperChestZ?: (number|null);

    /** VrmStateMessage uValue */
    uValue?: (number|null);
}

/** Represents a VrmStateMessage. */
export class VrmStateMessage implements IVrmStateMessage {

    /**
     * Constructs a new VrmStateMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVrmStateMessage);

    /** VrmStateMessage aValue. */
    public aValue: number;

    /** VrmStateMessage angryValue. */
    public angryValue: number;

    /** VrmStateMessage blinkLeftValue. */
    public blinkLeftValue: number;

    /** VrmStateMessage blinkRightValue. */
    public blinkRightValue: number;

    /** VrmStateMessage eValue. */
    public eValue: number;

    /** VrmStateMessage funValue. */
    public funValue: number;

    /** VrmStateMessage headRotationX. */
    public headRotationX: number;

    /** VrmStateMessage headRotationY. */
    public headRotationY: number;

    /** VrmStateMessage headRotationZ. */
    public headRotationZ: number;

    /** VrmStateMessage iValue. */
    public iValue: number;

    /** VrmStateMessage jawRotationX. */
    public jawRotationX: number;

    /** VrmStateMessage jawRotationY. */
    public jawRotationY: number;

    /** VrmStateMessage joyValue. */
    public joyValue: number;

    /** VrmStateMessage lookAtX. */
    public lookAtX: number;

    /** VrmStateMessage lookAtY. */
    public lookAtY: number;

    /** VrmStateMessage lookAtZ. */
    public lookAtZ: number;

    /** VrmStateMessage neckRotationX. */
    public neckRotationX: number;

    /** VrmStateMessage neckRotationY. */
    public neckRotationY: number;

    /** VrmStateMessage neutralValue. */
    public neutralValue: number;

    /** VrmStateMessage oValue. */
    public oValue: number;

    /** VrmStateMessage sorrowValue. */
    public sorrowValue: number;

    /** VrmStateMessage upperChestX. */
    public upperChestX: number;

    /** VrmStateMessage upperChestY. */
    public upperChestY: number;

    /** VrmStateMessage upperChestZ. */
    public upperChestZ: number;

    /** VrmStateMessage uValue. */
    public uValue: number;

    /**
     * Creates a new VrmStateMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VrmStateMessage instance
     */
    public static create(properties?: IVrmStateMessage): VrmStateMessage;

    /**
     * Encodes the specified VrmStateMessage message. Does not implicitly {@link VrmStateMessage.verify|verify} messages.
     * @param message VrmStateMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVrmStateMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VrmStateMessage message, length delimited. Does not implicitly {@link VrmStateMessage.verify|verify} messages.
     * @param message VrmStateMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVrmStateMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VrmStateMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VrmStateMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VrmStateMessage;

    /**
     * Decodes a VrmStateMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VrmStateMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VrmStateMessage;

    /**
     * Verifies a VrmStateMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VrmStateMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VrmStateMessage
     */
    public static fromObject(object: { [k: string]: any }): VrmStateMessage;

    /**
     * Creates a plain object from a VrmStateMessage message. Also converts values to other types if specified.
     * @param message VrmStateMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VrmStateMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VrmStateMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
