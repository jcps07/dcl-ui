/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "zigbeealliance.distributedcomplianceledger.vendorinfo";

export interface VendorInfo {
  vendorID: number;
  vendorName: string;
  companyLegalName: string;
  companyPreferredName: string;
  vendorLandingPageURL: string;
  creator: string;
  schemaVersion: number;
}

function createBaseVendorInfo(): VendorInfo {
  return {
    vendorID: 0,
    vendorName: "",
    companyLegalName: "",
    companyPreferredName: "",
    vendorLandingPageURL: "",
    creator: "",
    schemaVersion: 0,
  };
}

export const VendorInfo = {
  encode(message: VendorInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vendorID !== 0) {
      writer.uint32(8).int32(message.vendorID);
    }
    if (message.vendorName !== "") {
      writer.uint32(18).string(message.vendorName);
    }
    if (message.companyLegalName !== "") {
      writer.uint32(26).string(message.companyLegalName);
    }
    if (message.companyPreferredName !== "") {
      writer.uint32(34).string(message.companyPreferredName);
    }
    if (message.vendorLandingPageURL !== "") {
      writer.uint32(42).string(message.vendorLandingPageURL);
    }
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }
    if (message.schemaVersion !== 0) {
      writer.uint32(56).uint32(message.schemaVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VendorInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVendorInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.vendorID = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.vendorName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.companyLegalName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.companyPreferredName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.vendorLandingPageURL = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.schemaVersion = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VendorInfo {
    return {
      vendorID: isSet(object.vendorID) ? Number(object.vendorID) : 0,
      vendorName: isSet(object.vendorName) ? String(object.vendorName) : "",
      companyLegalName: isSet(object.companyLegalName) ? String(object.companyLegalName) : "",
      companyPreferredName: isSet(object.companyPreferredName) ? String(object.companyPreferredName) : "",
      vendorLandingPageURL: isSet(object.vendorLandingPageURL) ? String(object.vendorLandingPageURL) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      schemaVersion: isSet(object.schemaVersion) ? Number(object.schemaVersion) : 0,
    };
  },

  toJSON(message: VendorInfo): unknown {
    const obj: any = {};
    if (message.vendorID !== 0) {
      obj.vendorID = Math.round(message.vendorID);
    }
    if (message.vendorName !== "") {
      obj.vendorName = message.vendorName;
    }
    if (message.companyLegalName !== "") {
      obj.companyLegalName = message.companyLegalName;
    }
    if (message.companyPreferredName !== "") {
      obj.companyPreferredName = message.companyPreferredName;
    }
    if (message.vendorLandingPageURL !== "") {
      obj.vendorLandingPageURL = message.vendorLandingPageURL;
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.schemaVersion !== 0) {
      obj.schemaVersion = Math.round(message.schemaVersion);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VendorInfo>, I>>(base?: I): VendorInfo {
    return VendorInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VendorInfo>, I>>(object: I): VendorInfo {
    const message = createBaseVendorInfo();
    message.vendorID = object.vendorID ?? 0;
    message.vendorName = object.vendorName ?? "";
    message.companyLegalName = object.companyLegalName ?? "";
    message.companyPreferredName = object.companyPreferredName ?? "";
    message.vendorLandingPageURL = object.vendorLandingPageURL ?? "";
    message.creator = object.creator ?? "";
    message.schemaVersion = object.schemaVersion ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
