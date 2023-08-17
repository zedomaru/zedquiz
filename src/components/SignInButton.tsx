'use client';

import React from 'react';
import { Button } from './ui/button';
import { signIn } from 'next-auth/react';

type Props = {
  text: string;
};

const SignInButton = ({ text }: Props) => {
  const handleClickSignIn = () => {
    signIn('google').catch((error) => console.error(error));
  };
  return <Button onClick={handleClickSignIn}>{text}</Button>;
};

export default SignInButton;
