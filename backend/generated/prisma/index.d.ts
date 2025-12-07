
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Kereta
 * 
 */
export type Kereta = $Result.DefaultSelection<Prisma.$KeretaPayload>
/**
 * Model Gerbong
 * 
 */
export type Gerbong = $Result.DefaultSelection<Prisma.$GerbongPayload>
/**
 * Model Kursi
 * 
 */
export type Kursi = $Result.DefaultSelection<Prisma.$KursiPayload>
/**
 * Model Jadwal
 * 
 */
export type Jadwal = $Result.DefaultSelection<Prisma.$JadwalPayload>
/**
 * Model Pembelian_tiket
 * 
 */
export type Pembelian_tiket = $Result.DefaultSelection<Prisma.$Pembelian_tiketPayload>
/**
 * Model Detail_pembelian
 * 
 */
export type Detail_pembelian = $Result.DefaultSelection<Prisma.$Detail_pembelianPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  admin: 'admin',
  penumpang: 'penumpang'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kereta`: Exposes CRUD operations for the **Kereta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Keretas
    * const keretas = await prisma.kereta.findMany()
    * ```
    */
  get kereta(): Prisma.KeretaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gerbong`: Exposes CRUD operations for the **Gerbong** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gerbongs
    * const gerbongs = await prisma.gerbong.findMany()
    * ```
    */
  get gerbong(): Prisma.GerbongDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kursi`: Exposes CRUD operations for the **Kursi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kursis
    * const kursis = await prisma.kursi.findMany()
    * ```
    */
  get kursi(): Prisma.KursiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jadwal`: Exposes CRUD operations for the **Jadwal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jadwals
    * const jadwals = await prisma.jadwal.findMany()
    * ```
    */
  get jadwal(): Prisma.JadwalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pembelian_tiket`: Exposes CRUD operations for the **Pembelian_tiket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pembelian_tikets
    * const pembelian_tikets = await prisma.pembelian_tiket.findMany()
    * ```
    */
  get pembelian_tiket(): Prisma.Pembelian_tiketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detail_pembelian`: Exposes CRUD operations for the **Detail_pembelian** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detail_pembelians
    * const detail_pembelians = await prisma.detail_pembelian.findMany()
    * ```
    */
  get detail_pembelian(): Prisma.Detail_pembelianDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Kereta: 'Kereta',
    Gerbong: 'Gerbong',
    Kursi: 'Kursi',
    Jadwal: 'Jadwal',
    Pembelian_tiket: 'Pembelian_tiket',
    Detail_pembelian: 'Detail_pembelian'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "kereta" | "gerbong" | "kursi" | "jadwal" | "pembelian_tiket" | "detail_pembelian"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Kereta: {
        payload: Prisma.$KeretaPayload<ExtArgs>
        fields: Prisma.KeretaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KeretaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeretaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KeretaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeretaPayload>
          }
          findFirst: {
            args: Prisma.KeretaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeretaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KeretaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeretaPayload>
          }
          findMany: {
            args: Prisma.KeretaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeretaPayload>[]
          }
          create: {
            args: Prisma.KeretaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeretaPayload>
          }
          createMany: {
            args: Prisma.KeretaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.KeretaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeretaPayload>
          }
          update: {
            args: Prisma.KeretaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeretaPayload>
          }
          deleteMany: {
            args: Prisma.KeretaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KeretaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KeretaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeretaPayload>
          }
          aggregate: {
            args: Prisma.KeretaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKereta>
          }
          groupBy: {
            args: Prisma.KeretaGroupByArgs<ExtArgs>
            result: $Utils.Optional<KeretaGroupByOutputType>[]
          }
          count: {
            args: Prisma.KeretaCountArgs<ExtArgs>
            result: $Utils.Optional<KeretaCountAggregateOutputType> | number
          }
        }
      }
      Gerbong: {
        payload: Prisma.$GerbongPayload<ExtArgs>
        fields: Prisma.GerbongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GerbongFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerbongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GerbongFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerbongPayload>
          }
          findFirst: {
            args: Prisma.GerbongFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerbongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GerbongFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerbongPayload>
          }
          findMany: {
            args: Prisma.GerbongFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerbongPayload>[]
          }
          create: {
            args: Prisma.GerbongCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerbongPayload>
          }
          createMany: {
            args: Prisma.GerbongCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GerbongDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerbongPayload>
          }
          update: {
            args: Prisma.GerbongUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerbongPayload>
          }
          deleteMany: {
            args: Prisma.GerbongDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GerbongUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GerbongUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerbongPayload>
          }
          aggregate: {
            args: Prisma.GerbongAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGerbong>
          }
          groupBy: {
            args: Prisma.GerbongGroupByArgs<ExtArgs>
            result: $Utils.Optional<GerbongGroupByOutputType>[]
          }
          count: {
            args: Prisma.GerbongCountArgs<ExtArgs>
            result: $Utils.Optional<GerbongCountAggregateOutputType> | number
          }
        }
      }
      Kursi: {
        payload: Prisma.$KursiPayload<ExtArgs>
        fields: Prisma.KursiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KursiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KursiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KursiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KursiPayload>
          }
          findFirst: {
            args: Prisma.KursiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KursiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KursiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KursiPayload>
          }
          findMany: {
            args: Prisma.KursiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KursiPayload>[]
          }
          create: {
            args: Prisma.KursiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KursiPayload>
          }
          createMany: {
            args: Prisma.KursiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.KursiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KursiPayload>
          }
          update: {
            args: Prisma.KursiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KursiPayload>
          }
          deleteMany: {
            args: Prisma.KursiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KursiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KursiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KursiPayload>
          }
          aggregate: {
            args: Prisma.KursiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKursi>
          }
          groupBy: {
            args: Prisma.KursiGroupByArgs<ExtArgs>
            result: $Utils.Optional<KursiGroupByOutputType>[]
          }
          count: {
            args: Prisma.KursiCountArgs<ExtArgs>
            result: $Utils.Optional<KursiCountAggregateOutputType> | number
          }
        }
      }
      Jadwal: {
        payload: Prisma.$JadwalPayload<ExtArgs>
        fields: Prisma.JadwalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JadwalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JadwalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          findFirst: {
            args: Prisma.JadwalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JadwalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          findMany: {
            args: Prisma.JadwalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>[]
          }
          create: {
            args: Prisma.JadwalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          createMany: {
            args: Prisma.JadwalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JadwalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          update: {
            args: Prisma.JadwalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          deleteMany: {
            args: Prisma.JadwalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JadwalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JadwalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          aggregate: {
            args: Prisma.JadwalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJadwal>
          }
          groupBy: {
            args: Prisma.JadwalGroupByArgs<ExtArgs>
            result: $Utils.Optional<JadwalGroupByOutputType>[]
          }
          count: {
            args: Prisma.JadwalCountArgs<ExtArgs>
            result: $Utils.Optional<JadwalCountAggregateOutputType> | number
          }
        }
      }
      Pembelian_tiket: {
        payload: Prisma.$Pembelian_tiketPayload<ExtArgs>
        fields: Prisma.Pembelian_tiketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Pembelian_tiketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Pembelian_tiketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Pembelian_tiketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Pembelian_tiketPayload>
          }
          findFirst: {
            args: Prisma.Pembelian_tiketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Pembelian_tiketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Pembelian_tiketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Pembelian_tiketPayload>
          }
          findMany: {
            args: Prisma.Pembelian_tiketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Pembelian_tiketPayload>[]
          }
          create: {
            args: Prisma.Pembelian_tiketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Pembelian_tiketPayload>
          }
          createMany: {
            args: Prisma.Pembelian_tiketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Pembelian_tiketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Pembelian_tiketPayload>
          }
          update: {
            args: Prisma.Pembelian_tiketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Pembelian_tiketPayload>
          }
          deleteMany: {
            args: Prisma.Pembelian_tiketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Pembelian_tiketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Pembelian_tiketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Pembelian_tiketPayload>
          }
          aggregate: {
            args: Prisma.Pembelian_tiketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePembelian_tiket>
          }
          groupBy: {
            args: Prisma.Pembelian_tiketGroupByArgs<ExtArgs>
            result: $Utils.Optional<Pembelian_tiketGroupByOutputType>[]
          }
          count: {
            args: Prisma.Pembelian_tiketCountArgs<ExtArgs>
            result: $Utils.Optional<Pembelian_tiketCountAggregateOutputType> | number
          }
        }
      }
      Detail_pembelian: {
        payload: Prisma.$Detail_pembelianPayload<ExtArgs>
        fields: Prisma.Detail_pembelianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Detail_pembelianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detail_pembelianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Detail_pembelianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detail_pembelianPayload>
          }
          findFirst: {
            args: Prisma.Detail_pembelianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detail_pembelianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Detail_pembelianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detail_pembelianPayload>
          }
          findMany: {
            args: Prisma.Detail_pembelianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detail_pembelianPayload>[]
          }
          create: {
            args: Prisma.Detail_pembelianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detail_pembelianPayload>
          }
          createMany: {
            args: Prisma.Detail_pembelianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Detail_pembelianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detail_pembelianPayload>
          }
          update: {
            args: Prisma.Detail_pembelianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detail_pembelianPayload>
          }
          deleteMany: {
            args: Prisma.Detail_pembelianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Detail_pembelianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Detail_pembelianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detail_pembelianPayload>
          }
          aggregate: {
            args: Prisma.Detail_pembelianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetail_pembelian>
          }
          groupBy: {
            args: Prisma.Detail_pembelianGroupByArgs<ExtArgs>
            result: $Utils.Optional<Detail_pembelianGroupByOutputType>[]
          }
          count: {
            args: Prisma.Detail_pembelianCountArgs<ExtArgs>
            result: $Utils.Optional<Detail_pembelianCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    kereta?: KeretaOmit
    gerbong?: GerbongOmit
    kursi?: KursiOmit
    jadwal?: JadwalOmit
    pembelian_tiket?: Pembelian_tiketOmit
    detail_pembelian?: Detail_pembelianOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    pembelianTikets: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pembelianTikets?: boolean | UserCountOutputTypeCountPembelianTiketsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPembelianTiketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Pembelian_tiketWhereInput
  }


  /**
   * Count Type KeretaCountOutputType
   */

  export type KeretaCountOutputType = {
    gerbong: number
    jadwal: number
  }

  export type KeretaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gerbong?: boolean | KeretaCountOutputTypeCountGerbongArgs
    jadwal?: boolean | KeretaCountOutputTypeCountJadwalArgs
  }

  // Custom InputTypes
  /**
   * KeretaCountOutputType without action
   */
  export type KeretaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeretaCountOutputType
     */
    select?: KeretaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KeretaCountOutputType without action
   */
  export type KeretaCountOutputTypeCountGerbongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GerbongWhereInput
  }

  /**
   * KeretaCountOutputType without action
   */
  export type KeretaCountOutputTypeCountJadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalWhereInput
  }


  /**
   * Count Type GerbongCountOutputType
   */

  export type GerbongCountOutputType = {
    kursi: number
  }

  export type GerbongCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kursi?: boolean | GerbongCountOutputTypeCountKursiArgs
  }

  // Custom InputTypes
  /**
   * GerbongCountOutputType without action
   */
  export type GerbongCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerbongCountOutputType
     */
    select?: GerbongCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GerbongCountOutputType without action
   */
  export type GerbongCountOutputTypeCountKursiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KursiWhereInput
  }


  /**
   * Count Type KursiCountOutputType
   */

  export type KursiCountOutputType = {
    detailPembelians: number
  }

  export type KursiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detailPembelians?: boolean | KursiCountOutputTypeCountDetailPembeliansArgs
  }

  // Custom InputTypes
  /**
   * KursiCountOutputType without action
   */
  export type KursiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KursiCountOutputType
     */
    select?: KursiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KursiCountOutputType without action
   */
  export type KursiCountOutputTypeCountDetailPembeliansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Detail_pembelianWhereInput
  }


  /**
   * Count Type JadwalCountOutputType
   */

  export type JadwalCountOutputType = {
    pembelianTikets: number
  }

  export type JadwalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pembelianTikets?: boolean | JadwalCountOutputTypeCountPembelianTiketsArgs
  }

  // Custom InputTypes
  /**
   * JadwalCountOutputType without action
   */
  export type JadwalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalCountOutputType
     */
    select?: JadwalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JadwalCountOutputType without action
   */
  export type JadwalCountOutputTypeCountPembelianTiketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Pembelian_tiketWhereInput
  }


  /**
   * Count Type Pembelian_tiketCountOutputType
   */

  export type Pembelian_tiketCountOutputType = {
    detail: number
  }

  export type Pembelian_tiketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detail?: boolean | Pembelian_tiketCountOutputTypeCountDetailArgs
  }

  // Custom InputTypes
  /**
   * Pembelian_tiketCountOutputType without action
   */
  export type Pembelian_tiketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian_tiketCountOutputType
     */
    select?: Pembelian_tiketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Pembelian_tiketCountOutputType without action
   */
  export type Pembelian_tiketCountOutputTypeCountDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Detail_pembelianWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    nik: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    nik: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    address: string | null
    nik: number | null
    grade: string | null
    profile_picture: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    address: string | null
    nik: number | null
    grade: string | null
    profile_picture: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    uuid: number
    name: number
    email: number
    password: number
    phone: number
    address: number
    nik: number
    grade: number
    profile_picture: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    nik?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    nik?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    address?: true
    nik?: true
    grade?: true
    profile_picture?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    address?: true
    nik?: true
    grade?: true
    profile_picture?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    address?: true
    nik?: true
    grade?: true
    profile_picture?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    uuid: string
    name: string
    email: string
    password: string
    phone: string
    address: string
    nik: number
    grade: string
    profile_picture: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    address?: boolean
    nik?: boolean
    grade?: boolean
    profile_picture?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pembelianTikets?: boolean | User$pembelianTiketsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    uuid?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    address?: boolean
    nik?: boolean
    grade?: boolean
    profile_picture?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "name" | "email" | "password" | "phone" | "address" | "nik" | "grade" | "profile_picture" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pembelianTikets?: boolean | User$pembelianTiketsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      pembelianTikets: Prisma.$Pembelian_tiketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      name: string
      email: string
      password: string
      phone: string
      address: string
      nik: number
      grade: string
      profile_picture: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pembelianTikets<T extends User$pembelianTiketsArgs<ExtArgs> = {}>(args?: Subset<T, User$pembelianTiketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Pembelian_tiketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly uuid: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly nik: FieldRef<"User", 'Int'>
    readonly grade: FieldRef<"User", 'String'>
    readonly profile_picture: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.pembelianTikets
   */
  export type User$pembelianTiketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian_tiket
     */
    select?: Pembelian_tiketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian_tiket
     */
    omit?: Pembelian_tiketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Pembelian_tiketInclude<ExtArgs> | null
    where?: Pembelian_tiketWhereInput
    orderBy?: Pembelian_tiketOrderByWithRelationInput | Pembelian_tiketOrderByWithRelationInput[]
    cursor?: Pembelian_tiketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pembelian_tiketScalarFieldEnum | Pembelian_tiketScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Kereta
   */

  export type AggregateKereta = {
    _count: KeretaCountAggregateOutputType | null
    _avg: KeretaAvgAggregateOutputType | null
    _sum: KeretaSumAggregateOutputType | null
    _min: KeretaMinAggregateOutputType | null
    _max: KeretaMaxAggregateOutputType | null
  }

  export type KeretaAvgAggregateOutputType = {
    id: number | null
  }

  export type KeretaSumAggregateOutputType = {
    id: number | null
  }

  export type KeretaMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    description: string | null
    kelas: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KeretaMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    description: string | null
    kelas: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KeretaCountAggregateOutputType = {
    id: number
    uuid: number
    name: number
    description: number
    kelas: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KeretaAvgAggregateInputType = {
    id?: true
  }

  export type KeretaSumAggregateInputType = {
    id?: true
  }

  export type KeretaMinAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    description?: true
    kelas?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KeretaMaxAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    description?: true
    kelas?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KeretaCountAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    description?: true
    kelas?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KeretaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kereta to aggregate.
     */
    where?: KeretaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keretas to fetch.
     */
    orderBy?: KeretaOrderByWithRelationInput | KeretaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KeretaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keretas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keretas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Keretas
    **/
    _count?: true | KeretaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KeretaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KeretaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeretaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeretaMaxAggregateInputType
  }

  export type GetKeretaAggregateType<T extends KeretaAggregateArgs> = {
        [P in keyof T & keyof AggregateKereta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKereta[P]>
      : GetScalarType<T[P], AggregateKereta[P]>
  }




  export type KeretaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeretaWhereInput
    orderBy?: KeretaOrderByWithAggregationInput | KeretaOrderByWithAggregationInput[]
    by: KeretaScalarFieldEnum[] | KeretaScalarFieldEnum
    having?: KeretaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeretaCountAggregateInputType | true
    _avg?: KeretaAvgAggregateInputType
    _sum?: KeretaSumAggregateInputType
    _min?: KeretaMinAggregateInputType
    _max?: KeretaMaxAggregateInputType
  }

  export type KeretaGroupByOutputType = {
    id: number
    uuid: string
    name: string
    description: string
    kelas: string
    createdAt: Date
    updatedAt: Date
    _count: KeretaCountAggregateOutputType | null
    _avg: KeretaAvgAggregateOutputType | null
    _sum: KeretaSumAggregateOutputType | null
    _min: KeretaMinAggregateOutputType | null
    _max: KeretaMaxAggregateOutputType | null
  }

  type GetKeretaGroupByPayload<T extends KeretaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeretaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeretaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeretaGroupByOutputType[P]>
            : GetScalarType<T[P], KeretaGroupByOutputType[P]>
        }
      >
    >


  export type KeretaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    description?: boolean
    kelas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gerbong?: boolean | Kereta$gerbongArgs<ExtArgs>
    jadwal?: boolean | Kereta$jadwalArgs<ExtArgs>
    _count?: boolean | KeretaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kereta"]>



  export type KeretaSelectScalar = {
    id?: boolean
    uuid?: boolean
    name?: boolean
    description?: boolean
    kelas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KeretaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "name" | "description" | "kelas" | "createdAt" | "updatedAt", ExtArgs["result"]["kereta"]>
  export type KeretaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gerbong?: boolean | Kereta$gerbongArgs<ExtArgs>
    jadwal?: boolean | Kereta$jadwalArgs<ExtArgs>
    _count?: boolean | KeretaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $KeretaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kereta"
    objects: {
      gerbong: Prisma.$GerbongPayload<ExtArgs>[]
      jadwal: Prisma.$JadwalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      name: string
      description: string
      kelas: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["kereta"]>
    composites: {}
  }

  type KeretaGetPayload<S extends boolean | null | undefined | KeretaDefaultArgs> = $Result.GetResult<Prisma.$KeretaPayload, S>

  type KeretaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KeretaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KeretaCountAggregateInputType | true
    }

  export interface KeretaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kereta'], meta: { name: 'Kereta' } }
    /**
     * Find zero or one Kereta that matches the filter.
     * @param {KeretaFindUniqueArgs} args - Arguments to find a Kereta
     * @example
     * // Get one Kereta
     * const kereta = await prisma.kereta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KeretaFindUniqueArgs>(args: SelectSubset<T, KeretaFindUniqueArgs<ExtArgs>>): Prisma__KeretaClient<$Result.GetResult<Prisma.$KeretaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kereta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KeretaFindUniqueOrThrowArgs} args - Arguments to find a Kereta
     * @example
     * // Get one Kereta
     * const kereta = await prisma.kereta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KeretaFindUniqueOrThrowArgs>(args: SelectSubset<T, KeretaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KeretaClient<$Result.GetResult<Prisma.$KeretaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kereta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeretaFindFirstArgs} args - Arguments to find a Kereta
     * @example
     * // Get one Kereta
     * const kereta = await prisma.kereta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KeretaFindFirstArgs>(args?: SelectSubset<T, KeretaFindFirstArgs<ExtArgs>>): Prisma__KeretaClient<$Result.GetResult<Prisma.$KeretaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kereta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeretaFindFirstOrThrowArgs} args - Arguments to find a Kereta
     * @example
     * // Get one Kereta
     * const kereta = await prisma.kereta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KeretaFindFirstOrThrowArgs>(args?: SelectSubset<T, KeretaFindFirstOrThrowArgs<ExtArgs>>): Prisma__KeretaClient<$Result.GetResult<Prisma.$KeretaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Keretas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeretaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Keretas
     * const keretas = await prisma.kereta.findMany()
     * 
     * // Get first 10 Keretas
     * const keretas = await prisma.kereta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const keretaWithIdOnly = await prisma.kereta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KeretaFindManyArgs>(args?: SelectSubset<T, KeretaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeretaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kereta.
     * @param {KeretaCreateArgs} args - Arguments to create a Kereta.
     * @example
     * // Create one Kereta
     * const Kereta = await prisma.kereta.create({
     *   data: {
     *     // ... data to create a Kereta
     *   }
     * })
     * 
     */
    create<T extends KeretaCreateArgs>(args: SelectSubset<T, KeretaCreateArgs<ExtArgs>>): Prisma__KeretaClient<$Result.GetResult<Prisma.$KeretaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Keretas.
     * @param {KeretaCreateManyArgs} args - Arguments to create many Keretas.
     * @example
     * // Create many Keretas
     * const kereta = await prisma.kereta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KeretaCreateManyArgs>(args?: SelectSubset<T, KeretaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Kereta.
     * @param {KeretaDeleteArgs} args - Arguments to delete one Kereta.
     * @example
     * // Delete one Kereta
     * const Kereta = await prisma.kereta.delete({
     *   where: {
     *     // ... filter to delete one Kereta
     *   }
     * })
     * 
     */
    delete<T extends KeretaDeleteArgs>(args: SelectSubset<T, KeretaDeleteArgs<ExtArgs>>): Prisma__KeretaClient<$Result.GetResult<Prisma.$KeretaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kereta.
     * @param {KeretaUpdateArgs} args - Arguments to update one Kereta.
     * @example
     * // Update one Kereta
     * const kereta = await prisma.kereta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KeretaUpdateArgs>(args: SelectSubset<T, KeretaUpdateArgs<ExtArgs>>): Prisma__KeretaClient<$Result.GetResult<Prisma.$KeretaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Keretas.
     * @param {KeretaDeleteManyArgs} args - Arguments to filter Keretas to delete.
     * @example
     * // Delete a few Keretas
     * const { count } = await prisma.kereta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KeretaDeleteManyArgs>(args?: SelectSubset<T, KeretaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keretas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeretaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Keretas
     * const kereta = await prisma.kereta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KeretaUpdateManyArgs>(args: SelectSubset<T, KeretaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kereta.
     * @param {KeretaUpsertArgs} args - Arguments to update or create a Kereta.
     * @example
     * // Update or create a Kereta
     * const kereta = await prisma.kereta.upsert({
     *   create: {
     *     // ... data to create a Kereta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kereta we want to update
     *   }
     * })
     */
    upsert<T extends KeretaUpsertArgs>(args: SelectSubset<T, KeretaUpsertArgs<ExtArgs>>): Prisma__KeretaClient<$Result.GetResult<Prisma.$KeretaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Keretas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeretaCountArgs} args - Arguments to filter Keretas to count.
     * @example
     * // Count the number of Keretas
     * const count = await prisma.kereta.count({
     *   where: {
     *     // ... the filter for the Keretas we want to count
     *   }
     * })
    **/
    count<T extends KeretaCountArgs>(
      args?: Subset<T, KeretaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeretaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kereta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeretaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KeretaAggregateArgs>(args: Subset<T, KeretaAggregateArgs>): Prisma.PrismaPromise<GetKeretaAggregateType<T>>

    /**
     * Group by Kereta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeretaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KeretaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KeretaGroupByArgs['orderBy'] }
        : { orderBy?: KeretaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KeretaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeretaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kereta model
   */
  readonly fields: KeretaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kereta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KeretaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gerbong<T extends Kereta$gerbongArgs<ExtArgs> = {}>(args?: Subset<T, Kereta$gerbongArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GerbongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jadwal<T extends Kereta$jadwalArgs<ExtArgs> = {}>(args?: Subset<T, Kereta$jadwalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Kereta model
   */
  interface KeretaFieldRefs {
    readonly id: FieldRef<"Kereta", 'Int'>
    readonly uuid: FieldRef<"Kereta", 'String'>
    readonly name: FieldRef<"Kereta", 'String'>
    readonly description: FieldRef<"Kereta", 'String'>
    readonly kelas: FieldRef<"Kereta", 'String'>
    readonly createdAt: FieldRef<"Kereta", 'DateTime'>
    readonly updatedAt: FieldRef<"Kereta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Kereta findUnique
   */
  export type KeretaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kereta
     */
    select?: KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kereta
     */
    omit?: KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeretaInclude<ExtArgs> | null
    /**
     * Filter, which Kereta to fetch.
     */
    where: KeretaWhereUniqueInput
  }

  /**
   * Kereta findUniqueOrThrow
   */
  export type KeretaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kereta
     */
    select?: KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kereta
     */
    omit?: KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeretaInclude<ExtArgs> | null
    /**
     * Filter, which Kereta to fetch.
     */
    where: KeretaWhereUniqueInput
  }

  /**
   * Kereta findFirst
   */
  export type KeretaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kereta
     */
    select?: KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kereta
     */
    omit?: KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeretaInclude<ExtArgs> | null
    /**
     * Filter, which Kereta to fetch.
     */
    where?: KeretaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keretas to fetch.
     */
    orderBy?: KeretaOrderByWithRelationInput | KeretaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keretas.
     */
    cursor?: KeretaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keretas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keretas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keretas.
     */
    distinct?: KeretaScalarFieldEnum | KeretaScalarFieldEnum[]
  }

  /**
   * Kereta findFirstOrThrow
   */
  export type KeretaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kereta
     */
    select?: KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kereta
     */
    omit?: KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeretaInclude<ExtArgs> | null
    /**
     * Filter, which Kereta to fetch.
     */
    where?: KeretaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keretas to fetch.
     */
    orderBy?: KeretaOrderByWithRelationInput | KeretaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keretas.
     */
    cursor?: KeretaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keretas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keretas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keretas.
     */
    distinct?: KeretaScalarFieldEnum | KeretaScalarFieldEnum[]
  }

  /**
   * Kereta findMany
   */
  export type KeretaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kereta
     */
    select?: KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kereta
     */
    omit?: KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeretaInclude<ExtArgs> | null
    /**
     * Filter, which Keretas to fetch.
     */
    where?: KeretaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keretas to fetch.
     */
    orderBy?: KeretaOrderByWithRelationInput | KeretaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Keretas.
     */
    cursor?: KeretaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keretas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keretas.
     */
    skip?: number
    distinct?: KeretaScalarFieldEnum | KeretaScalarFieldEnum[]
  }

  /**
   * Kereta create
   */
  export type KeretaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kereta
     */
    select?: KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kereta
     */
    omit?: KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeretaInclude<ExtArgs> | null
    /**
     * The data needed to create a Kereta.
     */
    data: XOR<KeretaCreateInput, KeretaUncheckedCreateInput>
  }

  /**
   * Kereta createMany
   */
  export type KeretaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Keretas.
     */
    data: KeretaCreateManyInput | KeretaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kereta update
   */
  export type KeretaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kereta
     */
    select?: KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kereta
     */
    omit?: KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeretaInclude<ExtArgs> | null
    /**
     * The data needed to update a Kereta.
     */
    data: XOR<KeretaUpdateInput, KeretaUncheckedUpdateInput>
    /**
     * Choose, which Kereta to update.
     */
    where: KeretaWhereUniqueInput
  }

  /**
   * Kereta updateMany
   */
  export type KeretaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Keretas.
     */
    data: XOR<KeretaUpdateManyMutationInput, KeretaUncheckedUpdateManyInput>
    /**
     * Filter which Keretas to update
     */
    where?: KeretaWhereInput
    /**
     * Limit how many Keretas to update.
     */
    limit?: number
  }

  /**
   * Kereta upsert
   */
  export type KeretaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kereta
     */
    select?: KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kereta
     */
    omit?: KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeretaInclude<ExtArgs> | null
    /**
     * The filter to search for the Kereta to update in case it exists.
     */
    where: KeretaWhereUniqueInput
    /**
     * In case the Kereta found by the `where` argument doesn't exist, create a new Kereta with this data.
     */
    create: XOR<KeretaCreateInput, KeretaUncheckedCreateInput>
    /**
     * In case the Kereta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KeretaUpdateInput, KeretaUncheckedUpdateInput>
  }

  /**
   * Kereta delete
   */
  export type KeretaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kereta
     */
    select?: KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kereta
     */
    omit?: KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeretaInclude<ExtArgs> | null
    /**
     * Filter which Kereta to delete.
     */
    where: KeretaWhereUniqueInput
  }

  /**
   * Kereta deleteMany
   */
  export type KeretaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keretas to delete
     */
    where?: KeretaWhereInput
    /**
     * Limit how many Keretas to delete.
     */
    limit?: number
  }

  /**
   * Kereta.gerbong
   */
  export type Kereta$gerbongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gerbong
     */
    select?: GerbongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gerbong
     */
    omit?: GerbongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerbongInclude<ExtArgs> | null
    where?: GerbongWhereInput
    orderBy?: GerbongOrderByWithRelationInput | GerbongOrderByWithRelationInput[]
    cursor?: GerbongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GerbongScalarFieldEnum | GerbongScalarFieldEnum[]
  }

  /**
   * Kereta.jadwal
   */
  export type Kereta$jadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    where?: JadwalWhereInput
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    cursor?: JadwalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * Kereta without action
   */
  export type KeretaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kereta
     */
    select?: KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kereta
     */
    omit?: KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeretaInclude<ExtArgs> | null
  }


  /**
   * Model Gerbong
   */

  export type AggregateGerbong = {
    _count: GerbongCountAggregateOutputType | null
    _avg: GerbongAvgAggregateOutputType | null
    _sum: GerbongSumAggregateOutputType | null
    _min: GerbongMinAggregateOutputType | null
    _max: GerbongMaxAggregateOutputType | null
  }

  export type GerbongAvgAggregateOutputType = {
    id: number | null
    kouta: number | null
    keretaId: number | null
  }

  export type GerbongSumAggregateOutputType = {
    id: number | null
    kouta: number | null
    keretaId: number | null
  }

  export type GerbongMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    kouta: number | null
    keretaId: number | null
  }

  export type GerbongMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    kouta: number | null
    keretaId: number | null
  }

  export type GerbongCountAggregateOutputType = {
    id: number
    uuid: number
    kouta: number
    keretaId: number
    _all: number
  }


  export type GerbongAvgAggregateInputType = {
    id?: true
    kouta?: true
    keretaId?: true
  }

  export type GerbongSumAggregateInputType = {
    id?: true
    kouta?: true
    keretaId?: true
  }

  export type GerbongMinAggregateInputType = {
    id?: true
    uuid?: true
    kouta?: true
    keretaId?: true
  }

  export type GerbongMaxAggregateInputType = {
    id?: true
    uuid?: true
    kouta?: true
    keretaId?: true
  }

  export type GerbongCountAggregateInputType = {
    id?: true
    uuid?: true
    kouta?: true
    keretaId?: true
    _all?: true
  }

  export type GerbongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gerbong to aggregate.
     */
    where?: GerbongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gerbongs to fetch.
     */
    orderBy?: GerbongOrderByWithRelationInput | GerbongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GerbongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gerbongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gerbongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gerbongs
    **/
    _count?: true | GerbongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GerbongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GerbongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GerbongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GerbongMaxAggregateInputType
  }

  export type GetGerbongAggregateType<T extends GerbongAggregateArgs> = {
        [P in keyof T & keyof AggregateGerbong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGerbong[P]>
      : GetScalarType<T[P], AggregateGerbong[P]>
  }




  export type GerbongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GerbongWhereInput
    orderBy?: GerbongOrderByWithAggregationInput | GerbongOrderByWithAggregationInput[]
    by: GerbongScalarFieldEnum[] | GerbongScalarFieldEnum
    having?: GerbongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GerbongCountAggregateInputType | true
    _avg?: GerbongAvgAggregateInputType
    _sum?: GerbongSumAggregateInputType
    _min?: GerbongMinAggregateInputType
    _max?: GerbongMaxAggregateInputType
  }

  export type GerbongGroupByOutputType = {
    id: number
    uuid: string
    kouta: number
    keretaId: number
    _count: GerbongCountAggregateOutputType | null
    _avg: GerbongAvgAggregateOutputType | null
    _sum: GerbongSumAggregateOutputType | null
    _min: GerbongMinAggregateOutputType | null
    _max: GerbongMaxAggregateOutputType | null
  }

  type GetGerbongGroupByPayload<T extends GerbongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GerbongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GerbongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GerbongGroupByOutputType[P]>
            : GetScalarType<T[P], GerbongGroupByOutputType[P]>
        }
      >
    >


  export type GerbongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    kouta?: boolean
    keretaId?: boolean
    kereta?: boolean | KeretaDefaultArgs<ExtArgs>
    kursi?: boolean | Gerbong$kursiArgs<ExtArgs>
    _count?: boolean | GerbongCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gerbong"]>



  export type GerbongSelectScalar = {
    id?: boolean
    uuid?: boolean
    kouta?: boolean
    keretaId?: boolean
  }

  export type GerbongOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "kouta" | "keretaId", ExtArgs["result"]["gerbong"]>
  export type GerbongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kereta?: boolean | KeretaDefaultArgs<ExtArgs>
    kursi?: boolean | Gerbong$kursiArgs<ExtArgs>
    _count?: boolean | GerbongCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GerbongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gerbong"
    objects: {
      kereta: Prisma.$KeretaPayload<ExtArgs>
      kursi: Prisma.$KursiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      kouta: number
      keretaId: number
    }, ExtArgs["result"]["gerbong"]>
    composites: {}
  }

  type GerbongGetPayload<S extends boolean | null | undefined | GerbongDefaultArgs> = $Result.GetResult<Prisma.$GerbongPayload, S>

  type GerbongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GerbongFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GerbongCountAggregateInputType | true
    }

  export interface GerbongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gerbong'], meta: { name: 'Gerbong' } }
    /**
     * Find zero or one Gerbong that matches the filter.
     * @param {GerbongFindUniqueArgs} args - Arguments to find a Gerbong
     * @example
     * // Get one Gerbong
     * const gerbong = await prisma.gerbong.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GerbongFindUniqueArgs>(args: SelectSubset<T, GerbongFindUniqueArgs<ExtArgs>>): Prisma__GerbongClient<$Result.GetResult<Prisma.$GerbongPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gerbong that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GerbongFindUniqueOrThrowArgs} args - Arguments to find a Gerbong
     * @example
     * // Get one Gerbong
     * const gerbong = await prisma.gerbong.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GerbongFindUniqueOrThrowArgs>(args: SelectSubset<T, GerbongFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GerbongClient<$Result.GetResult<Prisma.$GerbongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gerbong that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GerbongFindFirstArgs} args - Arguments to find a Gerbong
     * @example
     * // Get one Gerbong
     * const gerbong = await prisma.gerbong.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GerbongFindFirstArgs>(args?: SelectSubset<T, GerbongFindFirstArgs<ExtArgs>>): Prisma__GerbongClient<$Result.GetResult<Prisma.$GerbongPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gerbong that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GerbongFindFirstOrThrowArgs} args - Arguments to find a Gerbong
     * @example
     * // Get one Gerbong
     * const gerbong = await prisma.gerbong.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GerbongFindFirstOrThrowArgs>(args?: SelectSubset<T, GerbongFindFirstOrThrowArgs<ExtArgs>>): Prisma__GerbongClient<$Result.GetResult<Prisma.$GerbongPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gerbongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GerbongFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gerbongs
     * const gerbongs = await prisma.gerbong.findMany()
     * 
     * // Get first 10 Gerbongs
     * const gerbongs = await prisma.gerbong.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gerbongWithIdOnly = await prisma.gerbong.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GerbongFindManyArgs>(args?: SelectSubset<T, GerbongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GerbongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gerbong.
     * @param {GerbongCreateArgs} args - Arguments to create a Gerbong.
     * @example
     * // Create one Gerbong
     * const Gerbong = await prisma.gerbong.create({
     *   data: {
     *     // ... data to create a Gerbong
     *   }
     * })
     * 
     */
    create<T extends GerbongCreateArgs>(args: SelectSubset<T, GerbongCreateArgs<ExtArgs>>): Prisma__GerbongClient<$Result.GetResult<Prisma.$GerbongPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gerbongs.
     * @param {GerbongCreateManyArgs} args - Arguments to create many Gerbongs.
     * @example
     * // Create many Gerbongs
     * const gerbong = await prisma.gerbong.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GerbongCreateManyArgs>(args?: SelectSubset<T, GerbongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Gerbong.
     * @param {GerbongDeleteArgs} args - Arguments to delete one Gerbong.
     * @example
     * // Delete one Gerbong
     * const Gerbong = await prisma.gerbong.delete({
     *   where: {
     *     // ... filter to delete one Gerbong
     *   }
     * })
     * 
     */
    delete<T extends GerbongDeleteArgs>(args: SelectSubset<T, GerbongDeleteArgs<ExtArgs>>): Prisma__GerbongClient<$Result.GetResult<Prisma.$GerbongPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gerbong.
     * @param {GerbongUpdateArgs} args - Arguments to update one Gerbong.
     * @example
     * // Update one Gerbong
     * const gerbong = await prisma.gerbong.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GerbongUpdateArgs>(args: SelectSubset<T, GerbongUpdateArgs<ExtArgs>>): Prisma__GerbongClient<$Result.GetResult<Prisma.$GerbongPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gerbongs.
     * @param {GerbongDeleteManyArgs} args - Arguments to filter Gerbongs to delete.
     * @example
     * // Delete a few Gerbongs
     * const { count } = await prisma.gerbong.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GerbongDeleteManyArgs>(args?: SelectSubset<T, GerbongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gerbongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GerbongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gerbongs
     * const gerbong = await prisma.gerbong.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GerbongUpdateManyArgs>(args: SelectSubset<T, GerbongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gerbong.
     * @param {GerbongUpsertArgs} args - Arguments to update or create a Gerbong.
     * @example
     * // Update or create a Gerbong
     * const gerbong = await prisma.gerbong.upsert({
     *   create: {
     *     // ... data to create a Gerbong
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gerbong we want to update
     *   }
     * })
     */
    upsert<T extends GerbongUpsertArgs>(args: SelectSubset<T, GerbongUpsertArgs<ExtArgs>>): Prisma__GerbongClient<$Result.GetResult<Prisma.$GerbongPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gerbongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GerbongCountArgs} args - Arguments to filter Gerbongs to count.
     * @example
     * // Count the number of Gerbongs
     * const count = await prisma.gerbong.count({
     *   where: {
     *     // ... the filter for the Gerbongs we want to count
     *   }
     * })
    **/
    count<T extends GerbongCountArgs>(
      args?: Subset<T, GerbongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GerbongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gerbong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GerbongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GerbongAggregateArgs>(args: Subset<T, GerbongAggregateArgs>): Prisma.PrismaPromise<GetGerbongAggregateType<T>>

    /**
     * Group by Gerbong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GerbongGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GerbongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GerbongGroupByArgs['orderBy'] }
        : { orderBy?: GerbongGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GerbongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGerbongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gerbong model
   */
  readonly fields: GerbongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gerbong.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GerbongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kereta<T extends KeretaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KeretaDefaultArgs<ExtArgs>>): Prisma__KeretaClient<$Result.GetResult<Prisma.$KeretaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    kursi<T extends Gerbong$kursiArgs<ExtArgs> = {}>(args?: Subset<T, Gerbong$kursiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KursiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Gerbong model
   */
  interface GerbongFieldRefs {
    readonly id: FieldRef<"Gerbong", 'Int'>
    readonly uuid: FieldRef<"Gerbong", 'String'>
    readonly kouta: FieldRef<"Gerbong", 'Int'>
    readonly keretaId: FieldRef<"Gerbong", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Gerbong findUnique
   */
  export type GerbongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gerbong
     */
    select?: GerbongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gerbong
     */
    omit?: GerbongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerbongInclude<ExtArgs> | null
    /**
     * Filter, which Gerbong to fetch.
     */
    where: GerbongWhereUniqueInput
  }

  /**
   * Gerbong findUniqueOrThrow
   */
  export type GerbongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gerbong
     */
    select?: GerbongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gerbong
     */
    omit?: GerbongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerbongInclude<ExtArgs> | null
    /**
     * Filter, which Gerbong to fetch.
     */
    where: GerbongWhereUniqueInput
  }

  /**
   * Gerbong findFirst
   */
  export type GerbongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gerbong
     */
    select?: GerbongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gerbong
     */
    omit?: GerbongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerbongInclude<ExtArgs> | null
    /**
     * Filter, which Gerbong to fetch.
     */
    where?: GerbongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gerbongs to fetch.
     */
    orderBy?: GerbongOrderByWithRelationInput | GerbongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gerbongs.
     */
    cursor?: GerbongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gerbongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gerbongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gerbongs.
     */
    distinct?: GerbongScalarFieldEnum | GerbongScalarFieldEnum[]
  }

  /**
   * Gerbong findFirstOrThrow
   */
  export type GerbongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gerbong
     */
    select?: GerbongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gerbong
     */
    omit?: GerbongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerbongInclude<ExtArgs> | null
    /**
     * Filter, which Gerbong to fetch.
     */
    where?: GerbongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gerbongs to fetch.
     */
    orderBy?: GerbongOrderByWithRelationInput | GerbongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gerbongs.
     */
    cursor?: GerbongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gerbongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gerbongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gerbongs.
     */
    distinct?: GerbongScalarFieldEnum | GerbongScalarFieldEnum[]
  }

  /**
   * Gerbong findMany
   */
  export type GerbongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gerbong
     */
    select?: GerbongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gerbong
     */
    omit?: GerbongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerbongInclude<ExtArgs> | null
    /**
     * Filter, which Gerbongs to fetch.
     */
    where?: GerbongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gerbongs to fetch.
     */
    orderBy?: GerbongOrderByWithRelationInput | GerbongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gerbongs.
     */
    cursor?: GerbongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gerbongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gerbongs.
     */
    skip?: number
    distinct?: GerbongScalarFieldEnum | GerbongScalarFieldEnum[]
  }

  /**
   * Gerbong create
   */
  export type GerbongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gerbong
     */
    select?: GerbongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gerbong
     */
    omit?: GerbongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerbongInclude<ExtArgs> | null
    /**
     * The data needed to create a Gerbong.
     */
    data: XOR<GerbongCreateInput, GerbongUncheckedCreateInput>
  }

  /**
   * Gerbong createMany
   */
  export type GerbongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gerbongs.
     */
    data: GerbongCreateManyInput | GerbongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gerbong update
   */
  export type GerbongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gerbong
     */
    select?: GerbongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gerbong
     */
    omit?: GerbongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerbongInclude<ExtArgs> | null
    /**
     * The data needed to update a Gerbong.
     */
    data: XOR<GerbongUpdateInput, GerbongUncheckedUpdateInput>
    /**
     * Choose, which Gerbong to update.
     */
    where: GerbongWhereUniqueInput
  }

  /**
   * Gerbong updateMany
   */
  export type GerbongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gerbongs.
     */
    data: XOR<GerbongUpdateManyMutationInput, GerbongUncheckedUpdateManyInput>
    /**
     * Filter which Gerbongs to update
     */
    where?: GerbongWhereInput
    /**
     * Limit how many Gerbongs to update.
     */
    limit?: number
  }

  /**
   * Gerbong upsert
   */
  export type GerbongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gerbong
     */
    select?: GerbongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gerbong
     */
    omit?: GerbongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerbongInclude<ExtArgs> | null
    /**
     * The filter to search for the Gerbong to update in case it exists.
     */
    where: GerbongWhereUniqueInput
    /**
     * In case the Gerbong found by the `where` argument doesn't exist, create a new Gerbong with this data.
     */
    create: XOR<GerbongCreateInput, GerbongUncheckedCreateInput>
    /**
     * In case the Gerbong was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GerbongUpdateInput, GerbongUncheckedUpdateInput>
  }

  /**
   * Gerbong delete
   */
  export type GerbongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gerbong
     */
    select?: GerbongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gerbong
     */
    omit?: GerbongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerbongInclude<ExtArgs> | null
    /**
     * Filter which Gerbong to delete.
     */
    where: GerbongWhereUniqueInput
  }

  /**
   * Gerbong deleteMany
   */
  export type GerbongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gerbongs to delete
     */
    where?: GerbongWhereInput
    /**
     * Limit how many Gerbongs to delete.
     */
    limit?: number
  }

  /**
   * Gerbong.kursi
   */
  export type Gerbong$kursiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursi
     */
    select?: KursiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursi
     */
    omit?: KursiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursiInclude<ExtArgs> | null
    where?: KursiWhereInput
    orderBy?: KursiOrderByWithRelationInput | KursiOrderByWithRelationInput[]
    cursor?: KursiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KursiScalarFieldEnum | KursiScalarFieldEnum[]
  }

  /**
   * Gerbong without action
   */
  export type GerbongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gerbong
     */
    select?: GerbongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gerbong
     */
    omit?: GerbongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerbongInclude<ExtArgs> | null
  }


  /**
   * Model Kursi
   */

  export type AggregateKursi = {
    _count: KursiCountAggregateOutputType | null
    _avg: KursiAvgAggregateOutputType | null
    _sum: KursiSumAggregateOutputType | null
    _min: KursiMinAggregateOutputType | null
    _max: KursiMaxAggregateOutputType | null
  }

  export type KursiAvgAggregateOutputType = {
    id: number | null
    gerbongId: number | null
  }

  export type KursiSumAggregateOutputType = {
    id: number | null
    gerbongId: number | null
  }

  export type KursiMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    nomor: string | null
    gerbongId: number | null
  }

  export type KursiMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    nomor: string | null
    gerbongId: number | null
  }

  export type KursiCountAggregateOutputType = {
    id: number
    uuid: number
    nomor: number
    gerbongId: number
    _all: number
  }


  export type KursiAvgAggregateInputType = {
    id?: true
    gerbongId?: true
  }

  export type KursiSumAggregateInputType = {
    id?: true
    gerbongId?: true
  }

  export type KursiMinAggregateInputType = {
    id?: true
    uuid?: true
    nomor?: true
    gerbongId?: true
  }

  export type KursiMaxAggregateInputType = {
    id?: true
    uuid?: true
    nomor?: true
    gerbongId?: true
  }

  export type KursiCountAggregateInputType = {
    id?: true
    uuid?: true
    nomor?: true
    gerbongId?: true
    _all?: true
  }

  export type KursiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kursi to aggregate.
     */
    where?: KursiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kursis to fetch.
     */
    orderBy?: KursiOrderByWithRelationInput | KursiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KursiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kursis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kursis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kursis
    **/
    _count?: true | KursiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KursiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KursiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KursiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KursiMaxAggregateInputType
  }

  export type GetKursiAggregateType<T extends KursiAggregateArgs> = {
        [P in keyof T & keyof AggregateKursi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKursi[P]>
      : GetScalarType<T[P], AggregateKursi[P]>
  }




  export type KursiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KursiWhereInput
    orderBy?: KursiOrderByWithAggregationInput | KursiOrderByWithAggregationInput[]
    by: KursiScalarFieldEnum[] | KursiScalarFieldEnum
    having?: KursiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KursiCountAggregateInputType | true
    _avg?: KursiAvgAggregateInputType
    _sum?: KursiSumAggregateInputType
    _min?: KursiMinAggregateInputType
    _max?: KursiMaxAggregateInputType
  }

  export type KursiGroupByOutputType = {
    id: number
    uuid: string
    nomor: string
    gerbongId: number
    _count: KursiCountAggregateOutputType | null
    _avg: KursiAvgAggregateOutputType | null
    _sum: KursiSumAggregateOutputType | null
    _min: KursiMinAggregateOutputType | null
    _max: KursiMaxAggregateOutputType | null
  }

  type GetKursiGroupByPayload<T extends KursiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KursiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KursiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KursiGroupByOutputType[P]>
            : GetScalarType<T[P], KursiGroupByOutputType[P]>
        }
      >
    >


  export type KursiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    nomor?: boolean
    gerbongId?: boolean
    gerbong?: boolean | GerbongDefaultArgs<ExtArgs>
    detailPembelians?: boolean | Kursi$detailPembeliansArgs<ExtArgs>
    _count?: boolean | KursiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kursi"]>



  export type KursiSelectScalar = {
    id?: boolean
    uuid?: boolean
    nomor?: boolean
    gerbongId?: boolean
  }

  export type KursiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "nomor" | "gerbongId", ExtArgs["result"]["kursi"]>
  export type KursiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gerbong?: boolean | GerbongDefaultArgs<ExtArgs>
    detailPembelians?: boolean | Kursi$detailPembeliansArgs<ExtArgs>
    _count?: boolean | KursiCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $KursiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kursi"
    objects: {
      gerbong: Prisma.$GerbongPayload<ExtArgs>
      detailPembelians: Prisma.$Detail_pembelianPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      nomor: string
      gerbongId: number
    }, ExtArgs["result"]["kursi"]>
    composites: {}
  }

  type KursiGetPayload<S extends boolean | null | undefined | KursiDefaultArgs> = $Result.GetResult<Prisma.$KursiPayload, S>

  type KursiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KursiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KursiCountAggregateInputType | true
    }

  export interface KursiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kursi'], meta: { name: 'Kursi' } }
    /**
     * Find zero or one Kursi that matches the filter.
     * @param {KursiFindUniqueArgs} args - Arguments to find a Kursi
     * @example
     * // Get one Kursi
     * const kursi = await prisma.kursi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KursiFindUniqueArgs>(args: SelectSubset<T, KursiFindUniqueArgs<ExtArgs>>): Prisma__KursiClient<$Result.GetResult<Prisma.$KursiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kursi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KursiFindUniqueOrThrowArgs} args - Arguments to find a Kursi
     * @example
     * // Get one Kursi
     * const kursi = await prisma.kursi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KursiFindUniqueOrThrowArgs>(args: SelectSubset<T, KursiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KursiClient<$Result.GetResult<Prisma.$KursiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kursi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KursiFindFirstArgs} args - Arguments to find a Kursi
     * @example
     * // Get one Kursi
     * const kursi = await prisma.kursi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KursiFindFirstArgs>(args?: SelectSubset<T, KursiFindFirstArgs<ExtArgs>>): Prisma__KursiClient<$Result.GetResult<Prisma.$KursiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kursi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KursiFindFirstOrThrowArgs} args - Arguments to find a Kursi
     * @example
     * // Get one Kursi
     * const kursi = await prisma.kursi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KursiFindFirstOrThrowArgs>(args?: SelectSubset<T, KursiFindFirstOrThrowArgs<ExtArgs>>): Prisma__KursiClient<$Result.GetResult<Prisma.$KursiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kursis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KursiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kursis
     * const kursis = await prisma.kursi.findMany()
     * 
     * // Get first 10 Kursis
     * const kursis = await prisma.kursi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kursiWithIdOnly = await prisma.kursi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KursiFindManyArgs>(args?: SelectSubset<T, KursiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KursiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kursi.
     * @param {KursiCreateArgs} args - Arguments to create a Kursi.
     * @example
     * // Create one Kursi
     * const Kursi = await prisma.kursi.create({
     *   data: {
     *     // ... data to create a Kursi
     *   }
     * })
     * 
     */
    create<T extends KursiCreateArgs>(args: SelectSubset<T, KursiCreateArgs<ExtArgs>>): Prisma__KursiClient<$Result.GetResult<Prisma.$KursiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kursis.
     * @param {KursiCreateManyArgs} args - Arguments to create many Kursis.
     * @example
     * // Create many Kursis
     * const kursi = await prisma.kursi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KursiCreateManyArgs>(args?: SelectSubset<T, KursiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Kursi.
     * @param {KursiDeleteArgs} args - Arguments to delete one Kursi.
     * @example
     * // Delete one Kursi
     * const Kursi = await prisma.kursi.delete({
     *   where: {
     *     // ... filter to delete one Kursi
     *   }
     * })
     * 
     */
    delete<T extends KursiDeleteArgs>(args: SelectSubset<T, KursiDeleteArgs<ExtArgs>>): Prisma__KursiClient<$Result.GetResult<Prisma.$KursiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kursi.
     * @param {KursiUpdateArgs} args - Arguments to update one Kursi.
     * @example
     * // Update one Kursi
     * const kursi = await prisma.kursi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KursiUpdateArgs>(args: SelectSubset<T, KursiUpdateArgs<ExtArgs>>): Prisma__KursiClient<$Result.GetResult<Prisma.$KursiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kursis.
     * @param {KursiDeleteManyArgs} args - Arguments to filter Kursis to delete.
     * @example
     * // Delete a few Kursis
     * const { count } = await prisma.kursi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KursiDeleteManyArgs>(args?: SelectSubset<T, KursiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kursis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KursiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kursis
     * const kursi = await prisma.kursi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KursiUpdateManyArgs>(args: SelectSubset<T, KursiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kursi.
     * @param {KursiUpsertArgs} args - Arguments to update or create a Kursi.
     * @example
     * // Update or create a Kursi
     * const kursi = await prisma.kursi.upsert({
     *   create: {
     *     // ... data to create a Kursi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kursi we want to update
     *   }
     * })
     */
    upsert<T extends KursiUpsertArgs>(args: SelectSubset<T, KursiUpsertArgs<ExtArgs>>): Prisma__KursiClient<$Result.GetResult<Prisma.$KursiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kursis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KursiCountArgs} args - Arguments to filter Kursis to count.
     * @example
     * // Count the number of Kursis
     * const count = await prisma.kursi.count({
     *   where: {
     *     // ... the filter for the Kursis we want to count
     *   }
     * })
    **/
    count<T extends KursiCountArgs>(
      args?: Subset<T, KursiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KursiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kursi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KursiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KursiAggregateArgs>(args: Subset<T, KursiAggregateArgs>): Prisma.PrismaPromise<GetKursiAggregateType<T>>

    /**
     * Group by Kursi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KursiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KursiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KursiGroupByArgs['orderBy'] }
        : { orderBy?: KursiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KursiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKursiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kursi model
   */
  readonly fields: KursiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kursi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KursiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gerbong<T extends GerbongDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GerbongDefaultArgs<ExtArgs>>): Prisma__GerbongClient<$Result.GetResult<Prisma.$GerbongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    detailPembelians<T extends Kursi$detailPembeliansArgs<ExtArgs> = {}>(args?: Subset<T, Kursi$detailPembeliansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Detail_pembelianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Kursi model
   */
  interface KursiFieldRefs {
    readonly id: FieldRef<"Kursi", 'Int'>
    readonly uuid: FieldRef<"Kursi", 'String'>
    readonly nomor: FieldRef<"Kursi", 'String'>
    readonly gerbongId: FieldRef<"Kursi", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Kursi findUnique
   */
  export type KursiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursi
     */
    select?: KursiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursi
     */
    omit?: KursiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursiInclude<ExtArgs> | null
    /**
     * Filter, which Kursi to fetch.
     */
    where: KursiWhereUniqueInput
  }

  /**
   * Kursi findUniqueOrThrow
   */
  export type KursiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursi
     */
    select?: KursiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursi
     */
    omit?: KursiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursiInclude<ExtArgs> | null
    /**
     * Filter, which Kursi to fetch.
     */
    where: KursiWhereUniqueInput
  }

  /**
   * Kursi findFirst
   */
  export type KursiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursi
     */
    select?: KursiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursi
     */
    omit?: KursiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursiInclude<ExtArgs> | null
    /**
     * Filter, which Kursi to fetch.
     */
    where?: KursiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kursis to fetch.
     */
    orderBy?: KursiOrderByWithRelationInput | KursiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kursis.
     */
    cursor?: KursiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kursis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kursis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kursis.
     */
    distinct?: KursiScalarFieldEnum | KursiScalarFieldEnum[]
  }

  /**
   * Kursi findFirstOrThrow
   */
  export type KursiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursi
     */
    select?: KursiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursi
     */
    omit?: KursiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursiInclude<ExtArgs> | null
    /**
     * Filter, which Kursi to fetch.
     */
    where?: KursiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kursis to fetch.
     */
    orderBy?: KursiOrderByWithRelationInput | KursiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kursis.
     */
    cursor?: KursiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kursis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kursis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kursis.
     */
    distinct?: KursiScalarFieldEnum | KursiScalarFieldEnum[]
  }

  /**
   * Kursi findMany
   */
  export type KursiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursi
     */
    select?: KursiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursi
     */
    omit?: KursiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursiInclude<ExtArgs> | null
    /**
     * Filter, which Kursis to fetch.
     */
    where?: KursiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kursis to fetch.
     */
    orderBy?: KursiOrderByWithRelationInput | KursiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kursis.
     */
    cursor?: KursiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kursis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kursis.
     */
    skip?: number
    distinct?: KursiScalarFieldEnum | KursiScalarFieldEnum[]
  }

  /**
   * Kursi create
   */
  export type KursiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursi
     */
    select?: KursiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursi
     */
    omit?: KursiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursiInclude<ExtArgs> | null
    /**
     * The data needed to create a Kursi.
     */
    data: XOR<KursiCreateInput, KursiUncheckedCreateInput>
  }

  /**
   * Kursi createMany
   */
  export type KursiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kursis.
     */
    data: KursiCreateManyInput | KursiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kursi update
   */
  export type KursiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursi
     */
    select?: KursiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursi
     */
    omit?: KursiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursiInclude<ExtArgs> | null
    /**
     * The data needed to update a Kursi.
     */
    data: XOR<KursiUpdateInput, KursiUncheckedUpdateInput>
    /**
     * Choose, which Kursi to update.
     */
    where: KursiWhereUniqueInput
  }

  /**
   * Kursi updateMany
   */
  export type KursiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kursis.
     */
    data: XOR<KursiUpdateManyMutationInput, KursiUncheckedUpdateManyInput>
    /**
     * Filter which Kursis to update
     */
    where?: KursiWhereInput
    /**
     * Limit how many Kursis to update.
     */
    limit?: number
  }

  /**
   * Kursi upsert
   */
  export type KursiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursi
     */
    select?: KursiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursi
     */
    omit?: KursiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursiInclude<ExtArgs> | null
    /**
     * The filter to search for the Kursi to update in case it exists.
     */
    where: KursiWhereUniqueInput
    /**
     * In case the Kursi found by the `where` argument doesn't exist, create a new Kursi with this data.
     */
    create: XOR<KursiCreateInput, KursiUncheckedCreateInput>
    /**
     * In case the Kursi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KursiUpdateInput, KursiUncheckedUpdateInput>
  }

  /**
   * Kursi delete
   */
  export type KursiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursi
     */
    select?: KursiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursi
     */
    omit?: KursiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursiInclude<ExtArgs> | null
    /**
     * Filter which Kursi to delete.
     */
    where: KursiWhereUniqueInput
  }

  /**
   * Kursi deleteMany
   */
  export type KursiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kursis to delete
     */
    where?: KursiWhereInput
    /**
     * Limit how many Kursis to delete.
     */
    limit?: number
  }

  /**
   * Kursi.detailPembelians
   */
  export type Kursi$detailPembeliansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detail_pembelian
     */
    select?: Detail_pembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detail_pembelian
     */
    omit?: Detail_pembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detail_pembelianInclude<ExtArgs> | null
    where?: Detail_pembelianWhereInput
    orderBy?: Detail_pembelianOrderByWithRelationInput | Detail_pembelianOrderByWithRelationInput[]
    cursor?: Detail_pembelianWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detail_pembelianScalarFieldEnum | Detail_pembelianScalarFieldEnum[]
  }

  /**
   * Kursi without action
   */
  export type KursiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursi
     */
    select?: KursiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursi
     */
    omit?: KursiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursiInclude<ExtArgs> | null
  }


  /**
   * Model Jadwal
   */

  export type AggregateJadwal = {
    _count: JadwalCountAggregateOutputType | null
    _avg: JadwalAvgAggregateOutputType | null
    _sum: JadwalSumAggregateOutputType | null
    _min: JadwalMinAggregateOutputType | null
    _max: JadwalMaxAggregateOutputType | null
  }

  export type JadwalAvgAggregateOutputType = {
    id: number | null
    harga: number | null
    keretaId: number | null
  }

  export type JadwalSumAggregateOutputType = {
    id: number | null
    harga: number | null
    keretaId: number | null
  }

  export type JadwalMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    asal_keberangkatan: string | null
    tujuan_keberangkatan: string | null
    tanggal_keberangkatan: Date | null
    tanggal_kedatangan: Date | null
    harga: number | null
    keretaId: number | null
  }

  export type JadwalMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    asal_keberangkatan: string | null
    tujuan_keberangkatan: string | null
    tanggal_keberangkatan: Date | null
    tanggal_kedatangan: Date | null
    harga: number | null
    keretaId: number | null
  }

  export type JadwalCountAggregateOutputType = {
    id: number
    uuid: number
    asal_keberangkatan: number
    tujuan_keberangkatan: number
    tanggal_keberangkatan: number
    tanggal_kedatangan: number
    harga: number
    keretaId: number
    _all: number
  }


  export type JadwalAvgAggregateInputType = {
    id?: true
    harga?: true
    keretaId?: true
  }

  export type JadwalSumAggregateInputType = {
    id?: true
    harga?: true
    keretaId?: true
  }

  export type JadwalMinAggregateInputType = {
    id?: true
    uuid?: true
    asal_keberangkatan?: true
    tujuan_keberangkatan?: true
    tanggal_keberangkatan?: true
    tanggal_kedatangan?: true
    harga?: true
    keretaId?: true
  }

  export type JadwalMaxAggregateInputType = {
    id?: true
    uuid?: true
    asal_keberangkatan?: true
    tujuan_keberangkatan?: true
    tanggal_keberangkatan?: true
    tanggal_kedatangan?: true
    harga?: true
    keretaId?: true
  }

  export type JadwalCountAggregateInputType = {
    id?: true
    uuid?: true
    asal_keberangkatan?: true
    tujuan_keberangkatan?: true
    tanggal_keberangkatan?: true
    tanggal_kedatangan?: true
    harga?: true
    keretaId?: true
    _all?: true
  }

  export type JadwalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jadwal to aggregate.
     */
    where?: JadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwals to fetch.
     */
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jadwals
    **/
    _count?: true | JadwalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JadwalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JadwalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JadwalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JadwalMaxAggregateInputType
  }

  export type GetJadwalAggregateType<T extends JadwalAggregateArgs> = {
        [P in keyof T & keyof AggregateJadwal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJadwal[P]>
      : GetScalarType<T[P], AggregateJadwal[P]>
  }




  export type JadwalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalWhereInput
    orderBy?: JadwalOrderByWithAggregationInput | JadwalOrderByWithAggregationInput[]
    by: JadwalScalarFieldEnum[] | JadwalScalarFieldEnum
    having?: JadwalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JadwalCountAggregateInputType | true
    _avg?: JadwalAvgAggregateInputType
    _sum?: JadwalSumAggregateInputType
    _min?: JadwalMinAggregateInputType
    _max?: JadwalMaxAggregateInputType
  }

  export type JadwalGroupByOutputType = {
    id: number
    uuid: string
    asal_keberangkatan: string
    tujuan_keberangkatan: string
    tanggal_keberangkatan: Date
    tanggal_kedatangan: Date
    harga: number
    keretaId: number
    _count: JadwalCountAggregateOutputType | null
    _avg: JadwalAvgAggregateOutputType | null
    _sum: JadwalSumAggregateOutputType | null
    _min: JadwalMinAggregateOutputType | null
    _max: JadwalMaxAggregateOutputType | null
  }

  type GetJadwalGroupByPayload<T extends JadwalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JadwalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JadwalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JadwalGroupByOutputType[P]>
            : GetScalarType<T[P], JadwalGroupByOutputType[P]>
        }
      >
    >


  export type JadwalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    asal_keberangkatan?: boolean
    tujuan_keberangkatan?: boolean
    tanggal_keberangkatan?: boolean
    tanggal_kedatangan?: boolean
    harga?: boolean
    keretaId?: boolean
    kereta?: boolean | KeretaDefaultArgs<ExtArgs>
    pembelianTikets?: boolean | Jadwal$pembelianTiketsArgs<ExtArgs>
    _count?: boolean | JadwalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwal"]>



  export type JadwalSelectScalar = {
    id?: boolean
    uuid?: boolean
    asal_keberangkatan?: boolean
    tujuan_keberangkatan?: boolean
    tanggal_keberangkatan?: boolean
    tanggal_kedatangan?: boolean
    harga?: boolean
    keretaId?: boolean
  }

  export type JadwalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "asal_keberangkatan" | "tujuan_keberangkatan" | "tanggal_keberangkatan" | "tanggal_kedatangan" | "harga" | "keretaId", ExtArgs["result"]["jadwal"]>
  export type JadwalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kereta?: boolean | KeretaDefaultArgs<ExtArgs>
    pembelianTikets?: boolean | Jadwal$pembelianTiketsArgs<ExtArgs>
    _count?: boolean | JadwalCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $JadwalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jadwal"
    objects: {
      kereta: Prisma.$KeretaPayload<ExtArgs>
      pembelianTikets: Prisma.$Pembelian_tiketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      asal_keberangkatan: string
      tujuan_keberangkatan: string
      tanggal_keberangkatan: Date
      tanggal_kedatangan: Date
      harga: number
      keretaId: number
    }, ExtArgs["result"]["jadwal"]>
    composites: {}
  }

  type JadwalGetPayload<S extends boolean | null | undefined | JadwalDefaultArgs> = $Result.GetResult<Prisma.$JadwalPayload, S>

  type JadwalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JadwalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JadwalCountAggregateInputType | true
    }

  export interface JadwalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jadwal'], meta: { name: 'Jadwal' } }
    /**
     * Find zero or one Jadwal that matches the filter.
     * @param {JadwalFindUniqueArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JadwalFindUniqueArgs>(args: SelectSubset<T, JadwalFindUniqueArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jadwal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JadwalFindUniqueOrThrowArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JadwalFindUniqueOrThrowArgs>(args: SelectSubset<T, JadwalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jadwal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalFindFirstArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JadwalFindFirstArgs>(args?: SelectSubset<T, JadwalFindFirstArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jadwal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalFindFirstOrThrowArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JadwalFindFirstOrThrowArgs>(args?: SelectSubset<T, JadwalFindFirstOrThrowArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jadwals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jadwals
     * const jadwals = await prisma.jadwal.findMany()
     * 
     * // Get first 10 Jadwals
     * const jadwals = await prisma.jadwal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jadwalWithIdOnly = await prisma.jadwal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JadwalFindManyArgs>(args?: SelectSubset<T, JadwalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jadwal.
     * @param {JadwalCreateArgs} args - Arguments to create a Jadwal.
     * @example
     * // Create one Jadwal
     * const Jadwal = await prisma.jadwal.create({
     *   data: {
     *     // ... data to create a Jadwal
     *   }
     * })
     * 
     */
    create<T extends JadwalCreateArgs>(args: SelectSubset<T, JadwalCreateArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jadwals.
     * @param {JadwalCreateManyArgs} args - Arguments to create many Jadwals.
     * @example
     * // Create many Jadwals
     * const jadwal = await prisma.jadwal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JadwalCreateManyArgs>(args?: SelectSubset<T, JadwalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jadwal.
     * @param {JadwalDeleteArgs} args - Arguments to delete one Jadwal.
     * @example
     * // Delete one Jadwal
     * const Jadwal = await prisma.jadwal.delete({
     *   where: {
     *     // ... filter to delete one Jadwal
     *   }
     * })
     * 
     */
    delete<T extends JadwalDeleteArgs>(args: SelectSubset<T, JadwalDeleteArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jadwal.
     * @param {JadwalUpdateArgs} args - Arguments to update one Jadwal.
     * @example
     * // Update one Jadwal
     * const jadwal = await prisma.jadwal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JadwalUpdateArgs>(args: SelectSubset<T, JadwalUpdateArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jadwals.
     * @param {JadwalDeleteManyArgs} args - Arguments to filter Jadwals to delete.
     * @example
     * // Delete a few Jadwals
     * const { count } = await prisma.jadwal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JadwalDeleteManyArgs>(args?: SelectSubset<T, JadwalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jadwals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jadwals
     * const jadwal = await prisma.jadwal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JadwalUpdateManyArgs>(args: SelectSubset<T, JadwalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jadwal.
     * @param {JadwalUpsertArgs} args - Arguments to update or create a Jadwal.
     * @example
     * // Update or create a Jadwal
     * const jadwal = await prisma.jadwal.upsert({
     *   create: {
     *     // ... data to create a Jadwal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jadwal we want to update
     *   }
     * })
     */
    upsert<T extends JadwalUpsertArgs>(args: SelectSubset<T, JadwalUpsertArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jadwals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalCountArgs} args - Arguments to filter Jadwals to count.
     * @example
     * // Count the number of Jadwals
     * const count = await prisma.jadwal.count({
     *   where: {
     *     // ... the filter for the Jadwals we want to count
     *   }
     * })
    **/
    count<T extends JadwalCountArgs>(
      args?: Subset<T, JadwalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JadwalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jadwal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JadwalAggregateArgs>(args: Subset<T, JadwalAggregateArgs>): Prisma.PrismaPromise<GetJadwalAggregateType<T>>

    /**
     * Group by Jadwal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JadwalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JadwalGroupByArgs['orderBy'] }
        : { orderBy?: JadwalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JadwalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJadwalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jadwal model
   */
  readonly fields: JadwalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jadwal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JadwalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kereta<T extends KeretaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KeretaDefaultArgs<ExtArgs>>): Prisma__KeretaClient<$Result.GetResult<Prisma.$KeretaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pembelianTikets<T extends Jadwal$pembelianTiketsArgs<ExtArgs> = {}>(args?: Subset<T, Jadwal$pembelianTiketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Pembelian_tiketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Jadwal model
   */
  interface JadwalFieldRefs {
    readonly id: FieldRef<"Jadwal", 'Int'>
    readonly uuid: FieldRef<"Jadwal", 'String'>
    readonly asal_keberangkatan: FieldRef<"Jadwal", 'String'>
    readonly tujuan_keberangkatan: FieldRef<"Jadwal", 'String'>
    readonly tanggal_keberangkatan: FieldRef<"Jadwal", 'DateTime'>
    readonly tanggal_kedatangan: FieldRef<"Jadwal", 'DateTime'>
    readonly harga: FieldRef<"Jadwal", 'Int'>
    readonly keretaId: FieldRef<"Jadwal", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Jadwal findUnique
   */
  export type JadwalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter, which Jadwal to fetch.
     */
    where: JadwalWhereUniqueInput
  }

  /**
   * Jadwal findUniqueOrThrow
   */
  export type JadwalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter, which Jadwal to fetch.
     */
    where: JadwalWhereUniqueInput
  }

  /**
   * Jadwal findFirst
   */
  export type JadwalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter, which Jadwal to fetch.
     */
    where?: JadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwals to fetch.
     */
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jadwals.
     */
    cursor?: JadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jadwals.
     */
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * Jadwal findFirstOrThrow
   */
  export type JadwalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter, which Jadwal to fetch.
     */
    where?: JadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwals to fetch.
     */
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jadwals.
     */
    cursor?: JadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jadwals.
     */
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * Jadwal findMany
   */
  export type JadwalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter, which Jadwals to fetch.
     */
    where?: JadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwals to fetch.
     */
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jadwals.
     */
    cursor?: JadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwals.
     */
    skip?: number
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * Jadwal create
   */
  export type JadwalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * The data needed to create a Jadwal.
     */
    data: XOR<JadwalCreateInput, JadwalUncheckedCreateInput>
  }

  /**
   * Jadwal createMany
   */
  export type JadwalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jadwals.
     */
    data: JadwalCreateManyInput | JadwalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jadwal update
   */
  export type JadwalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * The data needed to update a Jadwal.
     */
    data: XOR<JadwalUpdateInput, JadwalUncheckedUpdateInput>
    /**
     * Choose, which Jadwal to update.
     */
    where: JadwalWhereUniqueInput
  }

  /**
   * Jadwal updateMany
   */
  export type JadwalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jadwals.
     */
    data: XOR<JadwalUpdateManyMutationInput, JadwalUncheckedUpdateManyInput>
    /**
     * Filter which Jadwals to update
     */
    where?: JadwalWhereInput
    /**
     * Limit how many Jadwals to update.
     */
    limit?: number
  }

  /**
   * Jadwal upsert
   */
  export type JadwalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * The filter to search for the Jadwal to update in case it exists.
     */
    where: JadwalWhereUniqueInput
    /**
     * In case the Jadwal found by the `where` argument doesn't exist, create a new Jadwal with this data.
     */
    create: XOR<JadwalCreateInput, JadwalUncheckedCreateInput>
    /**
     * In case the Jadwal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JadwalUpdateInput, JadwalUncheckedUpdateInput>
  }

  /**
   * Jadwal delete
   */
  export type JadwalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter which Jadwal to delete.
     */
    where: JadwalWhereUniqueInput
  }

  /**
   * Jadwal deleteMany
   */
  export type JadwalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jadwals to delete
     */
    where?: JadwalWhereInput
    /**
     * Limit how many Jadwals to delete.
     */
    limit?: number
  }

  /**
   * Jadwal.pembelianTikets
   */
  export type Jadwal$pembelianTiketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian_tiket
     */
    select?: Pembelian_tiketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian_tiket
     */
    omit?: Pembelian_tiketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Pembelian_tiketInclude<ExtArgs> | null
    where?: Pembelian_tiketWhereInput
    orderBy?: Pembelian_tiketOrderByWithRelationInput | Pembelian_tiketOrderByWithRelationInput[]
    cursor?: Pembelian_tiketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pembelian_tiketScalarFieldEnum | Pembelian_tiketScalarFieldEnum[]
  }

  /**
   * Jadwal without action
   */
  export type JadwalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
  }


  /**
   * Model Pembelian_tiket
   */

  export type AggregatePembelian_tiket = {
    _count: Pembelian_tiketCountAggregateOutputType | null
    _avg: Pembelian_tiketAvgAggregateOutputType | null
    _sum: Pembelian_tiketSumAggregateOutputType | null
    _min: Pembelian_tiketMinAggregateOutputType | null
    _max: Pembelian_tiketMaxAggregateOutputType | null
  }

  export type Pembelian_tiketAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    jadwalId: number | null
  }

  export type Pembelian_tiketSumAggregateOutputType = {
    id: number | null
    userId: number | null
    jadwalId: number | null
  }

  export type Pembelian_tiketMinAggregateOutputType = {
    id: number | null
    tanggal_pembelian: Date | null
    userId: number | null
    jadwalId: number | null
  }

  export type Pembelian_tiketMaxAggregateOutputType = {
    id: number | null
    tanggal_pembelian: Date | null
    userId: number | null
    jadwalId: number | null
  }

  export type Pembelian_tiketCountAggregateOutputType = {
    id: number
    tanggal_pembelian: number
    userId: number
    jadwalId: number
    _all: number
  }


  export type Pembelian_tiketAvgAggregateInputType = {
    id?: true
    userId?: true
    jadwalId?: true
  }

  export type Pembelian_tiketSumAggregateInputType = {
    id?: true
    userId?: true
    jadwalId?: true
  }

  export type Pembelian_tiketMinAggregateInputType = {
    id?: true
    tanggal_pembelian?: true
    userId?: true
    jadwalId?: true
  }

  export type Pembelian_tiketMaxAggregateInputType = {
    id?: true
    tanggal_pembelian?: true
    userId?: true
    jadwalId?: true
  }

  export type Pembelian_tiketCountAggregateInputType = {
    id?: true
    tanggal_pembelian?: true
    userId?: true
    jadwalId?: true
    _all?: true
  }

  export type Pembelian_tiketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pembelian_tiket to aggregate.
     */
    where?: Pembelian_tiketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembelian_tikets to fetch.
     */
    orderBy?: Pembelian_tiketOrderByWithRelationInput | Pembelian_tiketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Pembelian_tiketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembelian_tikets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembelian_tikets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pembelian_tikets
    **/
    _count?: true | Pembelian_tiketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Pembelian_tiketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Pembelian_tiketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pembelian_tiketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pembelian_tiketMaxAggregateInputType
  }

  export type GetPembelian_tiketAggregateType<T extends Pembelian_tiketAggregateArgs> = {
        [P in keyof T & keyof AggregatePembelian_tiket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePembelian_tiket[P]>
      : GetScalarType<T[P], AggregatePembelian_tiket[P]>
  }




  export type Pembelian_tiketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Pembelian_tiketWhereInput
    orderBy?: Pembelian_tiketOrderByWithAggregationInput | Pembelian_tiketOrderByWithAggregationInput[]
    by: Pembelian_tiketScalarFieldEnum[] | Pembelian_tiketScalarFieldEnum
    having?: Pembelian_tiketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pembelian_tiketCountAggregateInputType | true
    _avg?: Pembelian_tiketAvgAggregateInputType
    _sum?: Pembelian_tiketSumAggregateInputType
    _min?: Pembelian_tiketMinAggregateInputType
    _max?: Pembelian_tiketMaxAggregateInputType
  }

  export type Pembelian_tiketGroupByOutputType = {
    id: number
    tanggal_pembelian: Date
    userId: number
    jadwalId: number
    _count: Pembelian_tiketCountAggregateOutputType | null
    _avg: Pembelian_tiketAvgAggregateOutputType | null
    _sum: Pembelian_tiketSumAggregateOutputType | null
    _min: Pembelian_tiketMinAggregateOutputType | null
    _max: Pembelian_tiketMaxAggregateOutputType | null
  }

  type GetPembelian_tiketGroupByPayload<T extends Pembelian_tiketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Pembelian_tiketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pembelian_tiketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pembelian_tiketGroupByOutputType[P]>
            : GetScalarType<T[P], Pembelian_tiketGroupByOutputType[P]>
        }
      >
    >


  export type Pembelian_tiketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal_pembelian?: boolean
    userId?: boolean
    jadwalId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    jadwal?: boolean | JadwalDefaultArgs<ExtArgs>
    detail?: boolean | Pembelian_tiket$detailArgs<ExtArgs>
    _count?: boolean | Pembelian_tiketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembelian_tiket"]>



  export type Pembelian_tiketSelectScalar = {
    id?: boolean
    tanggal_pembelian?: boolean
    userId?: boolean
    jadwalId?: boolean
  }

  export type Pembelian_tiketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tanggal_pembelian" | "userId" | "jadwalId", ExtArgs["result"]["pembelian_tiket"]>
  export type Pembelian_tiketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    jadwal?: boolean | JadwalDefaultArgs<ExtArgs>
    detail?: boolean | Pembelian_tiket$detailArgs<ExtArgs>
    _count?: boolean | Pembelian_tiketCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $Pembelian_tiketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pembelian_tiket"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      jadwal: Prisma.$JadwalPayload<ExtArgs>
      detail: Prisma.$Detail_pembelianPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tanggal_pembelian: Date
      userId: number
      jadwalId: number
    }, ExtArgs["result"]["pembelian_tiket"]>
    composites: {}
  }

  type Pembelian_tiketGetPayload<S extends boolean | null | undefined | Pembelian_tiketDefaultArgs> = $Result.GetResult<Prisma.$Pembelian_tiketPayload, S>

  type Pembelian_tiketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Pembelian_tiketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Pembelian_tiketCountAggregateInputType | true
    }

  export interface Pembelian_tiketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pembelian_tiket'], meta: { name: 'Pembelian_tiket' } }
    /**
     * Find zero or one Pembelian_tiket that matches the filter.
     * @param {Pembelian_tiketFindUniqueArgs} args - Arguments to find a Pembelian_tiket
     * @example
     * // Get one Pembelian_tiket
     * const pembelian_tiket = await prisma.pembelian_tiket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Pembelian_tiketFindUniqueArgs>(args: SelectSubset<T, Pembelian_tiketFindUniqueArgs<ExtArgs>>): Prisma__Pembelian_tiketClient<$Result.GetResult<Prisma.$Pembelian_tiketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pembelian_tiket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Pembelian_tiketFindUniqueOrThrowArgs} args - Arguments to find a Pembelian_tiket
     * @example
     * // Get one Pembelian_tiket
     * const pembelian_tiket = await prisma.pembelian_tiket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Pembelian_tiketFindUniqueOrThrowArgs>(args: SelectSubset<T, Pembelian_tiketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Pembelian_tiketClient<$Result.GetResult<Prisma.$Pembelian_tiketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pembelian_tiket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pembelian_tiketFindFirstArgs} args - Arguments to find a Pembelian_tiket
     * @example
     * // Get one Pembelian_tiket
     * const pembelian_tiket = await prisma.pembelian_tiket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Pembelian_tiketFindFirstArgs>(args?: SelectSubset<T, Pembelian_tiketFindFirstArgs<ExtArgs>>): Prisma__Pembelian_tiketClient<$Result.GetResult<Prisma.$Pembelian_tiketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pembelian_tiket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pembelian_tiketFindFirstOrThrowArgs} args - Arguments to find a Pembelian_tiket
     * @example
     * // Get one Pembelian_tiket
     * const pembelian_tiket = await prisma.pembelian_tiket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Pembelian_tiketFindFirstOrThrowArgs>(args?: SelectSubset<T, Pembelian_tiketFindFirstOrThrowArgs<ExtArgs>>): Prisma__Pembelian_tiketClient<$Result.GetResult<Prisma.$Pembelian_tiketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pembelian_tikets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pembelian_tiketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pembelian_tikets
     * const pembelian_tikets = await prisma.pembelian_tiket.findMany()
     * 
     * // Get first 10 Pembelian_tikets
     * const pembelian_tikets = await prisma.pembelian_tiket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pembelian_tiketWithIdOnly = await prisma.pembelian_tiket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Pembelian_tiketFindManyArgs>(args?: SelectSubset<T, Pembelian_tiketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Pembelian_tiketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pembelian_tiket.
     * @param {Pembelian_tiketCreateArgs} args - Arguments to create a Pembelian_tiket.
     * @example
     * // Create one Pembelian_tiket
     * const Pembelian_tiket = await prisma.pembelian_tiket.create({
     *   data: {
     *     // ... data to create a Pembelian_tiket
     *   }
     * })
     * 
     */
    create<T extends Pembelian_tiketCreateArgs>(args: SelectSubset<T, Pembelian_tiketCreateArgs<ExtArgs>>): Prisma__Pembelian_tiketClient<$Result.GetResult<Prisma.$Pembelian_tiketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pembelian_tikets.
     * @param {Pembelian_tiketCreateManyArgs} args - Arguments to create many Pembelian_tikets.
     * @example
     * // Create many Pembelian_tikets
     * const pembelian_tiket = await prisma.pembelian_tiket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Pembelian_tiketCreateManyArgs>(args?: SelectSubset<T, Pembelian_tiketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pembelian_tiket.
     * @param {Pembelian_tiketDeleteArgs} args - Arguments to delete one Pembelian_tiket.
     * @example
     * // Delete one Pembelian_tiket
     * const Pembelian_tiket = await prisma.pembelian_tiket.delete({
     *   where: {
     *     // ... filter to delete one Pembelian_tiket
     *   }
     * })
     * 
     */
    delete<T extends Pembelian_tiketDeleteArgs>(args: SelectSubset<T, Pembelian_tiketDeleteArgs<ExtArgs>>): Prisma__Pembelian_tiketClient<$Result.GetResult<Prisma.$Pembelian_tiketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pembelian_tiket.
     * @param {Pembelian_tiketUpdateArgs} args - Arguments to update one Pembelian_tiket.
     * @example
     * // Update one Pembelian_tiket
     * const pembelian_tiket = await prisma.pembelian_tiket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Pembelian_tiketUpdateArgs>(args: SelectSubset<T, Pembelian_tiketUpdateArgs<ExtArgs>>): Prisma__Pembelian_tiketClient<$Result.GetResult<Prisma.$Pembelian_tiketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pembelian_tikets.
     * @param {Pembelian_tiketDeleteManyArgs} args - Arguments to filter Pembelian_tikets to delete.
     * @example
     * // Delete a few Pembelian_tikets
     * const { count } = await prisma.pembelian_tiket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Pembelian_tiketDeleteManyArgs>(args?: SelectSubset<T, Pembelian_tiketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pembelian_tikets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pembelian_tiketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pembelian_tikets
     * const pembelian_tiket = await prisma.pembelian_tiket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Pembelian_tiketUpdateManyArgs>(args: SelectSubset<T, Pembelian_tiketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pembelian_tiket.
     * @param {Pembelian_tiketUpsertArgs} args - Arguments to update or create a Pembelian_tiket.
     * @example
     * // Update or create a Pembelian_tiket
     * const pembelian_tiket = await prisma.pembelian_tiket.upsert({
     *   create: {
     *     // ... data to create a Pembelian_tiket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pembelian_tiket we want to update
     *   }
     * })
     */
    upsert<T extends Pembelian_tiketUpsertArgs>(args: SelectSubset<T, Pembelian_tiketUpsertArgs<ExtArgs>>): Prisma__Pembelian_tiketClient<$Result.GetResult<Prisma.$Pembelian_tiketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pembelian_tikets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pembelian_tiketCountArgs} args - Arguments to filter Pembelian_tikets to count.
     * @example
     * // Count the number of Pembelian_tikets
     * const count = await prisma.pembelian_tiket.count({
     *   where: {
     *     // ... the filter for the Pembelian_tikets we want to count
     *   }
     * })
    **/
    count<T extends Pembelian_tiketCountArgs>(
      args?: Subset<T, Pembelian_tiketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pembelian_tiketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pembelian_tiket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pembelian_tiketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Pembelian_tiketAggregateArgs>(args: Subset<T, Pembelian_tiketAggregateArgs>): Prisma.PrismaPromise<GetPembelian_tiketAggregateType<T>>

    /**
     * Group by Pembelian_tiket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pembelian_tiketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Pembelian_tiketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Pembelian_tiketGroupByArgs['orderBy'] }
        : { orderBy?: Pembelian_tiketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Pembelian_tiketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPembelian_tiketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pembelian_tiket model
   */
  readonly fields: Pembelian_tiketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pembelian_tiket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Pembelian_tiketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    jadwal<T extends JadwalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JadwalDefaultArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    detail<T extends Pembelian_tiket$detailArgs<ExtArgs> = {}>(args?: Subset<T, Pembelian_tiket$detailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Detail_pembelianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pembelian_tiket model
   */
  interface Pembelian_tiketFieldRefs {
    readonly id: FieldRef<"Pembelian_tiket", 'Int'>
    readonly tanggal_pembelian: FieldRef<"Pembelian_tiket", 'DateTime'>
    readonly userId: FieldRef<"Pembelian_tiket", 'Int'>
    readonly jadwalId: FieldRef<"Pembelian_tiket", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pembelian_tiket findUnique
   */
  export type Pembelian_tiketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian_tiket
     */
    select?: Pembelian_tiketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian_tiket
     */
    omit?: Pembelian_tiketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Pembelian_tiketInclude<ExtArgs> | null
    /**
     * Filter, which Pembelian_tiket to fetch.
     */
    where: Pembelian_tiketWhereUniqueInput
  }

  /**
   * Pembelian_tiket findUniqueOrThrow
   */
  export type Pembelian_tiketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian_tiket
     */
    select?: Pembelian_tiketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian_tiket
     */
    omit?: Pembelian_tiketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Pembelian_tiketInclude<ExtArgs> | null
    /**
     * Filter, which Pembelian_tiket to fetch.
     */
    where: Pembelian_tiketWhereUniqueInput
  }

  /**
   * Pembelian_tiket findFirst
   */
  export type Pembelian_tiketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian_tiket
     */
    select?: Pembelian_tiketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian_tiket
     */
    omit?: Pembelian_tiketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Pembelian_tiketInclude<ExtArgs> | null
    /**
     * Filter, which Pembelian_tiket to fetch.
     */
    where?: Pembelian_tiketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembelian_tikets to fetch.
     */
    orderBy?: Pembelian_tiketOrderByWithRelationInput | Pembelian_tiketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pembelian_tikets.
     */
    cursor?: Pembelian_tiketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembelian_tikets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembelian_tikets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pembelian_tikets.
     */
    distinct?: Pembelian_tiketScalarFieldEnum | Pembelian_tiketScalarFieldEnum[]
  }

  /**
   * Pembelian_tiket findFirstOrThrow
   */
  export type Pembelian_tiketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian_tiket
     */
    select?: Pembelian_tiketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian_tiket
     */
    omit?: Pembelian_tiketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Pembelian_tiketInclude<ExtArgs> | null
    /**
     * Filter, which Pembelian_tiket to fetch.
     */
    where?: Pembelian_tiketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembelian_tikets to fetch.
     */
    orderBy?: Pembelian_tiketOrderByWithRelationInput | Pembelian_tiketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pembelian_tikets.
     */
    cursor?: Pembelian_tiketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembelian_tikets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembelian_tikets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pembelian_tikets.
     */
    distinct?: Pembelian_tiketScalarFieldEnum | Pembelian_tiketScalarFieldEnum[]
  }

  /**
   * Pembelian_tiket findMany
   */
  export type Pembelian_tiketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian_tiket
     */
    select?: Pembelian_tiketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian_tiket
     */
    omit?: Pembelian_tiketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Pembelian_tiketInclude<ExtArgs> | null
    /**
     * Filter, which Pembelian_tikets to fetch.
     */
    where?: Pembelian_tiketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembelian_tikets to fetch.
     */
    orderBy?: Pembelian_tiketOrderByWithRelationInput | Pembelian_tiketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pembelian_tikets.
     */
    cursor?: Pembelian_tiketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembelian_tikets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembelian_tikets.
     */
    skip?: number
    distinct?: Pembelian_tiketScalarFieldEnum | Pembelian_tiketScalarFieldEnum[]
  }

  /**
   * Pembelian_tiket create
   */
  export type Pembelian_tiketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian_tiket
     */
    select?: Pembelian_tiketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian_tiket
     */
    omit?: Pembelian_tiketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Pembelian_tiketInclude<ExtArgs> | null
    /**
     * The data needed to create a Pembelian_tiket.
     */
    data: XOR<Pembelian_tiketCreateInput, Pembelian_tiketUncheckedCreateInput>
  }

  /**
   * Pembelian_tiket createMany
   */
  export type Pembelian_tiketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pembelian_tikets.
     */
    data: Pembelian_tiketCreateManyInput | Pembelian_tiketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pembelian_tiket update
   */
  export type Pembelian_tiketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian_tiket
     */
    select?: Pembelian_tiketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian_tiket
     */
    omit?: Pembelian_tiketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Pembelian_tiketInclude<ExtArgs> | null
    /**
     * The data needed to update a Pembelian_tiket.
     */
    data: XOR<Pembelian_tiketUpdateInput, Pembelian_tiketUncheckedUpdateInput>
    /**
     * Choose, which Pembelian_tiket to update.
     */
    where: Pembelian_tiketWhereUniqueInput
  }

  /**
   * Pembelian_tiket updateMany
   */
  export type Pembelian_tiketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pembelian_tikets.
     */
    data: XOR<Pembelian_tiketUpdateManyMutationInput, Pembelian_tiketUncheckedUpdateManyInput>
    /**
     * Filter which Pembelian_tikets to update
     */
    where?: Pembelian_tiketWhereInput
    /**
     * Limit how many Pembelian_tikets to update.
     */
    limit?: number
  }

  /**
   * Pembelian_tiket upsert
   */
  export type Pembelian_tiketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian_tiket
     */
    select?: Pembelian_tiketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian_tiket
     */
    omit?: Pembelian_tiketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Pembelian_tiketInclude<ExtArgs> | null
    /**
     * The filter to search for the Pembelian_tiket to update in case it exists.
     */
    where: Pembelian_tiketWhereUniqueInput
    /**
     * In case the Pembelian_tiket found by the `where` argument doesn't exist, create a new Pembelian_tiket with this data.
     */
    create: XOR<Pembelian_tiketCreateInput, Pembelian_tiketUncheckedCreateInput>
    /**
     * In case the Pembelian_tiket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Pembelian_tiketUpdateInput, Pembelian_tiketUncheckedUpdateInput>
  }

  /**
   * Pembelian_tiket delete
   */
  export type Pembelian_tiketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian_tiket
     */
    select?: Pembelian_tiketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian_tiket
     */
    omit?: Pembelian_tiketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Pembelian_tiketInclude<ExtArgs> | null
    /**
     * Filter which Pembelian_tiket to delete.
     */
    where: Pembelian_tiketWhereUniqueInput
  }

  /**
   * Pembelian_tiket deleteMany
   */
  export type Pembelian_tiketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pembelian_tikets to delete
     */
    where?: Pembelian_tiketWhereInput
    /**
     * Limit how many Pembelian_tikets to delete.
     */
    limit?: number
  }

  /**
   * Pembelian_tiket.detail
   */
  export type Pembelian_tiket$detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detail_pembelian
     */
    select?: Detail_pembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detail_pembelian
     */
    omit?: Detail_pembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detail_pembelianInclude<ExtArgs> | null
    where?: Detail_pembelianWhereInput
    orderBy?: Detail_pembelianOrderByWithRelationInput | Detail_pembelianOrderByWithRelationInput[]
    cursor?: Detail_pembelianWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detail_pembelianScalarFieldEnum | Detail_pembelianScalarFieldEnum[]
  }

  /**
   * Pembelian_tiket without action
   */
  export type Pembelian_tiketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian_tiket
     */
    select?: Pembelian_tiketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian_tiket
     */
    omit?: Pembelian_tiketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Pembelian_tiketInclude<ExtArgs> | null
  }


  /**
   * Model Detail_pembelian
   */

  export type AggregateDetail_pembelian = {
    _count: Detail_pembelianCountAggregateOutputType | null
    _avg: Detail_pembelianAvgAggregateOutputType | null
    _sum: Detail_pembelianSumAggregateOutputType | null
    _min: Detail_pembelianMinAggregateOutputType | null
    _max: Detail_pembelianMaxAggregateOutputType | null
  }

  export type Detail_pembelianAvgAggregateOutputType = {
    id: number | null
    id_pembelian_tiket: number | null
    id_kursi: number | null
  }

  export type Detail_pembelianSumAggregateOutputType = {
    id: number | null
    id_pembelian_tiket: number | null
    id_kursi: number | null
  }

  export type Detail_pembelianMinAggregateOutputType = {
    id: number | null
    NIK: string | null
    nama_penumpang: string | null
    id_pembelian_tiket: number | null
    id_kursi: number | null
  }

  export type Detail_pembelianMaxAggregateOutputType = {
    id: number | null
    NIK: string | null
    nama_penumpang: string | null
    id_pembelian_tiket: number | null
    id_kursi: number | null
  }

  export type Detail_pembelianCountAggregateOutputType = {
    id: number
    NIK: number
    nama_penumpang: number
    id_pembelian_tiket: number
    id_kursi: number
    _all: number
  }


  export type Detail_pembelianAvgAggregateInputType = {
    id?: true
    id_pembelian_tiket?: true
    id_kursi?: true
  }

  export type Detail_pembelianSumAggregateInputType = {
    id?: true
    id_pembelian_tiket?: true
    id_kursi?: true
  }

  export type Detail_pembelianMinAggregateInputType = {
    id?: true
    NIK?: true
    nama_penumpang?: true
    id_pembelian_tiket?: true
    id_kursi?: true
  }

  export type Detail_pembelianMaxAggregateInputType = {
    id?: true
    NIK?: true
    nama_penumpang?: true
    id_pembelian_tiket?: true
    id_kursi?: true
  }

  export type Detail_pembelianCountAggregateInputType = {
    id?: true
    NIK?: true
    nama_penumpang?: true
    id_pembelian_tiket?: true
    id_kursi?: true
    _all?: true
  }

  export type Detail_pembelianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Detail_pembelian to aggregate.
     */
    where?: Detail_pembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detail_pembelians to fetch.
     */
    orderBy?: Detail_pembelianOrderByWithRelationInput | Detail_pembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Detail_pembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detail_pembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detail_pembelians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Detail_pembelians
    **/
    _count?: true | Detail_pembelianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Detail_pembelianAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Detail_pembelianSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Detail_pembelianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Detail_pembelianMaxAggregateInputType
  }

  export type GetDetail_pembelianAggregateType<T extends Detail_pembelianAggregateArgs> = {
        [P in keyof T & keyof AggregateDetail_pembelian]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetail_pembelian[P]>
      : GetScalarType<T[P], AggregateDetail_pembelian[P]>
  }




  export type Detail_pembelianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Detail_pembelianWhereInput
    orderBy?: Detail_pembelianOrderByWithAggregationInput | Detail_pembelianOrderByWithAggregationInput[]
    by: Detail_pembelianScalarFieldEnum[] | Detail_pembelianScalarFieldEnum
    having?: Detail_pembelianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Detail_pembelianCountAggregateInputType | true
    _avg?: Detail_pembelianAvgAggregateInputType
    _sum?: Detail_pembelianSumAggregateInputType
    _min?: Detail_pembelianMinAggregateInputType
    _max?: Detail_pembelianMaxAggregateInputType
  }

  export type Detail_pembelianGroupByOutputType = {
    id: number
    NIK: string
    nama_penumpang: string
    id_pembelian_tiket: number
    id_kursi: number
    _count: Detail_pembelianCountAggregateOutputType | null
    _avg: Detail_pembelianAvgAggregateOutputType | null
    _sum: Detail_pembelianSumAggregateOutputType | null
    _min: Detail_pembelianMinAggregateOutputType | null
    _max: Detail_pembelianMaxAggregateOutputType | null
  }

  type GetDetail_pembelianGroupByPayload<T extends Detail_pembelianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Detail_pembelianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Detail_pembelianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Detail_pembelianGroupByOutputType[P]>
            : GetScalarType<T[P], Detail_pembelianGroupByOutputType[P]>
        }
      >
    >


  export type Detail_pembelianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    NIK?: boolean
    nama_penumpang?: boolean
    id_pembelian_tiket?: boolean
    id_kursi?: boolean
    pembelian?: boolean | Pembelian_tiketDefaultArgs<ExtArgs>
    kursi?: boolean | KursiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detail_pembelian"]>



  export type Detail_pembelianSelectScalar = {
    id?: boolean
    NIK?: boolean
    nama_penumpang?: boolean
    id_pembelian_tiket?: boolean
    id_kursi?: boolean
  }

  export type Detail_pembelianOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "NIK" | "nama_penumpang" | "id_pembelian_tiket" | "id_kursi", ExtArgs["result"]["detail_pembelian"]>
  export type Detail_pembelianInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pembelian?: boolean | Pembelian_tiketDefaultArgs<ExtArgs>
    kursi?: boolean | KursiDefaultArgs<ExtArgs>
  }

  export type $Detail_pembelianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Detail_pembelian"
    objects: {
      pembelian: Prisma.$Pembelian_tiketPayload<ExtArgs>
      kursi: Prisma.$KursiPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      NIK: string
      nama_penumpang: string
      id_pembelian_tiket: number
      id_kursi: number
    }, ExtArgs["result"]["detail_pembelian"]>
    composites: {}
  }

  type Detail_pembelianGetPayload<S extends boolean | null | undefined | Detail_pembelianDefaultArgs> = $Result.GetResult<Prisma.$Detail_pembelianPayload, S>

  type Detail_pembelianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Detail_pembelianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Detail_pembelianCountAggregateInputType | true
    }

  export interface Detail_pembelianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Detail_pembelian'], meta: { name: 'Detail_pembelian' } }
    /**
     * Find zero or one Detail_pembelian that matches the filter.
     * @param {Detail_pembelianFindUniqueArgs} args - Arguments to find a Detail_pembelian
     * @example
     * // Get one Detail_pembelian
     * const detail_pembelian = await prisma.detail_pembelian.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Detail_pembelianFindUniqueArgs>(args: SelectSubset<T, Detail_pembelianFindUniqueArgs<ExtArgs>>): Prisma__Detail_pembelianClient<$Result.GetResult<Prisma.$Detail_pembelianPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Detail_pembelian that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Detail_pembelianFindUniqueOrThrowArgs} args - Arguments to find a Detail_pembelian
     * @example
     * // Get one Detail_pembelian
     * const detail_pembelian = await prisma.detail_pembelian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Detail_pembelianFindUniqueOrThrowArgs>(args: SelectSubset<T, Detail_pembelianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Detail_pembelianClient<$Result.GetResult<Prisma.$Detail_pembelianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detail_pembelian that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detail_pembelianFindFirstArgs} args - Arguments to find a Detail_pembelian
     * @example
     * // Get one Detail_pembelian
     * const detail_pembelian = await prisma.detail_pembelian.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Detail_pembelianFindFirstArgs>(args?: SelectSubset<T, Detail_pembelianFindFirstArgs<ExtArgs>>): Prisma__Detail_pembelianClient<$Result.GetResult<Prisma.$Detail_pembelianPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detail_pembelian that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detail_pembelianFindFirstOrThrowArgs} args - Arguments to find a Detail_pembelian
     * @example
     * // Get one Detail_pembelian
     * const detail_pembelian = await prisma.detail_pembelian.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Detail_pembelianFindFirstOrThrowArgs>(args?: SelectSubset<T, Detail_pembelianFindFirstOrThrowArgs<ExtArgs>>): Prisma__Detail_pembelianClient<$Result.GetResult<Prisma.$Detail_pembelianPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Detail_pembelians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detail_pembelianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detail_pembelians
     * const detail_pembelians = await prisma.detail_pembelian.findMany()
     * 
     * // Get first 10 Detail_pembelians
     * const detail_pembelians = await prisma.detail_pembelian.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detail_pembelianWithIdOnly = await prisma.detail_pembelian.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Detail_pembelianFindManyArgs>(args?: SelectSubset<T, Detail_pembelianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Detail_pembelianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Detail_pembelian.
     * @param {Detail_pembelianCreateArgs} args - Arguments to create a Detail_pembelian.
     * @example
     * // Create one Detail_pembelian
     * const Detail_pembelian = await prisma.detail_pembelian.create({
     *   data: {
     *     // ... data to create a Detail_pembelian
     *   }
     * })
     * 
     */
    create<T extends Detail_pembelianCreateArgs>(args: SelectSubset<T, Detail_pembelianCreateArgs<ExtArgs>>): Prisma__Detail_pembelianClient<$Result.GetResult<Prisma.$Detail_pembelianPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Detail_pembelians.
     * @param {Detail_pembelianCreateManyArgs} args - Arguments to create many Detail_pembelians.
     * @example
     * // Create many Detail_pembelians
     * const detail_pembelian = await prisma.detail_pembelian.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Detail_pembelianCreateManyArgs>(args?: SelectSubset<T, Detail_pembelianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Detail_pembelian.
     * @param {Detail_pembelianDeleteArgs} args - Arguments to delete one Detail_pembelian.
     * @example
     * // Delete one Detail_pembelian
     * const Detail_pembelian = await prisma.detail_pembelian.delete({
     *   where: {
     *     // ... filter to delete one Detail_pembelian
     *   }
     * })
     * 
     */
    delete<T extends Detail_pembelianDeleteArgs>(args: SelectSubset<T, Detail_pembelianDeleteArgs<ExtArgs>>): Prisma__Detail_pembelianClient<$Result.GetResult<Prisma.$Detail_pembelianPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Detail_pembelian.
     * @param {Detail_pembelianUpdateArgs} args - Arguments to update one Detail_pembelian.
     * @example
     * // Update one Detail_pembelian
     * const detail_pembelian = await prisma.detail_pembelian.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Detail_pembelianUpdateArgs>(args: SelectSubset<T, Detail_pembelianUpdateArgs<ExtArgs>>): Prisma__Detail_pembelianClient<$Result.GetResult<Prisma.$Detail_pembelianPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Detail_pembelians.
     * @param {Detail_pembelianDeleteManyArgs} args - Arguments to filter Detail_pembelians to delete.
     * @example
     * // Delete a few Detail_pembelians
     * const { count } = await prisma.detail_pembelian.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Detail_pembelianDeleteManyArgs>(args?: SelectSubset<T, Detail_pembelianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detail_pembelians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detail_pembelianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detail_pembelians
     * const detail_pembelian = await prisma.detail_pembelian.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Detail_pembelianUpdateManyArgs>(args: SelectSubset<T, Detail_pembelianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Detail_pembelian.
     * @param {Detail_pembelianUpsertArgs} args - Arguments to update or create a Detail_pembelian.
     * @example
     * // Update or create a Detail_pembelian
     * const detail_pembelian = await prisma.detail_pembelian.upsert({
     *   create: {
     *     // ... data to create a Detail_pembelian
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detail_pembelian we want to update
     *   }
     * })
     */
    upsert<T extends Detail_pembelianUpsertArgs>(args: SelectSubset<T, Detail_pembelianUpsertArgs<ExtArgs>>): Prisma__Detail_pembelianClient<$Result.GetResult<Prisma.$Detail_pembelianPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Detail_pembelians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detail_pembelianCountArgs} args - Arguments to filter Detail_pembelians to count.
     * @example
     * // Count the number of Detail_pembelians
     * const count = await prisma.detail_pembelian.count({
     *   where: {
     *     // ... the filter for the Detail_pembelians we want to count
     *   }
     * })
    **/
    count<T extends Detail_pembelianCountArgs>(
      args?: Subset<T, Detail_pembelianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Detail_pembelianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detail_pembelian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detail_pembelianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Detail_pembelianAggregateArgs>(args: Subset<T, Detail_pembelianAggregateArgs>): Prisma.PrismaPromise<GetDetail_pembelianAggregateType<T>>

    /**
     * Group by Detail_pembelian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detail_pembelianGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Detail_pembelianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Detail_pembelianGroupByArgs['orderBy'] }
        : { orderBy?: Detail_pembelianGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Detail_pembelianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetail_pembelianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Detail_pembelian model
   */
  readonly fields: Detail_pembelianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Detail_pembelian.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Detail_pembelianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pembelian<T extends Pembelian_tiketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Pembelian_tiketDefaultArgs<ExtArgs>>): Prisma__Pembelian_tiketClient<$Result.GetResult<Prisma.$Pembelian_tiketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    kursi<T extends KursiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KursiDefaultArgs<ExtArgs>>): Prisma__KursiClient<$Result.GetResult<Prisma.$KursiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Detail_pembelian model
   */
  interface Detail_pembelianFieldRefs {
    readonly id: FieldRef<"Detail_pembelian", 'Int'>
    readonly NIK: FieldRef<"Detail_pembelian", 'String'>
    readonly nama_penumpang: FieldRef<"Detail_pembelian", 'String'>
    readonly id_pembelian_tiket: FieldRef<"Detail_pembelian", 'Int'>
    readonly id_kursi: FieldRef<"Detail_pembelian", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Detail_pembelian findUnique
   */
  export type Detail_pembelianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detail_pembelian
     */
    select?: Detail_pembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detail_pembelian
     */
    omit?: Detail_pembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detail_pembelianInclude<ExtArgs> | null
    /**
     * Filter, which Detail_pembelian to fetch.
     */
    where: Detail_pembelianWhereUniqueInput
  }

  /**
   * Detail_pembelian findUniqueOrThrow
   */
  export type Detail_pembelianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detail_pembelian
     */
    select?: Detail_pembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detail_pembelian
     */
    omit?: Detail_pembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detail_pembelianInclude<ExtArgs> | null
    /**
     * Filter, which Detail_pembelian to fetch.
     */
    where: Detail_pembelianWhereUniqueInput
  }

  /**
   * Detail_pembelian findFirst
   */
  export type Detail_pembelianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detail_pembelian
     */
    select?: Detail_pembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detail_pembelian
     */
    omit?: Detail_pembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detail_pembelianInclude<ExtArgs> | null
    /**
     * Filter, which Detail_pembelian to fetch.
     */
    where?: Detail_pembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detail_pembelians to fetch.
     */
    orderBy?: Detail_pembelianOrderByWithRelationInput | Detail_pembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Detail_pembelians.
     */
    cursor?: Detail_pembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detail_pembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detail_pembelians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Detail_pembelians.
     */
    distinct?: Detail_pembelianScalarFieldEnum | Detail_pembelianScalarFieldEnum[]
  }

  /**
   * Detail_pembelian findFirstOrThrow
   */
  export type Detail_pembelianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detail_pembelian
     */
    select?: Detail_pembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detail_pembelian
     */
    omit?: Detail_pembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detail_pembelianInclude<ExtArgs> | null
    /**
     * Filter, which Detail_pembelian to fetch.
     */
    where?: Detail_pembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detail_pembelians to fetch.
     */
    orderBy?: Detail_pembelianOrderByWithRelationInput | Detail_pembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Detail_pembelians.
     */
    cursor?: Detail_pembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detail_pembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detail_pembelians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Detail_pembelians.
     */
    distinct?: Detail_pembelianScalarFieldEnum | Detail_pembelianScalarFieldEnum[]
  }

  /**
   * Detail_pembelian findMany
   */
  export type Detail_pembelianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detail_pembelian
     */
    select?: Detail_pembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detail_pembelian
     */
    omit?: Detail_pembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detail_pembelianInclude<ExtArgs> | null
    /**
     * Filter, which Detail_pembelians to fetch.
     */
    where?: Detail_pembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detail_pembelians to fetch.
     */
    orderBy?: Detail_pembelianOrderByWithRelationInput | Detail_pembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Detail_pembelians.
     */
    cursor?: Detail_pembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detail_pembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detail_pembelians.
     */
    skip?: number
    distinct?: Detail_pembelianScalarFieldEnum | Detail_pembelianScalarFieldEnum[]
  }

  /**
   * Detail_pembelian create
   */
  export type Detail_pembelianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detail_pembelian
     */
    select?: Detail_pembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detail_pembelian
     */
    omit?: Detail_pembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detail_pembelianInclude<ExtArgs> | null
    /**
     * The data needed to create a Detail_pembelian.
     */
    data: XOR<Detail_pembelianCreateInput, Detail_pembelianUncheckedCreateInput>
  }

  /**
   * Detail_pembelian createMany
   */
  export type Detail_pembelianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Detail_pembelians.
     */
    data: Detail_pembelianCreateManyInput | Detail_pembelianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Detail_pembelian update
   */
  export type Detail_pembelianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detail_pembelian
     */
    select?: Detail_pembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detail_pembelian
     */
    omit?: Detail_pembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detail_pembelianInclude<ExtArgs> | null
    /**
     * The data needed to update a Detail_pembelian.
     */
    data: XOR<Detail_pembelianUpdateInput, Detail_pembelianUncheckedUpdateInput>
    /**
     * Choose, which Detail_pembelian to update.
     */
    where: Detail_pembelianWhereUniqueInput
  }

  /**
   * Detail_pembelian updateMany
   */
  export type Detail_pembelianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Detail_pembelians.
     */
    data: XOR<Detail_pembelianUpdateManyMutationInput, Detail_pembelianUncheckedUpdateManyInput>
    /**
     * Filter which Detail_pembelians to update
     */
    where?: Detail_pembelianWhereInput
    /**
     * Limit how many Detail_pembelians to update.
     */
    limit?: number
  }

  /**
   * Detail_pembelian upsert
   */
  export type Detail_pembelianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detail_pembelian
     */
    select?: Detail_pembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detail_pembelian
     */
    omit?: Detail_pembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detail_pembelianInclude<ExtArgs> | null
    /**
     * The filter to search for the Detail_pembelian to update in case it exists.
     */
    where: Detail_pembelianWhereUniqueInput
    /**
     * In case the Detail_pembelian found by the `where` argument doesn't exist, create a new Detail_pembelian with this data.
     */
    create: XOR<Detail_pembelianCreateInput, Detail_pembelianUncheckedCreateInput>
    /**
     * In case the Detail_pembelian was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Detail_pembelianUpdateInput, Detail_pembelianUncheckedUpdateInput>
  }

  /**
   * Detail_pembelian delete
   */
  export type Detail_pembelianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detail_pembelian
     */
    select?: Detail_pembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detail_pembelian
     */
    omit?: Detail_pembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detail_pembelianInclude<ExtArgs> | null
    /**
     * Filter which Detail_pembelian to delete.
     */
    where: Detail_pembelianWhereUniqueInput
  }

  /**
   * Detail_pembelian deleteMany
   */
  export type Detail_pembelianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Detail_pembelians to delete
     */
    where?: Detail_pembelianWhereInput
    /**
     * Limit how many Detail_pembelians to delete.
     */
    limit?: number
  }

  /**
   * Detail_pembelian without action
   */
  export type Detail_pembelianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detail_pembelian
     */
    select?: Detail_pembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detail_pembelian
     */
    omit?: Detail_pembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detail_pembelianInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    address: 'address',
    nik: 'nik',
    grade: 'grade',
    profile_picture: 'profile_picture',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const KeretaScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    name: 'name',
    description: 'description',
    kelas: 'kelas',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KeretaScalarFieldEnum = (typeof KeretaScalarFieldEnum)[keyof typeof KeretaScalarFieldEnum]


  export const GerbongScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    kouta: 'kouta',
    keretaId: 'keretaId'
  };

  export type GerbongScalarFieldEnum = (typeof GerbongScalarFieldEnum)[keyof typeof GerbongScalarFieldEnum]


  export const KursiScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    nomor: 'nomor',
    gerbongId: 'gerbongId'
  };

  export type KursiScalarFieldEnum = (typeof KursiScalarFieldEnum)[keyof typeof KursiScalarFieldEnum]


  export const JadwalScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    asal_keberangkatan: 'asal_keberangkatan',
    tujuan_keberangkatan: 'tujuan_keberangkatan',
    tanggal_keberangkatan: 'tanggal_keberangkatan',
    tanggal_kedatangan: 'tanggal_kedatangan',
    harga: 'harga',
    keretaId: 'keretaId'
  };

  export type JadwalScalarFieldEnum = (typeof JadwalScalarFieldEnum)[keyof typeof JadwalScalarFieldEnum]


  export const Pembelian_tiketScalarFieldEnum: {
    id: 'id',
    tanggal_pembelian: 'tanggal_pembelian',
    userId: 'userId',
    jadwalId: 'jadwalId'
  };

  export type Pembelian_tiketScalarFieldEnum = (typeof Pembelian_tiketScalarFieldEnum)[keyof typeof Pembelian_tiketScalarFieldEnum]


  export const Detail_pembelianScalarFieldEnum: {
    id: 'id',
    NIK: 'NIK',
    nama_penumpang: 'nama_penumpang',
    id_pembelian_tiket: 'id_pembelian_tiket',
    id_kursi: 'id_kursi'
  };

  export type Detail_pembelianScalarFieldEnum = (typeof Detail_pembelianScalarFieldEnum)[keyof typeof Detail_pembelianScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    address: 'address',
    grade: 'grade',
    profile_picture: 'profile_picture'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const KeretaOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    name: 'name',
    description: 'description',
    kelas: 'kelas'
  };

  export type KeretaOrderByRelevanceFieldEnum = (typeof KeretaOrderByRelevanceFieldEnum)[keyof typeof KeretaOrderByRelevanceFieldEnum]


  export const GerbongOrderByRelevanceFieldEnum: {
    uuid: 'uuid'
  };

  export type GerbongOrderByRelevanceFieldEnum = (typeof GerbongOrderByRelevanceFieldEnum)[keyof typeof GerbongOrderByRelevanceFieldEnum]


  export const KursiOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    nomor: 'nomor'
  };

  export type KursiOrderByRelevanceFieldEnum = (typeof KursiOrderByRelevanceFieldEnum)[keyof typeof KursiOrderByRelevanceFieldEnum]


  export const JadwalOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    asal_keberangkatan: 'asal_keberangkatan',
    tujuan_keberangkatan: 'tujuan_keberangkatan'
  };

  export type JadwalOrderByRelevanceFieldEnum = (typeof JadwalOrderByRelevanceFieldEnum)[keyof typeof JadwalOrderByRelevanceFieldEnum]


  export const Detail_pembelianOrderByRelevanceFieldEnum: {
    NIK: 'NIK',
    nama_penumpang: 'nama_penumpang'
  };

  export type Detail_pembelianOrderByRelevanceFieldEnum = (typeof Detail_pembelianOrderByRelevanceFieldEnum)[keyof typeof Detail_pembelianOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    uuid?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    nik?: IntFilter<"User"> | number
    grade?: StringFilter<"User"> | string
    profile_picture?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    pembelianTikets?: Pembelian_tiketListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    nik?: SortOrder
    grade?: SortOrder
    profile_picture?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pembelianTikets?: Pembelian_tiketOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    email?: string
    nik?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    grade?: StringFilter<"User"> | string
    profile_picture?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    pembelianTikets?: Pembelian_tiketListRelationFilter
  }, "id" | "uuid" | "email" | "nik">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    nik?: SortOrder
    grade?: SortOrder
    profile_picture?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    uuid?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    address?: StringWithAggregatesFilter<"User"> | string
    nik?: IntWithAggregatesFilter<"User"> | number
    grade?: StringWithAggregatesFilter<"User"> | string
    profile_picture?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type KeretaWhereInput = {
    AND?: KeretaWhereInput | KeretaWhereInput[]
    OR?: KeretaWhereInput[]
    NOT?: KeretaWhereInput | KeretaWhereInput[]
    id?: IntFilter<"Kereta"> | number
    uuid?: StringFilter<"Kereta"> | string
    name?: StringFilter<"Kereta"> | string
    description?: StringFilter<"Kereta"> | string
    kelas?: StringFilter<"Kereta"> | string
    createdAt?: DateTimeFilter<"Kereta"> | Date | string
    updatedAt?: DateTimeFilter<"Kereta"> | Date | string
    gerbong?: GerbongListRelationFilter
    jadwal?: JadwalListRelationFilter
  }

  export type KeretaOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    kelas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gerbong?: GerbongOrderByRelationAggregateInput
    jadwal?: JadwalOrderByRelationAggregateInput
    _relevance?: KeretaOrderByRelevanceInput
  }

  export type KeretaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    AND?: KeretaWhereInput | KeretaWhereInput[]
    OR?: KeretaWhereInput[]
    NOT?: KeretaWhereInput | KeretaWhereInput[]
    name?: StringFilter<"Kereta"> | string
    description?: StringFilter<"Kereta"> | string
    kelas?: StringFilter<"Kereta"> | string
    createdAt?: DateTimeFilter<"Kereta"> | Date | string
    updatedAt?: DateTimeFilter<"Kereta"> | Date | string
    gerbong?: GerbongListRelationFilter
    jadwal?: JadwalListRelationFilter
  }, "id" | "uuid">

  export type KeretaOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    kelas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KeretaCountOrderByAggregateInput
    _avg?: KeretaAvgOrderByAggregateInput
    _max?: KeretaMaxOrderByAggregateInput
    _min?: KeretaMinOrderByAggregateInput
    _sum?: KeretaSumOrderByAggregateInput
  }

  export type KeretaScalarWhereWithAggregatesInput = {
    AND?: KeretaScalarWhereWithAggregatesInput | KeretaScalarWhereWithAggregatesInput[]
    OR?: KeretaScalarWhereWithAggregatesInput[]
    NOT?: KeretaScalarWhereWithAggregatesInput | KeretaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Kereta"> | number
    uuid?: StringWithAggregatesFilter<"Kereta"> | string
    name?: StringWithAggregatesFilter<"Kereta"> | string
    description?: StringWithAggregatesFilter<"Kereta"> | string
    kelas?: StringWithAggregatesFilter<"Kereta"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Kereta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Kereta"> | Date | string
  }

  export type GerbongWhereInput = {
    AND?: GerbongWhereInput | GerbongWhereInput[]
    OR?: GerbongWhereInput[]
    NOT?: GerbongWhereInput | GerbongWhereInput[]
    id?: IntFilter<"Gerbong"> | number
    uuid?: StringFilter<"Gerbong"> | string
    kouta?: IntFilter<"Gerbong"> | number
    keretaId?: IntFilter<"Gerbong"> | number
    kereta?: XOR<KeretaScalarRelationFilter, KeretaWhereInput>
    kursi?: KursiListRelationFilter
  }

  export type GerbongOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    kouta?: SortOrder
    keretaId?: SortOrder
    kereta?: KeretaOrderByWithRelationInput
    kursi?: KursiOrderByRelationAggregateInput
    _relevance?: GerbongOrderByRelevanceInput
  }

  export type GerbongWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    AND?: GerbongWhereInput | GerbongWhereInput[]
    OR?: GerbongWhereInput[]
    NOT?: GerbongWhereInput | GerbongWhereInput[]
    kouta?: IntFilter<"Gerbong"> | number
    keretaId?: IntFilter<"Gerbong"> | number
    kereta?: XOR<KeretaScalarRelationFilter, KeretaWhereInput>
    kursi?: KursiListRelationFilter
  }, "id" | "uuid">

  export type GerbongOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    kouta?: SortOrder
    keretaId?: SortOrder
    _count?: GerbongCountOrderByAggregateInput
    _avg?: GerbongAvgOrderByAggregateInput
    _max?: GerbongMaxOrderByAggregateInput
    _min?: GerbongMinOrderByAggregateInput
    _sum?: GerbongSumOrderByAggregateInput
  }

  export type GerbongScalarWhereWithAggregatesInput = {
    AND?: GerbongScalarWhereWithAggregatesInput | GerbongScalarWhereWithAggregatesInput[]
    OR?: GerbongScalarWhereWithAggregatesInput[]
    NOT?: GerbongScalarWhereWithAggregatesInput | GerbongScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Gerbong"> | number
    uuid?: StringWithAggregatesFilter<"Gerbong"> | string
    kouta?: IntWithAggregatesFilter<"Gerbong"> | number
    keretaId?: IntWithAggregatesFilter<"Gerbong"> | number
  }

  export type KursiWhereInput = {
    AND?: KursiWhereInput | KursiWhereInput[]
    OR?: KursiWhereInput[]
    NOT?: KursiWhereInput | KursiWhereInput[]
    id?: IntFilter<"Kursi"> | number
    uuid?: StringFilter<"Kursi"> | string
    nomor?: StringFilter<"Kursi"> | string
    gerbongId?: IntFilter<"Kursi"> | number
    gerbong?: XOR<GerbongScalarRelationFilter, GerbongWhereInput>
    detailPembelians?: Detail_pembelianListRelationFilter
  }

  export type KursiOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    nomor?: SortOrder
    gerbongId?: SortOrder
    gerbong?: GerbongOrderByWithRelationInput
    detailPembelians?: Detail_pembelianOrderByRelationAggregateInput
    _relevance?: KursiOrderByRelevanceInput
  }

  export type KursiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    AND?: KursiWhereInput | KursiWhereInput[]
    OR?: KursiWhereInput[]
    NOT?: KursiWhereInput | KursiWhereInput[]
    nomor?: StringFilter<"Kursi"> | string
    gerbongId?: IntFilter<"Kursi"> | number
    gerbong?: XOR<GerbongScalarRelationFilter, GerbongWhereInput>
    detailPembelians?: Detail_pembelianListRelationFilter
  }, "id" | "uuid">

  export type KursiOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    nomor?: SortOrder
    gerbongId?: SortOrder
    _count?: KursiCountOrderByAggregateInput
    _avg?: KursiAvgOrderByAggregateInput
    _max?: KursiMaxOrderByAggregateInput
    _min?: KursiMinOrderByAggregateInput
    _sum?: KursiSumOrderByAggregateInput
  }

  export type KursiScalarWhereWithAggregatesInput = {
    AND?: KursiScalarWhereWithAggregatesInput | KursiScalarWhereWithAggregatesInput[]
    OR?: KursiScalarWhereWithAggregatesInput[]
    NOT?: KursiScalarWhereWithAggregatesInput | KursiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Kursi"> | number
    uuid?: StringWithAggregatesFilter<"Kursi"> | string
    nomor?: StringWithAggregatesFilter<"Kursi"> | string
    gerbongId?: IntWithAggregatesFilter<"Kursi"> | number
  }

  export type JadwalWhereInput = {
    AND?: JadwalWhereInput | JadwalWhereInput[]
    OR?: JadwalWhereInput[]
    NOT?: JadwalWhereInput | JadwalWhereInput[]
    id?: IntFilter<"Jadwal"> | number
    uuid?: StringFilter<"Jadwal"> | string
    asal_keberangkatan?: StringFilter<"Jadwal"> | string
    tujuan_keberangkatan?: StringFilter<"Jadwal"> | string
    tanggal_keberangkatan?: DateTimeFilter<"Jadwal"> | Date | string
    tanggal_kedatangan?: DateTimeFilter<"Jadwal"> | Date | string
    harga?: IntFilter<"Jadwal"> | number
    keretaId?: IntFilter<"Jadwal"> | number
    kereta?: XOR<KeretaScalarRelationFilter, KeretaWhereInput>
    pembelianTikets?: Pembelian_tiketListRelationFilter
  }

  export type JadwalOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    asal_keberangkatan?: SortOrder
    tujuan_keberangkatan?: SortOrder
    tanggal_keberangkatan?: SortOrder
    tanggal_kedatangan?: SortOrder
    harga?: SortOrder
    keretaId?: SortOrder
    kereta?: KeretaOrderByWithRelationInput
    pembelianTikets?: Pembelian_tiketOrderByRelationAggregateInput
    _relevance?: JadwalOrderByRelevanceInput
  }

  export type JadwalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    AND?: JadwalWhereInput | JadwalWhereInput[]
    OR?: JadwalWhereInput[]
    NOT?: JadwalWhereInput | JadwalWhereInput[]
    asal_keberangkatan?: StringFilter<"Jadwal"> | string
    tujuan_keberangkatan?: StringFilter<"Jadwal"> | string
    tanggal_keberangkatan?: DateTimeFilter<"Jadwal"> | Date | string
    tanggal_kedatangan?: DateTimeFilter<"Jadwal"> | Date | string
    harga?: IntFilter<"Jadwal"> | number
    keretaId?: IntFilter<"Jadwal"> | number
    kereta?: XOR<KeretaScalarRelationFilter, KeretaWhereInput>
    pembelianTikets?: Pembelian_tiketListRelationFilter
  }, "id" | "uuid">

  export type JadwalOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    asal_keberangkatan?: SortOrder
    tujuan_keberangkatan?: SortOrder
    tanggal_keberangkatan?: SortOrder
    tanggal_kedatangan?: SortOrder
    harga?: SortOrder
    keretaId?: SortOrder
    _count?: JadwalCountOrderByAggregateInput
    _avg?: JadwalAvgOrderByAggregateInput
    _max?: JadwalMaxOrderByAggregateInput
    _min?: JadwalMinOrderByAggregateInput
    _sum?: JadwalSumOrderByAggregateInput
  }

  export type JadwalScalarWhereWithAggregatesInput = {
    AND?: JadwalScalarWhereWithAggregatesInput | JadwalScalarWhereWithAggregatesInput[]
    OR?: JadwalScalarWhereWithAggregatesInput[]
    NOT?: JadwalScalarWhereWithAggregatesInput | JadwalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Jadwal"> | number
    uuid?: StringWithAggregatesFilter<"Jadwal"> | string
    asal_keberangkatan?: StringWithAggregatesFilter<"Jadwal"> | string
    tujuan_keberangkatan?: StringWithAggregatesFilter<"Jadwal"> | string
    tanggal_keberangkatan?: DateTimeWithAggregatesFilter<"Jadwal"> | Date | string
    tanggal_kedatangan?: DateTimeWithAggregatesFilter<"Jadwal"> | Date | string
    harga?: IntWithAggregatesFilter<"Jadwal"> | number
    keretaId?: IntWithAggregatesFilter<"Jadwal"> | number
  }

  export type Pembelian_tiketWhereInput = {
    AND?: Pembelian_tiketWhereInput | Pembelian_tiketWhereInput[]
    OR?: Pembelian_tiketWhereInput[]
    NOT?: Pembelian_tiketWhereInput | Pembelian_tiketWhereInput[]
    id?: IntFilter<"Pembelian_tiket"> | number
    tanggal_pembelian?: DateTimeFilter<"Pembelian_tiket"> | Date | string
    userId?: IntFilter<"Pembelian_tiket"> | number
    jadwalId?: IntFilter<"Pembelian_tiket"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    jadwal?: XOR<JadwalScalarRelationFilter, JadwalWhereInput>
    detail?: Detail_pembelianListRelationFilter
  }

  export type Pembelian_tiketOrderByWithRelationInput = {
    id?: SortOrder
    tanggal_pembelian?: SortOrder
    userId?: SortOrder
    jadwalId?: SortOrder
    user?: UserOrderByWithRelationInput
    jadwal?: JadwalOrderByWithRelationInput
    detail?: Detail_pembelianOrderByRelationAggregateInput
  }

  export type Pembelian_tiketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Pembelian_tiketWhereInput | Pembelian_tiketWhereInput[]
    OR?: Pembelian_tiketWhereInput[]
    NOT?: Pembelian_tiketWhereInput | Pembelian_tiketWhereInput[]
    tanggal_pembelian?: DateTimeFilter<"Pembelian_tiket"> | Date | string
    userId?: IntFilter<"Pembelian_tiket"> | number
    jadwalId?: IntFilter<"Pembelian_tiket"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    jadwal?: XOR<JadwalScalarRelationFilter, JadwalWhereInput>
    detail?: Detail_pembelianListRelationFilter
  }, "id">

  export type Pembelian_tiketOrderByWithAggregationInput = {
    id?: SortOrder
    tanggal_pembelian?: SortOrder
    userId?: SortOrder
    jadwalId?: SortOrder
    _count?: Pembelian_tiketCountOrderByAggregateInput
    _avg?: Pembelian_tiketAvgOrderByAggregateInput
    _max?: Pembelian_tiketMaxOrderByAggregateInput
    _min?: Pembelian_tiketMinOrderByAggregateInput
    _sum?: Pembelian_tiketSumOrderByAggregateInput
  }

  export type Pembelian_tiketScalarWhereWithAggregatesInput = {
    AND?: Pembelian_tiketScalarWhereWithAggregatesInput | Pembelian_tiketScalarWhereWithAggregatesInput[]
    OR?: Pembelian_tiketScalarWhereWithAggregatesInput[]
    NOT?: Pembelian_tiketScalarWhereWithAggregatesInput | Pembelian_tiketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pembelian_tiket"> | number
    tanggal_pembelian?: DateTimeWithAggregatesFilter<"Pembelian_tiket"> | Date | string
    userId?: IntWithAggregatesFilter<"Pembelian_tiket"> | number
    jadwalId?: IntWithAggregatesFilter<"Pembelian_tiket"> | number
  }

  export type Detail_pembelianWhereInput = {
    AND?: Detail_pembelianWhereInput | Detail_pembelianWhereInput[]
    OR?: Detail_pembelianWhereInput[]
    NOT?: Detail_pembelianWhereInput | Detail_pembelianWhereInput[]
    id?: IntFilter<"Detail_pembelian"> | number
    NIK?: StringFilter<"Detail_pembelian"> | string
    nama_penumpang?: StringFilter<"Detail_pembelian"> | string
    id_pembelian_tiket?: IntFilter<"Detail_pembelian"> | number
    id_kursi?: IntFilter<"Detail_pembelian"> | number
    pembelian?: XOR<Pembelian_tiketScalarRelationFilter, Pembelian_tiketWhereInput>
    kursi?: XOR<KursiScalarRelationFilter, KursiWhereInput>
  }

  export type Detail_pembelianOrderByWithRelationInput = {
    id?: SortOrder
    NIK?: SortOrder
    nama_penumpang?: SortOrder
    id_pembelian_tiket?: SortOrder
    id_kursi?: SortOrder
    pembelian?: Pembelian_tiketOrderByWithRelationInput
    kursi?: KursiOrderByWithRelationInput
    _relevance?: Detail_pembelianOrderByRelevanceInput
  }

  export type Detail_pembelianWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Detail_pembelianWhereInput | Detail_pembelianWhereInput[]
    OR?: Detail_pembelianWhereInput[]
    NOT?: Detail_pembelianWhereInput | Detail_pembelianWhereInput[]
    NIK?: StringFilter<"Detail_pembelian"> | string
    nama_penumpang?: StringFilter<"Detail_pembelian"> | string
    id_pembelian_tiket?: IntFilter<"Detail_pembelian"> | number
    id_kursi?: IntFilter<"Detail_pembelian"> | number
    pembelian?: XOR<Pembelian_tiketScalarRelationFilter, Pembelian_tiketWhereInput>
    kursi?: XOR<KursiScalarRelationFilter, KursiWhereInput>
  }, "id">

  export type Detail_pembelianOrderByWithAggregationInput = {
    id?: SortOrder
    NIK?: SortOrder
    nama_penumpang?: SortOrder
    id_pembelian_tiket?: SortOrder
    id_kursi?: SortOrder
    _count?: Detail_pembelianCountOrderByAggregateInput
    _avg?: Detail_pembelianAvgOrderByAggregateInput
    _max?: Detail_pembelianMaxOrderByAggregateInput
    _min?: Detail_pembelianMinOrderByAggregateInput
    _sum?: Detail_pembelianSumOrderByAggregateInput
  }

  export type Detail_pembelianScalarWhereWithAggregatesInput = {
    AND?: Detail_pembelianScalarWhereWithAggregatesInput | Detail_pembelianScalarWhereWithAggregatesInput[]
    OR?: Detail_pembelianScalarWhereWithAggregatesInput[]
    NOT?: Detail_pembelianScalarWhereWithAggregatesInput | Detail_pembelianScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Detail_pembelian"> | number
    NIK?: StringWithAggregatesFilter<"Detail_pembelian"> | string
    nama_penumpang?: StringWithAggregatesFilter<"Detail_pembelian"> | string
    id_pembelian_tiket?: IntWithAggregatesFilter<"Detail_pembelian"> | number
    id_kursi?: IntWithAggregatesFilter<"Detail_pembelian"> | number
  }

  export type UserCreateInput = {
    uuid?: string
    name: string
    email: string
    password: string
    phone: string
    address?: string
    nik: number
    grade?: string
    profile_picture?: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    pembelianTikets?: Pembelian_tiketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    uuid?: string
    name: string
    email: string
    password: string
    phone: string
    address?: string
    nik: number
    grade?: string
    profile_picture?: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    pembelianTikets?: Pembelian_tiketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nik?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pembelianTikets?: Pembelian_tiketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nik?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pembelianTikets?: Pembelian_tiketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    uuid?: string
    name: string
    email: string
    password: string
    phone: string
    address?: string
    nik: number
    grade?: string
    profile_picture?: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nik?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nik?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeretaCreateInput = {
    uuid?: string
    name: string
    description: string
    kelas: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gerbong?: GerbongCreateNestedManyWithoutKeretaInput
    jadwal?: JadwalCreateNestedManyWithoutKeretaInput
  }

  export type KeretaUncheckedCreateInput = {
    id?: number
    uuid?: string
    name: string
    description: string
    kelas: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gerbong?: GerbongUncheckedCreateNestedManyWithoutKeretaInput
    jadwal?: JadwalUncheckedCreateNestedManyWithoutKeretaInput
  }

  export type KeretaUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gerbong?: GerbongUpdateManyWithoutKeretaNestedInput
    jadwal?: JadwalUpdateManyWithoutKeretaNestedInput
  }

  export type KeretaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gerbong?: GerbongUncheckedUpdateManyWithoutKeretaNestedInput
    jadwal?: JadwalUncheckedUpdateManyWithoutKeretaNestedInput
  }

  export type KeretaCreateManyInput = {
    id?: number
    uuid?: string
    name: string
    description: string
    kelas: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KeretaUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeretaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GerbongCreateInput = {
    uuid?: string
    kouta: number
    kereta: KeretaCreateNestedOneWithoutGerbongInput
    kursi?: KursiCreateNestedManyWithoutGerbongInput
  }

  export type GerbongUncheckedCreateInput = {
    id?: number
    uuid?: string
    kouta: number
    keretaId: number
    kursi?: KursiUncheckedCreateNestedManyWithoutGerbongInput
  }

  export type GerbongUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    kouta?: IntFieldUpdateOperationsInput | number
    kereta?: KeretaUpdateOneRequiredWithoutGerbongNestedInput
    kursi?: KursiUpdateManyWithoutGerbongNestedInput
  }

  export type GerbongUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    kouta?: IntFieldUpdateOperationsInput | number
    keretaId?: IntFieldUpdateOperationsInput | number
    kursi?: KursiUncheckedUpdateManyWithoutGerbongNestedInput
  }

  export type GerbongCreateManyInput = {
    id?: number
    uuid?: string
    kouta: number
    keretaId: number
  }

  export type GerbongUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    kouta?: IntFieldUpdateOperationsInput | number
  }

  export type GerbongUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    kouta?: IntFieldUpdateOperationsInput | number
    keretaId?: IntFieldUpdateOperationsInput | number
  }

  export type KursiCreateInput = {
    uuid?: string
    nomor: string
    gerbong: GerbongCreateNestedOneWithoutKursiInput
    detailPembelians?: Detail_pembelianCreateNestedManyWithoutKursiInput
  }

  export type KursiUncheckedCreateInput = {
    id?: number
    uuid?: string
    nomor: string
    gerbongId: number
    detailPembelians?: Detail_pembelianUncheckedCreateNestedManyWithoutKursiInput
  }

  export type KursiUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nomor?: StringFieldUpdateOperationsInput | string
    gerbong?: GerbongUpdateOneRequiredWithoutKursiNestedInput
    detailPembelians?: Detail_pembelianUpdateManyWithoutKursiNestedInput
  }

  export type KursiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    nomor?: StringFieldUpdateOperationsInput | string
    gerbongId?: IntFieldUpdateOperationsInput | number
    detailPembelians?: Detail_pembelianUncheckedUpdateManyWithoutKursiNestedInput
  }

  export type KursiCreateManyInput = {
    id?: number
    uuid?: string
    nomor: string
    gerbongId: number
  }

  export type KursiUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nomor?: StringFieldUpdateOperationsInput | string
  }

  export type KursiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    nomor?: StringFieldUpdateOperationsInput | string
    gerbongId?: IntFieldUpdateOperationsInput | number
  }

  export type JadwalCreateInput = {
    uuid?: string
    asal_keberangkatan: string
    tujuan_keberangkatan: string
    tanggal_keberangkatan: Date | string
    tanggal_kedatangan: Date | string
    harga: number
    kereta: KeretaCreateNestedOneWithoutJadwalInput
    pembelianTikets?: Pembelian_tiketCreateNestedManyWithoutJadwalInput
  }

  export type JadwalUncheckedCreateInput = {
    id?: number
    uuid?: string
    asal_keberangkatan: string
    tujuan_keberangkatan: string
    tanggal_keberangkatan: Date | string
    tanggal_kedatangan: Date | string
    harga: number
    keretaId: number
    pembelianTikets?: Pembelian_tiketUncheckedCreateNestedManyWithoutJadwalInput
  }

  export type JadwalUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    asal_keberangkatan?: StringFieldUpdateOperationsInput | string
    tujuan_keberangkatan?: StringFieldUpdateOperationsInput | string
    tanggal_keberangkatan?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_kedatangan?: DateTimeFieldUpdateOperationsInput | Date | string
    harga?: IntFieldUpdateOperationsInput | number
    kereta?: KeretaUpdateOneRequiredWithoutJadwalNestedInput
    pembelianTikets?: Pembelian_tiketUpdateManyWithoutJadwalNestedInput
  }

  export type JadwalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    asal_keberangkatan?: StringFieldUpdateOperationsInput | string
    tujuan_keberangkatan?: StringFieldUpdateOperationsInput | string
    tanggal_keberangkatan?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_kedatangan?: DateTimeFieldUpdateOperationsInput | Date | string
    harga?: IntFieldUpdateOperationsInput | number
    keretaId?: IntFieldUpdateOperationsInput | number
    pembelianTikets?: Pembelian_tiketUncheckedUpdateManyWithoutJadwalNestedInput
  }

  export type JadwalCreateManyInput = {
    id?: number
    uuid?: string
    asal_keberangkatan: string
    tujuan_keberangkatan: string
    tanggal_keberangkatan: Date | string
    tanggal_kedatangan: Date | string
    harga: number
    keretaId: number
  }

  export type JadwalUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    asal_keberangkatan?: StringFieldUpdateOperationsInput | string
    tujuan_keberangkatan?: StringFieldUpdateOperationsInput | string
    tanggal_keberangkatan?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_kedatangan?: DateTimeFieldUpdateOperationsInput | Date | string
    harga?: IntFieldUpdateOperationsInput | number
  }

  export type JadwalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    asal_keberangkatan?: StringFieldUpdateOperationsInput | string
    tujuan_keberangkatan?: StringFieldUpdateOperationsInput | string
    tanggal_keberangkatan?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_kedatangan?: DateTimeFieldUpdateOperationsInput | Date | string
    harga?: IntFieldUpdateOperationsInput | number
    keretaId?: IntFieldUpdateOperationsInput | number
  }

  export type Pembelian_tiketCreateInput = {
    tanggal_pembelian?: Date | string
    user: UserCreateNestedOneWithoutPembelianTiketsInput
    jadwal: JadwalCreateNestedOneWithoutPembelianTiketsInput
    detail?: Detail_pembelianCreateNestedManyWithoutPembelianInput
  }

  export type Pembelian_tiketUncheckedCreateInput = {
    id?: number
    tanggal_pembelian?: Date | string
    userId: number
    jadwalId: number
    detail?: Detail_pembelianUncheckedCreateNestedManyWithoutPembelianInput
  }

  export type Pembelian_tiketUpdateInput = {
    tanggal_pembelian?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPembelianTiketsNestedInput
    jadwal?: JadwalUpdateOneRequiredWithoutPembelianTiketsNestedInput
    detail?: Detail_pembelianUpdateManyWithoutPembelianNestedInput
  }

  export type Pembelian_tiketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal_pembelian?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    jadwalId?: IntFieldUpdateOperationsInput | number
    detail?: Detail_pembelianUncheckedUpdateManyWithoutPembelianNestedInput
  }

  export type Pembelian_tiketCreateManyInput = {
    id?: number
    tanggal_pembelian?: Date | string
    userId: number
    jadwalId: number
  }

  export type Pembelian_tiketUpdateManyMutationInput = {
    tanggal_pembelian?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Pembelian_tiketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal_pembelian?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    jadwalId?: IntFieldUpdateOperationsInput | number
  }

  export type Detail_pembelianCreateInput = {
    NIK: string
    nama_penumpang: string
    pembelian: Pembelian_tiketCreateNestedOneWithoutDetailInput
    kursi: KursiCreateNestedOneWithoutDetailPembeliansInput
  }

  export type Detail_pembelianUncheckedCreateInput = {
    id?: number
    NIK: string
    nama_penumpang: string
    id_pembelian_tiket: number
    id_kursi: number
  }

  export type Detail_pembelianUpdateInput = {
    NIK?: StringFieldUpdateOperationsInput | string
    nama_penumpang?: StringFieldUpdateOperationsInput | string
    pembelian?: Pembelian_tiketUpdateOneRequiredWithoutDetailNestedInput
    kursi?: KursiUpdateOneRequiredWithoutDetailPembeliansNestedInput
  }

  export type Detail_pembelianUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    NIK?: StringFieldUpdateOperationsInput | string
    nama_penumpang?: StringFieldUpdateOperationsInput | string
    id_pembelian_tiket?: IntFieldUpdateOperationsInput | number
    id_kursi?: IntFieldUpdateOperationsInput | number
  }

  export type Detail_pembelianCreateManyInput = {
    id?: number
    NIK: string
    nama_penumpang: string
    id_pembelian_tiket: number
    id_kursi: number
  }

  export type Detail_pembelianUpdateManyMutationInput = {
    NIK?: StringFieldUpdateOperationsInput | string
    nama_penumpang?: StringFieldUpdateOperationsInput | string
  }

  export type Detail_pembelianUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    NIK?: StringFieldUpdateOperationsInput | string
    nama_penumpang?: StringFieldUpdateOperationsInput | string
    id_pembelian_tiket?: IntFieldUpdateOperationsInput | number
    id_kursi?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Pembelian_tiketListRelationFilter = {
    every?: Pembelian_tiketWhereInput
    some?: Pembelian_tiketWhereInput
    none?: Pembelian_tiketWhereInput
  }

  export type Pembelian_tiketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    nik?: SortOrder
    grade?: SortOrder
    profile_picture?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    nik?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    nik?: SortOrder
    grade?: SortOrder
    profile_picture?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    nik?: SortOrder
    grade?: SortOrder
    profile_picture?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    nik?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type GerbongListRelationFilter = {
    every?: GerbongWhereInput
    some?: GerbongWhereInput
    none?: GerbongWhereInput
  }

  export type JadwalListRelationFilter = {
    every?: JadwalWhereInput
    some?: JadwalWhereInput
    none?: JadwalWhereInput
  }

  export type GerbongOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JadwalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KeretaOrderByRelevanceInput = {
    fields: KeretaOrderByRelevanceFieldEnum | KeretaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type KeretaCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    kelas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KeretaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KeretaMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    kelas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KeretaMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    kelas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KeretaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KeretaScalarRelationFilter = {
    is?: KeretaWhereInput
    isNot?: KeretaWhereInput
  }

  export type KursiListRelationFilter = {
    every?: KursiWhereInput
    some?: KursiWhereInput
    none?: KursiWhereInput
  }

  export type KursiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GerbongOrderByRelevanceInput = {
    fields: GerbongOrderByRelevanceFieldEnum | GerbongOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GerbongCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    kouta?: SortOrder
    keretaId?: SortOrder
  }

  export type GerbongAvgOrderByAggregateInput = {
    id?: SortOrder
    kouta?: SortOrder
    keretaId?: SortOrder
  }

  export type GerbongMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    kouta?: SortOrder
    keretaId?: SortOrder
  }

  export type GerbongMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    kouta?: SortOrder
    keretaId?: SortOrder
  }

  export type GerbongSumOrderByAggregateInput = {
    id?: SortOrder
    kouta?: SortOrder
    keretaId?: SortOrder
  }

  export type GerbongScalarRelationFilter = {
    is?: GerbongWhereInput
    isNot?: GerbongWhereInput
  }

  export type Detail_pembelianListRelationFilter = {
    every?: Detail_pembelianWhereInput
    some?: Detail_pembelianWhereInput
    none?: Detail_pembelianWhereInput
  }

  export type Detail_pembelianOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KursiOrderByRelevanceInput = {
    fields: KursiOrderByRelevanceFieldEnum | KursiOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type KursiCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nomor?: SortOrder
    gerbongId?: SortOrder
  }

  export type KursiAvgOrderByAggregateInput = {
    id?: SortOrder
    gerbongId?: SortOrder
  }

  export type KursiMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nomor?: SortOrder
    gerbongId?: SortOrder
  }

  export type KursiMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nomor?: SortOrder
    gerbongId?: SortOrder
  }

  export type KursiSumOrderByAggregateInput = {
    id?: SortOrder
    gerbongId?: SortOrder
  }

  export type JadwalOrderByRelevanceInput = {
    fields: JadwalOrderByRelevanceFieldEnum | JadwalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type JadwalCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    asal_keberangkatan?: SortOrder
    tujuan_keberangkatan?: SortOrder
    tanggal_keberangkatan?: SortOrder
    tanggal_kedatangan?: SortOrder
    harga?: SortOrder
    keretaId?: SortOrder
  }

  export type JadwalAvgOrderByAggregateInput = {
    id?: SortOrder
    harga?: SortOrder
    keretaId?: SortOrder
  }

  export type JadwalMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    asal_keberangkatan?: SortOrder
    tujuan_keberangkatan?: SortOrder
    tanggal_keberangkatan?: SortOrder
    tanggal_kedatangan?: SortOrder
    harga?: SortOrder
    keretaId?: SortOrder
  }

  export type JadwalMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    asal_keberangkatan?: SortOrder
    tujuan_keberangkatan?: SortOrder
    tanggal_keberangkatan?: SortOrder
    tanggal_kedatangan?: SortOrder
    harga?: SortOrder
    keretaId?: SortOrder
  }

  export type JadwalSumOrderByAggregateInput = {
    id?: SortOrder
    harga?: SortOrder
    keretaId?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type JadwalScalarRelationFilter = {
    is?: JadwalWhereInput
    isNot?: JadwalWhereInput
  }

  export type Pembelian_tiketCountOrderByAggregateInput = {
    id?: SortOrder
    tanggal_pembelian?: SortOrder
    userId?: SortOrder
    jadwalId?: SortOrder
  }

  export type Pembelian_tiketAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jadwalId?: SortOrder
  }

  export type Pembelian_tiketMaxOrderByAggregateInput = {
    id?: SortOrder
    tanggal_pembelian?: SortOrder
    userId?: SortOrder
    jadwalId?: SortOrder
  }

  export type Pembelian_tiketMinOrderByAggregateInput = {
    id?: SortOrder
    tanggal_pembelian?: SortOrder
    userId?: SortOrder
    jadwalId?: SortOrder
  }

  export type Pembelian_tiketSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jadwalId?: SortOrder
  }

  export type Pembelian_tiketScalarRelationFilter = {
    is?: Pembelian_tiketWhereInput
    isNot?: Pembelian_tiketWhereInput
  }

  export type KursiScalarRelationFilter = {
    is?: KursiWhereInput
    isNot?: KursiWhereInput
  }

  export type Detail_pembelianOrderByRelevanceInput = {
    fields: Detail_pembelianOrderByRelevanceFieldEnum | Detail_pembelianOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Detail_pembelianCountOrderByAggregateInput = {
    id?: SortOrder
    NIK?: SortOrder
    nama_penumpang?: SortOrder
    id_pembelian_tiket?: SortOrder
    id_kursi?: SortOrder
  }

  export type Detail_pembelianAvgOrderByAggregateInput = {
    id?: SortOrder
    id_pembelian_tiket?: SortOrder
    id_kursi?: SortOrder
  }

  export type Detail_pembelianMaxOrderByAggregateInput = {
    id?: SortOrder
    NIK?: SortOrder
    nama_penumpang?: SortOrder
    id_pembelian_tiket?: SortOrder
    id_kursi?: SortOrder
  }

  export type Detail_pembelianMinOrderByAggregateInput = {
    id?: SortOrder
    NIK?: SortOrder
    nama_penumpang?: SortOrder
    id_pembelian_tiket?: SortOrder
    id_kursi?: SortOrder
  }

  export type Detail_pembelianSumOrderByAggregateInput = {
    id?: SortOrder
    id_pembelian_tiket?: SortOrder
    id_kursi?: SortOrder
  }

  export type Pembelian_tiketCreateNestedManyWithoutUserInput = {
    create?: XOR<Pembelian_tiketCreateWithoutUserInput, Pembelian_tiketUncheckedCreateWithoutUserInput> | Pembelian_tiketCreateWithoutUserInput[] | Pembelian_tiketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Pembelian_tiketCreateOrConnectWithoutUserInput | Pembelian_tiketCreateOrConnectWithoutUserInput[]
    createMany?: Pembelian_tiketCreateManyUserInputEnvelope
    connect?: Pembelian_tiketWhereUniqueInput | Pembelian_tiketWhereUniqueInput[]
  }

  export type Pembelian_tiketUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Pembelian_tiketCreateWithoutUserInput, Pembelian_tiketUncheckedCreateWithoutUserInput> | Pembelian_tiketCreateWithoutUserInput[] | Pembelian_tiketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Pembelian_tiketCreateOrConnectWithoutUserInput | Pembelian_tiketCreateOrConnectWithoutUserInput[]
    createMany?: Pembelian_tiketCreateManyUserInputEnvelope
    connect?: Pembelian_tiketWhereUniqueInput | Pembelian_tiketWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Pembelian_tiketUpdateManyWithoutUserNestedInput = {
    create?: XOR<Pembelian_tiketCreateWithoutUserInput, Pembelian_tiketUncheckedCreateWithoutUserInput> | Pembelian_tiketCreateWithoutUserInput[] | Pembelian_tiketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Pembelian_tiketCreateOrConnectWithoutUserInput | Pembelian_tiketCreateOrConnectWithoutUserInput[]
    upsert?: Pembelian_tiketUpsertWithWhereUniqueWithoutUserInput | Pembelian_tiketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Pembelian_tiketCreateManyUserInputEnvelope
    set?: Pembelian_tiketWhereUniqueInput | Pembelian_tiketWhereUniqueInput[]
    disconnect?: Pembelian_tiketWhereUniqueInput | Pembelian_tiketWhereUniqueInput[]
    delete?: Pembelian_tiketWhereUniqueInput | Pembelian_tiketWhereUniqueInput[]
    connect?: Pembelian_tiketWhereUniqueInput | Pembelian_tiketWhereUniqueInput[]
    update?: Pembelian_tiketUpdateWithWhereUniqueWithoutUserInput | Pembelian_tiketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Pembelian_tiketUpdateManyWithWhereWithoutUserInput | Pembelian_tiketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Pembelian_tiketScalarWhereInput | Pembelian_tiketScalarWhereInput[]
  }

  export type Pembelian_tiketUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Pembelian_tiketCreateWithoutUserInput, Pembelian_tiketUncheckedCreateWithoutUserInput> | Pembelian_tiketCreateWithoutUserInput[] | Pembelian_tiketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Pembelian_tiketCreateOrConnectWithoutUserInput | Pembelian_tiketCreateOrConnectWithoutUserInput[]
    upsert?: Pembelian_tiketUpsertWithWhereUniqueWithoutUserInput | Pembelian_tiketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Pembelian_tiketCreateManyUserInputEnvelope
    set?: Pembelian_tiketWhereUniqueInput | Pembelian_tiketWhereUniqueInput[]
    disconnect?: Pembelian_tiketWhereUniqueInput | Pembelian_tiketWhereUniqueInput[]
    delete?: Pembelian_tiketWhereUniqueInput | Pembelian_tiketWhereUniqueInput[]
    connect?: Pembelian_tiketWhereUniqueInput | Pembelian_tiketWhereUniqueInput[]
    update?: Pembelian_tiketUpdateWithWhereUniqueWithoutUserInput | Pembelian_tiketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Pembelian_tiketUpdateManyWithWhereWithoutUserInput | Pembelian_tiketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Pembelian_tiketScalarWhereInput | Pembelian_tiketScalarWhereInput[]
  }

  export type GerbongCreateNestedManyWithoutKeretaInput = {
    create?: XOR<GerbongCreateWithoutKeretaInput, GerbongUncheckedCreateWithoutKeretaInput> | GerbongCreateWithoutKeretaInput[] | GerbongUncheckedCreateWithoutKeretaInput[]
    connectOrCreate?: GerbongCreateOrConnectWithoutKeretaInput | GerbongCreateOrConnectWithoutKeretaInput[]
    createMany?: GerbongCreateManyKeretaInputEnvelope
    connect?: GerbongWhereUniqueInput | GerbongWhereUniqueInput[]
  }

  export type JadwalCreateNestedManyWithoutKeretaInput = {
    create?: XOR<JadwalCreateWithoutKeretaInput, JadwalUncheckedCreateWithoutKeretaInput> | JadwalCreateWithoutKeretaInput[] | JadwalUncheckedCreateWithoutKeretaInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutKeretaInput | JadwalCreateOrConnectWithoutKeretaInput[]
    createMany?: JadwalCreateManyKeretaInputEnvelope
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
  }

  export type GerbongUncheckedCreateNestedManyWithoutKeretaInput = {
    create?: XOR<GerbongCreateWithoutKeretaInput, GerbongUncheckedCreateWithoutKeretaInput> | GerbongCreateWithoutKeretaInput[] | GerbongUncheckedCreateWithoutKeretaInput[]
    connectOrCreate?: GerbongCreateOrConnectWithoutKeretaInput | GerbongCreateOrConnectWithoutKeretaInput[]
    createMany?: GerbongCreateManyKeretaInputEnvelope
    connect?: GerbongWhereUniqueInput | GerbongWhereUniqueInput[]
  }

  export type JadwalUncheckedCreateNestedManyWithoutKeretaInput = {
    create?: XOR<JadwalCreateWithoutKeretaInput, JadwalUncheckedCreateWithoutKeretaInput> | JadwalCreateWithoutKeretaInput[] | JadwalUncheckedCreateWithoutKeretaInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutKeretaInput | JadwalCreateOrConnectWithoutKeretaInput[]
    createMany?: JadwalCreateManyKeretaInputEnvelope
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
  }

  export type GerbongUpdateManyWithoutKeretaNestedInput = {
    create?: XOR<GerbongCreateWithoutKeretaInput, GerbongUncheckedCreateWithoutKeretaInput> | GerbongCreateWithoutKeretaInput[] | GerbongUncheckedCreateWithoutKeretaInput[]
    connectOrCreate?: GerbongCreateOrConnectWithoutKeretaInput | GerbongCreateOrConnectWithoutKeretaInput[]
    upsert?: GerbongUpsertWithWhereUniqueWithoutKeretaInput | GerbongUpsertWithWhereUniqueWithoutKeretaInput[]
    createMany?: GerbongCreateManyKeretaInputEnvelope
    set?: GerbongWhereUniqueInput | GerbongWhereUniqueInput[]
    disconnect?: GerbongWhereUniqueInput | GerbongWhereUniqueInput[]
    delete?: GerbongWhereUniqueInput | GerbongWhereUniqueInput[]
    connect?: GerbongWhereUniqueInput | GerbongWhereUniqueInput[]
    update?: GerbongUpdateWithWhereUniqueWithoutKeretaInput | GerbongUpdateWithWhereUniqueWithoutKeretaInput[]
    updateMany?: GerbongUpdateManyWithWhereWithoutKeretaInput | GerbongUpdateManyWithWhereWithoutKeretaInput[]
    deleteMany?: GerbongScalarWhereInput | GerbongScalarWhereInput[]
  }

  export type JadwalUpdateManyWithoutKeretaNestedInput = {
    create?: XOR<JadwalCreateWithoutKeretaInput, JadwalUncheckedCreateWithoutKeretaInput> | JadwalCreateWithoutKeretaInput[] | JadwalUncheckedCreateWithoutKeretaInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutKeretaInput | JadwalCreateOrConnectWithoutKeretaInput[]
    upsert?: JadwalUpsertWithWhereUniqueWithoutKeretaInput | JadwalUpsertWithWhereUniqueWithoutKeretaInput[]
    createMany?: JadwalCreateManyKeretaInputEnvelope
    set?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    disconnect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    delete?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    update?: JadwalUpdateWithWhereUniqueWithoutKeretaInput | JadwalUpdateWithWhereUniqueWithoutKeretaInput[]
    updateMany?: JadwalUpdateManyWithWhereWithoutKeretaInput | JadwalUpdateManyWithWhereWithoutKeretaInput[]
    deleteMany?: JadwalScalarWhereInput | JadwalScalarWhereInput[]
  }

  export type GerbongUncheckedUpdateManyWithoutKeretaNestedInput = {
    create?: XOR<GerbongCreateWithoutKeretaInput, GerbongUncheckedCreateWithoutKeretaInput> | GerbongCreateWithoutKeretaInput[] | GerbongUncheckedCreateWithoutKeretaInput[]
    connectOrCreate?: GerbongCreateOrConnectWithoutKeretaInput | GerbongCreateOrConnectWithoutKeretaInput[]
    upsert?: GerbongUpsertWithWhereUniqueWithoutKeretaInput | GerbongUpsertWithWhereUniqueWithoutKeretaInput[]
    createMany?: GerbongCreateManyKeretaInputEnvelope
    set?: GerbongWhereUniqueInput | GerbongWhereUniqueInput[]
    disconnect?: GerbongWhereUniqueInput | GerbongWhereUniqueInput[]
    delete?: GerbongWhereUniqueInput | GerbongWhereUniqueInput[]
    connect?: GerbongWhereUniqueInput | GerbongWhereUniqueInput[]
    update?: GerbongUpdateWithWhereUniqueWithoutKeretaInput | GerbongUpdateWithWhereUniqueWithoutKeretaInput[]
    updateMany?: GerbongUpdateManyWithWhereWithoutKeretaInput | GerbongUpdateManyWithWhereWithoutKeretaInput[]
    deleteMany?: GerbongScalarWhereInput | GerbongScalarWhereInput[]
  }

  export type JadwalUncheckedUpdateManyWithoutKeretaNestedInput = {
    create?: XOR<JadwalCreateWithoutKeretaInput, JadwalUncheckedCreateWithoutKeretaInput> | JadwalCreateWithoutKeretaInput[] | JadwalUncheckedCreateWithoutKeretaInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutKeretaInput | JadwalCreateOrConnectWithoutKeretaInput[]
    upsert?: JadwalUpsertWithWhereUniqueWithoutKeretaInput | JadwalUpsertWithWhereUniqueWithoutKeretaInput[]
    createMany?: JadwalCreateManyKeretaInputEnvelope
    set?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    disconnect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    delete?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    update?: JadwalUpdateWithWhereUniqueWithoutKeretaInput | JadwalUpdateWithWhereUniqueWithoutKeretaInput[]
    updateMany?: JadwalUpdateManyWithWhereWithoutKeretaInput | JadwalUpdateManyWithWhereWithoutKeretaInput[]
    deleteMany?: JadwalScalarWhereInput | JadwalScalarWhereInput[]
  }

  export type KeretaCreateNestedOneWithoutGerbongInput = {
    create?: XOR<KeretaCreateWithoutGerbongInput, KeretaUncheckedCreateWithoutGerbongInput>
    connectOrCreate?: KeretaCreateOrConnectWithoutGerbongInput
    connect?: KeretaWhereUniqueInput
  }

  export type KursiCreateNestedManyWithoutGerbongInput = {
    create?: XOR<KursiCreateWithoutGerbongInput, KursiUncheckedCreateWithoutGerbongInput> | KursiCreateWithoutGerbongInput[] | KursiUncheckedCreateWithoutGerbongInput[]
    connectOrCreate?: KursiCreateOrConnectWithoutGerbongInput | KursiCreateOrConnectWithoutGerbongInput[]
    createMany?: KursiCreateManyGerbongInputEnvelope
    connect?: KursiWhereUniqueInput | KursiWhereUniqueInput[]
  }

  export type KursiUncheckedCreateNestedManyWithoutGerbongInput = {
    create?: XOR<KursiCreateWithoutGerbongInput, KursiUncheckedCreateWithoutGerbongInput> | KursiCreateWithoutGerbongInput[] | KursiUncheckedCreateWithoutGerbongInput[]
    connectOrCreate?: KursiCreateOrConnectWithoutGerbongInput | KursiCreateOrConnectWithoutGerbongInput[]
    createMany?: KursiCreateManyGerbongInputEnvelope
    connect?: KursiWhereUniqueInput | KursiWhereUniqueInput[]
  }

  export type KeretaUpdateOneRequiredWithoutGerbongNestedInput = {
    create?: XOR<KeretaCreateWithoutGerbongInput, KeretaUncheckedCreateWithoutGerbongInput>
    connectOrCreate?: KeretaCreateOrConnectWithoutGerbongInput
    upsert?: KeretaUpsertWithoutGerbongInput
    connect?: KeretaWhereUniqueInput
    update?: XOR<XOR<KeretaUpdateToOneWithWhereWithoutGerbongInput, KeretaUpdateWithoutGerbongInput>, KeretaUncheckedUpdateWithoutGerbongInput>
  }

  export type KursiUpdateManyWithoutGerbongNestedInput = {
    create?: XOR<KursiCreateWithoutGerbongInput, KursiUncheckedCreateWithoutGerbongInput> | KursiCreateWithoutGerbongInput[] | KursiUncheckedCreateWithoutGerbongInput[]
    connectOrCreate?: KursiCreateOrConnectWithoutGerbongInput | KursiCreateOrConnectWithoutGerbongInput[]
    upsert?: KursiUpsertWithWhereUniqueWithoutGerbongInput | KursiUpsertWithWhereUniqueWithoutGerbongInput[]
    createMany?: KursiCreateManyGerbongInputEnvelope
    set?: KursiWhereUniqueInput | KursiWhereUniqueInput[]
    disconnect?: KursiWhereUniqueInput | KursiWhereUniqueInput[]
    delete?: KursiWhereUniqueInput | KursiWhereUniqueInput[]
    connect?: KursiWhereUniqueInput | KursiWhereUniqueInput[]
    update?: KursiUpdateWithWhereUniqueWithoutGerbongInput | KursiUpdateWithWhereUniqueWithoutGerbongInput[]
    updateMany?: KursiUpdateManyWithWhereWithoutGerbongInput | KursiUpdateManyWithWhereWithoutGerbongInput[]
    deleteMany?: KursiScalarWhereInput | KursiScalarWhereInput[]
  }

  export type KursiUncheckedUpdateManyWithoutGerbongNestedInput = {
    create?: XOR<KursiCreateWithoutGerbongInput, KursiUncheckedCreateWithoutGerbongInput> | KursiCreateWithoutGerbongInput[] | KursiUncheckedCreateWithoutGerbongInput[]
    connectOrCreate?: KursiCreateOrConnectWithoutGerbongInput | KursiCreateOrConnectWithoutGerbongInput[]
    upsert?: KursiUpsertWithWhereUniqueWithoutGerbongInput | KursiUpsertWithWhereUniqueWithoutGerbongInput[]
    createMany?: KursiCreateManyGerbongInputEnvelope
    set?: KursiWhereUniqueInput | KursiWhereUniqueInput[]
    disconnect?: KursiWhereUniqueInput | KursiWhereUniqueInput[]
    delete?: KursiWhereUniqueInput | KursiWhereUniqueInput[]
    connect?: KursiWhereUniqueInput | KursiWhereUniqueInput[]
    update?: KursiUpdateWithWhereUniqueWithoutGerbongInput | KursiUpdateWithWhereUniqueWithoutGerbongInput[]
    updateMany?: KursiUpdateManyWithWhereWithoutGerbongInput | KursiUpdateManyWithWhereWithoutGerbongInput[]
    deleteMany?: KursiScalarWhereInput | KursiScalarWhereInput[]
  }

  export type GerbongCreateNestedOneWithoutKursiInput = {
    create?: XOR<GerbongCreateWithoutKursiInput, GerbongUncheckedCreateWithoutKursiInput>
    connectOrCreate?: GerbongCreateOrConnectWithoutKursiInput
    connect?: GerbongWhereUniqueInput
  }

  export type Detail_pembelianCreateNestedManyWithoutKursiInput = {
    create?: XOR<Detail_pembelianCreateWithoutKursiInput, Detail_pembelianUncheckedCreateWithoutKursiInput> | Detail_pembelianCreateWithoutKursiInput[] | Detail_pembelianUncheckedCreateWithoutKursiInput[]
    connectOrCreate?: Detail_pembelianCreateOrConnectWithoutKursiInput | Detail_pembelianCreateOrConnectWithoutKursiInput[]
    createMany?: Detail_pembelianCreateManyKursiInputEnvelope
    connect?: Detail_pembelianWhereUniqueInput | Detail_pembelianWhereUniqueInput[]
  }

  export type Detail_pembelianUncheckedCreateNestedManyWithoutKursiInput = {
    create?: XOR<Detail_pembelianCreateWithoutKursiInput, Detail_pembelianUncheckedCreateWithoutKursiInput> | Detail_pembelianCreateWithoutKursiInput[] | Detail_pembelianUncheckedCreateWithoutKursiInput[]
    connectOrCreate?: Detail_pembelianCreateOrConnectWithoutKursiInput | Detail_pembelianCreateOrConnectWithoutKursiInput[]
    createMany?: Detail_pembelianCreateManyKursiInputEnvelope
    connect?: Detail_pembelianWhereUniqueInput | Detail_pembelianWhereUniqueInput[]
  }

  export type GerbongUpdateOneRequiredWithoutKursiNestedInput = {
    create?: XOR<GerbongCreateWithoutKursiInput, GerbongUncheckedCreateWithoutKursiInput>
    connectOrCreate?: GerbongCreateOrConnectWithoutKursiInput
    upsert?: GerbongUpsertWithoutKursiInput
    connect?: GerbongWhereUniqueInput
    update?: XOR<XOR<GerbongUpdateToOneWithWhereWithoutKursiInput, GerbongUpdateWithoutKursiInput>, GerbongUncheckedUpdateWithoutKursiInput>
  }

  export type Detail_pembelianUpdateManyWithoutKursiNestedInput = {
    create?: XOR<Detail_pembelianCreateWithoutKursiInput, Detail_pembelianUncheckedCreateWithoutKursiInput> | Detail_pembelianCreateWithoutKursiInput[] | Detail_pembelianUncheckedCreateWithoutKursiInput[]
    connectOrCreate?: Detail_pembelianCreateOrConnectWithoutKursiInput | Detail_pembelianCreateOrConnectWithoutKursiInput[]
    upsert?: Detail_pembelianUpsertWithWhereUniqueWithoutKursiInput | Detail_pembelianUpsertWithWhereUniqueWithoutKursiInput[]
    createMany?: Detail_pembelianCreateManyKursiInputEnvelope
    set?: Detail_pembelianWhereUniqueInput | Detail_pembelianWhereUniqueInput[]
    disconnect?: Detail_pembelianWhereUniqueInput | Detail_pembelianWhereUniqueInput[]
    delete?: Detail_pembelianWhereUniqueInput | Detail_pembelianWhereUniqueInput[]
    connect?: Detail_pembelianWhereUniqueInput | Detail_pembelianWhereUniqueInput[]
    update?: Detail_pembelianUpdateWithWhereUniqueWithoutKursiInput | Detail_pembelianUpdateWithWhereUniqueWithoutKursiInput[]
    updateMany?: Detail_pembelianUpdateManyWithWhereWithoutKursiInput | Detail_pembelianUpdateManyWithWhereWithoutKursiInput[]
    deleteMany?: Detail_pembelianScalarWhereInput | Detail_pembelianScalarWhereInput[]
  }

  export type Detail_pembelianUncheckedUpdateManyWithoutKursiNestedInput = {
    create?: XOR<Detail_pembelianCreateWithoutKursiInput, Detail_pembelianUncheckedCreateWithoutKursiInput> | Detail_pembelianCreateWithoutKursiInput[] | Detail_pembelianUncheckedCreateWithoutKursiInput[]
    connectOrCreate?: Detail_pembelianCreateOrConnectWithoutKursiInput | Detail_pembelianCreateOrConnectWithoutKursiInput[]
    upsert?: Detail_pembelianUpsertWithWhereUniqueWithoutKursiInput | Detail_pembelianUpsertWithWhereUniqueWithoutKursiInput[]
    createMany?: Detail_pembelianCreateManyKursiInputEnvelope
    set?: Detail_pembelianWhereUniqueInput | Detail_pembelianWhereUniqueInput[]
    disconnect?: Detail_pembelianWhereUniqueInput | Detail_pembelianWhereUniqueInput[]
    delete?: Detail_pembelianWhereUniqueInput | Detail_pembelianWhereUniqueInput[]
    connect?: Detail_pembelianWhereUniqueInput | Detail_pembelianWhereUniqueInput[]
    update?: Detail_pembelianUpdateWithWhereUniqueWithoutKursiInput | Detail_pembelianUpdateWithWhereUniqueWithoutKursiInput[]
    updateMany?: Detail_pembelianUpdateManyWithWhereWithoutKursiInput | Detail_pembelianUpdateManyWithWhereWithoutKursiInput[]
    deleteMany?: Detail_pembelianScalarWhereInput | Detail_pembelianScalarWhereInput[]
  }

  export type KeretaCreateNestedOneWithoutJadwalInput = {
    create?: XOR<KeretaCreateWithoutJadwalInput, KeretaUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: KeretaCreateOrConnectWithoutJadwalInput
    connect?: KeretaWhereUniqueInput
  }

  export type Pembelian_tiketCreateNestedManyWithoutJadwalInput = {
    create?: XOR<Pembelian_tiketCreateWithoutJadwalInput, Pembelian_tiketUncheckedCreateWithoutJadwalInput> | Pembelian_tiketCreateWithoutJadwalInput[] | Pembelian_tiketUncheckedCreateWithoutJadwalInput[]
    connectOrCreate?: Pembelian_tiketCreateOrConnectWithoutJadwalInput | Pembelian_tiketCreateOrConnectWithoutJadwalInput[]
    createMany?: Pembelian_tiketCreateManyJadwalInputEnvelope
    connect?: Pembelian_tiketWhereUniqueInput | Pembelian_tiketWhereUniqueInput[]
  }

  export type Pembelian_tiketUncheckedCreateNestedManyWithoutJadwalInput = {
    create?: XOR<Pembelian_tiketCreateWithoutJadwalInput, Pembelian_tiketUncheckedCreateWithoutJadwalInput> | Pembelian_tiketCreateWithoutJadwalInput[] | Pembelian_tiketUncheckedCreateWithoutJadwalInput[]
    connectOrCreate?: Pembelian_tiketCreateOrConnectWithoutJadwalInput | Pembelian_tiketCreateOrConnectWithoutJadwalInput[]
    createMany?: Pembelian_tiketCreateManyJadwalInputEnvelope
    connect?: Pembelian_tiketWhereUniqueInput | Pembelian_tiketWhereUniqueInput[]
  }

  export type KeretaUpdateOneRequiredWithoutJadwalNestedInput = {
    create?: XOR<KeretaCreateWithoutJadwalInput, KeretaUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: KeretaCreateOrConnectWithoutJadwalInput
    upsert?: KeretaUpsertWithoutJadwalInput
    connect?: KeretaWhereUniqueInput
    update?: XOR<XOR<KeretaUpdateToOneWithWhereWithoutJadwalInput, KeretaUpdateWithoutJadwalInput>, KeretaUncheckedUpdateWithoutJadwalInput>
  }

  export type Pembelian_tiketUpdateManyWithoutJadwalNestedInput = {
    create?: XOR<Pembelian_tiketCreateWithoutJadwalInput, Pembelian_tiketUncheckedCreateWithoutJadwalInput> | Pembelian_tiketCreateWithoutJadwalInput[] | Pembelian_tiketUncheckedCreateWithoutJadwalInput[]
    connectOrCreate?: Pembelian_tiketCreateOrConnectWithoutJadwalInput | Pembelian_tiketCreateOrConnectWithoutJadwalInput[]
    upsert?: Pembelian_tiketUpsertWithWhereUniqueWithoutJadwalInput | Pembelian_tiketUpsertWithWhereUniqueWithoutJadwalInput[]
    createMany?: Pembelian_tiketCreateManyJadwalInputEnvelope
    set?: Pembelian_tiketWhereUniqueInput | Pembelian_tiketWhereUniqueInput[]
    disconnect?: Pembelian_tiketWhereUniqueInput | Pembelian_tiketWhereUniqueInput[]
    delete?: Pembelian_tiketWhereUniqueInput | Pembelian_tiketWhereUniqueInput[]
    connect?: Pembelian_tiketWhereUniqueInput | Pembelian_tiketWhereUniqueInput[]
    update?: Pembelian_tiketUpdateWithWhereUniqueWithoutJadwalInput | Pembelian_tiketUpdateWithWhereUniqueWithoutJadwalInput[]
    updateMany?: Pembelian_tiketUpdateManyWithWhereWithoutJadwalInput | Pembelian_tiketUpdateManyWithWhereWithoutJadwalInput[]
    deleteMany?: Pembelian_tiketScalarWhereInput | Pembelian_tiketScalarWhereInput[]
  }

  export type Pembelian_tiketUncheckedUpdateManyWithoutJadwalNestedInput = {
    create?: XOR<Pembelian_tiketCreateWithoutJadwalInput, Pembelian_tiketUncheckedCreateWithoutJadwalInput> | Pembelian_tiketCreateWithoutJadwalInput[] | Pembelian_tiketUncheckedCreateWithoutJadwalInput[]
    connectOrCreate?: Pembelian_tiketCreateOrConnectWithoutJadwalInput | Pembelian_tiketCreateOrConnectWithoutJadwalInput[]
    upsert?: Pembelian_tiketUpsertWithWhereUniqueWithoutJadwalInput | Pembelian_tiketUpsertWithWhereUniqueWithoutJadwalInput[]
    createMany?: Pembelian_tiketCreateManyJadwalInputEnvelope
    set?: Pembelian_tiketWhereUniqueInput | Pembelian_tiketWhereUniqueInput[]
    disconnect?: Pembelian_tiketWhereUniqueInput | Pembelian_tiketWhereUniqueInput[]
    delete?: Pembelian_tiketWhereUniqueInput | Pembelian_tiketWhereUniqueInput[]
    connect?: Pembelian_tiketWhereUniqueInput | Pembelian_tiketWhereUniqueInput[]
    update?: Pembelian_tiketUpdateWithWhereUniqueWithoutJadwalInput | Pembelian_tiketUpdateWithWhereUniqueWithoutJadwalInput[]
    updateMany?: Pembelian_tiketUpdateManyWithWhereWithoutJadwalInput | Pembelian_tiketUpdateManyWithWhereWithoutJadwalInput[]
    deleteMany?: Pembelian_tiketScalarWhereInput | Pembelian_tiketScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPembelianTiketsInput = {
    create?: XOR<UserCreateWithoutPembelianTiketsInput, UserUncheckedCreateWithoutPembelianTiketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPembelianTiketsInput
    connect?: UserWhereUniqueInput
  }

  export type JadwalCreateNestedOneWithoutPembelianTiketsInput = {
    create?: XOR<JadwalCreateWithoutPembelianTiketsInput, JadwalUncheckedCreateWithoutPembelianTiketsInput>
    connectOrCreate?: JadwalCreateOrConnectWithoutPembelianTiketsInput
    connect?: JadwalWhereUniqueInput
  }

  export type Detail_pembelianCreateNestedManyWithoutPembelianInput = {
    create?: XOR<Detail_pembelianCreateWithoutPembelianInput, Detail_pembelianUncheckedCreateWithoutPembelianInput> | Detail_pembelianCreateWithoutPembelianInput[] | Detail_pembelianUncheckedCreateWithoutPembelianInput[]
    connectOrCreate?: Detail_pembelianCreateOrConnectWithoutPembelianInput | Detail_pembelianCreateOrConnectWithoutPembelianInput[]
    createMany?: Detail_pembelianCreateManyPembelianInputEnvelope
    connect?: Detail_pembelianWhereUniqueInput | Detail_pembelianWhereUniqueInput[]
  }

  export type Detail_pembelianUncheckedCreateNestedManyWithoutPembelianInput = {
    create?: XOR<Detail_pembelianCreateWithoutPembelianInput, Detail_pembelianUncheckedCreateWithoutPembelianInput> | Detail_pembelianCreateWithoutPembelianInput[] | Detail_pembelianUncheckedCreateWithoutPembelianInput[]
    connectOrCreate?: Detail_pembelianCreateOrConnectWithoutPembelianInput | Detail_pembelianCreateOrConnectWithoutPembelianInput[]
    createMany?: Detail_pembelianCreateManyPembelianInputEnvelope
    connect?: Detail_pembelianWhereUniqueInput | Detail_pembelianWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPembelianTiketsNestedInput = {
    create?: XOR<UserCreateWithoutPembelianTiketsInput, UserUncheckedCreateWithoutPembelianTiketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPembelianTiketsInput
    upsert?: UserUpsertWithoutPembelianTiketsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPembelianTiketsInput, UserUpdateWithoutPembelianTiketsInput>, UserUncheckedUpdateWithoutPembelianTiketsInput>
  }

  export type JadwalUpdateOneRequiredWithoutPembelianTiketsNestedInput = {
    create?: XOR<JadwalCreateWithoutPembelianTiketsInput, JadwalUncheckedCreateWithoutPembelianTiketsInput>
    connectOrCreate?: JadwalCreateOrConnectWithoutPembelianTiketsInput
    upsert?: JadwalUpsertWithoutPembelianTiketsInput
    connect?: JadwalWhereUniqueInput
    update?: XOR<XOR<JadwalUpdateToOneWithWhereWithoutPembelianTiketsInput, JadwalUpdateWithoutPembelianTiketsInput>, JadwalUncheckedUpdateWithoutPembelianTiketsInput>
  }

  export type Detail_pembelianUpdateManyWithoutPembelianNestedInput = {
    create?: XOR<Detail_pembelianCreateWithoutPembelianInput, Detail_pembelianUncheckedCreateWithoutPembelianInput> | Detail_pembelianCreateWithoutPembelianInput[] | Detail_pembelianUncheckedCreateWithoutPembelianInput[]
    connectOrCreate?: Detail_pembelianCreateOrConnectWithoutPembelianInput | Detail_pembelianCreateOrConnectWithoutPembelianInput[]
    upsert?: Detail_pembelianUpsertWithWhereUniqueWithoutPembelianInput | Detail_pembelianUpsertWithWhereUniqueWithoutPembelianInput[]
    createMany?: Detail_pembelianCreateManyPembelianInputEnvelope
    set?: Detail_pembelianWhereUniqueInput | Detail_pembelianWhereUniqueInput[]
    disconnect?: Detail_pembelianWhereUniqueInput | Detail_pembelianWhereUniqueInput[]
    delete?: Detail_pembelianWhereUniqueInput | Detail_pembelianWhereUniqueInput[]
    connect?: Detail_pembelianWhereUniqueInput | Detail_pembelianWhereUniqueInput[]
    update?: Detail_pembelianUpdateWithWhereUniqueWithoutPembelianInput | Detail_pembelianUpdateWithWhereUniqueWithoutPembelianInput[]
    updateMany?: Detail_pembelianUpdateManyWithWhereWithoutPembelianInput | Detail_pembelianUpdateManyWithWhereWithoutPembelianInput[]
    deleteMany?: Detail_pembelianScalarWhereInput | Detail_pembelianScalarWhereInput[]
  }

  export type Detail_pembelianUncheckedUpdateManyWithoutPembelianNestedInput = {
    create?: XOR<Detail_pembelianCreateWithoutPembelianInput, Detail_pembelianUncheckedCreateWithoutPembelianInput> | Detail_pembelianCreateWithoutPembelianInput[] | Detail_pembelianUncheckedCreateWithoutPembelianInput[]
    connectOrCreate?: Detail_pembelianCreateOrConnectWithoutPembelianInput | Detail_pembelianCreateOrConnectWithoutPembelianInput[]
    upsert?: Detail_pembelianUpsertWithWhereUniqueWithoutPembelianInput | Detail_pembelianUpsertWithWhereUniqueWithoutPembelianInput[]
    createMany?: Detail_pembelianCreateManyPembelianInputEnvelope
    set?: Detail_pembelianWhereUniqueInput | Detail_pembelianWhereUniqueInput[]
    disconnect?: Detail_pembelianWhereUniqueInput | Detail_pembelianWhereUniqueInput[]
    delete?: Detail_pembelianWhereUniqueInput | Detail_pembelianWhereUniqueInput[]
    connect?: Detail_pembelianWhereUniqueInput | Detail_pembelianWhereUniqueInput[]
    update?: Detail_pembelianUpdateWithWhereUniqueWithoutPembelianInput | Detail_pembelianUpdateWithWhereUniqueWithoutPembelianInput[]
    updateMany?: Detail_pembelianUpdateManyWithWhereWithoutPembelianInput | Detail_pembelianUpdateManyWithWhereWithoutPembelianInput[]
    deleteMany?: Detail_pembelianScalarWhereInput | Detail_pembelianScalarWhereInput[]
  }

  export type Pembelian_tiketCreateNestedOneWithoutDetailInput = {
    create?: XOR<Pembelian_tiketCreateWithoutDetailInput, Pembelian_tiketUncheckedCreateWithoutDetailInput>
    connectOrCreate?: Pembelian_tiketCreateOrConnectWithoutDetailInput
    connect?: Pembelian_tiketWhereUniqueInput
  }

  export type KursiCreateNestedOneWithoutDetailPembeliansInput = {
    create?: XOR<KursiCreateWithoutDetailPembeliansInput, KursiUncheckedCreateWithoutDetailPembeliansInput>
    connectOrCreate?: KursiCreateOrConnectWithoutDetailPembeliansInput
    connect?: KursiWhereUniqueInput
  }

  export type Pembelian_tiketUpdateOneRequiredWithoutDetailNestedInput = {
    create?: XOR<Pembelian_tiketCreateWithoutDetailInput, Pembelian_tiketUncheckedCreateWithoutDetailInput>
    connectOrCreate?: Pembelian_tiketCreateOrConnectWithoutDetailInput
    upsert?: Pembelian_tiketUpsertWithoutDetailInput
    connect?: Pembelian_tiketWhereUniqueInput
    update?: XOR<XOR<Pembelian_tiketUpdateToOneWithWhereWithoutDetailInput, Pembelian_tiketUpdateWithoutDetailInput>, Pembelian_tiketUncheckedUpdateWithoutDetailInput>
  }

  export type KursiUpdateOneRequiredWithoutDetailPembeliansNestedInput = {
    create?: XOR<KursiCreateWithoutDetailPembeliansInput, KursiUncheckedCreateWithoutDetailPembeliansInput>
    connectOrCreate?: KursiCreateOrConnectWithoutDetailPembeliansInput
    upsert?: KursiUpsertWithoutDetailPembeliansInput
    connect?: KursiWhereUniqueInput
    update?: XOR<XOR<KursiUpdateToOneWithWhereWithoutDetailPembeliansInput, KursiUpdateWithoutDetailPembeliansInput>, KursiUncheckedUpdateWithoutDetailPembeliansInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Pembelian_tiketCreateWithoutUserInput = {
    tanggal_pembelian?: Date | string
    jadwal: JadwalCreateNestedOneWithoutPembelianTiketsInput
    detail?: Detail_pembelianCreateNestedManyWithoutPembelianInput
  }

  export type Pembelian_tiketUncheckedCreateWithoutUserInput = {
    id?: number
    tanggal_pembelian?: Date | string
    jadwalId: number
    detail?: Detail_pembelianUncheckedCreateNestedManyWithoutPembelianInput
  }

  export type Pembelian_tiketCreateOrConnectWithoutUserInput = {
    where: Pembelian_tiketWhereUniqueInput
    create: XOR<Pembelian_tiketCreateWithoutUserInput, Pembelian_tiketUncheckedCreateWithoutUserInput>
  }

  export type Pembelian_tiketCreateManyUserInputEnvelope = {
    data: Pembelian_tiketCreateManyUserInput | Pembelian_tiketCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Pembelian_tiketUpsertWithWhereUniqueWithoutUserInput = {
    where: Pembelian_tiketWhereUniqueInput
    update: XOR<Pembelian_tiketUpdateWithoutUserInput, Pembelian_tiketUncheckedUpdateWithoutUserInput>
    create: XOR<Pembelian_tiketCreateWithoutUserInput, Pembelian_tiketUncheckedCreateWithoutUserInput>
  }

  export type Pembelian_tiketUpdateWithWhereUniqueWithoutUserInput = {
    where: Pembelian_tiketWhereUniqueInput
    data: XOR<Pembelian_tiketUpdateWithoutUserInput, Pembelian_tiketUncheckedUpdateWithoutUserInput>
  }

  export type Pembelian_tiketUpdateManyWithWhereWithoutUserInput = {
    where: Pembelian_tiketScalarWhereInput
    data: XOR<Pembelian_tiketUpdateManyMutationInput, Pembelian_tiketUncheckedUpdateManyWithoutUserInput>
  }

  export type Pembelian_tiketScalarWhereInput = {
    AND?: Pembelian_tiketScalarWhereInput | Pembelian_tiketScalarWhereInput[]
    OR?: Pembelian_tiketScalarWhereInput[]
    NOT?: Pembelian_tiketScalarWhereInput | Pembelian_tiketScalarWhereInput[]
    id?: IntFilter<"Pembelian_tiket"> | number
    tanggal_pembelian?: DateTimeFilter<"Pembelian_tiket"> | Date | string
    userId?: IntFilter<"Pembelian_tiket"> | number
    jadwalId?: IntFilter<"Pembelian_tiket"> | number
  }

  export type GerbongCreateWithoutKeretaInput = {
    uuid?: string
    kouta: number
    kursi?: KursiCreateNestedManyWithoutGerbongInput
  }

  export type GerbongUncheckedCreateWithoutKeretaInput = {
    id?: number
    uuid?: string
    kouta: number
    kursi?: KursiUncheckedCreateNestedManyWithoutGerbongInput
  }

  export type GerbongCreateOrConnectWithoutKeretaInput = {
    where: GerbongWhereUniqueInput
    create: XOR<GerbongCreateWithoutKeretaInput, GerbongUncheckedCreateWithoutKeretaInput>
  }

  export type GerbongCreateManyKeretaInputEnvelope = {
    data: GerbongCreateManyKeretaInput | GerbongCreateManyKeretaInput[]
    skipDuplicates?: boolean
  }

  export type JadwalCreateWithoutKeretaInput = {
    uuid?: string
    asal_keberangkatan: string
    tujuan_keberangkatan: string
    tanggal_keberangkatan: Date | string
    tanggal_kedatangan: Date | string
    harga: number
    pembelianTikets?: Pembelian_tiketCreateNestedManyWithoutJadwalInput
  }

  export type JadwalUncheckedCreateWithoutKeretaInput = {
    id?: number
    uuid?: string
    asal_keberangkatan: string
    tujuan_keberangkatan: string
    tanggal_keberangkatan: Date | string
    tanggal_kedatangan: Date | string
    harga: number
    pembelianTikets?: Pembelian_tiketUncheckedCreateNestedManyWithoutJadwalInput
  }

  export type JadwalCreateOrConnectWithoutKeretaInput = {
    where: JadwalWhereUniqueInput
    create: XOR<JadwalCreateWithoutKeretaInput, JadwalUncheckedCreateWithoutKeretaInput>
  }

  export type JadwalCreateManyKeretaInputEnvelope = {
    data: JadwalCreateManyKeretaInput | JadwalCreateManyKeretaInput[]
    skipDuplicates?: boolean
  }

  export type GerbongUpsertWithWhereUniqueWithoutKeretaInput = {
    where: GerbongWhereUniqueInput
    update: XOR<GerbongUpdateWithoutKeretaInput, GerbongUncheckedUpdateWithoutKeretaInput>
    create: XOR<GerbongCreateWithoutKeretaInput, GerbongUncheckedCreateWithoutKeretaInput>
  }

  export type GerbongUpdateWithWhereUniqueWithoutKeretaInput = {
    where: GerbongWhereUniqueInput
    data: XOR<GerbongUpdateWithoutKeretaInput, GerbongUncheckedUpdateWithoutKeretaInput>
  }

  export type GerbongUpdateManyWithWhereWithoutKeretaInput = {
    where: GerbongScalarWhereInput
    data: XOR<GerbongUpdateManyMutationInput, GerbongUncheckedUpdateManyWithoutKeretaInput>
  }

  export type GerbongScalarWhereInput = {
    AND?: GerbongScalarWhereInput | GerbongScalarWhereInput[]
    OR?: GerbongScalarWhereInput[]
    NOT?: GerbongScalarWhereInput | GerbongScalarWhereInput[]
    id?: IntFilter<"Gerbong"> | number
    uuid?: StringFilter<"Gerbong"> | string
    kouta?: IntFilter<"Gerbong"> | number
    keretaId?: IntFilter<"Gerbong"> | number
  }

  export type JadwalUpsertWithWhereUniqueWithoutKeretaInput = {
    where: JadwalWhereUniqueInput
    update: XOR<JadwalUpdateWithoutKeretaInput, JadwalUncheckedUpdateWithoutKeretaInput>
    create: XOR<JadwalCreateWithoutKeretaInput, JadwalUncheckedCreateWithoutKeretaInput>
  }

  export type JadwalUpdateWithWhereUniqueWithoutKeretaInput = {
    where: JadwalWhereUniqueInput
    data: XOR<JadwalUpdateWithoutKeretaInput, JadwalUncheckedUpdateWithoutKeretaInput>
  }

  export type JadwalUpdateManyWithWhereWithoutKeretaInput = {
    where: JadwalScalarWhereInput
    data: XOR<JadwalUpdateManyMutationInput, JadwalUncheckedUpdateManyWithoutKeretaInput>
  }

  export type JadwalScalarWhereInput = {
    AND?: JadwalScalarWhereInput | JadwalScalarWhereInput[]
    OR?: JadwalScalarWhereInput[]
    NOT?: JadwalScalarWhereInput | JadwalScalarWhereInput[]
    id?: IntFilter<"Jadwal"> | number
    uuid?: StringFilter<"Jadwal"> | string
    asal_keberangkatan?: StringFilter<"Jadwal"> | string
    tujuan_keberangkatan?: StringFilter<"Jadwal"> | string
    tanggal_keberangkatan?: DateTimeFilter<"Jadwal"> | Date | string
    tanggal_kedatangan?: DateTimeFilter<"Jadwal"> | Date | string
    harga?: IntFilter<"Jadwal"> | number
    keretaId?: IntFilter<"Jadwal"> | number
  }

  export type KeretaCreateWithoutGerbongInput = {
    uuid?: string
    name: string
    description: string
    kelas: string
    createdAt?: Date | string
    updatedAt?: Date | string
    jadwal?: JadwalCreateNestedManyWithoutKeretaInput
  }

  export type KeretaUncheckedCreateWithoutGerbongInput = {
    id?: number
    uuid?: string
    name: string
    description: string
    kelas: string
    createdAt?: Date | string
    updatedAt?: Date | string
    jadwal?: JadwalUncheckedCreateNestedManyWithoutKeretaInput
  }

  export type KeretaCreateOrConnectWithoutGerbongInput = {
    where: KeretaWhereUniqueInput
    create: XOR<KeretaCreateWithoutGerbongInput, KeretaUncheckedCreateWithoutGerbongInput>
  }

  export type KursiCreateWithoutGerbongInput = {
    uuid?: string
    nomor: string
    detailPembelians?: Detail_pembelianCreateNestedManyWithoutKursiInput
  }

  export type KursiUncheckedCreateWithoutGerbongInput = {
    id?: number
    uuid?: string
    nomor: string
    detailPembelians?: Detail_pembelianUncheckedCreateNestedManyWithoutKursiInput
  }

  export type KursiCreateOrConnectWithoutGerbongInput = {
    where: KursiWhereUniqueInput
    create: XOR<KursiCreateWithoutGerbongInput, KursiUncheckedCreateWithoutGerbongInput>
  }

  export type KursiCreateManyGerbongInputEnvelope = {
    data: KursiCreateManyGerbongInput | KursiCreateManyGerbongInput[]
    skipDuplicates?: boolean
  }

  export type KeretaUpsertWithoutGerbongInput = {
    update: XOR<KeretaUpdateWithoutGerbongInput, KeretaUncheckedUpdateWithoutGerbongInput>
    create: XOR<KeretaCreateWithoutGerbongInput, KeretaUncheckedCreateWithoutGerbongInput>
    where?: KeretaWhereInput
  }

  export type KeretaUpdateToOneWithWhereWithoutGerbongInput = {
    where?: KeretaWhereInput
    data: XOR<KeretaUpdateWithoutGerbongInput, KeretaUncheckedUpdateWithoutGerbongInput>
  }

  export type KeretaUpdateWithoutGerbongInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jadwal?: JadwalUpdateManyWithoutKeretaNestedInput
  }

  export type KeretaUncheckedUpdateWithoutGerbongInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jadwal?: JadwalUncheckedUpdateManyWithoutKeretaNestedInput
  }

  export type KursiUpsertWithWhereUniqueWithoutGerbongInput = {
    where: KursiWhereUniqueInput
    update: XOR<KursiUpdateWithoutGerbongInput, KursiUncheckedUpdateWithoutGerbongInput>
    create: XOR<KursiCreateWithoutGerbongInput, KursiUncheckedCreateWithoutGerbongInput>
  }

  export type KursiUpdateWithWhereUniqueWithoutGerbongInput = {
    where: KursiWhereUniqueInput
    data: XOR<KursiUpdateWithoutGerbongInput, KursiUncheckedUpdateWithoutGerbongInput>
  }

  export type KursiUpdateManyWithWhereWithoutGerbongInput = {
    where: KursiScalarWhereInput
    data: XOR<KursiUpdateManyMutationInput, KursiUncheckedUpdateManyWithoutGerbongInput>
  }

  export type KursiScalarWhereInput = {
    AND?: KursiScalarWhereInput | KursiScalarWhereInput[]
    OR?: KursiScalarWhereInput[]
    NOT?: KursiScalarWhereInput | KursiScalarWhereInput[]
    id?: IntFilter<"Kursi"> | number
    uuid?: StringFilter<"Kursi"> | string
    nomor?: StringFilter<"Kursi"> | string
    gerbongId?: IntFilter<"Kursi"> | number
  }

  export type GerbongCreateWithoutKursiInput = {
    uuid?: string
    kouta: number
    kereta: KeretaCreateNestedOneWithoutGerbongInput
  }

  export type GerbongUncheckedCreateWithoutKursiInput = {
    id?: number
    uuid?: string
    kouta: number
    keretaId: number
  }

  export type GerbongCreateOrConnectWithoutKursiInput = {
    where: GerbongWhereUniqueInput
    create: XOR<GerbongCreateWithoutKursiInput, GerbongUncheckedCreateWithoutKursiInput>
  }

  export type Detail_pembelianCreateWithoutKursiInput = {
    NIK: string
    nama_penumpang: string
    pembelian: Pembelian_tiketCreateNestedOneWithoutDetailInput
  }

  export type Detail_pembelianUncheckedCreateWithoutKursiInput = {
    id?: number
    NIK: string
    nama_penumpang: string
    id_pembelian_tiket: number
  }

  export type Detail_pembelianCreateOrConnectWithoutKursiInput = {
    where: Detail_pembelianWhereUniqueInput
    create: XOR<Detail_pembelianCreateWithoutKursiInput, Detail_pembelianUncheckedCreateWithoutKursiInput>
  }

  export type Detail_pembelianCreateManyKursiInputEnvelope = {
    data: Detail_pembelianCreateManyKursiInput | Detail_pembelianCreateManyKursiInput[]
    skipDuplicates?: boolean
  }

  export type GerbongUpsertWithoutKursiInput = {
    update: XOR<GerbongUpdateWithoutKursiInput, GerbongUncheckedUpdateWithoutKursiInput>
    create: XOR<GerbongCreateWithoutKursiInput, GerbongUncheckedCreateWithoutKursiInput>
    where?: GerbongWhereInput
  }

  export type GerbongUpdateToOneWithWhereWithoutKursiInput = {
    where?: GerbongWhereInput
    data: XOR<GerbongUpdateWithoutKursiInput, GerbongUncheckedUpdateWithoutKursiInput>
  }

  export type GerbongUpdateWithoutKursiInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    kouta?: IntFieldUpdateOperationsInput | number
    kereta?: KeretaUpdateOneRequiredWithoutGerbongNestedInput
  }

  export type GerbongUncheckedUpdateWithoutKursiInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    kouta?: IntFieldUpdateOperationsInput | number
    keretaId?: IntFieldUpdateOperationsInput | number
  }

  export type Detail_pembelianUpsertWithWhereUniqueWithoutKursiInput = {
    where: Detail_pembelianWhereUniqueInput
    update: XOR<Detail_pembelianUpdateWithoutKursiInput, Detail_pembelianUncheckedUpdateWithoutKursiInput>
    create: XOR<Detail_pembelianCreateWithoutKursiInput, Detail_pembelianUncheckedCreateWithoutKursiInput>
  }

  export type Detail_pembelianUpdateWithWhereUniqueWithoutKursiInput = {
    where: Detail_pembelianWhereUniqueInput
    data: XOR<Detail_pembelianUpdateWithoutKursiInput, Detail_pembelianUncheckedUpdateWithoutKursiInput>
  }

  export type Detail_pembelianUpdateManyWithWhereWithoutKursiInput = {
    where: Detail_pembelianScalarWhereInput
    data: XOR<Detail_pembelianUpdateManyMutationInput, Detail_pembelianUncheckedUpdateManyWithoutKursiInput>
  }

  export type Detail_pembelianScalarWhereInput = {
    AND?: Detail_pembelianScalarWhereInput | Detail_pembelianScalarWhereInput[]
    OR?: Detail_pembelianScalarWhereInput[]
    NOT?: Detail_pembelianScalarWhereInput | Detail_pembelianScalarWhereInput[]
    id?: IntFilter<"Detail_pembelian"> | number
    NIK?: StringFilter<"Detail_pembelian"> | string
    nama_penumpang?: StringFilter<"Detail_pembelian"> | string
    id_pembelian_tiket?: IntFilter<"Detail_pembelian"> | number
    id_kursi?: IntFilter<"Detail_pembelian"> | number
  }

  export type KeretaCreateWithoutJadwalInput = {
    uuid?: string
    name: string
    description: string
    kelas: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gerbong?: GerbongCreateNestedManyWithoutKeretaInput
  }

  export type KeretaUncheckedCreateWithoutJadwalInput = {
    id?: number
    uuid?: string
    name: string
    description: string
    kelas: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gerbong?: GerbongUncheckedCreateNestedManyWithoutKeretaInput
  }

  export type KeretaCreateOrConnectWithoutJadwalInput = {
    where: KeretaWhereUniqueInput
    create: XOR<KeretaCreateWithoutJadwalInput, KeretaUncheckedCreateWithoutJadwalInput>
  }

  export type Pembelian_tiketCreateWithoutJadwalInput = {
    tanggal_pembelian?: Date | string
    user: UserCreateNestedOneWithoutPembelianTiketsInput
    detail?: Detail_pembelianCreateNestedManyWithoutPembelianInput
  }

  export type Pembelian_tiketUncheckedCreateWithoutJadwalInput = {
    id?: number
    tanggal_pembelian?: Date | string
    userId: number
    detail?: Detail_pembelianUncheckedCreateNestedManyWithoutPembelianInput
  }

  export type Pembelian_tiketCreateOrConnectWithoutJadwalInput = {
    where: Pembelian_tiketWhereUniqueInput
    create: XOR<Pembelian_tiketCreateWithoutJadwalInput, Pembelian_tiketUncheckedCreateWithoutJadwalInput>
  }

  export type Pembelian_tiketCreateManyJadwalInputEnvelope = {
    data: Pembelian_tiketCreateManyJadwalInput | Pembelian_tiketCreateManyJadwalInput[]
    skipDuplicates?: boolean
  }

  export type KeretaUpsertWithoutJadwalInput = {
    update: XOR<KeretaUpdateWithoutJadwalInput, KeretaUncheckedUpdateWithoutJadwalInput>
    create: XOR<KeretaCreateWithoutJadwalInput, KeretaUncheckedCreateWithoutJadwalInput>
    where?: KeretaWhereInput
  }

  export type KeretaUpdateToOneWithWhereWithoutJadwalInput = {
    where?: KeretaWhereInput
    data: XOR<KeretaUpdateWithoutJadwalInput, KeretaUncheckedUpdateWithoutJadwalInput>
  }

  export type KeretaUpdateWithoutJadwalInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gerbong?: GerbongUpdateManyWithoutKeretaNestedInput
  }

  export type KeretaUncheckedUpdateWithoutJadwalInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kelas?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gerbong?: GerbongUncheckedUpdateManyWithoutKeretaNestedInput
  }

  export type Pembelian_tiketUpsertWithWhereUniqueWithoutJadwalInput = {
    where: Pembelian_tiketWhereUniqueInput
    update: XOR<Pembelian_tiketUpdateWithoutJadwalInput, Pembelian_tiketUncheckedUpdateWithoutJadwalInput>
    create: XOR<Pembelian_tiketCreateWithoutJadwalInput, Pembelian_tiketUncheckedCreateWithoutJadwalInput>
  }

  export type Pembelian_tiketUpdateWithWhereUniqueWithoutJadwalInput = {
    where: Pembelian_tiketWhereUniqueInput
    data: XOR<Pembelian_tiketUpdateWithoutJadwalInput, Pembelian_tiketUncheckedUpdateWithoutJadwalInput>
  }

  export type Pembelian_tiketUpdateManyWithWhereWithoutJadwalInput = {
    where: Pembelian_tiketScalarWhereInput
    data: XOR<Pembelian_tiketUpdateManyMutationInput, Pembelian_tiketUncheckedUpdateManyWithoutJadwalInput>
  }

  export type UserCreateWithoutPembelianTiketsInput = {
    uuid?: string
    name: string
    email: string
    password: string
    phone: string
    address?: string
    nik: number
    grade?: string
    profile_picture?: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutPembelianTiketsInput = {
    id?: number
    uuid?: string
    name: string
    email: string
    password: string
    phone: string
    address?: string
    nik: number
    grade?: string
    profile_picture?: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutPembelianTiketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPembelianTiketsInput, UserUncheckedCreateWithoutPembelianTiketsInput>
  }

  export type JadwalCreateWithoutPembelianTiketsInput = {
    uuid?: string
    asal_keberangkatan: string
    tujuan_keberangkatan: string
    tanggal_keberangkatan: Date | string
    tanggal_kedatangan: Date | string
    harga: number
    kereta: KeretaCreateNestedOneWithoutJadwalInput
  }

  export type JadwalUncheckedCreateWithoutPembelianTiketsInput = {
    id?: number
    uuid?: string
    asal_keberangkatan: string
    tujuan_keberangkatan: string
    tanggal_keberangkatan: Date | string
    tanggal_kedatangan: Date | string
    harga: number
    keretaId: number
  }

  export type JadwalCreateOrConnectWithoutPembelianTiketsInput = {
    where: JadwalWhereUniqueInput
    create: XOR<JadwalCreateWithoutPembelianTiketsInput, JadwalUncheckedCreateWithoutPembelianTiketsInput>
  }

  export type Detail_pembelianCreateWithoutPembelianInput = {
    NIK: string
    nama_penumpang: string
    kursi: KursiCreateNestedOneWithoutDetailPembeliansInput
  }

  export type Detail_pembelianUncheckedCreateWithoutPembelianInput = {
    id?: number
    NIK: string
    nama_penumpang: string
    id_kursi: number
  }

  export type Detail_pembelianCreateOrConnectWithoutPembelianInput = {
    where: Detail_pembelianWhereUniqueInput
    create: XOR<Detail_pembelianCreateWithoutPembelianInput, Detail_pembelianUncheckedCreateWithoutPembelianInput>
  }

  export type Detail_pembelianCreateManyPembelianInputEnvelope = {
    data: Detail_pembelianCreateManyPembelianInput | Detail_pembelianCreateManyPembelianInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPembelianTiketsInput = {
    update: XOR<UserUpdateWithoutPembelianTiketsInput, UserUncheckedUpdateWithoutPembelianTiketsInput>
    create: XOR<UserCreateWithoutPembelianTiketsInput, UserUncheckedCreateWithoutPembelianTiketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPembelianTiketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPembelianTiketsInput, UserUncheckedUpdateWithoutPembelianTiketsInput>
  }

  export type UserUpdateWithoutPembelianTiketsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nik?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutPembelianTiketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    nik?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
    profile_picture?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalUpsertWithoutPembelianTiketsInput = {
    update: XOR<JadwalUpdateWithoutPembelianTiketsInput, JadwalUncheckedUpdateWithoutPembelianTiketsInput>
    create: XOR<JadwalCreateWithoutPembelianTiketsInput, JadwalUncheckedCreateWithoutPembelianTiketsInput>
    where?: JadwalWhereInput
  }

  export type JadwalUpdateToOneWithWhereWithoutPembelianTiketsInput = {
    where?: JadwalWhereInput
    data: XOR<JadwalUpdateWithoutPembelianTiketsInput, JadwalUncheckedUpdateWithoutPembelianTiketsInput>
  }

  export type JadwalUpdateWithoutPembelianTiketsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    asal_keberangkatan?: StringFieldUpdateOperationsInput | string
    tujuan_keberangkatan?: StringFieldUpdateOperationsInput | string
    tanggal_keberangkatan?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_kedatangan?: DateTimeFieldUpdateOperationsInput | Date | string
    harga?: IntFieldUpdateOperationsInput | number
    kereta?: KeretaUpdateOneRequiredWithoutJadwalNestedInput
  }

  export type JadwalUncheckedUpdateWithoutPembelianTiketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    asal_keberangkatan?: StringFieldUpdateOperationsInput | string
    tujuan_keberangkatan?: StringFieldUpdateOperationsInput | string
    tanggal_keberangkatan?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_kedatangan?: DateTimeFieldUpdateOperationsInput | Date | string
    harga?: IntFieldUpdateOperationsInput | number
    keretaId?: IntFieldUpdateOperationsInput | number
  }

  export type Detail_pembelianUpsertWithWhereUniqueWithoutPembelianInput = {
    where: Detail_pembelianWhereUniqueInput
    update: XOR<Detail_pembelianUpdateWithoutPembelianInput, Detail_pembelianUncheckedUpdateWithoutPembelianInput>
    create: XOR<Detail_pembelianCreateWithoutPembelianInput, Detail_pembelianUncheckedCreateWithoutPembelianInput>
  }

  export type Detail_pembelianUpdateWithWhereUniqueWithoutPembelianInput = {
    where: Detail_pembelianWhereUniqueInput
    data: XOR<Detail_pembelianUpdateWithoutPembelianInput, Detail_pembelianUncheckedUpdateWithoutPembelianInput>
  }

  export type Detail_pembelianUpdateManyWithWhereWithoutPembelianInput = {
    where: Detail_pembelianScalarWhereInput
    data: XOR<Detail_pembelianUpdateManyMutationInput, Detail_pembelianUncheckedUpdateManyWithoutPembelianInput>
  }

  export type Pembelian_tiketCreateWithoutDetailInput = {
    tanggal_pembelian?: Date | string
    user: UserCreateNestedOneWithoutPembelianTiketsInput
    jadwal: JadwalCreateNestedOneWithoutPembelianTiketsInput
  }

  export type Pembelian_tiketUncheckedCreateWithoutDetailInput = {
    id?: number
    tanggal_pembelian?: Date | string
    userId: number
    jadwalId: number
  }

  export type Pembelian_tiketCreateOrConnectWithoutDetailInput = {
    where: Pembelian_tiketWhereUniqueInput
    create: XOR<Pembelian_tiketCreateWithoutDetailInput, Pembelian_tiketUncheckedCreateWithoutDetailInput>
  }

  export type KursiCreateWithoutDetailPembeliansInput = {
    uuid?: string
    nomor: string
    gerbong: GerbongCreateNestedOneWithoutKursiInput
  }

  export type KursiUncheckedCreateWithoutDetailPembeliansInput = {
    id?: number
    uuid?: string
    nomor: string
    gerbongId: number
  }

  export type KursiCreateOrConnectWithoutDetailPembeliansInput = {
    where: KursiWhereUniqueInput
    create: XOR<KursiCreateWithoutDetailPembeliansInput, KursiUncheckedCreateWithoutDetailPembeliansInput>
  }

  export type Pembelian_tiketUpsertWithoutDetailInput = {
    update: XOR<Pembelian_tiketUpdateWithoutDetailInput, Pembelian_tiketUncheckedUpdateWithoutDetailInput>
    create: XOR<Pembelian_tiketCreateWithoutDetailInput, Pembelian_tiketUncheckedCreateWithoutDetailInput>
    where?: Pembelian_tiketWhereInput
  }

  export type Pembelian_tiketUpdateToOneWithWhereWithoutDetailInput = {
    where?: Pembelian_tiketWhereInput
    data: XOR<Pembelian_tiketUpdateWithoutDetailInput, Pembelian_tiketUncheckedUpdateWithoutDetailInput>
  }

  export type Pembelian_tiketUpdateWithoutDetailInput = {
    tanggal_pembelian?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPembelianTiketsNestedInput
    jadwal?: JadwalUpdateOneRequiredWithoutPembelianTiketsNestedInput
  }

  export type Pembelian_tiketUncheckedUpdateWithoutDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal_pembelian?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    jadwalId?: IntFieldUpdateOperationsInput | number
  }

  export type KursiUpsertWithoutDetailPembeliansInput = {
    update: XOR<KursiUpdateWithoutDetailPembeliansInput, KursiUncheckedUpdateWithoutDetailPembeliansInput>
    create: XOR<KursiCreateWithoutDetailPembeliansInput, KursiUncheckedCreateWithoutDetailPembeliansInput>
    where?: KursiWhereInput
  }

  export type KursiUpdateToOneWithWhereWithoutDetailPembeliansInput = {
    where?: KursiWhereInput
    data: XOR<KursiUpdateWithoutDetailPembeliansInput, KursiUncheckedUpdateWithoutDetailPembeliansInput>
  }

  export type KursiUpdateWithoutDetailPembeliansInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nomor?: StringFieldUpdateOperationsInput | string
    gerbong?: GerbongUpdateOneRequiredWithoutKursiNestedInput
  }

  export type KursiUncheckedUpdateWithoutDetailPembeliansInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    nomor?: StringFieldUpdateOperationsInput | string
    gerbongId?: IntFieldUpdateOperationsInput | number
  }

  export type Pembelian_tiketCreateManyUserInput = {
    id?: number
    tanggal_pembelian?: Date | string
    jadwalId: number
  }

  export type Pembelian_tiketUpdateWithoutUserInput = {
    tanggal_pembelian?: DateTimeFieldUpdateOperationsInput | Date | string
    jadwal?: JadwalUpdateOneRequiredWithoutPembelianTiketsNestedInput
    detail?: Detail_pembelianUpdateManyWithoutPembelianNestedInput
  }

  export type Pembelian_tiketUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal_pembelian?: DateTimeFieldUpdateOperationsInput | Date | string
    jadwalId?: IntFieldUpdateOperationsInput | number
    detail?: Detail_pembelianUncheckedUpdateManyWithoutPembelianNestedInput
  }

  export type Pembelian_tiketUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal_pembelian?: DateTimeFieldUpdateOperationsInput | Date | string
    jadwalId?: IntFieldUpdateOperationsInput | number
  }

  export type GerbongCreateManyKeretaInput = {
    id?: number
    uuid?: string
    kouta: number
  }

  export type JadwalCreateManyKeretaInput = {
    id?: number
    uuid?: string
    asal_keberangkatan: string
    tujuan_keberangkatan: string
    tanggal_keberangkatan: Date | string
    tanggal_kedatangan: Date | string
    harga: number
  }

  export type GerbongUpdateWithoutKeretaInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    kouta?: IntFieldUpdateOperationsInput | number
    kursi?: KursiUpdateManyWithoutGerbongNestedInput
  }

  export type GerbongUncheckedUpdateWithoutKeretaInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    kouta?: IntFieldUpdateOperationsInput | number
    kursi?: KursiUncheckedUpdateManyWithoutGerbongNestedInput
  }

  export type GerbongUncheckedUpdateManyWithoutKeretaInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    kouta?: IntFieldUpdateOperationsInput | number
  }

  export type JadwalUpdateWithoutKeretaInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    asal_keberangkatan?: StringFieldUpdateOperationsInput | string
    tujuan_keberangkatan?: StringFieldUpdateOperationsInput | string
    tanggal_keberangkatan?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_kedatangan?: DateTimeFieldUpdateOperationsInput | Date | string
    harga?: IntFieldUpdateOperationsInput | number
    pembelianTikets?: Pembelian_tiketUpdateManyWithoutJadwalNestedInput
  }

  export type JadwalUncheckedUpdateWithoutKeretaInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    asal_keberangkatan?: StringFieldUpdateOperationsInput | string
    tujuan_keberangkatan?: StringFieldUpdateOperationsInput | string
    tanggal_keberangkatan?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_kedatangan?: DateTimeFieldUpdateOperationsInput | Date | string
    harga?: IntFieldUpdateOperationsInput | number
    pembelianTikets?: Pembelian_tiketUncheckedUpdateManyWithoutJadwalNestedInput
  }

  export type JadwalUncheckedUpdateManyWithoutKeretaInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    asal_keberangkatan?: StringFieldUpdateOperationsInput | string
    tujuan_keberangkatan?: StringFieldUpdateOperationsInput | string
    tanggal_keberangkatan?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_kedatangan?: DateTimeFieldUpdateOperationsInput | Date | string
    harga?: IntFieldUpdateOperationsInput | number
  }

  export type KursiCreateManyGerbongInput = {
    id?: number
    uuid?: string
    nomor: string
  }

  export type KursiUpdateWithoutGerbongInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nomor?: StringFieldUpdateOperationsInput | string
    detailPembelians?: Detail_pembelianUpdateManyWithoutKursiNestedInput
  }

  export type KursiUncheckedUpdateWithoutGerbongInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    nomor?: StringFieldUpdateOperationsInput | string
    detailPembelians?: Detail_pembelianUncheckedUpdateManyWithoutKursiNestedInput
  }

  export type KursiUncheckedUpdateManyWithoutGerbongInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    nomor?: StringFieldUpdateOperationsInput | string
  }

  export type Detail_pembelianCreateManyKursiInput = {
    id?: number
    NIK: string
    nama_penumpang: string
    id_pembelian_tiket: number
  }

  export type Detail_pembelianUpdateWithoutKursiInput = {
    NIK?: StringFieldUpdateOperationsInput | string
    nama_penumpang?: StringFieldUpdateOperationsInput | string
    pembelian?: Pembelian_tiketUpdateOneRequiredWithoutDetailNestedInput
  }

  export type Detail_pembelianUncheckedUpdateWithoutKursiInput = {
    id?: IntFieldUpdateOperationsInput | number
    NIK?: StringFieldUpdateOperationsInput | string
    nama_penumpang?: StringFieldUpdateOperationsInput | string
    id_pembelian_tiket?: IntFieldUpdateOperationsInput | number
  }

  export type Detail_pembelianUncheckedUpdateManyWithoutKursiInput = {
    id?: IntFieldUpdateOperationsInput | number
    NIK?: StringFieldUpdateOperationsInput | string
    nama_penumpang?: StringFieldUpdateOperationsInput | string
    id_pembelian_tiket?: IntFieldUpdateOperationsInput | number
  }

  export type Pembelian_tiketCreateManyJadwalInput = {
    id?: number
    tanggal_pembelian?: Date | string
    userId: number
  }

  export type Pembelian_tiketUpdateWithoutJadwalInput = {
    tanggal_pembelian?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPembelianTiketsNestedInput
    detail?: Detail_pembelianUpdateManyWithoutPembelianNestedInput
  }

  export type Pembelian_tiketUncheckedUpdateWithoutJadwalInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal_pembelian?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    detail?: Detail_pembelianUncheckedUpdateManyWithoutPembelianNestedInput
  }

  export type Pembelian_tiketUncheckedUpdateManyWithoutJadwalInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal_pembelian?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type Detail_pembelianCreateManyPembelianInput = {
    id?: number
    NIK: string
    nama_penumpang: string
    id_kursi: number
  }

  export type Detail_pembelianUpdateWithoutPembelianInput = {
    NIK?: StringFieldUpdateOperationsInput | string
    nama_penumpang?: StringFieldUpdateOperationsInput | string
    kursi?: KursiUpdateOneRequiredWithoutDetailPembeliansNestedInput
  }

  export type Detail_pembelianUncheckedUpdateWithoutPembelianInput = {
    id?: IntFieldUpdateOperationsInput | number
    NIK?: StringFieldUpdateOperationsInput | string
    nama_penumpang?: StringFieldUpdateOperationsInput | string
    id_kursi?: IntFieldUpdateOperationsInput | number
  }

  export type Detail_pembelianUncheckedUpdateManyWithoutPembelianInput = {
    id?: IntFieldUpdateOperationsInput | number
    NIK?: StringFieldUpdateOperationsInput | string
    nama_penumpang?: StringFieldUpdateOperationsInput | string
    id_kursi?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}