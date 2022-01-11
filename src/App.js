//App.js
import React, {useState, useRef} from 'react';
import { useOnClickOutside} from './hooks';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger , Menu} from './components';
import FocusLock from 'react-focus-lock';


function App() {
  const menuId = "main-menu";
  const node = useRef();
  const [open, setOpen] = useState(false);

  useOnClickOutside(node, () => setOpen(false));
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
           <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </FocusLock>
        </div>
        <div>
          <h1>Hello, Hamburga</h1>
          <img src="https://media.giphy.com/media/xTiTnwj1LUAw0RAfiU/giphy.gif" alt="animated burger" />
        </div>
      </>
    </ThemeProvider>
  );
}
export default App;
