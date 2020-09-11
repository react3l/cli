import React, { FC, PropsWithChildren, ReactElement } from 'react';
import nameof from 'ts-nameof.macro';
import './WebComponent.scss';

/**
 * File: WebComponent.tsx
 * @created <current-time>
 * @author <git-name> <<git-email>>
 * @type {FC<PropsWithChildren<WebComponentProps>>}
 */
const WebComponent: FC<PropsWithChildren<WebComponentProps>> = (
  props: PropsWithChildren<WebComponentProps>,
): ReactElement => {
  return (
    <>
      {props.children}
    </>
  );
};

export interface WebComponentProps {
  //
}

WebComponent.defaultProps = {
  //
};

WebComponent.propTypes = {
  //
};

WebComponent.displayName = nameof(WebComponent);

export default React.memo(WebComponent);
