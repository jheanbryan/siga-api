
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Professor
 * 
 */
export type Professor = $Result.DefaultSelection<Prisma.$ProfessorPayload>
/**
 * Model Estudante
 * 
 */
export type Estudante = $Result.DefaultSelection<Prisma.$EstudantePayload>
/**
 * Model Disciplina
 * 
 */
export type Disciplina = $Result.DefaultSelection<Prisma.$DisciplinaPayload>
/**
 * Model JogoDaVelha
 * 
 */
export type JogoDaVelha = $Result.DefaultSelection<Prisma.$JogoDaVelhaPayload>
/**
 * Model MatriculaSe
 * 
 */
export type MatriculaSe = $Result.DefaultSelection<Prisma.$MatriculaSePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professor`: Exposes CRUD operations for the **Professor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professors
    * const professors = await prisma.professor.findMany()
    * ```
    */
  get professor(): Prisma.ProfessorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estudante`: Exposes CRUD operations for the **Estudante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estudantes
    * const estudantes = await prisma.estudante.findMany()
    * ```
    */
  get estudante(): Prisma.EstudanteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disciplina`: Exposes CRUD operations for the **Disciplina** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disciplinas
    * const disciplinas = await prisma.disciplina.findMany()
    * ```
    */
  get disciplina(): Prisma.DisciplinaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jogoDaVelha`: Exposes CRUD operations for the **JogoDaVelha** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JogoDaVelhas
    * const jogoDaVelhas = await prisma.jogoDaVelha.findMany()
    * ```
    */
  get jogoDaVelha(): Prisma.JogoDaVelhaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matriculaSe`: Exposes CRUD operations for the **MatriculaSe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatriculaSes
    * const matriculaSes = await prisma.matriculaSe.findMany()
    * ```
    */
  get matriculaSe(): Prisma.MatriculaSeDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Usuario: 'Usuario',
    Professor: 'Professor',
    Estudante: 'Estudante',
    Disciplina: 'Disciplina',
    JogoDaVelha: 'JogoDaVelha',
    MatriculaSe: 'MatriculaSe'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "professor" | "estudante" | "disciplina" | "jogoDaVelha" | "matriculaSe"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Professor: {
        payload: Prisma.$ProfessorPayload<ExtArgs>
        fields: Prisma.ProfessorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findFirst: {
            args: Prisma.ProfessorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          findMany: {
            args: Prisma.ProfessorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>[]
          }
          create: {
            args: Prisma.ProfessorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          createMany: {
            args: Prisma.ProfessorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProfessorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          update: {
            args: Prisma.ProfessorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          deleteMany: {
            args: Prisma.ProfessorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProfessorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessorPayload>
          }
          aggregate: {
            args: Prisma.ProfessorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessor>
          }
          groupBy: {
            args: Prisma.ProfessorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessorCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessorCountAggregateOutputType> | number
          }
        }
      }
      Estudante: {
        payload: Prisma.$EstudantePayload<ExtArgs>
        fields: Prisma.EstudanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstudanteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstudanteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudantePayload>
          }
          findFirst: {
            args: Prisma.EstudanteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstudanteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudantePayload>
          }
          findMany: {
            args: Prisma.EstudanteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudantePayload>[]
          }
          create: {
            args: Prisma.EstudanteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudantePayload>
          }
          createMany: {
            args: Prisma.EstudanteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EstudanteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudantePayload>
          }
          update: {
            args: Prisma.EstudanteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudantePayload>
          }
          deleteMany: {
            args: Prisma.EstudanteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstudanteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EstudanteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudantePayload>
          }
          aggregate: {
            args: Prisma.EstudanteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstudante>
          }
          groupBy: {
            args: Prisma.EstudanteGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstudanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstudanteCountArgs<ExtArgs>
            result: $Utils.Optional<EstudanteCountAggregateOutputType> | number
          }
        }
      }
      Disciplina: {
        payload: Prisma.$DisciplinaPayload<ExtArgs>
        fields: Prisma.DisciplinaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisciplinaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisciplinaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          findFirst: {
            args: Prisma.DisciplinaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisciplinaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          findMany: {
            args: Prisma.DisciplinaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>[]
          }
          create: {
            args: Prisma.DisciplinaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          createMany: {
            args: Prisma.DisciplinaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DisciplinaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          update: {
            args: Prisma.DisciplinaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          deleteMany: {
            args: Prisma.DisciplinaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisciplinaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DisciplinaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisciplinaPayload>
          }
          aggregate: {
            args: Prisma.DisciplinaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisciplina>
          }
          groupBy: {
            args: Prisma.DisciplinaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisciplinaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisciplinaCountArgs<ExtArgs>
            result: $Utils.Optional<DisciplinaCountAggregateOutputType> | number
          }
        }
      }
      JogoDaVelha: {
        payload: Prisma.$JogoDaVelhaPayload<ExtArgs>
        fields: Prisma.JogoDaVelhaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JogoDaVelhaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoDaVelhaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JogoDaVelhaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoDaVelhaPayload>
          }
          findFirst: {
            args: Prisma.JogoDaVelhaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoDaVelhaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JogoDaVelhaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoDaVelhaPayload>
          }
          findMany: {
            args: Prisma.JogoDaVelhaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoDaVelhaPayload>[]
          }
          create: {
            args: Prisma.JogoDaVelhaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoDaVelhaPayload>
          }
          createMany: {
            args: Prisma.JogoDaVelhaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JogoDaVelhaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoDaVelhaPayload>
          }
          update: {
            args: Prisma.JogoDaVelhaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoDaVelhaPayload>
          }
          deleteMany: {
            args: Prisma.JogoDaVelhaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JogoDaVelhaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JogoDaVelhaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JogoDaVelhaPayload>
          }
          aggregate: {
            args: Prisma.JogoDaVelhaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJogoDaVelha>
          }
          groupBy: {
            args: Prisma.JogoDaVelhaGroupByArgs<ExtArgs>
            result: $Utils.Optional<JogoDaVelhaGroupByOutputType>[]
          }
          count: {
            args: Prisma.JogoDaVelhaCountArgs<ExtArgs>
            result: $Utils.Optional<JogoDaVelhaCountAggregateOutputType> | number
          }
        }
      }
      MatriculaSe: {
        payload: Prisma.$MatriculaSePayload<ExtArgs>
        fields: Prisma.MatriculaSeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatriculaSeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaSePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatriculaSeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaSePayload>
          }
          findFirst: {
            args: Prisma.MatriculaSeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaSePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatriculaSeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaSePayload>
          }
          findMany: {
            args: Prisma.MatriculaSeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaSePayload>[]
          }
          create: {
            args: Prisma.MatriculaSeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaSePayload>
          }
          createMany: {
            args: Prisma.MatriculaSeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MatriculaSeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaSePayload>
          }
          update: {
            args: Prisma.MatriculaSeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaSePayload>
          }
          deleteMany: {
            args: Prisma.MatriculaSeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatriculaSeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MatriculaSeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatriculaSePayload>
          }
          aggregate: {
            args: Prisma.MatriculaSeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatriculaSe>
          }
          groupBy: {
            args: Prisma.MatriculaSeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatriculaSeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatriculaSeCountArgs<ExtArgs>
            result: $Utils.Optional<MatriculaSeCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    professor?: ProfessorOmit
    estudante?: EstudanteOmit
    disciplina?: DisciplinaOmit
    jogoDaVelha?: JogoDaVelhaOmit
    matriculaSe?: MatriculaSeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    jogos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jogos?: boolean | UsuarioCountOutputTypeCountJogosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountJogosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JogoDaVelhaWhereInput
  }


  /**
   * Count Type ProfessorCountOutputType
   */

  export type ProfessorCountOutputType = {
    disciplinas: number
  }

  export type ProfessorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplinas?: boolean | ProfessorCountOutputTypeCountDisciplinasArgs
  }

  // Custom InputTypes
  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessorCountOutputType
     */
    select?: ProfessorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfessorCountOutputType without action
   */
  export type ProfessorCountOutputTypeCountDisciplinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisciplinaWhereInput
  }


  /**
   * Count Type EstudanteCountOutputType
   */

  export type EstudanteCountOutputType = {
    matriculas: number
  }

  export type EstudanteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matriculas?: boolean | EstudanteCountOutputTypeCountMatriculasArgs
  }

  // Custom InputTypes
  /**
   * EstudanteCountOutputType without action
   */
  export type EstudanteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudanteCountOutputType
     */
    select?: EstudanteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstudanteCountOutputType without action
   */
  export type EstudanteCountOutputTypeCountMatriculasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatriculaSeWhereInput
  }


  /**
   * Count Type DisciplinaCountOutputType
   */

  export type DisciplinaCountOutputType = {
    matriculas: number
  }

  export type DisciplinaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matriculas?: boolean | DisciplinaCountOutputTypeCountMatriculasArgs
  }

  // Custom InputTypes
  /**
   * DisciplinaCountOutputType without action
   */
  export type DisciplinaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplinaCountOutputType
     */
    select?: DisciplinaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DisciplinaCountOutputType without action
   */
  export type DisciplinaCountOutputTypeCountMatriculasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatriculaSeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    cpf: string | null
    foto: string | null
    email: string | null
    data_nascimento: Date | null
    nome: string | null
    senha: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    cpf: string | null
    foto: string | null
    email: string | null
    data_nascimento: Date | null
    nome: string | null
    senha: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    cpf: number
    foto: number
    email: number
    data_nascimento: number
    nome: number
    senha: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    cpf?: true
    foto?: true
    email?: true
    data_nascimento?: true
    nome?: true
    senha?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    cpf?: true
    foto?: true
    email?: true
    data_nascimento?: true
    nome?: true
    senha?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    cpf?: true
    foto?: true
    email?: true
    data_nascimento?: true
    nome?: true
    senha?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    cpf: string
    foto: string | null
    email: string
    data_nascimento: Date | null
    nome: string
    senha: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    foto?: boolean
    email?: boolean
    data_nascimento?: boolean
    nome?: boolean
    senha?: boolean
    professor?: boolean | Usuario$professorArgs<ExtArgs>
    estudante?: boolean | Usuario$estudanteArgs<ExtArgs>
    jogos?: boolean | Usuario$jogosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    cpf?: boolean
    foto?: boolean
    email?: boolean
    data_nascimento?: boolean
    nome?: boolean
    senha?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cpf" | "foto" | "email" | "data_nascimento" | "nome" | "senha", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | Usuario$professorArgs<ExtArgs>
    estudante?: boolean | Usuario$estudanteArgs<ExtArgs>
    jogos?: boolean | Usuario$jogosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      professor: Prisma.$ProfessorPayload<ExtArgs> | null
      estudante: Prisma.$EstudantePayload<ExtArgs> | null
      jogos: Prisma.$JogoDaVelhaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cpf: string
      foto: string | null
      email: string
      data_nascimento: Date | null
      nome: string
      senha: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professor<T extends Usuario$professorArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$professorArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    estudante<T extends Usuario$estudanteArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$estudanteArgs<ExtArgs>>): Prisma__EstudanteClient<$Result.GetResult<Prisma.$EstudantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    jogos<T extends Usuario$jogosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$jogosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogoDaVelhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly cpf: FieldRef<"Usuario", 'String'>
    readonly foto: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly data_nascimento: FieldRef<"Usuario", 'DateTime'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.professor
   */
  export type Usuario$professorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    where?: ProfessorWhereInput
  }

  /**
   * Usuario.estudante
   */
  export type Usuario$estudanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudante
     */
    select?: EstudanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudante
     */
    omit?: EstudanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudanteInclude<ExtArgs> | null
    where?: EstudanteWhereInput
  }

  /**
   * Usuario.jogos
   */
  export type Usuario$jogosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogoDaVelha
     */
    select?: JogoDaVelhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JogoDaVelha
     */
    omit?: JogoDaVelhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoDaVelhaInclude<ExtArgs> | null
    where?: JogoDaVelhaWhereInput
    orderBy?: JogoDaVelhaOrderByWithRelationInput | JogoDaVelhaOrderByWithRelationInput[]
    cursor?: JogoDaVelhaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JogoDaVelhaScalarFieldEnum | JogoDaVelhaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Professor
   */

  export type AggregateProfessor = {
    _count: ProfessorCountAggregateOutputType | null
    _avg: ProfessorAvgAggregateOutputType | null
    _sum: ProfessorSumAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  export type ProfessorAvgAggregateOutputType = {
    fk_usuarios_id: number | null
    siape: number | null
  }

  export type ProfessorSumAggregateOutputType = {
    fk_usuarios_id: number | null
    siape: number | null
  }

  export type ProfessorMinAggregateOutputType = {
    fk_usuarios_id: number | null
    siape: number | null
  }

  export type ProfessorMaxAggregateOutputType = {
    fk_usuarios_id: number | null
    siape: number | null
  }

  export type ProfessorCountAggregateOutputType = {
    fk_usuarios_id: number
    siape: number
    _all: number
  }


  export type ProfessorAvgAggregateInputType = {
    fk_usuarios_id?: true
    siape?: true
  }

  export type ProfessorSumAggregateInputType = {
    fk_usuarios_id?: true
    siape?: true
  }

  export type ProfessorMinAggregateInputType = {
    fk_usuarios_id?: true
    siape?: true
  }

  export type ProfessorMaxAggregateInputType = {
    fk_usuarios_id?: true
    siape?: true
  }

  export type ProfessorCountAggregateInputType = {
    fk_usuarios_id?: true
    siape?: true
    _all?: true
  }

  export type ProfessorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professor to aggregate.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Professors
    **/
    _count?: true | ProfessorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfessorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfessorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessorMaxAggregateInputType
  }

  export type GetProfessorAggregateType<T extends ProfessorAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessor[P]>
      : GetScalarType<T[P], AggregateProfessor[P]>
  }




  export type ProfessorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessorWhereInput
    orderBy?: ProfessorOrderByWithAggregationInput | ProfessorOrderByWithAggregationInput[]
    by: ProfessorScalarFieldEnum[] | ProfessorScalarFieldEnum
    having?: ProfessorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessorCountAggregateInputType | true
    _avg?: ProfessorAvgAggregateInputType
    _sum?: ProfessorSumAggregateInputType
    _min?: ProfessorMinAggregateInputType
    _max?: ProfessorMaxAggregateInputType
  }

  export type ProfessorGroupByOutputType = {
    fk_usuarios_id: number
    siape: number
    _count: ProfessorCountAggregateOutputType | null
    _avg: ProfessorAvgAggregateOutputType | null
    _sum: ProfessorSumAggregateOutputType | null
    _min: ProfessorMinAggregateOutputType | null
    _max: ProfessorMaxAggregateOutputType | null
  }

  type GetProfessorGroupByPayload<T extends ProfessorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessorGroupByOutputType[P]>
        }
      >
    >


  export type ProfessorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fk_usuarios_id?: boolean
    siape?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    disciplinas?: boolean | Professor$disciplinasArgs<ExtArgs>
    _count?: boolean | ProfessorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professor"]>



  export type ProfessorSelectScalar = {
    fk_usuarios_id?: boolean
    siape?: boolean
  }

  export type ProfessorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"fk_usuarios_id" | "siape", ExtArgs["result"]["professor"]>
  export type ProfessorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    disciplinas?: boolean | Professor$disciplinasArgs<ExtArgs>
    _count?: boolean | ProfessorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProfessorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Professor"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      disciplinas: Prisma.$DisciplinaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      fk_usuarios_id: number
      siape: number
    }, ExtArgs["result"]["professor"]>
    composites: {}
  }

  type ProfessorGetPayload<S extends boolean | null | undefined | ProfessorDefaultArgs> = $Result.GetResult<Prisma.$ProfessorPayload, S>

  type ProfessorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessorCountAggregateInputType | true
    }

  export interface ProfessorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Professor'], meta: { name: 'Professor' } }
    /**
     * Find zero or one Professor that matches the filter.
     * @param {ProfessorFindUniqueArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessorFindUniqueArgs>(args: SelectSubset<T, ProfessorFindUniqueArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Professor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessorFindUniqueOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessorFindFirstArgs>(args?: SelectSubset<T, ProfessorFindFirstArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindFirstOrThrowArgs} args - Arguments to find a Professor
     * @example
     * // Get one Professor
     * const professor = await prisma.professor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professors
     * const professors = await prisma.professor.findMany()
     * 
     * // Get first 10 Professors
     * const professors = await prisma.professor.findMany({ take: 10 })
     * 
     * // Only select the `fk_usuarios_id`
     * const professorWithFk_usuarios_idOnly = await prisma.professor.findMany({ select: { fk_usuarios_id: true } })
     * 
     */
    findMany<T extends ProfessorFindManyArgs>(args?: SelectSubset<T, ProfessorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Professor.
     * @param {ProfessorCreateArgs} args - Arguments to create a Professor.
     * @example
     * // Create one Professor
     * const Professor = await prisma.professor.create({
     *   data: {
     *     // ... data to create a Professor
     *   }
     * })
     * 
     */
    create<T extends ProfessorCreateArgs>(args: SelectSubset<T, ProfessorCreateArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professors.
     * @param {ProfessorCreateManyArgs} args - Arguments to create many Professors.
     * @example
     * // Create many Professors
     * const professor = await prisma.professor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessorCreateManyArgs>(args?: SelectSubset<T, ProfessorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Professor.
     * @param {ProfessorDeleteArgs} args - Arguments to delete one Professor.
     * @example
     * // Delete one Professor
     * const Professor = await prisma.professor.delete({
     *   where: {
     *     // ... filter to delete one Professor
     *   }
     * })
     * 
     */
    delete<T extends ProfessorDeleteArgs>(args: SelectSubset<T, ProfessorDeleteArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Professor.
     * @param {ProfessorUpdateArgs} args - Arguments to update one Professor.
     * @example
     * // Update one Professor
     * const professor = await prisma.professor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessorUpdateArgs>(args: SelectSubset<T, ProfessorUpdateArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professors.
     * @param {ProfessorDeleteManyArgs} args - Arguments to filter Professors to delete.
     * @example
     * // Delete a few Professors
     * const { count } = await prisma.professor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessorDeleteManyArgs>(args?: SelectSubset<T, ProfessorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professors
     * const professor = await prisma.professor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessorUpdateManyArgs>(args: SelectSubset<T, ProfessorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Professor.
     * @param {ProfessorUpsertArgs} args - Arguments to update or create a Professor.
     * @example
     * // Update or create a Professor
     * const professor = await prisma.professor.upsert({
     *   create: {
     *     // ... data to create a Professor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Professor we want to update
     *   }
     * })
     */
    upsert<T extends ProfessorUpsertArgs>(args: SelectSubset<T, ProfessorUpsertArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorCountArgs} args - Arguments to filter Professors to count.
     * @example
     * // Count the number of Professors
     * const count = await prisma.professor.count({
     *   where: {
     *     // ... the filter for the Professors we want to count
     *   }
     * })
    **/
    count<T extends ProfessorCountArgs>(
      args?: Subset<T, ProfessorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfessorAggregateArgs>(args: Subset<T, ProfessorAggregateArgs>): Prisma.PrismaPromise<GetProfessorAggregateType<T>>

    /**
     * Group by Professor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessorGroupByArgs} args - Group by arguments.
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
      T extends ProfessorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessorGroupByArgs['orderBy'] }
        : { orderBy?: ProfessorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfessorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Professor model
   */
  readonly fields: ProfessorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Professor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    disciplinas<T extends Professor$disciplinasArgs<ExtArgs> = {}>(args?: Subset<T, Professor$disciplinasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Professor model
   */
  interface ProfessorFieldRefs {
    readonly fk_usuarios_id: FieldRef<"Professor", 'Int'>
    readonly siape: FieldRef<"Professor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Professor findUnique
   */
  export type ProfessorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor findUniqueOrThrow
   */
  export type ProfessorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor findFirst
   */
  export type ProfessorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor findFirstOrThrow
   */
  export type ProfessorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professor to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professors.
     */
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor findMany
   */
  export type ProfessorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter, which Professors to fetch.
     */
    where?: ProfessorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professors to fetch.
     */
    orderBy?: ProfessorOrderByWithRelationInput | ProfessorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Professors.
     */
    cursor?: ProfessorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professors.
     */
    skip?: number
    distinct?: ProfessorScalarFieldEnum | ProfessorScalarFieldEnum[]
  }

  /**
   * Professor create
   */
  export type ProfessorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The data needed to create a Professor.
     */
    data: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
  }

  /**
   * Professor createMany
   */
  export type ProfessorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Professors.
     */
    data: ProfessorCreateManyInput | ProfessorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Professor update
   */
  export type ProfessorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The data needed to update a Professor.
     */
    data: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
    /**
     * Choose, which Professor to update.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor updateMany
   */
  export type ProfessorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Professors.
     */
    data: XOR<ProfessorUpdateManyMutationInput, ProfessorUncheckedUpdateManyInput>
    /**
     * Filter which Professors to update
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to update.
     */
    limit?: number
  }

  /**
   * Professor upsert
   */
  export type ProfessorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * The filter to search for the Professor to update in case it exists.
     */
    where: ProfessorWhereUniqueInput
    /**
     * In case the Professor found by the `where` argument doesn't exist, create a new Professor with this data.
     */
    create: XOR<ProfessorCreateInput, ProfessorUncheckedCreateInput>
    /**
     * In case the Professor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessorUpdateInput, ProfessorUncheckedUpdateInput>
  }

  /**
   * Professor delete
   */
  export type ProfessorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
    /**
     * Filter which Professor to delete.
     */
    where: ProfessorWhereUniqueInput
  }

  /**
   * Professor deleteMany
   */
  export type ProfessorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professors to delete
     */
    where?: ProfessorWhereInput
    /**
     * Limit how many Professors to delete.
     */
    limit?: number
  }

  /**
   * Professor.disciplinas
   */
  export type Professor$disciplinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    where?: DisciplinaWhereInput
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    cursor?: DisciplinaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * Professor without action
   */
  export type ProfessorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professor
     */
    select?: ProfessorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professor
     */
    omit?: ProfessorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessorInclude<ExtArgs> | null
  }


  /**
   * Model Estudante
   */

  export type AggregateEstudante = {
    _count: EstudanteCountAggregateOutputType | null
    _avg: EstudanteAvgAggregateOutputType | null
    _sum: EstudanteSumAggregateOutputType | null
    _min: EstudanteMinAggregateOutputType | null
    _max: EstudanteMaxAggregateOutputType | null
  }

  export type EstudanteAvgAggregateOutputType = {
    fk_usuarios_id: number | null
    ra: number | null
  }

  export type EstudanteSumAggregateOutputType = {
    fk_usuarios_id: number | null
    ra: number | null
  }

  export type EstudanteMinAggregateOutputType = {
    fk_usuarios_id: number | null
    ra: number | null
  }

  export type EstudanteMaxAggregateOutputType = {
    fk_usuarios_id: number | null
    ra: number | null
  }

  export type EstudanteCountAggregateOutputType = {
    fk_usuarios_id: number
    ra: number
    _all: number
  }


  export type EstudanteAvgAggregateInputType = {
    fk_usuarios_id?: true
    ra?: true
  }

  export type EstudanteSumAggregateInputType = {
    fk_usuarios_id?: true
    ra?: true
  }

  export type EstudanteMinAggregateInputType = {
    fk_usuarios_id?: true
    ra?: true
  }

  export type EstudanteMaxAggregateInputType = {
    fk_usuarios_id?: true
    ra?: true
  }

  export type EstudanteCountAggregateInputType = {
    fk_usuarios_id?: true
    ra?: true
    _all?: true
  }

  export type EstudanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estudante to aggregate.
     */
    where?: EstudanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudantes to fetch.
     */
    orderBy?: EstudanteOrderByWithRelationInput | EstudanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstudanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estudantes
    **/
    _count?: true | EstudanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstudanteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstudanteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstudanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstudanteMaxAggregateInputType
  }

  export type GetEstudanteAggregateType<T extends EstudanteAggregateArgs> = {
        [P in keyof T & keyof AggregateEstudante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstudante[P]>
      : GetScalarType<T[P], AggregateEstudante[P]>
  }




  export type EstudanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstudanteWhereInput
    orderBy?: EstudanteOrderByWithAggregationInput | EstudanteOrderByWithAggregationInput[]
    by: EstudanteScalarFieldEnum[] | EstudanteScalarFieldEnum
    having?: EstudanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstudanteCountAggregateInputType | true
    _avg?: EstudanteAvgAggregateInputType
    _sum?: EstudanteSumAggregateInputType
    _min?: EstudanteMinAggregateInputType
    _max?: EstudanteMaxAggregateInputType
  }

  export type EstudanteGroupByOutputType = {
    fk_usuarios_id: number
    ra: number
    _count: EstudanteCountAggregateOutputType | null
    _avg: EstudanteAvgAggregateOutputType | null
    _sum: EstudanteSumAggregateOutputType | null
    _min: EstudanteMinAggregateOutputType | null
    _max: EstudanteMaxAggregateOutputType | null
  }

  type GetEstudanteGroupByPayload<T extends EstudanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstudanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstudanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstudanteGroupByOutputType[P]>
            : GetScalarType<T[P], EstudanteGroupByOutputType[P]>
        }
      >
    >


  export type EstudanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fk_usuarios_id?: boolean
    ra?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    matriculas?: boolean | Estudante$matriculasArgs<ExtArgs>
    _count?: boolean | EstudanteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estudante"]>



  export type EstudanteSelectScalar = {
    fk_usuarios_id?: boolean
    ra?: boolean
  }

  export type EstudanteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"fk_usuarios_id" | "ra", ExtArgs["result"]["estudante"]>
  export type EstudanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    matriculas?: boolean | Estudante$matriculasArgs<ExtArgs>
    _count?: boolean | EstudanteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EstudantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estudante"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      matriculas: Prisma.$MatriculaSePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      fk_usuarios_id: number
      ra: number
    }, ExtArgs["result"]["estudante"]>
    composites: {}
  }

  type EstudanteGetPayload<S extends boolean | null | undefined | EstudanteDefaultArgs> = $Result.GetResult<Prisma.$EstudantePayload, S>

  type EstudanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstudanteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstudanteCountAggregateInputType | true
    }

  export interface EstudanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estudante'], meta: { name: 'Estudante' } }
    /**
     * Find zero or one Estudante that matches the filter.
     * @param {EstudanteFindUniqueArgs} args - Arguments to find a Estudante
     * @example
     * // Get one Estudante
     * const estudante = await prisma.estudante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstudanteFindUniqueArgs>(args: SelectSubset<T, EstudanteFindUniqueArgs<ExtArgs>>): Prisma__EstudanteClient<$Result.GetResult<Prisma.$EstudantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estudante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstudanteFindUniqueOrThrowArgs} args - Arguments to find a Estudante
     * @example
     * // Get one Estudante
     * const estudante = await prisma.estudante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstudanteFindUniqueOrThrowArgs>(args: SelectSubset<T, EstudanteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstudanteClient<$Result.GetResult<Prisma.$EstudantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estudante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudanteFindFirstArgs} args - Arguments to find a Estudante
     * @example
     * // Get one Estudante
     * const estudante = await prisma.estudante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstudanteFindFirstArgs>(args?: SelectSubset<T, EstudanteFindFirstArgs<ExtArgs>>): Prisma__EstudanteClient<$Result.GetResult<Prisma.$EstudantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estudante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudanteFindFirstOrThrowArgs} args - Arguments to find a Estudante
     * @example
     * // Get one Estudante
     * const estudante = await prisma.estudante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstudanteFindFirstOrThrowArgs>(args?: SelectSubset<T, EstudanteFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstudanteClient<$Result.GetResult<Prisma.$EstudantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estudantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudanteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estudantes
     * const estudantes = await prisma.estudante.findMany()
     * 
     * // Get first 10 Estudantes
     * const estudantes = await prisma.estudante.findMany({ take: 10 })
     * 
     * // Only select the `fk_usuarios_id`
     * const estudanteWithFk_usuarios_idOnly = await prisma.estudante.findMany({ select: { fk_usuarios_id: true } })
     * 
     */
    findMany<T extends EstudanteFindManyArgs>(args?: SelectSubset<T, EstudanteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estudante.
     * @param {EstudanteCreateArgs} args - Arguments to create a Estudante.
     * @example
     * // Create one Estudante
     * const Estudante = await prisma.estudante.create({
     *   data: {
     *     // ... data to create a Estudante
     *   }
     * })
     * 
     */
    create<T extends EstudanteCreateArgs>(args: SelectSubset<T, EstudanteCreateArgs<ExtArgs>>): Prisma__EstudanteClient<$Result.GetResult<Prisma.$EstudantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estudantes.
     * @param {EstudanteCreateManyArgs} args - Arguments to create many Estudantes.
     * @example
     * // Create many Estudantes
     * const estudante = await prisma.estudante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstudanteCreateManyArgs>(args?: SelectSubset<T, EstudanteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Estudante.
     * @param {EstudanteDeleteArgs} args - Arguments to delete one Estudante.
     * @example
     * // Delete one Estudante
     * const Estudante = await prisma.estudante.delete({
     *   where: {
     *     // ... filter to delete one Estudante
     *   }
     * })
     * 
     */
    delete<T extends EstudanteDeleteArgs>(args: SelectSubset<T, EstudanteDeleteArgs<ExtArgs>>): Prisma__EstudanteClient<$Result.GetResult<Prisma.$EstudantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estudante.
     * @param {EstudanteUpdateArgs} args - Arguments to update one Estudante.
     * @example
     * // Update one Estudante
     * const estudante = await prisma.estudante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstudanteUpdateArgs>(args: SelectSubset<T, EstudanteUpdateArgs<ExtArgs>>): Prisma__EstudanteClient<$Result.GetResult<Prisma.$EstudantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estudantes.
     * @param {EstudanteDeleteManyArgs} args - Arguments to filter Estudantes to delete.
     * @example
     * // Delete a few Estudantes
     * const { count } = await prisma.estudante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstudanteDeleteManyArgs>(args?: SelectSubset<T, EstudanteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estudantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estudantes
     * const estudante = await prisma.estudante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstudanteUpdateManyArgs>(args: SelectSubset<T, EstudanteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Estudante.
     * @param {EstudanteUpsertArgs} args - Arguments to update or create a Estudante.
     * @example
     * // Update or create a Estudante
     * const estudante = await prisma.estudante.upsert({
     *   create: {
     *     // ... data to create a Estudante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estudante we want to update
     *   }
     * })
     */
    upsert<T extends EstudanteUpsertArgs>(args: SelectSubset<T, EstudanteUpsertArgs<ExtArgs>>): Prisma__EstudanteClient<$Result.GetResult<Prisma.$EstudantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estudantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudanteCountArgs} args - Arguments to filter Estudantes to count.
     * @example
     * // Count the number of Estudantes
     * const count = await prisma.estudante.count({
     *   where: {
     *     // ... the filter for the Estudantes we want to count
     *   }
     * })
    **/
    count<T extends EstudanteCountArgs>(
      args?: Subset<T, EstudanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstudanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estudante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstudanteAggregateArgs>(args: Subset<T, EstudanteAggregateArgs>): Prisma.PrismaPromise<GetEstudanteAggregateType<T>>

    /**
     * Group by Estudante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudanteGroupByArgs} args - Group by arguments.
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
      T extends EstudanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstudanteGroupByArgs['orderBy'] }
        : { orderBy?: EstudanteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstudanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstudanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estudante model
   */
  readonly fields: EstudanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estudante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstudanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    matriculas<T extends Estudante$matriculasArgs<ExtArgs> = {}>(args?: Subset<T, Estudante$matriculasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatriculaSePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Estudante model
   */
  interface EstudanteFieldRefs {
    readonly fk_usuarios_id: FieldRef<"Estudante", 'Int'>
    readonly ra: FieldRef<"Estudante", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Estudante findUnique
   */
  export type EstudanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudante
     */
    select?: EstudanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudante
     */
    omit?: EstudanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudanteInclude<ExtArgs> | null
    /**
     * Filter, which Estudante to fetch.
     */
    where: EstudanteWhereUniqueInput
  }

  /**
   * Estudante findUniqueOrThrow
   */
  export type EstudanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudante
     */
    select?: EstudanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudante
     */
    omit?: EstudanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudanteInclude<ExtArgs> | null
    /**
     * Filter, which Estudante to fetch.
     */
    where: EstudanteWhereUniqueInput
  }

  /**
   * Estudante findFirst
   */
  export type EstudanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudante
     */
    select?: EstudanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudante
     */
    omit?: EstudanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudanteInclude<ExtArgs> | null
    /**
     * Filter, which Estudante to fetch.
     */
    where?: EstudanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudantes to fetch.
     */
    orderBy?: EstudanteOrderByWithRelationInput | EstudanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estudantes.
     */
    cursor?: EstudanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estudantes.
     */
    distinct?: EstudanteScalarFieldEnum | EstudanteScalarFieldEnum[]
  }

  /**
   * Estudante findFirstOrThrow
   */
  export type EstudanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudante
     */
    select?: EstudanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudante
     */
    omit?: EstudanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudanteInclude<ExtArgs> | null
    /**
     * Filter, which Estudante to fetch.
     */
    where?: EstudanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudantes to fetch.
     */
    orderBy?: EstudanteOrderByWithRelationInput | EstudanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estudantes.
     */
    cursor?: EstudanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estudantes.
     */
    distinct?: EstudanteScalarFieldEnum | EstudanteScalarFieldEnum[]
  }

  /**
   * Estudante findMany
   */
  export type EstudanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudante
     */
    select?: EstudanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudante
     */
    omit?: EstudanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudanteInclude<ExtArgs> | null
    /**
     * Filter, which Estudantes to fetch.
     */
    where?: EstudanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudantes to fetch.
     */
    orderBy?: EstudanteOrderByWithRelationInput | EstudanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estudantes.
     */
    cursor?: EstudanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudantes.
     */
    skip?: number
    distinct?: EstudanteScalarFieldEnum | EstudanteScalarFieldEnum[]
  }

  /**
   * Estudante create
   */
  export type EstudanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudante
     */
    select?: EstudanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudante
     */
    omit?: EstudanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudanteInclude<ExtArgs> | null
    /**
     * The data needed to create a Estudante.
     */
    data: XOR<EstudanteCreateInput, EstudanteUncheckedCreateInput>
  }

  /**
   * Estudante createMany
   */
  export type EstudanteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estudantes.
     */
    data: EstudanteCreateManyInput | EstudanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estudante update
   */
  export type EstudanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudante
     */
    select?: EstudanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudante
     */
    omit?: EstudanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudanteInclude<ExtArgs> | null
    /**
     * The data needed to update a Estudante.
     */
    data: XOR<EstudanteUpdateInput, EstudanteUncheckedUpdateInput>
    /**
     * Choose, which Estudante to update.
     */
    where: EstudanteWhereUniqueInput
  }

  /**
   * Estudante updateMany
   */
  export type EstudanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estudantes.
     */
    data: XOR<EstudanteUpdateManyMutationInput, EstudanteUncheckedUpdateManyInput>
    /**
     * Filter which Estudantes to update
     */
    where?: EstudanteWhereInput
    /**
     * Limit how many Estudantes to update.
     */
    limit?: number
  }

  /**
   * Estudante upsert
   */
  export type EstudanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudante
     */
    select?: EstudanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudante
     */
    omit?: EstudanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudanteInclude<ExtArgs> | null
    /**
     * The filter to search for the Estudante to update in case it exists.
     */
    where: EstudanteWhereUniqueInput
    /**
     * In case the Estudante found by the `where` argument doesn't exist, create a new Estudante with this data.
     */
    create: XOR<EstudanteCreateInput, EstudanteUncheckedCreateInput>
    /**
     * In case the Estudante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstudanteUpdateInput, EstudanteUncheckedUpdateInput>
  }

  /**
   * Estudante delete
   */
  export type EstudanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudante
     */
    select?: EstudanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudante
     */
    omit?: EstudanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudanteInclude<ExtArgs> | null
    /**
     * Filter which Estudante to delete.
     */
    where: EstudanteWhereUniqueInput
  }

  /**
   * Estudante deleteMany
   */
  export type EstudanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estudantes to delete
     */
    where?: EstudanteWhereInput
    /**
     * Limit how many Estudantes to delete.
     */
    limit?: number
  }

  /**
   * Estudante.matriculas
   */
  export type Estudante$matriculasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatriculaSe
     */
    select?: MatriculaSeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatriculaSe
     */
    omit?: MatriculaSeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaSeInclude<ExtArgs> | null
    where?: MatriculaSeWhereInput
    orderBy?: MatriculaSeOrderByWithRelationInput | MatriculaSeOrderByWithRelationInput[]
    cursor?: MatriculaSeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatriculaSeScalarFieldEnum | MatriculaSeScalarFieldEnum[]
  }

  /**
   * Estudante without action
   */
  export type EstudanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudante
     */
    select?: EstudanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudante
     */
    omit?: EstudanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudanteInclude<ExtArgs> | null
  }


  /**
   * Model Disciplina
   */

  export type AggregateDisciplina = {
    _count: DisciplinaCountAggregateOutputType | null
    _avg: DisciplinaAvgAggregateOutputType | null
    _sum: DisciplinaSumAggregateOutputType | null
    _min: DisciplinaMinAggregateOutputType | null
    _max: DisciplinaMaxAggregateOutputType | null
  }

  export type DisciplinaAvgAggregateOutputType = {
    id: number | null
    periodo: number | null
    qnt_total_aulas: number | null
    carga_horaria: number | null
    fk_professores_fk_usuarios_id: number | null
  }

  export type DisciplinaSumAggregateOutputType = {
    id: number | null
    periodo: number | null
    qnt_total_aulas: number | null
    carga_horaria: number | null
    fk_professores_fk_usuarios_id: number | null
  }

  export type DisciplinaMinAggregateOutputType = {
    id: number | null
    periodo: number | null
    turno: string | null
    nome: string | null
    qnt_total_aulas: number | null
    carga_horaria: number | null
    curso: string | null
    fk_professores_fk_usuarios_id: number | null
  }

  export type DisciplinaMaxAggregateOutputType = {
    id: number | null
    periodo: number | null
    turno: string | null
    nome: string | null
    qnt_total_aulas: number | null
    carga_horaria: number | null
    curso: string | null
    fk_professores_fk_usuarios_id: number | null
  }

  export type DisciplinaCountAggregateOutputType = {
    id: number
    periodo: number
    turno: number
    nome: number
    qnt_total_aulas: number
    carga_horaria: number
    curso: number
    fk_professores_fk_usuarios_id: number
    _all: number
  }


  export type DisciplinaAvgAggregateInputType = {
    id?: true
    periodo?: true
    qnt_total_aulas?: true
    carga_horaria?: true
    fk_professores_fk_usuarios_id?: true
  }

  export type DisciplinaSumAggregateInputType = {
    id?: true
    periodo?: true
    qnt_total_aulas?: true
    carga_horaria?: true
    fk_professores_fk_usuarios_id?: true
  }

  export type DisciplinaMinAggregateInputType = {
    id?: true
    periodo?: true
    turno?: true
    nome?: true
    qnt_total_aulas?: true
    carga_horaria?: true
    curso?: true
    fk_professores_fk_usuarios_id?: true
  }

  export type DisciplinaMaxAggregateInputType = {
    id?: true
    periodo?: true
    turno?: true
    nome?: true
    qnt_total_aulas?: true
    carga_horaria?: true
    curso?: true
    fk_professores_fk_usuarios_id?: true
  }

  export type DisciplinaCountAggregateInputType = {
    id?: true
    periodo?: true
    turno?: true
    nome?: true
    qnt_total_aulas?: true
    carga_horaria?: true
    curso?: true
    fk_professores_fk_usuarios_id?: true
    _all?: true
  }

  export type DisciplinaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disciplina to aggregate.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disciplinas
    **/
    _count?: true | DisciplinaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisciplinaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisciplinaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisciplinaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisciplinaMaxAggregateInputType
  }

  export type GetDisciplinaAggregateType<T extends DisciplinaAggregateArgs> = {
        [P in keyof T & keyof AggregateDisciplina]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisciplina[P]>
      : GetScalarType<T[P], AggregateDisciplina[P]>
  }




  export type DisciplinaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisciplinaWhereInput
    orderBy?: DisciplinaOrderByWithAggregationInput | DisciplinaOrderByWithAggregationInput[]
    by: DisciplinaScalarFieldEnum[] | DisciplinaScalarFieldEnum
    having?: DisciplinaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisciplinaCountAggregateInputType | true
    _avg?: DisciplinaAvgAggregateInputType
    _sum?: DisciplinaSumAggregateInputType
    _min?: DisciplinaMinAggregateInputType
    _max?: DisciplinaMaxAggregateInputType
  }

  export type DisciplinaGroupByOutputType = {
    id: number
    periodo: number | null
    turno: string | null
    nome: string
    qnt_total_aulas: number | null
    carga_horaria: number
    curso: string
    fk_professores_fk_usuarios_id: number
    _count: DisciplinaCountAggregateOutputType | null
    _avg: DisciplinaAvgAggregateOutputType | null
    _sum: DisciplinaSumAggregateOutputType | null
    _min: DisciplinaMinAggregateOutputType | null
    _max: DisciplinaMaxAggregateOutputType | null
  }

  type GetDisciplinaGroupByPayload<T extends DisciplinaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisciplinaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisciplinaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisciplinaGroupByOutputType[P]>
            : GetScalarType<T[P], DisciplinaGroupByOutputType[P]>
        }
      >
    >


  export type DisciplinaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    periodo?: boolean
    turno?: boolean
    nome?: boolean
    qnt_total_aulas?: boolean
    carga_horaria?: boolean
    curso?: boolean
    fk_professores_fk_usuarios_id?: boolean
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    matriculas?: boolean | Disciplina$matriculasArgs<ExtArgs>
    _count?: boolean | DisciplinaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplina"]>



  export type DisciplinaSelectScalar = {
    id?: boolean
    periodo?: boolean
    turno?: boolean
    nome?: boolean
    qnt_total_aulas?: boolean
    carga_horaria?: boolean
    curso?: boolean
    fk_professores_fk_usuarios_id?: boolean
  }

  export type DisciplinaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "periodo" | "turno" | "nome" | "qnt_total_aulas" | "carga_horaria" | "curso" | "fk_professores_fk_usuarios_id", ExtArgs["result"]["disciplina"]>
  export type DisciplinaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professor?: boolean | ProfessorDefaultArgs<ExtArgs>
    matriculas?: boolean | Disciplina$matriculasArgs<ExtArgs>
    _count?: boolean | DisciplinaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DisciplinaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disciplina"
    objects: {
      professor: Prisma.$ProfessorPayload<ExtArgs>
      matriculas: Prisma.$MatriculaSePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      periodo: number | null
      turno: string | null
      nome: string
      qnt_total_aulas: number | null
      carga_horaria: number
      curso: string
      fk_professores_fk_usuarios_id: number
    }, ExtArgs["result"]["disciplina"]>
    composites: {}
  }

  type DisciplinaGetPayload<S extends boolean | null | undefined | DisciplinaDefaultArgs> = $Result.GetResult<Prisma.$DisciplinaPayload, S>

  type DisciplinaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisciplinaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisciplinaCountAggregateInputType | true
    }

  export interface DisciplinaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Disciplina'], meta: { name: 'Disciplina' } }
    /**
     * Find zero or one Disciplina that matches the filter.
     * @param {DisciplinaFindUniqueArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisciplinaFindUniqueArgs>(args: SelectSubset<T, DisciplinaFindUniqueArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disciplina that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisciplinaFindUniqueOrThrowArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisciplinaFindUniqueOrThrowArgs>(args: SelectSubset<T, DisciplinaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disciplina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaFindFirstArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisciplinaFindFirstArgs>(args?: SelectSubset<T, DisciplinaFindFirstArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disciplina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaFindFirstOrThrowArgs} args - Arguments to find a Disciplina
     * @example
     * // Get one Disciplina
     * const disciplina = await prisma.disciplina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisciplinaFindFirstOrThrowArgs>(args?: SelectSubset<T, DisciplinaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disciplinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disciplinas
     * const disciplinas = await prisma.disciplina.findMany()
     * 
     * // Get first 10 Disciplinas
     * const disciplinas = await prisma.disciplina.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disciplinaWithIdOnly = await prisma.disciplina.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisciplinaFindManyArgs>(args?: SelectSubset<T, DisciplinaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disciplina.
     * @param {DisciplinaCreateArgs} args - Arguments to create a Disciplina.
     * @example
     * // Create one Disciplina
     * const Disciplina = await prisma.disciplina.create({
     *   data: {
     *     // ... data to create a Disciplina
     *   }
     * })
     * 
     */
    create<T extends DisciplinaCreateArgs>(args: SelectSubset<T, DisciplinaCreateArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disciplinas.
     * @param {DisciplinaCreateManyArgs} args - Arguments to create many Disciplinas.
     * @example
     * // Create many Disciplinas
     * const disciplina = await prisma.disciplina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisciplinaCreateManyArgs>(args?: SelectSubset<T, DisciplinaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Disciplina.
     * @param {DisciplinaDeleteArgs} args - Arguments to delete one Disciplina.
     * @example
     * // Delete one Disciplina
     * const Disciplina = await prisma.disciplina.delete({
     *   where: {
     *     // ... filter to delete one Disciplina
     *   }
     * })
     * 
     */
    delete<T extends DisciplinaDeleteArgs>(args: SelectSubset<T, DisciplinaDeleteArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disciplina.
     * @param {DisciplinaUpdateArgs} args - Arguments to update one Disciplina.
     * @example
     * // Update one Disciplina
     * const disciplina = await prisma.disciplina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisciplinaUpdateArgs>(args: SelectSubset<T, DisciplinaUpdateArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disciplinas.
     * @param {DisciplinaDeleteManyArgs} args - Arguments to filter Disciplinas to delete.
     * @example
     * // Delete a few Disciplinas
     * const { count } = await prisma.disciplina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisciplinaDeleteManyArgs>(args?: SelectSubset<T, DisciplinaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disciplinas
     * const disciplina = await prisma.disciplina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisciplinaUpdateManyArgs>(args: SelectSubset<T, DisciplinaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Disciplina.
     * @param {DisciplinaUpsertArgs} args - Arguments to update or create a Disciplina.
     * @example
     * // Update or create a Disciplina
     * const disciplina = await prisma.disciplina.upsert({
     *   create: {
     *     // ... data to create a Disciplina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disciplina we want to update
     *   }
     * })
     */
    upsert<T extends DisciplinaUpsertArgs>(args: SelectSubset<T, DisciplinaUpsertArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaCountArgs} args - Arguments to filter Disciplinas to count.
     * @example
     * // Count the number of Disciplinas
     * const count = await prisma.disciplina.count({
     *   where: {
     *     // ... the filter for the Disciplinas we want to count
     *   }
     * })
    **/
    count<T extends DisciplinaCountArgs>(
      args?: Subset<T, DisciplinaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisciplinaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disciplina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DisciplinaAggregateArgs>(args: Subset<T, DisciplinaAggregateArgs>): Prisma.PrismaPromise<GetDisciplinaAggregateType<T>>

    /**
     * Group by Disciplina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinaGroupByArgs} args - Group by arguments.
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
      T extends DisciplinaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisciplinaGroupByArgs['orderBy'] }
        : { orderBy?: DisciplinaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DisciplinaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisciplinaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Disciplina model
   */
  readonly fields: DisciplinaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Disciplina.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisciplinaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professor<T extends ProfessorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessorDefaultArgs<ExtArgs>>): Prisma__ProfessorClient<$Result.GetResult<Prisma.$ProfessorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    matriculas<T extends Disciplina$matriculasArgs<ExtArgs> = {}>(args?: Subset<T, Disciplina$matriculasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatriculaSePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Disciplina model
   */
  interface DisciplinaFieldRefs {
    readonly id: FieldRef<"Disciplina", 'Int'>
    readonly periodo: FieldRef<"Disciplina", 'Int'>
    readonly turno: FieldRef<"Disciplina", 'String'>
    readonly nome: FieldRef<"Disciplina", 'String'>
    readonly qnt_total_aulas: FieldRef<"Disciplina", 'Int'>
    readonly carga_horaria: FieldRef<"Disciplina", 'Float'>
    readonly curso: FieldRef<"Disciplina", 'String'>
    readonly fk_professores_fk_usuarios_id: FieldRef<"Disciplina", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Disciplina findUnique
   */
  export type DisciplinaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina findUniqueOrThrow
   */
  export type DisciplinaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina findFirst
   */
  export type DisciplinaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disciplinas.
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disciplinas.
     */
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * Disciplina findFirstOrThrow
   */
  export type DisciplinaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplina to fetch.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disciplinas.
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disciplinas.
     */
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * Disciplina findMany
   */
  export type DisciplinaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter, which Disciplinas to fetch.
     */
    where?: DisciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disciplinas to fetch.
     */
    orderBy?: DisciplinaOrderByWithRelationInput | DisciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disciplinas.
     */
    cursor?: DisciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disciplinas.
     */
    skip?: number
    distinct?: DisciplinaScalarFieldEnum | DisciplinaScalarFieldEnum[]
  }

  /**
   * Disciplina create
   */
  export type DisciplinaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * The data needed to create a Disciplina.
     */
    data: XOR<DisciplinaCreateInput, DisciplinaUncheckedCreateInput>
  }

  /**
   * Disciplina createMany
   */
  export type DisciplinaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disciplinas.
     */
    data: DisciplinaCreateManyInput | DisciplinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disciplina update
   */
  export type DisciplinaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * The data needed to update a Disciplina.
     */
    data: XOR<DisciplinaUpdateInput, DisciplinaUncheckedUpdateInput>
    /**
     * Choose, which Disciplina to update.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina updateMany
   */
  export type DisciplinaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disciplinas.
     */
    data: XOR<DisciplinaUpdateManyMutationInput, DisciplinaUncheckedUpdateManyInput>
    /**
     * Filter which Disciplinas to update
     */
    where?: DisciplinaWhereInput
    /**
     * Limit how many Disciplinas to update.
     */
    limit?: number
  }

  /**
   * Disciplina upsert
   */
  export type DisciplinaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * The filter to search for the Disciplina to update in case it exists.
     */
    where: DisciplinaWhereUniqueInput
    /**
     * In case the Disciplina found by the `where` argument doesn't exist, create a new Disciplina with this data.
     */
    create: XOR<DisciplinaCreateInput, DisciplinaUncheckedCreateInput>
    /**
     * In case the Disciplina was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisciplinaUpdateInput, DisciplinaUncheckedUpdateInput>
  }

  /**
   * Disciplina delete
   */
  export type DisciplinaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
    /**
     * Filter which Disciplina to delete.
     */
    where: DisciplinaWhereUniqueInput
  }

  /**
   * Disciplina deleteMany
   */
  export type DisciplinaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disciplinas to delete
     */
    where?: DisciplinaWhereInput
    /**
     * Limit how many Disciplinas to delete.
     */
    limit?: number
  }

  /**
   * Disciplina.matriculas
   */
  export type Disciplina$matriculasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatriculaSe
     */
    select?: MatriculaSeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatriculaSe
     */
    omit?: MatriculaSeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaSeInclude<ExtArgs> | null
    where?: MatriculaSeWhereInput
    orderBy?: MatriculaSeOrderByWithRelationInput | MatriculaSeOrderByWithRelationInput[]
    cursor?: MatriculaSeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatriculaSeScalarFieldEnum | MatriculaSeScalarFieldEnum[]
  }

  /**
   * Disciplina without action
   */
  export type DisciplinaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disciplina
     */
    select?: DisciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disciplina
     */
    omit?: DisciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisciplinaInclude<ExtArgs> | null
  }


  /**
   * Model JogoDaVelha
   */

  export type AggregateJogoDaVelha = {
    _count: JogoDaVelhaCountAggregateOutputType | null
    _avg: JogoDaVelhaAvgAggregateOutputType | null
    _sum: JogoDaVelhaSumAggregateOutputType | null
    _min: JogoDaVelhaMinAggregateOutputType | null
    _max: JogoDaVelhaMaxAggregateOutputType | null
  }

  export type JogoDaVelhaAvgAggregateOutputType = {
    id: number | null
    fk_usuarios_id: number | null
  }

  export type JogoDaVelhaSumAggregateOutputType = {
    id: number | null
    fk_usuarios_id: number | null
  }

  export type JogoDaVelhaMinAggregateOutputType = {
    id: number | null
    player1: string | null
    player2: string | null
    resultado: string | null
    data_jogo: Date | null
    fk_usuarios_id: number | null
  }

  export type JogoDaVelhaMaxAggregateOutputType = {
    id: number | null
    player1: string | null
    player2: string | null
    resultado: string | null
    data_jogo: Date | null
    fk_usuarios_id: number | null
  }

  export type JogoDaVelhaCountAggregateOutputType = {
    id: number
    player1: number
    player2: number
    resultado: number
    data_jogo: number
    fk_usuarios_id: number
    _all: number
  }


  export type JogoDaVelhaAvgAggregateInputType = {
    id?: true
    fk_usuarios_id?: true
  }

  export type JogoDaVelhaSumAggregateInputType = {
    id?: true
    fk_usuarios_id?: true
  }

  export type JogoDaVelhaMinAggregateInputType = {
    id?: true
    player1?: true
    player2?: true
    resultado?: true
    data_jogo?: true
    fk_usuarios_id?: true
  }

  export type JogoDaVelhaMaxAggregateInputType = {
    id?: true
    player1?: true
    player2?: true
    resultado?: true
    data_jogo?: true
    fk_usuarios_id?: true
  }

  export type JogoDaVelhaCountAggregateInputType = {
    id?: true
    player1?: true
    player2?: true
    resultado?: true
    data_jogo?: true
    fk_usuarios_id?: true
    _all?: true
  }

  export type JogoDaVelhaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JogoDaVelha to aggregate.
     */
    where?: JogoDaVelhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JogoDaVelhas to fetch.
     */
    orderBy?: JogoDaVelhaOrderByWithRelationInput | JogoDaVelhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JogoDaVelhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JogoDaVelhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JogoDaVelhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JogoDaVelhas
    **/
    _count?: true | JogoDaVelhaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JogoDaVelhaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JogoDaVelhaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JogoDaVelhaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JogoDaVelhaMaxAggregateInputType
  }

  export type GetJogoDaVelhaAggregateType<T extends JogoDaVelhaAggregateArgs> = {
        [P in keyof T & keyof AggregateJogoDaVelha]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJogoDaVelha[P]>
      : GetScalarType<T[P], AggregateJogoDaVelha[P]>
  }




  export type JogoDaVelhaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JogoDaVelhaWhereInput
    orderBy?: JogoDaVelhaOrderByWithAggregationInput | JogoDaVelhaOrderByWithAggregationInput[]
    by: JogoDaVelhaScalarFieldEnum[] | JogoDaVelhaScalarFieldEnum
    having?: JogoDaVelhaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JogoDaVelhaCountAggregateInputType | true
    _avg?: JogoDaVelhaAvgAggregateInputType
    _sum?: JogoDaVelhaSumAggregateInputType
    _min?: JogoDaVelhaMinAggregateInputType
    _max?: JogoDaVelhaMaxAggregateInputType
  }

  export type JogoDaVelhaGroupByOutputType = {
    id: number
    player1: string | null
    player2: string | null
    resultado: string | null
    data_jogo: Date | null
    fk_usuarios_id: number
    _count: JogoDaVelhaCountAggregateOutputType | null
    _avg: JogoDaVelhaAvgAggregateOutputType | null
    _sum: JogoDaVelhaSumAggregateOutputType | null
    _min: JogoDaVelhaMinAggregateOutputType | null
    _max: JogoDaVelhaMaxAggregateOutputType | null
  }

  type GetJogoDaVelhaGroupByPayload<T extends JogoDaVelhaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JogoDaVelhaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JogoDaVelhaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JogoDaVelhaGroupByOutputType[P]>
            : GetScalarType<T[P], JogoDaVelhaGroupByOutputType[P]>
        }
      >
    >


  export type JogoDaVelhaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player1?: boolean
    player2?: boolean
    resultado?: boolean
    data_jogo?: boolean
    fk_usuarios_id?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jogoDaVelha"]>



  export type JogoDaVelhaSelectScalar = {
    id?: boolean
    player1?: boolean
    player2?: boolean
    resultado?: boolean
    data_jogo?: boolean
    fk_usuarios_id?: boolean
  }

  export type JogoDaVelhaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "player1" | "player2" | "resultado" | "data_jogo" | "fk_usuarios_id", ExtArgs["result"]["jogoDaVelha"]>
  export type JogoDaVelhaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $JogoDaVelhaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JogoDaVelha"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      player1: string | null
      player2: string | null
      resultado: string | null
      data_jogo: Date | null
      fk_usuarios_id: number
    }, ExtArgs["result"]["jogoDaVelha"]>
    composites: {}
  }

  type JogoDaVelhaGetPayload<S extends boolean | null | undefined | JogoDaVelhaDefaultArgs> = $Result.GetResult<Prisma.$JogoDaVelhaPayload, S>

  type JogoDaVelhaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JogoDaVelhaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JogoDaVelhaCountAggregateInputType | true
    }

  export interface JogoDaVelhaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JogoDaVelha'], meta: { name: 'JogoDaVelha' } }
    /**
     * Find zero or one JogoDaVelha that matches the filter.
     * @param {JogoDaVelhaFindUniqueArgs} args - Arguments to find a JogoDaVelha
     * @example
     * // Get one JogoDaVelha
     * const jogoDaVelha = await prisma.jogoDaVelha.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JogoDaVelhaFindUniqueArgs>(args: SelectSubset<T, JogoDaVelhaFindUniqueArgs<ExtArgs>>): Prisma__JogoDaVelhaClient<$Result.GetResult<Prisma.$JogoDaVelhaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JogoDaVelha that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JogoDaVelhaFindUniqueOrThrowArgs} args - Arguments to find a JogoDaVelha
     * @example
     * // Get one JogoDaVelha
     * const jogoDaVelha = await prisma.jogoDaVelha.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JogoDaVelhaFindUniqueOrThrowArgs>(args: SelectSubset<T, JogoDaVelhaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JogoDaVelhaClient<$Result.GetResult<Prisma.$JogoDaVelhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JogoDaVelha that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoDaVelhaFindFirstArgs} args - Arguments to find a JogoDaVelha
     * @example
     * // Get one JogoDaVelha
     * const jogoDaVelha = await prisma.jogoDaVelha.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JogoDaVelhaFindFirstArgs>(args?: SelectSubset<T, JogoDaVelhaFindFirstArgs<ExtArgs>>): Prisma__JogoDaVelhaClient<$Result.GetResult<Prisma.$JogoDaVelhaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JogoDaVelha that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoDaVelhaFindFirstOrThrowArgs} args - Arguments to find a JogoDaVelha
     * @example
     * // Get one JogoDaVelha
     * const jogoDaVelha = await prisma.jogoDaVelha.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JogoDaVelhaFindFirstOrThrowArgs>(args?: SelectSubset<T, JogoDaVelhaFindFirstOrThrowArgs<ExtArgs>>): Prisma__JogoDaVelhaClient<$Result.GetResult<Prisma.$JogoDaVelhaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JogoDaVelhas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoDaVelhaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JogoDaVelhas
     * const jogoDaVelhas = await prisma.jogoDaVelha.findMany()
     * 
     * // Get first 10 JogoDaVelhas
     * const jogoDaVelhas = await prisma.jogoDaVelha.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jogoDaVelhaWithIdOnly = await prisma.jogoDaVelha.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JogoDaVelhaFindManyArgs>(args?: SelectSubset<T, JogoDaVelhaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JogoDaVelhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JogoDaVelha.
     * @param {JogoDaVelhaCreateArgs} args - Arguments to create a JogoDaVelha.
     * @example
     * // Create one JogoDaVelha
     * const JogoDaVelha = await prisma.jogoDaVelha.create({
     *   data: {
     *     // ... data to create a JogoDaVelha
     *   }
     * })
     * 
     */
    create<T extends JogoDaVelhaCreateArgs>(args: SelectSubset<T, JogoDaVelhaCreateArgs<ExtArgs>>): Prisma__JogoDaVelhaClient<$Result.GetResult<Prisma.$JogoDaVelhaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JogoDaVelhas.
     * @param {JogoDaVelhaCreateManyArgs} args - Arguments to create many JogoDaVelhas.
     * @example
     * // Create many JogoDaVelhas
     * const jogoDaVelha = await prisma.jogoDaVelha.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JogoDaVelhaCreateManyArgs>(args?: SelectSubset<T, JogoDaVelhaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a JogoDaVelha.
     * @param {JogoDaVelhaDeleteArgs} args - Arguments to delete one JogoDaVelha.
     * @example
     * // Delete one JogoDaVelha
     * const JogoDaVelha = await prisma.jogoDaVelha.delete({
     *   where: {
     *     // ... filter to delete one JogoDaVelha
     *   }
     * })
     * 
     */
    delete<T extends JogoDaVelhaDeleteArgs>(args: SelectSubset<T, JogoDaVelhaDeleteArgs<ExtArgs>>): Prisma__JogoDaVelhaClient<$Result.GetResult<Prisma.$JogoDaVelhaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JogoDaVelha.
     * @param {JogoDaVelhaUpdateArgs} args - Arguments to update one JogoDaVelha.
     * @example
     * // Update one JogoDaVelha
     * const jogoDaVelha = await prisma.jogoDaVelha.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JogoDaVelhaUpdateArgs>(args: SelectSubset<T, JogoDaVelhaUpdateArgs<ExtArgs>>): Prisma__JogoDaVelhaClient<$Result.GetResult<Prisma.$JogoDaVelhaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JogoDaVelhas.
     * @param {JogoDaVelhaDeleteManyArgs} args - Arguments to filter JogoDaVelhas to delete.
     * @example
     * // Delete a few JogoDaVelhas
     * const { count } = await prisma.jogoDaVelha.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JogoDaVelhaDeleteManyArgs>(args?: SelectSubset<T, JogoDaVelhaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JogoDaVelhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoDaVelhaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JogoDaVelhas
     * const jogoDaVelha = await prisma.jogoDaVelha.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JogoDaVelhaUpdateManyArgs>(args: SelectSubset<T, JogoDaVelhaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JogoDaVelha.
     * @param {JogoDaVelhaUpsertArgs} args - Arguments to update or create a JogoDaVelha.
     * @example
     * // Update or create a JogoDaVelha
     * const jogoDaVelha = await prisma.jogoDaVelha.upsert({
     *   create: {
     *     // ... data to create a JogoDaVelha
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JogoDaVelha we want to update
     *   }
     * })
     */
    upsert<T extends JogoDaVelhaUpsertArgs>(args: SelectSubset<T, JogoDaVelhaUpsertArgs<ExtArgs>>): Prisma__JogoDaVelhaClient<$Result.GetResult<Prisma.$JogoDaVelhaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JogoDaVelhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoDaVelhaCountArgs} args - Arguments to filter JogoDaVelhas to count.
     * @example
     * // Count the number of JogoDaVelhas
     * const count = await prisma.jogoDaVelha.count({
     *   where: {
     *     // ... the filter for the JogoDaVelhas we want to count
     *   }
     * })
    **/
    count<T extends JogoDaVelhaCountArgs>(
      args?: Subset<T, JogoDaVelhaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JogoDaVelhaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JogoDaVelha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoDaVelhaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JogoDaVelhaAggregateArgs>(args: Subset<T, JogoDaVelhaAggregateArgs>): Prisma.PrismaPromise<GetJogoDaVelhaAggregateType<T>>

    /**
     * Group by JogoDaVelha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JogoDaVelhaGroupByArgs} args - Group by arguments.
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
      T extends JogoDaVelhaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JogoDaVelhaGroupByArgs['orderBy'] }
        : { orderBy?: JogoDaVelhaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JogoDaVelhaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJogoDaVelhaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JogoDaVelha model
   */
  readonly fields: JogoDaVelhaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JogoDaVelha.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JogoDaVelhaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the JogoDaVelha model
   */
  interface JogoDaVelhaFieldRefs {
    readonly id: FieldRef<"JogoDaVelha", 'Int'>
    readonly player1: FieldRef<"JogoDaVelha", 'String'>
    readonly player2: FieldRef<"JogoDaVelha", 'String'>
    readonly resultado: FieldRef<"JogoDaVelha", 'String'>
    readonly data_jogo: FieldRef<"JogoDaVelha", 'DateTime'>
    readonly fk_usuarios_id: FieldRef<"JogoDaVelha", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * JogoDaVelha findUnique
   */
  export type JogoDaVelhaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogoDaVelha
     */
    select?: JogoDaVelhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JogoDaVelha
     */
    omit?: JogoDaVelhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoDaVelhaInclude<ExtArgs> | null
    /**
     * Filter, which JogoDaVelha to fetch.
     */
    where: JogoDaVelhaWhereUniqueInput
  }

  /**
   * JogoDaVelha findUniqueOrThrow
   */
  export type JogoDaVelhaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogoDaVelha
     */
    select?: JogoDaVelhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JogoDaVelha
     */
    omit?: JogoDaVelhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoDaVelhaInclude<ExtArgs> | null
    /**
     * Filter, which JogoDaVelha to fetch.
     */
    where: JogoDaVelhaWhereUniqueInput
  }

  /**
   * JogoDaVelha findFirst
   */
  export type JogoDaVelhaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogoDaVelha
     */
    select?: JogoDaVelhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JogoDaVelha
     */
    omit?: JogoDaVelhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoDaVelhaInclude<ExtArgs> | null
    /**
     * Filter, which JogoDaVelha to fetch.
     */
    where?: JogoDaVelhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JogoDaVelhas to fetch.
     */
    orderBy?: JogoDaVelhaOrderByWithRelationInput | JogoDaVelhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JogoDaVelhas.
     */
    cursor?: JogoDaVelhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JogoDaVelhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JogoDaVelhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JogoDaVelhas.
     */
    distinct?: JogoDaVelhaScalarFieldEnum | JogoDaVelhaScalarFieldEnum[]
  }

  /**
   * JogoDaVelha findFirstOrThrow
   */
  export type JogoDaVelhaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogoDaVelha
     */
    select?: JogoDaVelhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JogoDaVelha
     */
    omit?: JogoDaVelhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoDaVelhaInclude<ExtArgs> | null
    /**
     * Filter, which JogoDaVelha to fetch.
     */
    where?: JogoDaVelhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JogoDaVelhas to fetch.
     */
    orderBy?: JogoDaVelhaOrderByWithRelationInput | JogoDaVelhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JogoDaVelhas.
     */
    cursor?: JogoDaVelhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JogoDaVelhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JogoDaVelhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JogoDaVelhas.
     */
    distinct?: JogoDaVelhaScalarFieldEnum | JogoDaVelhaScalarFieldEnum[]
  }

  /**
   * JogoDaVelha findMany
   */
  export type JogoDaVelhaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogoDaVelha
     */
    select?: JogoDaVelhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JogoDaVelha
     */
    omit?: JogoDaVelhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoDaVelhaInclude<ExtArgs> | null
    /**
     * Filter, which JogoDaVelhas to fetch.
     */
    where?: JogoDaVelhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JogoDaVelhas to fetch.
     */
    orderBy?: JogoDaVelhaOrderByWithRelationInput | JogoDaVelhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JogoDaVelhas.
     */
    cursor?: JogoDaVelhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JogoDaVelhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JogoDaVelhas.
     */
    skip?: number
    distinct?: JogoDaVelhaScalarFieldEnum | JogoDaVelhaScalarFieldEnum[]
  }

  /**
   * JogoDaVelha create
   */
  export type JogoDaVelhaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogoDaVelha
     */
    select?: JogoDaVelhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JogoDaVelha
     */
    omit?: JogoDaVelhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoDaVelhaInclude<ExtArgs> | null
    /**
     * The data needed to create a JogoDaVelha.
     */
    data: XOR<JogoDaVelhaCreateInput, JogoDaVelhaUncheckedCreateInput>
  }

  /**
   * JogoDaVelha createMany
   */
  export type JogoDaVelhaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JogoDaVelhas.
     */
    data: JogoDaVelhaCreateManyInput | JogoDaVelhaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JogoDaVelha update
   */
  export type JogoDaVelhaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogoDaVelha
     */
    select?: JogoDaVelhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JogoDaVelha
     */
    omit?: JogoDaVelhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoDaVelhaInclude<ExtArgs> | null
    /**
     * The data needed to update a JogoDaVelha.
     */
    data: XOR<JogoDaVelhaUpdateInput, JogoDaVelhaUncheckedUpdateInput>
    /**
     * Choose, which JogoDaVelha to update.
     */
    where: JogoDaVelhaWhereUniqueInput
  }

  /**
   * JogoDaVelha updateMany
   */
  export type JogoDaVelhaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JogoDaVelhas.
     */
    data: XOR<JogoDaVelhaUpdateManyMutationInput, JogoDaVelhaUncheckedUpdateManyInput>
    /**
     * Filter which JogoDaVelhas to update
     */
    where?: JogoDaVelhaWhereInput
    /**
     * Limit how many JogoDaVelhas to update.
     */
    limit?: number
  }

  /**
   * JogoDaVelha upsert
   */
  export type JogoDaVelhaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogoDaVelha
     */
    select?: JogoDaVelhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JogoDaVelha
     */
    omit?: JogoDaVelhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoDaVelhaInclude<ExtArgs> | null
    /**
     * The filter to search for the JogoDaVelha to update in case it exists.
     */
    where: JogoDaVelhaWhereUniqueInput
    /**
     * In case the JogoDaVelha found by the `where` argument doesn't exist, create a new JogoDaVelha with this data.
     */
    create: XOR<JogoDaVelhaCreateInput, JogoDaVelhaUncheckedCreateInput>
    /**
     * In case the JogoDaVelha was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JogoDaVelhaUpdateInput, JogoDaVelhaUncheckedUpdateInput>
  }

  /**
   * JogoDaVelha delete
   */
  export type JogoDaVelhaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogoDaVelha
     */
    select?: JogoDaVelhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JogoDaVelha
     */
    omit?: JogoDaVelhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoDaVelhaInclude<ExtArgs> | null
    /**
     * Filter which JogoDaVelha to delete.
     */
    where: JogoDaVelhaWhereUniqueInput
  }

  /**
   * JogoDaVelha deleteMany
   */
  export type JogoDaVelhaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JogoDaVelhas to delete
     */
    where?: JogoDaVelhaWhereInput
    /**
     * Limit how many JogoDaVelhas to delete.
     */
    limit?: number
  }

  /**
   * JogoDaVelha without action
   */
  export type JogoDaVelhaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JogoDaVelha
     */
    select?: JogoDaVelhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JogoDaVelha
     */
    omit?: JogoDaVelhaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JogoDaVelhaInclude<ExtArgs> | null
  }


  /**
   * Model MatriculaSe
   */

  export type AggregateMatriculaSe = {
    _count: MatriculaSeCountAggregateOutputType | null
    _avg: MatriculaSeAvgAggregateOutputType | null
    _sum: MatriculaSeSumAggregateOutputType | null
    _min: MatriculaSeMinAggregateOutputType | null
    _max: MatriculaSeMaxAggregateOutputType | null
  }

  export type MatriculaSeAvgAggregateOutputType = {
    fk_disciplinas_id: number | null
    fk_estudantes_fk_usuarios_id: number | null
    n1: number | null
    n2: number | null
    media: number | null
    faltas: number | null
  }

  export type MatriculaSeSumAggregateOutputType = {
    fk_disciplinas_id: number | null
    fk_estudantes_fk_usuarios_id: number | null
    n1: number | null
    n2: number | null
    media: number | null
    faltas: number | null
  }

  export type MatriculaSeMinAggregateOutputType = {
    fk_disciplinas_id: number | null
    fk_estudantes_fk_usuarios_id: number | null
    n1: number | null
    n2: number | null
    media: number | null
    faltas: number | null
    situacao: string | null
  }

  export type MatriculaSeMaxAggregateOutputType = {
    fk_disciplinas_id: number | null
    fk_estudantes_fk_usuarios_id: number | null
    n1: number | null
    n2: number | null
    media: number | null
    faltas: number | null
    situacao: string | null
  }

  export type MatriculaSeCountAggregateOutputType = {
    fk_disciplinas_id: number
    fk_estudantes_fk_usuarios_id: number
    n1: number
    n2: number
    media: number
    faltas: number
    situacao: number
    _all: number
  }


  export type MatriculaSeAvgAggregateInputType = {
    fk_disciplinas_id?: true
    fk_estudantes_fk_usuarios_id?: true
    n1?: true
    n2?: true
    media?: true
    faltas?: true
  }

  export type MatriculaSeSumAggregateInputType = {
    fk_disciplinas_id?: true
    fk_estudantes_fk_usuarios_id?: true
    n1?: true
    n2?: true
    media?: true
    faltas?: true
  }

  export type MatriculaSeMinAggregateInputType = {
    fk_disciplinas_id?: true
    fk_estudantes_fk_usuarios_id?: true
    n1?: true
    n2?: true
    media?: true
    faltas?: true
    situacao?: true
  }

  export type MatriculaSeMaxAggregateInputType = {
    fk_disciplinas_id?: true
    fk_estudantes_fk_usuarios_id?: true
    n1?: true
    n2?: true
    media?: true
    faltas?: true
    situacao?: true
  }

  export type MatriculaSeCountAggregateInputType = {
    fk_disciplinas_id?: true
    fk_estudantes_fk_usuarios_id?: true
    n1?: true
    n2?: true
    media?: true
    faltas?: true
    situacao?: true
    _all?: true
  }

  export type MatriculaSeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatriculaSe to aggregate.
     */
    where?: MatriculaSeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatriculaSes to fetch.
     */
    orderBy?: MatriculaSeOrderByWithRelationInput | MatriculaSeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatriculaSeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatriculaSes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatriculaSes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatriculaSes
    **/
    _count?: true | MatriculaSeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatriculaSeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatriculaSeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatriculaSeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatriculaSeMaxAggregateInputType
  }

  export type GetMatriculaSeAggregateType<T extends MatriculaSeAggregateArgs> = {
        [P in keyof T & keyof AggregateMatriculaSe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatriculaSe[P]>
      : GetScalarType<T[P], AggregateMatriculaSe[P]>
  }




  export type MatriculaSeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatriculaSeWhereInput
    orderBy?: MatriculaSeOrderByWithAggregationInput | MatriculaSeOrderByWithAggregationInput[]
    by: MatriculaSeScalarFieldEnum[] | MatriculaSeScalarFieldEnum
    having?: MatriculaSeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatriculaSeCountAggregateInputType | true
    _avg?: MatriculaSeAvgAggregateInputType
    _sum?: MatriculaSeSumAggregateInputType
    _min?: MatriculaSeMinAggregateInputType
    _max?: MatriculaSeMaxAggregateInputType
  }

  export type MatriculaSeGroupByOutputType = {
    fk_disciplinas_id: number
    fk_estudantes_fk_usuarios_id: number
    n1: number | null
    n2: number | null
    media: number | null
    faltas: number | null
    situacao: string | null
    _count: MatriculaSeCountAggregateOutputType | null
    _avg: MatriculaSeAvgAggregateOutputType | null
    _sum: MatriculaSeSumAggregateOutputType | null
    _min: MatriculaSeMinAggregateOutputType | null
    _max: MatriculaSeMaxAggregateOutputType | null
  }

  type GetMatriculaSeGroupByPayload<T extends MatriculaSeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatriculaSeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatriculaSeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatriculaSeGroupByOutputType[P]>
            : GetScalarType<T[P], MatriculaSeGroupByOutputType[P]>
        }
      >
    >


  export type MatriculaSeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fk_disciplinas_id?: boolean
    fk_estudantes_fk_usuarios_id?: boolean
    n1?: boolean
    n2?: boolean
    media?: boolean
    faltas?: boolean
    situacao?: boolean
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
    estudante?: boolean | EstudanteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matriculaSe"]>



  export type MatriculaSeSelectScalar = {
    fk_disciplinas_id?: boolean
    fk_estudantes_fk_usuarios_id?: boolean
    n1?: boolean
    n2?: boolean
    media?: boolean
    faltas?: boolean
    situacao?: boolean
  }

  export type MatriculaSeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"fk_disciplinas_id" | "fk_estudantes_fk_usuarios_id" | "n1" | "n2" | "media" | "faltas" | "situacao", ExtArgs["result"]["matriculaSe"]>
  export type MatriculaSeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplina?: boolean | DisciplinaDefaultArgs<ExtArgs>
    estudante?: boolean | EstudanteDefaultArgs<ExtArgs>
  }

  export type $MatriculaSePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatriculaSe"
    objects: {
      disciplina: Prisma.$DisciplinaPayload<ExtArgs>
      estudante: Prisma.$EstudantePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      fk_disciplinas_id: number
      fk_estudantes_fk_usuarios_id: number
      n1: number | null
      n2: number | null
      media: number | null
      faltas: number | null
      situacao: string | null
    }, ExtArgs["result"]["matriculaSe"]>
    composites: {}
  }

  type MatriculaSeGetPayload<S extends boolean | null | undefined | MatriculaSeDefaultArgs> = $Result.GetResult<Prisma.$MatriculaSePayload, S>

  type MatriculaSeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatriculaSeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatriculaSeCountAggregateInputType | true
    }

  export interface MatriculaSeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatriculaSe'], meta: { name: 'MatriculaSe' } }
    /**
     * Find zero or one MatriculaSe that matches the filter.
     * @param {MatriculaSeFindUniqueArgs} args - Arguments to find a MatriculaSe
     * @example
     * // Get one MatriculaSe
     * const matriculaSe = await prisma.matriculaSe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatriculaSeFindUniqueArgs>(args: SelectSubset<T, MatriculaSeFindUniqueArgs<ExtArgs>>): Prisma__MatriculaSeClient<$Result.GetResult<Prisma.$MatriculaSePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MatriculaSe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatriculaSeFindUniqueOrThrowArgs} args - Arguments to find a MatriculaSe
     * @example
     * // Get one MatriculaSe
     * const matriculaSe = await prisma.matriculaSe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatriculaSeFindUniqueOrThrowArgs>(args: SelectSubset<T, MatriculaSeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatriculaSeClient<$Result.GetResult<Prisma.$MatriculaSePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatriculaSe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaSeFindFirstArgs} args - Arguments to find a MatriculaSe
     * @example
     * // Get one MatriculaSe
     * const matriculaSe = await prisma.matriculaSe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatriculaSeFindFirstArgs>(args?: SelectSubset<T, MatriculaSeFindFirstArgs<ExtArgs>>): Prisma__MatriculaSeClient<$Result.GetResult<Prisma.$MatriculaSePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatriculaSe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaSeFindFirstOrThrowArgs} args - Arguments to find a MatriculaSe
     * @example
     * // Get one MatriculaSe
     * const matriculaSe = await prisma.matriculaSe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatriculaSeFindFirstOrThrowArgs>(args?: SelectSubset<T, MatriculaSeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatriculaSeClient<$Result.GetResult<Prisma.$MatriculaSePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MatriculaSes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaSeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatriculaSes
     * const matriculaSes = await prisma.matriculaSe.findMany()
     * 
     * // Get first 10 MatriculaSes
     * const matriculaSes = await prisma.matriculaSe.findMany({ take: 10 })
     * 
     * // Only select the `fk_disciplinas_id`
     * const matriculaSeWithFk_disciplinas_idOnly = await prisma.matriculaSe.findMany({ select: { fk_disciplinas_id: true } })
     * 
     */
    findMany<T extends MatriculaSeFindManyArgs>(args?: SelectSubset<T, MatriculaSeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatriculaSePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MatriculaSe.
     * @param {MatriculaSeCreateArgs} args - Arguments to create a MatriculaSe.
     * @example
     * // Create one MatriculaSe
     * const MatriculaSe = await prisma.matriculaSe.create({
     *   data: {
     *     // ... data to create a MatriculaSe
     *   }
     * })
     * 
     */
    create<T extends MatriculaSeCreateArgs>(args: SelectSubset<T, MatriculaSeCreateArgs<ExtArgs>>): Prisma__MatriculaSeClient<$Result.GetResult<Prisma.$MatriculaSePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MatriculaSes.
     * @param {MatriculaSeCreateManyArgs} args - Arguments to create many MatriculaSes.
     * @example
     * // Create many MatriculaSes
     * const matriculaSe = await prisma.matriculaSe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatriculaSeCreateManyArgs>(args?: SelectSubset<T, MatriculaSeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MatriculaSe.
     * @param {MatriculaSeDeleteArgs} args - Arguments to delete one MatriculaSe.
     * @example
     * // Delete one MatriculaSe
     * const MatriculaSe = await prisma.matriculaSe.delete({
     *   where: {
     *     // ... filter to delete one MatriculaSe
     *   }
     * })
     * 
     */
    delete<T extends MatriculaSeDeleteArgs>(args: SelectSubset<T, MatriculaSeDeleteArgs<ExtArgs>>): Prisma__MatriculaSeClient<$Result.GetResult<Prisma.$MatriculaSePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MatriculaSe.
     * @param {MatriculaSeUpdateArgs} args - Arguments to update one MatriculaSe.
     * @example
     * // Update one MatriculaSe
     * const matriculaSe = await prisma.matriculaSe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatriculaSeUpdateArgs>(args: SelectSubset<T, MatriculaSeUpdateArgs<ExtArgs>>): Prisma__MatriculaSeClient<$Result.GetResult<Prisma.$MatriculaSePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MatriculaSes.
     * @param {MatriculaSeDeleteManyArgs} args - Arguments to filter MatriculaSes to delete.
     * @example
     * // Delete a few MatriculaSes
     * const { count } = await prisma.matriculaSe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatriculaSeDeleteManyArgs>(args?: SelectSubset<T, MatriculaSeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatriculaSes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaSeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatriculaSes
     * const matriculaSe = await prisma.matriculaSe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatriculaSeUpdateManyArgs>(args: SelectSubset<T, MatriculaSeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MatriculaSe.
     * @param {MatriculaSeUpsertArgs} args - Arguments to update or create a MatriculaSe.
     * @example
     * // Update or create a MatriculaSe
     * const matriculaSe = await prisma.matriculaSe.upsert({
     *   create: {
     *     // ... data to create a MatriculaSe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatriculaSe we want to update
     *   }
     * })
     */
    upsert<T extends MatriculaSeUpsertArgs>(args: SelectSubset<T, MatriculaSeUpsertArgs<ExtArgs>>): Prisma__MatriculaSeClient<$Result.GetResult<Prisma.$MatriculaSePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MatriculaSes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaSeCountArgs} args - Arguments to filter MatriculaSes to count.
     * @example
     * // Count the number of MatriculaSes
     * const count = await prisma.matriculaSe.count({
     *   where: {
     *     // ... the filter for the MatriculaSes we want to count
     *   }
     * })
    **/
    count<T extends MatriculaSeCountArgs>(
      args?: Subset<T, MatriculaSeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatriculaSeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatriculaSe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaSeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatriculaSeAggregateArgs>(args: Subset<T, MatriculaSeAggregateArgs>): Prisma.PrismaPromise<GetMatriculaSeAggregateType<T>>

    /**
     * Group by MatriculaSe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculaSeGroupByArgs} args - Group by arguments.
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
      T extends MatriculaSeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatriculaSeGroupByArgs['orderBy'] }
        : { orderBy?: MatriculaSeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatriculaSeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatriculaSeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatriculaSe model
   */
  readonly fields: MatriculaSeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatriculaSe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatriculaSeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    disciplina<T extends DisciplinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisciplinaDefaultArgs<ExtArgs>>): Prisma__DisciplinaClient<$Result.GetResult<Prisma.$DisciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    estudante<T extends EstudanteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstudanteDefaultArgs<ExtArgs>>): Prisma__EstudanteClient<$Result.GetResult<Prisma.$EstudantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MatriculaSe model
   */
  interface MatriculaSeFieldRefs {
    readonly fk_disciplinas_id: FieldRef<"MatriculaSe", 'Int'>
    readonly fk_estudantes_fk_usuarios_id: FieldRef<"MatriculaSe", 'Int'>
    readonly n1: FieldRef<"MatriculaSe", 'Float'>
    readonly n2: FieldRef<"MatriculaSe", 'Float'>
    readonly media: FieldRef<"MatriculaSe", 'Float'>
    readonly faltas: FieldRef<"MatriculaSe", 'Int'>
    readonly situacao: FieldRef<"MatriculaSe", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MatriculaSe findUnique
   */
  export type MatriculaSeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatriculaSe
     */
    select?: MatriculaSeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatriculaSe
     */
    omit?: MatriculaSeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaSeInclude<ExtArgs> | null
    /**
     * Filter, which MatriculaSe to fetch.
     */
    where: MatriculaSeWhereUniqueInput
  }

  /**
   * MatriculaSe findUniqueOrThrow
   */
  export type MatriculaSeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatriculaSe
     */
    select?: MatriculaSeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatriculaSe
     */
    omit?: MatriculaSeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaSeInclude<ExtArgs> | null
    /**
     * Filter, which MatriculaSe to fetch.
     */
    where: MatriculaSeWhereUniqueInput
  }

  /**
   * MatriculaSe findFirst
   */
  export type MatriculaSeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatriculaSe
     */
    select?: MatriculaSeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatriculaSe
     */
    omit?: MatriculaSeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaSeInclude<ExtArgs> | null
    /**
     * Filter, which MatriculaSe to fetch.
     */
    where?: MatriculaSeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatriculaSes to fetch.
     */
    orderBy?: MatriculaSeOrderByWithRelationInput | MatriculaSeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatriculaSes.
     */
    cursor?: MatriculaSeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatriculaSes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatriculaSes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatriculaSes.
     */
    distinct?: MatriculaSeScalarFieldEnum | MatriculaSeScalarFieldEnum[]
  }

  /**
   * MatriculaSe findFirstOrThrow
   */
  export type MatriculaSeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatriculaSe
     */
    select?: MatriculaSeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatriculaSe
     */
    omit?: MatriculaSeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaSeInclude<ExtArgs> | null
    /**
     * Filter, which MatriculaSe to fetch.
     */
    where?: MatriculaSeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatriculaSes to fetch.
     */
    orderBy?: MatriculaSeOrderByWithRelationInput | MatriculaSeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatriculaSes.
     */
    cursor?: MatriculaSeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatriculaSes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatriculaSes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatriculaSes.
     */
    distinct?: MatriculaSeScalarFieldEnum | MatriculaSeScalarFieldEnum[]
  }

  /**
   * MatriculaSe findMany
   */
  export type MatriculaSeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatriculaSe
     */
    select?: MatriculaSeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatriculaSe
     */
    omit?: MatriculaSeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaSeInclude<ExtArgs> | null
    /**
     * Filter, which MatriculaSes to fetch.
     */
    where?: MatriculaSeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatriculaSes to fetch.
     */
    orderBy?: MatriculaSeOrderByWithRelationInput | MatriculaSeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatriculaSes.
     */
    cursor?: MatriculaSeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatriculaSes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatriculaSes.
     */
    skip?: number
    distinct?: MatriculaSeScalarFieldEnum | MatriculaSeScalarFieldEnum[]
  }

  /**
   * MatriculaSe create
   */
  export type MatriculaSeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatriculaSe
     */
    select?: MatriculaSeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatriculaSe
     */
    omit?: MatriculaSeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaSeInclude<ExtArgs> | null
    /**
     * The data needed to create a MatriculaSe.
     */
    data: XOR<MatriculaSeCreateInput, MatriculaSeUncheckedCreateInput>
  }

  /**
   * MatriculaSe createMany
   */
  export type MatriculaSeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatriculaSes.
     */
    data: MatriculaSeCreateManyInput | MatriculaSeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MatriculaSe update
   */
  export type MatriculaSeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatriculaSe
     */
    select?: MatriculaSeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatriculaSe
     */
    omit?: MatriculaSeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaSeInclude<ExtArgs> | null
    /**
     * The data needed to update a MatriculaSe.
     */
    data: XOR<MatriculaSeUpdateInput, MatriculaSeUncheckedUpdateInput>
    /**
     * Choose, which MatriculaSe to update.
     */
    where: MatriculaSeWhereUniqueInput
  }

  /**
   * MatriculaSe updateMany
   */
  export type MatriculaSeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatriculaSes.
     */
    data: XOR<MatriculaSeUpdateManyMutationInput, MatriculaSeUncheckedUpdateManyInput>
    /**
     * Filter which MatriculaSes to update
     */
    where?: MatriculaSeWhereInput
    /**
     * Limit how many MatriculaSes to update.
     */
    limit?: number
  }

  /**
   * MatriculaSe upsert
   */
  export type MatriculaSeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatriculaSe
     */
    select?: MatriculaSeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatriculaSe
     */
    omit?: MatriculaSeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaSeInclude<ExtArgs> | null
    /**
     * The filter to search for the MatriculaSe to update in case it exists.
     */
    where: MatriculaSeWhereUniqueInput
    /**
     * In case the MatriculaSe found by the `where` argument doesn't exist, create a new MatriculaSe with this data.
     */
    create: XOR<MatriculaSeCreateInput, MatriculaSeUncheckedCreateInput>
    /**
     * In case the MatriculaSe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatriculaSeUpdateInput, MatriculaSeUncheckedUpdateInput>
  }

  /**
   * MatriculaSe delete
   */
  export type MatriculaSeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatriculaSe
     */
    select?: MatriculaSeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatriculaSe
     */
    omit?: MatriculaSeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaSeInclude<ExtArgs> | null
    /**
     * Filter which MatriculaSe to delete.
     */
    where: MatriculaSeWhereUniqueInput
  }

  /**
   * MatriculaSe deleteMany
   */
  export type MatriculaSeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatriculaSes to delete
     */
    where?: MatriculaSeWhereInput
    /**
     * Limit how many MatriculaSes to delete.
     */
    limit?: number
  }

  /**
   * MatriculaSe without action
   */
  export type MatriculaSeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatriculaSe
     */
    select?: MatriculaSeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatriculaSe
     */
    omit?: MatriculaSeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatriculaSeInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    cpf: 'cpf',
    foto: 'foto',
    email: 'email',
    data_nascimento: 'data_nascimento',
    nome: 'nome',
    senha: 'senha'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ProfessorScalarFieldEnum: {
    fk_usuarios_id: 'fk_usuarios_id',
    siape: 'siape'
  };

  export type ProfessorScalarFieldEnum = (typeof ProfessorScalarFieldEnum)[keyof typeof ProfessorScalarFieldEnum]


  export const EstudanteScalarFieldEnum: {
    fk_usuarios_id: 'fk_usuarios_id',
    ra: 'ra'
  };

  export type EstudanteScalarFieldEnum = (typeof EstudanteScalarFieldEnum)[keyof typeof EstudanteScalarFieldEnum]


  export const DisciplinaScalarFieldEnum: {
    id: 'id',
    periodo: 'periodo',
    turno: 'turno',
    nome: 'nome',
    qnt_total_aulas: 'qnt_total_aulas',
    carga_horaria: 'carga_horaria',
    curso: 'curso',
    fk_professores_fk_usuarios_id: 'fk_professores_fk_usuarios_id'
  };

  export type DisciplinaScalarFieldEnum = (typeof DisciplinaScalarFieldEnum)[keyof typeof DisciplinaScalarFieldEnum]


  export const JogoDaVelhaScalarFieldEnum: {
    id: 'id',
    player1: 'player1',
    player2: 'player2',
    resultado: 'resultado',
    data_jogo: 'data_jogo',
    fk_usuarios_id: 'fk_usuarios_id'
  };

  export type JogoDaVelhaScalarFieldEnum = (typeof JogoDaVelhaScalarFieldEnum)[keyof typeof JogoDaVelhaScalarFieldEnum]


  export const MatriculaSeScalarFieldEnum: {
    fk_disciplinas_id: 'fk_disciplinas_id',
    fk_estudantes_fk_usuarios_id: 'fk_estudantes_fk_usuarios_id',
    n1: 'n1',
    n2: 'n2',
    media: 'media',
    faltas: 'faltas',
    situacao: 'situacao'
  };

  export type MatriculaSeScalarFieldEnum = (typeof MatriculaSeScalarFieldEnum)[keyof typeof MatriculaSeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UsuarioOrderByRelevanceFieldEnum: {
    cpf: 'cpf',
    foto: 'foto',
    email: 'email',
    nome: 'nome',
    senha: 'senha'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const DisciplinaOrderByRelevanceFieldEnum: {
    turno: 'turno',
    nome: 'nome',
    curso: 'curso'
  };

  export type DisciplinaOrderByRelevanceFieldEnum = (typeof DisciplinaOrderByRelevanceFieldEnum)[keyof typeof DisciplinaOrderByRelevanceFieldEnum]


  export const JogoDaVelhaOrderByRelevanceFieldEnum: {
    player1: 'player1',
    player2: 'player2',
    resultado: 'resultado'
  };

  export type JogoDaVelhaOrderByRelevanceFieldEnum = (typeof JogoDaVelhaOrderByRelevanceFieldEnum)[keyof typeof JogoDaVelhaOrderByRelevanceFieldEnum]


  export const MatriculaSeOrderByRelevanceFieldEnum: {
    situacao: 'situacao'
  };

  export type MatriculaSeOrderByRelevanceFieldEnum = (typeof MatriculaSeOrderByRelevanceFieldEnum)[keyof typeof MatriculaSeOrderByRelevanceFieldEnum]


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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    cpf?: StringFilter<"Usuario"> | string
    foto?: StringNullableFilter<"Usuario"> | string | null
    email?: StringFilter<"Usuario"> | string
    data_nascimento?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    professor?: XOR<ProfessorNullableScalarRelationFilter, ProfessorWhereInput> | null
    estudante?: XOR<EstudanteNullableScalarRelationFilter, EstudanteWhereInput> | null
    jogos?: JogoDaVelhaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    cpf?: SortOrder
    foto?: SortOrderInput | SortOrder
    email?: SortOrder
    data_nascimento?: SortOrderInput | SortOrder
    nome?: SortOrder
    senha?: SortOrder
    professor?: ProfessorOrderByWithRelationInput
    estudante?: EstudanteOrderByWithRelationInput
    jogos?: JogoDaVelhaOrderByRelationAggregateInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    cpf?: StringFilter<"Usuario"> | string
    foto?: StringNullableFilter<"Usuario"> | string | null
    email?: StringFilter<"Usuario"> | string
    data_nascimento?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    professor?: XOR<ProfessorNullableScalarRelationFilter, ProfessorWhereInput> | null
    estudante?: XOR<EstudanteNullableScalarRelationFilter, EstudanteWhereInput> | null
    jogos?: JogoDaVelhaListRelationFilter
  }, "id">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    cpf?: SortOrder
    foto?: SortOrderInput | SortOrder
    email?: SortOrder
    data_nascimento?: SortOrderInput | SortOrder
    nome?: SortOrder
    senha?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    cpf?: StringWithAggregatesFilter<"Usuario"> | string
    foto?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    email?: StringWithAggregatesFilter<"Usuario"> | string
    data_nascimento?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type ProfessorWhereInput = {
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    fk_usuarios_id?: IntFilter<"Professor"> | number
    siape?: IntFilter<"Professor"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    disciplinas?: DisciplinaListRelationFilter
  }

  export type ProfessorOrderByWithRelationInput = {
    fk_usuarios_id?: SortOrder
    siape?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    disciplinas?: DisciplinaOrderByRelationAggregateInput
  }

  export type ProfessorWhereUniqueInput = Prisma.AtLeast<{
    fk_usuarios_id?: number
    siape?: number
    AND?: ProfessorWhereInput | ProfessorWhereInput[]
    OR?: ProfessorWhereInput[]
    NOT?: ProfessorWhereInput | ProfessorWhereInput[]
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    disciplinas?: DisciplinaListRelationFilter
  }, "fk_usuarios_id" | "siape">

  export type ProfessorOrderByWithAggregationInput = {
    fk_usuarios_id?: SortOrder
    siape?: SortOrder
    _count?: ProfessorCountOrderByAggregateInput
    _avg?: ProfessorAvgOrderByAggregateInput
    _max?: ProfessorMaxOrderByAggregateInput
    _min?: ProfessorMinOrderByAggregateInput
    _sum?: ProfessorSumOrderByAggregateInput
  }

  export type ProfessorScalarWhereWithAggregatesInput = {
    AND?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    OR?: ProfessorScalarWhereWithAggregatesInput[]
    NOT?: ProfessorScalarWhereWithAggregatesInput | ProfessorScalarWhereWithAggregatesInput[]
    fk_usuarios_id?: IntWithAggregatesFilter<"Professor"> | number
    siape?: IntWithAggregatesFilter<"Professor"> | number
  }

  export type EstudanteWhereInput = {
    AND?: EstudanteWhereInput | EstudanteWhereInput[]
    OR?: EstudanteWhereInput[]
    NOT?: EstudanteWhereInput | EstudanteWhereInput[]
    fk_usuarios_id?: IntFilter<"Estudante"> | number
    ra?: IntFilter<"Estudante"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    matriculas?: MatriculaSeListRelationFilter
  }

  export type EstudanteOrderByWithRelationInput = {
    fk_usuarios_id?: SortOrder
    ra?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    matriculas?: MatriculaSeOrderByRelationAggregateInput
  }

  export type EstudanteWhereUniqueInput = Prisma.AtLeast<{
    fk_usuarios_id?: number
    ra?: number
    AND?: EstudanteWhereInput | EstudanteWhereInput[]
    OR?: EstudanteWhereInput[]
    NOT?: EstudanteWhereInput | EstudanteWhereInput[]
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    matriculas?: MatriculaSeListRelationFilter
  }, "fk_usuarios_id" | "ra">

  export type EstudanteOrderByWithAggregationInput = {
    fk_usuarios_id?: SortOrder
    ra?: SortOrder
    _count?: EstudanteCountOrderByAggregateInput
    _avg?: EstudanteAvgOrderByAggregateInput
    _max?: EstudanteMaxOrderByAggregateInput
    _min?: EstudanteMinOrderByAggregateInput
    _sum?: EstudanteSumOrderByAggregateInput
  }

  export type EstudanteScalarWhereWithAggregatesInput = {
    AND?: EstudanteScalarWhereWithAggregatesInput | EstudanteScalarWhereWithAggregatesInput[]
    OR?: EstudanteScalarWhereWithAggregatesInput[]
    NOT?: EstudanteScalarWhereWithAggregatesInput | EstudanteScalarWhereWithAggregatesInput[]
    fk_usuarios_id?: IntWithAggregatesFilter<"Estudante"> | number
    ra?: IntWithAggregatesFilter<"Estudante"> | number
  }

  export type DisciplinaWhereInput = {
    AND?: DisciplinaWhereInput | DisciplinaWhereInput[]
    OR?: DisciplinaWhereInput[]
    NOT?: DisciplinaWhereInput | DisciplinaWhereInput[]
    id?: IntFilter<"Disciplina"> | number
    periodo?: IntNullableFilter<"Disciplina"> | number | null
    turno?: StringNullableFilter<"Disciplina"> | string | null
    nome?: StringFilter<"Disciplina"> | string
    qnt_total_aulas?: IntNullableFilter<"Disciplina"> | number | null
    carga_horaria?: FloatFilter<"Disciplina"> | number
    curso?: StringFilter<"Disciplina"> | string
    fk_professores_fk_usuarios_id?: IntFilter<"Disciplina"> | number
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    matriculas?: MatriculaSeListRelationFilter
  }

  export type DisciplinaOrderByWithRelationInput = {
    id?: SortOrder
    periodo?: SortOrderInput | SortOrder
    turno?: SortOrderInput | SortOrder
    nome?: SortOrder
    qnt_total_aulas?: SortOrderInput | SortOrder
    carga_horaria?: SortOrder
    curso?: SortOrder
    fk_professores_fk_usuarios_id?: SortOrder
    professor?: ProfessorOrderByWithRelationInput
    matriculas?: MatriculaSeOrderByRelationAggregateInput
    _relevance?: DisciplinaOrderByRelevanceInput
  }

  export type DisciplinaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DisciplinaWhereInput | DisciplinaWhereInput[]
    OR?: DisciplinaWhereInput[]
    NOT?: DisciplinaWhereInput | DisciplinaWhereInput[]
    periodo?: IntNullableFilter<"Disciplina"> | number | null
    turno?: StringNullableFilter<"Disciplina"> | string | null
    nome?: StringFilter<"Disciplina"> | string
    qnt_total_aulas?: IntNullableFilter<"Disciplina"> | number | null
    carga_horaria?: FloatFilter<"Disciplina"> | number
    curso?: StringFilter<"Disciplina"> | string
    fk_professores_fk_usuarios_id?: IntFilter<"Disciplina"> | number
    professor?: XOR<ProfessorScalarRelationFilter, ProfessorWhereInput>
    matriculas?: MatriculaSeListRelationFilter
  }, "id">

  export type DisciplinaOrderByWithAggregationInput = {
    id?: SortOrder
    periodo?: SortOrderInput | SortOrder
    turno?: SortOrderInput | SortOrder
    nome?: SortOrder
    qnt_total_aulas?: SortOrderInput | SortOrder
    carga_horaria?: SortOrder
    curso?: SortOrder
    fk_professores_fk_usuarios_id?: SortOrder
    _count?: DisciplinaCountOrderByAggregateInput
    _avg?: DisciplinaAvgOrderByAggregateInput
    _max?: DisciplinaMaxOrderByAggregateInput
    _min?: DisciplinaMinOrderByAggregateInput
    _sum?: DisciplinaSumOrderByAggregateInput
  }

  export type DisciplinaScalarWhereWithAggregatesInput = {
    AND?: DisciplinaScalarWhereWithAggregatesInput | DisciplinaScalarWhereWithAggregatesInput[]
    OR?: DisciplinaScalarWhereWithAggregatesInput[]
    NOT?: DisciplinaScalarWhereWithAggregatesInput | DisciplinaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Disciplina"> | number
    periodo?: IntNullableWithAggregatesFilter<"Disciplina"> | number | null
    turno?: StringNullableWithAggregatesFilter<"Disciplina"> | string | null
    nome?: StringWithAggregatesFilter<"Disciplina"> | string
    qnt_total_aulas?: IntNullableWithAggregatesFilter<"Disciplina"> | number | null
    carga_horaria?: FloatWithAggregatesFilter<"Disciplina"> | number
    curso?: StringWithAggregatesFilter<"Disciplina"> | string
    fk_professores_fk_usuarios_id?: IntWithAggregatesFilter<"Disciplina"> | number
  }

  export type JogoDaVelhaWhereInput = {
    AND?: JogoDaVelhaWhereInput | JogoDaVelhaWhereInput[]
    OR?: JogoDaVelhaWhereInput[]
    NOT?: JogoDaVelhaWhereInput | JogoDaVelhaWhereInput[]
    id?: IntFilter<"JogoDaVelha"> | number
    player1?: StringNullableFilter<"JogoDaVelha"> | string | null
    player2?: StringNullableFilter<"JogoDaVelha"> | string | null
    resultado?: StringNullableFilter<"JogoDaVelha"> | string | null
    data_jogo?: DateTimeNullableFilter<"JogoDaVelha"> | Date | string | null
    fk_usuarios_id?: IntFilter<"JogoDaVelha"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type JogoDaVelhaOrderByWithRelationInput = {
    id?: SortOrder
    player1?: SortOrderInput | SortOrder
    player2?: SortOrderInput | SortOrder
    resultado?: SortOrderInput | SortOrder
    data_jogo?: SortOrderInput | SortOrder
    fk_usuarios_id?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    _relevance?: JogoDaVelhaOrderByRelevanceInput
  }

  export type JogoDaVelhaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JogoDaVelhaWhereInput | JogoDaVelhaWhereInput[]
    OR?: JogoDaVelhaWhereInput[]
    NOT?: JogoDaVelhaWhereInput | JogoDaVelhaWhereInput[]
    player1?: StringNullableFilter<"JogoDaVelha"> | string | null
    player2?: StringNullableFilter<"JogoDaVelha"> | string | null
    resultado?: StringNullableFilter<"JogoDaVelha"> | string | null
    data_jogo?: DateTimeNullableFilter<"JogoDaVelha"> | Date | string | null
    fk_usuarios_id?: IntFilter<"JogoDaVelha"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type JogoDaVelhaOrderByWithAggregationInput = {
    id?: SortOrder
    player1?: SortOrderInput | SortOrder
    player2?: SortOrderInput | SortOrder
    resultado?: SortOrderInput | SortOrder
    data_jogo?: SortOrderInput | SortOrder
    fk_usuarios_id?: SortOrder
    _count?: JogoDaVelhaCountOrderByAggregateInput
    _avg?: JogoDaVelhaAvgOrderByAggregateInput
    _max?: JogoDaVelhaMaxOrderByAggregateInput
    _min?: JogoDaVelhaMinOrderByAggregateInput
    _sum?: JogoDaVelhaSumOrderByAggregateInput
  }

  export type JogoDaVelhaScalarWhereWithAggregatesInput = {
    AND?: JogoDaVelhaScalarWhereWithAggregatesInput | JogoDaVelhaScalarWhereWithAggregatesInput[]
    OR?: JogoDaVelhaScalarWhereWithAggregatesInput[]
    NOT?: JogoDaVelhaScalarWhereWithAggregatesInput | JogoDaVelhaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JogoDaVelha"> | number
    player1?: StringNullableWithAggregatesFilter<"JogoDaVelha"> | string | null
    player2?: StringNullableWithAggregatesFilter<"JogoDaVelha"> | string | null
    resultado?: StringNullableWithAggregatesFilter<"JogoDaVelha"> | string | null
    data_jogo?: DateTimeNullableWithAggregatesFilter<"JogoDaVelha"> | Date | string | null
    fk_usuarios_id?: IntWithAggregatesFilter<"JogoDaVelha"> | number
  }

  export type MatriculaSeWhereInput = {
    AND?: MatriculaSeWhereInput | MatriculaSeWhereInput[]
    OR?: MatriculaSeWhereInput[]
    NOT?: MatriculaSeWhereInput | MatriculaSeWhereInput[]
    fk_disciplinas_id?: IntFilter<"MatriculaSe"> | number
    fk_estudantes_fk_usuarios_id?: IntFilter<"MatriculaSe"> | number
    n1?: FloatNullableFilter<"MatriculaSe"> | number | null
    n2?: FloatNullableFilter<"MatriculaSe"> | number | null
    media?: FloatNullableFilter<"MatriculaSe"> | number | null
    faltas?: IntNullableFilter<"MatriculaSe"> | number | null
    situacao?: StringNullableFilter<"MatriculaSe"> | string | null
    disciplina?: XOR<DisciplinaScalarRelationFilter, DisciplinaWhereInput>
    estudante?: XOR<EstudanteScalarRelationFilter, EstudanteWhereInput>
  }

  export type MatriculaSeOrderByWithRelationInput = {
    fk_disciplinas_id?: SortOrder
    fk_estudantes_fk_usuarios_id?: SortOrder
    n1?: SortOrderInput | SortOrder
    n2?: SortOrderInput | SortOrder
    media?: SortOrderInput | SortOrder
    faltas?: SortOrderInput | SortOrder
    situacao?: SortOrderInput | SortOrder
    disciplina?: DisciplinaOrderByWithRelationInput
    estudante?: EstudanteOrderByWithRelationInput
    _relevance?: MatriculaSeOrderByRelevanceInput
  }

  export type MatriculaSeWhereUniqueInput = Prisma.AtLeast<{
    fk_disciplinas_id_fk_estudantes_fk_usuarios_id?: MatriculaSeFk_disciplinas_idFk_estudantes_fk_usuarios_idCompoundUniqueInput
    AND?: MatriculaSeWhereInput | MatriculaSeWhereInput[]
    OR?: MatriculaSeWhereInput[]
    NOT?: MatriculaSeWhereInput | MatriculaSeWhereInput[]
    fk_disciplinas_id?: IntFilter<"MatriculaSe"> | number
    fk_estudantes_fk_usuarios_id?: IntFilter<"MatriculaSe"> | number
    n1?: FloatNullableFilter<"MatriculaSe"> | number | null
    n2?: FloatNullableFilter<"MatriculaSe"> | number | null
    media?: FloatNullableFilter<"MatriculaSe"> | number | null
    faltas?: IntNullableFilter<"MatriculaSe"> | number | null
    situacao?: StringNullableFilter<"MatriculaSe"> | string | null
    disciplina?: XOR<DisciplinaScalarRelationFilter, DisciplinaWhereInput>
    estudante?: XOR<EstudanteScalarRelationFilter, EstudanteWhereInput>
  }, "fk_disciplinas_id_fk_estudantes_fk_usuarios_id">

  export type MatriculaSeOrderByWithAggregationInput = {
    fk_disciplinas_id?: SortOrder
    fk_estudantes_fk_usuarios_id?: SortOrder
    n1?: SortOrderInput | SortOrder
    n2?: SortOrderInput | SortOrder
    media?: SortOrderInput | SortOrder
    faltas?: SortOrderInput | SortOrder
    situacao?: SortOrderInput | SortOrder
    _count?: MatriculaSeCountOrderByAggregateInput
    _avg?: MatriculaSeAvgOrderByAggregateInput
    _max?: MatriculaSeMaxOrderByAggregateInput
    _min?: MatriculaSeMinOrderByAggregateInput
    _sum?: MatriculaSeSumOrderByAggregateInput
  }

  export type MatriculaSeScalarWhereWithAggregatesInput = {
    AND?: MatriculaSeScalarWhereWithAggregatesInput | MatriculaSeScalarWhereWithAggregatesInput[]
    OR?: MatriculaSeScalarWhereWithAggregatesInput[]
    NOT?: MatriculaSeScalarWhereWithAggregatesInput | MatriculaSeScalarWhereWithAggregatesInput[]
    fk_disciplinas_id?: IntWithAggregatesFilter<"MatriculaSe"> | number
    fk_estudantes_fk_usuarios_id?: IntWithAggregatesFilter<"MatriculaSe"> | number
    n1?: FloatNullableWithAggregatesFilter<"MatriculaSe"> | number | null
    n2?: FloatNullableWithAggregatesFilter<"MatriculaSe"> | number | null
    media?: FloatNullableWithAggregatesFilter<"MatriculaSe"> | number | null
    faltas?: IntNullableWithAggregatesFilter<"MatriculaSe"> | number | null
    situacao?: StringNullableWithAggregatesFilter<"MatriculaSe"> | string | null
  }

  export type UsuarioCreateInput = {
    cpf: string
    foto?: string | null
    email: string
    data_nascimento?: Date | string | null
    nome: string
    senha: string
    professor?: ProfessorCreateNestedOneWithoutUsuarioInput
    estudante?: EstudanteCreateNestedOneWithoutUsuarioInput
    jogos?: JogoDaVelhaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    cpf: string
    foto?: string | null
    email: string
    data_nascimento?: Date | string | null
    nome: string
    senha: string
    professor?: ProfessorUncheckedCreateNestedOneWithoutUsuarioInput
    estudante?: EstudanteUncheckedCreateNestedOneWithoutUsuarioInput
    jogos?: JogoDaVelhaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    professor?: ProfessorUpdateOneWithoutUsuarioNestedInput
    estudante?: EstudanteUpdateOneWithoutUsuarioNestedInput
    jogos?: JogoDaVelhaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    professor?: ProfessorUncheckedUpdateOneWithoutUsuarioNestedInput
    estudante?: EstudanteUncheckedUpdateOneWithoutUsuarioNestedInput
    jogos?: JogoDaVelhaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    cpf: string
    foto?: string | null
    email: string
    data_nascimento?: Date | string | null
    nome: string
    senha: string
  }

  export type UsuarioUpdateManyMutationInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessorCreateInput = {
    siape: number
    usuario: UsuarioCreateNestedOneWithoutProfessorInput
    disciplinas?: DisciplinaCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateInput = {
    fk_usuarios_id: number
    siape: number
    disciplinas?: DisciplinaUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUpdateInput = {
    siape?: IntFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneRequiredWithoutProfessorNestedInput
    disciplinas?: DisciplinaUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateInput = {
    fk_usuarios_id?: IntFieldUpdateOperationsInput | number
    siape?: IntFieldUpdateOperationsInput | number
    disciplinas?: DisciplinaUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorCreateManyInput = {
    fk_usuarios_id: number
    siape: number
  }

  export type ProfessorUpdateManyMutationInput = {
    siape?: IntFieldUpdateOperationsInput | number
  }

  export type ProfessorUncheckedUpdateManyInput = {
    fk_usuarios_id?: IntFieldUpdateOperationsInput | number
    siape?: IntFieldUpdateOperationsInput | number
  }

  export type EstudanteCreateInput = {
    ra: number
    usuario: UsuarioCreateNestedOneWithoutEstudanteInput
    matriculas?: MatriculaSeCreateNestedManyWithoutEstudanteInput
  }

  export type EstudanteUncheckedCreateInput = {
    fk_usuarios_id: number
    ra: number
    matriculas?: MatriculaSeUncheckedCreateNestedManyWithoutEstudanteInput
  }

  export type EstudanteUpdateInput = {
    ra?: IntFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneRequiredWithoutEstudanteNestedInput
    matriculas?: MatriculaSeUpdateManyWithoutEstudanteNestedInput
  }

  export type EstudanteUncheckedUpdateInput = {
    fk_usuarios_id?: IntFieldUpdateOperationsInput | number
    ra?: IntFieldUpdateOperationsInput | number
    matriculas?: MatriculaSeUncheckedUpdateManyWithoutEstudanteNestedInput
  }

  export type EstudanteCreateManyInput = {
    fk_usuarios_id: number
    ra: number
  }

  export type EstudanteUpdateManyMutationInput = {
    ra?: IntFieldUpdateOperationsInput | number
  }

  export type EstudanteUncheckedUpdateManyInput = {
    fk_usuarios_id?: IntFieldUpdateOperationsInput | number
    ra?: IntFieldUpdateOperationsInput | number
  }

  export type DisciplinaCreateInput = {
    periodo?: number | null
    turno?: string | null
    nome: string
    qnt_total_aulas?: number | null
    carga_horaria: number
    curso: string
    professor: ProfessorCreateNestedOneWithoutDisciplinasInput
    matriculas?: MatriculaSeCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaUncheckedCreateInput = {
    id?: number
    periodo?: number | null
    turno?: string | null
    nome: string
    qnt_total_aulas?: number | null
    carga_horaria: number
    curso: string
    fk_professores_fk_usuarios_id: number
    matriculas?: MatriculaSeUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaUpdateInput = {
    periodo?: NullableIntFieldUpdateOperationsInput | number | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    qnt_total_aulas?: NullableIntFieldUpdateOperationsInput | number | null
    carga_horaria?: FloatFieldUpdateOperationsInput | number
    curso?: StringFieldUpdateOperationsInput | string
    professor?: ProfessorUpdateOneRequiredWithoutDisciplinasNestedInput
    matriculas?: MatriculaSeUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    periodo?: NullableIntFieldUpdateOperationsInput | number | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    qnt_total_aulas?: NullableIntFieldUpdateOperationsInput | number | null
    carga_horaria?: FloatFieldUpdateOperationsInput | number
    curso?: StringFieldUpdateOperationsInput | string
    fk_professores_fk_usuarios_id?: IntFieldUpdateOperationsInput | number
    matriculas?: MatriculaSeUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaCreateManyInput = {
    id?: number
    periodo?: number | null
    turno?: string | null
    nome: string
    qnt_total_aulas?: number | null
    carga_horaria: number
    curso: string
    fk_professores_fk_usuarios_id: number
  }

  export type DisciplinaUpdateManyMutationInput = {
    periodo?: NullableIntFieldUpdateOperationsInput | number | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    qnt_total_aulas?: NullableIntFieldUpdateOperationsInput | number | null
    carga_horaria?: FloatFieldUpdateOperationsInput | number
    curso?: StringFieldUpdateOperationsInput | string
  }

  export type DisciplinaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    periodo?: NullableIntFieldUpdateOperationsInput | number | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    qnt_total_aulas?: NullableIntFieldUpdateOperationsInput | number | null
    carga_horaria?: FloatFieldUpdateOperationsInput | number
    curso?: StringFieldUpdateOperationsInput | string
    fk_professores_fk_usuarios_id?: IntFieldUpdateOperationsInput | number
  }

  export type JogoDaVelhaCreateInput = {
    player1?: string | null
    player2?: string | null
    resultado?: string | null
    data_jogo?: Date | string | null
    usuario: UsuarioCreateNestedOneWithoutJogosInput
  }

  export type JogoDaVelhaUncheckedCreateInput = {
    id?: number
    player1?: string | null
    player2?: string | null
    resultado?: string | null
    data_jogo?: Date | string | null
    fk_usuarios_id: number
  }

  export type JogoDaVelhaUpdateInput = {
    player1?: NullableStringFieldUpdateOperationsInput | string | null
    player2?: NullableStringFieldUpdateOperationsInput | string | null
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
    data_jogo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutJogosNestedInput
  }

  export type JogoDaVelhaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    player1?: NullableStringFieldUpdateOperationsInput | string | null
    player2?: NullableStringFieldUpdateOperationsInput | string | null
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
    data_jogo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fk_usuarios_id?: IntFieldUpdateOperationsInput | number
  }

  export type JogoDaVelhaCreateManyInput = {
    id?: number
    player1?: string | null
    player2?: string | null
    resultado?: string | null
    data_jogo?: Date | string | null
    fk_usuarios_id: number
  }

  export type JogoDaVelhaUpdateManyMutationInput = {
    player1?: NullableStringFieldUpdateOperationsInput | string | null
    player2?: NullableStringFieldUpdateOperationsInput | string | null
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
    data_jogo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JogoDaVelhaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    player1?: NullableStringFieldUpdateOperationsInput | string | null
    player2?: NullableStringFieldUpdateOperationsInput | string | null
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
    data_jogo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fk_usuarios_id?: IntFieldUpdateOperationsInput | number
  }

  export type MatriculaSeCreateInput = {
    n1?: number | null
    n2?: number | null
    media?: number | null
    faltas?: number | null
    situacao?: string | null
    disciplina: DisciplinaCreateNestedOneWithoutMatriculasInput
    estudante: EstudanteCreateNestedOneWithoutMatriculasInput
  }

  export type MatriculaSeUncheckedCreateInput = {
    fk_disciplinas_id: number
    fk_estudantes_fk_usuarios_id: number
    n1?: number | null
    n2?: number | null
    media?: number | null
    faltas?: number | null
    situacao?: string | null
  }

  export type MatriculaSeUpdateInput = {
    n1?: NullableFloatFieldUpdateOperationsInput | number | null
    n2?: NullableFloatFieldUpdateOperationsInput | number | null
    media?: NullableFloatFieldUpdateOperationsInput | number | null
    faltas?: NullableIntFieldUpdateOperationsInput | number | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    disciplina?: DisciplinaUpdateOneRequiredWithoutMatriculasNestedInput
    estudante?: EstudanteUpdateOneRequiredWithoutMatriculasNestedInput
  }

  export type MatriculaSeUncheckedUpdateInput = {
    fk_disciplinas_id?: IntFieldUpdateOperationsInput | number
    fk_estudantes_fk_usuarios_id?: IntFieldUpdateOperationsInput | number
    n1?: NullableFloatFieldUpdateOperationsInput | number | null
    n2?: NullableFloatFieldUpdateOperationsInput | number | null
    media?: NullableFloatFieldUpdateOperationsInput | number | null
    faltas?: NullableIntFieldUpdateOperationsInput | number | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatriculaSeCreateManyInput = {
    fk_disciplinas_id: number
    fk_estudantes_fk_usuarios_id: number
    n1?: number | null
    n2?: number | null
    media?: number | null
    faltas?: number | null
    situacao?: string | null
  }

  export type MatriculaSeUpdateManyMutationInput = {
    n1?: NullableFloatFieldUpdateOperationsInput | number | null
    n2?: NullableFloatFieldUpdateOperationsInput | number | null
    media?: NullableFloatFieldUpdateOperationsInput | number | null
    faltas?: NullableIntFieldUpdateOperationsInput | number | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatriculaSeUncheckedUpdateManyInput = {
    fk_disciplinas_id?: IntFieldUpdateOperationsInput | number
    fk_estudantes_fk_usuarios_id?: IntFieldUpdateOperationsInput | number
    n1?: NullableFloatFieldUpdateOperationsInput | number | null
    n2?: NullableFloatFieldUpdateOperationsInput | number | null
    media?: NullableFloatFieldUpdateOperationsInput | number | null
    faltas?: NullableIntFieldUpdateOperationsInput | number | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ProfessorNullableScalarRelationFilter = {
    is?: ProfessorWhereInput | null
    isNot?: ProfessorWhereInput | null
  }

  export type EstudanteNullableScalarRelationFilter = {
    is?: EstudanteWhereInput | null
    isNot?: EstudanteWhereInput | null
  }

  export type JogoDaVelhaListRelationFilter = {
    every?: JogoDaVelhaWhereInput
    some?: JogoDaVelhaWhereInput
    none?: JogoDaVelhaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JogoDaVelhaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    foto?: SortOrder
    email?: SortOrder
    data_nascimento?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    foto?: SortOrder
    email?: SortOrder
    data_nascimento?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    foto?: SortOrder
    email?: SortOrder
    data_nascimento?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type DisciplinaListRelationFilter = {
    every?: DisciplinaWhereInput
    some?: DisciplinaWhereInput
    none?: DisciplinaWhereInput
  }

  export type DisciplinaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfessorCountOrderByAggregateInput = {
    fk_usuarios_id?: SortOrder
    siape?: SortOrder
  }

  export type ProfessorAvgOrderByAggregateInput = {
    fk_usuarios_id?: SortOrder
    siape?: SortOrder
  }

  export type ProfessorMaxOrderByAggregateInput = {
    fk_usuarios_id?: SortOrder
    siape?: SortOrder
  }

  export type ProfessorMinOrderByAggregateInput = {
    fk_usuarios_id?: SortOrder
    siape?: SortOrder
  }

  export type ProfessorSumOrderByAggregateInput = {
    fk_usuarios_id?: SortOrder
    siape?: SortOrder
  }

  export type MatriculaSeListRelationFilter = {
    every?: MatriculaSeWhereInput
    some?: MatriculaSeWhereInput
    none?: MatriculaSeWhereInput
  }

  export type MatriculaSeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstudanteCountOrderByAggregateInput = {
    fk_usuarios_id?: SortOrder
    ra?: SortOrder
  }

  export type EstudanteAvgOrderByAggregateInput = {
    fk_usuarios_id?: SortOrder
    ra?: SortOrder
  }

  export type EstudanteMaxOrderByAggregateInput = {
    fk_usuarios_id?: SortOrder
    ra?: SortOrder
  }

  export type EstudanteMinOrderByAggregateInput = {
    fk_usuarios_id?: SortOrder
    ra?: SortOrder
  }

  export type EstudanteSumOrderByAggregateInput = {
    fk_usuarios_id?: SortOrder
    ra?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProfessorScalarRelationFilter = {
    is?: ProfessorWhereInput
    isNot?: ProfessorWhereInput
  }

  export type DisciplinaOrderByRelevanceInput = {
    fields: DisciplinaOrderByRelevanceFieldEnum | DisciplinaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DisciplinaCountOrderByAggregateInput = {
    id?: SortOrder
    periodo?: SortOrder
    turno?: SortOrder
    nome?: SortOrder
    qnt_total_aulas?: SortOrder
    carga_horaria?: SortOrder
    curso?: SortOrder
    fk_professores_fk_usuarios_id?: SortOrder
  }

  export type DisciplinaAvgOrderByAggregateInput = {
    id?: SortOrder
    periodo?: SortOrder
    qnt_total_aulas?: SortOrder
    carga_horaria?: SortOrder
    fk_professores_fk_usuarios_id?: SortOrder
  }

  export type DisciplinaMaxOrderByAggregateInput = {
    id?: SortOrder
    periodo?: SortOrder
    turno?: SortOrder
    nome?: SortOrder
    qnt_total_aulas?: SortOrder
    carga_horaria?: SortOrder
    curso?: SortOrder
    fk_professores_fk_usuarios_id?: SortOrder
  }

  export type DisciplinaMinOrderByAggregateInput = {
    id?: SortOrder
    periodo?: SortOrder
    turno?: SortOrder
    nome?: SortOrder
    qnt_total_aulas?: SortOrder
    carga_horaria?: SortOrder
    curso?: SortOrder
    fk_professores_fk_usuarios_id?: SortOrder
  }

  export type DisciplinaSumOrderByAggregateInput = {
    id?: SortOrder
    periodo?: SortOrder
    qnt_total_aulas?: SortOrder
    carga_horaria?: SortOrder
    fk_professores_fk_usuarios_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type JogoDaVelhaOrderByRelevanceInput = {
    fields: JogoDaVelhaOrderByRelevanceFieldEnum | JogoDaVelhaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type JogoDaVelhaCountOrderByAggregateInput = {
    id?: SortOrder
    player1?: SortOrder
    player2?: SortOrder
    resultado?: SortOrder
    data_jogo?: SortOrder
    fk_usuarios_id?: SortOrder
  }

  export type JogoDaVelhaAvgOrderByAggregateInput = {
    id?: SortOrder
    fk_usuarios_id?: SortOrder
  }

  export type JogoDaVelhaMaxOrderByAggregateInput = {
    id?: SortOrder
    player1?: SortOrder
    player2?: SortOrder
    resultado?: SortOrder
    data_jogo?: SortOrder
    fk_usuarios_id?: SortOrder
  }

  export type JogoDaVelhaMinOrderByAggregateInput = {
    id?: SortOrder
    player1?: SortOrder
    player2?: SortOrder
    resultado?: SortOrder
    data_jogo?: SortOrder
    fk_usuarios_id?: SortOrder
  }

  export type JogoDaVelhaSumOrderByAggregateInput = {
    id?: SortOrder
    fk_usuarios_id?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DisciplinaScalarRelationFilter = {
    is?: DisciplinaWhereInput
    isNot?: DisciplinaWhereInput
  }

  export type EstudanteScalarRelationFilter = {
    is?: EstudanteWhereInput
    isNot?: EstudanteWhereInput
  }

  export type MatriculaSeOrderByRelevanceInput = {
    fields: MatriculaSeOrderByRelevanceFieldEnum | MatriculaSeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MatriculaSeFk_disciplinas_idFk_estudantes_fk_usuarios_idCompoundUniqueInput = {
    fk_disciplinas_id: number
    fk_estudantes_fk_usuarios_id: number
  }

  export type MatriculaSeCountOrderByAggregateInput = {
    fk_disciplinas_id?: SortOrder
    fk_estudantes_fk_usuarios_id?: SortOrder
    n1?: SortOrder
    n2?: SortOrder
    media?: SortOrder
    faltas?: SortOrder
    situacao?: SortOrder
  }

  export type MatriculaSeAvgOrderByAggregateInput = {
    fk_disciplinas_id?: SortOrder
    fk_estudantes_fk_usuarios_id?: SortOrder
    n1?: SortOrder
    n2?: SortOrder
    media?: SortOrder
    faltas?: SortOrder
  }

  export type MatriculaSeMaxOrderByAggregateInput = {
    fk_disciplinas_id?: SortOrder
    fk_estudantes_fk_usuarios_id?: SortOrder
    n1?: SortOrder
    n2?: SortOrder
    media?: SortOrder
    faltas?: SortOrder
    situacao?: SortOrder
  }

  export type MatriculaSeMinOrderByAggregateInput = {
    fk_disciplinas_id?: SortOrder
    fk_estudantes_fk_usuarios_id?: SortOrder
    n1?: SortOrder
    n2?: SortOrder
    media?: SortOrder
    faltas?: SortOrder
    situacao?: SortOrder
  }

  export type MatriculaSeSumOrderByAggregateInput = {
    fk_disciplinas_id?: SortOrder
    fk_estudantes_fk_usuarios_id?: SortOrder
    n1?: SortOrder
    n2?: SortOrder
    media?: SortOrder
    faltas?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ProfessorCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<ProfessorCreateWithoutUsuarioInput, ProfessorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutUsuarioInput
    connect?: ProfessorWhereUniqueInput
  }

  export type EstudanteCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<EstudanteCreateWithoutUsuarioInput, EstudanteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: EstudanteCreateOrConnectWithoutUsuarioInput
    connect?: EstudanteWhereUniqueInput
  }

  export type JogoDaVelhaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<JogoDaVelhaCreateWithoutUsuarioInput, JogoDaVelhaUncheckedCreateWithoutUsuarioInput> | JogoDaVelhaCreateWithoutUsuarioInput[] | JogoDaVelhaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: JogoDaVelhaCreateOrConnectWithoutUsuarioInput | JogoDaVelhaCreateOrConnectWithoutUsuarioInput[]
    createMany?: JogoDaVelhaCreateManyUsuarioInputEnvelope
    connect?: JogoDaVelhaWhereUniqueInput | JogoDaVelhaWhereUniqueInput[]
  }

  export type ProfessorUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<ProfessorCreateWithoutUsuarioInput, ProfessorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutUsuarioInput
    connect?: ProfessorWhereUniqueInput
  }

  export type EstudanteUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<EstudanteCreateWithoutUsuarioInput, EstudanteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: EstudanteCreateOrConnectWithoutUsuarioInput
    connect?: EstudanteWhereUniqueInput
  }

  export type JogoDaVelhaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<JogoDaVelhaCreateWithoutUsuarioInput, JogoDaVelhaUncheckedCreateWithoutUsuarioInput> | JogoDaVelhaCreateWithoutUsuarioInput[] | JogoDaVelhaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: JogoDaVelhaCreateOrConnectWithoutUsuarioInput | JogoDaVelhaCreateOrConnectWithoutUsuarioInput[]
    createMany?: JogoDaVelhaCreateManyUsuarioInputEnvelope
    connect?: JogoDaVelhaWhereUniqueInput | JogoDaVelhaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProfessorUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<ProfessorCreateWithoutUsuarioInput, ProfessorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutUsuarioInput
    upsert?: ProfessorUpsertWithoutUsuarioInput
    disconnect?: ProfessorWhereInput | boolean
    delete?: ProfessorWhereInput | boolean
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutUsuarioInput, ProfessorUpdateWithoutUsuarioInput>, ProfessorUncheckedUpdateWithoutUsuarioInput>
  }

  export type EstudanteUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<EstudanteCreateWithoutUsuarioInput, EstudanteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: EstudanteCreateOrConnectWithoutUsuarioInput
    upsert?: EstudanteUpsertWithoutUsuarioInput
    disconnect?: EstudanteWhereInput | boolean
    delete?: EstudanteWhereInput | boolean
    connect?: EstudanteWhereUniqueInput
    update?: XOR<XOR<EstudanteUpdateToOneWithWhereWithoutUsuarioInput, EstudanteUpdateWithoutUsuarioInput>, EstudanteUncheckedUpdateWithoutUsuarioInput>
  }

  export type JogoDaVelhaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<JogoDaVelhaCreateWithoutUsuarioInput, JogoDaVelhaUncheckedCreateWithoutUsuarioInput> | JogoDaVelhaCreateWithoutUsuarioInput[] | JogoDaVelhaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: JogoDaVelhaCreateOrConnectWithoutUsuarioInput | JogoDaVelhaCreateOrConnectWithoutUsuarioInput[]
    upsert?: JogoDaVelhaUpsertWithWhereUniqueWithoutUsuarioInput | JogoDaVelhaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: JogoDaVelhaCreateManyUsuarioInputEnvelope
    set?: JogoDaVelhaWhereUniqueInput | JogoDaVelhaWhereUniqueInput[]
    disconnect?: JogoDaVelhaWhereUniqueInput | JogoDaVelhaWhereUniqueInput[]
    delete?: JogoDaVelhaWhereUniqueInput | JogoDaVelhaWhereUniqueInput[]
    connect?: JogoDaVelhaWhereUniqueInput | JogoDaVelhaWhereUniqueInput[]
    update?: JogoDaVelhaUpdateWithWhereUniqueWithoutUsuarioInput | JogoDaVelhaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: JogoDaVelhaUpdateManyWithWhereWithoutUsuarioInput | JogoDaVelhaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: JogoDaVelhaScalarWhereInput | JogoDaVelhaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfessorUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<ProfessorCreateWithoutUsuarioInput, ProfessorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutUsuarioInput
    upsert?: ProfessorUpsertWithoutUsuarioInput
    disconnect?: ProfessorWhereInput | boolean
    delete?: ProfessorWhereInput | boolean
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutUsuarioInput, ProfessorUpdateWithoutUsuarioInput>, ProfessorUncheckedUpdateWithoutUsuarioInput>
  }

  export type EstudanteUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<EstudanteCreateWithoutUsuarioInput, EstudanteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: EstudanteCreateOrConnectWithoutUsuarioInput
    upsert?: EstudanteUpsertWithoutUsuarioInput
    disconnect?: EstudanteWhereInput | boolean
    delete?: EstudanteWhereInput | boolean
    connect?: EstudanteWhereUniqueInput
    update?: XOR<XOR<EstudanteUpdateToOneWithWhereWithoutUsuarioInput, EstudanteUpdateWithoutUsuarioInput>, EstudanteUncheckedUpdateWithoutUsuarioInput>
  }

  export type JogoDaVelhaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<JogoDaVelhaCreateWithoutUsuarioInput, JogoDaVelhaUncheckedCreateWithoutUsuarioInput> | JogoDaVelhaCreateWithoutUsuarioInput[] | JogoDaVelhaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: JogoDaVelhaCreateOrConnectWithoutUsuarioInput | JogoDaVelhaCreateOrConnectWithoutUsuarioInput[]
    upsert?: JogoDaVelhaUpsertWithWhereUniqueWithoutUsuarioInput | JogoDaVelhaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: JogoDaVelhaCreateManyUsuarioInputEnvelope
    set?: JogoDaVelhaWhereUniqueInput | JogoDaVelhaWhereUniqueInput[]
    disconnect?: JogoDaVelhaWhereUniqueInput | JogoDaVelhaWhereUniqueInput[]
    delete?: JogoDaVelhaWhereUniqueInput | JogoDaVelhaWhereUniqueInput[]
    connect?: JogoDaVelhaWhereUniqueInput | JogoDaVelhaWhereUniqueInput[]
    update?: JogoDaVelhaUpdateWithWhereUniqueWithoutUsuarioInput | JogoDaVelhaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: JogoDaVelhaUpdateManyWithWhereWithoutUsuarioInput | JogoDaVelhaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: JogoDaVelhaScalarWhereInput | JogoDaVelhaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutProfessorInput = {
    create?: XOR<UsuarioCreateWithoutProfessorInput, UsuarioUncheckedCreateWithoutProfessorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProfessorInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DisciplinaCreateNestedManyWithoutProfessorInput = {
    create?: XOR<DisciplinaCreateWithoutProfessorInput, DisciplinaUncheckedCreateWithoutProfessorInput> | DisciplinaCreateWithoutProfessorInput[] | DisciplinaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: DisciplinaCreateOrConnectWithoutProfessorInput | DisciplinaCreateOrConnectWithoutProfessorInput[]
    createMany?: DisciplinaCreateManyProfessorInputEnvelope
    connect?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
  }

  export type DisciplinaUncheckedCreateNestedManyWithoutProfessorInput = {
    create?: XOR<DisciplinaCreateWithoutProfessorInput, DisciplinaUncheckedCreateWithoutProfessorInput> | DisciplinaCreateWithoutProfessorInput[] | DisciplinaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: DisciplinaCreateOrConnectWithoutProfessorInput | DisciplinaCreateOrConnectWithoutProfessorInput[]
    createMany?: DisciplinaCreateManyProfessorInputEnvelope
    connect?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutProfessorNestedInput = {
    create?: XOR<UsuarioCreateWithoutProfessorInput, UsuarioUncheckedCreateWithoutProfessorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProfessorInput
    upsert?: UsuarioUpsertWithoutProfessorInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutProfessorInput, UsuarioUpdateWithoutProfessorInput>, UsuarioUncheckedUpdateWithoutProfessorInput>
  }

  export type DisciplinaUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<DisciplinaCreateWithoutProfessorInput, DisciplinaUncheckedCreateWithoutProfessorInput> | DisciplinaCreateWithoutProfessorInput[] | DisciplinaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: DisciplinaCreateOrConnectWithoutProfessorInput | DisciplinaCreateOrConnectWithoutProfessorInput[]
    upsert?: DisciplinaUpsertWithWhereUniqueWithoutProfessorInput | DisciplinaUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: DisciplinaCreateManyProfessorInputEnvelope
    set?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    disconnect?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    delete?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    connect?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    update?: DisciplinaUpdateWithWhereUniqueWithoutProfessorInput | DisciplinaUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: DisciplinaUpdateManyWithWhereWithoutProfessorInput | DisciplinaUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: DisciplinaScalarWhereInput | DisciplinaScalarWhereInput[]
  }

  export type DisciplinaUncheckedUpdateManyWithoutProfessorNestedInput = {
    create?: XOR<DisciplinaCreateWithoutProfessorInput, DisciplinaUncheckedCreateWithoutProfessorInput> | DisciplinaCreateWithoutProfessorInput[] | DisciplinaUncheckedCreateWithoutProfessorInput[]
    connectOrCreate?: DisciplinaCreateOrConnectWithoutProfessorInput | DisciplinaCreateOrConnectWithoutProfessorInput[]
    upsert?: DisciplinaUpsertWithWhereUniqueWithoutProfessorInput | DisciplinaUpsertWithWhereUniqueWithoutProfessorInput[]
    createMany?: DisciplinaCreateManyProfessorInputEnvelope
    set?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    disconnect?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    delete?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    connect?: DisciplinaWhereUniqueInput | DisciplinaWhereUniqueInput[]
    update?: DisciplinaUpdateWithWhereUniqueWithoutProfessorInput | DisciplinaUpdateWithWhereUniqueWithoutProfessorInput[]
    updateMany?: DisciplinaUpdateManyWithWhereWithoutProfessorInput | DisciplinaUpdateManyWithWhereWithoutProfessorInput[]
    deleteMany?: DisciplinaScalarWhereInput | DisciplinaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutEstudanteInput = {
    create?: XOR<UsuarioCreateWithoutEstudanteInput, UsuarioUncheckedCreateWithoutEstudanteInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEstudanteInput
    connect?: UsuarioWhereUniqueInput
  }

  export type MatriculaSeCreateNestedManyWithoutEstudanteInput = {
    create?: XOR<MatriculaSeCreateWithoutEstudanteInput, MatriculaSeUncheckedCreateWithoutEstudanteInput> | MatriculaSeCreateWithoutEstudanteInput[] | MatriculaSeUncheckedCreateWithoutEstudanteInput[]
    connectOrCreate?: MatriculaSeCreateOrConnectWithoutEstudanteInput | MatriculaSeCreateOrConnectWithoutEstudanteInput[]
    createMany?: MatriculaSeCreateManyEstudanteInputEnvelope
    connect?: MatriculaSeWhereUniqueInput | MatriculaSeWhereUniqueInput[]
  }

  export type MatriculaSeUncheckedCreateNestedManyWithoutEstudanteInput = {
    create?: XOR<MatriculaSeCreateWithoutEstudanteInput, MatriculaSeUncheckedCreateWithoutEstudanteInput> | MatriculaSeCreateWithoutEstudanteInput[] | MatriculaSeUncheckedCreateWithoutEstudanteInput[]
    connectOrCreate?: MatriculaSeCreateOrConnectWithoutEstudanteInput | MatriculaSeCreateOrConnectWithoutEstudanteInput[]
    createMany?: MatriculaSeCreateManyEstudanteInputEnvelope
    connect?: MatriculaSeWhereUniqueInput | MatriculaSeWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutEstudanteNestedInput = {
    create?: XOR<UsuarioCreateWithoutEstudanteInput, UsuarioUncheckedCreateWithoutEstudanteInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEstudanteInput
    upsert?: UsuarioUpsertWithoutEstudanteInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutEstudanteInput, UsuarioUpdateWithoutEstudanteInput>, UsuarioUncheckedUpdateWithoutEstudanteInput>
  }

  export type MatriculaSeUpdateManyWithoutEstudanteNestedInput = {
    create?: XOR<MatriculaSeCreateWithoutEstudanteInput, MatriculaSeUncheckedCreateWithoutEstudanteInput> | MatriculaSeCreateWithoutEstudanteInput[] | MatriculaSeUncheckedCreateWithoutEstudanteInput[]
    connectOrCreate?: MatriculaSeCreateOrConnectWithoutEstudanteInput | MatriculaSeCreateOrConnectWithoutEstudanteInput[]
    upsert?: MatriculaSeUpsertWithWhereUniqueWithoutEstudanteInput | MatriculaSeUpsertWithWhereUniqueWithoutEstudanteInput[]
    createMany?: MatriculaSeCreateManyEstudanteInputEnvelope
    set?: MatriculaSeWhereUniqueInput | MatriculaSeWhereUniqueInput[]
    disconnect?: MatriculaSeWhereUniqueInput | MatriculaSeWhereUniqueInput[]
    delete?: MatriculaSeWhereUniqueInput | MatriculaSeWhereUniqueInput[]
    connect?: MatriculaSeWhereUniqueInput | MatriculaSeWhereUniqueInput[]
    update?: MatriculaSeUpdateWithWhereUniqueWithoutEstudanteInput | MatriculaSeUpdateWithWhereUniqueWithoutEstudanteInput[]
    updateMany?: MatriculaSeUpdateManyWithWhereWithoutEstudanteInput | MatriculaSeUpdateManyWithWhereWithoutEstudanteInput[]
    deleteMany?: MatriculaSeScalarWhereInput | MatriculaSeScalarWhereInput[]
  }

  export type MatriculaSeUncheckedUpdateManyWithoutEstudanteNestedInput = {
    create?: XOR<MatriculaSeCreateWithoutEstudanteInput, MatriculaSeUncheckedCreateWithoutEstudanteInput> | MatriculaSeCreateWithoutEstudanteInput[] | MatriculaSeUncheckedCreateWithoutEstudanteInput[]
    connectOrCreate?: MatriculaSeCreateOrConnectWithoutEstudanteInput | MatriculaSeCreateOrConnectWithoutEstudanteInput[]
    upsert?: MatriculaSeUpsertWithWhereUniqueWithoutEstudanteInput | MatriculaSeUpsertWithWhereUniqueWithoutEstudanteInput[]
    createMany?: MatriculaSeCreateManyEstudanteInputEnvelope
    set?: MatriculaSeWhereUniqueInput | MatriculaSeWhereUniqueInput[]
    disconnect?: MatriculaSeWhereUniqueInput | MatriculaSeWhereUniqueInput[]
    delete?: MatriculaSeWhereUniqueInput | MatriculaSeWhereUniqueInput[]
    connect?: MatriculaSeWhereUniqueInput | MatriculaSeWhereUniqueInput[]
    update?: MatriculaSeUpdateWithWhereUniqueWithoutEstudanteInput | MatriculaSeUpdateWithWhereUniqueWithoutEstudanteInput[]
    updateMany?: MatriculaSeUpdateManyWithWhereWithoutEstudanteInput | MatriculaSeUpdateManyWithWhereWithoutEstudanteInput[]
    deleteMany?: MatriculaSeScalarWhereInput | MatriculaSeScalarWhereInput[]
  }

  export type ProfessorCreateNestedOneWithoutDisciplinasInput = {
    create?: XOR<ProfessorCreateWithoutDisciplinasInput, ProfessorUncheckedCreateWithoutDisciplinasInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutDisciplinasInput
    connect?: ProfessorWhereUniqueInput
  }

  export type MatriculaSeCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<MatriculaSeCreateWithoutDisciplinaInput, MatriculaSeUncheckedCreateWithoutDisciplinaInput> | MatriculaSeCreateWithoutDisciplinaInput[] | MatriculaSeUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: MatriculaSeCreateOrConnectWithoutDisciplinaInput | MatriculaSeCreateOrConnectWithoutDisciplinaInput[]
    createMany?: MatriculaSeCreateManyDisciplinaInputEnvelope
    connect?: MatriculaSeWhereUniqueInput | MatriculaSeWhereUniqueInput[]
  }

  export type MatriculaSeUncheckedCreateNestedManyWithoutDisciplinaInput = {
    create?: XOR<MatriculaSeCreateWithoutDisciplinaInput, MatriculaSeUncheckedCreateWithoutDisciplinaInput> | MatriculaSeCreateWithoutDisciplinaInput[] | MatriculaSeUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: MatriculaSeCreateOrConnectWithoutDisciplinaInput | MatriculaSeCreateOrConnectWithoutDisciplinaInput[]
    createMany?: MatriculaSeCreateManyDisciplinaInputEnvelope
    connect?: MatriculaSeWhereUniqueInput | MatriculaSeWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfessorUpdateOneRequiredWithoutDisciplinasNestedInput = {
    create?: XOR<ProfessorCreateWithoutDisciplinasInput, ProfessorUncheckedCreateWithoutDisciplinasInput>
    connectOrCreate?: ProfessorCreateOrConnectWithoutDisciplinasInput
    upsert?: ProfessorUpsertWithoutDisciplinasInput
    connect?: ProfessorWhereUniqueInput
    update?: XOR<XOR<ProfessorUpdateToOneWithWhereWithoutDisciplinasInput, ProfessorUpdateWithoutDisciplinasInput>, ProfessorUncheckedUpdateWithoutDisciplinasInput>
  }

  export type MatriculaSeUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<MatriculaSeCreateWithoutDisciplinaInput, MatriculaSeUncheckedCreateWithoutDisciplinaInput> | MatriculaSeCreateWithoutDisciplinaInput[] | MatriculaSeUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: MatriculaSeCreateOrConnectWithoutDisciplinaInput | MatriculaSeCreateOrConnectWithoutDisciplinaInput[]
    upsert?: MatriculaSeUpsertWithWhereUniqueWithoutDisciplinaInput | MatriculaSeUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: MatriculaSeCreateManyDisciplinaInputEnvelope
    set?: MatriculaSeWhereUniqueInput | MatriculaSeWhereUniqueInput[]
    disconnect?: MatriculaSeWhereUniqueInput | MatriculaSeWhereUniqueInput[]
    delete?: MatriculaSeWhereUniqueInput | MatriculaSeWhereUniqueInput[]
    connect?: MatriculaSeWhereUniqueInput | MatriculaSeWhereUniqueInput[]
    update?: MatriculaSeUpdateWithWhereUniqueWithoutDisciplinaInput | MatriculaSeUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: MatriculaSeUpdateManyWithWhereWithoutDisciplinaInput | MatriculaSeUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: MatriculaSeScalarWhereInput | MatriculaSeScalarWhereInput[]
  }

  export type MatriculaSeUncheckedUpdateManyWithoutDisciplinaNestedInput = {
    create?: XOR<MatriculaSeCreateWithoutDisciplinaInput, MatriculaSeUncheckedCreateWithoutDisciplinaInput> | MatriculaSeCreateWithoutDisciplinaInput[] | MatriculaSeUncheckedCreateWithoutDisciplinaInput[]
    connectOrCreate?: MatriculaSeCreateOrConnectWithoutDisciplinaInput | MatriculaSeCreateOrConnectWithoutDisciplinaInput[]
    upsert?: MatriculaSeUpsertWithWhereUniqueWithoutDisciplinaInput | MatriculaSeUpsertWithWhereUniqueWithoutDisciplinaInput[]
    createMany?: MatriculaSeCreateManyDisciplinaInputEnvelope
    set?: MatriculaSeWhereUniqueInput | MatriculaSeWhereUniqueInput[]
    disconnect?: MatriculaSeWhereUniqueInput | MatriculaSeWhereUniqueInput[]
    delete?: MatriculaSeWhereUniqueInput | MatriculaSeWhereUniqueInput[]
    connect?: MatriculaSeWhereUniqueInput | MatriculaSeWhereUniqueInput[]
    update?: MatriculaSeUpdateWithWhereUniqueWithoutDisciplinaInput | MatriculaSeUpdateWithWhereUniqueWithoutDisciplinaInput[]
    updateMany?: MatriculaSeUpdateManyWithWhereWithoutDisciplinaInput | MatriculaSeUpdateManyWithWhereWithoutDisciplinaInput[]
    deleteMany?: MatriculaSeScalarWhereInput | MatriculaSeScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutJogosInput = {
    create?: XOR<UsuarioCreateWithoutJogosInput, UsuarioUncheckedCreateWithoutJogosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutJogosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutJogosNestedInput = {
    create?: XOR<UsuarioCreateWithoutJogosInput, UsuarioUncheckedCreateWithoutJogosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutJogosInput
    upsert?: UsuarioUpsertWithoutJogosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutJogosInput, UsuarioUpdateWithoutJogosInput>, UsuarioUncheckedUpdateWithoutJogosInput>
  }

  export type DisciplinaCreateNestedOneWithoutMatriculasInput = {
    create?: XOR<DisciplinaCreateWithoutMatriculasInput, DisciplinaUncheckedCreateWithoutMatriculasInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutMatriculasInput
    connect?: DisciplinaWhereUniqueInput
  }

  export type EstudanteCreateNestedOneWithoutMatriculasInput = {
    create?: XOR<EstudanteCreateWithoutMatriculasInput, EstudanteUncheckedCreateWithoutMatriculasInput>
    connectOrCreate?: EstudanteCreateOrConnectWithoutMatriculasInput
    connect?: EstudanteWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DisciplinaUpdateOneRequiredWithoutMatriculasNestedInput = {
    create?: XOR<DisciplinaCreateWithoutMatriculasInput, DisciplinaUncheckedCreateWithoutMatriculasInput>
    connectOrCreate?: DisciplinaCreateOrConnectWithoutMatriculasInput
    upsert?: DisciplinaUpsertWithoutMatriculasInput
    connect?: DisciplinaWhereUniqueInput
    update?: XOR<XOR<DisciplinaUpdateToOneWithWhereWithoutMatriculasInput, DisciplinaUpdateWithoutMatriculasInput>, DisciplinaUncheckedUpdateWithoutMatriculasInput>
  }

  export type EstudanteUpdateOneRequiredWithoutMatriculasNestedInput = {
    create?: XOR<EstudanteCreateWithoutMatriculasInput, EstudanteUncheckedCreateWithoutMatriculasInput>
    connectOrCreate?: EstudanteCreateOrConnectWithoutMatriculasInput
    upsert?: EstudanteUpsertWithoutMatriculasInput
    connect?: EstudanteWhereUniqueInput
    update?: XOR<XOR<EstudanteUpdateToOneWithWhereWithoutMatriculasInput, EstudanteUpdateWithoutMatriculasInput>, EstudanteUncheckedUpdateWithoutMatriculasInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ProfessorCreateWithoutUsuarioInput = {
    siape: number
    disciplinas?: DisciplinaCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateWithoutUsuarioInput = {
    siape: number
    disciplinas?: DisciplinaUncheckedCreateNestedManyWithoutProfessorInput
  }

  export type ProfessorCreateOrConnectWithoutUsuarioInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutUsuarioInput, ProfessorUncheckedCreateWithoutUsuarioInput>
  }

  export type EstudanteCreateWithoutUsuarioInput = {
    ra: number
    matriculas?: MatriculaSeCreateNestedManyWithoutEstudanteInput
  }

  export type EstudanteUncheckedCreateWithoutUsuarioInput = {
    ra: number
    matriculas?: MatriculaSeUncheckedCreateNestedManyWithoutEstudanteInput
  }

  export type EstudanteCreateOrConnectWithoutUsuarioInput = {
    where: EstudanteWhereUniqueInput
    create: XOR<EstudanteCreateWithoutUsuarioInput, EstudanteUncheckedCreateWithoutUsuarioInput>
  }

  export type JogoDaVelhaCreateWithoutUsuarioInput = {
    player1?: string | null
    player2?: string | null
    resultado?: string | null
    data_jogo?: Date | string | null
  }

  export type JogoDaVelhaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    player1?: string | null
    player2?: string | null
    resultado?: string | null
    data_jogo?: Date | string | null
  }

  export type JogoDaVelhaCreateOrConnectWithoutUsuarioInput = {
    where: JogoDaVelhaWhereUniqueInput
    create: XOR<JogoDaVelhaCreateWithoutUsuarioInput, JogoDaVelhaUncheckedCreateWithoutUsuarioInput>
  }

  export type JogoDaVelhaCreateManyUsuarioInputEnvelope = {
    data: JogoDaVelhaCreateManyUsuarioInput | JogoDaVelhaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ProfessorUpsertWithoutUsuarioInput = {
    update: XOR<ProfessorUpdateWithoutUsuarioInput, ProfessorUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ProfessorCreateWithoutUsuarioInput, ProfessorUncheckedCreateWithoutUsuarioInput>
    where?: ProfessorWhereInput
  }

  export type ProfessorUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: ProfessorWhereInput
    data: XOR<ProfessorUpdateWithoutUsuarioInput, ProfessorUncheckedUpdateWithoutUsuarioInput>
  }

  export type ProfessorUpdateWithoutUsuarioInput = {
    siape?: IntFieldUpdateOperationsInput | number
    disciplinas?: DisciplinaUpdateManyWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateWithoutUsuarioInput = {
    siape?: IntFieldUpdateOperationsInput | number
    disciplinas?: DisciplinaUncheckedUpdateManyWithoutProfessorNestedInput
  }

  export type EstudanteUpsertWithoutUsuarioInput = {
    update: XOR<EstudanteUpdateWithoutUsuarioInput, EstudanteUncheckedUpdateWithoutUsuarioInput>
    create: XOR<EstudanteCreateWithoutUsuarioInput, EstudanteUncheckedCreateWithoutUsuarioInput>
    where?: EstudanteWhereInput
  }

  export type EstudanteUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: EstudanteWhereInput
    data: XOR<EstudanteUpdateWithoutUsuarioInput, EstudanteUncheckedUpdateWithoutUsuarioInput>
  }

  export type EstudanteUpdateWithoutUsuarioInput = {
    ra?: IntFieldUpdateOperationsInput | number
    matriculas?: MatriculaSeUpdateManyWithoutEstudanteNestedInput
  }

  export type EstudanteUncheckedUpdateWithoutUsuarioInput = {
    ra?: IntFieldUpdateOperationsInput | number
    matriculas?: MatriculaSeUncheckedUpdateManyWithoutEstudanteNestedInput
  }

  export type JogoDaVelhaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: JogoDaVelhaWhereUniqueInput
    update: XOR<JogoDaVelhaUpdateWithoutUsuarioInput, JogoDaVelhaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<JogoDaVelhaCreateWithoutUsuarioInput, JogoDaVelhaUncheckedCreateWithoutUsuarioInput>
  }

  export type JogoDaVelhaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: JogoDaVelhaWhereUniqueInput
    data: XOR<JogoDaVelhaUpdateWithoutUsuarioInput, JogoDaVelhaUncheckedUpdateWithoutUsuarioInput>
  }

  export type JogoDaVelhaUpdateManyWithWhereWithoutUsuarioInput = {
    where: JogoDaVelhaScalarWhereInput
    data: XOR<JogoDaVelhaUpdateManyMutationInput, JogoDaVelhaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type JogoDaVelhaScalarWhereInput = {
    AND?: JogoDaVelhaScalarWhereInput | JogoDaVelhaScalarWhereInput[]
    OR?: JogoDaVelhaScalarWhereInput[]
    NOT?: JogoDaVelhaScalarWhereInput | JogoDaVelhaScalarWhereInput[]
    id?: IntFilter<"JogoDaVelha"> | number
    player1?: StringNullableFilter<"JogoDaVelha"> | string | null
    player2?: StringNullableFilter<"JogoDaVelha"> | string | null
    resultado?: StringNullableFilter<"JogoDaVelha"> | string | null
    data_jogo?: DateTimeNullableFilter<"JogoDaVelha"> | Date | string | null
    fk_usuarios_id?: IntFilter<"JogoDaVelha"> | number
  }

  export type UsuarioCreateWithoutProfessorInput = {
    cpf: string
    foto?: string | null
    email: string
    data_nascimento?: Date | string | null
    nome: string
    senha: string
    estudante?: EstudanteCreateNestedOneWithoutUsuarioInput
    jogos?: JogoDaVelhaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutProfessorInput = {
    id?: number
    cpf: string
    foto?: string | null
    email: string
    data_nascimento?: Date | string | null
    nome: string
    senha: string
    estudante?: EstudanteUncheckedCreateNestedOneWithoutUsuarioInput
    jogos?: JogoDaVelhaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutProfessorInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutProfessorInput, UsuarioUncheckedCreateWithoutProfessorInput>
  }

  export type DisciplinaCreateWithoutProfessorInput = {
    periodo?: number | null
    turno?: string | null
    nome: string
    qnt_total_aulas?: number | null
    carga_horaria: number
    curso: string
    matriculas?: MatriculaSeCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaUncheckedCreateWithoutProfessorInput = {
    id?: number
    periodo?: number | null
    turno?: string | null
    nome: string
    qnt_total_aulas?: number | null
    carga_horaria: number
    curso: string
    matriculas?: MatriculaSeUncheckedCreateNestedManyWithoutDisciplinaInput
  }

  export type DisciplinaCreateOrConnectWithoutProfessorInput = {
    where: DisciplinaWhereUniqueInput
    create: XOR<DisciplinaCreateWithoutProfessorInput, DisciplinaUncheckedCreateWithoutProfessorInput>
  }

  export type DisciplinaCreateManyProfessorInputEnvelope = {
    data: DisciplinaCreateManyProfessorInput | DisciplinaCreateManyProfessorInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutProfessorInput = {
    update: XOR<UsuarioUpdateWithoutProfessorInput, UsuarioUncheckedUpdateWithoutProfessorInput>
    create: XOR<UsuarioCreateWithoutProfessorInput, UsuarioUncheckedCreateWithoutProfessorInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutProfessorInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutProfessorInput, UsuarioUncheckedUpdateWithoutProfessorInput>
  }

  export type UsuarioUpdateWithoutProfessorInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    estudante?: EstudanteUpdateOneWithoutUsuarioNestedInput
    jogos?: JogoDaVelhaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutProfessorInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    estudante?: EstudanteUncheckedUpdateOneWithoutUsuarioNestedInput
    jogos?: JogoDaVelhaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type DisciplinaUpsertWithWhereUniqueWithoutProfessorInput = {
    where: DisciplinaWhereUniqueInput
    update: XOR<DisciplinaUpdateWithoutProfessorInput, DisciplinaUncheckedUpdateWithoutProfessorInput>
    create: XOR<DisciplinaCreateWithoutProfessorInput, DisciplinaUncheckedCreateWithoutProfessorInput>
  }

  export type DisciplinaUpdateWithWhereUniqueWithoutProfessorInput = {
    where: DisciplinaWhereUniqueInput
    data: XOR<DisciplinaUpdateWithoutProfessorInput, DisciplinaUncheckedUpdateWithoutProfessorInput>
  }

  export type DisciplinaUpdateManyWithWhereWithoutProfessorInput = {
    where: DisciplinaScalarWhereInput
    data: XOR<DisciplinaUpdateManyMutationInput, DisciplinaUncheckedUpdateManyWithoutProfessorInput>
  }

  export type DisciplinaScalarWhereInput = {
    AND?: DisciplinaScalarWhereInput | DisciplinaScalarWhereInput[]
    OR?: DisciplinaScalarWhereInput[]
    NOT?: DisciplinaScalarWhereInput | DisciplinaScalarWhereInput[]
    id?: IntFilter<"Disciplina"> | number
    periodo?: IntNullableFilter<"Disciplina"> | number | null
    turno?: StringNullableFilter<"Disciplina"> | string | null
    nome?: StringFilter<"Disciplina"> | string
    qnt_total_aulas?: IntNullableFilter<"Disciplina"> | number | null
    carga_horaria?: FloatFilter<"Disciplina"> | number
    curso?: StringFilter<"Disciplina"> | string
    fk_professores_fk_usuarios_id?: IntFilter<"Disciplina"> | number
  }

  export type UsuarioCreateWithoutEstudanteInput = {
    cpf: string
    foto?: string | null
    email: string
    data_nascimento?: Date | string | null
    nome: string
    senha: string
    professor?: ProfessorCreateNestedOneWithoutUsuarioInput
    jogos?: JogoDaVelhaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutEstudanteInput = {
    id?: number
    cpf: string
    foto?: string | null
    email: string
    data_nascimento?: Date | string | null
    nome: string
    senha: string
    professor?: ProfessorUncheckedCreateNestedOneWithoutUsuarioInput
    jogos?: JogoDaVelhaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutEstudanteInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutEstudanteInput, UsuarioUncheckedCreateWithoutEstudanteInput>
  }

  export type MatriculaSeCreateWithoutEstudanteInput = {
    n1?: number | null
    n2?: number | null
    media?: number | null
    faltas?: number | null
    situacao?: string | null
    disciplina: DisciplinaCreateNestedOneWithoutMatriculasInput
  }

  export type MatriculaSeUncheckedCreateWithoutEstudanteInput = {
    fk_disciplinas_id: number
    n1?: number | null
    n2?: number | null
    media?: number | null
    faltas?: number | null
    situacao?: string | null
  }

  export type MatriculaSeCreateOrConnectWithoutEstudanteInput = {
    where: MatriculaSeWhereUniqueInput
    create: XOR<MatriculaSeCreateWithoutEstudanteInput, MatriculaSeUncheckedCreateWithoutEstudanteInput>
  }

  export type MatriculaSeCreateManyEstudanteInputEnvelope = {
    data: MatriculaSeCreateManyEstudanteInput | MatriculaSeCreateManyEstudanteInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutEstudanteInput = {
    update: XOR<UsuarioUpdateWithoutEstudanteInput, UsuarioUncheckedUpdateWithoutEstudanteInput>
    create: XOR<UsuarioCreateWithoutEstudanteInput, UsuarioUncheckedCreateWithoutEstudanteInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutEstudanteInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutEstudanteInput, UsuarioUncheckedUpdateWithoutEstudanteInput>
  }

  export type UsuarioUpdateWithoutEstudanteInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    professor?: ProfessorUpdateOneWithoutUsuarioNestedInput
    jogos?: JogoDaVelhaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutEstudanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    professor?: ProfessorUncheckedUpdateOneWithoutUsuarioNestedInput
    jogos?: JogoDaVelhaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type MatriculaSeUpsertWithWhereUniqueWithoutEstudanteInput = {
    where: MatriculaSeWhereUniqueInput
    update: XOR<MatriculaSeUpdateWithoutEstudanteInput, MatriculaSeUncheckedUpdateWithoutEstudanteInput>
    create: XOR<MatriculaSeCreateWithoutEstudanteInput, MatriculaSeUncheckedCreateWithoutEstudanteInput>
  }

  export type MatriculaSeUpdateWithWhereUniqueWithoutEstudanteInput = {
    where: MatriculaSeWhereUniqueInput
    data: XOR<MatriculaSeUpdateWithoutEstudanteInput, MatriculaSeUncheckedUpdateWithoutEstudanteInput>
  }

  export type MatriculaSeUpdateManyWithWhereWithoutEstudanteInput = {
    where: MatriculaSeScalarWhereInput
    data: XOR<MatriculaSeUpdateManyMutationInput, MatriculaSeUncheckedUpdateManyWithoutEstudanteInput>
  }

  export type MatriculaSeScalarWhereInput = {
    AND?: MatriculaSeScalarWhereInput | MatriculaSeScalarWhereInput[]
    OR?: MatriculaSeScalarWhereInput[]
    NOT?: MatriculaSeScalarWhereInput | MatriculaSeScalarWhereInput[]
    fk_disciplinas_id?: IntFilter<"MatriculaSe"> | number
    fk_estudantes_fk_usuarios_id?: IntFilter<"MatriculaSe"> | number
    n1?: FloatNullableFilter<"MatriculaSe"> | number | null
    n2?: FloatNullableFilter<"MatriculaSe"> | number | null
    media?: FloatNullableFilter<"MatriculaSe"> | number | null
    faltas?: IntNullableFilter<"MatriculaSe"> | number | null
    situacao?: StringNullableFilter<"MatriculaSe"> | string | null
  }

  export type ProfessorCreateWithoutDisciplinasInput = {
    siape: number
    usuario: UsuarioCreateNestedOneWithoutProfessorInput
  }

  export type ProfessorUncheckedCreateWithoutDisciplinasInput = {
    fk_usuarios_id: number
    siape: number
  }

  export type ProfessorCreateOrConnectWithoutDisciplinasInput = {
    where: ProfessorWhereUniqueInput
    create: XOR<ProfessorCreateWithoutDisciplinasInput, ProfessorUncheckedCreateWithoutDisciplinasInput>
  }

  export type MatriculaSeCreateWithoutDisciplinaInput = {
    n1?: number | null
    n2?: number | null
    media?: number | null
    faltas?: number | null
    situacao?: string | null
    estudante: EstudanteCreateNestedOneWithoutMatriculasInput
  }

  export type MatriculaSeUncheckedCreateWithoutDisciplinaInput = {
    fk_estudantes_fk_usuarios_id: number
    n1?: number | null
    n2?: number | null
    media?: number | null
    faltas?: number | null
    situacao?: string | null
  }

  export type MatriculaSeCreateOrConnectWithoutDisciplinaInput = {
    where: MatriculaSeWhereUniqueInput
    create: XOR<MatriculaSeCreateWithoutDisciplinaInput, MatriculaSeUncheckedCreateWithoutDisciplinaInput>
  }

  export type MatriculaSeCreateManyDisciplinaInputEnvelope = {
    data: MatriculaSeCreateManyDisciplinaInput | MatriculaSeCreateManyDisciplinaInput[]
    skipDuplicates?: boolean
  }

  export type ProfessorUpsertWithoutDisciplinasInput = {
    update: XOR<ProfessorUpdateWithoutDisciplinasInput, ProfessorUncheckedUpdateWithoutDisciplinasInput>
    create: XOR<ProfessorCreateWithoutDisciplinasInput, ProfessorUncheckedCreateWithoutDisciplinasInput>
    where?: ProfessorWhereInput
  }

  export type ProfessorUpdateToOneWithWhereWithoutDisciplinasInput = {
    where?: ProfessorWhereInput
    data: XOR<ProfessorUpdateWithoutDisciplinasInput, ProfessorUncheckedUpdateWithoutDisciplinasInput>
  }

  export type ProfessorUpdateWithoutDisciplinasInput = {
    siape?: IntFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneRequiredWithoutProfessorNestedInput
  }

  export type ProfessorUncheckedUpdateWithoutDisciplinasInput = {
    fk_usuarios_id?: IntFieldUpdateOperationsInput | number
    siape?: IntFieldUpdateOperationsInput | number
  }

  export type MatriculaSeUpsertWithWhereUniqueWithoutDisciplinaInput = {
    where: MatriculaSeWhereUniqueInput
    update: XOR<MatriculaSeUpdateWithoutDisciplinaInput, MatriculaSeUncheckedUpdateWithoutDisciplinaInput>
    create: XOR<MatriculaSeCreateWithoutDisciplinaInput, MatriculaSeUncheckedCreateWithoutDisciplinaInput>
  }

  export type MatriculaSeUpdateWithWhereUniqueWithoutDisciplinaInput = {
    where: MatriculaSeWhereUniqueInput
    data: XOR<MatriculaSeUpdateWithoutDisciplinaInput, MatriculaSeUncheckedUpdateWithoutDisciplinaInput>
  }

  export type MatriculaSeUpdateManyWithWhereWithoutDisciplinaInput = {
    where: MatriculaSeScalarWhereInput
    data: XOR<MatriculaSeUpdateManyMutationInput, MatriculaSeUncheckedUpdateManyWithoutDisciplinaInput>
  }

  export type UsuarioCreateWithoutJogosInput = {
    cpf: string
    foto?: string | null
    email: string
    data_nascimento?: Date | string | null
    nome: string
    senha: string
    professor?: ProfessorCreateNestedOneWithoutUsuarioInput
    estudante?: EstudanteCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutJogosInput = {
    id?: number
    cpf: string
    foto?: string | null
    email: string
    data_nascimento?: Date | string | null
    nome: string
    senha: string
    professor?: ProfessorUncheckedCreateNestedOneWithoutUsuarioInput
    estudante?: EstudanteUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutJogosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutJogosInput, UsuarioUncheckedCreateWithoutJogosInput>
  }

  export type UsuarioUpsertWithoutJogosInput = {
    update: XOR<UsuarioUpdateWithoutJogosInput, UsuarioUncheckedUpdateWithoutJogosInput>
    create: XOR<UsuarioCreateWithoutJogosInput, UsuarioUncheckedCreateWithoutJogosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutJogosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutJogosInput, UsuarioUncheckedUpdateWithoutJogosInput>
  }

  export type UsuarioUpdateWithoutJogosInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    professor?: ProfessorUpdateOneWithoutUsuarioNestedInput
    estudante?: EstudanteUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutJogosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    professor?: ProfessorUncheckedUpdateOneWithoutUsuarioNestedInput
    estudante?: EstudanteUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type DisciplinaCreateWithoutMatriculasInput = {
    periodo?: number | null
    turno?: string | null
    nome: string
    qnt_total_aulas?: number | null
    carga_horaria: number
    curso: string
    professor: ProfessorCreateNestedOneWithoutDisciplinasInput
  }

  export type DisciplinaUncheckedCreateWithoutMatriculasInput = {
    id?: number
    periodo?: number | null
    turno?: string | null
    nome: string
    qnt_total_aulas?: number | null
    carga_horaria: number
    curso: string
    fk_professores_fk_usuarios_id: number
  }

  export type DisciplinaCreateOrConnectWithoutMatriculasInput = {
    where: DisciplinaWhereUniqueInput
    create: XOR<DisciplinaCreateWithoutMatriculasInput, DisciplinaUncheckedCreateWithoutMatriculasInput>
  }

  export type EstudanteCreateWithoutMatriculasInput = {
    ra: number
    usuario: UsuarioCreateNestedOneWithoutEstudanteInput
  }

  export type EstudanteUncheckedCreateWithoutMatriculasInput = {
    fk_usuarios_id: number
    ra: number
  }

  export type EstudanteCreateOrConnectWithoutMatriculasInput = {
    where: EstudanteWhereUniqueInput
    create: XOR<EstudanteCreateWithoutMatriculasInput, EstudanteUncheckedCreateWithoutMatriculasInput>
  }

  export type DisciplinaUpsertWithoutMatriculasInput = {
    update: XOR<DisciplinaUpdateWithoutMatriculasInput, DisciplinaUncheckedUpdateWithoutMatriculasInput>
    create: XOR<DisciplinaCreateWithoutMatriculasInput, DisciplinaUncheckedCreateWithoutMatriculasInput>
    where?: DisciplinaWhereInput
  }

  export type DisciplinaUpdateToOneWithWhereWithoutMatriculasInput = {
    where?: DisciplinaWhereInput
    data: XOR<DisciplinaUpdateWithoutMatriculasInput, DisciplinaUncheckedUpdateWithoutMatriculasInput>
  }

  export type DisciplinaUpdateWithoutMatriculasInput = {
    periodo?: NullableIntFieldUpdateOperationsInput | number | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    qnt_total_aulas?: NullableIntFieldUpdateOperationsInput | number | null
    carga_horaria?: FloatFieldUpdateOperationsInput | number
    curso?: StringFieldUpdateOperationsInput | string
    professor?: ProfessorUpdateOneRequiredWithoutDisciplinasNestedInput
  }

  export type DisciplinaUncheckedUpdateWithoutMatriculasInput = {
    id?: IntFieldUpdateOperationsInput | number
    periodo?: NullableIntFieldUpdateOperationsInput | number | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    qnt_total_aulas?: NullableIntFieldUpdateOperationsInput | number | null
    carga_horaria?: FloatFieldUpdateOperationsInput | number
    curso?: StringFieldUpdateOperationsInput | string
    fk_professores_fk_usuarios_id?: IntFieldUpdateOperationsInput | number
  }

  export type EstudanteUpsertWithoutMatriculasInput = {
    update: XOR<EstudanteUpdateWithoutMatriculasInput, EstudanteUncheckedUpdateWithoutMatriculasInput>
    create: XOR<EstudanteCreateWithoutMatriculasInput, EstudanteUncheckedCreateWithoutMatriculasInput>
    where?: EstudanteWhereInput
  }

  export type EstudanteUpdateToOneWithWhereWithoutMatriculasInput = {
    where?: EstudanteWhereInput
    data: XOR<EstudanteUpdateWithoutMatriculasInput, EstudanteUncheckedUpdateWithoutMatriculasInput>
  }

  export type EstudanteUpdateWithoutMatriculasInput = {
    ra?: IntFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneRequiredWithoutEstudanteNestedInput
  }

  export type EstudanteUncheckedUpdateWithoutMatriculasInput = {
    fk_usuarios_id?: IntFieldUpdateOperationsInput | number
    ra?: IntFieldUpdateOperationsInput | number
  }

  export type JogoDaVelhaCreateManyUsuarioInput = {
    id?: number
    player1?: string | null
    player2?: string | null
    resultado?: string | null
    data_jogo?: Date | string | null
  }

  export type JogoDaVelhaUpdateWithoutUsuarioInput = {
    player1?: NullableStringFieldUpdateOperationsInput | string | null
    player2?: NullableStringFieldUpdateOperationsInput | string | null
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
    data_jogo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JogoDaVelhaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    player1?: NullableStringFieldUpdateOperationsInput | string | null
    player2?: NullableStringFieldUpdateOperationsInput | string | null
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
    data_jogo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JogoDaVelhaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    player1?: NullableStringFieldUpdateOperationsInput | string | null
    player2?: NullableStringFieldUpdateOperationsInput | string | null
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
    data_jogo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DisciplinaCreateManyProfessorInput = {
    id?: number
    periodo?: number | null
    turno?: string | null
    nome: string
    qnt_total_aulas?: number | null
    carga_horaria: number
    curso: string
  }

  export type DisciplinaUpdateWithoutProfessorInput = {
    periodo?: NullableIntFieldUpdateOperationsInput | number | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    qnt_total_aulas?: NullableIntFieldUpdateOperationsInput | number | null
    carga_horaria?: FloatFieldUpdateOperationsInput | number
    curso?: StringFieldUpdateOperationsInput | string
    matriculas?: MatriculaSeUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaUncheckedUpdateWithoutProfessorInput = {
    id?: IntFieldUpdateOperationsInput | number
    periodo?: NullableIntFieldUpdateOperationsInput | number | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    qnt_total_aulas?: NullableIntFieldUpdateOperationsInput | number | null
    carga_horaria?: FloatFieldUpdateOperationsInput | number
    curso?: StringFieldUpdateOperationsInput | string
    matriculas?: MatriculaSeUncheckedUpdateManyWithoutDisciplinaNestedInput
  }

  export type DisciplinaUncheckedUpdateManyWithoutProfessorInput = {
    id?: IntFieldUpdateOperationsInput | number
    periodo?: NullableIntFieldUpdateOperationsInput | number | null
    turno?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    qnt_total_aulas?: NullableIntFieldUpdateOperationsInput | number | null
    carga_horaria?: FloatFieldUpdateOperationsInput | number
    curso?: StringFieldUpdateOperationsInput | string
  }

  export type MatriculaSeCreateManyEstudanteInput = {
    fk_disciplinas_id: number
    n1?: number | null
    n2?: number | null
    media?: number | null
    faltas?: number | null
    situacao?: string | null
  }

  export type MatriculaSeUpdateWithoutEstudanteInput = {
    n1?: NullableFloatFieldUpdateOperationsInput | number | null
    n2?: NullableFloatFieldUpdateOperationsInput | number | null
    media?: NullableFloatFieldUpdateOperationsInput | number | null
    faltas?: NullableIntFieldUpdateOperationsInput | number | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    disciplina?: DisciplinaUpdateOneRequiredWithoutMatriculasNestedInput
  }

  export type MatriculaSeUncheckedUpdateWithoutEstudanteInput = {
    fk_disciplinas_id?: IntFieldUpdateOperationsInput | number
    n1?: NullableFloatFieldUpdateOperationsInput | number | null
    n2?: NullableFloatFieldUpdateOperationsInput | number | null
    media?: NullableFloatFieldUpdateOperationsInput | number | null
    faltas?: NullableIntFieldUpdateOperationsInput | number | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatriculaSeUncheckedUpdateManyWithoutEstudanteInput = {
    fk_disciplinas_id?: IntFieldUpdateOperationsInput | number
    n1?: NullableFloatFieldUpdateOperationsInput | number | null
    n2?: NullableFloatFieldUpdateOperationsInput | number | null
    media?: NullableFloatFieldUpdateOperationsInput | number | null
    faltas?: NullableIntFieldUpdateOperationsInput | number | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatriculaSeCreateManyDisciplinaInput = {
    fk_estudantes_fk_usuarios_id: number
    n1?: number | null
    n2?: number | null
    media?: number | null
    faltas?: number | null
    situacao?: string | null
  }

  export type MatriculaSeUpdateWithoutDisciplinaInput = {
    n1?: NullableFloatFieldUpdateOperationsInput | number | null
    n2?: NullableFloatFieldUpdateOperationsInput | number | null
    media?: NullableFloatFieldUpdateOperationsInput | number | null
    faltas?: NullableIntFieldUpdateOperationsInput | number | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    estudante?: EstudanteUpdateOneRequiredWithoutMatriculasNestedInput
  }

  export type MatriculaSeUncheckedUpdateWithoutDisciplinaInput = {
    fk_estudantes_fk_usuarios_id?: IntFieldUpdateOperationsInput | number
    n1?: NullableFloatFieldUpdateOperationsInput | number | null
    n2?: NullableFloatFieldUpdateOperationsInput | number | null
    media?: NullableFloatFieldUpdateOperationsInput | number | null
    faltas?: NullableIntFieldUpdateOperationsInput | number | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatriculaSeUncheckedUpdateManyWithoutDisciplinaInput = {
    fk_estudantes_fk_usuarios_id?: IntFieldUpdateOperationsInput | number
    n1?: NullableFloatFieldUpdateOperationsInput | number | null
    n2?: NullableFloatFieldUpdateOperationsInput | number | null
    media?: NullableFloatFieldUpdateOperationsInput | number | null
    faltas?: NullableIntFieldUpdateOperationsInput | number | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
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