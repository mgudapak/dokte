import listTwig from './list.twig';
import listData from './list.yml';

import dlTwig from './dl.twig';
import dlData from './dl.yml';

/**
 * Lists are used to group related items
 */
export default { title: 'Atoms/Lists' };

/**
 * Use an "unordered" list to list things, if the order of the items doesn't matter.
 */
export const UnorderedList = () =>
  listTwig({
    list__items: listData.lists.unordered.list_items,
    list__type: listData.lists.unordered.list_type,
    list__header: listData.lists.unordered.list_header,
  });

/**
 * Use an "ordered" list to list things when the order of the items do matter.
 */
export const OrderedList = () =>
  listTwig({
    list__items: listData.lists.ordered.list_items,
    list__type: listData.lists.ordered.list_type,
    list__header: listData.lists.ordered.list_header,
  });

export const DescriptionList = () => `
<div class="text-field">
  ${dlTwig({
    dl__items: dlData.dl__items,
    list__type: 'dl',
    list__base_class: 'description',
  })}
</div>
`;
