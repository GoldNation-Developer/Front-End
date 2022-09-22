import { ReactNode } from 'react';
import HeaderComponent from '../Header/HeaderComponent';
import FooterComponent from '../Footer/FooterComponent';
import HeadComponent from '../Head/HeadComponent';

interface Props {
  children: ReactNode;
  title: string;
}

const PageComponent = ({ children, title }: Props) => {
  return (
    <HeadComponent title={title}>
      <HeaderComponent />

      <main>{children}</main>

      <FooterComponent />
    </HeadComponent>
  );
};

export default PageComponent;
