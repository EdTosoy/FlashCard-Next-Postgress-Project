import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type CartList = {
  __typename?: 'CartList';
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  url: Scalars['String'];
  price: Scalars['String'];
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['Int']>;
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  bye: Scalars['String'];
  cartList?: Maybe<Array<CartList>>;
  hello: Scalars['String'];
  me?: Maybe<User>;
  UserList: Array<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addToCart: Scalars['Boolean'];
  charge: Scalars['Boolean'];
  login: LoginResponse;
  logout: Scalars['Boolean'];
  register: Scalars['Boolean'];
  removeFromCart: Scalars['Boolean'];
};


export type MutationAddToCartArgs = {
  url: Scalars['String'];
  username: Scalars['String'];
  price: Scalars['String'];
  name: Scalars['String'];
};


export type MutationChargeArgs = {
  amount: Scalars['Float'];
  id: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRemoveFromCartArgs = {
  username: Scalars['String'];
  id: Scalars['Float'];
};

export type AddToCartMutationVariables = Exact<{
  username: Scalars['String'];
  price: Scalars['String'];
  name: Scalars['String'];
  url: Scalars['String'];
}>;


export type AddToCartMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addToCart'>
);

export type CartListQueryVariables = Exact<{ [key: string]: never; }>;


export type CartListQuery = (
  { __typename?: 'Query' }
  & { cartList?: Maybe<Array<(
    { __typename?: 'CartList' }
    & Pick<CartList, 'id' | 'name' | 'url' | 'price' | 'username'>
  )>> }
);

export type ChargeMutationVariables = Exact<{
  amount: Scalars['Float'];
  id: Scalars['String'];
}>;


export type ChargeMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'charge'>
);

export type LoginMutationVariables = Exact<{
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken'>
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'register'>
);

export type RemoveFromCartMutationVariables = Exact<{
  username: Scalars['String'];
  id: Scalars['Float'];
}>;


export type RemoveFromCartMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeFromCart'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'username' | 'password'>
  )> }
);


export const AddToCartDocument = gql`
    mutation AddToCart($username: String!, $price: String!, $name: String!, $url: String!) {
  addToCart(username: $username, price: $price, name: $name, url: $url)
}
    `;
export type AddToCartMutationFn = Apollo.MutationFunction<AddToCartMutation, AddToCartMutationVariables>;

/**
 * __useAddToCartMutation__
 *
 * To run a mutation, you first call `useAddToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToCartMutation, { data, loading, error }] = useAddToCartMutation({
 *   variables: {
 *      username: // value for 'username'
 *      price: // value for 'price'
 *      name: // value for 'name'
 *      url: // value for 'url'
 *   },
 * });
 */
export function useAddToCartMutation(baseOptions?: Apollo.MutationHookOptions<AddToCartMutation, AddToCartMutationVariables>) {
        return Apollo.useMutation<AddToCartMutation, AddToCartMutationVariables>(AddToCartDocument, baseOptions);
      }
export type AddToCartMutationHookResult = ReturnType<typeof useAddToCartMutation>;
export type AddToCartMutationResult = Apollo.MutationResult<AddToCartMutation>;
export type AddToCartMutationOptions = Apollo.BaseMutationOptions<AddToCartMutation, AddToCartMutationVariables>;
export const CartListDocument = gql`
    query CartList {
  cartList {
    id
    name
    url
    price
    username
  }
}
    `;

/**
 * __useCartListQuery__
 *
 * To run a query within a React component, call `useCartListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCartListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCartListQuery({
 *   variables: {
 *   },
 * });
 */
export function useCartListQuery(baseOptions?: Apollo.QueryHookOptions<CartListQuery, CartListQueryVariables>) {
        return Apollo.useQuery<CartListQuery, CartListQueryVariables>(CartListDocument, baseOptions);
      }
export function useCartListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CartListQuery, CartListQueryVariables>) {
          return Apollo.useLazyQuery<CartListQuery, CartListQueryVariables>(CartListDocument, baseOptions);
        }
export type CartListQueryHookResult = ReturnType<typeof useCartListQuery>;
export type CartListLazyQueryHookResult = ReturnType<typeof useCartListLazyQuery>;
export type CartListQueryResult = Apollo.QueryResult<CartListQuery, CartListQueryVariables>;
export const ChargeDocument = gql`
    mutation Charge($amount: Float!, $id: String!) {
  charge(amount: $amount, id: $id)
}
    `;
export type ChargeMutationFn = Apollo.MutationFunction<ChargeMutation, ChargeMutationVariables>;

/**
 * __useChargeMutation__
 *
 * To run a mutation, you first call `useChargeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChargeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [chargeMutation, { data, loading, error }] = useChargeMutation({
 *   variables: {
 *      amount: // value for 'amount'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useChargeMutation(baseOptions?: Apollo.MutationHookOptions<ChargeMutation, ChargeMutationVariables>) {
        return Apollo.useMutation<ChargeMutation, ChargeMutationVariables>(ChargeDocument, baseOptions);
      }
export type ChargeMutationHookResult = ReturnType<typeof useChargeMutation>;
export type ChargeMutationResult = Apollo.MutationResult<ChargeMutation>;
export type ChargeMutationOptions = Apollo.BaseMutationOptions<ChargeMutation, ChargeMutationVariables>;
export const LoginDocument = gql`
    mutation Login($password: String!, $email: String!) {
  login(password: $password, email: $email) {
    accessToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $password: String!, $username: String!) {
  register(email: $email, password: $password, username: $username)
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const RemoveFromCartDocument = gql`
    mutation RemoveFromCart($username: String!, $id: Float!) {
  removeFromCart(username: $username, id: $id)
}
    `;
export type RemoveFromCartMutationFn = Apollo.MutationFunction<RemoveFromCartMutation, RemoveFromCartMutationVariables>;

/**
 * __useRemoveFromCartMutation__
 *
 * To run a mutation, you first call `useRemoveFromCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFromCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFromCartMutation, { data, loading, error }] = useRemoveFromCartMutation({
 *   variables: {
 *      username: // value for 'username'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveFromCartMutation(baseOptions?: Apollo.MutationHookOptions<RemoveFromCartMutation, RemoveFromCartMutationVariables>) {
        return Apollo.useMutation<RemoveFromCartMutation, RemoveFromCartMutationVariables>(RemoveFromCartDocument, baseOptions);
      }
export type RemoveFromCartMutationHookResult = ReturnType<typeof useRemoveFromCartMutation>;
export type RemoveFromCartMutationResult = Apollo.MutationResult<RemoveFromCartMutation>;
export type RemoveFromCartMutationOptions = Apollo.BaseMutationOptions<RemoveFromCartMutation, RemoveFromCartMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    email
    username
    password
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;