import { expectTypeOf } from 'expect-type';

import { ComponentProps } from 'solid-js';
import { describe, test } from 'vitest';
import type { SignIn } from '..';

export type SignInComponentProps = ComponentProps<typeof SignIn>;

describe('<SignIn/>', () => {
  describe('Type tests', () => {
    test('has path filled', () => {
      expectTypeOf({ path: '/sign-in' }).toMatchTypeOf<SignInComponentProps>();
    });

    test('has path filled and routing has path as a value', () => {
      expectTypeOf({
        path: '/sign-in',
        routing: 'path' as const
      }).toMatchTypeOf<SignInComponentProps>();
    });

    test('when path is filled, routing must only have path as value', () => {
      expectTypeOf({
        path: '/sign-in',
        routing: 'virtual' as const
      }).not.toMatchTypeOf<SignInComponentProps>();

      expectTypeOf({
        path: '/sign-in',
        routing: 'hash' as const
      }).not.toMatchTypeOf<SignInComponentProps>();
    });

    test('when routing is hash or virtual path must be present', () => {
      expectTypeOf({
        routing: 'hash' as const
      }).toMatchTypeOf<SignInComponentProps>();
    });
  });
});
