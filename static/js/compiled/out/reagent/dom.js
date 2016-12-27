// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__44180__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__44180__auto__)){
return or__44180__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_45927 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_45927){
return (function (){
var _STAR_always_update_STAR_45928 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_45928;
}});})(_STAR_always_update_STAR_45927))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_45927;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args45929 = [];
var len__45255__auto___45932 = arguments.length;
var i__45256__auto___45933 = (0);
while(true){
if((i__45256__auto___45933 < len__45255__auto___45932)){
args45929.push((arguments[i__45256__auto___45933]));

var G__45934 = (i__45256__auto___45933 + (1));
i__45256__auto___45933 = G__45934;
continue;
} else {
}
break;
}

var G__45931 = args45929.length;
switch (G__45931) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45929.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__45940_45944 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__45941_45945 = null;
var count__45942_45946 = (0);
var i__45943_45947 = (0);
while(true){
if((i__45943_45947 < count__45942_45946)){
var v_45948 = cljs.core._nth.call(null,chunk__45941_45945,i__45943_45947);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_45948);

var G__45949 = seq__45940_45944;
var G__45950 = chunk__45941_45945;
var G__45951 = count__45942_45946;
var G__45952 = (i__45943_45947 + (1));
seq__45940_45944 = G__45949;
chunk__45941_45945 = G__45950;
count__45942_45946 = G__45951;
i__45943_45947 = G__45952;
continue;
} else {
var temp__4657__auto___45953 = cljs.core.seq.call(null,seq__45940_45944);
if(temp__4657__auto___45953){
var seq__45940_45954__$1 = temp__4657__auto___45953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45940_45954__$1)){
var c__44991__auto___45955 = cljs.core.chunk_first.call(null,seq__45940_45954__$1);
var G__45956 = cljs.core.chunk_rest.call(null,seq__45940_45954__$1);
var G__45957 = c__44991__auto___45955;
var G__45958 = cljs.core.count.call(null,c__44991__auto___45955);
var G__45959 = (0);
seq__45940_45944 = G__45956;
chunk__45941_45945 = G__45957;
count__45942_45946 = G__45958;
i__45943_45947 = G__45959;
continue;
} else {
var v_45960 = cljs.core.first.call(null,seq__45940_45954__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_45960);

var G__45961 = cljs.core.next.call(null,seq__45940_45954__$1);
var G__45962 = null;
var G__45963 = (0);
var G__45964 = (0);
seq__45940_45944 = G__45961;
chunk__45941_45945 = G__45962;
count__45942_45946 = G__45963;
i__45943_45947 = G__45964;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1482058324142