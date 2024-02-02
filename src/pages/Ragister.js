import React from 'react';
import { Button, Checkbox, Form, Input} from 'antd';
// import Link from 'antd/es/typography/Link';
import { Link } from 'react-router-dom';
// import Login from './Login';
import axios from 'axios';
import toast from 'react-hot-toast';

function Ragister() {
  const onFinish = async (values) => {
    try {
      const response = await axios.post("/api/user/ragister",values);
      if(response.data.sucess){
        toast.sucess(response.data.message);
      }
      else{
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something");
    }
  }
  return (
    <div className='authentication'>
      <div className='authentication-form card p-2'>
        <h1 className='card-title'>Nice To Meet U</h1>
        <Form layout='vertical' onFinish={onFinish}>
          <Form.Item label='Name' name = 'name'>
            <Input placeholder='Name'/>
          </Form.Item>
          <Form.Item label='Email' name = 'email'>
            <Input placeholder='Email'/>
          </Form.Item>
          <Form.Item label='Password' name = 'password'>
            <Input placeholder='Password' type='password'/>
          </Form.Item>
          <Button className='primary-button mp-3' htmlType='sumbit'>Register</Button>
          <Link to='/login' className='anchor mt-2'>CLICK HERE TO LOGIN</Link>
        </Form>
      </div>
    </div>
  );
}

export default Ragister;