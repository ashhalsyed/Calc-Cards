(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e){e.exports={images:{triangle:"https://raw.githubusercontent.com/ashhalsyed/Calc-Cards-Beta/master/src/Card%20Data/Card%20Images/triangle.svg?sanitize=true",line:"https://raw.githubusercontent.com/ashhalsyed/Calc-Cards-Beta/master/src/Card%20Data/Card%20Images/line.svg?sanitize=true"}}},26:function(e,t,a){e.exports=a.p+"static/media/Logo Black.33350180.png"},27:function(e,t,a){e.exports=a(41)},32:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),n=a(23),c=a.n(n),i=(a(32),a(2)),o=a(3),l=a(5),u=a(4),d=a(6),p=a(1),h=(a(13),a(12)),m=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={cardOpen:!1,canSave:!1,canRemove:!1},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=!0;return"/Saved_Cards"===this.props.history.location.pathname&&(t=!1),r.a.createElement("div",{className:"allCards"},this.props.renderedCards.map(function(a){var s;s=a.description.length>=100?a.description.substring(0,100)+" . . .":a.description;var n,c=e.props.allImages[a.image];return n=t?r.a.createElement("div",{className:"Card_Topbar"},r.a.createElement("div",{className:"invisibleIcon"}),r.a.createElement("h1",{className:"Card_title"},a.title.replace(/_/g," ")),r.a.createElement("button",{className:"Card_interact_item",onClick:e.props.saveCard,id:a.title},r.a.createElement("i",{className:"fas fa-save","aria-hidden":"True",id:a.title}))):r.a.createElement("div",{className:"Card_Topbar"},r.a.createElement("div",{className:"invisibleIcon"}),r.a.createElement("h1",{className:"Card_title"},a.title.replace(/_/g," ")),r.a.createElement("button",{className:"Card_interact_item",onClick:e.props.removeCard,id:a.title},r.a.createElement("i",{className:"fas fa-trash","aria-hidden":"True",id:a.title}))),r.a.createElement("div",{key:a.id,className:"Card"},n,r.a.createElement(h.b,{className:"CardimageHolder",to:{pathname:"/"+a.title.replace(/\s/g,"_")}},r.a.createElement("img",{id:a.title,className:"Card_image",src:c,alt:"Card Preview"})),r.a.createElement("div",{className:"Card_text"},r.a.createElement("p",{className:"Card_description"},s)))}))}}]),t}(s.Component),b=a(26),v=a.n(b),C=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={logoRotated:!1},e.rotateLogo=e.rotateLogo.bind(Object(p.a)(Object(p.a)(e))),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"rotateLogo",value:function(){var e=this;this.state.logoRotated||(this.setState({logoRotated:!0}),setTimeout(function(){e.setState({logoRotated:!1})},1500))}},{key:"render",value:function(){var e,t="sideDrawer";return this.props.display&&(t="sideDrawer open"),e=this.state.logoRotated?"personalLogo rotated":"personalLogo",r.a.createElement("div",{className:t},r.a.createElement("div",{className:"sideBarContent"},r.a.createElement("div",{className:"sideBarHeader"},r.a.createElement(h.b,{to:{pathname:"/"},onClick:this.props.toggle},r.a.createElement("img",{className:"sideBarLogo",alt:"side bar logo",src:"https://raw.githubusercontent.com/ashhalsyed/Calc-Cards-Beta/master/src/assets/Logo.svg?sanitize=true"}))),r.a.createElement("div",{className:"sideBarLinkHolder"},r.a.createElement(h.b,{className:"sideBarLink",to:{pathname:"/Saved_Cards"},onClick:this.props.toggle},r.a.createElement("i",{class:"fas fa-square"}),r.a.createElement("h1",{className:"sideBarLinkText"},"Saved Cards")),r.a.createElement(h.b,{className:"sideBarLink",to:{pathname:"/Other_Resources"},onClick:this.props.toggle},r.a.createElement("i",{class:"fas fa-external-link-square-alt"}),r.a.createElement("h1",{className:"sideBarLinkText"},"Other Resources")),r.a.createElement(h.b,{className:"sideBarLink",to:{pathname:"/Request_a_Card"},onClick:this.props.toggle},r.a.createElement("i",{class:"fas fa-plus"}),r.a.createElement("h1",{className:"sideBarLinkText"},"Request a Card"))),r.a.createElement("img",{className:e,src:v.a,alt:"personal logo",onClick:this.rotateLogo})))}}]),t}(s.Component),f=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={sideBarOpen:!1},e.toggleSideBar=e.toggleSideBar.bind(Object(p.a)(Object(p.a)(e))),e.closeSideBar=e.closeSideBar.bind(Object(p.a)(Object(p.a)(e))),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"toggleSideBar",value:function(){this.setState({sideBarOpen:!this.state.sideBarOpen})}},{key:"closeSideBar",value:function(){this.setState({sideBarOpen:!1})}},{key:"render",value:function(){var e;return this.state.sideBarOpen&&(e=r.a.createElement("div",{className:"backDrop",onClick:this.closeSideBar})),r.a.createElement("div",{className:"sideBarHolder"},r.a.createElement("div",{className:"menuBar"},r.a.createElement("i",{class:"fas fa-bars",onClick:this.toggleSideBar})),r.a.createElement(C,{display:this.state.sideBarOpen,toggle:this.toggleSideBar}),e)}}]),t}(s.Component),g=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={boxSize:"3em",canType:"hidden",closeTransition:"closeIconClose 0.5s forwards ease-out",canClose:"auto",contentDisplayed:"none",userSearch:"",backgroundColor:"transparent",color:"white"},e.closeSearch=e.closeSearch.bind(Object(p.a)(Object(p.a)(e))),e.SearchContent=e.SearchContent.bind(Object(p.a)(Object(p.a)(e))),e.SearchBarClicked=e.SearchBarClicked.bind(Object(p.a)(Object(p.a)(e))),e.textInput=r.a.createRef(),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"SearchBarClicked",value:function(){var e=this;this.setState(function(e){return{boxSize:"75vw",closeTransition:"closeIconOpen 0.5s forwards ease-out",canClose:"pointer",backgroundColor:"white",color:"#223040"}}),setTimeout(function(){e.setState({contentDisplayed:"inherit",canType:"visible"})},100),this.textInput.current.focus()}},{key:"closeSearch",value:function(){var e=this;this.setState(function(e){return{boxSize:"3em",canType:"hidden",closeTransition:"closeIconClose 0.5s forwards ease-out",canClose:"auto",contentDisplayed:"none",userSearch:""}}),setTimeout(function(){e.setState({backgroundColor:"transparent",color:"white"})},300),this.props.dataToFilter("")}},{key:"SearchContent",value:function(e){this.props.dataToFilter(e.target.value),this.setState({userSearch:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"SearchBar",style:{width:this.state.boxSize,backgroundColor:this.state.backgroundColor}},r.a.createElement("i",{onClick:this.closeSearch,className:"fas fa-times",style:{display:this.state.contentDisplayed,animation:this.state.closeTransition,cursor:this.state.canClose}}),r.a.createElement("input",{type:"text",placeholder:"",value:this.state.userSearch,className:"SearchText",style:{display:this.state.contentDisplayed,visibility:this.state.canType},ref:this.textInput,onChange:this.SearchContent}),r.a.createElement("i",{className:"fas fa-search",onClick:this.SearchBarClicked,style:{color:this.state.color}}))}}]),t}(s.Component),S=a(8),O=a(15),w=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={currentCardData:S.cards},e.updateCards=e.updateCards.bind(Object(p.a)(Object(p.a)(e))),e.saveCard=e.saveCard.bind(Object(p.a)(Object(p.a)(e))),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"updateCards",value:function(e){var t=e.toLowerCase(),a=S.cards;""!==e&&(a=a.filter(function(e){return e.title.toLowerCase().replace(/_/g," ").includes(t)})),this.setState({currentCardData:a})}},{key:"saveCard",value:function(e){var t=e.target.id;if(null===localStorage.getItem(t)){for(var a,s=0;s<this.state.currentCardData.length;s++)this.state.currentCardData[s].title===t&&(a=this.state.currentCardData[s]);localStorage.setItem(t,JSON.stringify(a)),alert("Saved")}else alert("This card is already saved")}},{key:"render",value:function(){return r.a.createElement("div",{className:"HomeScreen"},r.a.createElement(f,null),r.a.createElement(g,{dataToFilter:this.updateCards}),r.a.createElement(m,{renderedCards:this.state.currentCardData,history:this.props.history,allImages:O.images,saveCard:this.saveCard}))}}]),t}(s.Component),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={userInput:[],output:"",calculateButtonText:"Calculate",validInput:!1,showClearButton:!1,showUndoButton:!1,savedInput:[]},a.calculateInputs=a.calculateInputs.bind(Object(p.a)(Object(p.a)(a))),a.updateInputData=a.updateInputData.bind(Object(p.a)(Object(p.a)(a))),a.performCalculation=a.performCalculation.bind(Object(p.a)(Object(p.a)(a))),a.validateInputBounds=a.validateInputBounds.bind(Object(p.a)(Object(p.a)(a))),a.clearInput=a.clearInput.bind(Object(p.a)(Object(p.a)(a))),a.undoClear=a.undoClear.bind(Object(p.a)(Object(p.a)(a))),a.inputBox=r.a.createRef(),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"calculateInputs",value:function(){var e,t=[];for(e=0;e<this.props.card.inputs.length;e++)t.push("");return t}},{key:"updateInputData",value:function(e){this.state.showUndoButton&&this.setState({showUndoButton:!1});var t=this.state.userInput;0===this.state.userInput.length&&(t=this.calculateInputs());var a,s=this.props.card.inputs.indexOf(e.target.name);t[s]=e.target.value,a=!(t[s]>=Math.pow(10,-20)&&t[s]<=Math.pow(10,20)),console.log(a),console.log(this.state.userInput),a||(console.log("doing"),this.setState({userInput:t})),t.every(function(e){return""===e})?this.setState({showClearButton:!1}):this.setState({showClearButton:!0})}},{key:"validateInputBounds",value:function(e){var t,a=[];for(t=0;t<e.length;t++)"none"===this.props.card.bounds[t][0]|e[t]>=this.props.card.bounds[t][0]?a.push(1):a.push(0),"none"===this.props.card.bounds[t][1]|e[t]<=this.props.card.bounds[t][1]?a.push(1):a.push(0);return!a.includes(0)}},{key:"performCalculation",value:function(){var e,t=!1;if(0===this.state.userInput.length&&(t=!0),this.state.userInput.includes("")|t)e="invalid";else if("SAS Cosine Law"===this.props.card.title){var a=Number(this.state.userInput[0]),s=Number(this.state.userInput[1]),r=Number(this.state.userInput[2]);if(this.setState({validInput:!1}),e=[a,s,r],this.validateInputBounds(e)){r=Number(this.state.userInput[2])*Math.PI/180;var n=Math.pow(Math.pow(a,2)+Math.pow(s,2)-2*a*s*Math.cos(r),.5);this.setState({output:n,calculateButtonText:"Recalculate",validInput:!0}),this.props.output(n),this.props.outputDisplayed(!0)}else e="invalid"}else if("SSS Cosine Law"===this.props.card.title){var c=Number(this.state.userInput[0]),i=Number(this.state.userInput[1]),o=Number(this.state.userInput[2]);if(this.setState({validInput:!1}),e=[c,i,o],this.validateInputBounds(e)){var l=Math.acos((Math.pow(c,2)+Math.pow(i,2)-Math.pow(o,2))/(2*c*i));l=function(e){return 180*e/Math.PI}(l),this.setState({output:l,calculateButtonText:"Recalculate",validInput:!0}),this.props.output(l),this.props.outputDisplayed(!0)}else e="invalid"}else if("Slope With Two Points"===this.props.card.title){var u=Number(this.state.userInput[0]),d=Number(this.state.userInput[1]),p=Number(this.state.userInput[2]),h=Number(this.state.userInput[3]);if(this.setState({validInput:!1}),e=[u,d,p,h],this.validateInputBounds(e)){var m=(h-d)/(p-u);this.props.output(m),this.props.outputDisplayed(!0),this.setState({output:m,calculateButtonText:"Recalculate",validInput:!0})}else e="invalid"}"invalid"===e&&alert("Check your numbers and try again")}},{key:"clearInput",value:function(){var e=this.state.userInput;this.setState({savedInput:e});var t=this.calculateInputs();this.setState({userInput:t,showClearButton:!1,calculateButtonText:"Calculate",showUndoButton:!0}),this.props.output(0),this.props.outputDisplayed(!1)}},{key:"undoClear",value:function(){this.setState({userInput:this.state.savedInput,showUndoButton:!1,showClearButton:!0})}},{key:"render",value:function(){var e=this,t=r.a.createElement("div",null);this.state.showClearButton&&(t=r.a.createElement("button",{className:"clearButton",onClick:this.clearInput},r.a.createElement("i",{class:"fas fa-backspace"})));var a=r.a.createElement("div",null);return this.state.showUndoButton&&(a=r.a.createElement("button",{className:"undoButton",onClick:this.undoClear},r.a.createElement("i",{class:"fas fa-undo"}))),r.a.createElement("div",{className:"userInputwrapper"},r.a.createElement("div",{className:"allUserInput"},this.props.card.inputs.map(function(t){return r.a.createElement("div",{key:t,className:"UserInput"},r.a.createElement("label",{className:"inputLabel"},t),r.a.createElement("input",{type:"number",name:t,className:"inputBox",value:e.state.userInput[e.props.card.inputs.indexOf(t)],onChange:e.updateInputData}))})),r.a.createElement("div",{className:"inputButtons"},r.a.createElement("button",{className:"calculateButton",onClick:this.performCalculation},this.state.calculateButtonText),t,a))}}]),t}(s.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={stepsVisible:"hidden",stepsDisplayed:"none",stepsButtonText:"Show Steps",userInput:[],output:"",calculated:"visible",calculatedDisplayed:"flex"},a.toggleSteps=a.toggleSteps.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"toggleSteps",value:function(){"Show Steps"===this.state.stepsButtonText?this.setState({stepsVisible:"visible",stepsDisplayed:"inherit",stepsButtonText:"Hide Steps"}):this.setState({stepsVisible:"hidden",stepsDisplayed:"none",stepsButtonText:"Show Steps"})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"allOuput",style:{visibility:this.props.showStepsProp.calculated,display:this.props.showStepsProp.calculatedDisplayed,flexDirection:"column"}},r.a.createElement("h1",{className:"OutputText"},this.props.output),r.a.createElement("button",{className:"stepsButton",onClick:this.toggleSteps},this.state.stepsButtonText),r.a.createElement("div",{className:"allSteps",style:{visibility:this.state.stepsVisible,display:this.state.stepsDisplayed,flexDirection:"column"}},r.a.createElement("h1",{className:"stepsTitles formulaTitle"},"Formula"),r.a.createElement("p",{className:"stepsContent"},this.props.card.formula),r.a.createElement("h1",{className:"stepsTitles stepsTitle"},"Steps"),r.a.createElement("ol",{className:"stepsContent"},this.props.card.steps.map(function(t){return r.a.createElement("li",{key:t,className:"stepsContent numberedSteps"},(e.props.card.steps.indexOf(t)+1).toString()+". "+t)})),r.a.createElement("h1",{className:"stepsTitles answerTitle"},"Answer"),r.a.createElement("p",{className:"stepsContent answer"},"The Answer is ",Math.round(100*this.props.output)/100)))}}]),t}(s.Component),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={currentCard:{id:0,title:"",description:"",image:"",inputs:[],bounds:[],steps:[],formula:""},output:"",showStepsObject:{calculated:"hidden",calculatedDisplayed:"none"},imagePath:"./Card Data/Card Images/SAS Image.svg",fullCardClasses:"fullCard"},a.updateOutput=a.updateOutput.bind(Object(p.a)(Object(p.a)(a))),a.showSteps=a.showSteps.bind(Object(p.a)(Object(p.a)(a))),a.backClicked=a.backClicked.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"updateOutput",value:function(e){this.setState({output:e})}},{key:"showSteps",value:function(e){e?this.setState({showStepsObject:{calculated:"visible",calculatedDisplayed:"inherit"},fullCardClasses:"fullCard calculated"}):this.setState({showStepsObject:{calculated:"hidden",calculatedDisplayed:"none"},fullCardClasses:"fullCard"})}},{key:"backClicked",value:function(){this.props.history.goBack()}},{key:"render",value:function(){for(var e,t=this.props.match.url.replace(/\//g,"").replace(/_/g," "),a=0;a<S.cards.length;a++)S.cards[a].title===t&&(e=S.cards[a]);var s=O.images[e.image];return r.a.createElement("div",{className:"cardContent"},r.a.createElement("div",{className:"arrowHolder"},r.a.createElement("button",{className:"arrowButton",onClick:this.backClicked},r.a.createElement("i",{className:"fas fa-arrow-left"}))),r.a.createElement("div",{className:this.state.fullCardClasses},r.a.createElement("h1",{className:"cardContentTitle"},e.title),r.a.createElement("img",{className:"cardContentImage",alt:"Card content preview",src:s}),r.a.createElement(E,{card:e,output:this.updateOutput,outputDisplayed:this.showSteps}),r.a.createElement(y,{card:e,output:this.state.output,showStepsProp:this.state.showStepsObject})))}}]),t}(s.Component),j=function(e){function t(){var e;Object(i.a)(this,t),e=Object(l.a)(this,Object(u.a)(t).call(this));for(var a=[],s=0;s<localStorage.length;s++)a.push(JSON.parse(localStorage.getItem(localStorage.key(s))));return e.state={allSavedCards:a,savedImages:O.images},e.removeCard=e.removeCard.bind(Object(p.a)(Object(p.a)(e))),e.updateCards=e.updateCards.bind(Object(p.a)(Object(p.a)(e))),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"updateCards",value:function(e){for(var t=e.toLowerCase(),a=[],s=0;s<localStorage.length;s++)a.push(JSON.parse(localStorage.getItem(localStorage.key(s))));var r=a;""!==e&&(r=r.filter(function(e){return e.title.toLowerCase().replace(/_/g," ").includes(t)})),this.setState({allSavedCards:r})}},{key:"removeCard",value:function(e){var t=e.target.id;if(window.confirm('Are you sure you would like to delete "'+t+'"')){localStorage.removeItem(t);for(var a=[],s=0;s<localStorage.length;s++)a.push(JSON.parse(localStorage.getItem(localStorage.key(s))));console.log(a),this.setState({allSavedCards:a})}}},{key:"render",value:function(){return console.log("rendering"),r.a.createElement("div",{className:"savedCards"},r.a.createElement("div",{className:"arrowHolder"},r.a.createElement("button",{className:"arrowButton"},r.a.createElement("i",{class:"fas fa-arrow-left",onClick:this.props.history.goBack}))),r.a.createElement(g,{dataToFilter:this.updateCards}),r.a.createElement(m,{renderedCards:this.state.allSavedCards,history:this.props.history,allImages:this.state.savedImages,removeCard:this.removeCard}))}}]),t}(s.Component),N=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={knownLinks:["www.youtube.com"],currentResourceData:S.cards},e.resourceClicked=e.resourceClicked.bind(Object(p.a)(Object(p.a)(e))),e.updateResources=e.updateResources.bind(Object(p.a)(Object(p.a)(e))),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"updateResources",value:function(e){var t=e.toLowerCase(),a=S.cards;""!==e&&(a=a.filter(function(e){return e.title.toLowerCase().replace(/_/g," ").includes(t)})),this.setState({currentResourceData:a})}},{key:"resourceClicked",value:function(e){console.log(e.target.id),"resourceTitle"!==e.target.className&&this.props.history.push("/Other_Resources/"+e.target.id.replace(/\s/g,"_"))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"otherResources"},r.a.createElement("div",{className:"arrowHolder"},r.a.createElement("button",{className:"arrowButton",onClick:this.props.history.goBack},r.a.createElement("i",{class:"fas fa-arrow-left"}))),r.a.createElement(g,{dataToFilter:this.updateResources}),r.a.createElement("div",{className:"allResources"},this.state.currentResourceData.map(function(t){return r.a.createElement("div",{className:"resource",id:t.title},r.a.createElement("div",{className:"TitleSection",id:t.title},r.a.createElement("h1",{className:"resourceTitle"},t.title)),r.a.createElement("div",{className:"ContentSection",id:t.title,onClick:e.resourceClicked},Object.values(t.resources).map(function(a){var s,n=new window.URL(a).host;return e.state.knownLinks.includes(n)?"www.youtube.com"===n&&(s=r.a.createElement("i",{class:"fab fa-youtube",id:t.title,onClick:e.resourceClicked})):s=r.a.createElement("i",{class:"fas fa-link",id:t.title,onClick:e.resourceClicked}),r.a.createElement("div",{className:"displayedIcons",id:t.title,key:t.id,onClick:e.resourceClicked},s)})))})))}}]),t}(s.Component),B=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"requestACard"},r.a.createElement("div",{className:"arrowHolder"},r.a.createElement("button",{className:"arrowButton"},r.a.createElement("i",{class:"fas fa-arrow-left",onClick:this.props.history.goBack}))),r.a.createElement("h1",{className:"PageTitle"},"Request a Card"),r.a.createElement("p",{className:"featureComingSoon"},"Request a card  feature coming soon"))}}]),t}(s.Component),I=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={knownLinks:["www.youtube.com"]},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e,t,a=this,s=this.props.match.url.replace(/\//g,"").replace("Other_Resources","").replace(/_/g," ");for(t=0;t<S.cards.length;t++)S.cards[t].title===s&&(e=S.cards[t]);return r.a.createElement("div",{className:"otherResourcesContent"},r.a.createElement("div",{className:"arrowHolder"},r.a.createElement("button",{className:"arrowButton",onClick:this.props.history.goBack},r.a.createElement("i",{class:"fas fa-arrow-left"}))),r.a.createElement("div",{className:"resourceContent"},r.a.createElement("h1",{className:"resourceContentTitle"},e.title),Object.keys(e.resources).map(function(t){var s,n=new window.URL(e.resources[t]).host;return a.state.knownLinks.includes(n)?"www.youtube.com"===n&&(s=r.a.createElement("div",{className:"youtubeEmbedVideo"},r.a.createElement("h1",{className:"specificResourceTitle"},t),r.a.createElement("iframe",{title:n,width:"220",height:"200",src:"https://www.youtube-nocookie.com/embed/"+e.resources[t].replace("https://www.youtube.com/watch?v=",""),frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"}))):s=r.a.createElement("div",{className:"resourceLinkHolder"},r.a.createElement("a",{className:"resourceLink",href:e.resources[t],target:"_blank",rel:"noopener noreferrer"},t,r.a.createElement("i",{class:"fas fa-external-link-alt"}))),s})))}}]),t}(s.Component),x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a.goHome=a.goHome.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"goHome",value:function(){this.props.history.push("/")}},{key:"render",value:function(){return r.a.createElement("div",{className:"noCard"},r.a.createElement("div",{className:"noContent"},r.a.createElement("h1",{className:"noContentTitle"},"No Card Here"),r.a.createElement("button",{className:"noContentGoHome",onClick:this.goHome},"Go Home")))}}]),t}(s.Component),T=a(14),D=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=[];return S.cards.forEach(function(t){e.push(t.title.replace(/\s/g,"_"))}),r.a.createElement("div",{className:"App"},r.a.createElement(h.a,{basename:"/Calc-Cards"},r.a.createElement(T.c,null,r.a.createElement(T.a,{path:"/",component:w,exact:!0}),r.a.createElement(T.a,{path:"/Saved_Cards",component:j,exact:!0}),r.a.createElement(T.a,{path:"/Other_Resources",component:N,exact:!0}),r.a.createElement(T.a,{path:"/Request_a_Card",component:B,exact:!0}),e.map(function(e){return r.a.createElement(T.a,{key:e,path:"/"+e,component:k,exact:!0})}),e.map(function(e){return r.a.createElement(T.a,{key:e,path:"/Other_Resources/"+e,component:I,exact:!0})}),r.a.createElement(T.a,{component:x}))))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e){e.exports={cards:[{id:1,title:"SAS Cosine Law",description:"Calculate the missing side when given two sides and an angle",image:"triangle",inputs:["Side a","Side b","Angle C"],bounds:[[0,"none"],[0,"none"],[0,180]],steps:["Substitude side 'a', side 'b', and angle 'C' into given general equation for SAS","Simplify"],formula:"c = (a^2 + b^2 -2ab cosC)^(1/2)",resources:{"SAS Worked Example":"https://www.youtube.com/watch?v=ZElOxG7_m3c"}},{id:2,title:"SSS Cosine Law",description:"Calculate the missing angle when given 3 sides",image:"triangle",inputs:["Side a","Side b","Side c"],bounds:[[0,"none"],[0,"none"],[0,"none"]],steps:["Substitude side 'a', side 'b', and side 'c' into given general equation for SSS","Simplify"],formula:"C = cos^(-1)((a^2+b^2-c^2)/(2ab))",resources:{"SSS Worked Example":"https://www.youtube.com/watch?v=Ei54NnQ0FKs"}},{id:3,title:"Slope With Two Points",description:"Calculate slope given 2 points",image:"line",inputs:["x1","y1","x2","y2"],bounds:[["none","none"],["none","none"],["none","none"],["none","none"]],steps:["Calculate y2-y1 and set that as the numerator","Calculate x2-x1 and set that as the denominator","Simplify"],formula:"(y2-y1)/(x2-x1)",resources:{"Calculate Slope With Two Points Worked Example":"https://www.youtube.com/watch?v=WkspBxrzuZo","Written Explanation":"https://www.mathwarehouse.com/algebra/linear_equation/slope-of-a-line.php"}}]}}},[[27,1,2]]]);
//# sourceMappingURL=main.d80c0f3a.chunk.js.map