/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  EditGameRequest,
  GameDTO,
  NewGameRequest,
} from '../models';
import {
    EditGameRequestFromJSON,
    EditGameRequestToJSON,
    GameDTOFromJSON,
    GameDTOToJSON,
    NewGameRequestFromJSON,
    NewGameRequestToJSON,
} from '../models';

export interface CreateNewGameRequest {
    roundId: number;
    newGameRequest: NewGameRequest;
}

export interface EditScoresRequest {
    id: number;
    editGameRequest: EditGameRequest;
}

export interface GetAllGamesByRoundIdRequest {
    roundId: number;
}

/**
 * 
 */
export class GameControllerApi extends runtime.BaseAPI {

    /**
     */
    async createNewGameRaw(requestParameters: CreateNewGameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameDTO>> {
        if (requestParameters.roundId === null || requestParameters.roundId === undefined) {
            throw new runtime.RequiredError('roundId','Required parameter requestParameters.roundId was null or undefined when calling createNewGame.');
        }

        if (requestParameters.newGameRequest === null || requestParameters.newGameRequest === undefined) {
            throw new runtime.RequiredError('newGameRequest','Required parameter requestParameters.newGameRequest was null or undefined when calling createNewGame.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuthentication", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/games/round/{roundId}`.replace(`{${"roundId"}}`, encodeURIComponent(String(requestParameters.roundId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewGameRequestToJSON(requestParameters.newGameRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameDTOFromJSON(jsonValue));
    }

    /**
     */
    async createNewGame(requestParameters: CreateNewGameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameDTO> {
        const response = await this.createNewGameRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async editScoresRaw(requestParameters: EditScoresRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameDTO>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling editScores.');
        }

        if (requestParameters.editGameRequest === null || requestParameters.editGameRequest === undefined) {
            throw new runtime.RequiredError('editGameRequest','Required parameter requestParameters.editGameRequest was null or undefined when calling editScores.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuthentication", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/games/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: EditGameRequestToJSON(requestParameters.editGameRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameDTOFromJSON(jsonValue));
    }

    /**
     */
    async editScores(requestParameters: EditScoresRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameDTO> {
        const response = await this.editScoresRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getAllGamesByRoundIdRaw(requestParameters: GetAllGamesByRoundIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GameDTO>>> {
        if (requestParameters.roundId === null || requestParameters.roundId === undefined) {
            throw new runtime.RequiredError('roundId','Required parameter requestParameters.roundId was null or undefined when calling getAllGamesByRoundId.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/games/round/{roundId}`.replace(`{${"roundId"}}`, encodeURIComponent(String(requestParameters.roundId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GameDTOFromJSON));
    }

    /**
     */
    async getAllGamesByRoundId(requestParameters: GetAllGamesByRoundIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GameDTO>> {
        const response = await this.getAllGamesByRoundIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
