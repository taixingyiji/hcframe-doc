(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{481:function(s,e,t){"use strict";t.r(e);var n=t(388),i={props:{showData:{default:null}},data:()=>({}),mounted(){this.showData&&this.showBpmn(this.showData)},methods:{showBpmn(s){this.bpmnViewer&&this.bpmnViewer.destroy(),this.bpmnViewer=new n.a({container:this.$refs.showCanvas}),this.bpmnViewer.importXML(s,s=>{s?this.$message({message:"打开模型出错,请确认该模型符合Bpmn2.0规范",type:"error"}):this.bpmnViewer.get("canvas").zoom("fit-viewport","auto")})}}},a=t(12),o=Object(a.a)(i,(function(){return(0,this._self._c)("div",{ref:"showCanvas"})}),[],!1,null,null,null);e.default=o.exports}}]);