import React, { FC, useState } from "react";

export interface Props {
  shouldRemember: boolean;
  onUserNameChange: (userName: string) => void;
  onPasswordChange: (password: string) => void;
  onRememberChange: (remember: boolean) => void;
  onSubmit: (userName: string, password: string, remember: boolean) => void;
}

const LoginForm: FC<Props> = (props) => {
  const { shouldRemember, onUserNameChange, onPasswordChange, onRememberChange, onSubmit } = props;

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(shouldRemember);

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUserName(value);
    onUserNameChange(value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
    onPasswordChange(value);
  };

  const handleRememberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setRemember(checked);
    onRememberChange(checked);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(userName, password, remember);
  };

  return (
    <>
      <h2>Login Form</h2>
      <form data-testid="login-form" onSubmit={handleSubmit}>
        <label htmlFor="userName">Username:</label>
        <input data-testid="userName" type="text" name="userName" value={userName} onChange={handleUserNameChange} />

        <label htmlFor="password">Password:</label>
        <input
          data-testid="password"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <label>
          <input
            data-testid="remember"
            name="remember"
            type="checkbox"
            checked={remember}
            onChange={handleRememberChange}
          />
          Remember me?
        </label>

        <button type="submit" data-testid="submit">
          Sign in
        </button>
      </form>
    </>
  );
};

export default LoginForm;
