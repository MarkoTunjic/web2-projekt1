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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface NewGameRequest
 */
export interface NewGameRequest {
    /**
     * 
     * @type {number}
     * @memberof NewGameRequest
     */
    firstCompetitorId?: number;
    /**
     * 
     * @type {number}
     * @memberof NewGameRequest
     */
    secondCompetitorId?: number;
    /**
     * 
     * @type {number}
     * @memberof NewGameRequest
     */
    firstCompetitorScore?: number;
    /**
     * 
     * @type {number}
     * @memberof NewGameRequest
     */
    secondCompetitorScore?: number;
    /**
     * 
     * @type {Date}
     * @memberof NewGameRequest
     */
    date?: Date;
}

/**
 * Check if a given object implements the NewGameRequest interface.
 */
export function instanceOfNewGameRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NewGameRequestFromJSON(json: any): NewGameRequest {
    return NewGameRequestFromJSONTyped(json, false);
}

export function NewGameRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewGameRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstCompetitorId': !exists(json, 'firstCompetitorId') ? undefined : json['firstCompetitorId'],
        'secondCompetitorId': !exists(json, 'secondCompetitorId') ? undefined : json['secondCompetitorId'],
        'firstCompetitorScore': !exists(json, 'firstCompetitorScore') ? undefined : json['firstCompetitorScore'],
        'secondCompetitorScore': !exists(json, 'secondCompetitorScore') ? undefined : json['secondCompetitorScore'],
        'date': !exists(json, 'date') ? undefined : (new Date(json['date'])),
    };
}

export function NewGameRequestToJSON(value?: NewGameRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'firstCompetitorId': value.firstCompetitorId,
        'secondCompetitorId': value.secondCompetitorId,
        'firstCompetitorScore': value.firstCompetitorScore,
        'secondCompetitorScore': value.secondCompetitorScore,
        'date': value.date === undefined ? undefined : (value.date.toISOString()),
    };
}

