import './IndexPage.css';

import type { FC } from 'react';

import { Link } from '../../components/Link';
import { Page } from '../../components/Page';
import { routes } from '../../navigation';
import { useInitData } from '@tma.js/sdk-react';

export const IndexPage: FC = () => {
  const initData = useInitData();

  return (
    <Page title='Home Page '>
      <p>
        Welcome to the TMA.js SDK React boilerplate, {initData?.user?.firstName}{' '}
        {initData?.user?.lastName}!
      </p>
      <p>
        This page is a home page in this boilerplate. You can use the links
        below to visit other pages with their own functionality.
      </p>
      <ul className='index-page__links'>
        {routes.map(
          ({ path, title }) =>
            title && (
              <li className='index-page__link' key={path}>
                <Link to={path}>{title}</Link>
              </li>
            )
        )}
      </ul>
    </Page>
  );
};
