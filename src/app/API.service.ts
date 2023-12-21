/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateUser: OnCreateUserSubscription;
  onUpdateUser: OnUpdateUserSubscription;
  onDeleteUser: OnDeleteUserSubscription;
  onCreateRole: OnCreateRoleSubscription;
  onUpdateRole: OnUpdateRoleSubscription;
  onDeleteRole: OnDeleteRoleSubscription;
};

export type CreateUserInput = {
  id?: string | null;
  email?: string | null;
  name: string;
  profileIUrlmage?: string | null;
  userRoleId?: string | null;
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null;
  name?: ModelStringInput | null;
  profileIUrlmage?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
  userRoleId?: ModelIDInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type User = {
  __typename: "User";
  id: string;
  Role?: Role | null;
  email?: string | null;
  name: string;
  profileIUrlmage?: string | null;
  createdAt: string;
  updatedAt: string;
  userRoleId?: string | null;
};

export type Role = {
  __typename: "Role";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserInput = {
  id: string;
  email?: string | null;
  name?: string | null;
  profileIUrlmage?: string | null;
  userRoleId?: string | null;
};

export type DeleteUserInput = {
  id: string;
};

export type CreateRoleInput = {
  id?: string | null;
  name: string;
};

export type ModelRoleConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelRoleConditionInput | null> | null;
  or?: Array<ModelRoleConditionInput | null> | null;
  not?: ModelRoleConditionInput | null;
};

export type UpdateRoleInput = {
  id: string;
  name?: string | null;
};

export type DeleteRoleInput = {
  id: string;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  email?: ModelStringInput | null;
  name?: ModelStringInput | null;
  profileIUrlmage?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
  userRoleId?: ModelIDInput | null;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items: Array<User | null>;
  nextToken?: string | null;
};

export type ModelRoleFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelRoleFilterInput | null> | null;
  or?: Array<ModelRoleFilterInput | null> | null;
  not?: ModelRoleFilterInput | null;
};

