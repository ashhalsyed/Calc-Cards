(this["webpackJsonpcalc-cards"]=this["webpackJsonpcalc-cards"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('{"cards":[{"id":1,"title":"SAS Cosine Law","description":"Calculate the missing side when given two sides and an angle","image":"triangle","inputs":["Side a","Side b","Angle C"],"bounds":[[0,"none"],[0,"none"],[0,180]],"steps":["Substitude side \'a\', side \'b\', and angle \'C\' into given general equation for SAS","Simplify"],"formula":"c = (a^2 + b^2 -2ab cosC)^(1/2)","resources":{"SAS Worked Example":"https://www.youtube.com/watch?v=ZElOxG7_m3c"}},{"id":2,"title":"SSS Cosine Law","description":"Calculate the missing angle when given 3 sides","image":"triangle","inputs":["Side a","Side b","Side c"],"bounds":[[0,"none"],[0,"none"],[0,"none"]],"steps":["Substitude side \'a\', side \'b\', and side \'c\' into given general equation for SSS","Simplify"],"formula":"C = cos^(-1)((a^2+b^2-c^2)/(2ab))","resources":{"SSS Worked Example":"https://www.youtube.com/watch?v=Ei54NnQ0FKs"}},{"id":3,"title":"Slope With Two Points","description":"Calculate slope given 2 points","image":"line","inputs":["x1","y1","x2","y2"],"bounds":[["none","none"],["none","none"],["none","none"],["none","none"]],"steps":["Calculate y2-y1 and set that as the numerator","Calculate x2-x1 and set that as the denominator","Simplify"],"formula":"(y2-y1)/(x2-x1)","resources":{"Calculate Slope With Two Points Worked Example":"https://www.youtube.com/watch?v=WkspBxrzuZo","Written Explanation":"https://www.mathwarehouse.com/algebra/linear_equation/slope-of-a-line.php"}}]}')},17:function(e,t,a){},18:function(e,t,a){e.exports=a.p+"static/media/circle.c15b3700.svg"},19:function(e,t,a){e.exports=a.p+"static/media/cube.5418f96b.svg"},20:function(e,t,a){e.exports=a.p+"static/media/cylinder.f45aac98.svg"},21:function(e,t,a){e.exports=a.p+"static/media/line.c2807fbb.svg"},22:function(e,t,a){e.exports=a.p+"static/media/noImage.ef1273cf.svg"},23:function(e,t,a){e.exports=a.p+"static/media/rectangle.a6f1f3d8.svg"},24:function(e,t,a){e.exports=a.p+"static/media/sphere.df724f97.svg"},25:function(e,t,a){e.exports=a.p+"static/media/square.cee5bade.svg"},26:function(e,t,a){e.exports=a.p+"static/media/triangle.6366578f.svg"},32:function(e){e.exports=JSON.parse('{"images":{"":"https://raw.githubusercontent.com/ashhalsyed/Calc-Cards-Beta/master/src/Card%20Data/Card%20Images/noImage.svg?sanitize=true","triangle":"https://raw.githubusercontent.com/ashhalsyed/Calc-Cards-Beta/master/src/Card%20Data/Card%20Images/triangle.svg?sanitize=true","line":"https://raw.githubusercontent.com/ashhalsyed/Calc-Cards-Beta/master/src/Card%20Data/Card%20Images/line.svg?sanitize=true","rectangle":"https://raw.githubusercontent.com/ashhalsyed/Calc-Cards-Beta/master/src/Card%20Data/Card%20Images/rectangle.svg?sanitize=true","square":"https://raw.githubusercontent.com/ashhalsyed/Calc-Cards-Beta/master/src/Card%20Data/Card%20Images/square.svg?sanitize=true","circle":"https://raw.githubusercontent.com/ashhalsyed/Calc-Cards-Beta/master/src/Card%20Data/Card%20Images/circle.svg?sanitize=true","cube":"https://raw.githubusercontent.com/ashhalsyed/Calc-Cards-Beta/master/src/Card%20Data/Card%20Images/cube.svg?sanitize=true","cylinder":"https://raw.githubusercontent.com/ashhalsyed/Calc-Cards-Beta/master/src/Card%20Data/Card%20Images/cylinder.svg?sanitize=true","sphere":"https://raw.githubusercontent.com/ashhalsyed/Calc-Cards-Beta/master/src/Card%20Data/Card%20Images/sphere.svg?sanitize=true"}}')},44:function(e,t,a){e.exports=a.p+"static/media/Logo Black.741b0671.png"},45:function(e,t,a){e.exports=a.p+"static/media/calcCardsLogo.d088e79b.svg"},48:function(e,t,a){e.exports=a(67)},67:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),n=a(33),i=a.n(n),l=a(3),c=a(4),o=a(6),u=a(5),d=a(2),p=(a(17),a(27)),m=a(18),h=a.n(m),v=a(19),g=a.n(v),C=a(20),b=a.n(C),f=a(21),S=a.n(f),E=a(22),w=a.n(E),y=a(23),N=a.n(y),k=a(24),O=a.n(k),B=a(25),I=a.n(B),j=a(26),x=a.n(j),D=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={cardOpen:!1,canSave:!1,canRemove:!1},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=!0;return"/Saved_Cards"===this.props.history.location.pathname&&(t=!1),r.a.createElement("div",{className:"allCards"},this.props.renderedCards.map((function(a,s){var n,i,l;return n=a.description.length>=100?a.description.substring(0,100)+" . . .":a.description,"circle"===a.image&&(i=h.a),"cube"===a.image&&(i=g.a),"cylinder"===a.image&&(i=b.a),"line"===a.image&&(i=S.a),""===a.image&&(i=w.a),"rectangle"===a.image&&(i=N.a),"sphere"===a.image&&(i=O.a),"square"===a.image&&(i=I.a),"triangle"===a.image&&(i=x.a),l=t?r.a.createElement("div",{className:"Card_Topbar"},r.a.createElement("div",{className:"invisibleIcon"}),r.a.createElement("h1",{className:"Card_title"},a.title),r.a.createElement("button",{className:"Card_interact_item",onClick:e.props.saveCard,id:a.title},r.a.createElement("i",{className:"fas fa-save","aria-hidden":"True",id:a.title}))):r.a.createElement("div",{className:"Card_Topbar"},r.a.createElement("div",{className:"invisibleIcon"}),r.a.createElement("h1",{className:"Card_title"},a.title),r.a.createElement("button",{className:"Card_interact_item",onClick:e.props.removeCard,id:a.title},r.a.createElement("i",{className:"fas fa-trash","aria-hidden":"True",id:a.title}))),r.a.createElement("div",{key:a.id,className:"Card"},l,r.a.createElement(p.b,{className:"CardimageHolder",to:{pathname:"/"+a.title}},r.a.createElement("img",{id:a.title,className:"Card_image",src:i,alt:"Card Preview"})),r.a.createElement("div",{className:"Card_text"},r.a.createElement("p",{className:"Card_description"},n)))})))}}]),a}(s.Component),T=a(44),_=a.n(T),R=a(45),L=a.n(R),H=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={logoRotated:!1},e.rotateLogo=e.rotateLogo.bind(Object(d.a)(e)),e}return Object(c.a)(a,[{key:"rotateLogo",value:function(){var e=this;this.state.logoRotated||(this.setState({logoRotated:!0}),setTimeout((function(){e.setState({logoRotated:!1})}),1500))}},{key:"render",value:function(){var e,t="sideDrawer";return this.props.display&&(t="sideDrawer open"),e=this.state.logoRotated?"personalLogo rotated":"personalLogo",r.a.createElement("div",{className:t},r.a.createElement("div",{className:"sideBarContent"},r.a.createElement("div",{className:"sideBarHeader"},r.a.createElement(p.b,{to:{pathname:"/"},onClick:this.props.toggle},r.a.createElement("img",{className:"sideBarLogo",alt:"side bar logo",src:L.a}))),r.a.createElement("div",{className:"sideBarLinkHolder"},r.a.createElement(p.b,{className:"sideBarLink",to:{pathname:"/Saved_Cards"},onClick:this.props.toggle},r.a.createElement("i",{class:"fas fa-square"}),r.a.createElement("h1",{className:"sideBarLinkText"},"Saved Cards")),r.a.createElement(p.b,{className:"sideBarLink",to:{pathname:"/Other_Resources"},onClick:this.props.toggle},r.a.createElement("i",{class:"fas fa-external-link-square-alt"}),r.a.createElement("h1",{className:"sideBarLinkText"},"Other Resources")),r.a.createElement(p.b,{className:"sideBarLink",to:{pathname:"/Request_a_Card"},onClick:this.props.toggle},r.a.createElement("i",{class:"fas fa-plus"}),r.a.createElement("h1",{className:"sideBarLinkText"},"Request a Card"))),r.a.createElement("img",{className:e,src:_.a,alt:"personal logo",onClick:this.rotateLogo})))}}]),a}(s.Component),P=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={sideBarOpen:!1},e.toggleSideBar=e.toggleSideBar.bind(Object(d.a)(e)),e.closeSideBar=e.closeSideBar.bind(Object(d.a)(e)),e}return Object(c.a)(a,[{key:"toggleSideBar",value:function(){this.setState({sideBarOpen:!this.state.sideBarOpen})}},{key:"closeSideBar",value:function(){this.setState({sideBarOpen:!1})}},{key:"render",value:function(){var e;return this.state.sideBarOpen&&(e=r.a.createElement("div",{className:"backDrop",onClick:this.closeSideBar,onmousedown:this.closeSideBar})),r.a.createElement("div",{className:"sideBarHolder"},r.a.createElement("div",{className:"menuBar"},r.a.createElement("i",{class:"fas fa-bars",onClick:this.toggleSideBar})),r.a.createElement(H,{display:this.state.sideBarOpen,toggle:this.toggleSideBar}),e)}}]),a}(s.Component),q=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={boxSize:"3em",canType:"hidden",closeTransition:"closeIconClose 0.5s forwards ease-out",canClose:"auto",contentDisplayed:"none",userSearch:"",backgroundColor:"transparent",color:"white"},e.closeSearch=e.closeSearch.bind(Object(d.a)(e)),e.SearchContent=e.SearchContent.bind(Object(d.a)(e)),e.SearchBarClicked=e.SearchBarClicked.bind(Object(d.a)(e)),e.textInput=r.a.createRef(),e}return Object(c.a)(a,[{key:"SearchBarClicked",value:function(){var e=this;this.setState((function(e){return{boxSize:"75vw",closeTransition:"closeIconOpen 0.5s forwards ease-out",canClose:"pointer",backgroundColor:"white",color:"#223040"}})),setTimeout((function(){e.setState({contentDisplayed:"inherit",canType:"visible"})}),100),this.textInput.current.focus()}},{key:"closeSearch",value:function(){var e=this;this.setState((function(e){return{boxSize:"3em",canType:"hidden",closeTransition:"closeIconClose 0.5s forwards ease-out",canClose:"auto",contentDisplayed:"none",userSearch:""}})),setTimeout((function(){e.setState({backgroundColor:"transparent",color:"white"})}),300),this.props.dataToFilter("")}},{key:"SearchContent",value:function(e){this.props.dataToFilter(e.target.value),this.setState({userSearch:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"SearchBar",style:{width:this.state.boxSize,backgroundColor:this.state.backgroundColor}},r.a.createElement("i",{onClick:this.closeSearch,className:"fas fa-times",style:{display:this.state.contentDisplayed,animation:this.state.closeTransition,cursor:this.state.canClose}}),r.a.createElement("input",{type:"text",placeholder:"",value:this.state.userSearch,className:"SearchText",style:{display:this.state.contentDisplayed,visibility:this.state.canType},ref:this.textInput,onChange:this.SearchContent}),r.a.createElement("i",{className:"fas fa-search",onClick:this.SearchBarClicked,style:{color:this.state.color}}))}}]),a}(s.Component),A=a(11),F=a(32),z=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={currentCardData:A.cards,userCardData:{}},e.updateCards=e.updateCards.bind(Object(d.a)(e)),e.saveCard=e.saveCard.bind(Object(d.a)(e)),e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"updateCards",value:function(e){var t=e.toLowerCase(),a=A.cards;""!==e&&(a=a.filter((function(e){return e.title.toLowerCase().replace(/_/g," ").includes(t)}))),this.setState({currentCardData:a})}},{key:"saveCard",value:function(e){var t="Card: "+e.target.id;if(null===localStorage.getItem(t)){for(var a,s=0;s<this.state.currentCardData.length;s++)this.state.currentCardData[s].title===t.replace("Card: ","")&&(a=this.state.currentCardData[s]);localStorage.setItem(t,JSON.stringify(a)),alert("Saved")}else alert("This card is already saved")}},{key:"render",value:function(){return r.a.createElement("div",{className:"HomeScreen"},r.a.createElement(P,null),r.a.createElement(q,{dataToFilter:this.updateCards}),r.a.createElement(D,{renderedCards:this.state.currentCardData,history:this.props.history,allImages:F.images,saveCard:this.saveCard}))}}]),a}(s.Component),M=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={userInput:[],output:"",calculateButtonText:"Calculate",validInput:!1,showClearButton:!1,showUndoButton:!1,savedInput:[]},s.calculateInputs=s.calculateInputs.bind(Object(d.a)(s)),s.updateInputData=s.updateInputData.bind(Object(d.a)(s)),s.performCalculation=s.performCalculation.bind(Object(d.a)(s)),s.validateInputBounds=s.validateInputBounds.bind(Object(d.a)(s)),s.clearInput=s.clearInput.bind(Object(d.a)(s)),s.undoClear=s.undoClear.bind(Object(d.a)(s)),s.inputBox=r.a.createRef(),s}return Object(c.a)(a,[{key:"calculateInputs",value:function(){var e,t=[];for(e=0;e<this.props.card.inputs.length;e++)t.push("");return t}},{key:"updateInputData",value:function(e){this.state.showUndoButton&&this.setState({showUndoButton:!1});var t=this.state.userInput;0===this.state.userInput.length&&(t=this.calculateInputs());var a=this.props.card.inputs.indexOf(e.target.name);t[a]=e.target.value,!(t[a]>=Math.pow(10,-20)&&t[a]<=Math.pow(10,20))||this.setState({userInput:t}),t.every((function(e){return""===e}))?this.setState({showClearButton:!1}):this.setState({showClearButton:!0})}},{key:"validateInputBounds",value:function(e){var t,a=[];for(t=0;t<e.length;t++)"none"===this.props.card.bounds[t][0]|e[t]>=this.props.card.bounds[t][0]?a.push(1):a.push(0),"none"===this.props.card.bounds[t][1]|e[t]<=this.props.card.bounds[t][1]?a.push(1):a.push(0);return!a.includes(0)}},{key:"performCalculation",value:function(){var e,t=!1;if(0===this.state.userInput.length&&(t=!0),this.state.userInput.includes("")|t)e="invalid";else if("SAS Cosine Law"===this.props.card.title){var a=Number(this.state.userInput[0]),s=Number(this.state.userInput[1]),r=Number(this.state.userInput[2]);if(this.setState({validInput:!1}),e=[a,s,r],this.validateInputBounds(e)){r=Number(this.state.userInput[2])*Math.PI/180;var n=Math.pow(Math.pow(a,2)+Math.pow(s,2)-2*a*s*Math.cos(r),.5);this.setState({output:n,calculateButtonText:"Recalculate",validInput:!0}),this.props.output(n),this.props.outputDisplayed(!0)}else e="invalid"}else if("SSS Cosine Law"===this.props.card.title){var i=Number(this.state.userInput[0]),l=Number(this.state.userInput[1]),c=Number(this.state.userInput[2]);if(this.setState({validInput:!1}),e=[i,l,c],this.validateInputBounds(e)){var o=Math.acos((Math.pow(i,2)+Math.pow(l,2)-Math.pow(c,2))/(2*i*l));o=function(e){return 180*e/Math.PI}(o),this.setState({output:o,calculateButtonText:"Recalculate",validInput:!0}),this.props.output(o),this.props.outputDisplayed(!0)}else e="invalid"}else if("Slope With Two Points"===this.props.card.title){var u=Number(this.state.userInput[0]),d=Number(this.state.userInput[1]),p=Number(this.state.userInput[2]),m=Number(this.state.userInput[3]);if(this.setState({validInput:!1}),e=[u,d,p,m],this.validateInputBounds(e)){var h=(m-d)/(p-u);this.props.output(h),this.props.outputDisplayed(!0),this.setState({output:h,calculateButtonText:"Recalculate",validInput:!0})}else e="invalid"}else this.props.output("Preview"),this.props.outputDisplayed(!0),this.setState({output:"Preview",calculateButtonText:"Recalculate",validInput:!0});"invalid"===e&&alert("Check your numbers and try again")}},{key:"clearInput",value:function(){var e=this.state.userInput;this.setState({savedInput:e});var t=this.calculateInputs();this.setState({userInput:t,showClearButton:!1,calculateButtonText:"Calculate",showUndoButton:!0}),this.props.output(0),this.props.outputDisplayed(!1)}},{key:"undoClear",value:function(){this.setState({userInput:this.state.savedInput,showUndoButton:!1,showClearButton:!0})}},{key:"render",value:function(){var e=this,t=r.a.createElement("div",null);this.state.showClearButton&&(t=r.a.createElement("button",{className:"clearButton",onClick:this.clearInput},r.a.createElement("i",{class:"fas fa-backspace"})));var a=r.a.createElement("div",null);return this.state.showUndoButton&&(a=r.a.createElement("button",{className:"undoButton",onClick:this.undoClear},r.a.createElement("i",{class:"fas fa-undo"}))),r.a.createElement("div",{className:"userInputwrapper"},r.a.createElement("div",{className:"allUserInput"},this.props.card.inputs.map((function(t){return r.a.createElement("div",{key:t,className:"UserInput"},r.a.createElement("label",{className:"inputLabel"},t),r.a.createElement("input",{type:"number",name:t,className:"inputBox",value:e.state.userInput[e.props.card.inputs.indexOf(t)],onChange:e.updateInputData}))}))),r.a.createElement("div",{className:"inputButtons"},r.a.createElement("button",{className:"calculateButton",onClick:this.performCalculation},this.state.calculateButtonText),t,a))}}]),a}(s.Component),U=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={stepsVisible:"hidden",stepsDisplayed:"none",stepsButtonText:"Show Steps",userInput:[],output:"",calculated:"visible",calculatedDisplayed:"flex"},s.toggleSteps=s.toggleSteps.bind(Object(d.a)(s)),s}return Object(c.a)(a,[{key:"toggleSteps",value:function(){"Show Steps"===this.state.stepsButtonText?this.setState({stepsVisible:"visible",stepsDisplayed:"inherit",stepsButtonText:"Hide Steps"}):this.setState({stepsVisible:"hidden",stepsDisplayed:"none",stepsButtonText:"Show Steps"})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"allOuput",style:{visibility:this.props.showStepsProp.calculated,display:this.props.showStepsProp.calculatedDisplayed,flexDirection:"column"}},r.a.createElement("h1",{className:"OutputText"},this.props.output),r.a.createElement("button",{className:"stepsButton",onClick:this.toggleSteps},this.state.stepsButtonText),r.a.createElement("div",{className:"allSteps",style:{visibility:this.state.stepsVisible,display:this.state.stepsDisplayed,flexDirection:"column"}},r.a.createElement("h1",{className:"stepsTitles formulaTitle"},"Formula"),r.a.createElement("p",{className:"stepsContent"},this.props.card.formula),r.a.createElement("h1",{className:"stepsTitles stepsTitle"},"Steps"),r.a.createElement("ol",{className:"stepsContent"},this.props.card.steps.map((function(t){return r.a.createElement("li",{key:t,className:"stepsContent numberedSteps"},(e.props.card.steps.indexOf(t)+1).toString()+". "+t)}))),r.a.createElement("h1",{className:"stepsTitles answerTitle"},"Answer"),r.a.createElement("p",{className:"stepsContent answer"},"The Answer is ",Math.round(100*this.props.output)/100)))}}]),a}(s.Component),J=a(68),W=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={currentCard:{id:0,title:"",description:"",image:"",inputs:[],bounds:[],steps:[],formula:""},output:"",showStepsObject:{calculated:"hidden",calculatedDisplayed:"none"},imagePath:"./Card Data/Card Images/SAS Image.svg",fullCardClasses:"fullCard"},s.updateOutput=s.updateOutput.bind(Object(d.a)(s)),s.showSteps=s.showSteps.bind(Object(d.a)(s)),s.backClicked=s.backClicked.bind(Object(d.a)(s)),s}return Object(c.a)(a,[{key:"updateOutput",value:function(e){this.setState({output:e})}},{key:"showSteps",value:function(e){e?this.setState({showStepsObject:{calculated:"visible",calculatedDisplayed:"inherit"},fullCardClasses:"fullCard calculated"}):this.setState({showStepsObject:{calculated:"hidden",calculatedDisplayed:"none"},fullCardClasses:"fullCard"})}},{key:"backClicked",value:function(){this.props.history.goBack()}},{key:"render",value:function(){for(var e,t,a=this.props.match.url.replace(/\//g,""),s=0;s<A.cards.length;s++)A.cards[s].title===a&&(e=A.cards[s]);return"circle"===e.image&&(t=h.a),"cube"===e.image&&(t=g.a),"cylinder"===e.image&&(t=b.a),"line"===e.image&&(t=S.a),""===e.image&&(t=w.a),"rectangle"===e.image&&(t=N.a),"sphere"===e.image&&(t=O.a),"square"===e.image&&(t=I.a),"triangle"===e.image&&(t=x.a),r.a.createElement("div",{className:"cardContent"},r.a.createElement("div",{className:"arrowHolder"},r.a.createElement("button",{className:"arrowButton",onClick:this.backClicked},r.a.createElement("i",{className:"fas fa-arrow-left"}))),r.a.createElement(J.a,{key:1,timeout:1e3,classNames:"myAnimation"},r.a.createElement("div",{className:this.state.fullCardClasses},r.a.createElement("h1",{className:"cardContentTitle"},e.title),r.a.createElement("img",{className:"cardContentImage",alt:"Card content preview",src:t}),r.a.createElement(M,{card:e,output:this.updateOutput,outputDisplayed:this.showSteps}),r.a.createElement(U,{card:e,output:this.state.output,showStepsProp:this.state.showStepsObject}))))}}]),a}(s.Component),V=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a),e=t.call(this);for(var s=[],r=0;r<localStorage.length;r++)"Card: "===localStorage.key(r).substring(0,6)&&s.push(JSON.parse(localStorage.getItem(localStorage.key(r))));return e.state={allSavedCards:s,savedImages:F.images},e.removeCard=e.removeCard.bind(Object(d.a)(e)),e.updateCards=e.updateCards.bind(Object(d.a)(e)),e}return Object(c.a)(a,[{key:"updateCards",value:function(e){for(var t=e.toLowerCase(),a=[],s=0;s<localStorage.length;s++)"Card: "===localStorage.key(s).substring(0,6)&&a.push(JSON.parse(localStorage.getItem(localStorage.key(s))));var r=a;""!==e&&(r=r.filter((function(e){return e.title.toLowerCase().replace(/_/g," ").includes(t)}))),this.setState({allSavedCards:r})}},{key:"removeCard",value:function(e){var t=e.target.id;if(window.confirm('Are you sure you would like to delete "'+t+'"')){localStorage.removeItem("Card: "+t);for(var a=[],s=0;s<localStorage.length;s++)"Card: "===localStorage.key(s).substring(0,6)&&a.push(JSON.parse(localStorage.getItem(localStorage.key(s))));this.setState({allSavedCards:a})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"savedCards"},r.a.createElement("div",{className:"arrowHolder"},r.a.createElement("button",{className:"arrowButton",onClick:this.props.history.goBack},r.a.createElement("i",{class:"fas fa-arrow-left"}))),r.a.createElement(q,{dataToFilter:this.updateCards}),r.a.createElement(D,{renderedCards:this.state.allSavedCards,history:this.props.history,allImages:this.state.savedImages,removeCard:this.removeCard}))}}]),a}(s.Component),G=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={knownLinks:["www.youtube.com"],currentResourceData:A.cards},e.resourceClicked=e.resourceClicked.bind(Object(d.a)(e)),e.updateResources=e.updateResources.bind(Object(d.a)(e)),e}return Object(c.a)(a,[{key:"updateResources",value:function(e){var t=e.toLowerCase(),a=A.cards;""!==e&&(a=a.filter((function(e){return e.title.toLowerCase().includes(t)}))),this.setState({currentResourceData:a})}},{key:"resourceClicked",value:function(e){console.log(e.target.id),"resourceTitle"!==e.target.className&&this.props.history.push("/Other_Resources/"+e.target.id)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"otherResources"},r.a.createElement("div",{className:"arrowHolder"},r.a.createElement("button",{className:"arrowButton",onClick:this.props.history.goBack},r.a.createElement("i",{class:"fas fa-arrow-left"}))),r.a.createElement(q,{dataToFilter:this.updateResources}),r.a.createElement("div",{className:"allResources"},this.state.currentResourceData.map((function(t){return r.a.createElement("div",{className:"resource",id:t.title},r.a.createElement("div",{className:"TitleSection",id:t.title},r.a.createElement("h1",{className:"resourceTitle"},t.title)),r.a.createElement("div",{className:"ContentSection",id:t.title,onClick:e.resourceClicked},Object.values(t.resources).map((function(a){var s,n=new window.URL(a).host;return e.state.knownLinks.includes(n)?"www.youtube.com"===n&&(s=r.a.createElement("i",{class:"fab fa-youtube",id:t.title,onClick:e.resourceClicked})):s=r.a.createElement("i",{class:"fas fa-link",id:t.title,onClick:e.resourceClicked}),r.a.createElement("div",{className:"displayedIcons",id:t.title,key:t.id,onClick:e.resourceClicked},s)}))))}))))}}]),a}(s.Component),Q=a(31),Z=a.n(Q),K=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;if(Object(l.a)(this,a),e=t.call(this),null===localStorage.getItem("previewCard"))e.state={inputBoxData:[],inputBoxes:[],stepsData:[],steps:[],previewTitle:"",previewDescription:"",imagePicked:"",previewFormula:""};else{var s=JSON.parse(localStorage.getItem("previewCard"));e.state={inputBoxData:[],inputBoxes:[],stepsData:[],steps:[],previewTitle:s.title,previewDescription:s.description,imagePicked:s.image,previewFormula:s.formula}}return e.updateTitle=e.updateTitle.bind(Object(d.a)(e)),e.updateDescription=e.updateDescription.bind(Object(d.a)(e)),e.updateImage=e.updateImage.bind(Object(d.a)(e)),e.addInputBox=e.addInputBox.bind(Object(d.a)(e)),e.updateInputBoxData=e.updateInputBoxData.bind(Object(d.a)(e)),e.removeInput=e.removeInput.bind(Object(d.a)(e)),e.updateFormula=e.updateFormula.bind(Object(d.a)(e)),e.addStep=e.addStep.bind(Object(d.a)(e)),e.updateStepsData=e.updateStepsData.bind(Object(d.a)(e)),e.removeSteps=e.removeSteps.bind(Object(d.a)(e)),e.previewCard=e.previewCard.bind(Object(d.a)(e)),e.submitCard=e.submitCard.bind(Object(d.a)(e)),e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;Z.a.database().ref().child("currentUniqueID").on("value",(function(t){e.setState({currentID:t.val()+1})})),Z.a.database().ref().child("submittedCards").on("value",(function(t){e.setState({allCardData:t.val()})}))}},{key:"updateTitle",value:function(e){var t=e.target.value;this.setState({previewTitle:t})}},{key:"updateDescription",value:function(e){var t=e.target.value;this.setState({previewDescription:t})}},{key:"updateImage",value:function(e){var t=e.target.value;this.setState({imagePicked:t})}},{key:"addInputBox",value:function(){var e=this.state.inputBoxes,t=this.state.inputBoxData;e.push(r.a.createElement("div",{className:"specificInputBoxHolder"},r.a.createElement("div",{className:"iconPlaceHolder"}),r.a.createElement("input",{className:"inputBox",name:e.length,type:"text",placeholder:"Input Name",value:this.state.inputBoxData[e.length],onChange:this.updateInputBoxData}),r.a.createElement("i",{id:e.length,className:"fas fa-times",onClick:this.removeInput}))),t.push(""),this.setState({inputBoxes:e,inputBoxData:t})}},{key:"updateInputBoxData",value:function(e){var t=this.state.inputBoxData;t[e.target.name]=e.target.value,this.setState({inputBoxData:t})}},{key:"addStep",value:function(){var e=this.state.steps,t=this.state.stepsData;e.push(r.a.createElement("div",{className:"specificStepHolder"},r.a.createElement("div",{className:"iconPlaceHolder"}),r.a.createElement("input",{className:"step",name:e.length,type:"text",placeholder:"Step",value:this.state.stepsData[e.length],onChange:this.updateStepsData}),r.a.createElement("i",{id:e.length,className:"fas fa-times",onClick:this.removeSteps}))),t.push(""),this.setState({steps:e,stepsData:t})}},{key:"updateStepsData",value:function(e){var t=this.state.stepsData;t[e.target.name]=e.target.value,this.setState({stepsData:t})}},{key:"removeInput",value:function(e){var t=e.target.id;delete this.state.inputBoxes[t];var a=this.state.inputBoxData;delete a[t],this.setState({inputBoxData:a})}},{key:"removeSteps",value:function(e){var t=e.target.id,a=this.state.steps;delete a[t];var s=this.state.stepsData;delete s[t],this.setState({steps:a,stepsData:s})}},{key:"updateFormula",value:function(e){var t=e.target.value;this.setState({previewFormula:t})}},{key:"submitCard",value:function(){for(var e=[],t=0;t<this.state.inputBoxes.length;t++)e.push(["none","none"]);var a=this.state.currentID;Z.a.database().ref().child("currentUniqueID").set(a);var s={id:a,title:this.state.previewTitle,description:this.state.previewDescription,image:this.state.imagePicked,inputs:this.state.inputBoxData,bounds:e,steps:this.state.stepsData,formula:this.state.previewFormula};if(""!==s.title){var r=this.state.allCardData;r[s.id]=s,Z.a.database().ref().child("submittedCards").set(r),alert("Your card has been submitted!")}else alert("A title is required")}},{key:"previewCard",value:function(){for(var e=[],t=0;t<this.state.inputBoxes.length;t++)e.push(["none","none"]);var a={id:null,title:this.state.previewTitle,description:this.state.previewDescription,image:this.state.imagePicked,inputs:this.state.inputBoxData,bounds:e,steps:this.state.stepsData,formula:this.state.previewFormula};localStorage.setItem("previewCard",JSON.stringify(a)),this.props.history.push("/Request_a_Card/Preview")}},{key:"render",value:function(){var e=this.state.imagePicked;return"circle"===e&&(e=h.a),"cube"===e&&(e=g.a),"cylinder"===e&&(e=b.a),"line"===e&&(e=S.a),""===e&&(e=w.a),"rectangle"===e&&(e=N.a),"sphere"===e&&(e=O.a),"square"===e&&(e=I.a),"triangle"===e&&(e=x.a),r.a.createElement("div",{className:"requestACard"},r.a.createElement("div",{className:"arrowHolder"},r.a.createElement("button",{className:"arrowButton",onClick:this.props.history.goBack},r.a.createElement("i",{className:"fas fa-arrow-left"}))),r.a.createElement("h1",{className:"PageTitle"},"Request a Card"),r.a.createElement("button",{className:"previewButton",onClick:this.previewCard},r.a.createElement("i",{className:"fas fa-eye"})),r.a.createElement("div",{className:"requestCard"},r.a.createElement("input",{className:"titleInput",type:"text",placeholder:"Title",value:this.state.previewTitle,onChange:this.updateTitle}),r.a.createElement("img",{className:"previewImage",src:e,alt:"preview of card"}),r.a.createElement("select",{className:"dropDownHolder",value:this.state.imagePicked,onChange:this.updateImage},Object.keys(F.images).map((function(e){return""===e?r.a.createElement("option",{key:e,value:""},"No Image"):r.a.createElement("option",{key:e,value:e},e.charAt(0).toUpperCase()+e.slice(1))}))),r.a.createElement("input",{className:"descriptionInput",type:"text",placeholder:"Description",value:this.state.previewDescription,onChange:this.updateDescription}),r.a.createElement("div",{className:"allInputBoxHolder"},this.state.inputBoxes.map((function(e){return e})),r.a.createElement("button",{className:"addInputButton",onClick:this.addInputBox},r.a.createElement("i",{className:"fas fa-plus"}),r.a.createElement("p",{className:"addInputText"},"Add an input"))),r.a.createElement("input",{className:"formulaInput",type:"text",placeholder:"Formula",value:this.state.previewformula,onChange:this.updateFormula}),r.a.createElement("div",{className:"allStepsHolder"},this.state.steps.map((function(e){return e})),r.a.createElement("button",{className:"addStepsButton",onClick:this.addStep},r.a.createElement("i",{className:"fas fa-plus"}),r.a.createElement("p",{className:"addStepText"},"Add a step")))),r.a.createElement("button",{className:"SubmitCardButton",onClick:this.submitCard},r.a.createElement("p",{className:"SubmitCardText"},"Submit Card"),r.a.createElement("i",{className:"fas fa-paper-plane"})))}}]),a}(s.Component),Y=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={knownLinks:["www.youtube.com"]},e}return Object(c.a)(a,[{key:"render",value:function(){var e,t,a=this,s=this.props.match.url.replace(/\//g,"").replace("Other_Resources","");for(t=0;t<A.cards.length;t++)A.cards[t].title===s&&(e=A.cards[t]);return r.a.createElement("div",{className:"otherResourcesContent"},r.a.createElement("div",{className:"arrowHolder"},r.a.createElement("button",{className:"arrowButton",onClick:this.props.history.goBack},r.a.createElement("i",{class:"fas fa-arrow-left"}))),r.a.createElement("div",{className:"resourceContent"},r.a.createElement("h1",{className:"resourceContentTitle"},e.title),Object.keys(e.resources).map((function(t){var s,n=new window.URL(e.resources[t]).host;return a.state.knownLinks.includes(n)?"www.youtube.com"===n&&(s=r.a.createElement("div",{className:"youtubeEmbedVideo"},r.a.createElement("h1",{className:"specificResourceTitle"},t),r.a.createElement("iframe",{title:n,width:"220",height:"200",src:"https://www.youtube-nocookie.com/embed/"+e.resources[t].replace("https://www.youtube.com/watch?v=",""),frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"}))):s=r.a.createElement("div",{className:"resourceLinkHolder"},r.a.createElement("a",{className:"resourceLink",href:e.resources[t],target:"_blank",rel:"noopener noreferrer"},t,r.a.createElement("i",{class:"fas fa-external-link-alt"}))),s}))))}}]),a}(s.Component),$=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={},s.goHome=s.goHome.bind(Object(d.a)(s)),s}return Object(c.a)(a,[{key:"goHome",value:function(){this.props.history.push("/")}},{key:"render",value:function(){return r.a.createElement("div",{className:"noCard"},r.a.createElement("div",{className:"noContent"},r.a.createElement("h1",{className:"noContentTitle"},"No Card Here"),r.a.createElement("button",{className:"noContentGoHome",onClick:this.goHome},"Go Home")))}}]),a}(s.Component),X=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={showStepsObject:{calculated:"hidden",calculatedDisplayed:"none"},output:""},e.makeACard=e.makeACard.bind(Object(d.a)(e)),e.toggleSteps=e.toggleSteps.bind(Object(d.a)(e)),e.updateOutput=e.updateOutput.bind(Object(d.a)(e)),e.showSteps=e.showSteps.bind(Object(d.a)(e)),e}return Object(c.a)(a,[{key:"makeACard",value:function(){this.props.history.push("/Request_a_Card")}},{key:"toggleSteps",value:function(){"Show Steps"===this.state.stepsButtonText?this.setState({stepsVisible:"visible",stepsDisplayed:"inherit",stepsButtonText:"Hide Steps"}):this.setState({stepsVisible:"hidden",stepsDisplayed:"none",stepsButtonText:"Show Steps"})}},{key:"updateOutput",value:function(e){this.setState({output:e})}},{key:"showSteps",value:function(e){e?this.setState({showStepsObject:{calculated:"visible",calculatedDisplayed:"inherit"},fullCardClasses:"fullCard calculated"}):this.setState({showStepsObject:{calculated:"hidden",calculatedDisplayed:"none"},fullCardClasses:"fullCard"})}},{key:"render",value:function(){var e,t,a,s=JSON.parse(localStorage.getItem("previewCard"));null===s?("circle"===(s={id:null,title:"",description:"",image:"",inputs:[],bounds:[],steps:[],formula:""}).image&&(t=h.a),"cube"===s.image&&(t=g.a),"cylinder"===s.image&&(t=b.a),"line"===s.image&&(t=S.a),""===s.image&&(t=w.a),"rectangle"===s.image&&(t=N.a),"sphere"===s.image&&(t=O.a),"square"===s.image&&(t=I.a),"triangle"===s.image&&(t=x.a),e=r.a.createElement("div",{className:"previewCard"},r.a.createElement("div",{className:"arrowHolder"},r.a.createElement("button",{className:"arrowButton",onClick:this.props.history.goBack},r.a.createElement("i",{className:"fas fa-arrow-left"}))),r.a.createElement("h1",{className:"PageTitle"},"Preview"),r.a.createElement("h1",{className:"previewCardTitle"},"Closed"),r.a.createElement("div",{className:"Card"},r.a.createElement("div",{className:"Card_Topbar"},r.a.createElement("div",{className:"invisibleIcon"}),r.a.createElement("h1",{className:"Card_title"},s.title),r.a.createElement("button",{className:"Card_interact_item"},r.a.createElement("i",{className:"fas fa-save"}))),r.a.createElement("div",{className:"CardimageHolder"},r.a.createElement("img",{className:"Card_image",src:t,alt:"Card Preview"})),r.a.createElement("div",{className:"Card_text"},r.a.createElement("p",{className:"Card_description"},s.description))),r.a.createElement("h1",{className:"previewCardTitle"},"Open"),r.a.createElement("div",{className:"fullCard"},r.a.createElement("h1",{className:"cardContentTitle"},s.title),r.a.createElement("img",{className:"cardContentImage",alt:"Card content preview",src:t}),r.a.createElement(M,{card:s,output:this.updateOutput,outputDisplayed:this.showSteps}),r.a.createElement(U,{card:s,output:this.state.output,showStepsProp:this.state.showStepsObject})))):("circle"===s.image&&(a=h.a),"cube"===s.image&&(a=g.a),"cylinder"===s.image&&(a=b.a),"line"===s.image&&(a=S.a),""===s.image&&(a=w.a),"rectangle"===s.image&&(a=N.a),"sphere"===s.image&&(a=O.a),"square"===s.image&&(a=I.a),"triangle"===s.image&&(a=x.a),e=r.a.createElement("div",{className:"previewCard"},r.a.createElement("div",{className:"arrowHolder"},r.a.createElement("button",{className:"arrowButton",onClick:this.props.history.goBack},r.a.createElement("i",{className:"fas fa-arrow-left"}))),r.a.createElement("h1",{className:"PageTitle"},"Preview"),r.a.createElement("h1",{className:"previewCardTitle"},"Closed"),r.a.createElement("div",{className:"Card"},r.a.createElement("div",{className:"Card_Topbar"},r.a.createElement("div",{className:"invisibleIcon"}),r.a.createElement("h1",{className:"Card_title"},s.title.replace(/_/g," ")),r.a.createElement("button",{className:"Card_interact_item"},r.a.createElement("i",{className:"fas fa-save"}))),r.a.createElement("div",{className:"CardimageHolder"},r.a.createElement("img",{className:"Card_image",src:a,alt:"Card Preview"})),r.a.createElement("div",{className:"Card_text"},r.a.createElement("p",{className:"Card_description"},s.description))),r.a.createElement("h1",{className:"previewCardTitle"},"Open"),r.a.createElement("div",{className:"fullCard"},r.a.createElement("h1",{className:"cardContentTitle"},s.title),r.a.createElement("img",{className:"cardContentImage",alt:"Card content preview",src:a}),r.a.createElement(M,{card:s,output:this.updateOutput,outputDisplayed:this.showSteps}),r.a.createElement(U,{card:s,output:this.state.output,showStepsProp:this.state.showStepsObject}))));return r.a.createElement("div",null,e)}}]),a}(s.Component),ee=a(8),te=a(69),ae=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=[];return A.cards.forEach((function(t){e.push(t.title)})),r.a.createElement("div",{className:"App"},r.a.createElement(p.a,{basename:"/Calc-Cards"},r.a.createElement(ee.a,{render:function(t){var a=t.location;return r.a.createElement(te.a,null,r.a.createElement(J.a,{key:a.pathname,timeout:300,classNames:"myAnimation"},r.a.createElement(ee.c,null,r.a.createElement(ee.a,{path:"/",component:z,exact:!0}),r.a.createElement(ee.a,{path:"/Saved_Cards",component:V,exact:!0}),r.a.createElement(ee.a,{path:"/Other_Resources",component:G,exact:!0}),r.a.createElement(ee.a,{path:"/Request_a_Card",component:K,exact:!0}),e.map((function(e){return r.a.createElement(ee.a,{key:e,path:"/"+e,component:W,exact:!0})})),e.map((function(e){return r.a.createElement(ee.a,{key:e,path:"/Other_Resources/"+e,component:Y,exact:!0})})),r.a.createElement(ee.a,{path:"/Request_a_Card/Preview",component:X,exact:!0}),r.a.createElement(ee.a,{component:$}))))}})))}}]),a}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Z.a.initializeApp({apiKey:"AIzaSyAHWlkQps3qEkeSm0pSZQ6rfjx0nOfvNA8",authDomain:"calc-cards.firebaseapp.com",databaseURL:"https://calc-cards.firebaseio.com",projectId:"calc-cards",storageBucket:"calc-cards.appspot.com",messagingSenderId:"178941691510",appId:"1:178941691510:web:b503e8c21514e50f"}),i.a.render(r.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[48,1,2]]]);
//# sourceMappingURL=main.a51bb5f8.chunk.js.map