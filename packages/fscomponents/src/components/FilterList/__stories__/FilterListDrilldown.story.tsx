import React from 'react';
import { storiesOf } from '@storybook/react'; // tslint:disable-line:no-implicit-dependencies
import { action } from '@storybook/addon-actions'; // tslint:disable-line:no-implicit-dependencies
import { FilterListDrilldown } from '../FilterListDrilldown';

const items = Array(10)
  .fill(true)
  .map((v, i) => ({
    id: `id-${i}`,
    title: `title-${i}`,
    values: Array(5)
      .fill(true)
      .map((v, i) => ({ value: `value-${i}`, title: `value-title-${i}` }))
  }));

items.unshift({
  id: 'sort',
  title: 'Sort By',
  values: [
    {
      title: `sort item 1`,
      value: `sort-value-1`
    },
    {
      title: `sort item 2`,
      value: `sort-value-2`
    },
    {
      title: `sort item 3`,
      value: `sort-value-3`
    },
    {
      title: `sort item 4`,
      value: `sort-value-4`
    },
    {
      title: `sort item 5`,
      value: `sort-value-5`
    },
    {
      title: `sort item 6`,
      value: `sort-value-6`
    }
  ]
});

storiesOf('FilterListDrilldown', module)
  .add('basic usage', () => (
    <FilterListDrilldown
      items={items}
      applyOnSelect={true}
      onApply={action('FilterList onApply')}
      onReset={action('FilterList onReset')}
      singleFilterIds={['sort']}
    />
  ));
