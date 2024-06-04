import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=fda1dd87"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=fda1dd87"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=fda1dd87"; const ReactDOM = __vite__cjsImport2_reactDom_client.__esModule ? __vite__cjsImport2_reactDom_client.default : __vite__cjsImport2_reactDom_client;
import "/src/main.scss";
import { createBrowserRouter, RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=fda1dd87";
import App from "/src/pages/App.jsx";
import Index from "/src/pages/index/Index.jsx";
import Rent from "/src/pages/rent/Rent.jsx";
import NotFound from "/src/pages/error/NotFound.jsx";
import About from "/src/pages/about/About.jsx";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
        fileName: "/Users/guiback/Desktop/OpenClassrooms - MNS/OC - Développeur WEB (bac+2) - ZIMMER Guillaume/P5/Projet Kaza/Kaza/src/main.jsx",
        lineNumber: 14,
        columnNumber: 12
      }, this),
      children: [
        {
          index: true,
          element: /* @__PURE__ */ jsxDEV(Index, {}, void 0, false, {
            fileName: "/Users/guiback/Desktop/OpenClassrooms - MNS/OC - Développeur WEB (bac+2) - ZIMMER Guillaume/P5/Projet Kaza/Kaza/src/main.jsx",
            lineNumber: 18,
            columnNumber: 14
          }, this)
        },
        {
          path: "/about",
          element: /* @__PURE__ */ jsxDEV(About, {}, void 0, false, {
            fileName: "/Users/guiback/Desktop/OpenClassrooms - MNS/OC - Développeur WEB (bac+2) - ZIMMER Guillaume/P5/Projet Kaza/Kaza/src/main.jsx",
            lineNumber: 22,
            columnNumber: 14
          }, this)
        },
        {
          path: "/logement/:id",
          element: /* @__PURE__ */ jsxDEV(Rent, {}, void 0, false, {
            fileName: "/Users/guiback/Desktop/OpenClassrooms - MNS/OC - Développeur WEB (bac+2) - ZIMMER Guillaume/P5/Projet Kaza/Kaza/src/main.jsx",
            lineNumber: 26,
            columnNumber: 14
          }, this)
        },
        {
          path: "*",
          element: /* @__PURE__ */ jsxDEV(NotFound, {}, void 0, false, {
            fileName: "/Users/guiback/Desktop/OpenClassrooms - MNS/OC - Développeur WEB (bac+2) - ZIMMER Guillaume/P5/Projet Kaza/Kaza/src/main.jsx",
            lineNumber: 30,
            columnNumber: 14
          }, this)
        }
      ]
    }
  ]
);
ReactDOM.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
    fileName: "/Users/guiback/Desktop/OpenClassrooms - MNS/OC - Développeur WEB (bac+2) - ZIMMER Guillaume/P5/Projet Kaza/Kaza/src/main.jsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/guiback/Desktop/OpenClassrooms - MNS/OC - Développeur WEB (bac+2) - ZIMMER Guillaume/P5/Projet Kaza/Kaza/src/main.jsx",
    lineNumber: 37,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBYWU7QUFiZixPQUFPQSxXQUFXO0FBQ2xCLE9BQU9DLGNBQWM7QUFDckIsT0FBTztBQUNQLFNBQVNDLHFCQUFxQkMsc0JBQXNCO0FBQ3BELE9BQU9DLFNBQVM7QUFDaEIsT0FBT0MsV0FBVztBQUNsQixPQUFPQyxVQUFVO0FBQ2pCLE9BQU9DLGNBQWM7QUFDckIsT0FBT0MsV0FBVztBQUVsQixNQUFNQyxTQUFTUDtBQUFBQSxFQUFvQjtBQUFBLElBQ2hDO0FBQUEsTUFDR1EsTUFBTTtBQUFBLE1BQ05DLFNBQVMsdUJBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUk7QUFBQSxNQUNiQyxVQUFVO0FBQUEsUUFDUDtBQUFBLFVBQ0dDLE9BQU87QUFBQSxVQUNQRixTQUFTLHVCQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBTTtBQUFBLFFBQ2xCO0FBQUEsUUFDQTtBQUFBLFVBQ0dELE1BQU07QUFBQSxVQUNOQyxTQUFTLHVCQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBTTtBQUFBLFFBQ2xCO0FBQUEsUUFDQTtBQUFBLFVBQ0dELE1BQU07QUFBQSxVQUNOQyxTQUFTLHVCQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSztBQUFBLFFBQ2pCO0FBQUEsUUFDQTtBQUFBLFVBQ0dELE1BQU07QUFBQSxVQUNOQyxTQUFTLHVCQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUztBQUFBLFFBQ3JCO0FBQUEsTUFBQztBQUFBLElBRVA7QUFBQSxFQUFDO0FBQ0g7QUFFRFYsU0FBU2EsV0FBV0MsU0FBU0MsZUFBZSxNQUFNLENBQUMsRUFBRUM7QUFBQUEsRUFDbEQsdUJBQUMsTUFBTSxZQUFOLEVBQ0UsaUNBQUMsa0JBQWUsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUErQixLQURsQztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUE7QUFDSCIsIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJjcmVhdGVCcm93c2VyUm91dGVyIiwiUm91dGVyUHJvdmlkZXIiLCJBcHAiLCJJbmRleCIsIlJlbnQiLCJOb3RGb3VuZCIsIkFib3V0Iiwicm91dGVyIiwicGF0aCIsImVsZW1lbnQiLCJjaGlsZHJlbiIsImluZGV4IiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsibWFpbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgXCIuL21haW4uc2Nzc1wiO1xuaW1wb3J0IHsgY3JlYXRlQnJvd3NlclJvdXRlciwgUm91dGVyUHJvdmlkZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9wYWdlcy9BcHBcIjtcbmltcG9ydCBJbmRleCBmcm9tIFwiLi9wYWdlcy9pbmRleC9JbmRleFwiO1xuaW1wb3J0IFJlbnQgZnJvbSBcIi4vcGFnZXMvcmVudC9SZW50XCI7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSBcIi4vcGFnZXMvZXJyb3IvTm90Rm91bmRcIjtcbmltcG9ydCBBYm91dCBmcm9tIFwiLi9wYWdlcy9hYm91dC9BYm91dFwiO1xuXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVCcm93c2VyUm91dGVyKFtcbiAgIHtcbiAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgZWxlbWVudDogPEFwcCAvPixcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICB7XG4gICAgICAgICAgICBpbmRleDogdHJ1ZSxcbiAgICAgICAgICAgIGVsZW1lbnQ6IDxJbmRleCAvPixcbiAgICAgICAgIH0sXG4gICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiBcIi9hYm91dFwiLFxuICAgICAgICAgICAgZWxlbWVudDogPEFib3V0IC8+LFxuICAgICAgICAgfSxcbiAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IFwiL2xvZ2VtZW50LzppZFwiLFxuICAgICAgICAgICAgZWxlbWVudDogPFJlbnQgLz4sXG4gICAgICAgICB9LFxuICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogXCIqXCIsXG4gICAgICAgICAgICBlbGVtZW50OiA8Tm90Rm91bmQgLz4sXG4gICAgICAgICB9LFxuICAgICAgXSxcbiAgIH0sXG5dKTtcblxuUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpLnJlbmRlcihcbiAgIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgICAgPFJvdXRlclByb3ZpZGVyIHJvdXRlcj17cm91dGVyfSAvPlxuICAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuKTtcbiJdLCJmaWxlIjoiL1VzZXJzL2d1aWJhY2svRGVza3RvcC9PcGVuQ2xhc3Nyb29tcyAtIE1OUy9PQyAtIERlzIF2ZWxvcHBldXIgV0VCIChiYWMrMikgLSBaSU1NRVIgR3VpbGxhdW1lL1A1L1Byb2pldCBLYXphL0themEvc3JjL21haW4uanN4In0=