import React, { Component } from 'react';
import aissa from '../../content/thumbnails/aissa-avatar.png';
/* import patreon from '../../content/thumbnails/patreon.png';
import kofi from '../../content/thumbnails/kofi.png'; */

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={aissa} alt="اور ويب  " />
            </div>
            <div>
              <h3 style={{ marginBottom: '1.2rem' }}>اور ويب  </h3>
              <p>
محتوى هادف وترفيهي يتكون من تدوينات وشروحات برامج بالاضافة الى ادوات مصغرة ومتعددة
              </p>

              {/* <div className="flex">
                <a
                  href="https://ko-fi.com/taniarascia"
                  className="donate-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={kofi} className="coffee-icon" alt="Coffee icon" />
                  Buy me a coffee
                </a>
                <a
                  className="patreon-button"
                  href="https://www.patreon.com/taniarascia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={patreon} height="50" width="50" /> Become a Patron
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </aside>
    );
  }
}
