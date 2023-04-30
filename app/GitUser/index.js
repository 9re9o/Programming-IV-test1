import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./page.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App> </App>
    </StrictMode>
)