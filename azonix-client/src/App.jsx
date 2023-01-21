import ContentProvider from "./common/PageProvider/ContentProvider/ContentProvider";
import ScreenFooter from "./common/PageProvider/ScreenFooter/ScreenFooter";
import ScreenHeader from "./common/PageProvider/ScreenHeader/ScreenHeader";

function App() {
    return (
        <div className="h-screen w-screen bg-black">
            <ScreenHeader />
            <ContentProvider />
            <ScreenFooter />
        </div>
    );
}

export default App;
