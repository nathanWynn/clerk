import * as React from 'react';
//import {browser, Tabs} from 'webextension-polyfill-ts';

import './styles.scss';

// function openWebPage(url: string): Promise<Tabs.Tab> {
//   return browser.tabs.create({url});
// }

const Popup: React.FC = () => {

  const [jobTitle, setJobTitle] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [date, setDate] = React.useState('');



  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();

    // Do something 
    alert(`${ jobTitle }, ${ company }`);
  }

  return (
    <section id="popup">
      <div className="card">
        <div className="card-image">	
          <h2 className="card-heading">
            Clerk
            <small>Enter your job application</small>
          </h2>
        </div>
        <form className="card-form" onSubmit={submitForm}>
          <div className="input">
            <input 
              type="text" 
              className="input-field" 
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Computer Toucher"
            />
            <label className="input-label">💻 Job Title</label>
          </div>
          <div className="input">
            <input 
              type="text" 
              className="input-field" 
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Big Tech"
            />
            <label className="input-label">🏢 Company</label>
          </div>
          <div className="input">
            <input 
              type="date" 
              className="input-field" 
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <label className="input-label">📆 Date</label>
          </div>
          <div className="action">
            <button className="action-button">Log Application</button>
          </div>
        </form>
      </div>
      
    </section>
  );
};

export default Popup;
