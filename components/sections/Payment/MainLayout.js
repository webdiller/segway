import React from 'react';
import Breadcrumbs from './Breadcrumbs';

export default function MainLayout({children}) {
  return (
    <div className="payment-layout">
      <div className="container payment-layout__container">
        <div className="payment-layout__left">
          <div className='hide-991'><Breadcrumbs /></div>
          {children}
        </div>
        <div className="payment-layout__right">user cart status</div>
      </div>
    </div>
  );
}
