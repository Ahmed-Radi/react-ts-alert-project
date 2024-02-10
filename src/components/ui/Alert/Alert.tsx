import { ReactNode } from 'react';
import './Alert.scss';
import { X } from 'lucide-react';
import { AlertTypes } from '../../../types/alert';

interface IAlert {
  type: AlertTypes;
  icon: ReactNode;
  title: string;
  message?: string;
  children?: ReactNode;
}

const Alert = ({ type, icon, title, message, children }: IAlert) => {
  return (
    <div className={type}>
      <div className='alert-header'>
        <div className="title">
          {icon}
          <h4>{title}</h4>
        </div>
        <X className='close' />
      </div>
      {children ? children : <p>
        {message}
      </p>}
    </div>
  )
}


export default Alert;