(function(){"use strict";var e={4067:function(e,a,i){var t=i(9242),r=i(3396);function n(e,a,i,t,n,l){const o=(0,r.up)("GalleryCard");return(0,r.wg)(),(0,r.j4)(o)}const l={class:"flex_container"};function o(e,a,i,t,n,o){const s=(0,r.up)("NavigationBar"),d=(0,r.up)("CarForm"),c=(0,r.up)("VehicalCard");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(s,{onOnFormSubmitHandler:o.saveFormdataHandler},null,8,["onOnFormSubmitHandler"]),(0,r._)("div",l,[(0,r.Wm)(d,{onEditedIteam:o.editedClickHandler,formVisibility:n.showForm,sd:this.filteredData,onFormHandlerData:o.closeFormHandler},null,8,["onEditedIteam","formVisibility","sd","onFormHandlerData"]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.carsDetails,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.id},[(0,r.Wm)(c,{vehicalData:e,onDeleteIteam:o.deleteClickHandler,onVehicalId:o.vehicalEditClickHandler,formHandeler:n.showForm},null,8,["vehicalData","onDeleteIteam","onVehicalId","formHandeler"])])))),128))])])}var s=JSON.parse('[{"id":156235,"heading":"Shelby Mustang","details":"Revolutionary thinking is at the heart of every idea from Automobili Lamborghini. Whether it is aerospace-inspired design or technologies applied to the naturally aspirated V12 engine","image":"https://hips.hearstapps.com/hmg-prod/images/2022-ford-mustang-shelby-gt500-02-1636734552.jpg?crop=1.00xw:0.891xh;0,0.0759xh&resize=2048:*","specs":"3.8-litre Whipple supercharger to the 5.2-litre V8, 900 horsepower on 93-octane premium gas.","price":"110000000"},{"id":24653,"heading":"Lamborghini Aventador","details":"DESIGNED TO PUSH BEYOND PERFORMANCE, Whether it is aerospace-inspired design or technologies applied to the naturally aspirated V12 engine or carbon-fiber structure, going beyond accepted limits is part of our philosophy.","image":"https://cdn.motor1.com/images/mgl/4JyZA/s3/lamborghini-aventador-lp-780-4-ultimae.webp","specs":"566 kW (770 CV) at 8,500 rpm","price":"62500000"},{"id":312345,"heading":"Pagani Huayra","details":" The Pugani Huayra It is named after Huayra-tata, a Quechua wind god. The Huayra is a sports car that was designed to be the first sports car in the world to be powered by a gasoline engine. The Huayra is the first sports car to be produced by a company that is based in Italy.","image":"https://upload.wikimedia.org/wikipedia/commons/3/36/Pagani%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0023%29.jpg","specs":"The Huayra uses a 6.0 L (5,980 cc) twin-turbocharged M158 60° V12 engine developed by Mercedes-AMG specially for the Huayra","price":"250000000"}]'),d=i(7139);const c={class:"List-home"},m={class:"main_container"},u=["src"],h={key:1,disabled:"",class:"disable_button"};function p(e,a,i,t,n,l){return(0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("div",m,[(0,r._)("h2",null,(0,d.zw)(i.vehicalData.heading),1),(0,r._)("div",null,[(0,r._)("img",{src:i.vehicalData.image,alt:"image of car"},null,8,u)]),(0,r._)("h4",null,(0,d.zw)(i.vehicalData.details),1),(0,r._)("div",null,[(0,r._)("h4",null,(0,d.zw)(i.vehicalData.specs),1)]),i.vehicalData.price?((0,r.wg)(),(0,r.iD)("button",{key:0,onClick:a[0]||(a[0]=e=>l.infoClickHandler(i.vehicalData.price,i.vehicalData.heading)),class:"info_btn"}," info ")):((0,r.wg)(),(0,r.iD)("button",h,"Available soon!")),(0,r._)("button",{type:"button","data-toggle":"modal","data-target":"#editModal",class:"edit_button",onClick:a[1]||(a[1]=(...e)=>l.editClickHandler&&l.editClickHandler(...e))}," Edit "),(0,r._)("button",{class:"delete_button",onClick:a[2]||(a[2]=(...e)=>l.deleteClickHandler&&l.deleteClickHandler(...e))},"Delete")])])}var g={props:{vehicalData:Object,formHandeler:Boolean},data(){return{showForm:this.formHandeler}},methods:{infoClickHandler(e,a){alert("Car Name: "+a+"\nPrice is: "+e)},deleteClickHandler(){this.$emit("DeleteIteam",this.vehicalData.id)},editClickHandler(){this.$emit("vehicalId",this.vehicalData.id,this.showForm=!this.showForm)}}},f=i(89);const v=(0,f.Z)(g,[["render",p],["__scopeId","data-v-86d338e6"]]);var b=v;const _={class:"Navigation_bar"},y=(0,r._)("div",null,"Car gallery",-1),C=(0,r._)("button",{type:"button",class:"btn btn-primary","data-toggle":"modal","data-target":"#AddCarForm"}," Add Car ",-1),D={class:"modal fade",id:"AddCarForm",tabindex:"-1",role:"dialog","aria-labelledby":"AddCarFormLabel","aria-hidden":"true"},H={class:"modal-dialog",role:"document"},w={class:"modal-content"},x=(0,r._)("div",{class:"modal-header"},[(0,r._)("h5",{class:"modal-title",id:"AddCarFormLabel"},"Add Car"),(0,r._)("button",{type:"button",id:"close_add_model",class:"close","data-dismiss":"modal","aria-label":"Close"},[(0,r._)("span",{"aria-hidden":"true"},"×")])],-1),k={class:"modal-body"},F=(0,r._)("button",{class:"btn btn-secondary"},"Submit",-1);function O(e,a,i,t,n,l){const o=(0,r.up)("Field"),s=(0,r.up)("ErrorMessage"),d=(0,r.up)("Form");return(0,r.wg)(),(0,r.iD)("div",_,[y,(0,r._)("div",null,[C,(0,r._)("div",D,[(0,r._)("div",H,[(0,r._)("div",w,[x,(0,r._)("div",k,[(0,r.Wm)(d,{onSubmit:l.onSubmit,"validation-schema":t.schema},{default:(0,r.w5)((()=>[(0,r._)("div",null,[(0,r.Wm)(o,{id:"heading",name:"heading",type:"text",placeholder:"Heading:- Ex:- Ambassador",class:"form-control"}),(0,r.Wm)(s,{name:"heading",class:"text-danger h6"})]),(0,r._)("div",null,[(0,r.Wm)(o,{id:"details",name:"details",type:"text",placeholder:"Description Ex:- Owner of this Organization",class:"form-control"}),(0,r.Wm)(s,{name:"details",class:"text-danger h6"})]),(0,r._)("div",null,[(0,r.Wm)(o,{id:"specs",name:"specs",type:"text",placeholder:"Specification Ex:- Power-HP/500CC Petrol/Diesel",class:"form-control"}),(0,r.Wm)(s,{name:"specs",class:"text-danger h6"})]),(0,r._)("div",null,[(0,r.Wm)(o,{id:"image",name:"image",type:"text",placeholder:"Image Link Ex:- https://abc.com",class:"form-control"}),(0,r.Wm)(s,{name:"image",class:"text-danger h6"})]),(0,r._)("div",null,[(0,r.Wm)(o,{id:"price",name:"price",type:"number",placeholder:"Ex:- 123456 Only/-",class:"form-control"}),(0,r.Wm)(s,{name:"price",class:"text-danger h6"})]),F])),_:1},8,["onSubmit","validation-schema"])])])])])])])}var W=i(5708),E=i(6542),I={name:"NavigationBar",components:{Field:W.gN,Form:W.l0,ErrorMessage:W.Bc},props:{upcomingData:Object},methods:{onSubmit(e){alert(JSON.stringify(e,null,2)),console.log("form values: ",e),this.$emit("onFormSubmitHandler",JSON.stringify(e)),document.getElementById("close_add_model").click()}},setup(){const e=E.Ry().shape({heading:E.Z_().required("Car heading is Required!"),details:E.Z_().required("Car Description is Required!").min(30).max(120),specs:E.Z_().required("Car Specification is Required!").min(12).max(30),image:E.Z_().required("Car Image is Required!").url("Car Image must be url Format!"),price:E.Rx().required("Car Price is Required!")});return{schema:e}}};const S=(0,f.Z)(I,[["render",O]]);var q=S;const M={key:0,class:"model_form"},P={class:"modal-dialog"},A={class:"modal-content"},N={class:"modal-header"},R={class:"modal-title"},Z={class:"modal-body"},V=(0,r._)("button",{class:"btn btn-secondary me-3"},"Submit",-1),j={key:1};function B(e,a,i,t,n,l){const o=(0,r.up)("Field"),s=(0,r.up)("ErrorMessage"),c=(0,r.up)("Form");return(0,r.wg)(),(0,r.iD)("div",null,[i.formVisibility?((0,r.wg)(),(0,r.iD)("div",M,[(0,r._)("div",P,[(0,r._)("div",A,[(0,r._)("div",N,[(0,r._)("h5",R,"Update "+(0,d.zw)(i.sd.heading),1)]),(0,r._)("div",Z,[(0,r.Wm)(c,{onSubmit:l.onEditSubmit,"validation-schema":t.schema},{default:(0,r.w5)((()=>[(0,r._)("div",null,[(0,r.Wm)(o,{id:"heading",name:"heading",type:"text",placeholder:"Heading:- Ex:- Ambassador",class:"form-control",value:i.sd.heading},null,8,["value"]),(0,r.Wm)(s,{name:"heading",class:"text-danger h6"})]),(0,r._)("div",null,[(0,r.Wm)(o,{id:"details",name:"details",type:"text",placeholder:"Description Ex:- Owner of this Organization",class:"form-control",value:i.sd.details},null,8,["value"]),(0,r.Wm)(s,{name:"details",class:"text-danger h6"})]),(0,r._)("div",null,[(0,r.Wm)(o,{id:"specs",name:"specs",type:"text",placeholder:"Specification Ex:- Power-HP/500CC Petrol/Diesel",class:"form-control",value:i.sd.specs},null,8,["value"]),(0,r.Wm)(s,{name:"specs",class:"text-danger h6"})]),(0,r._)("div",null,[(0,r.Wm)(o,{id:"image",name:"image",type:"text",placeholder:"Image Link Ex:- https://abc.com",class:"form-control",value:i.sd.image},null,8,["value"]),(0,r.Wm)(s,{name:"image",class:"text-danger h6"})]),(0,r._)("div",null,[(0,r.Wm)(o,{id:"price",name:"price",type:"number",placeholder:"Ex:- 123456 Only/-",class:"form-control",value:i.sd.price},null,8,["value"]),(0,r.Wm)(s,{name:"price",class:"text-danger h6"})]),V,(0,r._)("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal",id:"closeModal",onClick:a[0]||(a[0]=(...e)=>l.closeClickHandler&&l.closeClickHandler(...e))}," Close ")])),_:1},8,["onSubmit","validation-schema"])])])])])):((0,r.wg)(),(0,r.iD)("div",j))])}var L={name:"CarForm",components:{Field:W.gN,Form:W.l0,ErrorMessage:W.Bc},props:{formVisibility:Boolean,sd:Object},data(){return{formHandler:!0}},computed:{showModel:{get:function(){return this.formHandler},set:function(e){return this.formHandler=e}}},methods:{closeClickHandler(){this.$emit("formHandlerData",this.formHandler=!1)},onEditSubmit(e){e.id=Math.floor(Date.now()*Math.random()),this.$emit("editedIteam",e),this.$emit("formHandlerData",this.formHandler=!1)}},setup(){const e=E.Ry().shape({heading:E.Z_().required("Car heading is Required!"),details:E.Z_().required("Car Description is Required!").min(30).max(500),specs:E.Z_().required("Car Specification is Required!").min(12).max(500),image:E.Z_().required("Car Image is Required!").url("Car Image must be url Format!")});return{schema:e}}};const G=(0,f.Z)(L,[["render",B]]);var z=G,T={name:"GalleryCard",components:{VehicalCard:b,NavigationBar:q,CarForm:z},data(){return{carsDetails:s,filteredData:null,editingIndex:null,showForm:null}},methods:{clickHandler(e,a){alert("Car Name: ",a,"\n","Price is: ",e)},deleteClickHandler(e){let a=this.carsDetails.findIndex((a=>a.id===e));this.carsDetails.splice(a,1)},saveFormdataHandler(e){this.carsDetails.push(JSON.parse(e))},vehicalEditClickHandler(e,a){let i=this.carsDetails.findIndex((a=>a.id===e));this.editingIndex=i,this.filteredData=this.carsDetails[i],this.showForm=a},editedClickHandler(e){this.carsDetails[this.editingIndex]=e},closeFormHandler(e){this.showForm=e}}};const $=(0,f.Z)(T,[["render",o],["__scopeId","data-v-478765f8"]]);var J=$,U={name:"App",components:{GalleryCard:J}};const Y=(0,f.Z)(U,[["render",n]]);var K=Y;i(7024);(0,t.ri)(K).mount("#app")}},a={};function i(t){var r=a[t];if(void 0!==r)return r.exports;var n=a[t]={id:t,loaded:!1,exports:{}};return e[t](n,n.exports,i),n.loaded=!0,n.exports}i.m=e,function(){var e=[];i.O=function(a,t,r,n){if(!t){var l=1/0;for(c=0;c<e.length;c++){t=e[c][0],r=e[c][1],n=e[c][2];for(var o=!0,s=0;s<t.length;s++)(!1&n||l>=n)&&Object.keys(i.O).every((function(e){return i.O[e](t[s])}))?t.splice(s--,1):(o=!1,n<l&&(l=n));if(o){e.splice(c--,1);var d=r();void 0!==d&&(a=d)}}return a}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[t,r,n]}}(),function(){i.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(a,{a:a}),a}}(),function(){i.d=function(e,a){for(var t in a)i.o(a,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};i.O.j=function(a){return 0===e[a]};var a=function(a,t){var r,n,l=t[0],o=t[1],s=t[2],d=0;if(l.some((function(a){return 0!==e[a]}))){for(r in o)i.o(o,r)&&(i.m[r]=o[r]);if(s)var c=s(i)}for(a&&a(t);d<l.length;d++)n=l[d],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(c)},t=self["webpackChunkprc1"]=self["webpackChunkprc1"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=i.O(void 0,[998],(function(){return i(4067)}));t=i.O(t)})();
//# sourceMappingURL=app.325373f2.js.map