export type ModelRoleConnection = {
  __typename: "ModelRoleConnection";
  items: Array<Role | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  email?: ModelSubscriptionStringInput | null;
  name?: ModelSubscriptionStringInput | null;
  profileIUrlmage?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionRoleFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionRoleFilterInput | null> | null;
  or?: Array<ModelSubscriptionRoleFilterInput | null> | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  Role?: {
    __typename: "Role";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  email?: string | null;
  name: string;
  profileIUrlmage?: string | null;
  createdAt: string;
  updatedAt: string;
  userRoleId?: string | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  Role?: {
    __typename: "Role";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  email?: string | null;
  name: string;
  profileIUrlmage?: string | null;
  createdAt: string;
  updatedAt: string;
  userRoleId?: string | null;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  Role?: {
    __typename: "Role";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  email?: string | null;
  name: string;
  profileIUrlmage?: string | null;
  createdAt: string;
  updatedAt: string;
  userRoleId?: string | null;
};

export type CreateRoleMutation = {
  __typename: "Role";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRoleMutation = {
  __typename: "Role";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRoleMutation = {
  __typename: "Role";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  Role?: {
    __typename: "Role";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  email?: string | null;
  name: string;
  profileIUrlmage?: string | null;
  createdAt: string;
  updatedAt: string;
  userRoleId?: string | null;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    email?: string | null;
    name: string;
    profileIUrlmage?: string | null;
    createdAt: string;
    updatedAt: string;
    userRoleId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetRoleQuery = {
  __typename: "Role";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type ListRolesQuery = {
  __typename: "ModelRoleConnection";
  items: Array<{
    __typename: "Role";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  Role?: {
    __typename: "Role";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  email?: string | null;
  name: string;
  profileIUrlmage?: string | null;
  createdAt: string;
  updatedAt: string;
  userRoleId?: string | null;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  Role?: {
    __typename: "Role";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  email?: string | null;
  name: string;
  profileIUrlmage?: string | null;
  createdAt: string;
  updatedAt: string;
  userRoleId?: string | null;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  Role?: {
    __typename: "Role";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  email?: string | null;
  name: string;
  profileIUrlmage?: string | null;
  createdAt: string;
  updatedAt: string;
  userRoleId?: string | null;
};

export type OnCreateRoleSubscription = {
  __typename: "Role";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRoleSubscription = {
  __typename: "Role";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRoleSubscription = {
  __typename: "Role";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          Role {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          email
          name
          profileIUrlmage
          createdAt
          updatedAt
          userRoleId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          Role {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          email
          name
          profileIUrlmage
          createdAt
          updatedAt
          userRoleId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          Role {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          email
          name
          profileIUrlmage
          createdAt
          updatedAt
          userRoleId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateRole(
    input: CreateRoleInput,
    condition?: ModelRoleConditionInput
  ): Promise<CreateRoleMutation> {
    const statement = `mutation CreateRole($input: CreateRoleInput!, $condition: ModelRoleConditionInput) {
        createRole(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRoleMutation>response.data.createRole;
  }
  async UpdateRole(
    input: UpdateRoleInput,
    condition?: ModelRoleConditionInput
  ): Promise<UpdateRoleMutation> {
    const statement = `mutation UpdateRole($input: UpdateRoleInput!, $condition: ModelRoleConditionInput) {
        updateRole(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRoleMutation>response.data.updateRole;
  }
  async DeleteRole(
    input: DeleteRoleInput,
    condition?: ModelRoleConditionInput
  ): Promise<DeleteRoleMutation> {
    const statement = `mutation DeleteRole($input: DeleteRoleInput!, $condition: ModelRoleConditionInput) {
        deleteRole(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRoleMutation>response.data.deleteRole;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          Role {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          email
          name
          profileIUrlmage
          createdAt
          updatedAt
          userRoleId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            email
            name
            profileIUrlmage
            createdAt
            updatedAt
            userRoleId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetRole(id: string): Promise<GetRoleQuery> {
    const statement = `query GetRole($id: ID!) {
        getRole(id: $id) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRoleQuery>response.data.getRole;
  }
  async ListRoles(
    filter?: ModelRoleFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRolesQuery> {
    const statement = `query ListRoles($filter: ModelRoleFilterInput, $limit: Int, $nextToken: String) {
        listRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRolesQuery>response.data.listRoles;
  }
  OnCreateUserListener(
    filter?: ModelSubscriptionUserFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
  > {
    const statement = `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
        onCreateUser(filter: $filter) {
          __typename
          id
          Role {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          email
          name
          profileIUrlmage
          createdAt
          updatedAt
          userRoleId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
    >;
  }

  OnUpdateUserListener(
    filter?: ModelSubscriptionUserFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
  > {
    const statement = `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
        onUpdateUser(filter: $filter) {
          __typename
          id
          Role {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          email
          name
          profileIUrlmage
          createdAt
          updatedAt
          userRoleId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
    >;
  }

  OnDeleteUserListener(
    filter?: ModelSubscriptionUserFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
  > {
    const statement = `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
        onDeleteUser(filter: $filter) {
          __typename
          id
          Role {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          email
          name
          profileIUrlmage
          createdAt
          updatedAt
          userRoleId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
    >;
  }

  OnCreateRoleListener(
    filter?: ModelSubscriptionRoleFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRole">>
  > {
    const statement = `subscription OnCreateRole($filter: ModelSubscriptionRoleFilterInput) {
        onCreateRole(filter: $filter) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRole">>
    >;
  }

  OnUpdateRoleListener(
    filter?: ModelSubscriptionRoleFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRole">>
  > {
    const statement = `subscription OnUpdateRole($filter: ModelSubscriptionRoleFilterInput) {
        onUpdateRole(filter: $filter) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRole">>
    >;
  }

  OnDeleteRoleListener(
    filter?: ModelSubscriptionRoleFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRole">>
  > {
    const statement = `subscription OnDeleteRole($filter: ModelSubscriptionRoleFilterInput) {
        onDeleteRole(filter: $filter) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRole">>
    >;
  }
}
