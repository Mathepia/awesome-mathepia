"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2341],{3905:function(t,e,i){i.d(e,{Zo:function(){return u},kt:function(){return m}});var n=i(7294);function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e){if(null==t)return{};var i,n,a=function(t,e){if(null==t)return{};var i,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(a[i]=t[i]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}var p=n.createContext({}),f=function(t){var e=n.useContext(p),i=e;return t&&(i="function"==typeof t?t(e):o(o({},e),t)),i},u=function(t){var e=f(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var i=t.components,a=t.mdxType,r=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=f(i),m=a,h=s["".concat(p,".").concat(m)]||s[m]||c[m]||r;return i?n.createElement(h,o(o({ref:e},u),{},{components:i})):n.createElement(h,o({ref:e},u))}));function m(t,e){var i=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=i.length,o=new Array(r);o[0]=s;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var f=2;f<r;f++)o[f]=i[f];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}s.displayName="MDXCreateElement"},37:function(t,e,i){i.r(e),i.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return f},toc:function(){return c}});var n=i(7462),a=i(3366),r=(i(7294),i(3905)),o=["components"],l={sidebar_position:2},p=void 0,f={unversionedId:"AI4Science/autodiff",id:"AI4Science/autodiff",title:"autodiff",description:"Auto Differentiation",source:"@site/docs/AI4Science/autodiff.md",sourceDirName:"AI4Science",slug:"/AI4Science/autodiff",permalink:"/MathEpiDeepLearning/docs/AI4Science/autodiff",editUrl:"https://github.com/JuliaEpi/MathEpiDeepLearning/docs/AI4Science/autodiff.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"tensorcomputation",permalink:"/MathEpiDeepLearning/docs/AI4Science/tensorcomputation"},next:{title:"Integrals",permalink:"/MathEpiDeepLearning/docs/AI4Science/Integrals"}},u={},c=[{value:"Auto Differentiation",id:"auto-differentiation",level:2},{value:'<span id="head12">3.1.1. Auto Differentiation</span>',id:"311-auto-differentiation",level:3},{value:'<span id="head13">Auto Difference</span>',id:"auto-difference",level:4},{value:"Differential Optimization (Conditional gradients)",id:"differential-optimization-conditional-gradients",level:4},{value:"Subgradient, Condition, Projected, Proximal gradients",id:"subgradient-condition-projected-proximal-gradients",level:4},{value:"Derivatives of Special Functions",id:"derivatives-of-special-functions",level:4}],s={toc:c};function m(t){var e=t.components,i=(0,a.Z)(t,o);return(0,r.kt)("wrapper",(0,n.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"auto-differentiation"},"Auto Differentiation"),(0,r.kt)("h3",{id:"311-auto-differentiation"},(0,r.kt)("span",{id:"head12"},"3.1.1. Auto Differentiation")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/SciML/DiffEqSensitivity.jl"},"SciML/DiffEqSensitivity.jl: A component of the DiffEq ecosystem for enabling sensitivity analysis for scientific machine learning (SciML). Optimize-then-discretize, discretize-then-optimize, and more for ODEs, SDEs, DDEs, DAEs, etc.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/EnzymeAD/Enzyme.jl"},"EnzymeAD/Enzyme.jl: Julia bindings for the Enzyme automatic differentiator")),(0,r.kt)("p",null,"Julia:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/FluxML/Zygote.jl"},"FluxML/Zygote.jl: Intimate Affection Auditor")),(0,r.kt)("p",null,"JuliaDiffEqFlux organization"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/JuliaDiff"},"JuliaDiff")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/JuliaDiff/ForwardDiff.jl"},"JuliaDiff/ForwardDiff.jl: Forward Mode Automatic Differentiation for Julia")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/JuliaDiff/ReverseDiff.jl"},"JuliaDiff/ReverseDiff.jl: Reverse Mode Automatic Differentiation for Julia")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/JuliaDiff/AbstractDifferentiation.jl"},"JuliaDiff/AbstractDifferentiation.jl: An abstract interface for automatic differentiation.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/JuliaDiff/TaylorSeries.jl"},"JuliaDiff/TaylorSeries.jl: A julia package for Taylor polynomial expansions in one and several independent variables.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/kailaix/ADCME.jl"},"kailaix/ADCME.jl: Automatic Differentiation Library for Computational and Mathematical Engineering")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/chakravala/Leibniz.jl"},"chakravala/Leibniz.jl: Tensor algebra utility library")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/briochemc/F1Method.jl"},"briochemc/F1Method.jl: F-1 method")),(0,r.kt)("p",null,"Python:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/jax"},"google/jax: Composable transformations of Python+NumPy programs: differentiate, vectorize, JIT to GPU/TPU, and more")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/pytorch/pytorch"},"pytorch/pytorch: Tensors and Dynamic neural networks in Python with strong GPU acceleration")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/tensorflow/tensorflow"},"tensorflow/tensorflow: An Open Source Machine Learning Framework for Everyone")),(0,r.kt)("p",null,"Similar to SciMLSensitivity.jl",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AMICI-dev/AMICI"},"AMICI-dev/AMICI: Advanced Multilanguage Interface to CVODES and IDAS")),(0,r.kt)("h4",{id:"auto-difference"},(0,r.kt)("span",{id:"head13"},"Auto Difference")),(0,r.kt)("p",null,"Julia:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/SciML/DiffEqOperators.jl"},"SciML/DiffEqOperators.jl: Linear operators for discretizations of differential equations and scientific machine learning (SciML)")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QuantEcon/SimpleDifferentialOperators.jl"},"QuantEcon/SimpleDifferentialOperators.jl: Library for simple upwind finite differences")),(0,r.kt)("p",null,"Python:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/maroba/findiff"},"maroba/findiff: Python package for numerical derivatives and partial differential equations in any number of dimensions.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PyLops/pylops"},"PyLops/pylops: PyLops \u2013 A Linear-Operator Library for Python")),(0,r.kt)("h4",{id:"differential-optimization-conditional-gradients"},"Differential Optimization (Conditional gradients)"),(0,r.kt)("p",null,"Julia:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ZIB-IOL/FrankWolfe.jl"},"ZIB-IOL/FrankWolfe.jl: Julia implementation for various Frank-Wolfe and Conditional Gradient variants")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/jump-dev/DiffOpt.jl"},"jump-dev/DiffOpt.jl: Differentiating convex optimization programs w.r.t. program parameters")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/gdalle/ImplicitDifferentiation.jl"},"gdalle/ImplicitDifferentiation.jl: Automatic differentiation of implicit functions")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/matbesancon/MathOptSetDistances.jl"},"matbesancon/MathOptSetDistances.jl: Distances to sets for MathOptInterface")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/axelparmentier/InferOpt.jl"},"axelparmentier/InferOpt.jl: Combinatorial optimization layers for machine learning pipelines")),(0,r.kt)("p",null,"python:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/cvxgrp/cvxpylayers"},"cvxgrp/cvxpylayers: Differentiable convex optimization layers")),(0,r.kt)("h4",{id:"subgradient-condition-projected-proximal-gradients"},"Subgradient, Condition, Projected, Proximal gradients"),(0,r.kt)("p",null,"Julia:"),(0,r.kt)("p",null,"Proximal:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/JuliaFirstOrder/ProximalOperators.jl"},"JuliaFirstOrder/ProximalOperators.jl: Proximal operators for nonsmooth optimization in Julia")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/JuliaFirstOrder/ProximalAlgorithms.jl"},"JuliaFirstOrder/ProximalAlgorithms.jl: Proximal algorithms for nonsmooth optimization in Julia")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/JuliaSmoothOptimizers/ShiftedProximalOperators.jl"},"JuliaSmoothOptimizers/ShiftedProximalOperators.jl: Proximal operators for use with RegularizedOptimization")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://proximity-operator.net/scalarfunctions.html"},"Prox Repository")),(0,r.kt)("p",null,"Review",(0,r.kt)("a",{parentName:"p",href:"https://github.com/PyLops/pyproximal"},"PyLops/pyproximal: PyProximal \u2013 Proximal Operators and Algorithms in Python")),(0,r.kt)("p",null,"Condition Gradient:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ZIB-IOL/FrankWolfe.jl"},"ZIB-IOL/FrankWolfe.jl: Julia implementation for various Frank-Wolfe and Conditional Gradient variants")),(0,r.kt)("h4",{id:"derivatives-of-special-functions"},"Derivatives of Special Functions"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/cgeoga/BesselK.jl"},"cgeoga/BesselK.jl: An AD-compatible modified second-kind Bessel function.")))}m.isMDXComponent=!0}}]);