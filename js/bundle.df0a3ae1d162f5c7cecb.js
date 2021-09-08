(self["webpackChunkcalendar_webpack"] = self["webpackChunkcalendar_webpack"] || []).push([["bundle"],{

/***/ "./src/Page/ListTask/Form.js":
/*!***********************************!*\
  !*** ./src/Page/ListTask/Form.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");



function Form(_ref) {
  var onsubmit = _ref.onsubmit,
      handleClose = _ref.handleClose;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(''),
      _React$useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),
      title = _React$useState2[0],
      setTitle = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__.useState(''),
      _React$useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState3, 2),
      text = _React$useState4[0],
      setText = _React$useState4[1];

  var txt = text;
  var tt = title;

  var onSubmit = function onSubmit() {
    onsubmit(tt, txt);
    handleClose();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.default, {
    color: "primary",
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.default, {
    id: "custom-css-standard-inputa",
    label: "T\xEAn c\xF4ng vi\u1EC7c",
    style: {
      margin: 10
    },
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.default, {
    id: "standard-multiline-static",
    label: "N\u1ED9i dung c\xF4ng vi\u1EC7c",
    multiline: true,
    rows: 4,
    style: {
      margin: 10
    },
    onChange: function onChange(e) {
      return setText(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default, {
    onClick: function onClick() {
      return onSubmit();
    },
    variant: "contained",
    color: "primary",
    style: {
      margin: 10
    }
  }, "Ho\xE0n th\xE0nh"));
}

/***/ }),

/***/ "./src/Page/ListTask/index.js":
/*!************************************!*\
  !*** ./src/Page/ListTask/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SimpleAccordion)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Modal/Modal.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Tabs/Tabs.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Tab/Tab.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Accordion/Accordion.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/AccordionSummary/AccordionSummary.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/AccordionDetails/AccordionDetails.js");
/* harmony import */ var _material_ui_icons_DeleteForeverOutlined__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/DeleteForeverOutlined */ "./node_modules/@material-ui/icons/DeleteForeverOutlined.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_ControlPoint__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/ControlPoint */ "./node_modules/@material-ui/icons/ControlPoint.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Form */ "./src/Page/ListTask/Form.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Redux_type_Task__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Redux/type/Task */ "./src/Redux/type/Task.js");
/* harmony import */ var _Redux_actions_Task__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Redux/actions/Task */ "./src/Redux/actions/Task.js");
/* harmony import */ var _Redux_actions_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Redux/actions/common */ "./src/Redux/actions/common.js");





 // import icon




 //
//import component

 //
// redux




 //

function SimpleAccordion(_ref) {
  var loading = _ref.loading;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__.useState(0),
      _React$useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4__.useState(false),
      _React$useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState3, 2),
      isNew = _React$useState4[0],
      setIsNew = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4__.useState(false),
      _React$useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState5, 2),
      isEdit = _React$useState6[0],
      setIsEdit = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_4__.useState(0),
      _React$useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState7, 2),
      idChoose = _React$useState8[0],
      setIdChoose = _React$useState8[1];

  var handleChange = function handleChange(event, newValue) {
    setState(newValue);
  };

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
  var dateChoose = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.common.chooseDate;
  });
  var tasksAll = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.task.Tasks;
  });
  var tasks = tasksAll.filter(function (item) {
    return moment__WEBPACK_IMPORTED_MODULE_3___default()(item.date, 'LLLL').date() == moment__WEBPACK_IMPORTED_MODULE_3___default()(dateChoose, 'LLLL').date() && moment__WEBPACK_IMPORTED_MODULE_3___default()(item.date, 'LLLL').month() == moment__WEBPACK_IMPORTED_MODULE_3___default()(dateChoose, 'LLLL').month() && moment__WEBPACK_IMPORTED_MODULE_3___default()(item.date, 'LLLL').year() == moment__WEBPACK_IMPORTED_MODULE_3___default()(dateChoose, 'LLLL').year();
  });

  var addNew = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(title, text) {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(_Redux_actions_common__WEBPACK_IMPORTED_MODULE_9__.loadingChange(true));
              data = {
                title: title,
                text: text,
                date: dateChoose.toString()
              };
              _context.next = 4;
              return _Redux_actions_Task__WEBPACK_IMPORTED_MODULE_8__.addNewTaskRequest(dispatch, data);

            case 4:
              _context.next = 6;
              return _Redux_actions_Task__WEBPACK_IMPORTED_MODULE_8__.fectListTaskRequest(dispatch);

            case 6:
              dispatch(_Redux_actions_common__WEBPACK_IMPORTED_MODULE_9__.loadingChange(false));
              setIsNew(!isNew);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function addNew(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var editItem = /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(id, title, text) {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch(_Redux_actions_common__WEBPACK_IMPORTED_MODULE_9__.loadingChange(true));
              data = {
                title: title,
                text: text,
                date: dateChoose.toString()
              };
              _context2.next = 4;
              return _Redux_actions_Task__WEBPACK_IMPORTED_MODULE_8__.editTaskRequest(dispatch, id, data);

            case 4:
              _context2.next = 6;
              return _Redux_actions_Task__WEBPACK_IMPORTED_MODULE_8__.fectListTaskRequest(dispatch);

            case 6:
              dispatch(_Redux_actions_common__WEBPACK_IMPORTED_MODULE_9__.loadingChange(false));
              setIsEdit(!isEdit);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function editItem(_x3, _x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  }();

  var deleteItem = /*#__PURE__*/function () {
    var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dispatch(_Redux_actions_common__WEBPACK_IMPORTED_MODULE_9__.loadingChange(true));
              _context3.next = 3;
              return _Redux_actions_Task__WEBPACK_IMPORTED_MODULE_8__.deleteTaskRequest(dispatch, id);

            case 3:
              _context3.next = 5;
              return _Redux_actions_Task__WEBPACK_IMPORTED_MODULE_8__.fectListTaskRequest(dispatch);

            case 5:
              dispatch(_Redux_actions_common__WEBPACK_IMPORTED_MODULE_9__.loadingChange(false));

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function deleteItem(_x6) {
      return _ref4.apply(this, arguments);
    };
  }();

  var renderModel = function renderModel(state, _handleClose, title, _onsubmit) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default, {
      key: title,
      id: title,
      open: state,
      onClose: _handleClose,
      "aria-labelledby": "simple-modal-".concat(title),
      "aria-describedby": "simple-modal-description-".concat(title)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        backgroundColor: 'aqua',
        width: '40%',
        marginLeft: '30%',
        marginTop: '20px',
        padding: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.default, null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Form__WEBPACK_IMPORTED_MODULE_5__.default, {
      onsubmit: function onsubmit(title, text) {
        return _onsubmit(title, text);
      },
      handleClose: function handleClose() {
        return _handleClose();
      }
    })));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    style: {
      width: '50%',
      marginLeft: '25%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.default, {
    square: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.default, {
    value: state,
    indicatorColor: "primary",
    textColor: "primary",
    onChange: handleChange,
    "aria-label": "disabled tabs example"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__.default, {
    label: "Ghi ch\xFA"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__.default, {
    label: "Cu\u1ED9c h\u1EB9n"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.default, {
    elevation: 3,
    square: true,
    variant: "elevation"
  }, tasks.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.default, {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__.default, {
      style: {
        backgroundColor: 'rgba(230,70,70,.4)'
      },
      expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_17__.default, null),
      "aria-controls": "content-".concat(index),
      id: "header-".concat(index)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.default, {
      style: {
        flex: 1
      }
    }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__.default, {
      onClick: function onClick() {
        setIdChoose(item.id);
        setIsEdit(!isEdit);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_19__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__.default, {
      onClick: function onClick() {
        deleteItem(parseInt(item.id));
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_material_ui_icons_DeleteForeverOutlined__WEBPACK_IMPORTED_MODULE_20__.default, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__.default, {
      style: {
        padding: '20px'
      }
    }, item.text), renderModel(isEdit, function () {
      return setIsEdit(!isEdit);
    }, 'sửa', function (title, text) {
      return editItem(item.id, title, text);
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 50,
      right: 50,
      zIndex: 1000
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__.default, {
    onClick: function onClick() {
      return setIsNew(!isNew);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_material_ui_icons_ControlPoint__WEBPACK_IMPORTED_MODULE_22__.default, {
    style: {
      fontSize: 50
    }
  }))), renderModel(isNew, function () {
    return setIsNew(!isNew);
  }, 'thêm mới', function (title, text) {
    return addNew(title, text);
  }));
}

/***/ }),

/***/ "./src/Page/Root.js":
/*!**************************!*\
  !*** ./src/Page/Root.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Root)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ShowCalendar_ShowCalendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShowCalendar/ShowCalendar */ "./src/Page/ShowCalendar/ShowCalendar.js");
/* harmony import */ var _ListTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListTask */ "./src/Page/ListTask/index.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading */ "./src/Page/loading/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/Page/style.css");


 // import component



 // import ListTask from './ListTask';
// import ShowCalendar from './ShowCalendar/ShowCalendar';
//
// import style

 //

function Root() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(false),
      _React$useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/tasks"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ListTask__WEBPACK_IMPORTED_MODULE_3__.default, {
    loading: function loading(v) {
      return setLoading(v);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ShowCalendar_ShowCalendar__WEBPACK_IMPORTED_MODULE_2__.default, {
    loading: function loading(v) {
      return setLoading(v);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_loading__WEBPACK_IMPORTED_MODULE_4__.default, {
    loading: loading
  }));
}

/***/ }),

/***/ "./src/Page/ShowCalendar/ShowCalendar.js":
/*!***********************************************!*\
  !*** ./src/Page/ShowCalendar/ShowCalendar.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShowCalendar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/Page/ShowCalendar/style.scss");
/* harmony import */ var _Redux_type_Calendar_type_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Redux/type/Calendar.type.js */ "./src/Redux/type/Calendar.type.js");
/* harmony import */ var _Redux_actions_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Redux/actions/common */ "./src/Redux/actions/common.js");
/* harmony import */ var _Redux_actions_Calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Redux/actions/Calendar */ "./src/Redux/actions/Calendar.js");
/* harmony import */ var _material_ui_icons_SkipNextRounded__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/SkipNextRounded */ "./node_modules/@material-ui/icons/SkipNextRounded.js");
/* harmony import */ var _material_ui_icons_SkipPreviousRounded__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/SkipPreviousRounded */ "./node_modules/@material-ui/icons/SkipPreviousRounded.js");
/* harmony import */ var _material_ui_icons_ArrowLeft__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/ArrowLeft */ "./node_modules/@material-ui/icons/ArrowLeft.js");
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/ArrowRight */ "./node_modules/@material-ui/icons/ArrowRight.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Redux_actions_Task__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Redux/actions/Task */ "./src/Redux/actions/Task.js");





 // import style

 //
// import action and types



 //
// material icon




 //
// import other js

 //
//react redux

 //

