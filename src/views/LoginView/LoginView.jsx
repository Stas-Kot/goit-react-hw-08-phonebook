import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import s from './LoginView.module.css';
import { logIn } from 'redux/auth/auth-operations';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    switch (target.name) {
      case 'email':
        return setEmail(target.value);

      case 'password':
        return setPassword(target.value);

      default:
        return;
    }
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logIn({ email, password }));
    reset();
  };

  return (
    <div>
      <h1 className={s.title}>Welcome</h1>
      <Form onSubmit={handleSubmit} className={s.form}>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className={`${s.mb} mb-3`}
        >
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="name@example.com"
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className={`${s.mb} mb-3`}
        >
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
          />
        </FloatingLabel>

        <Button className={s.btn} variant="primary" type="submit">
          Log In
        </Button>
      </Form>
    </div>
  );
}
