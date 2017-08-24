import 'react-native';
import React from 'react';
import Drawer, { Message } from '../index.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders drawer', () => {
  const tree = renderer.create(
    <Drawer />
  );
});

it('renders message', () => {
  const tree = renderer.create(
    <Message />
  );
});
