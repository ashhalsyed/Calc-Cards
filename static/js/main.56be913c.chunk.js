(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e){e.exports={cards:[{id:1,title:"SAS",description:"Calculate Side c from Side a, Side b, and Angle C",image:"https://lh3.googleusercontent.com/eySWR1LXJuw_bzLkKw3ynknxPCXbGadIz7JAMI9Mvb6ZPA96VZpu92XBnKvqrzguwbv1FqKgWAWcFRbyyhHC6q3T16UdW4gSY0kErbPqt3vKIbLJjcin_ye4AwySVcRQw7Tw6ybcAA=w175-h200-no",inputs:["Side a","Side b","Angle C"],bounds:[[0,"none"],[0,"none"],[0,180]],steps:["Substitude side 'a', side 'b', and angle 'C' into given general equation for SAS","Simplify"],formula:"c = (a^2 + b^2 -2ab cosC)^(1/2)"},{id:2,title:"SSS",description:"Calculate Angle C from Side a, Side b, and Side c",image:"https://lh3.googleusercontent.com/RP9n1rwaMw8-9xpFVQRVSihhy7Js10tjx0Rw9rtAf_j4FTTIIfiy7LIGgtxnuFQwH7au7F29i-yHOuGwDE-jEWWJ-KXq5P9GJpTj-tbgkVlIzCHFOi0_-liCxJwrpiPEMvo9jyoWfQ=w175-h200-no",inputs:["Side a","Side b","Side c"],bounds:[[0,"none"],[0,"none"],[0,"none"]],steps:["Substitude side 'a', side 'b', and side 'c' into given general equation for SSS","Simplify"],formula:"C = cos^(-1)((a^2+b^2-c^2)/2ab)"}]}},13:function(e,t,a){},25:function(e,t,a){e.exports=a(39)},30:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(21),c=a.n(r),i=(a(30),a(3)),o=a(4),l=a(6),u=a(5),p=a(7),d=a(1),h=(a(13),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={cardOpen:!1},e.cardClicked=e.cardClicked.bind(Object(d.a)(Object(d.a)(e))),e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"cardClicked",value:function(e){"Card_image"===e.target.className&&this.props.history.push("/"+e.target.id.replace(/\s/g,"_"))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,this.props.renderedCards.map(function(t){return n.a.createElement("div",{key:t.id,className:"Card",onClick:e.cardClicked},n.a.createElement("div",{className:"Card_Topbar"},n.a.createElement("button",{className:"Card_interact_item"},n.a.createElement("i",{className:"fas fa-share","aria-hidden":"True"})),n.a.createElement("h1",{className:"Card_title"},t.title.replace(/_/g," ")),n.a.createElement("button",{className:"Card_interact_item"},n.a.createElement("i",{className:"fas fa-save","aria-hidden":"True"}))),n.a.createElement("img",{className:"Card_image",id:t.title,src:t.image,alt:"Card Preview"}),n.a.createElement("div",{className:"Card_text"},n.a.createElement("p",{className:"Card_description"},t.description)))}))}}]),t}(s.Component)),m=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={boxSize:"3em",canType:"hidden",closeTransition:"closeIconClose 0.5s forwards ease-out",canClose:"auto",contentDisplayed:"none",userSearch:"",backgroundColor:"transparent",color:"white"},e.closeSearch=e.closeSearch.bind(Object(d.a)(Object(d.a)(e))),e.SearchContent=e.SearchContent.bind(Object(d.a)(Object(d.a)(e))),e.SearchBarClicked=e.SearchBarClicked.bind(Object(d.a)(Object(d.a)(e))),e.textInput=n.a.createRef(),e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"SearchBarClicked",value:function(){var e=this;this.setState(function(e){return{boxSize:"100%",closeTransition:"closeIconOpen 0.5s forwards ease-out",canClose:"pointer",backgroundColor:"white",color:"#223040"}}),setTimeout(function(){e.setState({contentDisplayed:"inherit",canType:"visible"})},100),this.textInput.current.focus()}},{key:"closeSearch",value:function(){var e=this;this.setState(function(e){return{boxSize:"3em",canType:"hidden",closeTransition:"closeIconClose 0.5s forwards ease-out",canClose:"auto",contentDisplayed:"none",userSearch:""}}),setTimeout(function(){e.setState({backgroundColor:"transparent",color:"white"})},300),this.props.dataToFilter("")}},{key:"SearchContent",value:function(e){this.props.dataToFilter(e.target.value),this.setState({userSearch:e.target.value})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"SearchBar",style:{width:this.state.boxSize,backgroundColor:this.state.backgroundColor}},n.a.createElement("i",{onClick:this.closeSearch,className:"fas fa-times",style:{display:this.state.contentDisplayed,animation:this.state.closeTransition,cursor:this.state.canClose}}),n.a.createElement("input",{type:"text",placeholder:"",value:this.state.userSearch,className:"SearchText",style:{display:this.state.contentDisplayed,visibility:this.state.canType},ref:this.textInput,onChange:this.SearchContent}),n.a.createElement("i",{className:"fas fa-search",onClick:this.SearchBarClicked,style:{color:this.state.color}})))}}]),t}(s.Component),b=a(12),C=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={currentCardData:b.cards},e.updateCards=e.updateCards.bind(Object(d.a)(Object(d.a)(e))),e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"updateCards",value:function(e){var t=e.toLowerCase(),a=b.cards;""!==e&&(a=a.filter(function(e){return e.title.toLowerCase().replace(/_/g," ").includes(t)})),this.setState({currentCardData:a})}},{key:"render",value:function(){return n.a.createElement("div",{className:"HomeScreen"},n.a.createElement(m,{dataToFilter:this.updateCards}),n.a.createElement(h,{renderedCards:this.state.currentCardData,history:this.props.history}))}}]),t}(s.Component),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={userInput:[],output:"",calculateButtonText:"Calculate",validInput:!1},a.updateInputData=a.updateInputData.bind(Object(d.a)(Object(d.a)(a))),a.performCalculation=a.performCalculation.bind(Object(d.a)(Object(d.a)(a))),a.validateInputBounds=a.validateInputBounds.bind(Object(d.a)(Object(d.a)(a))),a.inputBox=n.a.createRef(),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.calculateInputs()}},{key:"calculateInputs",value:function(){var e,t=[];for(e=0;e<this.props.card.inputs.length;e++)t.push("");this.setState({userInput:t})}},{key:"updateInputData",value:function(e){var t=this.props.card.inputs.indexOf(e.target.name),a=this.state.userInput;a[t]=e.target.value,this.setState({userInput:a})}},{key:"validateInputBounds",value:function(e){console.log(e);var t,a=[];for(t=0;t<e.length;t++)"none"===this.props.card.bounds[t][0]|e[t]>=this.props.card.bounds[t][0]?a.push(1):a.push(0),"none"===this.props.card.bounds[t][1]|e[t]<=this.props.card.bounds[t][1]?a.push(1):a.push(0);return console.log(a),!a.includes(0)}},{key:"performCalculation",value:function(){if(console.log(this.props.card.title),"SAS"===this.props.card.title){var e=Number(this.state.userInput[0]),t=Number(this.state.userInput[1]),a=Number(this.state.userInput[2]);this.setState({validInput:!1});var s=[e,t,a];if(this.validateInputBounds(s)){a=Number(this.state.userInput[2])*Math.PI/180;var n=Math.pow(Math.pow(e,2)+Math.pow(t,2)-2*e*t*Math.cos(a),.5);this.setState({output:n,calculateButtonText:"Recalculate",validInput:!0}),this.props.output(n),this.props.outputDisplayed({calculated:"visible",calculatedDisplayed:"inherit"})}else alert("Check your numbers and try again")}if("SSS"===this.props.card.title){var r=Number(this.state.userInput[0]),c=Number(this.state.userInput[1]),i=Number(this.state.userInput[2]);this.setState({validInput:!1});var o=[r,c,i];if(this.validateInputBounds(o)){var l=Math.acos((Math.pow(r,2)+Math.pow(c,2)-Math.pow(i,2))/(2*r*c));l=function(e){return 180*e/Math.PI}(l),this.setState({output:l,calculateButtonText:"Recalculate",validInput:!0}),this.props.output(l),this.props.outputDisplayed({calculated:"visible",calculatedDisplayed:"inherit"})}else alert("Check your numbers and try again")}}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"userInputwrapper"},n.a.createElement("div",{className:"allUserInput"},this.props.card.inputs.map(function(t){return n.a.createElement("div",{key:t,className:"UserInput"},n.a.createElement("label",{className:"inputLabel"},t),n.a.createElement("input",{type:"number",name:t,className:"inputBox",value:e.state.userInput[e.props.card.inputs.indexOf(t)],onChange:e.updateInputData}))})),n.a.createElement("button",{className:"calculateButton",onClick:this.performCalculation},this.state.calculateButtonText))}}]),t}(s.Component),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={stepsVisible:"hidden",stepsDisplayed:"none",stepsButtonText:"Show Steps",userInput:[],output:"",calculated:"visible",calculatedDisplayed:"flex"},a.toggleSteps=a.toggleSteps.bind(Object(d.a)(Object(d.a)(a))),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"toggleSteps",value:function(){"Show Steps"===this.state.stepsButtonText?this.setState({stepsVisible:"visible",stepsDisplayed:"inherit",stepsButtonText:"Hide Steps"}):this.setState({stepsVisible:"hidden",stepsDisplayed:"none",stepsButtonText:"Show Steps"})}},{key:"render",value:function(){return n.a.createElement("div",{className:"allOuput",style:{visibility:this.props.showStepsProp.calculated,display:this.props.showStepsProp.calculatedDisplayed,flexDirection:"column"}},n.a.createElement("h1",{className:"OutputText"},this.props.output),n.a.createElement("button",{className:"stepsButton",onClick:this.toggleSteps},this.state.stepsButtonText),n.a.createElement("div",{className:"allSteps",style:{visibility:this.state.stepsVisible,display:this.state.stepsDisplayed,flexDirection:"column"}},n.a.createElement("h1",{className:"stepsTitles formula"},"Formula"),n.a.createElement("p",{className:"stepsContent"},this.props.card.formula),n.a.createElement("hr",{width:"120%",color:"grey",size:"1",className:"divider"}),n.a.createElement("h1",{className:"stepsTitles"},"Steps"),n.a.createElement("ol",{className:"stepsContent"},this.props.card.steps.map(function(e){return n.a.createElement("li",{key:e,className:"stepsContent numberedSteps"},e)})),n.a.createElement("hr",{width:"120%",color:"grey",size:"1",className:"divider"}),n.a.createElement("h1",{className:"stepsTitles"},"Answer"),n.a.createElement("p",{className:"stepsContent "},"The Answer is ",this.props.output)))}}]),t}(s.Component),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={currentCard:{id:0,title:"",description:"",image:"",inputs:[],bounds:[],steps:[],formula:""},output:"",showStepsObject:{calculated:"hidden",calculatedDisplayed:"none"},imagePath:"./Card Data/Card Images/SAS Image.svg"},a.updateOutput=a.updateOutput.bind(Object(d.a)(Object(d.a)(a))),a.showSteps=a.showSteps.bind(Object(d.a)(Object(d.a)(a))),a.backClicked=a.backClicked.bind(Object(d.a)(Object(d.a)(a))),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e,t,a=this.props.match.url.replace(/\//g,"");for(t=0;t<b.cards.length;t++)b.cards[t].title===a&&(e=b.cards[t]);this.setState(function(t){return{currentCard:e,imagePath:"./Card Data/Card Images/"+e.image}})}},{key:"updateOutput",value:function(e){console.log("calculated output: ",e),this.setState({output:e})}},{key:"showSteps",value:function(e){this.setState({showStepsObject:{calculated:e.calculated,calculatedDisplayed:e.calculatedDisplayed}})}},{key:"backClicked",value:function(){this.props.history.goBack()}},{key:"render",value:function(){return n.a.createElement("div",{className:"cardContent"},n.a.createElement("i",{class:"fas fa-arrow-left",onClick:this.backClicked}),n.a.createElement("div",{className:"fullCard"},n.a.createElement("h1",null,this.state.currentCard.title),n.a.createElement("img",{className:"cardContentImage",alt:"Card content preview",src:this.state.currentCard.image}),n.a.createElement(f,{card:this.state.currentCard,output:this.updateOutput,outputDisplayed:this.showSteps}),n.a.createElement(v,{card:this.state.currentCard,output:this.state.output,showStepsProp:this.state.showStepsObject})))}}]),t}(s.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a.goHome=a.goHome.bind(Object(d.a)(Object(d.a)(a))),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"goHome",value:function(){this.props.history.push("/")}},{key:"render",value:function(){return n.a.createElement("div",{className:"noCard"},n.a.createElement("div",{className:"noContent"},n.a.createElement("h1",{className:"noContentTitle"},"No Card Here"),n.a.createElement("button",{className:"noContentGoHome",onClick:this.goHome},"Go Home")))}}]),t}(s.Component),O=a(22),g=a(11),j=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(O.a,{basename:"/Calc-Cards"},n.a.createElement(g.c,null,n.a.createElement(g.a,{path:"/",component:C,exact:!0}),n.a.createElement(g.a,{path:"/SAS",component:S}),n.a.createElement(g.a,{path:"/SSS",component:S}),n.a.createElement(g.a,{component:y}))))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.56be913c.chunk.js.map