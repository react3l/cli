import { GitCredentials } from 'core/GitCredentials';
import { getGitCredentials } from 'helpers/git';

test('git credentials', () => {
  const credentials: GitCredentials = getGitCredentials();
  expect(credentials.name).toEqual(process.env.GIT_USER);
  expect(credentials.email).toEqual(process.env.GIT_EMAIL);
});