function ShowCalendar(_ref) {
  var loading = _ref.loading;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  var date = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.common.date;
  });
  var Thisdate = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.common.Thisdate;
  });
  var dayFirst = date.clone().startOf('month').day();
  var month = date.month();
  var year = date.year();

  var DateOfMonth = lodash__WEBPACK_IMPORTED_MODULE_2__.range(1, date.daysInMonth() + 1);

  var tasks = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.task.Tasks;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    console.log('1');
    dispatch(_Redux_actions_common__WEBPACK_IMPORTED_MODULE_5__.loadingChange(true));
    _Redux_actions_Task__WEBPACK_IMPORTED_MODULE_8__.fectListTaskRequest(dispatch);
    dispatch(_Redux_actions_common__WEBPACK_IMPORTED_MODULE_5__.loadingChange(false));
    console.log('2');
  }, []);

  var ChangeDate = function ChangeDate(data) {
    return dispatch(_Redux_actions_Calendar__WEBPACK_IMPORTED_MODULE_6__.ChangeDate(data));
  };

  var ChangeChooseDate = function ChangeChooseDate(value, month, year) {
    var ChooseDate = moment__WEBPACK_IMPORTED_MODULE_7___default()();
    ChooseDate.set('year', year);
    ChooseDate.set('month', month);
    ChooseDate.set('date', value);
    return dispatch(_Redux_actions_Calendar__WEBPACK_IMPORTED_MODULE_6__.ChangeChooseDate(ChooseDate));
  };

  var renderEmptyItem = function renderEmptyItem(dayFrist) {
    var numday = lodash__WEBPACK_IMPORTED_MODULE_2__.range(0, dayFrist);

    return numday.map(function (value, key) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default, {
        key: key,
        style: {
          width: "".concat(100 / 7, "%"),
          textAlign: 'center',
          display: 'inline-block'
        }
      });
    });
  };

  var renderCalendarItem = function renderCalendarItem(data, dayFrist, Style) {
    var Class = Style === 'title' ? 'CalendarTitle' : 'CalendarItem';
    var tyle = Style === 'title' ? 'text' : 'contained';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default, {
      className: Class
    }, renderEmptyItem(dayFrist), data.map(function (value, key) {
      var taskClone = tasks.filter(function (item) {
        return moment__WEBPACK_IMPORTED_MODULE_7___default()(item.date, 'LLLL').date() == value && moment__WEBPACK_IMPORTED_MODULE_7___default()(item.date, 'LLLL').month() == month && moment__WEBPACK_IMPORTED_MODULE_7___default()(item.date, 'LLLL').year() == year;
      });
      var stylex = taskClone.length > 0 && Style !== 'title' ? {
        width: "".concat(100 / 7, "%"),
        textAlign: 'left',
        backgroundColor: 'rgba(255,80,70,.4)'
      } : {
        width: "".concat(100 / 7, "%"),
        textAlign: 'left'
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.default, {
        key: key,
        onClick: function onClick() {
          dispatch(_Redux_actions_Task__WEBPACK_IMPORTED_MODULE_8__.changeTaskOneDate(taskClone));
          ChangeChooseDate(value, month, year);
        },
        style: stylex,
        variant: tyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Link, {
        style: {
          width: '100%',
          textAlign: 'center'
        },
        to: "/tasks"
      }, value));
    }));
  };

  var controlState = function controlState(tyle, num) {
    switch (tyle) {
      case 'month':
        date.set('month', month + num);
        ChangeDate(date.toString());
        break;

      case 'year':
        date.set('year', year + num);

        var _moment = date.toString();

        ChangeDate(date.toString());
        break;

      default:
        return;
    }
  };

  var control = function control(month, year) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.default, {
      style: {
        textAlign: 'center'
      },
      container: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.default, {
      item: true,
      xs: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_SkipPreviousRounded__WEBPACK_IMPORTED_MODULE_14__.default, {
      onClick: function onClick() {
        return controlState('year', -1);
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_ArrowLeft__WEBPACK_IMPORTED_MODULE_15__.default, {
      onClick: function onClick() {
        return controlState('month', -1);
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.default, {
      item: true,
      xs: 6,
      style: {
        fontSize: '30px'
      }
    }, (month + 1).toString() + '/' + year.toString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.default, {
      item: true,
      xs: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_16__.default, {
      onClick: function onClick() {
        return controlState('month', 1);
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_SkipNextRounded__WEBPACK_IMPORTED_MODULE_17__.default, {
      onClick: function onClick() {
        return controlState('year', 1);
      }
    }))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default, {
    className: "Calendar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default, {
    component: "h1",
    className: "title"
  }, "Calendar"), control(month, year), renderCalendarItem(t('DateOfWeek').split(','), 0, 'title'), renderCalendarItem(DateOfMonth, dayFirst, 'item'));
}

/***/ }),

/***/ "./src/Page/loading/index.js":
/*!***********************************!*\
  !*** ./src/Page/loading/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _styels_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styels.scss */ "./src/Page/loading/styels.scss");

 // import style

 //

function Loading() {
  var loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.common2.isLoading;
  });
  var display = '';
  console.log(loading);

  if (loading) {
    display = 'flex';
  } else {
    display = 'none';
  } // console.log(display);


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loading-container",
    style: {
      display: display
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Little loading ..."));
}

/***/ }),

/***/ "./src/Redux/ConfigureStore.js":
/*!*************************************!*\
  !*** ./src/Redux/ConfigureStore.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_multi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-multi */ "./node_modules/redux-multi/lib/index.js");
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/index */ "./src/Redux/reducers/index.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");






var composeEnhancers =  true && (typeof window === "undefined" ? "undefined" : (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  shouldHotReload: false
}) : redux__WEBPACK_IMPORTED_MODULE_5__.compose;

var ConfigureStore = function ConfigureStore() {
  var middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_1__.default, redux_multi__WEBPACK_IMPORTED_MODULE_2__.default];
  var enhancers = [redux__WEBPACK_IMPORTED_MODULE_5__.applyMiddleware.apply(void 0, middlewares)];
  var store = (0,redux__WEBPACK_IMPORTED_MODULE_5__.createStore)(_reducers_index__WEBPACK_IMPORTED_MODULE_3__.default, composeEnhancers.apply(void 0, enhancers));
  return store;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigureStore);

/***/ }),

/***/ "./src/Redux/actions/Calendar.js":
/*!***************************************!*\
  !*** ./src/Redux/actions/Calendar.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeDate": () => (/* binding */ ChangeDate),
/* harmony export */   "ChangeChooseDate": () => (/* binding */ ChangeChooseDate)
/* harmony export */ });
/* harmony import */ var _type_Calendar_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/Calendar.type.js */ "./src/Redux/type/Calendar.type.js");

var ChangeDate = function ChangeDate(moment) {
  return {
    type: _type_Calendar_type_js__WEBPACK_IMPORTED_MODULE_0__.CHANGE_DATE,
    moment: moment
  };
};
var ChangeChooseDate = function ChangeChooseDate(moment) {
  return {
    type: _type_Calendar_type_js__WEBPACK_IMPORTED_MODULE_0__.CHANE_CHOOSE_DATE,
    moment: moment
  };
};

/***/ }),

/***/ "./src/Redux/actions/Task.js":
/*!***********************************!*\
  !*** ./src/Redux/actions/Task.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fectListTask": () => (/* binding */ fectListTask),
/* harmony export */   "addNewTask": () => (/* binding */ addNewTask),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "changeTaskOneDate": () => (/* binding */ changeTaskOneDate),
/* harmony export */   "fectListTaskSuccess": () => (/* binding */ fectListTaskSuccess),
/* harmony export */   "fectListTaskFailed": () => (/* binding */ fectListTaskFailed),
/* harmony export */   "fectListTaskRequest": () => (/* binding */ fectListTaskRequest),
/* harmony export */   "addNewTaskRequest": () => (/* binding */ addNewTaskRequest),
/* harmony export */   "editTaskRequest": () => (/* binding */ editTaskRequest),
/* harmony export */   "deleteTaskRequest": () => (/* binding */ deleteTaskRequest)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _type_Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/Task */ "./src/Redux/type/Task.js");
/* harmony import */ var _api_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/task */ "./src/api/task.js");
/* harmony import */ var _actions_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/common */ "./src/Redux/actions/common.js");





var fectListTask = function fectListTask() {
  return {
    type: _type_Task__WEBPACK_IMPORTED_MODULE_2__.FETCH_LIST_TASK
  };
};
var addNewTask = function addNewTask() {
  return {
    type: _type_Task__WEBPACK_IMPORTED_MODULE_2__.ADD_NEW_TASK
  };
};
var editTask = function editTask() {
  return {
    type: _type_Task__WEBPACK_IMPORTED_MODULE_2__.EDIT_TASK
  };
};
var deleteTask = function deleteTask() {
  return {
    type: _type_Task__WEBPACK_IMPORTED_MODULE_2__.DETELE_TASK
  };
};
var changeTaskOneDate = function changeTaskOneDate(data) {
  return {
    type: _type_Task__WEBPACK_IMPORTED_MODULE_2__.SET_TASK_ONE_DATE,
    dataOneDate: data
  };
};
var fectListTaskSuccess = function fectListTaskSuccess(data) {
  return {
    type: _type_Task__WEBPACK_IMPORTED_MODULE_2__.FETCH_LIST_SUCCESS,
    payload: {
      data: data
    }
  };
};
var fectListTaskFailed = function fectListTaskFailed(error) {
  return {
    type: _type_Task__WEBPACK_IMPORTED_MODULE_2__.FETCH_LIST_FALIED,
    payload: {
      error: error
    }
  };
};
var fectListTaskRequest = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(dispatch) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch(fectListTask());
            _context.next = 3;
            return _api_task__WEBPACK_IMPORTED_MODULE_3__.fectTask().then(function (resp) {
              var data = resp.data;
              dispatch(fectListTaskSuccess(data));
            })["catch"](function (error) {
              console.log(error);
              dispatch(fectListTaskFailed(error));
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fectListTaskRequest(_x) {
    return _ref.apply(this, arguments);
  };
}();
var addNewTaskRequest = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(dispatch, data) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return dispatch(addNewTask());

          case 2:
            _context2.next = 4;
            return _api_task__WEBPACK_IMPORTED_MODULE_3__.postTask(data).then(function (resp) {
              return console.log(resp);
            })["catch"](function (err) {
              console.error(err);
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function addNewTaskRequest(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var editTaskRequest = /*#__PURE__*/function () {
  var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(dispatch, id, data) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            dispatch(editTask());
            _context3.next = 3;
            return _api_task__WEBPACK_IMPORTED_MODULE_3__.putTask(id, data);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function editTaskRequest(_x4, _x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteTaskRequest = /*#__PURE__*/function () {
  var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(dispatch, id) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            dispatch(deleteTask());
            _context4.next = 3;
            return _api_task__WEBPACK_IMPORTED_MODULE_3__.deleteTask(id);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteTaskRequest(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/Redux/actions/common.js":
/*!*************************************!*\
  !*** ./src/Redux/actions/common.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadingChange": () => (/* binding */ loadingChange)
/* harmony export */ });
/* harmony import */ var _type_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/common */ "./src/Redux/type/common.js");

var loadingChange = function loadingChange(status) {
  return {
    type: _type_common__WEBPACK_IMPORTED_MODULE_0__.LOADING_CHANGE,
    status: status
  };
};

/***/ }),

/***/ "./src/Redux/reducers/Calendar.js":
/*!****************************************!*\
  !*** ./src/Redux/reducers/Calendar.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _type_Calendar_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/Calendar.type */ "./src/Redux/type/Calendar.type.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import * as taskConstans from '../constants/Task';
// import { toastError } from '../helper/toastHelper';


var initialState = {
  userName: '',
  chooseDate: moment__WEBPACK_IMPORTED_MODULE_2___default()(),
  date: moment__WEBPACK_IMPORTED_MODULE_2___default()(),
  Thisdate: moment__WEBPACK_IMPORTED_MODULE_2___default()()
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _type_Calendar_type__WEBPACK_IMPORTED_MODULE_1__.CHANGE_DATE:
      return _objectSpread(_objectSpread({}, state), {}, {
        date: moment__WEBPACK_IMPORTED_MODULE_2___default()(action.moment, 'LLLL')
      });

    case _type_Calendar_type__WEBPACK_IMPORTED_MODULE_1__.CHANE_CHOOSE_DATE:
      return _objectSpread(_objectSpread({}, state), {}, {
        chooseDate: moment__WEBPACK_IMPORTED_MODULE_2___default()(action.moment, 'LLLL')
      });

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ }),

/***/ "./src/Redux/reducers/Task.js":
/*!************************************!*\
  !*** ./src/Redux/reducers/Task.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _type_Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/Task */ "./src/Redux/type/Task.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var initialState = {
  Tasks: [],
  taskOneDay: [],
  dateChoose: moment__WEBPACK_IMPORTED_MODULE_2___default()()
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _type_Task__WEBPACK_IMPORTED_MODULE_1__.FETCH_LIST_TASK:
      return _objectSpread({}, state);

    case _type_Task__WEBPACK_IMPORTED_MODULE_1__.ADD_NEW_TASK:
      return _objectSpread({}, state);

    case _type_Task__WEBPACK_IMPORTED_MODULE_1__.EDIT_TASK:
      return _objectSpread({}, state);

    case _type_Task__WEBPACK_IMPORTED_MODULE_1__.DETELE_TASK:
      return _objectSpread({}, state);

    case _type_Task__WEBPACK_IMPORTED_MODULE_1__.SET_TASK_ONE_DATE:
      var dataOneDate = action.dataOneDate;
      return _objectSpread(_objectSpread({}, state), {}, {
        taskOneDay: dataOneDate
      });

    case _type_Task__WEBPACK_IMPORTED_MODULE_1__.FETCH_LIST_SUCCESS:
      var data = action.payload.data;
      return _objectSpread(_objectSpread({}, state), {}, {
        Tasks: data
      });

    case _type_Task__WEBPACK_IMPORTED_MODULE_1__.FETCH_LIST_FALIED:
      var err = action.payload.err;
      return _objectSpread({}, state);

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ }),

