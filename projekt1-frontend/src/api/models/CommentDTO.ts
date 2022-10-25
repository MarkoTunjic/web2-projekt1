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
import type { PrincipalDTO } from './PrincipalDTO';
import {
    PrincipalDTOFromJSON,
    PrincipalDTOFromJSONTyped,
    PrincipalDTOToJSON,
} from './PrincipalDTO';

/**
 * 
 * @export
 * @interface CommentDTO
 */
export interface CommentDTO {
    /**
     * 
     * @type {number}
     * @memberof CommentDTO
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof CommentDTO
     */
    commentText?: string;
    /**
     * 
     * @type {Date}
     * @memberof CommentDTO
     */
    datePosted?: Date;
    /**
     * 
     * @type {PrincipalDTO}
     * @memberof CommentDTO
     */
    principal?: PrincipalDTO;
}

/**
 * Check if a given object implements the CommentDTO interface.
 */
export function instanceOfCommentDTO(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommentDTOFromJSON(json: any): CommentDTO {
    return CommentDTOFromJSONTyped(json, false);
}

export function CommentDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommentDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'commentText': !exists(json, 'commentText') ? undefined : json['commentText'],
        'datePosted': !exists(json, 'datePosted') ? undefined : (new Date(json['datePosted'])),
        'principal': !exists(json, 'principal') ? undefined : PrincipalDTOFromJSON(json['principal']),
    };
}

export function CommentDTOToJSON(value?: CommentDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'commentText': value.commentText,
        'datePosted': value.datePosted === undefined ? undefined : (value.datePosted.toISOString()),
        'principal': PrincipalDTOToJSON(value.principal),
    };
}

