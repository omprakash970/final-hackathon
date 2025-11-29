import React from 'react';
import { useParams } from 'react-router-dom';
import GoogleBooth from './GoogleBooth';
import AmazonBooth from './AmazonBooth';
import InfosysBooth from './InfosysBooth';
import TCSBooth from './TCSBooth';

export default function CompanyBooth() {
  const { slug } = useParams();
  const key = (slug || '').toLowerCase();

  switch (key) {
    case 'google':
      return <GoogleBooth />;
    case 'amazon':
      return <AmazonBooth />;
    case 'infosys':
      return <InfosysBooth />;
    case 'tcs':
      return <TCSBooth />;
    default:
      return (
        <div className="container" style={{ padding: '32px 16px' }}>
          <div className="card">
            <h1 className="title-lg">Booth coming soon</h1>
            <p className="muted">We don't have a booth page for "{slug}" yet.</p>
          </div>
        </div>
      );
  }
}
