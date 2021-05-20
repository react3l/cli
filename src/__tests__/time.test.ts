import {getCurrentTimeString} from 'helpers/time';

jest.mock('moment', () => () => {
  return {
    format(format?: string) {
      // eslint-disable-next-line no-console
      console.log(format);
      return '1997-01-01 05:00:00';
    },
  };
});

test('time helpers work!', () => {
  expect(getCurrentTimeString()).toEqual('1997-01-01 05:00:00');
});
