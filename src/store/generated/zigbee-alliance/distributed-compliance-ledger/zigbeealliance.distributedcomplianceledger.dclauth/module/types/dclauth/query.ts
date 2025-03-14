/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Account } from "./account";
import { AccountStat } from "./account_stat";
import { PendingAccount } from "./pending_account";
import { PendingAccountRevocation } from "./pending_account_revocation";
import { RejectedAccount } from "./rejected_account";
import { RevokedAccount } from "./revoked_account";

export const protobufPackage = "zigbeealliance.distributedcomplianceledger.dclauth";

export interface QueryGetAccountRequest {
  address: string;
}

export interface QueryGetAccountResponse {
  account: Account | undefined;
}

export interface QueryAllAccountRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllAccountResponse {
  account: Account[];
  pagination: PageResponse | undefined;
}

export interface QueryGetPendingAccountRequest {
  address: string;
}

export interface QueryGetPendingAccountResponse {
  pendingAccount: PendingAccount | undefined;
}

export interface QueryAllPendingAccountRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPendingAccountResponse {
  pendingAccount: PendingAccount[];
  pagination: PageResponse | undefined;
}

export interface QueryGetPendingAccountRevocationRequest {
  address: string;
}

export interface QueryGetPendingAccountRevocationResponse {
  pendingAccountRevocation: PendingAccountRevocation | undefined;
}

export interface QueryAllPendingAccountRevocationRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPendingAccountRevocationResponse {
  pendingAccountRevocation: PendingAccountRevocation[];
  pagination: PageResponse | undefined;
}

export interface QueryGetAccountStatRequest {
}

export interface QueryGetAccountStatResponse {
  AccountStat: AccountStat | undefined;
}

export interface QueryGetRevokedAccountRequest {
  address: string;
}

export interface QueryGetRevokedAccountResponse {
  revokedAccount: RevokedAccount | undefined;
}

export interface QueryAllRevokedAccountRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllRevokedAccountResponse {
  revokedAccount: RevokedAccount[];
  pagination: PageResponse | undefined;
}

export interface QueryGetRejectedAccountRequest {
  address: string;
}

export interface QueryGetRejectedAccountResponse {
  rejectedAccount: RejectedAccount | undefined;
}

export interface QueryAllRejectedAccountRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllRejectedAccountResponse {
  rejectedAccount: RejectedAccount[];
  pagination: PageResponse | undefined;
}

function createBaseQueryGetAccountRequest(): QueryGetAccountRequest {
  return { address: "" };
}

