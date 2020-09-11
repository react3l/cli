import { getCurrentTimeString } from 'helpers/time';

jest.mock('moment', () => () => {
  return ({
    format(format: string) {
      return '1997-01-01 05:00:00';
    },
  });
});

test('time helpers work!', () => {
  expect(getCurrentTimeString()).toEqual('1997-01-01 05:00:00');
});
