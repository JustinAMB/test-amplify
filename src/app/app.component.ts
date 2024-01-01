import { Component, OnInit } from '@angular/core';
import { StorageError, uploadData, getUrl } from 'aws-amplify/storage';

import { ModelRoleFilterInput } from './API.service';
import { ListRolesQuery } from './API.service';
import { graphqlOperation, GraphQLResult } from '@aws-amplify/api-graphql';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent implements OnInit {
  title = 'test-amplify';
  constructor() {}
  ngOnInit(): void {}

  async onUpload(e) {
    const file = e.target.files[0];
    try {
      const { result } = await uploadData({
        key: file.name,
        data: file,
      });
      const urlItem = await result;

      const { url } = await getUrl({
        key: urlItem.key,
        options: {
          expiresIn: 60 * 60 * 48 * 365,
        },
      });
      console.log(url);

      console.log('Succeeded: ', result);
    } catch (error) {
      console.log('Error : ', error);
    }
  }

  async getRoles() {
    console.log('1');
   // const result = await this.ListRoles(null, 100, '');
    //console.log(result);
  }
/*
  async ListRoles(
    filter?: ModelRoleFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRolesQuery> {
    console.log(API.Amplify.getConfig);

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

    const response = (await graphqlOperation(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    console.log(response);
    return <ListRolesQuery>response.data.listRoles;
  }
  */
}
