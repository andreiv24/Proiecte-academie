import './App.css';

function App() {
  return (
      <div className="absence_days">
        <header>
          <div className="absence_text1">ALL (1)</div>
          <div className="absence_text2">OPEN (0)</div>
          <div className="absence_text3">UPCOMING ABCENCES (1)</div>
          <div className="absence_text4">DECLINED (0)</div>
        </header>
          <main>
              <div className="container">
                  <div className="vacation">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.9998 16.57L16.5728 17.998L10.1308 11.556L11.5608 10.128L17.9998 16.57ZM10.1198 0C7.53982 0 4.95982 0.98 2.97982 2.95L2.96982 2.96C-0.980176 6.91 -0.980176 13.32 2.96982 17.27L17.2698 2.96C15.2998 0.99 12.7098 0 10.1198 0ZM3.13982 14.27C2.39982 13.03 1.99982 11.61 1.99982 10.12C1.99982 9.19 2.15982 8.3 2.45982 7.45C2.64982 9.36 3.34982 11.24 4.52982 12.89L3.13982 14.27ZM5.97982 11.43C4.62982 9.38 4.11982 6.93 4.59982 4.6C5.17982 4.48 5.75982 4.42 6.34982 4.42C8.14983 4.42 9.89983 4.97 11.4298 5.98L5.97982 11.43ZM7.44982 2.46C8.29982 2.16 9.18982 2 10.1198 2C11.6098 2 13.0298 2.4 14.2698 3.14L12.8798 4.53C11.2298 3.35 9.35982 2.65 7.44982 2.46Z" fill="#515151"/>
                      </svg>
                      <div className="vacation_text">
                          Vacation<br/>Name Username • 1 day
                      </div>
                  </div>
                  <div className="datetime">
                      Thu. 26.08.2021<br/>Thu. 26.08.2021
                  </div>
              </div>
          </main>
      </div>
  );
}

export default App;
