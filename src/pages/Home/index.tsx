import { Result } from 'antd';
import { FormInstance } from 'antd/es/form';

export interface FormDatePickerProps {
  itemName: string;
  form: FormInstance;
  required?: boolean;
  limit?: number;
}

const Home = () => {
  return (
    <Result
      status="info"
      title="Welcome to admin platform!"
      subTitle="Please choose the menu on the left side!"
    />
  );
};

export default Home;
