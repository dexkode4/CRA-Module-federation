import React from 'react';

import { Home } from './index';
import { render } from '../../Utils/TestCustomRender';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import { Button } from "app2/Button";


jest.mock('app2/Button', 
  () => ({ 
    Button: () => 'Button'
  }),
  { virtual: true }
);

describe('<Button />', () => {
	let testProps;

	beforeEach(() => {
		testProps = {
			'data-testid': 'testButton',
			className: undefined,
		};
	});

	it('should render mock remote functions', () => {
		 render(<Home />);
	});
});
