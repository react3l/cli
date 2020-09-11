import { DATE_TIME_FORMAT } from 'config/consts';
import moment from 'moment';

export function getCurrentTimeString(): string {
  return moment().format(DATE_TIME_FORMAT);
}
