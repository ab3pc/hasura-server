import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
  uuid: any;
};

export type AdminGetMeOutput = {
  __typename?: 'AdminGetMeOutput';
  id: Scalars['String'];
  username: Scalars['String'];
};

export type AdminLoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type AdminLoginOutput = {
  __typename?: 'AdminLoginOutput';
  accessToken: Scalars['String'];
};

export type AdminRegisterInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type AdminRegisterOutput = {
  __typename?: 'AdminRegisterOutput';
  accessToken: Scalars['String'];
};

export type CloudinarySignatureOutput = {
  __typename?: 'CloudinarySignatureOutput';
  apiKey: Scalars['String'];
  cloudName: Scalars['String'];
  publicId: Scalars['String'];
  signature: Scalars['String'];
  timestamp: Scalars['Int'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "admin" */
export type Admin = {
  __typename?: 'admin';
  id: Scalars['uuid'];
  password: Scalars['String'];
  username: Scalars['String'];
};

/** aggregated selection of "admin" */
export type Admin_Aggregate = {
  __typename?: 'admin_aggregate';
  aggregate?: Maybe<Admin_Aggregate_Fields>;
  nodes: Array<Admin>;
};

/** aggregate fields of "admin" */
export type Admin_Aggregate_Fields = {
  __typename?: 'admin_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Admin_Max_Fields>;
  min?: Maybe<Admin_Min_Fields>;
};


/** aggregate fields of "admin" */
export type Admin_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Admin_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "admin". All fields are combined with a logical 'AND'. */
export type Admin_Bool_Exp = {
  _and?: InputMaybe<Array<Admin_Bool_Exp>>;
  _not?: InputMaybe<Admin_Bool_Exp>;
  _or?: InputMaybe<Array<Admin_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "admin" */
export enum Admin_Constraint {
  /** unique or primary key constraint on columns "id" */
  AdminPkey = 'admin_pkey',
  /** unique or primary key constraint on columns "username" */
  AdminUseranameKey = 'admin_useraname_key'
}

/** input type for inserting data into table "admin" */
export type Admin_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Admin_Max_Fields = {
  __typename?: 'admin_max_fields';
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Admin_Min_Fields = {
  __typename?: 'admin_min_fields';
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "admin" */
export type Admin_Mutation_Response = {
  __typename?: 'admin_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Admin>;
};

/** on_conflict condition type for table "admin" */
export type Admin_On_Conflict = {
  constraint: Admin_Constraint;
  update_columns?: Array<Admin_Update_Column>;
  where?: InputMaybe<Admin_Bool_Exp>;
};

/** Ordering options when selecting data from "admin". */
export type Admin_Order_By = {
  id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: admin */
export type Admin_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "admin" */
export enum Admin_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "admin" */
export type Admin_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "admin" */
export type Admin_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Admin_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Admin_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** update columns of table "admin" */
export enum Admin_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Username = 'username'
}

export type Admin_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Admin_Set_Input>;
  where: Admin_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** Admin registration */
  adminOneRegister?: Maybe<AdminRegisterOutput>;
  /** delete data from the table: "admin" */
  delete_admin?: Maybe<Admin_Mutation_Response>;
  /** delete single row from the table: "admin" */
  delete_admin_by_pk?: Maybe<Admin>;
  /** delete data from the table: "pizzas" */
  delete_pizzas?: Maybe<Pizzas_Mutation_Response>;
  /** delete single row from the table: "pizzas" */
  delete_pizzas_by_pk?: Maybe<Pizzas>;
  /** insert data into the table: "admin" */
  insert_admin?: Maybe<Admin_Mutation_Response>;
  /** insert a single row into the table: "admin" */
  insert_admin_one?: Maybe<Admin>;
  /** insert data into the table: "pizzas" */
  insert_pizzas?: Maybe<Pizzas_Mutation_Response>;
  /** insert a single row into the table: "pizzas" */
  insert_pizzas_one?: Maybe<Pizzas>;
  /** update data of the table: "admin" */
  update_admin?: Maybe<Admin_Mutation_Response>;
  /** update single row of the table: "admin" */
  update_admin_by_pk?: Maybe<Admin>;
  /** update multiples rows of table: "admin" */
  update_admin_many?: Maybe<Array<Maybe<Admin_Mutation_Response>>>;
  /** update data of the table: "pizzas" */
  update_pizzas?: Maybe<Pizzas_Mutation_Response>;
  /** update single row of the table: "pizzas" */
  update_pizzas_by_pk?: Maybe<Pizzas>;
  /** update multiples rows of table: "pizzas" */
  update_pizzas_many?: Maybe<Array<Maybe<Pizzas_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootAdminOneRegisterArgs = {
  args: AdminRegisterInput;
};


/** mutation root */
export type Mutation_RootDelete_AdminArgs = {
  where: Admin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Admin_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PizzasArgs = {
  where: Pizzas_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Pizzas_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_AdminArgs = {
  objects: Array<Admin_Insert_Input>;
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Admin_OneArgs = {
  object: Admin_Insert_Input;
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PizzasArgs = {
  objects: Array<Pizzas_Insert_Input>;
  on_conflict?: InputMaybe<Pizzas_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pizzas_OneArgs = {
  object: Pizzas_Insert_Input;
  on_conflict?: InputMaybe<Pizzas_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AdminArgs = {
  _set?: InputMaybe<Admin_Set_Input>;
  where: Admin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Admin_By_PkArgs = {
  _set?: InputMaybe<Admin_Set_Input>;
  pk_columns: Admin_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Admin_ManyArgs = {
  updates: Array<Admin_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PizzasArgs = {
  _inc?: InputMaybe<Pizzas_Inc_Input>;
  _set?: InputMaybe<Pizzas_Set_Input>;
  where: Pizzas_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pizzas_By_PkArgs = {
  _inc?: InputMaybe<Pizzas_Inc_Input>;
  _set?: InputMaybe<Pizzas_Set_Input>;
  pk_columns: Pizzas_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Pizzas_ManyArgs = {
  updates: Array<Pizzas_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "pizzas" */
export type Pizzas = {
  __typename?: 'pizzas';
  id: Scalars['uuid'];
  image: Scalars['String'];
  ingredients: Scalars['String'];
  price: Scalars['numeric'];
  title: Scalars['String'];
  weight: Scalars['numeric'];
};

/** aggregated selection of "pizzas" */
export type Pizzas_Aggregate = {
  __typename?: 'pizzas_aggregate';
  aggregate?: Maybe<Pizzas_Aggregate_Fields>;
  nodes: Array<Pizzas>;
};

/** aggregate fields of "pizzas" */
export type Pizzas_Aggregate_Fields = {
  __typename?: 'pizzas_aggregate_fields';
  avg?: Maybe<Pizzas_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Pizzas_Max_Fields>;
  min?: Maybe<Pizzas_Min_Fields>;
  stddev?: Maybe<Pizzas_Stddev_Fields>;
  stddev_pop?: Maybe<Pizzas_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pizzas_Stddev_Samp_Fields>;
  sum?: Maybe<Pizzas_Sum_Fields>;
  var_pop?: Maybe<Pizzas_Var_Pop_Fields>;
  var_samp?: Maybe<Pizzas_Var_Samp_Fields>;
  variance?: Maybe<Pizzas_Variance_Fields>;
};


/** aggregate fields of "pizzas" */
export type Pizzas_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pizzas_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Pizzas_Avg_Fields = {
  __typename?: 'pizzas_avg_fields';
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "pizzas". All fields are combined with a logical 'AND'. */
export type Pizzas_Bool_Exp = {
  _and?: InputMaybe<Array<Pizzas_Bool_Exp>>;
  _not?: InputMaybe<Pizzas_Bool_Exp>;
  _or?: InputMaybe<Array<Pizzas_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  ingredients?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  weight?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "pizzas" */
export enum Pizzas_Constraint {
  /** unique or primary key constraint on columns "id" */
  PizzasPkey = 'pizzas_pkey'
}

/** input type for incrementing numeric columns in table "pizzas" */
export type Pizzas_Inc_Input = {
  price?: InputMaybe<Scalars['numeric']>;
  weight?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "pizzas" */
export type Pizzas_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  ingredients?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  title?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Pizzas_Max_Fields = {
  __typename?: 'pizzas_max_fields';
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  title?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Pizzas_Min_Fields = {
  __typename?: 'pizzas_min_fields';
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  title?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "pizzas" */
export type Pizzas_Mutation_Response = {
  __typename?: 'pizzas_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Pizzas>;
};

/** on_conflict condition type for table "pizzas" */
export type Pizzas_On_Conflict = {
  constraint: Pizzas_Constraint;
  update_columns?: Array<Pizzas_Update_Column>;
  where?: InputMaybe<Pizzas_Bool_Exp>;
};

/** Ordering options when selecting data from "pizzas". */
export type Pizzas_Order_By = {
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  ingredients?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** primary key columns input for table: pizzas */
export type Pizzas_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "pizzas" */
export enum Pizzas_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Ingredients = 'ingredients',
  /** column name */
  Price = 'price',
  /** column name */
  Title = 'title',
  /** column name */
  Weight = 'weight'
}

/** input type for updating data in table "pizzas" */
export type Pizzas_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  ingredients?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  title?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Pizzas_Stddev_Fields = {
  __typename?: 'pizzas_stddev_fields';
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Pizzas_Stddev_Pop_Fields = {
  __typename?: 'pizzas_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Pizzas_Stddev_Samp_Fields = {
  __typename?: 'pizzas_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "pizzas" */
export type Pizzas_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pizzas_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pizzas_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  ingredients?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  title?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['numeric']>;
};

/** aggregate sum on columns */
export type Pizzas_Sum_Fields = {
  __typename?: 'pizzas_sum_fields';
  price?: Maybe<Scalars['numeric']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** update columns of table "pizzas" */
export enum Pizzas_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Ingredients = 'ingredients',
  /** column name */
  Price = 'price',
  /** column name */
  Title = 'title',
  /** column name */
  Weight = 'weight'
}

export type Pizzas_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Pizzas_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Pizzas_Set_Input>;
  where: Pizzas_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Pizzas_Var_Pop_Fields = {
  __typename?: 'pizzas_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Pizzas_Var_Samp_Fields = {
  __typename?: 'pizzas_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Pizzas_Variance_Fields = {
  __typename?: 'pizzas_variance_fields';
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "admin" */
  admin: Array<Admin>;
  /** adminGetMe */
  adminGetMe?: Maybe<AdminGetMeOutput>;
  /** Login admin */
  adminLogin?: Maybe<AdminLoginOutput>;
  /** fetch aggregated fields from the table: "admin" */
  admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "admin" using primary key columns */
  admin_by_pk?: Maybe<Admin>;
  cloudinarySignature?: Maybe<CloudinarySignatureOutput>;
  /** fetch data from the table: "pizzas" */
  pizzas: Array<Pizzas>;
  /** fetch aggregated fields from the table: "pizzas" */
  pizzas_aggregate: Pizzas_Aggregate;
  /** fetch data from the table: "pizzas" using primary key columns */
  pizzas_by_pk?: Maybe<Pizzas>;
};


export type Query_RootAdminArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Query_RootAdminLoginArgs = {
  args: AdminLoginInput;
};


export type Query_RootAdmin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Query_RootAdmin_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPizzasArgs = {
  distinct_on?: InputMaybe<Array<Pizzas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizzas_Order_By>>;
  where?: InputMaybe<Pizzas_Bool_Exp>;
};


export type Query_RootPizzas_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pizzas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizzas_Order_By>>;
  where?: InputMaybe<Pizzas_Bool_Exp>;
};


export type Query_RootPizzas_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "admin" */
  admin: Array<Admin>;
  /** fetch aggregated fields from the table: "admin" */
  admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "admin" using primary key columns */
  admin_by_pk?: Maybe<Admin>;
  /** fetch data from the table in a streaming manner: "admin" */
  admin_stream: Array<Admin>;
  /** fetch data from the table: "pizzas" */
  pizzas: Array<Pizzas>;
  /** fetch aggregated fields from the table: "pizzas" */
  pizzas_aggregate: Pizzas_Aggregate;
  /** fetch data from the table: "pizzas" using primary key columns */
  pizzas_by_pk?: Maybe<Pizzas>;
  /** fetch data from the table in a streaming manner: "pizzas" */
  pizzas_stream: Array<Pizzas>;
};


export type Subscription_RootAdminArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootAdmin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootAdmin_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAdmin_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Admin_Stream_Cursor_Input>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootPizzasArgs = {
  distinct_on?: InputMaybe<Array<Pizzas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizzas_Order_By>>;
  where?: InputMaybe<Pizzas_Bool_Exp>;
};


export type Subscription_RootPizzas_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pizzas_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pizzas_Order_By>>;
  where?: InputMaybe<Pizzas_Bool_Exp>;
};


export type Subscription_RootPizzas_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPizzas_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Pizzas_Stream_Cursor_Input>>;
  where?: InputMaybe<Pizzas_Bool_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetAdminByUsernameQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type GetAdminByUsernameQuery = { __typename?: 'query_root', admin: Array<{ __typename?: 'admin', id: any, password: string }> };

export type GetAdminByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetAdminByIdQuery = { __typename?: 'query_root', admin_by_pk?: { __typename?: 'admin', id: any, username: string } | null };

export type InsertAdminMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type InsertAdminMutation = { __typename?: 'mutation_root', insert_admin_one?: { __typename?: 'admin', id: any } | null };


export const GetAdminByUsernameDocument = gql`
    query GetAdminByUsername($username: String!) {
  admin(where: {username: {_eq: $username}}) {
    id
    password
  }
}
    `;
export const GetAdminByIdDocument = gql`
    query GetAdminById($id: uuid!) {
  admin_by_pk(id: $id) {
    id
    username
  }
}
    `;
export const InsertAdminDocument = gql`
    mutation InsertAdmin($username: String!, $password: String!) {
  insert_admin_one(object: {username: $username, password: $password}) {
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetAdminByUsername(variables: GetAdminByUsernameQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAdminByUsernameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAdminByUsernameQuery>(GetAdminByUsernameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAdminByUsername', 'query');
    },
    GetAdminById(variables: GetAdminByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAdminByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAdminByIdQuery>(GetAdminByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAdminById', 'query');
    },
    InsertAdmin(variables: InsertAdminMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertAdminMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertAdminMutation>(InsertAdminDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'InsertAdmin', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;