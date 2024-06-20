import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: Date; output: Date; }
};

export type Character = {
  __typename?: 'Character';
  ability: Scalars['String']['output'];
  beer_consumption: Scalars['Int']['output'];
  born: Scalars['Date']['output'];
  gender?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  in_space_since?: Maybe<Scalars['Date']['output']>;
  knows_the_answer: Scalars['Boolean']['output'];
  minimal_distance: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nemeses: Array<Maybe<Nemesis>>;
  weight?: Maybe<Scalars['String']['output']>;
};

export type Nemesis = {
  __typename?: 'Nemesis';
  character_id?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  is_alive: Scalars['Boolean']['output'];
  secrets: Array<Maybe<Secret>>;
  years?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  average_character_age: Scalars['Float']['output'];
  average_character_weight: Scalars['Float']['output'];
  average_nemesis_age: Scalars['Float']['output'];
  character?: Maybe<Character>;
  characters: Array<Character>;
  characters_count: Scalars['Int']['output'];
};


export type QueryCharacterArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCharactersArgs = {
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Secret = {
  __typename?: 'Secret';
  id: Scalars['Int']['output'];
  nemesis_id: Scalars['Int']['output'];
  secret_code: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Character: ResolverTypeWrapper<Character>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Nemesis: ResolverTypeWrapper<Nemesis>;
  Query: ResolverTypeWrapper<{}>;
  Secret: ResolverTypeWrapper<Secret>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Character: Character;
  Date: Scalars['Date']['output'];
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  Nemesis: Nemesis;
  Query: {};
  Secret: Secret;
  String: Scalars['String']['output'];
};

export type CharacterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Character'] = ResolversParentTypes['Character']> = {
  ability?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  beer_consumption?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  born?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  in_space_since?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  knows_the_answer?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  minimal_distance?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nemeses?: Resolver<Array<Maybe<ResolversTypes['Nemesis']>>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type NemesisResolvers<ContextType = any, ParentType extends ResolversParentTypes['Nemesis'] = ResolversParentTypes['Nemesis']> = {
  character_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  is_alive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  secrets?: Resolver<Array<Maybe<ResolversTypes['Secret']>>, ParentType, ContextType>;
  years?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  average_character_age?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  average_character_weight?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  average_nemesis_age?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType, RequireFields<QueryCharacterArgs, 'id'>>;
  characters?: Resolver<Array<ResolversTypes['Character']>, ParentType, ContextType, Partial<QueryCharactersArgs>>;
  characters_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type SecretResolvers<ContextType = any, ParentType extends ResolversParentTypes['Secret'] = ResolversParentTypes['Secret']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nemesis_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  secret_code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Character?: CharacterResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Nemesis?: NemesisResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Secret?: SecretResolvers<ContextType>;
};

