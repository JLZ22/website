import type { CollectionEntry, DataEntryMap } from "astro:content";

export function orderCollectionEntries<T extends keyof DataEntryMap>(
  collection: CollectionEntry<T>[],
  order: string[],
) {
  function getIndex(project: CollectionEntry<T>) {
    let ind = order.indexOf(project.data.title);
    return ind === -1 ? order.length : ind;
  }

  collection.sort((a: CollectionEntry<T>, b: CollectionEntry<T>) => {
    let aIndex = getIndex(a);
    let bIndex = getIndex(b);

    if (aIndex === bIndex) {
      return a.data.title.localeCompare(b.data.title);
    }

    return aIndex - bIndex;
  });
}
