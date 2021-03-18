import React, { FC, PropsWithChildren, ReactElement } from 'react';
import nameof from 'ts-nameof.macro';
import styles from './NativeComponent.scss';

/**
 * File: NativeComponent.tsx
 * @created <current-time>
 * @author <git-name> <<git-email>>
 * @type {FC<PropsWithChildren<NativeComponentProps>>}
 */
const NativeComponent: FC<PropsWithChildren<NativeComponentProps>> = (
  props: PropsWithChildren<NativeComponentProps>,
): ReactElement => {
  return (
    <>
      {props.children}
    </>
  );
};

export interface NativeComponentProps {
  //
}

NativeComponent.defaultProps = {
  //
};

NativeComponent.propTypes = {
  //
};

NativeComponent.displayName = nameof(NativeComponent);

export default NativeComponent;
