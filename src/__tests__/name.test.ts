import type {TemplateNames} from 'core/TemplateNames';
import {composeNames} from 'helpers/naming';

test('name', () => {
  const testName: string = 'TestName';
  const composedNames: TemplateNames = composeNames(testName);

  expect(composedNames.camelCase).toEqual('testName');
  expect(composedNames.snakeCase).toEqual('test_name');
  expect(composedNames.kebabCase).toEqual('test-name');
  expect(composedNames.name).toEqual(testName);
});
