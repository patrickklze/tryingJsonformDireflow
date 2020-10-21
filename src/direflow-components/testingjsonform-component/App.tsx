import React, { FC, useState } from 'react';
import { Styled } from 'direflow-component';
import styles from './App.css';
import { materialRenderers, materialCells } from '@jsonforms/material-renderers';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import schema from './schema.json';
import uischema from './uischema.json';
import { JsonForms } from '@jsonforms/react';
import Button from '@material-ui/core/Button';

interface IProps {
  componentTitle: string;
  sampleList: string[];
}

const theme = createMuiTheme({ palette: { type: 'dark' } });

const iniData: any = {};

const App: FC<IProps> = (props) => {

  const [standaloneData, setStandaloneData] = useState({});

  const onSubmitHandler = () => {
    console.log(standaloneData);
  }

  return (
    <Styled styles={styles}>
      <div className='app'>
        <div className='bottom'>
          <ThemeProvider theme={theme}>
          <div className="middle-middle">
            <CssBaseline />
            <JsonForms
              schema={schema}
              uischema={uischema}
              data={iniData}
              renderers={materialRenderers}
              cells={materialCells}
              onChange={({ errors, data }) => setStandaloneData(data)}
            />
            <Button variant="contained" onClick={onSubmitHandler}>Submit</Button>
          </div>
        </ThemeProvider>
        </div>
      </div>
    </Styled>
  );
};

App.defaultProps = {
  componentTitle: 'Testingjsonform Component',
}

export default App;
