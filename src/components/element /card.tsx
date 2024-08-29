
import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {

}

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      {...props}
      className={`bg-white rounded-lg shadow-md p-4 border border-gray-200 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