export const QueryGetAccountRequest = {
  encode(message: QueryGetAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetAccountRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryGetAccountRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAccountRequest>, I>>(base?: I): QueryGetAccountRequest {
    return QueryGetAccountRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAccountRequest>, I>>(object: I): QueryGetAccountRequest {
    const message = createBaseQueryGetAccountRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryGetAccountResponse(): QueryGetAccountResponse {
  return { account: undefined };
}

export const QueryGetAccountResponse = {
  encode(message: QueryGetAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== undefined) {
      Account.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.account = Account.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetAccountResponse {
    return { account: isSet(object.account) ? Account.fromJSON(object.account) : undefined };
  },

  toJSON(message: QueryGetAccountResponse): unknown {
    const obj: any = {};
    if (message.account !== undefined) {
      obj.account = Account.toJSON(message.account);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAccountResponse>, I>>(base?: I): QueryGetAccountResponse {
    return QueryGetAccountResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAccountResponse>, I>>(object: I): QueryGetAccountResponse {
    const message = createBaseQueryGetAccountResponse();
    message.account = (object.account !== undefined && object.account !== null)
      ? Account.fromPartial(object.account)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAccountRequest(): QueryAllAccountRequest {
  return { pagination: undefined };
}

export const QueryAllAccountRequest = {
  encode(message: QueryAllAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllAccountRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllAccountRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllAccountRequest>, I>>(base?: I): QueryAllAccountRequest {
    return QueryAllAccountRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllAccountRequest>, I>>(object: I): QueryAllAccountRequest {
    const message = createBaseQueryAllAccountRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAccountResponse(): QueryAllAccountResponse {
  return { account: [], pagination: undefined };
}

export const QueryAllAccountResponse = {
  encode(message: QueryAllAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.account) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.account.push(Account.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllAccountResponse {
    return {
      account: Array.isArray(object?.account) ? object.account.map((e: any) => Account.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllAccountResponse): unknown {
    const obj: any = {};
    if (message.account?.length) {
      obj.account = message.account.map((e) => Account.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllAccountResponse>, I>>(base?: I): QueryAllAccountResponse {
    return QueryAllAccountResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllAccountResponse>, I>>(object: I): QueryAllAccountResponse {
    const message = createBaseQueryAllAccountResponse();
    message.account = object.account?.map((e) => Account.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetPendingAccountRequest(): QueryGetPendingAccountRequest {
  return { address: "" };
}

export const QueryGetPendingAccountRequest = {
  encode(message: QueryGetPendingAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPendingAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPendingAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetPendingAccountRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryGetPendingAccountRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetPendingAccountRequest>, I>>(base?: I): QueryGetPendingAccountRequest {
    return QueryGetPendingAccountRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetPendingAccountRequest>, I>>(
    object: I,
  ): QueryGetPendingAccountRequest {
    const message = createBaseQueryGetPendingAccountRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryGetPendingAccountResponse(): QueryGetPendingAccountResponse {
  return { pendingAccount: undefined };
}

export const QueryGetPendingAccountResponse = {
  encode(message: QueryGetPendingAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pendingAccount !== undefined) {
      PendingAccount.encode(message.pendingAccount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPendingAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPendingAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pendingAccount = PendingAccount.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetPendingAccountResponse {
    return {
      pendingAccount: isSet(object.pendingAccount) ? PendingAccount.fromJSON(object.pendingAccount) : undefined,
    };
  },

  toJSON(message: QueryGetPendingAccountResponse): unknown {
    const obj: any = {};
    if (message.pendingAccount !== undefined) {
      obj.pendingAccount = PendingAccount.toJSON(message.pendingAccount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetPendingAccountResponse>, I>>(base?: I): QueryGetPendingAccountResponse {
    return QueryGetPendingAccountResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetPendingAccountResponse>, I>>(
    object: I,
  ): QueryGetPendingAccountResponse {
    const message = createBaseQueryGetPendingAccountResponse();
    message.pendingAccount = (object.pendingAccount !== undefined && object.pendingAccount !== null)
      ? PendingAccount.fromPartial(object.pendingAccount)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPendingAccountRequest(): QueryAllPendingAccountRequest {
  return { pagination: undefined };
}

export const QueryAllPendingAccountRequest = {
  encode(message: QueryAllPendingAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPendingAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPendingAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllPendingAccountRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPendingAccountRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllPendingAccountRequest>, I>>(base?: I): QueryAllPendingAccountRequest {
    return QueryAllPendingAccountRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllPendingAccountRequest>, I>>(
    object: I,
  ): QueryAllPendingAccountRequest {
    const message = createBaseQueryAllPendingAccountRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPendingAccountResponse(): QueryAllPendingAccountResponse {
  return { pendingAccount: [], pagination: undefined };
}

export const QueryAllPendingAccountResponse = {
  encode(message: QueryAllPendingAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pendingAccount) {
      PendingAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPendingAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPendingAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pendingAccount.push(PendingAccount.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllPendingAccountResponse {
    return {
      pendingAccount: Array.isArray(object?.pendingAccount)
        ? object.pendingAccount.map((e: any) => PendingAccount.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPendingAccountResponse): unknown {
    const obj: any = {};
    if (message.pendingAccount?.length) {
      obj.pendingAccount = message.pendingAccount.map((e) => PendingAccount.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllPendingAccountResponse>, I>>(base?: I): QueryAllPendingAccountResponse {
    return QueryAllPendingAccountResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllPendingAccountResponse>, I>>(
    object: I,
  ): QueryAllPendingAccountResponse {
    const message = createBaseQueryAllPendingAccountResponse();
    message.pendingAccount = object.pendingAccount?.map((e) => PendingAccount.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetPendingAccountRevocationRequest(): QueryGetPendingAccountRevocationRequest {
  return { address: "" };
}

export const QueryGetPendingAccountRevocationRequest = {
  encode(message: QueryGetPendingAccountRevocationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPendingAccountRevocationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPendingAccountRevocationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetPendingAccountRevocationRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryGetPendingAccountRevocationRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetPendingAccountRevocationRequest>, I>>(
    base?: I,
  ): QueryGetPendingAccountRevocationRequest {
    return QueryGetPendingAccountRevocationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetPendingAccountRevocationRequest>, I>>(
    object: I,
  ): QueryGetPendingAccountRevocationRequest {
    const message = createBaseQueryGetPendingAccountRevocationRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryGetPendingAccountRevocationResponse(): QueryGetPendingAccountRevocationResponse {
  return { pendingAccountRevocation: undefined };
}

export const QueryGetPendingAccountRevocationResponse = {
  encode(message: QueryGetPendingAccountRevocationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pendingAccountRevocation !== undefined) {
      PendingAccountRevocation.encode(message.pendingAccountRevocation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPendingAccountRevocationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPendingAccountRevocationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pendingAccountRevocation = PendingAccountRevocation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetPendingAccountRevocationResponse {
    return {
      pendingAccountRevocation: isSet(object.pendingAccountRevocation)
        ? PendingAccountRevocation.fromJSON(object.pendingAccountRevocation)
        : undefined,
    };
  },

  toJSON(message: QueryGetPendingAccountRevocationResponse): unknown {
    const obj: any = {};
    if (message.pendingAccountRevocation !== undefined) {
      obj.pendingAccountRevocation = PendingAccountRevocation.toJSON(message.pendingAccountRevocation);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetPendingAccountRevocationResponse>, I>>(
    base?: I,
  ): QueryGetPendingAccountRevocationResponse {
    return QueryGetPendingAccountRevocationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetPendingAccountRevocationResponse>, I>>(
    object: I,
  ): QueryGetPendingAccountRevocationResponse {
    const message = createBaseQueryGetPendingAccountRevocationResponse();
    message.pendingAccountRevocation =
      (object.pendingAccountRevocation !== undefined && object.pendingAccountRevocation !== null)
        ? PendingAccountRevocation.fromPartial(object.pendingAccountRevocation)
        : undefined;
    return message;
  },
};

function createBaseQueryAllPendingAccountRevocationRequest(): QueryAllPendingAccountRevocationRequest {
  return { pagination: undefined };
}

export const QueryAllPendingAccountRevocationRequest = {
  encode(message: QueryAllPendingAccountRevocationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPendingAccountRevocationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPendingAccountRevocationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllPendingAccountRevocationRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPendingAccountRevocationRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllPendingAccountRevocationRequest>, I>>(
    base?: I,
  ): QueryAllPendingAccountRevocationRequest {
    return QueryAllPendingAccountRevocationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllPendingAccountRevocationRequest>, I>>(
    object: I,
  ): QueryAllPendingAccountRevocationRequest {
    const message = createBaseQueryAllPendingAccountRevocationRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPendingAccountRevocationResponse(): QueryAllPendingAccountRevocationResponse {
  return { pendingAccountRevocation: [], pagination: undefined };
}

export const QueryAllPendingAccountRevocationResponse = {
  encode(message: QueryAllPendingAccountRevocationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pendingAccountRevocation) {
      PendingAccountRevocation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPendingAccountRevocationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPendingAccountRevocationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pendingAccountRevocation.push(PendingAccountRevocation.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllPendingAccountRevocationResponse {
    return {
      pendingAccountRevocation: Array.isArray(object?.pendingAccountRevocation)
        ? object.pendingAccountRevocation.map((e: any) => PendingAccountRevocation.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPendingAccountRevocationResponse): unknown {
    const obj: any = {};
    if (message.pendingAccountRevocation?.length) {
      obj.pendingAccountRevocation = message.pendingAccountRevocation.map((e) => PendingAccountRevocation.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllPendingAccountRevocationResponse>, I>>(
    base?: I,
  ): QueryAllPendingAccountRevocationResponse {
    return QueryAllPendingAccountRevocationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllPendingAccountRevocationResponse>, I>>(
    object: I,
  ): QueryAllPendingAccountRevocationResponse {
    const message = createBaseQueryAllPendingAccountRevocationResponse();
    message.pendingAccountRevocation =
      object.pendingAccountRevocation?.map((e) => PendingAccountRevocation.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAccountStatRequest(): QueryGetAccountStatRequest {
  return {};
}

export const QueryGetAccountStatRequest = {
  encode(_: QueryGetAccountStatRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAccountStatRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAccountStatRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryGetAccountStatRequest {
    return {};
  },

  toJSON(_: QueryGetAccountStatRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAccountStatRequest>, I>>(base?: I): QueryGetAccountStatRequest {
    return QueryGetAccountStatRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAccountStatRequest>, I>>(_: I): QueryGetAccountStatRequest {
    const message = createBaseQueryGetAccountStatRequest();
    return message;
  },
};

function createBaseQueryGetAccountStatResponse(): QueryGetAccountStatResponse {
  return { AccountStat: undefined };
}

export const QueryGetAccountStatResponse = {
  encode(message: QueryGetAccountStatResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.AccountStat !== undefined) {
      AccountStat.encode(message.AccountStat, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAccountStatResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAccountStatResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.AccountStat = AccountStat.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetAccountStatResponse {
    return { AccountStat: isSet(object.AccountStat) ? AccountStat.fromJSON(object.AccountStat) : undefined };
  },

  toJSON(message: QueryGetAccountStatResponse): unknown {
    const obj: any = {};
    if (message.AccountStat !== undefined) {
      obj.AccountStat = AccountStat.toJSON(message.AccountStat);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAccountStatResponse>, I>>(base?: I): QueryGetAccountStatResponse {
    return QueryGetAccountStatResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAccountStatResponse>, I>>(object: I): QueryGetAccountStatResponse {
    const message = createBaseQueryGetAccountStatResponse();
    message.AccountStat = (object.AccountStat !== undefined && object.AccountStat !== null)
      ? AccountStat.fromPartial(object.AccountStat)
      : undefined;
    return message;
  },
};

function createBaseQueryGetRevokedAccountRequest(): QueryGetRevokedAccountRequest {
  return { address: "" };
}

export const QueryGetRevokedAccountRequest = {
  encode(message: QueryGetRevokedAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRevokedAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRevokedAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetRevokedAccountRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryGetRevokedAccountRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetRevokedAccountRequest>, I>>(base?: I): QueryGetRevokedAccountRequest {
    return QueryGetRevokedAccountRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetRevokedAccountRequest>, I>>(
    object: I,
  ): QueryGetRevokedAccountRequest {
    const message = createBaseQueryGetRevokedAccountRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryGetRevokedAccountResponse(): QueryGetRevokedAccountResponse {
  return { revokedAccount: undefined };
}

export const QueryGetRevokedAccountResponse = {
  encode(message: QueryGetRevokedAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revokedAccount !== undefined) {
      RevokedAccount.encode(message.revokedAccount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRevokedAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRevokedAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.revokedAccount = RevokedAccount.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetRevokedAccountResponse {
    return {
      revokedAccount: isSet(object.revokedAccount) ? RevokedAccount.fromJSON(object.revokedAccount) : undefined,
    };
  },

  toJSON(message: QueryGetRevokedAccountResponse): unknown {
    const obj: any = {};
    if (message.revokedAccount !== undefined) {
      obj.revokedAccount = RevokedAccount.toJSON(message.revokedAccount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetRevokedAccountResponse>, I>>(base?: I): QueryGetRevokedAccountResponse {
    return QueryGetRevokedAccountResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetRevokedAccountResponse>, I>>(
    object: I,
  ): QueryGetRevokedAccountResponse {
    const message = createBaseQueryGetRevokedAccountResponse();
    message.revokedAccount = (object.revokedAccount !== undefined && object.revokedAccount !== null)
      ? RevokedAccount.fromPartial(object.revokedAccount)
      : undefined;
    return message;
  },
};

function createBaseQueryAllRevokedAccountRequest(): QueryAllRevokedAccountRequest {
  return { pagination: undefined };
}

export const QueryAllRevokedAccountRequest = {
  encode(message: QueryAllRevokedAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRevokedAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRevokedAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllRevokedAccountRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllRevokedAccountRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllRevokedAccountRequest>, I>>(base?: I): QueryAllRevokedAccountRequest {
    return QueryAllRevokedAccountRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllRevokedAccountRequest>, I>>(
    object: I,
  ): QueryAllRevokedAccountRequest {
    const message = createBaseQueryAllRevokedAccountRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllRevokedAccountResponse(): QueryAllRevokedAccountResponse {
  return { revokedAccount: [], pagination: undefined };
}

export const QueryAllRevokedAccountResponse = {
  encode(message: QueryAllRevokedAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.revokedAccount) {
      RevokedAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRevokedAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRevokedAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.revokedAccount.push(RevokedAccount.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllRevokedAccountResponse {
    return {
      revokedAccount: Array.isArray(object?.revokedAccount)
        ? object.revokedAccount.map((e: any) => RevokedAccount.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllRevokedAccountResponse): unknown {
    const obj: any = {};
    if (message.revokedAccount?.length) {
      obj.revokedAccount = message.revokedAccount.map((e) => RevokedAccount.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllRevokedAccountResponse>, I>>(base?: I): QueryAllRevokedAccountResponse {
    return QueryAllRevokedAccountResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllRevokedAccountResponse>, I>>(
    object: I,
  ): QueryAllRevokedAccountResponse {
    const message = createBaseQueryAllRevokedAccountResponse();
    message.revokedAccount = object.revokedAccount?.map((e) => RevokedAccount.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetRejectedAccountRequest(): QueryGetRejectedAccountRequest {
  return { address: "" };
}

export const QueryGetRejectedAccountRequest = {
  encode(message: QueryGetRejectedAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRejectedAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRejectedAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetRejectedAccountRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryGetRejectedAccountRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetRejectedAccountRequest>, I>>(base?: I): QueryGetRejectedAccountRequest {
    return QueryGetRejectedAccountRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetRejectedAccountRequest>, I>>(
    object: I,
  ): QueryGetRejectedAccountRequest {
    const message = createBaseQueryGetRejectedAccountRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryGetRejectedAccountResponse(): QueryGetRejectedAccountResponse {
  return { rejectedAccount: undefined };
}

export const QueryGetRejectedAccountResponse = {
  encode(message: QueryGetRejectedAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rejectedAccount !== undefined) {
      RejectedAccount.encode(message.rejectedAccount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRejectedAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRejectedAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rejectedAccount = RejectedAccount.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetRejectedAccountResponse {
    return {
      rejectedAccount: isSet(object.rejectedAccount) ? RejectedAccount.fromJSON(object.rejectedAccount) : undefined,
    };
  },

  toJSON(message: QueryGetRejectedAccountResponse): unknown {
    const obj: any = {};
    if (message.rejectedAccount !== undefined) {
      obj.rejectedAccount = RejectedAccount.toJSON(message.rejectedAccount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetRejectedAccountResponse>, I>>(base?: I): QueryGetRejectedAccountResponse {
    return QueryGetRejectedAccountResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetRejectedAccountResponse>, I>>(
    object: I,
  ): QueryGetRejectedAccountResponse {
    const message = createBaseQueryGetRejectedAccountResponse();
    message.rejectedAccount = (object.rejectedAccount !== undefined && object.rejectedAccount !== null)
      ? RejectedAccount.fromPartial(object.rejectedAccount)
      : undefined;
    return message;
  },
};

function createBaseQueryAllRejectedAccountRequest(): QueryAllRejectedAccountRequest {
  return { pagination: undefined };
}

export const QueryAllRejectedAccountRequest = {
  encode(message: QueryAllRejectedAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRejectedAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRejectedAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllRejectedAccountRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllRejectedAccountRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllRejectedAccountRequest>, I>>(base?: I): QueryAllRejectedAccountRequest {
    return QueryAllRejectedAccountRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllRejectedAccountRequest>, I>>(
    object: I,
  ): QueryAllRejectedAccountRequest {
    const message = createBaseQueryAllRejectedAccountRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllRejectedAccountResponse(): QueryAllRejectedAccountResponse {
  return { rejectedAccount: [], pagination: undefined };
}

export const QueryAllRejectedAccountResponse = {
  encode(message: QueryAllRejectedAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rejectedAccount) {
      RejectedAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRejectedAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRejectedAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rejectedAccount.push(RejectedAccount.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllRejectedAccountResponse {
    return {
      rejectedAccount: Array.isArray(object?.rejectedAccount)
        ? object.rejectedAccount.map((e: any) => RejectedAccount.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllRejectedAccountResponse): unknown {
    const obj: any = {};
    if (message.rejectedAccount?.length) {
      obj.rejectedAccount = message.rejectedAccount.map((e) => RejectedAccount.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllRejectedAccountResponse>, I>>(base?: I): QueryAllRejectedAccountResponse {
    return QueryAllRejectedAccountResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllRejectedAccountResponse>, I>>(
    object: I,
  ): QueryAllRejectedAccountResponse {
    const message = createBaseQueryAllRejectedAccountResponse();
    message.rejectedAccount = object.rejectedAccount?.map((e) => RejectedAccount.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a account by index. */
  Account(request: QueryGetAccountRequest): Promise<QueryGetAccountResponse>;
  /** Queries a list of account items. */
  AccountAll(request: QueryAllAccountRequest): Promise<QueryAllAccountResponse>;
  /** Queries a pendingAccount by index. */
  PendingAccount(request: QueryGetPendingAccountRequest): Promise<QueryGetPendingAccountResponse>;
  /** Queries a list of pendingAccount items. */
  PendingAccountAll(request: QueryAllPendingAccountRequest): Promise<QueryAllPendingAccountResponse>;
  /** Queries a pendingAccountRevocation by index. */
  PendingAccountRevocation(
    request: QueryGetPendingAccountRevocationRequest,
  ): Promise<QueryGetPendingAccountRevocationResponse>;
  /** Queries a list of pendingAccountRevocation items. */
  PendingAccountRevocationAll(
    request: QueryAllPendingAccountRevocationRequest,
  ): Promise<QueryAllPendingAccountRevocationResponse>;
  /** Queries a accountStat by index. */
  AccountStat(request: QueryGetAccountStatRequest): Promise<QueryGetAccountStatResponse>;
  /** Queries a RevokedAccount by index. */
  RevokedAccount(request: QueryGetRevokedAccountRequest): Promise<QueryGetRevokedAccountResponse>;
  /** Queries a list of RevokedAccount items. */
  RevokedAccountAll(request: QueryAllRevokedAccountRequest): Promise<QueryAllRevokedAccountResponse>;
  /** Queries a RejectedAccount by index. */
  RejectedAccount(request: QueryGetRejectedAccountRequest): Promise<QueryGetRejectedAccountResponse>;
  /** Queries a list of RejectedAccount items. */
  RejectedAccountAll(request: QueryAllRejectedAccountRequest): Promise<QueryAllRejectedAccountResponse>;
}

export const QueryServiceName = "zigbeealliance.distributedcomplianceledger.dclauth.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Account = this.Account.bind(this);
    this.AccountAll = this.AccountAll.bind(this);
    this.PendingAccount = this.PendingAccount.bind(this);
    this.PendingAccountAll = this.PendingAccountAll.bind(this);
    this.PendingAccountRevocation = this.PendingAccountRevocation.bind(this);
    this.PendingAccountRevocationAll = this.PendingAccountRevocationAll.bind(this);
    this.AccountStat = this.AccountStat.bind(this);
    this.RevokedAccount = this.RevokedAccount.bind(this);
    this.RevokedAccountAll = this.RevokedAccountAll.bind(this);
    this.RejectedAccount = this.RejectedAccount.bind(this);
    this.RejectedAccountAll = this.RejectedAccountAll.bind(this);
  }
  Account(request: QueryGetAccountRequest): Promise<QueryGetAccountResponse> {
    const data = QueryGetAccountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Account", data);
    return promise.then((data) => QueryGetAccountResponse.decode(_m0.Reader.create(data)));
  }

  AccountAll(request: QueryAllAccountRequest): Promise<QueryAllAccountResponse> {
    const data = QueryAllAccountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AccountAll", data);
    return promise.then((data) => QueryAllAccountResponse.decode(_m0.Reader.create(data)));
  }

  PendingAccount(request: QueryGetPendingAccountRequest): Promise<QueryGetPendingAccountResponse> {
    const data = QueryGetPendingAccountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PendingAccount", data);
    return promise.then((data) => QueryGetPendingAccountResponse.decode(_m0.Reader.create(data)));
  }

  PendingAccountAll(request: QueryAllPendingAccountRequest): Promise<QueryAllPendingAccountResponse> {
    const data = QueryAllPendingAccountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PendingAccountAll", data);
    return promise.then((data) => QueryAllPendingAccountResponse.decode(_m0.Reader.create(data)));
  }

  PendingAccountRevocation(
    request: QueryGetPendingAccountRevocationRequest,
  ): Promise<QueryGetPendingAccountRevocationResponse> {
    const data = QueryGetPendingAccountRevocationRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PendingAccountRevocation", data);
    return promise.then((data) => QueryGetPendingAccountRevocationResponse.decode(_m0.Reader.create(data)));
  }

  PendingAccountRevocationAll(
    request: QueryAllPendingAccountRevocationRequest,
  ): Promise<QueryAllPendingAccountRevocationResponse> {
    const data = QueryAllPendingAccountRevocationRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PendingAccountRevocationAll", data);
    return promise.then((data) => QueryAllPendingAccountRevocationResponse.decode(_m0.Reader.create(data)));
  }

  AccountStat(request: QueryGetAccountStatRequest): Promise<QueryGetAccountStatResponse> {
    const data = QueryGetAccountStatRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AccountStat", data);
    return promise.then((data) => QueryGetAccountStatResponse.decode(_m0.Reader.create(data)));
  }

  RevokedAccount(request: QueryGetRevokedAccountRequest): Promise<QueryGetRevokedAccountResponse> {
    const data = QueryGetRevokedAccountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RevokedAccount", data);
    return promise.then((data) => QueryGetRevokedAccountResponse.decode(_m0.Reader.create(data)));
  }

  RevokedAccountAll(request: QueryAllRevokedAccountRequest): Promise<QueryAllRevokedAccountResponse> {
    const data = QueryAllRevokedAccountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RevokedAccountAll", data);
    return promise.then((data) => QueryAllRevokedAccountResponse.decode(_m0.Reader.create(data)));
  }

  RejectedAccount(request: QueryGetRejectedAccountRequest): Promise<QueryGetRejectedAccountResponse> {
    const data = QueryGetRejectedAccountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RejectedAccount", data);
    return promise.then((data) => QueryGetRejectedAccountResponse.decode(_m0.Reader.create(data)));
  }

  RejectedAccountAll(request: QueryAllRejectedAccountRequest): Promise<QueryAllRejectedAccountResponse> {
    const data = QueryAllRejectedAccountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RejectedAccountAll", data);
    return promise.then((data) => QueryAllRejectedAccountResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
