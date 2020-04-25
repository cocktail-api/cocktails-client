/**
 * Cocktail and ingredient API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * A result of a search for cocktails and ingredients
 */
export interface SearchResult {
  /**
   * The ID of the resource that was found
   */
  id: number;
  name: string;
  description: string;
  type: SearchResult.TypeEnum;
}
export namespace SearchResult {
  export type TypeEnum = 'INGREDIENT' | 'COCKTAIL';
  export const TypeEnum = {
    INGREDIENT: 'INGREDIENT' as TypeEnum,
    COCKTAIL: 'COCKTAIL' as TypeEnum,
  };
}
