// Type definitions for sparklines v1.2.0
// Project: https://github.com/mariusGundersen/sparkline
// Definitions by: Camilo A. Soto Montoya <https://github.com/csotomon/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="sparklines"/>

declare module 'sparklines' {


  function withSideEffect(
      reducePropsToState: (propsList: any[]) => any,
      handleStateChangeOnClient: (state: any) => any,
      mapStateOnServer: (state: any) => any
  ): (WrappedComponent: React.Component<any, any>) => React.Component<any, any>;

  export = withSideEffect;
}
