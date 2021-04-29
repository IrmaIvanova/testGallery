import React, { useState } from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import AuthorizationForm from './Authorisation';
import userEvent from '@testing-library/user-event'



const AuthorisationIsValid = (login, password) => {

  if (login === "1" && password === "0") {
    return true

  } else {
    return "bad decision"
  }
}

//проверяет работает ли input на предмет ввода текста
test('type', () => {
  render(<input />)

  userEvent.type(screen.getByRole('textbox'), '123@&*фи')
  expect(screen.getByRole('textbox')).toHaveValue('123@&*фи')
})
// рендерится ли input Введите E-mail
test('renders login input ', () => {
  render(<AuthorizationForm />);
  const loginInputElement = screen.getByLabelText(/Введите E-mail/i);
  expect(loginInputElement).toBeInTheDocument();
});
// рендерится ли input Введите пароль
test('renders password input', () => {
  render(<AuthorizationForm />);
  const PasswordInputElement = screen.getByLabelText(/Введите пароль/i);
  expect(PasswordInputElement).toBeInTheDocument();
});
// рендерится ли button Войти
test('renders authorization AuthorizationForm btn', () => {
  render(<AuthorizationForm />);

  const buttonElement = screen.getByText(/Войти/i);
  expect(buttonElement).toBeInTheDocument();

});

// это какой-то бред, попытка протестить функцию AuthorisationIsValid
describe('function tests', () => {
  it('should return true for arguments 1 and 0', () => {
    expect(AuthorisationIsValid("1", "0")).toBe(true);
    expect(AuthorisationIsValid("0", "1")).toBe("bad decision");
    expect(AuthorisationIsValid("13", "7")).toBe("bad decision");
  });
});



