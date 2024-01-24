/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Row } from 'antd';
import { FieldValues } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/hooks';
import { TUser, setUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import PHForm from '../components/form/PHForm';
import PHInput from '../components/form/PHInput';

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  //default value
  // const { handleSubmit, register } = useForm({
  //   defaultValues: {
  //     id: 'A-0001',
  //     password: 'admin123456',
  //   },
  // });

  const defaultValues = {
    id: 'A-0001',
    password: 'admin123456',
  };

  const [login] = useLoginMutation(undefined);

  const onSubmit = async (data: FieldValues) => {
    //* Make sure Backend id and password is match ,,, other wise Make an object
    //* const userInfo = { id: data.id, password: data.password };
    console.log(data);
    const toastId = toast.loading('Logging in');
    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success('Logged in Successfull', { id: toastId, duration: 2000 });
      navigate(`/${user.role}/deshbord`);
    } catch (error) {
      toast.error('Something wnet wrong', { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <div style={{ padding: '10px' }}>
          <PHInput type="text" name="userId" label="ID" />
          <br />

          <PHInput type="text" name="password" label="Password" />
          <Button htmlType="submit"> Login </Button>
        </div>
      </PHForm>
    </Row>
  );
};

export default Login;
