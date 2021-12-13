exports.id = 1431;
exports.ids = [1431];
exports.modules = {

/***/ 1431:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Details; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/components/Common/PageTitle.tsx
var PageTitle = __webpack_require__(6908);
// EXTERNAL MODULE: ./src/components/Forms/FormFieldset.tsx
var FormFieldset = __webpack_require__(8608);
;// CONCATENATED MODULE: ./src/components/History/Details/OrderInfo.tsx




const S = {
  OrderInfo: external_styled_components_default().div.withConfig({
    displayName: "OrderInfo",
    componentId: "mx6jrn-0"
  })(["table{border-collapse:collapse;font-size:12px;tbody{tr{border:1px solid red;th{background-color:#f9f9f9;font-weight:400;color:#000;}td{color:#353535;}th,td{border:1px solid #f0f0f0;padding:20px 10px;text-align:left;}}}", "}"], ({
    theme
  }) => theme.mobile`
      font-size: 11px;
        tbody{
          tr{
            th,td{
              padding: 10px 10px;
            }
          }
        }
    `)
};
function OrderInfo({
  items
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(S.OrderInfo, {
    children: items && items.map(d => /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("colgroup", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("col", {
          width: "115px"
        }), /*#__PURE__*/jsx_runtime_.jsx("col", {
          width: "auto"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tbody", {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\uC8FC\uBB38\uBC88\uD638"
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: d.orderNum
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\uC8FC\uBB38\uC77C\uC790"
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: d.createdAt
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\uC8FC\uBB38\uC790"
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: d.userName
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\uC8FC\uBB38\uCC98\uB9AC\uC0C1\uD0DC"
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: "\uACB0\uC81C\uC644\uB8CC"
          })]
        })]
      })]
    }, d._id))
  });
}
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(3803);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./src/components/History/Details/PaymentInfo.tsx







const PaymentInfo_S = {
  PaymentInfo: external_styled_components_default().div.withConfig({
    displayName: "PaymentInfo",
    componentId: "sc-1nvcy4i-0"
  })(["table{border-collapse:collapse;font-size:12px;tbody{tr{th{font-weight:400;color:#000;}td{color:#353535;}th,td{background-color:#f9f9f9;padding:20px 10px;text-align:left;}}.order-price{th,td{font-weight:500;border:solid #f0f0f0;border-width:1px 1px 0 1px;}}.total-used-point{th,td{font-weight:500;border:1px solid #f0f0f0;}}.point{th,td{font-weight:normal;border:solid #f0f0f0;border-width:1px 1px 0 1px;}td{background-color:#fff;}}.payment-price{border:solid #000;border-width:1px 1px 0 1px;th{font-weight:500;border:solid #f0f0f0;border-width:0 1px 1px 0;}td{border:solid #f0f0f0;border-width:0 0 1px 0;font-size:16px;font-weight:500;color:#8c4153;}}.payment-method{border:solid #000;border-width:0 1px 1px 1px;th{border:solid #f0f0f0;border-width:0 1px 0 0;}td{background-color:#fff;}}}", "}"], ({
    theme
  }) => theme.mobile`
      font-size: 11px;
        tbody{
          tr{
            th,td{
              padding: 10px 10px;
              font-weight: 400;
            }
          }
        }
    `)
};
function PaymentInfo({
  items
}) {
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx(PaymentInfo_S.PaymentInfo, {
    children: items && items.map(d => /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("colgroup", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("col", {
          width: "115px"
        }), /*#__PURE__*/jsx_runtime_.jsx("col", {
          width: "auto"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tbody", {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          className: "order-price",
          children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\uCD1D \uC8FC\uBB38\uACB0\uC81C\uAE08\uC561"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
            children: [(0,utils/* PriceComma */.OB)(d.amountInfo.consumerAmount + d.amountInfo.deliveryAmount), "\uC6D0"]
          })]
        }), router.pathname !== "/users/history/guest-detail/[idx]" && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            className: "total-used-point",
            children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "\uCD1D \uBD80\uAC00\uACB0\uC81C\uAE08\uC561"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
              children: [(0,utils/* PriceComma */.OB)(d.pointInfo.totalUsed || 0), "\uC6D0"]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            className: "point",
            children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
              children: "\uC801\uB9BD\uAE08"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
              children: [(0,utils/* PriceComma */.OB)(d.pointInfo.estimatedPoint || 0), "\uC6D0"]
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          className: "payment-price",
          children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\uCD1D \uACB0\uC81C\uAE08\uC561"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
            children: [(0,utils/* PriceComma */.OB)(d.amountInfo.paymentAmount), "\uC6D0"]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          className: "payment-method",
          children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\uACB0\uC81C\uC218\uB2E8"
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: "\uD398\uC774\uD314"
          })]
        })]
      })]
    }, d._id))
  });
}
// EXTERNAL MODULE: ./src/components/style/Button.tsx
var Button = __webpack_require__(8761);
// EXTERNAL MODULE: ./src/components/Icon/Icon.tsx + 1 modules
var Icon = __webpack_require__(3595);
// EXTERNAL MODULE: ./src/constants/path.ts
var path = __webpack_require__(643);
;// CONCATENATED MODULE: ./src/components/History/Details/DeliveryInfo.tsx








