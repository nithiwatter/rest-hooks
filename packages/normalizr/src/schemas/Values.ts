import PolymorphicSchema from './Polymorphic.js';

/**
 * Represents variably sized objects
 * @see https://resthooks.io/docs/api/Values
 */
export default class ValuesSchema extends PolymorphicSchema {
  normalize(input, parent, key, visit, addEntity, visitedEntities) {
    return Object.keys(input).reduce((output, key, index) => {
      const value = input[key];
      return value !== undefined && value !== null
        ? {
            ...output,
            [key]: this.normalizeValue(
              value,
              input,
              key,
              visit,
              addEntity,
              visitedEntities,
            ),
          }
        : output;
    }, {});
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  denormalize(input: {}, unvisit: any) {
    let found = true;
    let deleted = false;
    return [
      Object.keys(input).reduce((output, key) => {
        const entityOrId = input[key];
        const [value, foundItem, deletedItem] = this.denormalizeValue(
          entityOrId,
          unvisit,
        );
        if (!foundItem) {
          found = false;
        }
        if (deletedItem) {
          deleted = true;
        }
        if (!foundItem || deletedItem) return output;
        return {
          ...output,
          [key]: value,
        };
      }, {}),
      found,
      deleted,
    ];
  }

  infer(args, indexes, recurse) {
    return undefined;
  }
}
