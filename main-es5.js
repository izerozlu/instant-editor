(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _components_instant_editor_instant_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/instant-editor/instant-editor.component */
      "./src/app/components/instant-editor/instant-editor.component.ts");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "instant-editor");
          }
        },
        directives: [_components_instant_editor_instant_editor_component__WEBPACK_IMPORTED_MODULE_1__["InstantEditorComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _components_instant_editor_instant_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/instant-editor/instant-editor.component */
      "./src/app/components/instant-editor/instant-editor.component.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_instant_editor_instant_editor_component__WEBPACK_IMPORTED_MODULE_5__["InstantEditorComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_instant_editor_instant_editor_component__WEBPACK_IMPORTED_MODULE_5__["InstantEditorComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/instant-editor/instant-editor.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/components/instant-editor/instant-editor.component.ts ***!
      \***********************************************************************/

    /*! exports provided: InstantEditorComponent */

    /***/
    function srcAppComponentsInstantEditorInstantEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InstantEditorComponent", function () {
        return InstantEditorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! resize-observer-polyfill */
      "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
      /* harmony import */


      var _constants_class_names_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../constants/class-names.constant */
      "./src/app/constants/class-names.constant.ts");
      /* harmony import */


      var _services_script_analyzer_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/script-analyzer-http.service */
      "./src/app/services/script-analyzer-http.service.ts");
      /* harmony import */


      var _services_subscription_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/subscription-handler.service */
      "./src/app/services/subscription-handler.service.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = ["editor"];
      var _c1 = ["editorBackground"];

      function InstantEditorComponent_small_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Processing..");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var InstantEditorComponent = /*#__PURE__*/function () {
        function InstantEditorComponent(elementRef, scriptAnalysisHttpService, subscriptionHandlerService, domSanitizer) {
          _classCallCheck(this, InstantEditorComponent);

          this.elementRef = elementRef;
          this.scriptAnalysisHttpService = scriptAnalysisHttpService;
          this.subscriptionHandlerService = subscriptionHandlerService;
          this.domSanitizer = domSanitizer;
          this.instantEditorComponentClass = true;
        }

        _createClass(InstantEditorComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.extractComponentNativeElements();
            this.listenEditorInput();
            this.listenEditorScroll();
            this.listenEditorResize();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptionHandlerService.clearSubscriptions();
            this.editorResizeObserver.disconnect();
          }
          /**
           * Listens editor element's resize event to synchronize editor element's dimensions with editorBackgroundElement and hostElement.
           */

        }, {
          key: "listenEditorResize",
          value: function listenEditorResize() {
            var _this = this;

            this.editorResizeObserver = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_4__["default"](function () {
              var _this$editorElement = _this.editorElement,
                  offsetHeight = _this$editorElement.offsetHeight,
                  offsetWidth = _this$editorElement.offsetWidth;
              _this.editorBackgroundElement.style.height = "".concat(offsetHeight, "px");
              _this.editorBackgroundElement.style.width = "".concat(offsetWidth, "px");
              _this.hostElement.style.height = "".concat(offsetHeight, "px");
              _this.hostElement.style.width = "".concat(offsetWidth, "px");
            });
            this.editorResizeObserver.observe(this.editorElement);
          }
          /**
           * Listens editor's scroll event to synchronize editorBackgroundElement's scroll with the editor's scroll.
           */

        }, {
          key: "listenEditorScroll",
          value: function listenEditorScroll() {
            var _this2 = this;

            var subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.editorElement, 'scroll').subscribe(function () {
              var _this2$editorElement = _this2.editorElement,
                  scrollLeft = _this2$editorElement.scrollLeft,
                  scrollTop = _this2$editorElement.scrollTop;

              _this2.editorBackgroundElement.scrollTo(scrollLeft, scrollTop);
            });
            this.subscriptionHandlerService.addSubscription(subscription);
          }
          /**
           * Listens editor's input event to process its value. The listening process has two goals.
           * <br>
           * First one is synchronizing the editorBackground's content with the editor's content.
           * <br>
           * Second is to retrieve the ScriptAnalysis result of the editor's content.
           * <br>
           * As a side effect, saves and loads the caret position to not disturb the user's writing
           * experience.
           */

        }, {
          key: "listenEditorInput",
          value: function listenEditorInput() {
            var _this3 = this;

            var subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.editorElement, 'input').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              return _this3.processAndSyncScript(_this3.editorElement.value);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () {
              return Boolean(_this3.editorElement.value);
            })).subscribe(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var script, analysisResult;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this.processing = true;
                        this.saveCaretPosition();
                        script = this.editorElement.value;
                        this.hasTrailingSpace = this.editorElement.value.slice(-1)[0] === ' ';
                        _context.next = 6;
                        return this.scriptAnalysisHttpService.postScriptAnalysis(script).toPromise();

                      case 6:
                        analysisResult = _context.sent;
                        this.processing = false;

                        if (analysisResult.phrase !== '') {
                          if (this.hasTrailingSpace) {
                            analysisResult.phrase += ' ';
                          }

                          this.scriptAnalysis = analysisResult;
                          this.processAndSyncScript(this.scriptAnalysis.phrase);
                          this.editorElement.value = this.scriptAnalysis.phrase;
                          this.loadCaretPosition();
                        }

                      case 9:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
            this.subscriptionHandlerService.addSubscription(subscription);
          }
          /**
           * Saves three native elements for further usage.
           * <br>
           * These are: component's host element, editor's element and editorBackground's element.
           */

        }, {
          key: "extractComponentNativeElements",
          value: function extractComponentNativeElements() {
            this.hostElement = this.elementRef.nativeElement;
            this.editorElement = this.editorElementRef.nativeElement;
            this.editorBackgroundElement = this.editorBackgroundElementRef.nativeElement;
          }
          /**
           * Processes given constructedScript to mark/unmark graylisted, blacklisted and undefined
           * words.
           * <br>
           * After the processing is complete synchronizes editor's content with the editorBackground's
           * content.
           * @param constructedScript Script to process through scriptAnalysis.
           */

        }, {
          key: "processAndSyncScript",
          value: function processAndSyncScript(constructedScript) {
            var _this4 = this;

            if (this.scriptAnalysis) {
              [[this.scriptAnalysis.blackListed, _constants_class_names_constant__WEBPACK_IMPORTED_MODULE_5__["CLASS_NAMES"].BLACKLIST], [this.scriptAnalysis.grayListed, _constants_class_names_constant__WEBPACK_IMPORTED_MODULE_5__["CLASS_NAMES"].GRAYLIST], [this.scriptAnalysis.undefinedList, _constants_class_names_constant__WEBPACK_IMPORTED_MODULE_5__["CLASS_NAMES"].UNDEFINED]].forEach(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    list = _ref2[0],
                    className = _ref2[1];

                constructedScript = _this4.processPhrase(list, constructedScript, className);
              });
            } // DomSanitizer service of the Angular Frameworks helps with the sanitization of strings again XSS attacks.


            this.editorString = this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, constructedScript);
          }
          /**
           * Decides where to process and after that constructs graylisted, blacklisted and undefined parts' html strings.
           * <br>
           * Decision making mechanism relies on RegExp tests and given className variable.
           * <br>
           * Construction part is mostly same for three different classes. But graylisted html parts require an extra
           * segment.
           * @param list List of items to mark. List's type might be blacklisted, graylisted or undefined.
           * @param script String to build upon or replace on.
           * @param className CSS class name to assign to constructed html part.
           * @returns Processed and constructed html string.
           */

        }, {
          key: "processPhrase",
          value: function processPhrase(list, script, className) {
            var grayListedCount = 0;
            return list.reduce(function (processedString, listItem) {
              var replacementRegExp = new RegExp(listItem, 'gi');
              return processedString.replace(replacementRegExp, function (match) {
                var replacement = "<span class=\"".concat(className, "\">").concat(match);

                if (className === _constants_class_names_constant__WEBPACK_IMPORTED_MODULE_5__["CLASS_NAMES"].GRAYLIST) {
                  replacement += "<sub class=\"editor__count-marker\">".concat(++grayListedCount, "</sub>");
                }

                return replacement + '</span>';
              });
            }, script);
          }
          /**
           * Saves the editorElement's caret position.
           */

        }, {
          key: "saveCaretPosition",
          value: function saveCaretPosition() {
            this.caretPosition = this.editorElement.selectionStart;
          }
          /**
           * Loads the editorElement's caret position.
           */

        }, {
          key: "loadCaretPosition",
          value: function loadCaretPosition() {
            this.editorElement.selectionStart = this.caretPosition;
            this.editorElement.selectionEnd = this.caretPosition;
          }
        }]);

        return InstantEditorComponent;
      }();

      InstantEditorComponent.ɵfac = function InstantEditorComponent_Factory(t) {
        return new (t || InstantEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_script_analyzer_http_service__WEBPACK_IMPORTED_MODULE_6__["ScriptAnalyzerHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_subscription_handler_service__WEBPACK_IMPORTED_MODULE_7__["SubscriptionHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]));
      };

      InstantEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: InstantEditorComponent,
        selectors: [["instant-editor"]],
        viewQuery: function InstantEditorComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.editorElementRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.editorBackgroundElementRef = _t.first);
          }
        },
        hostVars: 2,
        hostBindings: function InstantEditorComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("instant-editor", ctx.instantEditorComponentClass);
          }
        },
        decls: 5,
        vars: 2,
        consts: [["contenteditable", "", "autocapitalize", "off", "spellcheck", "false", 1, "instant-editor-component__editor-background", "editor-background", 3, "innerHTML"], ["editorBackground", ""], ["autocomplete", "off", "autocapitalize", "off", "spellcheck", "false", 1, "instant-editor-component__editor", "editor"], ["editor", ""], ["class", "instant-editor-component__processing-label", 4, "ngIf"], [1, "instant-editor-component__processing-label"]],
        template: function InstantEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "textarea", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, InstantEditorComponent_small_4_Template, 2, 0, "small", 4);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.editorString, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.processing);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]],
        styles: ["[_nghost-%COMP%] {\n  height: 128px;\n  width: 256px;\n  border: 1px solid rgba(0, 0, 0, 0.24);\n  position: relative;\n  display: block;\n}\n[_nghost-%COMP%]     .editor__blacklisted {\n  color: #f44336;\n  text-decoration: line-through;\n}\n[_nghost-%COMP%]     .editor__graylisted {\n  position: relative;\n}\n[_nghost-%COMP%]     .editor__count-marker {\n  position: absolute;\n  right: -6px;\n  bottom: -4px;\n}\n[_nghost-%COMP%]     .editor__undefined {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.54);\n}\n.editor[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  padding: 16px;\n  border: none;\n  box-sizing: border-box;\n  overflow: auto;\n  background: none;\n  color: transparent;\n  caret-color: black;\n}\n.editor-background[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  padding: 16px;\n  border: none;\n  box-sizing: border-box;\n  overflow: auto;\n}\n.instant-editor-component__processing-label[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -16px;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnN0YW50LWVkaXRvci9pbnN0YW50LWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc3R5bGUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJBO0VBQ0MsYUFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQWhCRDtBQW1CRTtFQUNDLGNDMUJRO0VEMkJSLDZCQUFBO0FBakJIO0FBb0JFO0VBQ0Msa0JBQUE7QUFsQkg7QUFxQkU7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBbkJIO0FBc0JFO0VBQ0MsNENBQUE7QUFwQkg7QUF5QkE7RUEzQ0MsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQWtDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFYRDtBQWNBO0VBbERDLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUF3Q0Q7QUFHQTtFQUNDLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7QUFBRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5zdGFudC1lZGl0b3IvaW5zdGFudC1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+c3JjL2Fzc2V0cy9zdHlsZS9jb2xvcnMnO1xuXG5AbWl4aW4gZWRpdG9yLWJhc2Uge1xuXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDtcblx0bGVmdDogMDtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcblx0cGFkZGluZzogMTZweDtcblx0Ym9yZGVyOiBub25lO1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRvdmVyZmxvdzogYXV0bztcbn1cblxuOmhvc3Qge1xuXHRoZWlnaHQ6IDEyOHB4O1xuXHR3aWR0aDogMjU2cHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogYmxvY2s7XG5cblx0OjpuZy1kZWVwIHtcblx0XHQuZWRpdG9yX19ibGFja2xpc3RlZCB7XG5cdFx0XHRjb2xvcjogJHJlZC0tNTAwO1xuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG5cdFx0fVxuXG5cdFx0LmVkaXRvcl9fZ3JheWxpc3RlZCB7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0fVxuXG5cdFx0LmVkaXRvcl9fY291bnQtbWFya2VyIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHJpZ2h0OiAtNnB4O1xuXHRcdFx0Ym90dG9tOiAtNHB4O1xuXHRcdH1cblxuXHRcdC5lZGl0b3JfX3VuZGVmaW5lZCB7XG5cdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjU0KTtcblx0XHR9XG5cdH1cbn1cblxuLmVkaXRvciB7XG5cdEBpbmNsdWRlIGVkaXRvci1iYXNlO1xuXHRiYWNrZ3JvdW5kOiBub25lO1xuXHRjb2xvcjogdHJhbnNwYXJlbnQ7XG5cdGNhcmV0LWNvbG9yOiBibGFjaztcbn1cblxuLmVkaXRvci1iYWNrZ3JvdW5kIHtcblx0QGluY2x1ZGUgZWRpdG9yLWJhc2U7XG59XG5cbi5pbnN0YW50LWVkaXRvci1jb21wb25lbnRfX3Byb2Nlc3NpbmctbGFiZWwge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTogLTE2cHg7XG5cdHJpZ2h0OiAwO1xufVxuIiwiJHJlZC0tNTAwOiAjZjQ0MzM2O1xuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InstantEditorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'instant-editor',
            templateUrl: './instant-editor.component.html',
            styleUrls: ['./instant-editor.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _services_script_analyzer_http_service__WEBPACK_IMPORTED_MODULE_6__["ScriptAnalyzerHttpService"]
          }, {
            type: _services_subscription_handler_service__WEBPACK_IMPORTED_MODULE_7__["SubscriptionHandlerService"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]
          }];
        }, {
          instantEditorComponentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.instant-editor']
          }],
          editorElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['editor']
          }],
          editorBackgroundElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['editorBackground']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/constants/class-names.constant.ts":
    /*!***************************************************!*\
      !*** ./src/app/constants/class-names.constant.ts ***!
      \***************************************************/

    /*! exports provided: CLASS_NAMES */

    /***/
    function srcAppConstantsClassNamesConstantTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CLASS_NAMES", function () {
        return CLASS_NAMES;
      });

      var CLASS_NAMES = {
        UNDEFINED: 'editor__undefined',
        BLACKLIST: 'editor__blacklisted',
        GRAYLIST: 'editor__graylisted'
      };
      /***/
    },

    /***/
    "./src/app/constants/http-paths.constant.ts":
    /*!**************************************************!*\
      !*** ./src/app/constants/http-paths.constant.ts ***!
      \**************************************************/

    /*! exports provided: HTTP_PATHS */

    /***/
    function srcAppConstantsHttpPathsConstantTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HTTP_PATHS", function () {
        return HTTP_PATHS;
      });

      var HTTP_PATHS = {
        SCRIPT_ANALYSIS: "https://api.sikayetvar.com/dictionary/phrase/check"
      };
      /***/
    },

    /***/
    "./src/app/models/script-analysis.ts":
    /*!*******************************************!*\
      !*** ./src/app/models/script-analysis.ts ***!
      \*******************************************/

    /*! exports provided: ScriptAnalysis */

    /***/
    function srcAppModelsScriptAnalysisTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScriptAnalysis", function () {
        return ScriptAnalysis;
      });

      var ScriptAnalysis = /*#__PURE__*/function () {
        function ScriptAnalysis(_ref3) {
          var phrase = _ref3.phrase,
              grayListed = _ref3.grayListed,
              blackListed = _ref3.blackListed,
              undefinedList = _ref3.undefinedList;

          _classCallCheck(this, ScriptAnalysis);

          this._phrase = phrase;
          this._grayListed = grayListed;
          this._blackListed = blackListed;
          this._undefinedList = undefinedList;
        }

        _createClass(ScriptAnalysis, [{
          key: "phrase",
          get: function get() {
            return this._phrase;
          },
          set: function set(value) {
            this._phrase = value;
          }
        }, {
          key: "grayListed",
          get: function get() {
            return this._grayListed;
          },
          set: function set(value) {
            this._grayListed = value;
          }
        }, {
          key: "blackListed",
          get: function get() {
            return this._blackListed;
          },
          set: function set(value) {
            this._blackListed = value;
          }
        }, {
          key: "undefinedList",
          get: function get() {
            return this._undefinedList;
          },
          set: function set(value) {
            this._undefinedList = value;
          }
        }], [{
          key: "generateEmpty",
          value: function generateEmpty() {
            return new ScriptAnalysis({
              phrase: '',
              undefinedList: [],
              grayListed: [],
              blackListed: []
            });
          }
        }]);

        return ScriptAnalysis;
      }();
      /***/

    },

    /***/
    "./src/app/services/script-analyzer-http.service.ts":
    /*!**********************************************************!*\
      !*** ./src/app/services/script-analyzer-http.service.ts ***!
      \**********************************************************/

    /*! exports provided: ScriptAnalyzerHttpService */

    /***/
    function srcAppServicesScriptAnalyzerHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScriptAnalyzerHttpService", function () {
        return ScriptAnalyzerHttpService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _constants_http_paths_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../constants/http-paths.constant */
      "./src/app/constants/http-paths.constant.ts");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _models_script_analysis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../models/script-analysis */
      "./src/app/models/script-analysis.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var ScriptAnalyzerHttpService = /*#__PURE__*/function () {
        function ScriptAnalyzerHttpService(httpClient) {
          _classCallCheck(this, ScriptAnalyzerHttpService);

          this.httpClient = httpClient;
        }

        _createClass(ScriptAnalyzerHttpService, [{
          key: "postScriptAnalysis",
          value: function postScriptAnalysis(script) {
            return this.httpClient.post(_constants_http_paths_constant__WEBPACK_IMPORTED_MODULE_2__["HTTP_PATHS"].SCRIPT_ANALYSIS, script).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(error);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                return _models_script_analysis__WEBPACK_IMPORTED_MODULE_4__["ScriptAnalysis"].generateEmpty();
              } else {
                return new _models_script_analysis__WEBPACK_IMPORTED_MODULE_4__["ScriptAnalysis"](Object.assign(Object.assign({}, response), {
                  undefinedList: response.undefined
                }));
              }
            }));
          }
        }]);

        return ScriptAnalyzerHttpService;
      }();

      ScriptAnalyzerHttpService.ɵfac = function ScriptAnalyzerHttpService_Factory(t) {
        return new (t || ScriptAnalyzerHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ScriptAnalyzerHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ScriptAnalyzerHttpService,
        factory: ScriptAnalyzerHttpService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScriptAnalyzerHttpService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/subscription-handler.service.ts":
    /*!**********************************************************!*\
      !*** ./src/app/services/subscription-handler.service.ts ***!
      \**********************************************************/

    /*! exports provided: SubscriptionHandlerService */

    /***/
    function srcAppServicesSubscriptionHandlerServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubscriptionHandlerService", function () {
        return SubscriptionHandlerService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SubscriptionHandlerService = /*#__PURE__*/function () {
        function SubscriptionHandlerService() {
          _classCallCheck(this, SubscriptionHandlerService);

          this.subscriptionList = [];
        }

        _createClass(SubscriptionHandlerService, [{
          key: "addSubscription",
          value: function addSubscription(subscription) {
            this.subscriptionList.push(subscription);
          }
        }, {
          key: "clearSubscriptions",
          value: function clearSubscriptions() {
            this.subscriptionList.forEach(function (subscription) {
              return subscription.unsubscribe();
            });
          }
        }]);

        return SubscriptionHandlerService;
      }();

      SubscriptionHandlerService.ɵfac = function SubscriptionHandlerService_Factory(t) {
        return new (t || SubscriptionHandlerService)();
      };

      SubscriptionHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SubscriptionHandlerService,
        factory: SubscriptionHandlerService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubscriptionHandlerService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/izer/Projects/instant-editor/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map