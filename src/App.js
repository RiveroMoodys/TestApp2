import './App.css';
import { Box, ThemeProvider, Button, Tabs, TabList, TabPanels, Tab, TabPanel } from '@passfort/castle';
import '@passfort/castle/lib/index.css';
/// 

function App() {
  return (
   <ThemeProvider>
    <Box>
    <Button type="primary" label="HI EMI!! Hello world and beyond! <$3" /> 
    </Box>
    <Button type="disabled" label="Let's build stuff" />
    <Tabs>
      <TabList>
        <Tab label="Fun" icon="info" iconColor="B100" />
        <Tab label="Fast & Smart" icon="insights" iconColor="G100" />
       <Tab label="Slow and accurate" icon="person" />
      </TabList>
    </Tabs>
   </ThemeProvider>
  );
}



///
export default App;
