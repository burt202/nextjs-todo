import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  addTask: Task;
};


export type MutationAddTaskArgs = {
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  tasks: Array<Task>;
};

export type Task = {
  __typename?: 'Task';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type ListTasksQueryVariables = Exact<{ [key: string]: never; }>;


export type ListTasksQuery = { __typename?: 'Query', tasks: Array<{ __typename?: 'Task', id: string, name: string }> };

export type AddTaskMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type AddTaskMutation = { __typename?: 'Mutation', addTask: { __typename?: 'Task', id: string } };


export const ListTasksDocument = gql`
    query ListTasks {
  tasks {
    id
    name
  }
}
    `;

/**
 * __useListTasksQuery__
 *
 * To run a query within a React component, call `useListTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useListTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useListTasksQuery(baseOptions?: Apollo.QueryHookOptions<ListTasksQuery, ListTasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListTasksQuery, ListTasksQueryVariables>(ListTasksDocument, options);
      }
export function useListTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListTasksQuery, ListTasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListTasksQuery, ListTasksQueryVariables>(ListTasksDocument, options);
        }
export type ListTasksQueryHookResult = ReturnType<typeof useListTasksQuery>;
export type ListTasksLazyQueryHookResult = ReturnType<typeof useListTasksLazyQuery>;
export type ListTasksQueryResult = Apollo.QueryResult<ListTasksQuery, ListTasksQueryVariables>;
export const AddTaskDocument = gql`
    mutation AddTask($name: String!) {
  addTask(name: $name) {
    id
  }
}
    `;
export type AddTaskMutationFn = Apollo.MutationFunction<AddTaskMutation, AddTaskMutationVariables>;

/**
 * __useAddTaskMutation__
 *
 * To run a mutation, you first call `useAddTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTaskMutation, { data, loading, error }] = useAddTaskMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useAddTaskMutation(baseOptions?: Apollo.MutationHookOptions<AddTaskMutation, AddTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTaskMutation, AddTaskMutationVariables>(AddTaskDocument, options);
      }
export type AddTaskMutationHookResult = ReturnType<typeof useAddTaskMutation>;
export type AddTaskMutationResult = Apollo.MutationResult<AddTaskMutation>;
export type AddTaskMutationOptions = Apollo.BaseMutationOptions<AddTaskMutation, AddTaskMutationVariables>;