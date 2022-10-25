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
 * @interface PrincipalDTO
 */
export interface PrincipalDTO {
    /**
     * 
     * @type {number}
     * @memberof PrincipalDTO
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof PrincipalDTO
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof PrincipalDTO
     */
    principalType?: PrincipalDTOPrincipalTypeEnum;
}


/**
 * @export
 */
export const PrincipalDTOPrincipalTypeEnum = {
    User: 'USER',
    Admin: 'ADMIN'
} as const;
export type PrincipalDTOPrincipalTypeEnum = typeof PrincipalDTOPrincipalTypeEnum[keyof typeof PrincipalDTOPrincipalTypeEnum];


/**
 * Check if a given object implements the PrincipalDTO interface.
 */
export function instanceOfPrincipalDTO(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PrincipalDTOFromJSON(json: any): PrincipalDTO {
    return PrincipalDTOFromJSONTyped(json, false);
}

export function PrincipalDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrincipalDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'principalType': !exists(json, 'principalType') ? undefined : json['principalType'],
    };
}

export function PrincipalDTOToJSON(value?: PrincipalDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'email': value.email,
        'principalType': value.principalType,
    };
}

