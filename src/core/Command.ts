import {Command as Commander} from 'commander';
import {NodeENV, NODE_ENV, PACKAGE_NAME, PACKAGE_VERSION} from 'config/consts';
import type {TemplateNames} from 'core/TemplateNames';
import {composeNames} from 'helpers/naming';
import {getCurrentTimeString} from 'helpers/time';
import path from 'path';
import fs from 'fs';
import type {GitCredentials} from 'core/GitCredentials';
import {getGitCredentials} from 'helpers/git';
export class Command extends Commander {
  /**
   * Generate component along with SCSS file
   *
   * @type {boolean}
   */
  protected scss?: boolean;

  /**
   * Force to create contents, overwrite any existing entries
   *
   * @type {boolean}
   */
  protected force?: boolean;

  /**
   * Generate React Native component
   *
   * @type {boolean}
   */
  protected native?: boolean;

  /**
   * Generate component by name
   *
   * @param name {string} Name of the component to create
   */
  public generateComponent = (name: string) => {
    if (this.native) {
      this.generateNativeComponent(name);
    } else {
      this.generateWebComponent(name);
    }
  };

  constructor() {
    super();
    this.version(PACKAGE_VERSION);

    this.option('-s, --scss', 'Generate component along with SCSS file', false)
      .option('-n, --native', 'Generate React Native component', false)
      .option(
        '-f, --force',
        'Force to create contents, overwrite any existing entries',
        false,
      )
      .command('g:c <name>')
      .action(this.generateComponent);
  }

  public generateWebComponent = (name: string) => {
    const names: TemplateNames = composeNames(name);
    const gitCredentials: GitCredentials = getGitCredentials();
    const webComponentRoot: string =
      NODE_ENV === NodeENV.development
        ? path.join('templates', 'components', 'WebComponent')
        : path.resolve(
            process.cwd(),
            'node_modules',
            PACKAGE_NAME,
            'templates',
            'components',
            'WebComponent',
          );
    const componentFile = path.join(webComponentRoot, 'WebComponent.tsx');
    const componentSCSSFile = path.join(webComponentRoot, 'WebComponent.scss');
    try {
      fs.mkdirSync(names.name);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Can not create directory %s', names.name);
    }
    let componentContent: string = this.renderCommonDataToFile(
      fs
        .readFileSync(componentFile, {
          encoding: 'utf-8',
        })
        .split('WebComponent')
        .join(names.name),
      names,
      gitCredentials,
    );
    if (!this.scss) {
      componentContent = componentContent
        .split(`import './${names.name}.scss';\n`)
        .join('');
    }
    fs.writeFileSync(
      path.join(names.name, `${names.name}.tsx`),
      componentContent,
    );
    if (this.scss) {
      fs.writeFileSync(
        path.join(names.name, `${names.name}.scss`),
        this.renderCommonDataToFile(
          fs.readFileSync(componentSCSSFile, {
            encoding: 'utf-8',
          }),
          names,
          gitCredentials,
        )
          .split('WebComponent')
          .join(names.name),
      );
    }
  };

  public generateNativeComponent = (name: string) => {
    const names: TemplateNames = composeNames(name);
    const gitCredentials: GitCredentials = getGitCredentials();
    const nativeComponentRoot: string =
      NODE_ENV === NodeENV.development
        ? path.join('templates', 'components', 'NativeComponent')
        : path.resolve(
            process.cwd(),
            'node_modules',
            PACKAGE_NAME,
            'templates',
            'components',
            'NativeComponent',
          );
    const componentFile = path.join(nativeComponentRoot, 'NativeComponent.tsx');
    const componentSCSSFile = path.join(
      nativeComponentRoot,
      'NativeComponent.scss',
    );
    try {
      fs.mkdirSync(names.name);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Can not create directory %s', names.name);
    }
    let componentContent: string = this.renderCommonDataToFile(
      fs
        .readFileSync(componentFile, {
          encoding: 'utf-8',
        })
        .split('NativeComponent')
        .join(names.name),
      names,
      gitCredentials,
    );
    if (!this.scss) {
      componentContent = componentContent
        .split(`import styles from './${names.name}.scss';\n`)
        .join('');
    }
    fs.writeFileSync(
      path.join(names.name, `${names.name}.tsx`),
      componentContent,
    );
    if (this.scss) {
      fs.writeFileSync(
        path.join(names.name, `${names.name}.scss`),
        this.renderCommonDataToFile(
          fs.readFileSync(componentSCSSFile, {
            encoding: 'utf-8',
          }),
          names,
          gitCredentials,
        )
          .split('NativeComponent')
          .join(names.name),
      );
    }
  };

  public renderCommonDataToFile = (
    content: string,
    names: TemplateNames,
    gitCredentials: GitCredentials,
  ) => {
    const currentTime: string = getCurrentTimeString();
    return content
      .split('<current-time>')
      .join(currentTime)
      .split('<git-name>')
      .join(gitCredentials.name)
      .split('<git-email>')
      .join(gitCredentials.email);
  };
}
