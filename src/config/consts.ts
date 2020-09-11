import { name, version } from 'package.json';

export enum NodeENV {
  development = 'development',
  production = 'production',
};

export const NODE_ENV: NodeENV = process.env.NODE_ENV as NodeENV;

export const PACKAGE_NAME: string = name;

export const PACKAGE_VERSION: string = version;

export const DATE_TIME_FORMAT: string = 'YYYY-MM-DD HH:mm:ss';
