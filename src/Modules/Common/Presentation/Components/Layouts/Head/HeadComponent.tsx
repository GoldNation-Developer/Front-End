import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title?: string;
}

const HeadComponent = ({ title, children }: Props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />

        <title>
          {title ? `${title} |` : ''} {process.env.NEXT_PUBLIC_NAME}
        </title>

        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_URL}${router.pathname}`} />
      </Head>

      {children}
    </>
  );
};

export default HeadComponent;
