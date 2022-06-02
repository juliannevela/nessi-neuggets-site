import React from 'react';
import Button from '.';

export default {
  title: 'Button',
}

export const DefaultButton = () => <Button>Default Button</Button>;
export const OutlineButton = () => <Button outline>I'm Outlined!</Button>;
export const SmallButton = () => <Button size='small'>I'm Small!</Button>;
export const LargeButton = () => <Button size='large'>I'm Large!</Button>;