const DeliveryInfo_S = {
  DeliveryInfo: external_styled_components_default().div.withConfig({
    displayName: "DeliveryInfo",
    componentId: "mj4ujz-0"
  })(["table{border-collapse:collapse;font-size:12px;tbody{tr{th{background-color:#f9f9f9;font-weight:normal;color:#000;}td{color:#353535;}th,td{border:1px solid #f0f0f0;padding:20px 10px;text-align:left;}}}", "}"], ({
    theme
  }) => theme.mobile`
      font-size: 11px;
        tbody{
          tr{
            th,td{
              padding: 10px 10px;
            }
          }
        }
    `),
  ButtonBox: external_styled_components_default().div.withConfig({
    displayName: "DeliveryInfo__ButtonBox",
    componentId: "mj4ujz-1"
  })(["margin-top:15px;display:flex;justify-content:space-between;align-items:center;.back{i{font-size:0;padding-right:5px;svg{color:#fff;}}}button{font-size:12px;padding:0;display:flex;align-items:center;justify-content:center;}.print{", "}"], ({
    theme
  }) => theme.mobile`
        display: none;
      `)
};
function DeliveryInfo({
  items,
  handlePrint
}) {
  console.log('items: ', items);
  const router = (0,router_.useRouter)();

  const handleRoute = () => {
    if (router.pathname !== "/users/history/guest-detail/[idx]") {
      router.push(path/* default.HISTORY.path */.Z.HISTORY.path);
    } else {
      router.push(path/* default.MAIN.path */.Z.MAIN.path);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(DeliveryInfo_S.DeliveryInfo, {
    children: [items && items.map(d => /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("colgroup", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("col", {
          width: "115px"
        }), /*#__PURE__*/jsx_runtime_.jsx("col", {
          width: "auto"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tbody", {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\uBC1B\uC73C\uC2DC\uB294\uBD84"
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: d.userName
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\uC6B0\uD3B8\uBC88\uD638"
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: d.addr.zoneCode
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\uC8FC\uC18C"
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: d.addr.addr1
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\uC0C1\uC138\uC8FC\uC18C"
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: d.addr.addr2
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\uD734\uB300\uC804\uD654"
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: d.phone
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
            children: "\uBC30\uC1A1\uBA54\uC138\uC9C0"
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: d.deliveryMessage || '없음'
          })]
        })]
      })]
    }, d._id)), /*#__PURE__*/(0,jsx_runtime_.jsxs)(DeliveryInfo_S.ButtonBox, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        className: "print",
        height: "30px",
        white: true,
        width: "100px",
        onClick: handlePrint,
        children: "\uC8FC\uBB38\uB0B4\uC5ED \uCD9C\uB825"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Button/* default */.Z, {
        className: "back",
        height: "30px",
        black: true,
        width: "120px",
        onClick: handleRoute,
        children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
          children: /*#__PURE__*/jsx_runtime_.jsx(Icon/* default */.Z, {
            name: "back"
          })
        }), router.pathname !== "/users/history/guest-detail/[idx]" && /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\uC8FC\uBB38\uBAA9\uB85D \uBCF4\uAE30"
        }), router.pathname === "/users/history/guest-detail/[idx]" && /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\uBA54\uC778\uC73C\uB85C"
        })]
      })]
    })]
  });
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/components/History/Details/ProductInfo.tsx







