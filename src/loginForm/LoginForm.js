import React from 'react';

import Input from './Input';
import Button from '../button/Button';

const LoginForm = () => (
  <form>
    <Input
      className="form-username"
      value=""
      type="text"
      name="username"
      placeholder="Enter your username"
    />
    <Input
      className="form-password"
      value=""
      type="password"
      name="username"
      placeholder="Enter your password"
    />
    <Button type="submit" text="Press" />
  </form>
);

export default LoginForm;
