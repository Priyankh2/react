import React from 'react';
import { Button, Checkbox, Form, Input} from 'antd';
// import Link from 'antd/es/typography/Link';
import { Link } from 'react-router-dom';
import Ragister from './Ragister';

function Login() {
  const onFinish=(values)=>{
    console.log('recived valuses of form is',values);
  }
  return (
    <div className='authentication'>
      <div className='authentication-form card p-2'>
        <h1 className='card-title'>WELCOME BACK</h1>
        <Form layout='vertical' onFinish={onFinish}>
          <Form.Item label='Email' name = 'email'>
            <Input placeholder='Email'/>
          </Form.Item>
          <Form.Item label='Password' name = 'password'>
            <Input placeholder='Password' type='password'/>
          </Form.Item>
          <Button className='primary-button mp-3' htmlType='sumbit'>LOGIN</Button>
          <Link to='/ragister' className='anchor mt-2'>CLICK HERE TO REGISTER</Link>
        </Form>
      </div>
    </div>
  );
}

export default Login;