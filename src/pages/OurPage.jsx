import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function OurPage() {
  return (
    <div className="mw">
      <h2>Our page</h2>
      <nav style={{ padding: '50px' }}>
        <Link to="/our/ceo">Ceo</Link>
        <Link to="/our/history">History</Link>
        <Link to="/our/org">organization</Link>
      </nav>
      <Outlet />
      <div style={{ padding: '50px' }}>공통요소</div>
    </div>
  );
}