const ProductInfo_S = {
  ProductInfo: external_styled_components_default().div.withConfig({
    displayName: "ProductInfo",
    componentId: "gby5bj-0"
  })([".item{&__detail{display:flex;padding:10px 10px 0 10px;&__image{font-size:0;a{display:inline-block;height:100%;}}&__info{flex:1;padding-left:10px;display:flex;flex-direction:column;.category{font-size:12px;}.name{font-size:13px;padding-bottom:8px;}.point{font-size:12px;padding-bottom:2px;::before{display:inline-block;width:10px;height:10px;content:'\uC801';background-color:#B88CC5;color:#fff;padding:1px;margin-right:2px;font-size:11px;border-radius:1px;height:9px;}}.price-info{font-size:12px;color:#333;b{padding-right:10px;}b::after{content:'\uC6D0';font-weight:normal;}.amount{display:block;color:#000;font-weight:600;font-size:13px;}}}}&__option{padding:0 10px;border-top:1px solid #ececec;height:45px;display:flex;align-items:center;font-size:12px;}&__status{padding:0 10px;border-top:1px solid #ececec;height:45px;background-color:#f9f9f9;display:flex;align-items:center;font-size:14px;color:#912b45;}}"])
};
function ProductInfo({
  items
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(ProductInfo_S.ProductInfo, {
    children: items.map(d => d.Products.map(d => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "item",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "item__detail",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "item__detail__image",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: '/product/' + d.product_type + '/' + d.seq,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                className: "img",
                src: d.imageUrl[0].url,
                alt: "Picture of the author",
                width: 60,
                height: 80
              })
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "item__detail__info",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "category",
            children: d.category
          }), /*#__PURE__*/jsx_runtime_.jsx("strong", {
            className: "name",
            children: d.name
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "point",
            children: (0,utils/* PriceComma */.OB)(d.point)
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: "price-info",
            children: [/*#__PURE__*/jsx_runtime_.jsx("b", {
              children: (0,utils/* PriceComma */.OB)(d.consumer_price)
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              children: [d.qty, "\uAC1C"]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: "amount",
              children: ["TOTAL: ", (0,utils/* PriceComma */.OB)(d.totalConsumerPrice), "\uC6D0"]
            })]
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "item__option",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: ["[ \uCEEC\uB7EC : ", d.selectColor[0].colorName, " ]"]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "item__status",
        children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
          children: "\uACB0\uC81C\uC644\uB8CC"
        })
      })]
    }, d._id)))
  });
}
// EXTERNAL MODULE: external "react-to-print"
var external_react_to_print_ = __webpack_require__(9341);
;// CONCATENATED MODULE: ./src/components/History/Details/index.tsx











const Details_S = {
  Details: external_styled_components_default().div.withConfig({
    displayName: "Details",
    componentId: "sc-39fopf-0"
  })(["table{width:100%;}"])
};
function Details({
  items
}) {
  const PrintRef = (0,external_react_.useRef)();
  const handlePrint = (0,external_react_to_print_.useReactToPrint)({
    content: () => PrintRef.current
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Details_S.Details, {
    ref: PrintRef,
    children: [/*#__PURE__*/jsx_runtime_.jsx(PageTitle/* default */.Z, {
      TitleText: "\uC8FC\uBB38\uC0C1\uC138 \uC870\uD68C"
    }), /*#__PURE__*/jsx_runtime_.jsx(FormFieldset/* default */.Z, {
      title: "\uC8FC\uBB38\uC815\uBCF4",
      children: /*#__PURE__*/jsx_runtime_.jsx(OrderInfo, {
        items: items
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(FormFieldset/* default */.Z, {
      title: "\uACB0\uC81C\uC815\uBCF4",
      children: /*#__PURE__*/jsx_runtime_.jsx(PaymentInfo, {
        items: items
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(FormFieldset/* default */.Z, {
      title: "\uC8FC\uBB38\uC0C1\uD488 \uC815\uBCF4",
      children: /*#__PURE__*/jsx_runtime_.jsx(ProductInfo, {
        items: items
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(FormFieldset/* default */.Z, {
      title: "\uBC30\uC1A1\uC9C0\uC815\uBCF4",
      children: /*#__PURE__*/jsx_runtime_.jsx(DeliveryInfo, {
        items: items,
        handlePrint: handlePrint
      })
    })]
  });
}

/***/ })

};
;