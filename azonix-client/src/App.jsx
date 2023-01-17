import PanelProvider from "./common/PageProvider/PanelProvider/PanelProvider";
import ContentProvider from "./common/PageProvider/ContentProvider/ContentProvider";
import ScreenFooter from "./common/PageProvider/ScreenFooter/ScreenFooter";
import ScreenHeader from "./common/PageProvider/ScreenHeader/ScreenHeader";
import Springboard from "./common/PageProvider/Springboard/Springboard";

function App() {
    return (
        <div className="h-screen w-screen">
            <ScreenHeader />
            <ContentProvider>
                <Springboard />
                <PanelProvider />
            </ContentProvider>
            <ScreenFooter />
        </div>
    );
}

export default App;