/***/ "./src/Redux/reducers/common.js":
/*!**************************************!*\
  !*** ./src/Redux/reducers/common.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _type_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/common */ "./src/Redux/type/common.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  isLoading: true
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _type_common__WEBPACK_IMPORTED_MODULE_1__.LOADING_CHANGE:
      var status = action.status;
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: status
      });

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ }),

/***/ "./src/Redux/reducers/index.js":
/*!*************************************!*\
  !*** ./src/Redux/reducers/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calendar */ "./src/Redux/reducers/Calendar.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./src/Redux/reducers/Task.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./src/Redux/reducers/common.js");




var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_3__.combineReducers)({
  common: _Calendar__WEBPACK_IMPORTED_MODULE_0__.default,
  common2: _common__WEBPACK_IMPORTED_MODULE_2__.default,
  task: _Task__WEBPACK_IMPORTED_MODULE_1__.default
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);

/***/ }),

/***/ "./src/Redux/type/Calendar.type.js":
/*!*****************************************!*\
  !*** ./src/Redux/type/Calendar.type.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHANGE_DATE": () => (/* binding */ CHANGE_DATE),
/* harmony export */   "CHANE_CHOOSE_DATE": () => (/* binding */ CHANE_CHOOSE_DATE)
/* harmony export */ });
var CHANGE_DATE = 'CHANGE_DATE';
var CHANE_CHOOSE_DATE = 'CHANE_CHOOSE_DATE';

/***/ }),

/***/ "./src/Redux/type/Task.js":
/*!********************************!*\
  !*** ./src/Redux/type/Task.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FETCH_LIST_TASK": () => (/* binding */ FETCH_LIST_TASK),
/* harmony export */   "FETCH_LIST_FALIED": () => (/* binding */ FETCH_LIST_FALIED),
/* harmony export */   "FETCH_LIST_SUCCESS": () => (/* binding */ FETCH_LIST_SUCCESS),
/* harmony export */   "ADD_NEW_TASK": () => (/* binding */ ADD_NEW_TASK),
/* harmony export */   "EDIT_TASK": () => (/* binding */ EDIT_TASK),
/* harmony export */   "DETELE_TASK": () => (/* binding */ DETELE_TASK),
/* harmony export */   "FILTER_TASK": () => (/* binding */ FILTER_TASK),
/* harmony export */   "SET_TASK_ONE_DATE": () => (/* binding */ SET_TASK_ONE_DATE)
/* harmony export */ });
var FETCH_LIST_TASK = 'FETCH_LIST_TASK';
var FETCH_LIST_FALIED = 'FETCH_LIST_TASK_FALIED';
var FETCH_LIST_SUCCESS = 'FETCH_LIST_TASK_SUCCESS';
var ADD_NEW_TASK = 'ADD_NEW_TASK';
var EDIT_TASK = 'EDIT_TASK';
var DETELE_TASK = 'DETELE_TASK';
var FILTER_TASK = 'FILTER_TASK';
var SET_TASK_ONE_DATE = 'SET_TASK_ONE_DATE';

/***/ }),

/***/ "./src/Redux/type/common.js":
/*!**********************************!*\
  !*** ./src/Redux/type/common.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOADING_CHANGE": () => (/* binding */ LOADING_CHANGE)
/* harmony export */ });
var LOADING_CHANGE = 'LOADING_CHANGE';

/***/ }),

/***/ "./src/Service/Translate/i18next.js":
/*!******************************************!*\
  !*** ./src/Service/Translate/i18next.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/context.js");
/* harmony import */ var _lang_Root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang/Root */ "./src/Service/Translate/lang/Root.js");



i18next__WEBPACK_IMPORTED_MODULE_0__.default.use(react_i18next__WEBPACK_IMPORTED_MODULE_2__.initReactI18next) // init i18next
// for all options read: https://www.i18next.com/overview/configuration-options
.init({
  resources: _lang_Root__WEBPACK_IMPORTED_MODULE_1__.default,
  lng: 'en',
  keySeparator: false,
  // we do not use keys in form messages.welcome
  interpolation: {
    escapeValue: false // react already safes from xss

  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18next__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./src/Service/Translate/lang/Root.js":
/*!********************************************!*\
  !*** ./src/Service/Translate/lang/Root.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en */ "./src/Service/Translate/lang/en.js");
/* harmony import */ var _vn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vn */ "./src/Service/Translate/lang/vn.js");


var resources = {
  en: _en__WEBPACK_IMPORTED_MODULE_0__.default,
  vn: _vn__WEBPACK_IMPORTED_MODULE_1__.default
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resources);

/***/ }),

/***/ "./src/Service/Translate/lang/en.js":
/*!******************************************!*\
  !*** ./src/Service/Translate/lang/en.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var en = {
  translation: {
    UserName: 'User Name',
    UserPass: 'User Pass',
    Login: 'LogIn',
    DateOfWeek: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (en);

/***/ }),

/***/ "./src/Service/Translate/lang/vn.js":
/*!******************************************!*\
  !*** ./src/Service/Translate/lang/vn.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var vn = {
  translation: {
    UserName: 'Tài Khoản',
    UserPass: 'Mật Khẩu',
    Login: 'Đăng Nhập',
    DateOfWeek: 'Chủ Nhật,Thứ 2,Thứ 3,Thứ 4,Thứ 5,Thứ 6,Thứ 7'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vn);

/***/ }),

/***/ "./src/Service/axiosService/index.js":
/*!*******************************************!*\
  !*** ./src/Service/axiosService/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);



 // const FormData = require('form-data');

var AxiosService = /*#__PURE__*/function () {
  function AxiosService() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, AxiosService);

    var instance = axios__WEBPACK_IMPORTED_MODULE_2___default().create({
      baseURL: 'https://60e83995673e350017c21828.mockapi.io/api',
      // timeout: 5000,
      headers: {
        'X-Custom-Header': 'foobar'
      }
    });
    instance.interceptors.response.use(this.handleSucces, this.handleError);
    this.instance = instance;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(AxiosService, [{
    key: "handleSucces",
    value: function handleSucces(response) {
      return response;
    }
  }, {
    key: "handleError",
    value: function handleError(error) {
      return Promise.reject(error);
    }
  }, {
    key: "get",
    value: function get(url) {
      return this.instance.get(url);
    }
  }, {
    key: "post",
    value: function post(url, data) {
      console.log('2');
      data = qs__WEBPACK_IMPORTED_MODULE_3___default().stringify(data);
      return this.instance.post(url, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
    }
  }, {
    key: "put",
    value: function put(url, data) {
      data = qs__WEBPACK_IMPORTED_MODULE_3___default().stringify(data);
      return this.instance.put(url, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
    }
  }, {
    key: "delete",
    value: function _delete(url) {
      return this.instance["delete"](url);
    }
  }]);

  return AxiosService;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AxiosService());

/***/ }),

/***/ "./src/api/task.js":
/*!*************************!*\
  !*** ./src/api/task.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fectTask": () => (/* binding */ fectTask),
/* harmony export */   "postTask": () => (/* binding */ postTask),
/* harmony export */   "putTask": () => (/* binding */ putTask),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask)
/* harmony export */ });
/* harmony import */ var _Service_axiosService_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Service/axiosService/index */ "./src/Service/axiosService/index.js");

var endpoint = '/Tasks';
var fectTask = function fectTask() {
  return _Service_axiosService_index__WEBPACK_IMPORTED_MODULE_0__.default.get("".concat(endpoint));
};
var postTask = function postTask(data) {
  return _Service_axiosService_index__WEBPACK_IMPORTED_MODULE_0__.default.post("".concat(endpoint), data);
};
var putTask = function putTask(id, data) {
  return _Service_axiosService_index__WEBPACK_IMPORTED_MODULE_0__.default.put("".concat(endpoint, "/").concat(id), data);
};
var deleteTask = function deleteTask(id) {
  return _Service_axiosService_index__WEBPACK_IMPORTED_MODULE_0__.default.delete("".concat(endpoint, "/").concat(id.toString()));
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/I18nextProvider.js");
/* harmony import */ var _Service_Translate_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Service/Translate/i18next */ "./src/Service/Translate/i18next.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Redux_ConfigureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Redux/ConfigureStore */ "./src/Redux/ConfigureStore.js");
/* harmony import */ var _Page_Root__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Page/Root */ "./src/Page/Root.js");








var store = (0,_Redux_ConfigureStore__WEBPACK_IMPORTED_MODULE_4__.default)();
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
  store: store
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_i18next__WEBPACK_IMPORTED_MODULE_6__.I18nextProvider, {
  i18n: _Service_Translate_i18next__WEBPACK_IMPORTED_MODULE_2__.default
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Page_Root__WEBPACK_IMPORTED_MODULE_5__.default, null)))), document.getElementById('root'));

/***/ }),

