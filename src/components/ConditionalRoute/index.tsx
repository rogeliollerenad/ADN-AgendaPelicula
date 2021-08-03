/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { FC } from 'react';
import { RouteProps } from 'react-router';
import { Redirect, Route } from 'react-router-dom';

interface ProtectedRouteProps extends RouteProps {
  canActivate: boolean;
  redirectTo: string;
}

export const ConditionalRoute: FC<ProtectedRouteProps> = ({
  component: Component,
  redirectTo,
  canActivate,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        canActivate ? (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <Component {...props} />
        ) : (
          <Redirect to={redirectTo} />
        )
      }
    />
  );
};
