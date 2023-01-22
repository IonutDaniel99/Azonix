import PanelProvider from "./common/PageProvider/PanelProvider/PanelProvider";
import ContentProvider from "./common/PageProvider/ContentProvider/ContentProvider";
import ScreenFooter from "./common/PageProvider/ScreenFooter/ScreenFooter";
import ScreenHeader from "./common/PageProvider/ScreenHeader/ScreenHeader";
import Springboard from "./common/PageProvider/Springboard/Springboard";
import { ConfigProvider } from "antd";

function App() {
    return (
        <div className="h-screen w-screen">
            <ConfigProvider
                theme={{
                    components: {
                        Dropdown: {
                            colorBgElevated: "#16181a",
                        },
                    },
                }}
            >
                <ScreenHeader />
                <ContentProvider>
                    <Springboard />
                    <PanelProvider />
                </ContentProvider>
                <ScreenFooter />
            </ConfigProvider>
        </div>
    );
}

export default App;