/***/ "./src/Page/ShowCalendar/style.scss":
/*!******************************************!*\
  !*** ./src/Page/ShowCalendar/style.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Page/loading/styels.scss":
/*!**************************************!*\
  !*** ./src/Page/loading/styels.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/Page/style.css":
/*!****************************!*\
  !*** ./src/Page/style.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_material-ui_core_esm_AccordionDetails_AccordionDetails_js-node_modules_m-a34fff","vendors-node_modules_babel_runtime_helpers_esm_asyncToGenerator_js-node_modules_babel_runtime-ba0bea"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWxlbmRhcl93ZWJwYWNrLy4vc3JjL1BhZ2UvTGlzdFRhc2svRm9ybS5qcyIsIndlYnBhY2s6Ly9jYWxlbmRhcl93ZWJwYWNrLy4vc3JjL1BhZ2UvTGlzdFRhc2svaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2FsZW5kYXJfd2VicGFjay8uL3NyYy9QYWdlL1Jvb3QuanMiLCJ3ZWJwYWNrOi8vY2FsZW5kYXJfd2VicGFjay8uL3NyYy9QYWdlL1Nob3dDYWxlbmRhci9TaG93Q2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vY2FsZW5kYXJfd2VicGFjay8uL3NyYy9QYWdlL2xvYWRpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2FsZW5kYXJfd2VicGFjay8uL3NyYy9SZWR1eC9Db25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly9jYWxlbmRhcl93ZWJwYWNrLy4vc3JjL1JlZHV4L2FjdGlvbnMvQ2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vY2FsZW5kYXJfd2VicGFjay8uL3NyYy9SZWR1eC9hY3Rpb25zL1Rhc2suanMiLCJ3ZWJwYWNrOi8vY2FsZW5kYXJfd2VicGFjay8uL3NyYy9SZWR1eC9hY3Rpb25zL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9jYWxlbmRhcl93ZWJwYWNrLy4vc3JjL1JlZHV4L3JlZHVjZXJzL0NhbGVuZGFyLmpzIiwid2VicGFjazovL2NhbGVuZGFyX3dlYnBhY2svLi9zcmMvUmVkdXgvcmVkdWNlcnMvVGFzay5qcyIsIndlYnBhY2s6Ly9jYWxlbmRhcl93ZWJwYWNrLy4vc3JjL1JlZHV4L3JlZHVjZXJzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9jYWxlbmRhcl93ZWJwYWNrLy4vc3JjL1JlZHV4L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovL2NhbGVuZGFyX3dlYnBhY2svLi9zcmMvUmVkdXgvdHlwZS9DYWxlbmRhci50eXBlLmpzIiwid2VicGFjazovL2NhbGVuZGFyX3dlYnBhY2svLi9zcmMvUmVkdXgvdHlwZS9UYXNrLmpzIiwid2VicGFjazovL2NhbGVuZGFyX3dlYnBhY2svLi9zcmMvUmVkdXgvdHlwZS9jb21tb24uanMiLCJ3ZWJwYWNrOi8vY2FsZW5kYXJfd2VicGFjay8uL3NyYy9TZXJ2aWNlL1RyYW5zbGF0ZS9pMThuZXh0LmpzIiwid2VicGFjazovL2NhbGVuZGFyX3dlYnBhY2svLi9zcmMvU2VydmljZS9UcmFuc2xhdGUvbGFuZy9Sb290LmpzIiwid2VicGFjazovL2NhbGVuZGFyX3dlYnBhY2svLi9zcmMvU2VydmljZS9UcmFuc2xhdGUvbGFuZy9lbi5qcyIsIndlYnBhY2s6Ly9jYWxlbmRhcl93ZWJwYWNrLy4vc3JjL1NlcnZpY2UvVHJhbnNsYXRlL2xhbmcvdm4uanMiLCJ3ZWJwYWNrOi8vY2FsZW5kYXJfd2VicGFjay8uL3NyYy9TZXJ2aWNlL2F4aW9zU2VydmljZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jYWxlbmRhcl93ZWJwYWNrLy4vc3JjL2FwaS90YXNrLmpzIiwid2VicGFjazovL2NhbGVuZGFyX3dlYnBhY2svLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2FsZW5kYXJfd2VicGFjay8uL3NyYy9QYWdlL1Nob3dDYWxlbmRhci9zdHlsZS5zY3NzP2E3OTciLCJ3ZWJwYWNrOi8vY2FsZW5kYXJfd2VicGFjay8uL3NyYy9QYWdlL2xvYWRpbmcvc3R5ZWxzLnNjc3M/MjQwMyIsIndlYnBhY2s6Ly9jYWxlbmRhcl93ZWJwYWNrLy4vc3JjL1BhZ2Uvc3R5bGUuY3NzPzY1ODMiLCJ3ZWJwYWNrOi8vY2FsZW5kYXJfd2VicGFjay8uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlfHN5bmN8L14vLiokIl0sIm5hbWVzIjpbIkZvcm0iLCJvbnN1Ym1pdCIsImhhbmRsZUNsb3NlIiwiUmVhY3QiLCJ0aXRsZSIsInNldFRpdGxlIiwidGV4dCIsInNldFRleHQiLCJ0eHQiLCJ0dCIsIm9uU3VibWl0IiwibWFyZ2luIiwiZSIsInRhcmdldCIsInZhbHVlIiwiU2ltcGxlQWNjb3JkaW9uIiwibG9hZGluZyIsInN0YXRlIiwic2V0U3RhdGUiLCJpc05ldyIsInNldElzTmV3IiwiaXNFZGl0Iiwic2V0SXNFZGl0IiwiaWRDaG9vc2UiLCJzZXRJZENob29zZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiZGF0ZUNob29zZSIsInVzZVNlbGVjdG9yIiwiY29tbW9uIiwiY2hvb3NlRGF0ZSIsInRhc2tzQWxsIiwidGFzayIsIlRhc2tzIiwidGFza3MiLCJmaWx0ZXIiLCJpdGVtIiwibW9tZW50IiwiZGF0ZSIsIm1vbnRoIiwieWVhciIsImFkZE5ldyIsIkNvbW1vbkFjdGlvbiIsImRhdGEiLCJ0b1N0cmluZyIsIlRhc2tBY3Rpb25zIiwiZWRpdEl0ZW0iLCJpZCIsImRlbGV0ZUl0ZW0iLCJyZW5kZXJNb2RlbCIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJtYXAiLCJpbmRleCIsImZsZXgiLCJwYXJzZUludCIsInBvc2l0aW9uIiwiYm90dG9tIiwicmlnaHQiLCJ6SW5kZXgiLCJmb250U2l6ZSIsIlJvb3QiLCJzZXRMb2FkaW5nIiwidiIsIlNob3dDYWxlbmRhciIsInVzZVRyYW5zbGF0aW9uIiwidCIsImkxOG4iLCJUaGlzZGF0ZSIsImRheUZpcnN0IiwiY2xvbmUiLCJzdGFydE9mIiwiZGF5IiwiRGF0ZU9mTW9udGgiLCJfIiwiZGF5c0luTW9udGgiLCJjb25zb2xlIiwibG9nIiwiQ2hhbmdlRGF0ZSIsIkNhbGVuZGFyQWN0aW9ucyIsIkNoYW5nZUNob29zZURhdGUiLCJDaG9vc2VEYXRlIiwic2V0IiwicmVuZGVyRW1wdHlJdGVtIiwiZGF5RnJpc3QiLCJudW1kYXkiLCJrZXkiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwicmVuZGVyQ2FsZW5kYXJJdGVtIiwiU3R5bGUiLCJDbGFzcyIsInR5bGUiLCJ0YXNrQ2xvbmUiLCJzdHlsZXgiLCJsZW5ndGgiLCJjb250cm9sU3RhdGUiLCJudW0iLCJjb250cm9sIiwic3BsaXQiLCJMb2FkaW5nIiwiY29tbW9uMiIsImlzTG9hZGluZyIsImNvbXBvc2VFbmhhbmNlcnMiLCJwcm9jZXNzIiwid2luZG93IiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIiwic2hvdWxkSG90UmVsb2FkIiwiY29tcG9zZSIsIkNvbmZpZ3VyZVN0b3JlIiwibWlkZGxld2FyZXMiLCJ0aHVuayIsInJlZHV4TXVsdGkiLCJlbmhhbmNlcnMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJ0eXBlIiwiVHlwZXMiLCJmZWN0TGlzdFRhc2siLCJGRVRDSF9MSVNUX1RBU0siLCJhZGROZXdUYXNrIiwiQUREX05FV19UQVNLIiwiZWRpdFRhc2siLCJFRElUX1RBU0siLCJkZWxldGVUYXNrIiwiREVURUxFX1RBU0siLCJjaGFuZ2VUYXNrT25lRGF0ZSIsImRhdGFPbmVEYXRlIiwiZmVjdExpc3RUYXNrU3VjY2VzcyIsInBheWxvYWQiLCJmZWN0TGlzdFRhc2tGYWlsZWQiLCJlcnJvciIsImZlY3RMaXN0VGFza1JlcXVlc3QiLCJUYXNrQXBpcyIsInRoZW4iLCJyZXNwIiwiYWRkTmV3VGFza1JlcXVlc3QiLCJlcnIiLCJlZGl0VGFza1JlcXVlc3QiLCJkZWxldGVUYXNrUmVxdWVzdCIsImxvYWRpbmdDaGFuZ2UiLCJzdGF0dXMiLCJpbml0aWFsU3RhdGUiLCJ1c2VyTmFtZSIsInJlZHVjZXIiLCJhY3Rpb24iLCJ0YXNrT25lRGF5IiwiY29tYmluZVJlZHVjZXJzIiwiQ2FsZW5kYXIiLCJUYXNrIiwiQ0hBTkdFX0RBVEUiLCJDSEFORV9DSE9PU0VfREFURSIsIkZFVENIX0xJU1RfRkFMSUVEIiwiRkVUQ0hfTElTVF9TVUNDRVNTIiwiRklMVEVSX1RBU0siLCJTRVRfVEFTS19PTkVfREFURSIsIkxPQURJTkdfQ0hBTkdFIiwiaW5pdFJlYWN0STE4bmV4dCIsImluaXQiLCJyZXNvdXJjZXMiLCJsbmciLCJrZXlTZXBhcmF0b3IiLCJpbnRlcnBvbGF0aW9uIiwiZXNjYXBlVmFsdWUiLCJlbiIsInZuIiwidHJhbnNsYXRpb24iLCJVc2VyTmFtZSIsIlVzZXJQYXNzIiwiTG9naW4iLCJEYXRlT2ZXZWVrIiwiQXhpb3NTZXJ2aWNlIiwiaW5zdGFuY2UiLCJheGlvcyIsImJhc2VVUkwiLCJoZWFkZXJzIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJoYW5kbGVTdWNjZXMiLCJoYW5kbGVFcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJ1cmwiLCJnZXQiLCJxcyIsInBvc3QiLCJwdXQiLCJlbmRwb2ludCIsImZlY3RUYXNrIiwiYXhpb3NTZXJ2aWNlIiwicG9zdFRhc2siLCJwdXRUYXNrIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsT0FBeUM7QUFBQSxNQUF6QkMsUUFBeUIsUUFBekJBLFFBQXlCO0FBQUEsTUFBZkMsV0FBZSxRQUFmQSxXQUFlOztBQUN0RCx3QkFBMEJDLDJDQUFBLENBQWUsRUFBZixDQUExQjtBQUFBO0FBQUEsTUFBT0MsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EseUJBQXdCRiwyQ0FBQSxDQUFlLEVBQWYsQ0FBeEI7QUFBQTtBQUFBLE1BQU9HLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUVBLE1BQU1DLEdBQUcsR0FBR0YsSUFBWjtBQUNBLE1BQU1HLEVBQUUsR0FBR0wsS0FBWDs7QUFDQSxNQUFNTSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCVCxZQUFRLENBQUNRLEVBQUQsRUFBS0QsR0FBTCxDQUFSO0FBQ0FOLGVBQVc7QUFDWixHQUhEOztBQUtBLHNCQUNFLGlEQUFDLHNEQUFEO0FBQWEsU0FBSyxFQUFDLFNBQW5CO0FBQTZCLGFBQVMsRUFBRTtBQUF4QyxrQkFDRSxpREFBQyxzREFBRDtBQUNFLE1BQUUsRUFBQyw0QkFETDtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkUiLCJmaWxlIjoianMvYnVuZGxlLmRmMGEzYWUxZDE2MmY1YzdjZWNiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGV4dEZpZWxkLCBGb3JtQ29udHJvbCwgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSh7IG9uc3VibWl0LCBoYW5kbGVDbG9zZSB9KSB7XHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCB0eHQgPSB0ZXh0O1xyXG4gIGNvbnN0IHR0ID0gdGl0bGU7XHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoKSA9PiB7XHJcbiAgICBvbnN1Ym1pdCh0dCwgdHh0KTtcclxuICAgIGhhbmRsZUNsb3NlKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtQ29udHJvbCBjb2xvcj0ncHJpbWFyeScgZnVsbFdpZHRoPXt0cnVlfT5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIGlkPSdjdXN0b20tY3NzLXN0YW5kYXJkLWlucHV0YSdcclxuICAgICAgICBsYWJlbD0nVMOqbiBjw7RuZyB2aeG7h2MnXHJcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAxMCB9fVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAvPlxyXG4gICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgaWQ9J3N0YW5kYXJkLW11bHRpbGluZS1zdGF0aWMnXHJcbiAgICAgICAgbGFiZWw9J07hu5lpIGR1bmcgY8O0bmcgdmnhu4djJ1xyXG4gICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAxMCB9fVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGV4dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblN1Ym1pdCgpfVxyXG4gICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuICAgICAgICBjb2xvcj0ncHJpbWFyeSdcclxuICAgICAgICBzdHlsZT17eyBtYXJnaW46IDEwIH19PlxyXG4gICAgICAgIEhvw6BuIHRow6BuaFxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgUGFwZXIsXHJcbiAgVGFicyxcclxuICBUYWIsXHJcbiAgTW9kYWwsXHJcbiAgQWNjb3JkaW9uLFxyXG4gIEFjY29yZGlvblN1bW1hcnksXHJcbiAgQWNjb3JkaW9uRGV0YWlscyxcclxuICBJY29uQnV0dG9uLFxyXG4gIFR5cG9ncmFwaHlcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG4vLyBpbXBvcnQgaWNvblxyXG5pbXBvcnQgRGVsZXRlRm9yZXZlck91dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlRm9yZXZlck91dGxpbmVkJztcclxuaW1wb3J0IEVkaXRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FZGl0JztcclxuaW1wb3J0IENvbnRyb2xQb2ludEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NvbnRyb2xQb2ludCc7XHJcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZSc7XHJcbi8vXHJcblxyXG4vL2ltcG9ydCBjb21wb25lbnRcclxuaW1wb3J0IEZyb21Nb2RhbCBmcm9tICcuL0Zvcm0nO1xyXG4vL1xyXG5cclxuLy8gcmVkdXhcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBUYXNrVHlwZXMgfSBmcm9tICcuLi8uLi9SZWR1eC90eXBlL1Rhc2snO1xyXG5pbXBvcnQgKiBhcyBUYXNrQWN0aW9ucyBmcm9tICcuLi8uLi9SZWR1eC9hY3Rpb25zL1Rhc2snO1xyXG5pbXBvcnQgKiBhcyBDb21tb25BY3Rpb24gZnJvbSAnLi4vLi4vUmVkdXgvYWN0aW9ucy9jb21tb24nO1xyXG4vL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1wbGVBY2NvcmRpb24oeyBsb2FkaW5nIH0pIHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpc05ldywgc2V0SXNOZXddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0VkaXQsIHNldElzRWRpdF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lkQ2hvb3NlLCBzZXRJZENob29zZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBzZXRTdGF0ZShuZXdWYWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBkYXRlQ2hvb3NlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb21tb24uY2hvb3NlRGF0ZSk7XHJcbiAgY29uc3QgdGFza3NBbGwgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRhc2suVGFza3MpO1xyXG5cclxuICBjb25zdCB0YXNrcyA9IHRhc2tzQWxsLmZpbHRlcihcclxuICAgIChpdGVtKSA9PlxyXG4gICAgICBtb21lbnQoaXRlbS5kYXRlLCAnTExMTCcpLmRhdGUoKSA9PSBtb21lbnQoZGF0ZUNob29zZSwgJ0xMTEwnKS5kYXRlKCkgJiZcclxuICAgICAgbW9tZW50KGl0ZW0uZGF0ZSwgJ0xMTEwnKS5tb250aCgpID09IG1vbWVudChkYXRlQ2hvb3NlLCAnTExMTCcpLm1vbnRoKCkgJiZcclxuICAgICAgbW9tZW50KGl0ZW0uZGF0ZSwgJ0xMTEwnKS55ZWFyKCkgPT0gbW9tZW50KGRhdGVDaG9vc2UsICdMTExMJykueWVhcigpXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgYWRkTmV3ID0gYXN5bmMgKHRpdGxlLCB0ZXh0KSA9PiB7XHJcbiAgICBkaXNwYXRjaChDb21tb25BY3Rpb24ubG9hZGluZ0NoYW5nZSh0cnVlKSk7XHJcbiAgICBjb25zdCBkYXRhID0geyB0aXRsZTogdGl0bGUsIHRleHQ6IHRleHQsIGRhdGU6IGRhdGVDaG9vc2UudG9TdHJpbmcoKSB9O1xyXG4gICAgYXdhaXQgVGFza0FjdGlvbnMuYWRkTmV3VGFza1JlcXVlc3QoZGlzcGF0Y2gsIGRhdGEpO1xyXG4gICAgYXdhaXQgVGFza0FjdGlvbnMuZmVjdExpc3RUYXNrUmVxdWVzdChkaXNwYXRjaCk7XHJcbiAgICBkaXNwYXRjaChDb21tb25BY3Rpb24ubG9hZGluZ0NoYW5nZShmYWxzZSkpO1xyXG4gICAgc2V0SXNOZXcoIWlzTmV3KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBlZGl0SXRlbSA9IGFzeW5jIChpZCwgdGl0bGUsIHRleHQpID0+IHtcclxuICAgIGRpc3BhdGNoKENvbW1vbkFjdGlvbi5sb2FkaW5nQ2hhbmdlKHRydWUpKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7IHRpdGxlOiB0aXRsZSwgdGV4dDogdGV4dCwgZGF0ZTogZGF0ZUNob29zZS50b1N0cmluZygpIH07XHJcbiAgICBhd2FpdCBUYXNrQWN0aW9ucy5lZGl0VGFza1JlcXVlc3QoZGlzcGF0Y2gsIGlkLCBkYXRhKTtcclxuICAgIGF3YWl0IFRhc2tBY3Rpb25zLmZlY3RMaXN0VGFza1JlcXVlc3QoZGlzcGF0Y2gpO1xyXG4gICAgZGlzcGF0Y2goQ29tbW9uQWN0aW9uLmxvYWRpbmdDaGFuZ2UoZmFsc2UpKTtcclxuICAgIHNldElzRWRpdCghaXNFZGl0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVJdGVtID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBkaXNwYXRjaChDb21tb25BY3Rpb24ubG9hZGluZ0NoYW5nZSh0cnVlKSk7XHJcbiAgICBhd2FpdCBUYXNrQWN0aW9ucy5kZWxldGVUYXNrUmVxdWVzdChkaXNwYXRjaCwgaWQpO1xyXG4gICAgYXdhaXQgVGFza0FjdGlvbnMuZmVjdExpc3RUYXNrUmVxdWVzdChkaXNwYXRjaCk7XHJcbiAgICBkaXNwYXRjaChDb21tb25BY3Rpb24ubG9hZGluZ0NoYW5nZShmYWxzZSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlck1vZGVsID0gKHN0YXRlLCBoYW5kbGVDbG9zZSwgdGl0bGUsIG9uc3VibWl0KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBrZXk9e3RpdGxlfVxyXG4gICAgICAgIGlkPXt0aXRsZX1cclxuICAgICAgICBvcGVuPXtzdGF0ZX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9e2BzaW1wbGUtbW9kYWwtJHt0aXRsZX1gfVxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e2BzaW1wbGUtbW9kYWwtZGVzY3JpcHRpb24tJHt0aXRsZX1gfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdhcXVhJyxcclxuICAgICAgICAgICAgd2lkdGg6ICc0MCUnLFxyXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMzAlJyxcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiAnMjBweCcsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwXHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5Pnt0aXRsZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8RnJvbU1vZGFsXHJcbiAgICAgICAgICAgIG9uc3VibWl0PXsodGl0bGUsIHRleHQpID0+IG9uc3VibWl0KHRpdGxlLCB0ZXh0KX1cclxuICAgICAgICAgICAgaGFuZGxlQ2xvc2U9eygpID0+IGhhbmRsZUNsb3NlKCl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnNTAlJywgbWFyZ2luTGVmdDogJzI1JScgfX0+XHJcbiAgICAgIDxQYXBlciBzcXVhcmU+XHJcbiAgICAgICAgPFRhYnNcclxuICAgICAgICAgIHZhbHVlPXtzdGF0ZX1cclxuICAgICAgICAgIGluZGljYXRvckNvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgdGV4dENvbG9yPSdwcmltYXJ5J1xyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIGFyaWEtbGFiZWw9J2Rpc2FibGVkIHRhYnMgZXhhbXBsZSc+XHJcbiAgICAgICAgICA8VGFiIGxhYmVsPSdHaGkgY2jDuicgLz5cclxuICAgICAgICAgIDxUYWIgbGFiZWw9J0N14buZYyBo4bq5bicgLz5cclxuICAgICAgICA8L1RhYnM+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICAgIDxQYXBlciBlbGV2YXRpb249ezN9IHNxdWFyZSB2YXJpYW50PSdlbGV2YXRpb24nPlxyXG4gICAgICAgIHt0YXNrcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8QWNjb3JkaW9uIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjMwLDcwLDcwLC40KScgfX1cclxuICAgICAgICAgICAgICBleHBhbmRJY29uPXs8RXhwYW5kTW9yZUljb24gLz59XHJcbiAgICAgICAgICAgICAgYXJpYS1jb250cm9scz17YGNvbnRlbnQtJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgIGlkPXtgaGVhZGVyLSR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3sgZmxleDogMSB9fT57aXRlbS50aXRsZX08L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldElkQ2hvb3NlKGl0ZW0uaWQpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRJc0VkaXQoIWlzRWRpdCk7XHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxFZGl0SWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBkZWxldGVJdGVtKHBhcnNlSW50KGl0ZW0uaWQpKTtcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPERlbGV0ZUZvcmV2ZXJPdXRsaW5lZEljb24gLz5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cclxuICAgICAgICAgICAgPEFjY29yZGlvbkRldGFpbHMgc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgIHtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cclxuICAgICAgICAgICAge3JlbmRlck1vZGVsKFxyXG4gICAgICAgICAgICAgIGlzRWRpdCxcclxuICAgICAgICAgICAgICAoKSA9PiBzZXRJc0VkaXQoIWlzRWRpdCksXHJcbiAgICAgICAgICAgICAgJ3Phu61hJyxcclxuICAgICAgICAgICAgICAodGl0bGUsIHRleHQpID0+IGVkaXRJdGVtKGl0ZW0uaWQsIHRpdGxlLCB0ZXh0KVxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgICBib3R0b206IDUwLFxyXG4gICAgICAgICAgcmlnaHQ6IDUwLFxyXG4gICAgICAgICAgekluZGV4OiAxMDAwXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNOZXcoIWlzTmV3KX0+XHJcbiAgICAgICAgICA8Q29udHJvbFBvaW50SWNvbiBzdHlsZT17eyBmb250U2l6ZTogNTAgfX0gLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge3JlbmRlck1vZGVsKFxyXG4gICAgICAgIGlzTmV3LFxyXG4gICAgICAgICgpID0+IHNldElzTmV3KCFpc05ldyksXHJcbiAgICAgICAgJ3Row6ptIG3hu5tpJyxcclxuICAgICAgICAodGl0bGUsIHRleHQpID0+IGFkZE5ldyh0aXRsZSwgdGV4dClcclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgY29tcG9uZW50XHJcbmltcG9ydCBTaG93Q2FsZW5kYXIgZnJvbSAnLi9TaG93Q2FsZW5kYXIvU2hvd0NhbGVuZGFyJztcclxuaW1wb3J0IExpc3RUYXNrIGZyb20gJy4vTGlzdFRhc2snO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL2xvYWRpbmcnO1xyXG4vLyBpbXBvcnQgTGlzdFRhc2sgZnJvbSAnLi9MaXN0VGFzayc7XHJcbi8vIGltcG9ydCBTaG93Q2FsZW5kYXIgZnJvbSAnLi9TaG93Q2FsZW5kYXIvU2hvd0NhbGVuZGFyJztcclxuLy9cclxuXHJcbi8vIGltcG9ydCBzdHlsZVxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuLy9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm9vdCgpIHtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9Jy90YXNrcyc+XHJcbiAgICAgICAgICA8TGlzdFRhc2sgbG9hZGluZz17KHYpID0+IHNldExvYWRpbmcodil9IC8+XHJcbiAgICAgICAgPC9Sb3V0ZT5cclxuXHJcbiAgICAgICAgPFJvdXRlIHBhdGg9Jy8nPlxyXG4gICAgICAgICAgPFNob3dDYWxlbmRhciBsb2FkaW5nPXsodikgPT4gc2V0TG9hZGluZyh2KX0gLz5cclxuICAgICAgICA8L1JvdXRlPlxyXG4gICAgICA8L1N3aXRjaD5cclxuICAgICAgPExvYWRpbmcgbG9hZGluZz17bG9hZGluZ30gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbi8vIGltcG9ydCBzdHlsZVxyXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcbi8vXHJcblxyXG4vLyBpbXBvcnQgYWN0aW9uIGFuZCB0eXBlc1xyXG5pbXBvcnQgKiBhcyBDYWxlbmRhclR5cGVzIGZyb20gJy4uLy4uL1JlZHV4L3R5cGUvQ2FsZW5kYXIudHlwZS5qcyc7XHJcbmltcG9ydCAqIGFzIENvbW1vbkFjdGlvbiBmcm9tICcuLi8uLi9SZWR1eC9hY3Rpb25zL2NvbW1vbic7XHJcbmltcG9ydCAqIGFzIENhbGVuZGFyQWN0aW9ucyBmcm9tICcuLi8uLi9SZWR1eC9hY3Rpb25zL0NhbGVuZGFyJztcclxuLy9cclxuXHJcbi8vIG1hdGVyaWFsIGljb25cclxuaW1wb3J0IFNraXBOZXh0Um91bmRlZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NraXBOZXh0Um91bmRlZCc7XHJcbmltcG9ydCBTa2lwUHJldmlvdXNSb3VuZGVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2tpcFByZXZpb3VzUm91bmRlZCc7XHJcbmltcG9ydCBBcnJvd0xlZnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0xlZnQnO1xyXG5pbXBvcnQgQXJyb3dSaWdodEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93UmlnaHQnO1xyXG4vL1xyXG5cclxuLy8gaW1wb3J0IG90aGVyIGpzXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuLy9cclxuXHJcbi8vcmVhY3QgcmVkdXhcclxuaW1wb3J0ICogYXMgVGFza0FjdGlvbnMgZnJvbSAnLi4vLi4vUmVkdXgvYWN0aW9ucy9UYXNrJztcclxuLy9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNob3dDYWxlbmRhcih7IGxvYWRpbmcgfSkge1xyXG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICBjb25zdCBkYXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb21tb24uZGF0ZSk7XHJcbiAgY29uc3QgVGhpc2RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvbW1vbi5UaGlzZGF0ZSk7XHJcbiAgY29uc3QgZGF5Rmlyc3QgPSBkYXRlLmNsb25lKCkuc3RhcnRPZignbW9udGgnKS5kYXkoKTtcclxuICBjb25zdCBtb250aCA9IGRhdGUubW9udGgoKTtcclxuICBjb25zdCB5ZWFyID0gZGF0ZS55ZWFyKCk7XHJcbiAgY29uc3QgRGF0ZU9mTW9udGggPSBfLnJhbmdlKDEsIGRhdGUuZGF5c0luTW9udGgoKSArIDEpO1xyXG4gIGNvbnN0IHRhc2tzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50YXNrLlRhc2tzKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJzEnKTtcclxuICAgIGRpc3BhdGNoKENvbW1vbkFjdGlvbi5sb2FkaW5nQ2hhbmdlKHRydWUpKTtcclxuICAgIFRhc2tBY3Rpb25zLmZlY3RMaXN0VGFza1JlcXVlc3QoZGlzcGF0Y2gpO1xyXG4gICAgZGlzcGF0Y2goQ29tbW9uQWN0aW9uLmxvYWRpbmdDaGFuZ2UoZmFsc2UpKTtcclxuICAgIGNvbnNvbGUubG9nKCcyJyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBDaGFuZ2VEYXRlID0gKGRhdGEpID0+IGRpc3BhdGNoKENhbGVuZGFyQWN0aW9ucy5DaGFuZ2VEYXRlKGRhdGEpKTtcclxuICBjb25zdCBDaGFuZ2VDaG9vc2VEYXRlID0gKHZhbHVlLCBtb250aCwgeWVhcikgPT4ge1xyXG4gICAgY29uc3QgQ2hvb3NlRGF0ZSA9IG1vbWVudCgpO1xyXG4gICAgQ2hvb3NlRGF0ZS5zZXQoJ3llYXInLCB5ZWFyKTtcclxuICAgIENob29zZURhdGUuc2V0KCdtb250aCcsIG1vbnRoKTtcclxuICAgIENob29zZURhdGUuc2V0KCdkYXRlJywgdmFsdWUpO1xyXG4gICAgcmV0dXJuIGRpc3BhdGNoKENhbGVuZGFyQWN0aW9ucy5DaGFuZ2VDaG9vc2VEYXRlKENob29zZURhdGUpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJFbXB0eUl0ZW0gPSAoZGF5RnJpc3QpID0+IHtcclxuICAgIGNvbnN0IG51bWRheSA9IF8ucmFuZ2UoMCwgZGF5RnJpc3QpO1xyXG4gICAgcmV0dXJuIG51bWRheS5tYXAoKHZhbHVlLCBrZXkpID0+IChcclxuICAgICAgPEJveFxyXG4gICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB3aWR0aDogYCR7MTAwIC8gN30lYCxcclxuICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xyXG4gICAgICAgIH19PjwvQm94PlxyXG4gICAgKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyQ2FsZW5kYXJJdGVtID0gKGRhdGEsIGRheUZyaXN0LCBTdHlsZSkgPT4ge1xyXG4gICAgY29uc3QgQ2xhc3MgPSBTdHlsZSA9PT0gJ3RpdGxlJyA/ICdDYWxlbmRhclRpdGxlJyA6ICdDYWxlbmRhckl0ZW0nO1xyXG4gICAgY29uc3QgdHlsZSA9IFN0eWxlID09PSAndGl0bGUnID8gJ3RleHQnIDogJ2NvbnRhaW5lZCc7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Qm94IGNsYXNzTmFtZT17Q2xhc3N9PlxyXG4gICAgICAgIHtyZW5kZXJFbXB0eUl0ZW0oZGF5RnJpc3QpfVxyXG4gICAgICAgIHtkYXRhLm1hcCgodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdGFza0Nsb25lID0gdGFza3MuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgbW9tZW50KGl0ZW0uZGF0ZSwgJ0xMTEwnKS5kYXRlKCkgPT0gdmFsdWUgJiZcclxuICAgICAgICAgICAgICBtb21lbnQoaXRlbS5kYXRlLCAnTExMTCcpLm1vbnRoKCkgPT0gbW9udGggJiZcclxuICAgICAgICAgICAgICBtb21lbnQoaXRlbS5kYXRlLCAnTExMTCcpLnllYXIoKSA9PSB5ZWFyXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGNvbnN0IHN0eWxleCA9XHJcbiAgICAgICAgICAgIHRhc2tDbG9uZS5sZW5ndGggPiAwICYmIFN0eWxlICE9PSAndGl0bGUnXHJcbiAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHsxMDAgLyA3fSVgLFxyXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsODAsNzAsLjQpJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDogeyB3aWR0aDogYCR7MTAwIC8gN30lYCwgdGV4dEFsaWduOiAnbGVmdCcgfTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goVGFza0FjdGlvbnMuY2hhbmdlVGFza09uZURhdGUodGFza0Nsb25lKSk7XHJcbiAgICAgICAgICAgICAgICBDaGFuZ2VDaG9vc2VEYXRlKHZhbHVlLCBtb250aCwgeWVhcik7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBzdHlsZT17c3R5bGV4fVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9e3R5bGV9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0gdG89Jy90YXNrcyc+XHJcbiAgICAgICAgICAgICAgICB7dmFsdWV9XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb250cm9sU3RhdGUgPSAodHlsZSwgbnVtKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHR5bGUpIHtcclxuICAgICAgY2FzZSAnbW9udGgnOlxyXG4gICAgICAgIGRhdGUuc2V0KCdtb250aCcsIG1vbnRoICsgbnVtKTtcclxuICAgICAgICBDaGFuZ2VEYXRlKGRhdGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3llYXInOlxyXG4gICAgICAgIGRhdGUuc2V0KCd5ZWFyJywgeWVhciArIG51bSk7XHJcbiAgICAgICAgY29uc3QgbW9tZW50ID0gZGF0ZS50b1N0cmluZygpO1xyXG4gICAgICAgIENoYW5nZURhdGUoZGF0ZS50b1N0cmluZygpKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29udHJvbCA9IChtb250aCwgeWVhcikgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEdyaWQgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fSBjb250YWluZXI+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XHJcbiAgICAgICAgICA8QnV0dG9uPlxyXG4gICAgICAgICAgICA8U2tpcFByZXZpb3VzUm91bmRlZEljb24gb25DbGljaz17KCkgPT4gY29udHJvbFN0YXRlKCd5ZWFyJywgLTEpfSAvPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uPlxyXG4gICAgICAgICAgICA8QXJyb3dMZWZ0SWNvbiBvbkNsaWNrPXsoKSA9PiBjb250cm9sU3RhdGUoJ21vbnRoJywgLTEpfSAvPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IHN0eWxlPXt7IGZvbnRTaXplOiAnMzBweCcgfX0+XHJcbiAgICAgICAgICB7KG1vbnRoICsgMSkudG9TdHJpbmcoKSArICcvJyArIHllYXIudG9TdHJpbmcoKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XHJcbiAgICAgICAgICA8QnV0dG9uPlxyXG4gICAgICAgICAgICA8QXJyb3dSaWdodEljb24gb25DbGljaz17KCkgPT4gY29udHJvbFN0YXRlKCdtb250aCcsIDEpfSAvPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uPlxyXG4gICAgICAgICAgICA8U2tpcE5leHRSb3VuZGVkSWNvbiBvbkNsaWNrPXsoKSA9PiBjb250cm9sU3RhdGUoJ3llYXInLCAxKX0gLz5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBjbGFzc05hbWU9J0NhbGVuZGFyJz5cclxuICAgICAgPEJveCBjb21wb25lbnQ9J2gxJyBjbGFzc05hbWU9J3RpdGxlJz5cclxuICAgICAgICBDYWxlbmRhclxyXG4gICAgICA8L0JveD5cclxuXHJcbiAgICAgIHtjb250cm9sKG1vbnRoLCB5ZWFyKX1cclxuICAgICAge3JlbmRlckNhbGVuZGFySXRlbSh0KCdEYXRlT2ZXZWVrJykuc3BsaXQoJywnKSwgMCwgJ3RpdGxlJyl9XHJcblxyXG4gICAgICB7cmVuZGVyQ2FsZW5kYXJJdGVtKERhdGVPZk1vbnRoLCBkYXlGaXJzdCwgJ2l0ZW0nKX1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbi8vIGltcG9ydCBzdHlsZVxyXG5pbXBvcnQgJy4vc3R5ZWxzLnNjc3MnO1xyXG4vL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZGluZygpIHtcclxuICBjb25zdCBsb2FkaW5nID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb21tb24yLmlzTG9hZGluZyk7XHJcblxyXG4gIGxldCBkaXNwbGF5ID0gJyc7XHJcbiAgY29uc29sZS5sb2cobG9hZGluZyk7XHJcblxyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgICBkaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxuXHJcbiAgLy8gY29uc29sZS5sb2coZGlzcGxheSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLWNvbnRhaW5lcicgc3R5bGU9e3sgZGlzcGxheTogZGlzcGxheSB9fT5cclxuICAgICAgPHNwYW4+TGl0dGxlIGxvYWRpbmcgLi4uPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgcmVkdXhNdWx0aSBmcm9tICdyZWR1eC1tdWx0aSc7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL2luZGV4JztcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGVXYXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5cclxuY29uc3QgY29tcG9zZUVuaGFuY2VycyA9XHJcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxyXG4gIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmXHJcbiAgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfX1xyXG4gICAgPyB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fKHtcclxuICAgICAgICBzaG91bGRIb3RSZWxvYWQ6IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICA6IGNvbXBvc2U7XHJcblxyXG5jb25zdCBDb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFt0aHVuaywgcmVkdXhNdWx0aV07XHJcbiAgY29uc3QgZW5oYW5jZXJzID0gW2FwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcyldO1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGNvbXBvc2VFbmhhbmNlcnMoLi4uZW5oYW5jZXJzKSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZmlndXJlU3RvcmU7XHJcbiIsImltcG9ydCAqIGFzIFR5cGVzIGZyb20gJy4uL3R5cGUvQ2FsZW5kYXIudHlwZS5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbmdlRGF0ZSA9IChtb21lbnQpID0+ICh7XHJcbiAgdHlwZTogVHlwZXMuQ0hBTkdFX0RBVEUsXHJcbiAgbW9tZW50XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IENoYW5nZUNob29zZURhdGUgPSAobW9tZW50KSA9PiAoe1xyXG4gIHR5cGU6IFR5cGVzLkNIQU5FX0NIT09TRV9EQVRFLFxyXG4gIG1vbWVudFxyXG59KTtcclxuIiwiaW1wb3J0ICogYXMgVHlwZXMgZnJvbSAnLi4vdHlwZS9UYXNrJztcclxuaW1wb3J0ICogYXMgVGFza0FwaXMgZnJvbSAnLi4vLi4vYXBpL3Rhc2snO1xyXG5pbXBvcnQgKiBhcyBDb21tb25BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvY29tbW9uJztcclxuZXhwb3J0IGNvbnN0IGZlY3RMaXN0VGFzayA9ICgpID0+ICh7XHJcbiAgdHlwZTogVHlwZXMuRkVUQ0hfTElTVF9UQVNLXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZE5ld1Rhc2sgPSAoKSA9PiAoe1xyXG4gIHR5cGU6IFR5cGVzLkFERF9ORVdfVEFTS1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBlZGl0VGFzayA9ICgpID0+ICh7XHJcbiAgdHlwZTogVHlwZXMuRURJVF9UQVNLXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVRhc2sgPSAoKSA9PiAoe1xyXG4gIHR5cGU6IFR5cGVzLkRFVEVMRV9UQVNLXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoYW5nZVRhc2tPbmVEYXRlID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogVHlwZXMuU0VUX1RBU0tfT05FX0RBVEUsXHJcbiAgZGF0YU9uZURhdGU6IGRhdGFcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmVjdExpc3RUYXNrU3VjY2VzcyA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFR5cGVzLkZFVENIX0xJU1RfU1VDQ0VTUyxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBkYXRhXHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZWN0TGlzdFRhc2tGYWlsZWQgPSAoZXJyb3IpID0+ICh7XHJcbiAgdHlwZTogVHlwZXMuRkVUQ0hfTElTVF9GQUxJRUQsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgZXJyb3JcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZlY3RMaXN0VGFza1JlcXVlc3QgPSBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaChmZWN0TGlzdFRhc2soKSk7XHJcblxyXG4gIGF3YWl0IFRhc2tBcGlzLmZlY3RUYXNrKClcclxuICAgIC50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcDtcclxuICAgICAgZGlzcGF0Y2goZmVjdExpc3RUYXNrU3VjY2VzcyhkYXRhKSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIGRpc3BhdGNoKGZlY3RMaXN0VGFza0ZhaWxlZChlcnJvcikpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkTmV3VGFza1JlcXVlc3QgPSBhc3luYyAoZGlzcGF0Y2gsIGRhdGEpID0+IHtcclxuICBhd2FpdCBkaXNwYXRjaChhZGROZXdUYXNrKCkpO1xyXG5cclxuICBhd2FpdCBUYXNrQXBpcy5wb3N0VGFzayhkYXRhKVxyXG4gICAgLnRoZW4oKHJlc3ApID0+IGNvbnNvbGUubG9nKHJlc3ApKVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdFRhc2tSZXF1ZXN0ID0gYXN5bmMgKGRpc3BhdGNoLCBpZCwgZGF0YSkgPT4ge1xyXG4gIGRpc3BhdGNoKGVkaXRUYXNrKCkpO1xyXG5cclxuICBhd2FpdCBUYXNrQXBpcy5wdXRUYXNrKGlkLCBkYXRhKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVUYXNrUmVxdWVzdCA9IGFzeW5jIChkaXNwYXRjaCwgaWQpID0+IHtcclxuICBkaXNwYXRjaChkZWxldGVUYXNrKCkpO1xyXG5cclxuICBhd2FpdCBUYXNrQXBpcy5kZWxldGVUYXNrKGlkKTtcclxufTtcclxuIiwiaW1wb3J0ICogYXMgVHlwZXMgZnJvbSAnLi4vdHlwZS9jb21tb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRpbmdDaGFuZ2UgPSAoc3RhdHVzKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFR5cGVzLkxPQURJTkdfQ0hBTkdFLFxyXG4gICAgc3RhdHVzOiBzdGF0dXNcclxuICB9O1xyXG59O1xyXG4iLCIvLyBpbXBvcnQgKiBhcyB0YXNrQ29uc3RhbnMgZnJvbSAnLi4vY29uc3RhbnRzL1Rhc2snO1xyXG4vLyBpbXBvcnQgeyB0b2FzdEVycm9yIH0gZnJvbSAnLi4vaGVscGVyL3RvYXN0SGVscGVyJztcclxuXHJcbmltcG9ydCAqIGFzIFR5cGVzIGZyb20gJy4uL3R5cGUvQ2FsZW5kYXIudHlwZSc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHVzZXJOYW1lOiAnJyxcclxuICBjaG9vc2VEYXRlOiBtb21lbnQoKSxcclxuICBkYXRlOiBtb21lbnQoKSxcclxuICBUaGlzZGF0ZTogbW9tZW50KClcclxufTtcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBUeXBlcy5DSEFOR0VfREFURTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRhdGU6IG1vbWVudChhY3Rpb24ubW9tZW50LCAnTExMTCcpIH07XHJcbiAgICBjYXNlIFR5cGVzLkNIQU5FX0NIT09TRV9EQVRFOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2hvb3NlRGF0ZTogbW9tZW50KGFjdGlvbi5tb21lbnQsICdMTExMJykgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0ICogYXMgVHlwZXMgZnJvbSAnLi4vdHlwZS9UYXNrJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgVGFza3M6IFtdLFxyXG4gIHRhc2tPbmVEYXk6IFtdLFxyXG4gIGRhdGVDaG9vc2U6IG1vbWVudCgpXHJcbn07XHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgVHlwZXMuRkVUQ0hfTElTVF9UQVNLOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xyXG4gICAgY2FzZSBUeXBlcy5BRERfTkVXX1RBU0s6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XHJcbiAgICBjYXNlIFR5cGVzLkVESVRfVEFTSzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcclxuICAgIGNhc2UgVHlwZXMuREVURUxFX1RBU0s6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XHJcbiAgICBjYXNlIFR5cGVzLlNFVF9UQVNLX09ORV9EQVRFOlxyXG4gICAgICBjb25zdCB7IGRhdGFPbmVEYXRlIH0gPSBhY3Rpb247XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB0YXNrT25lRGF5OiBkYXRhT25lRGF0ZSB9O1xyXG4gICAgY2FzZSBUeXBlcy5GRVRDSF9MSVNUX1NVQ0NFU1M6XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBUYXNrczogZGF0YSB9O1xyXG4gICAgY2FzZSBUeXBlcy5GRVRDSF9MSVNUX0ZBTElFRDpcclxuICAgICAgY29uc3QgeyBlcnIgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0ICogYXMgVHlwZXMgZnJvbSAnLi4vdHlwZS9jb21tb24nO1xyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgaXNMb2FkaW5nOiB0cnVlXHJcbn07XHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgVHlwZXMuTE9BRElOR19DSEFOR0U6XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBhY3Rpb247XHJcblxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNMb2FkaW5nOiBzdGF0dXMgfTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IENhbGVuZGFyIGZyb20gJy4vQ2FsZW5kYXInO1xyXG5pbXBvcnQgVGFzayBmcm9tICcuL1Rhc2snO1xyXG5pbXBvcnQgY29tbW9uIGZyb20gJy4vY29tbW9uJztcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGNvbW1vbjogQ2FsZW5kYXIsXHJcbiAgY29tbW9uMjogY29tbW9uLFxyXG4gIHRhc2s6IFRhc2tcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiZXhwb3J0IGNvbnN0IENIQU5HRV9EQVRFID0gJ0NIQU5HRV9EQVRFJztcclxuZXhwb3J0IGNvbnN0IENIQU5FX0NIT09TRV9EQVRFID0gJ0NIQU5FX0NIT09TRV9EQVRFJztcclxuIiwiZXhwb3J0IGNvbnN0IEZFVENIX0xJU1RfVEFTSyA9ICdGRVRDSF9MSVNUX1RBU0snO1xyXG5leHBvcnQgY29uc3QgRkVUQ0hfTElTVF9GQUxJRUQgPSAnRkVUQ0hfTElTVF9UQVNLX0ZBTElFRCc7XHJcbmV4cG9ydCBjb25zdCBGRVRDSF9MSVNUX1NVQ0NFU1MgPSAnRkVUQ0hfTElTVF9UQVNLX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX05FV19UQVNLID0gJ0FERF9ORVdfVEFTSyc7XHJcbmV4cG9ydCBjb25zdCBFRElUX1RBU0sgPSAnRURJVF9UQVNLJztcclxuZXhwb3J0IGNvbnN0IERFVEVMRV9UQVNLID0gJ0RFVEVMRV9UQVNLJztcclxuZXhwb3J0IGNvbnN0IEZJTFRFUl9UQVNLID0gJ0ZJTFRFUl9UQVNLJztcclxuZXhwb3J0IGNvbnN0IFNFVF9UQVNLX09ORV9EQVRFID0gJ1NFVF9UQVNLX09ORV9EQVRFJztcclxuIiwiZXhwb3J0IGNvbnN0IExPQURJTkdfQ0hBTkdFID0gJ0xPQURJTkdfQ0hBTkdFJztcclxuIiwiaW1wb3J0IGkxOG4gZnJvbSAnaTE4bmV4dCc7XHJcbmltcG9ydCB7IGluaXRSZWFjdEkxOG5leHQgfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuXHJcbmltcG9ydCByZXNvdXJjZXMgZnJvbSAnLi9sYW5nL1Jvb3QnO1xyXG5pMThuXHJcbiAgLy8gcGFzcyB0aGUgaTE4biBpbnN0YW5jZSB0byByZWFjdC1pMThuZXh0LlxyXG4gIC51c2UoaW5pdFJlYWN0STE4bmV4dClcclxuICAvLyBpbml0IGkxOG5leHRcclxuICAvLyBmb3IgYWxsIG9wdGlvbnMgcmVhZDogaHR0cHM6Ly93d3cuaTE4bmV4dC5jb20vb3ZlcnZpZXcvY29uZmlndXJhdGlvbi1vcHRpb25zXHJcbiAgLmluaXQoe1xyXG4gICAgcmVzb3VyY2VzLFxyXG4gICAgbG5nOiAnZW4nLFxyXG4gICAga2V5U2VwYXJhdG9yOiBmYWxzZSwgLy8gd2UgZG8gbm90IHVzZSBrZXlzIGluIGZvcm0gbWVzc2FnZXMud2VsY29tZVxyXG5cclxuICAgIGludGVycG9sYXRpb246IHtcclxuICAgICAgZXNjYXBlVmFsdWU6IGZhbHNlIC8vIHJlYWN0IGFscmVhZHkgc2FmZXMgZnJvbSB4c3NcclxuICAgIH1cclxuICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGkxOG47XHJcbiIsImltcG9ydCBlbiBmcm9tICcuL2VuJztcclxuaW1wb3J0IHZuIGZyb20gJy4vdm4nO1xyXG5cclxuY29uc3QgcmVzb3VyY2VzID0geyBlbjogZW4sIHZuOiB2biB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVzb3VyY2VzO1xyXG4iLCJjb25zdCBlbiA9IHtcclxuICB0cmFuc2xhdGlvbjoge1xyXG4gICAgVXNlck5hbWU6ICdVc2VyIE5hbWUnLFxyXG4gICAgVXNlclBhc3M6ICdVc2VyIFBhc3MnLFxyXG4gICAgTG9naW46ICdMb2dJbicsXHJcbiAgICBEYXRlT2ZXZWVrOiAnU3VuZGF5LE1vbmRheSxUdWVzZGF5LFdlZG5lc2RheSxUaHVyc2RheSxGcmlkYXksU2F0dXJkYXknXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZW47XHJcbiIsImNvbnN0IHZuID0ge1xyXG4gIHRyYW5zbGF0aW9uOiB7XHJcbiAgICBVc2VyTmFtZTogJ1TDoGkgS2hv4bqjbicsXHJcbiAgICBVc2VyUGFzczogJ03huq10IEto4bqpdScsXHJcbiAgICBMb2dpbjogJ8SQxINuZyBOaOG6rXAnLFxyXG4gICAgRGF0ZU9mV2VlazogJ0No4bunIE5o4bqtdCxUaOG7qSAyLFRo4bupIDMsVGjhu6kgNCxUaOG7qSA1LFRo4bupIDYsVGjhu6kgNydcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB2bjtcclxuIiwiaW1wb3J0IGF4aW9zLCAqIGFzIG90aGVycyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBxcyBmcm9tICdxcyc7XHJcbi8vIGNvbnN0IEZvcm1EYXRhID0gcmVxdWlyZSgnZm9ybS1kYXRhJyk7XHJcblxyXG5jbGFzcyBBeGlvc1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgICBiYXNlVVJMOiAnaHR0cHM6Ly82MGU4Mzk5NTY3M2UzNTAwMTdjMjE4MjgubW9ja2FwaS5pby9hcGknLFxyXG4gICAgICAvLyB0aW1lb3V0OiA1MDAwLFxyXG4gICAgICBoZWFkZXJzOiB7ICdYLUN1c3RvbS1IZWFkZXInOiAnZm9vYmFyJyB9XHJcbiAgICB9KTtcclxuICAgIGluc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UodGhpcy5oYW5kbGVTdWNjZXMsIHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VjY2VzKHJlc3BvbnNlKSB7XHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFcnJvcihlcnJvcikge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICB9XHJcblxyXG4gIGdldCh1cmwpIHtcclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmdldCh1cmwpO1xyXG4gIH1cclxuXHJcbiAgcG9zdCh1cmwsIGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKCcyJyk7XHJcbiAgICBkYXRhID0gcXMuc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEsIHtcclxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdXQodXJsLCBkYXRhKSB7XHJcbiAgICBkYXRhID0gcXMuc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UucHV0KHVybCwgZGF0YSwge1xyXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZSh1cmwpIHtcclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmRlbGV0ZSh1cmwpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEF4aW9zU2VydmljZSgpO1xyXG4iLCJpbXBvcnQgYXhpb3NTZXJ2aWNlIGZyb20gJy4uL1NlcnZpY2UvYXhpb3NTZXJ2aWNlL2luZGV4JztcclxuXHJcbmNvbnN0IGVuZHBvaW50ID0gJy9UYXNrcyc7XHJcblxyXG5leHBvcnQgY29uc3QgZmVjdFRhc2sgPSAoKSA9PiBheGlvc1NlcnZpY2UuZ2V0KGAke2VuZHBvaW50fWApO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RUYXNrID0gKGRhdGEpID0+IGF4aW9zU2VydmljZS5wb3N0KGAke2VuZHBvaW50fWAsIGRhdGEpO1xyXG5leHBvcnQgY29uc3QgcHV0VGFzayA9IChpZCwgZGF0YSkgPT5cclxuICBheGlvc1NlcnZpY2UucHV0KGAke2VuZHBvaW50fS8ke2lkfWAsIGRhdGEpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVRhc2sgPSAoaWQpID0+XHJcbiAgYXhpb3NTZXJ2aWNlLmRlbGV0ZShgJHtlbmRwb2ludH0vJHtpZC50b1N0cmluZygpfWApO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgSTE4bmV4dFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XHJcbmltcG9ydCBpMThuIGZyb20gJy4vU2VydmljZS9UcmFuc2xhdGUvaTE4bmV4dCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgQ29uZmlndXJlU3RvcmUgZnJvbSAnLi9SZWR1eC9Db25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCBSb290IGZyb20gJy4vUGFnZS9Sb290JztcclxuXHJcbmNvbnN0IHN0b3JlID0gQ29uZmlndXJlU3RvcmUoKTtcclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgPEkxOG5leHRQcm92aWRlciBpMThuPXtpMThufT5cclxuICAgICAgPFJvdXRlcj5cclxuICAgICAgICA8Um9vdCAvPlxyXG4gICAgICA8L1JvdXRlcj5cclxuICAgIDwvSTE4bmV4dFByb3ZpZGVyPlxyXG4gIDwvUHJvdmlkZXI+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcclxuKTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwidmFyIG1hcCA9IHtcblx0XCIuL2FmXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYWYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2FyLWR6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXItZHouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1rd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWt3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXItbHlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1seS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLW1hXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItbWEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1zYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci10bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9hei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2JlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYm1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9ibS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm4tYmRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLWJkLmpzXCIsXG5cdFwiLi9ibi1iZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4tYmQuanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tYXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tZ2JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWluLmpzXCIsXG5cdFwiLi9lbi1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taW4uanNcIixcblx0XCIuL2VuLW56XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tbnouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1zZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tc2cuanNcIixcblx0XCIuL2VuLXNnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1zZy5qc1wiLFxuXHRcIi4vZW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXMtZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLW14XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1teC5qc1wiLFxuXHRcIi4vZXMtbXguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLW14LmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maWwuanNcIixcblx0XCIuL2ZpbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmlsLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1kZXZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tZGV2YS5qc1wiLFxuXHRcIi4vZ29tLWRldmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1kZXZhLmpzXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2hlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9oci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2h1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9oeS1hbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaWRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2l0LWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2phXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vamEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2p2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4va2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2trXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2ttLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va28uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbGIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMtbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbmJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vbm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9vYy1sbmNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL29jLWxuYy5qc1wiLFxuXHRcIi4vb2MtbG5jLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9vYy1sbmMuanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGsuanNcIixcblx0XCIuL3RrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ay5qc1wiLFxuXHRcIi4vdGwtcGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90bGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3R6bFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3R6bS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdWctY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi95by5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1oa1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtbW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLW1vLmpzXCIsXG5cdFwiLi96aC1tby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtbW8uanNcIixcblx0XCIuL3poLXR3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiLFxuXHRcIi4vemgtdHcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiXSwic291cmNlUm9vdCI6IiJ9