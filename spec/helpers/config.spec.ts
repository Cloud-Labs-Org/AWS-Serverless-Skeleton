const region = 'Fake Region';

process.env.REGION = region;

import { Config } from '@app/helpers';

test('Config Class', () => {
  expect(Config.REGION).toEqual(region);
});
