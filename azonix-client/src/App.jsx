import PanelProvider from './common/PageProvider/PanelProvider/PanelProvider';
import ContentProvider from './common/PageProvider/ContentProvider/ContentProvider';
import ScreenFooter from './common/PageProvider/ScreenFooter/ScreenFooter';
import ScreenHeader from './common/PageProvider/ScreenHeader/screenHeader';
import SpringBoard from './common/PageProvider/Springboard/SpringBoard';


function App() {
  return (
    <div class='h-screen w-screen'>
      <ScreenHeader />
      <ContentProvider>
        <SpringBoard />
        <PanelProvider />
      </ContentProvider>
      <ScreenFooter />
    </div>
  );
}

export default App;
